import { WHY_US } from '../data/company'
import { Icon, Section, SectionHeading, WhatsAppButton } from './ui'
import { ENQUIRY_TYPES } from '../utils/whatsapp'

/**
 * "Why choose CITO Surgicare" — a structured navy band that summarises the
 * verified strengths of the business. No awards, statistics or reviews are
 * invented here; only facts from the business brief.
 */
export default function WhyUs() {
  return (
    <Section id="why-us" tone="navy">
      <SectionHeading
        onDark
        eyebrow="Why CITO Surgicare"
        title="Why choose CITO Surgicare"
        subtitle="Sales, rentals, service and in-house furniture manufacturing — one point of contact for medical equipment in Hyderabad."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/15 bg-white/5 p-6"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-navy-dark">
              <Icon name="Check" className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-4 text-base font-bold leading-snug text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-6 sm:flex-row">
        <div>
          <h3 className="text-base font-bold text-white sm:text-lg">
            Ready to enquire?
          </h3>
          <p className="mt-1 text-sm text-white/80">
            Message our team on WhatsApp with your requirement — we will reply
            with the details.
          </p>
        </div>
        <WhatsAppButton
          enquiry={{
            type: ENQUIRY_TYPES.GENERAL,
            message: 'I would like to enquire about your medical equipment and services.',
          }}
          label="Talk to Our Team"
          variant="solid"
        />
      </div>
    </Section>
  )
}