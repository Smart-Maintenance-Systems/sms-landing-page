import { Link } from 'react-router-dom';
import { Ship, ArrowRight, ChevronRight, Scale } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Screenshot from '../components/Screenshot';

// SMS Workboat SIGNPOST (REVISION 1). This company site is SMS BRIDGE-led; SMS Workboat is our live product with
// its OWN site (smsworkboat.co.uk). The nav/footer link straight out; this route stays only as a graceful
// landing for any lingering internal link, and immediately points visitors to the live product + demo.
// 🟥 Claim leash held: "builds your SMS", never "MCA-approved/certified/guaranteed compliant".
const WB_SITE = 'https://smsworkboat.co.uk';
const WB_DEMO = 'https://demo.smsworkboat.co.uk/workboat-demo';

export default function LightPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-status-success/5 to-surface-0" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-status-success/10 border border-status-success/20 rounded-full text-sm text-status-success mb-6">
              <Scale className="w-4 h-4" />
              Workboat Code Edition 3 · live now
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
              SMS Workboat has its own home.
            </h1>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              SMS Workboat is our live product for small commercial workboats under 24m — it builds the Safety
              Management System the Workboat Code requires and keeps every record ready for the day the surveyor
              steps aboard. £29 a month per boat, everything included. It lives on its own site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href={WB_SITE} target="_blank" rel="noopener noreferrer" className="btn-light text-base px-8 py-4">
                Visit smsworkboat.co.uk
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href={WB_DEMO} target="_blank" rel="noopener noreferrer" className="btn-secondary border-status-success/30 text-status-success hover:bg-status-success/10 text-base px-8 py-4">
                See the live demo
              </a>
            </div>

            <Link to="/platform" className="inline-flex items-center gap-2 text-sm text-accent-violet hover:opacity-80 transition-opacity">
              <ChevronRight className="w-4 h-4" />
              Running a fleet? Explore SMS Bridge — the full platform
            </Link>
          </div>

          {/* Proof screenshot */}
          <ScrollReveal direction="right" className="flex justify-center">
            <Screenshot
              src="/screens/kestrel-dashboard.jpg"
              alt="MV Guardian's dashboard in SMS Workboat"
              caption="A real boat's SMS, built from the records you keep — try it in the live demo."
              aspect="phone"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
