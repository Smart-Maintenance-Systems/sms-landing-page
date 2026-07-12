import { Link } from 'react-router-dom';
import { Camera, FileText, ClipboardCheck, ChevronRight } from 'lucide-react';
import Screenshot from '../components/Screenshot';
import { TRIAL_HREF } from '../config';

/**
 * How it works — the product's real phases in owner language (design §3): CAPTURE → AUTHOR → ASSESS.
 * Real screens only.
 */
const STEPS = [
  {
    n: 1,
    icon: Camera,
    title: 'Capture',
    plain: 'Photograph what you already have.',
    body: 'Snap your certificates and your boat — Nova reads the details off the picture so you just confirm them. Photograph a fix and the evidence writes itself around it.',
    shot: '/screens/cert-1.png',
    alt: 'Capturing a certificate',
  },
  {
    n: 2,
    icon: FileText,
    title: 'Author',
    plain: 'Your documents write themselves from templates.',
    body: 'Risk assessments, policies and the maintenance programme start from Workboat-Code templates. You edit and confirm — you don’t start from a blank page.',
    shot: '/screens/ra-2.png',
    alt: 'Authoring a risk assessment',
  },
  {
    n: 3,
    icon: ClipboardCheck,
    title: 'Assess',
    plain: 'Sign your self-assessment.',
    body: 'The records you keep produce your annual self-assessment — ready to sign, with the inspection pack assembled any day you need it.',
    shot: '/screens/person-ashore-2.png',
    alt: 'The self-assessment',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">From nothing to a working SMS in an afternoon</h1>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">On your phone, on your boat. Three steps: capture what you have, let it author your documents, then sign your self-assessment.</p>
        </div>

        <div className="mt-14 space-y-16">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-primary"><s.icon className="w-5 h-5" /></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Step {s.n}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-text-primary">{s.title}</h2>
                <p className="mt-1 text-lg text-brand-primary">{s.plain}</p>
                <p className="mt-3 text-text-secondary leading-relaxed">{s.body}</p>
              </div>
              <Screenshot src={s.shot} alt={s.alt} aspect="phone" className="justify-self-center" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={TRIAL_HREF} className="btn-primary justify-center">Start free trial <ChevronRight className="w-4 h-4" /></Link>
          <Link to="/code" className="btn-secondary justify-center">What the Code requires</Link>
        </div>
      </div>
    </div>
  );
}
