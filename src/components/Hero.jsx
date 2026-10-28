import { ArrowRight, Phone, MapPin } from 'lucide-react'
import { COMPANY } from '../data/company'
import { WhatsAppButton } from './ui'
import { ENQUIRY_TYPES } from '../utils/whatsapp'

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="border-b border-line bg-white">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* LEFT — copy */}
        <div className="text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/10 px-3.5 py-1.5 text-xs font-semibold text-navy ring-1 ring-navy/30">
            <MapPin className="h-3.5 w-3.5 text-navy" aria-hidden="true" />
            Nizampet, Hyderabad
          </span>

          <h1 className="mt-5 text-[1.85rem] font-bold leading-[1.15] tracking-tight text-navy sm:text-[2.4rem] lg:text-[2.9rem]">
            Medical Equipment & Healthcare Solutions
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink sm:text-[16px]">
            Explore medical equipment for purchase and rental, along with hospital
            furniture solutions from CITO Surgicare, Hyderabad.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <WhatsAppButton
              enquiry={{
                type: ENQUIRY_TYPES.GENERAL,
                message: 'I would like to know more about your products and services.',
              }}
              label="Enquire on WhatsApp"
              variant="solid"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={COMPANY.phone1Link}
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-dark"
            >
              <Phone className="h-4 w-4 text-navy" aria-hidden="true" />
              {COMPANY.phone1}
            </a>
            <a
              href={COMPANY.phone2Link}
              className="inline-flex items-center gap-2 font-semibold text-navy hover:text-navy-dark"
            >
              <Phone className="h-4 w-4 text-navy" aria-hidden="true" />
              {COMPANY.phone2}
            </a>
          </div>
        </div>

        {/* RIGHT — single hero image */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-xl border border-line bg-white p-3 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-soft">
              <img
                src="/images/brochure/page-10/page-10-item-07.png"
                alt="CPAP / BiPAP machine supplied by CITO Surgicare"
                width="400"
                height="300"
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}