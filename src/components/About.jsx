import { CATEGORIES, COMPANY, SERVICES } from '../data/company'
import { Icon, Section, SectionHeading } from './ui'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'

// The four core activities of the business, drawn from the verified
// services list — no history or certifications are invented.
const CORE_ACTIVITY_IDS = [
  'service-sales',
  'service-rentals',
  'service-repair',
  'service-manufacturing',
]
const CORE_ACTIVITIES = SERVICES.filter((s) => CORE_ACTIVITY_IDS.includes(s.id))

export default function About() {
  return (
    <Section id="about" tone="light">
      <SectionHeading
        eyebrow="About"
        title="About CITO Surgicare"
        subtitle="A Hyderabad based supplier and manufacturer working across medical equipment sales, rentals, service and hospital furniture."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5 text-base leading-relaxed text-ink">
          <p>
            CITO Surgicare supplies medical equipment for homes, clinics and hospitals,
            and manufactures hospital furniture from our unit in Hyderabad.
          </p>
          <p>
            Our work covers four areas — <strong className="text-navy">sales</strong> of
            medical equipment, <strong className="text-navy">rentals</strong> for
            short-term and long-term requirements,{' '}
            <strong className="text-navy">service</strong> support for equipment, and{' '}
            <strong className="text-navy">manufacturing</strong> of hospital furniture.
          </p>
          <p>
            Customers can enquire about any product or service directly on WhatsApp. Our
            team responds with the details you need to make a decision.
          </p>

          <div className="rounded-xl border border-line bg-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-strong">
              Get in touch
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{COMPANY.address}</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-navy">
              <a href={COMPANY.phone1Link} className="hover:text-brand-strong">
                {COMPANY.phone1}
              </a>
              <a href={COMPANY.phone2Link} className="hover:text-brand-strong">
                {COMPANY.phone2}
              </a>
              <a href={COMPANY.emailLink} className="hover:text-brand-strong">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_ACTIVITIES.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-line bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-tint text-brand-strong">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-navy">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-navy">
              Product categories we deal in
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className="rounded-full border border-line bg-soft px-3 py-1 text-xs font-medium text-navy"
                >
                  {cat}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl({
                type: ENQUIRY_TYPES.GENERAL,
                message: 'I would like to know more about CITO Surgicare.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-strong px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-brand-dark"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}