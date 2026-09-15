"""W-695 derivation: re-extract every Code / MGN 710 quotation the site shows or will show.

Reads the PDFs in sms-platform-workboat/BUILD_STAGES/WB3-CODE-PDFS with PyMuPDF, collapses whitespace,
prints the SHA-256 of each PDF, the clause context, and whether each site passage is found verbatim.
Run: python scripts/_evidence/w695_extract_quotes.py
"""
import hashlib
import re
import fitz

PDF_DIR = "C:/SMS/Projects/repos/sms-platform-workboat/BUILD_STAGES/WB3-CODE-PDFS/"
PDFS = {
    "WBC": "Workboat_Code_Edition_3.pdf",
    "M710": "MGN 710 (M) safety management systems for small workboats and pilot boats - GOV.UK.pdf",
}


def norm(s: str) -> str:
    s = s.replace("\u00ad", "")
    return re.sub(r"\s+", " ", s).strip()


TEXT = {}
for key, name in PDFS.items():
    path = PDF_DIR + name
    with open(path, "rb") as fh:
        print(f"{key}: {name}  sha256={hashlib.sha256(fh.read()).hexdigest()}")
    doc = fitz.open(path)
    TEXT[key] = norm(" ".join(page.get_text() for page in doc))

# (label, source, passage exactly as the site shows / will show it, without surrounding quote marks or ellipses)
CHECKS = [
    ("WEB-10 home §1.2 fragment", "M710", "proportionate to the size, complexity and risk profile of their operations"),
    ("WEB-10 old closing full stop", "M710", "proportionate to the size, complexity and risk profile of their operations."),
    ("home §1.2b (unchanged)", "M710", "practical and effective without being unnecessarily burdensome."),
    ("home §3.8 (unchanged)", "M710", "specific items in the assessment may reflect ongoing development, as full implementation of all the necessary systems is underway."),
    ("WEB-11 / home §4.3 sentence", "M710", "Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS."),
    ("WEB-30 §4.3 four sentences", "M710", "Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS. Instead, sampling verifies that the demonstration accurately reflects implementation in practice. The CA\u2019s sample, when based on a self-assessment, should focus on items explicitly referenced in the self-assessment. Some items may require brief follow-up, such as asking how a response was determined or viewing simple supporting evidence."),
    ("WEB-23 §31.1.1", "WBC", "All vessels, excluding Remotely Operated Unmanned Vessels, certificated under this Code shall, 3 years after the Code comes into force, comply with the requirements of sections 31.2 and 31.3."),
    ("WEB-23 §31.2.1", "WBC", "All vessel owner(s)/operator(s) operating under this Code shall implement a Safety Management System (SMS) which is proportionate with the size and complexity of the vessels and the company or owner/operator\u2019s operations."),
    ("WEB-25/27 App 8 §6.1", "WBC", "The vessel owner/operator shall, in relation to each vessel owned by it or for which it has operational responsibility, designate a person ashore who shall be responsible for monitoring the safe operation of the vessel and, so far as it may affect safety, the efficient operation of the vessel."),
    ("WEB-24 App 8 §7.1 first sentence", "WBC", "All personnel shall receive training appropriate to the tasks they undertake."),
    ("WEB-24 App 8 §7.2 first sentence", "WBC", "Prior to the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and proper instruction in on board procedures."),
    ("WEB-24 old card as ONE passage", "WBC", "All personnel shall receive training appropriate to the tasks they undertake. Prior to the first occasion of working on the vessel, each worker must receive appropriate familiarisation training and proper instruction in on board procedures."),
    ("WEB-25 App 8 §10.5 card", "WBC", "Exercises shall be carried out in the handling of the identified emergency situations and evacuation from the vessel. The exercises shall be recorded. The names of those who participated shall also be recorded."),
    ("WEB-25 App 8 §12.2 card", "WBC", "The vessel owner/operator shall develop documented procedures for a more detailed inspection and maintenance program for the vessel and its equipment. The frequency of the required inspection and maintenance shall be determined by the vessel owner/operator. All inspections and maintenance activities shall be recorded."),
    ("Code page App 8 §1.1 lead (unchanged)", "WBC", "A Safety Management System shall include the following:"),
    # The four-sentence §4.3 passage is NOT FOUND as one run because the PDF (a GOV.UK browser print) puts a
    # page-break header inside the third sentence. Check the text either side of the break, and print the break.
    ("WEB-30 §4.3 before the page break", "M710", "Sampling is intended to be brief and focused; it does not assess the effectiveness of the SMS. Instead, sampling verifies that the demonstration accurately reflects implementation in practice. The CA’s sample, when"),
    ("WEB-30 §4.3 after the page break", "M710", "based on a self-assessment, should focus on items explicitly referenced in the self-assessment. Some items may require brief follow-up, such as asking how a response was determined or viewing simple supporting evidence."),
]

print()
for label, src, passage in CHECKS:
    t = TEXT[src]
    p = norm(passage)
    i = t.find(p)
    print(f"[{'FOUND' if i >= 0 else 'NOT FOUND'}] {label} ({src})")
    print(f"    site passage: {p}")
    if i >= 0:
        print(f"    PDF context : ...{t[max(0, i - 160):i]}<<{p}>>{t[i + len(p):i + len(p) + 80]}...")
    print()

# clause-number context, so each cite is read from the PDF and not assumed
for label, src, anchor in [
    ("§4.3 number", "M710", "Sampling is intended to be brief"),
    ("§1.2 number", "M710", "All vessels certificated under WB3"),
    ("§31.1.1 number", "WBC", "All vessels, excluding Remotely Operated"),
    ("§31.2.1 number", "WBC", "All vessel owner(s)/operator(s) operating under this Code shall implement"),
    ("App 8 §6.1 number", "WBC", "The vessel owner/operator shall, in relation to each vessel owned"),
    ("App 8 §7.1 / §7.2 numbers", "WBC", "All personnel shall receive training appropriate"),
    ("App 8 §10.5 number", "WBC", "Exercises shall be carried out in the handling"),
    ("App 8 §12.2 number", "WBC", "The vessel owner/operator shall develop documented procedures for a more detailed"),
    ("§4.3 page break", "M710", "The CA’s sample, when"),
    ("MGN 710 issuer (document head)", "M710", "MGN 710 (M)"),
    ("MGN 710 issuer (More information)", "M710", "Maritime and Coastguard Agency"),
]:
    t = TEXT[src]
    i = t.find(anchor)
    print(f"[CONTEXT] {label}: ...{t[max(0, i - 120):i + 260] if i >= 0 else 'ANCHOR NOT FOUND'}...")
    print()

# The whole §4.3 page-break artefact, so a reader can see that only the browser-print header/footer sits
# between "when" and "based" (no guidance words are skipped).
t = TEXT["M710"]
i = t.find("The CA’s sample, when")
j = t.find("based on a self-assessment, should focus")
print(f"[BREAK] §4.3 'when' at {i}, 'based' at {j}, in order={j > i}:")
print(f"    {t[i:j + len('based on a self-assessment, should focus')]}")
