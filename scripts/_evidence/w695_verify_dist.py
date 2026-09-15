"""W-695 proof: read the PRERENDERED pages in dist/ (as a crawler or a first paint sees them), and check
(1) old claim phrases are gone, (2) new words are present, (3) the W-679 Nova line is still there, and
(4) every Code / MGN 710 quotation the changed rows show is on the page AND verbatim in the PDF.
Run after `npm run build`: python scripts/_evidence/w695_verify_dist.py
"""
import html
import re
import sys
import fitz

PDF_DIR = "C:/SMS/Projects/repos/sms-platform-workboat/BUILD_STAGES/WB3-CODE-PDFS/"


def norm(s: str) -> str:
    return re.sub(r"\s+", " ", s.replace("\u00ad", "")).strip()


def page(route: str) -> str:
    path = "dist/index.html" if route == "/" else f"dist{route}/index.html"
    raw = open(path, encoding="utf-8").read()
    return norm(html.unescape(re.sub(r"<[^>]+>", " ", raw)) + " " + html.unescape(raw))


PDF = {
    "WBC": norm(" ".join(p.get_text() for p in fitz.open(PDF_DIR + "Workboat_Code_Edition_3.pdf"))),
    "M710": norm(" ".join(p.get_text() for p in fitz.open(
        PDF_DIR + "MGN 710 (M) safety management systems for small workboats and pilot boats - GOV.UK.pdf"))),
}
# the GOV.UK print header/footer that splits §4.3 in the PDF text layer (see w695-extract-quotes-output.txt [BREAK])
M710_NO_BREAKS = re.sub(r" \d\d/\d\d/\d{4}, \d\d:\d\d MGN 710 \(M\) .*? - GOV\.UK https://\S+ \d+/\d+", "", PDF["M710"])

fails = 0


def check(ok: bool, msg: str) -> None:
    global fails
    print(f"[{'PASS' if ok else 'FAIL'}] {msg}")
    fails += 0 if ok else 1


OLD = {
    "/": ["builds yours", "measured against", "their operations.\u201d", "doesn\u2019t even assess that", "is enough. So start today",
          "surveyor could trust", "exactly what they sample", "hand over your self-assessment", "exactly where you stand",
          "one your surveyor can trust", "computed live", "don\u2019t pretend", "Produced from your records",
          "Ready any day of the year", "simplest way to have one"],
    "/how-it-works": ["working SMS in an afternoon", "nothing to an SMS", "ready to sign"],
    "/pricing": ["ready to sign", "ready any day of the year", "keeps the inspection pack ready", "Produces your annual"],
    "/code": ["Appendix 8, section 7<", "record to prove it", "Appendix 8, section 6<", "Appendix 8, section 10<", "Appendix 8, section 12<"],
    "/faq": ["Designated Person Ashore", "against those names", "append-only", "reviews your SMS", "ready any day",
             "working SMS in an afternoon", "record to prove it", "set out in the Code itself. (Workboat Code Edition 3, Appendix 8, section 1.1.)", "section 7.)"],
    "/about": ["compliance headaches it fixes", "working SMS in an afternoon"],
}
NEW = {
    "/": ["helps you set yours up and keeps its records in one place for the day the surveyor steps aboard.",
          "straight from the MCA\u2019s own guidance, MGN 710:", "risk profile of their operations\u2026\u201d",
          "No quiz can tell you your SMS is compliant. What counts", "Started and honest is the right place to begin. So start today.",
          "designed to be honest and to take the proportionate approach MGN 710 describes.",
          "When something needs a look, it says so.", "Your records, laid out the way a surveyor samples them.",
          "there\u2019s no last-minute scramble and no separate folder to build.", "What I can do is show you what your records say.",
          "so you and your surveyor can see it hasn\u2019t changed since it was signed.",
          "certificates, maintenance, risk assessments and drills, read from your records as they stand.",
          "Pre-filled from your records. You check every answer and sign.", "Your inspection records, together in one place.",
          "Get your SMS set up in an afternoon, on your phone."],
    "/how-it-works": ["Get your SMS set up in an afternoon", "How SMS Workboat works - get your SMS set up in an afternoon",
                      "Your annual self-assessment is pre-filled from the records you keep. You check every answer and sign"],
    "/pricing": ["Pre-filled from your records. You check every answer and sign.", "Your inspection records, together in one place.",
                 "Pre-fills your annual self-assessment from your records for you to check and sign",
                 "pulls your inspection records together when you need them."],
    "/code": ["Workboat Code Edition 3, Appendix 8, section 6.1", "Workboat Code Edition 3, Appendix 8, sections 7.1 and 7.2",
              "Workboat Code Edition 3, Appendix 8, section 10.5", "Workboat Code Edition 3, Appendix 8, section 12.2",
              "a home for each of these - and a place to keep its records."],
    "/faq": ["What is the person ashore?", "Workboat Code Edition 3, sections 31.1.1 and 31.2.1",
             "Workboat Code Edition 3, Appendix 8, section 6.1", "Workboat Code Edition 3, Appendix 8, section 7.2",
             "Workboat Code Edition 3, Appendix 8, section 10.5", "Workboat Code Edition 3, Appendix 8, section 12.2",
             "MGN 710 (M), section 4.3", "set out in the Code itself. (Workboat Code Edition 3, sections 31.1.1 and 31.2.1.)", "SMS Workboat lets you record who took part in each drill.",
             "keeps a record of each job done.", "a home and a place to keep its records.",
             "SMS Workboat lets you pull your inspection records together when you need them",
             "and pull your inspection records together when you need them.", "Get your SMS set up in an afternoon, on your phone."],
    "/about": ["between jobs at sea, for less time fighting the paperwork. The headaches it takes on are ones we live with",
               "built for that person: get your SMS set up in an afternoon, the depth kept under the hood."],
}

# (route, source, the passage as the page shows it between its quote marks / ellipses)
QUOTES = [
    ("/", "M710", "proportionate to the size, complexity and risk profile of their operations"),
    ("/code", "WBC", "All personnel shall receive training appropriate to the tasks they undertake."),
    ("/code", "WBC", "Prior to the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and proper instruction in on board procedures."),
    ("/code", "WBC", "The vessel owner/operator shall, in relation to each vessel owned by it or for which it has operational responsibility, designate a person ashore who shall be responsible for monitoring the safe operation of the vessel and, so far as it may affect safety, the efficient operation of the vessel."),
    ("/code", "WBC", "Exercises shall be carried out in the handling of the identified emergency situations and evacuation from the vessel. The exercises shall be recorded. The names of those who participated shall also be recorded."),
    ("/code", "WBC", "The vessel owner/operator shall develop documented procedures for a more detailed inspection and maintenance program for the vessel and its equipment. The frequency of the required inspection and maintenance shall be determined by the vessel owner/operator. All inspections and maintenance activities shall be recorded."),
    ("/faq", "WBC", "The vessel owner/operator shall, in relation to each vessel owned by it or for which it has operational responsibility, designate a person ashore who shall be responsible for monitoring the safe operation of the vessel and, so far as it may affect safety, the efficient operation of the vessel."),
    ("/faq", "M710", "Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS. Instead, sampling verifies that the demonstration accurately reflects implementation in practice. The CA\u2019s sample, when based on a self-assessment, should focus on items explicitly referenced in the self-assessment. Some items may require brief follow-up, such as asking how a response was determined or viewing simple supporting evidence."),
]

for route, phrases in OLD.items():
    text = page(route)
    for p in phrases:
        check(p not in text, f"{route} OLD gone: {p!r}")
for route, phrases in NEW.items():
    text = page(route)
    for p in phrases:
        check(p in text, f"{route} NEW present: {p!r}")
for route in ["/", "/how-it-works", "/pricing", "/code", "/faq", "/about"]:
    text = page(route)
    check("Nova handles the paperwork, you handle the boat." in text and "Nova handles the compliance" not in text,
          f"{route} W-679 Nova line present (footer), old line absent")
for route, src, q in QUOTES:
    on_page = norm(q) in page(route)
    in_pdf = norm(q) in (M710_NO_BREAKS if src == "M710" else PDF[src])
    check(on_page and in_pdf, f"{route} quote on page={on_page} verbatim in {src} PDF={in_pdf}: {q[:70]}…")
# the old WEB-24 joined passage must not be quoted as one run any more
check("undertake. Prior to the first" not in page("/code"), "/code WEB-24 joined passage gone (ellipsis present)")

print(f"\n{fails} FAIL(s)")
sys.exit(1 if fails else 0)
