import { COMPANY, SERVICES } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { Icon, Section, SectionHeading } from './ui'

/**
 * Consolidated trust section — merges About, Why Choose Us and key service
 * capabilities into one concise section. No invented statistics or claims.
 */
export default function Trust() {
  return (
    <Section id="trust" tone="light" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="About CITO Surgicare"
          title="Trusted Medical Equipment Partner"
          subtitle="Hyderabad based supplier and manufacturer of medical equipment sales, rentals, service and hospital furniture."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Core capabilities */}
          <div className="space-y-4">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-navy">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Business facts */}
          <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
              Business Details
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-navy">
                  <span className="text-[10px]">📍</span>
                </span>
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-navy">
                  <span className="text-[10px]">📞</span>
                </span>
                <span className="leading-relaxed">
                  {COMPANY.phone1} · {COMPANY.phone2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-navy">
                  <span className="text-[10px]">✉️</span>
                </span>
                <span className="leading-relaxed break-all">{COMPANY.email}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-base font-bold text-navy mb-2">
              Ready to enquire?
            </h3>
            <p className="mt-1 text-sm text-muted mb-4 max-w-xs">
              Message our team on WhatsApp with your requirement — we will reply
              with the details.
            </p>
            <a
              href={getWhatsAppUrl({
                type: ENQUIRY_TYPES.GENERAL,
                message: 'I would like to enquire about your medical equipment and services.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}