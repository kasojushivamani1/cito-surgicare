import { SERVICES } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { Icon, Section, SectionHeading } from './ui'

// Each service gets the enquiry type that matches what the customer wants.
const ENQUIRY_TYPE_BY_SERVICE = {
  'service-sales': ENQUIRY_TYPES.PURCHASE,
  'service-rentals': ENQUIRY_TYPES.RENTAL,
  'service-repair': ENQUIRY_TYPES.SERVICE,
  'service-manufacturing': ENQUIRY_TYPES.QUOTATION,
  'service-bulk': ENQUIRY_TYPES.BULK,
  'service-guidance': ENQUIRY_TYPES.GENERAL,
}

export default function Services() {
  return (
    <Section id="services" tone="soft">
      <SectionHeading
        eyebrow="Services"
        title="Sales, Service & Support"
        subtitle="From purchase to after-sales service, CITO Surgicare supports your equipment through its life."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow duration-150 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-tint text-brand-strong">
              <Icon name={service.icon} className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-4 text-base font-bold leading-snug text-navy">
              {service.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <a
              href={getWhatsAppUrl({
                type: ENQUIRY_TYPE_BY_SERVICE[service.id] || ENQUIRY_TYPES.GENERAL,
                item: service.name,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white"
            >
              Enquire about this service
            </a>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-6 shadow-sm sm:flex-row">
        <div>
          <h3 className="text-base font-bold text-navy sm:text-lg">
            Looking for something specific?
          </h3>
          <p className="mt-1 text-sm text-muted">
            Send us your requirement and our team will respond on WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={getWhatsAppUrl({
              type: ENQUIRY_TYPES.SERVICE,
              item: 'Service & repair of medical equipment',
              message: 'I need service support for my equipment.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-strong px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-brand-dark"
          >
            Request Service
          </a>
          <a
            href={getWhatsAppUrl({
              type: ENQUIRY_TYPES.BULK,
              item: 'Equipment for institutional requirement',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white"
          >
            Bulk Quotation
          </a>
        </div>
      </div>
    </Section>
  )
}