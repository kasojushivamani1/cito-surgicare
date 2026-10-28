import { CalendarClock, CheckCircle2 } from 'lucide-react'
import { RENTAL_ITEMS } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { ProductImage, Section, SectionHeading } from './ui'

const POINTS = [
  'Short-term and long-term rental requirements',
  'Equipment for home care and recovery',
  'Enquire about availability on WhatsApp',
  'Rental service and support coordinated by our team',
]

export default function Rentals() {
  return (
    <Section id="rentals" tone="light" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Rentals"
          title="Medical Equipment on Rent"
          subtitle="Rent medical equipment for home care and short-term needs without the full purchase commitment."
        />

        <ul className="space-y-3">
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-relaxed text-ink"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-navy-strong"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-7 rounded-xl border border-line bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
              <CalendarClock className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-navy">
              Ask about rental terms and availability
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Tell us the equipment, duration and location — our team will respond on
            WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl({
              type: ENQUIRY_TYPES.RENTAL,
              item: 'Medical equipment rental',
              message: 'Please share rental details and availability.',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark"
          >
            Enquire about Rentals
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RENTAL_ITEMS.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow duration-150 hover:shadow-md"
          >
            <ProductImage
              src={item.image}
              alt={item.name}
              icon={item.icon}
              height="h-44"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-snug text-navy">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <a
                href={getWhatsAppUrl({
                  type: ENQUIRY_TYPES.RENTAL,
                  item: item.name,
                  message:
                    'Please share rental duration options, location details and availability for this equipment.',
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white"
              >
                Request Rental
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}