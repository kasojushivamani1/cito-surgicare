import { FURNITURE_ITEMS } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { ProductImage, Section, SectionHeading } from './ui'

export default function Furniture() {
  return (
    <Section id="furniture" tone="light" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Manufacturing"
          title="Hospital Furniture Manufacturing"
          subtitle="We manufacture hospital furniture for clinics, hospitals and care facilities from our Hyderabad unit."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FURNITURE_ITEMS.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow duration-150 hover:shadow-md"
            >
              <ProductImage
                src={item.image}
                alt={item.name}
                icon={item.icon}
                height="h-44"
              />
              <p className="px-4 py-3.5 text-center text-sm font-semibold text-navy">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Manufacturing process */}
        <div className="mt-8 rounded-2xl border border-line bg-soft px-5 py-8 sm:px-8">
          <h3 className="text-center text-lg font-bold text-navy sm:text-xl">
            How our manufacturing process works
          </h3>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Process steps would go here */}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-6 shadow-sm sm:flex-row">
          <div>
            <h3 className="text-base font-bold text-navy sm:text-lg">
              Custom furniture requirement?
            </h3>
            <p className="mt-1 text-sm text-muted">
              Send the details and quantity for a manufacturing quotation.
            </p>
          </div>
          <a
            href={getWhatsAppUrl({
              type: ENQUIRY_TYPES.QUOTATION,
              item: 'Hospital furniture (manufacturing)',
              category: 'Hospital Furniture',
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark"
          >
            Request Furniture Quotation
          </a>
        </div>
      </div>
    </Section>
  )
}