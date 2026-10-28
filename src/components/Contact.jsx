import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { COMPANY, PRODUCTS, SERVICES } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { Section, SectionHeading } from './ui'

const ENQUIRY_OPTIONS = [
  ENQUIRY_TYPES.PURCHASE,
  ENQUIRY_TYPES.QUOTATION,
  ENQUIRY_TYPES.RENTAL,
  ENQUIRY_TYPES.SERVICE,
  ENQUIRY_TYPES.BULK,
  ENQUIRY_TYPES.GENERAL,
]

const EMPTY = {
  name: '',
  phone: '',
  type: ENQUIRY_TYPES.PURCHASE,
  item: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((err) => ({ ...err, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    else if (!/^[0-9+\s()-]{7,20}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.'
    if (!form.message.trim()) next.message = 'Please tell us your requirement.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Opens WhatsApp with a URL-encoded message; the customer presses Send.
    const url = getWhatsAppUrl({
      type: form.type,
      item: form.item.trim(),
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // Focus outline comes from the global :focus-visible rule so keyboard
  // users always get a visible indicator.
  const fieldClass = (hasError) =>
    `w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 ${
      hasError ? 'border-red-400' : 'border-line focus:border-navy'
    }`

  return (
    <Section id="contact" tone="light" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Send your requirement and our team will respond on WhatsApp. You can also call or email us directly."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <a
              href={COMPANY.phone1Link}
              className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-navy"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                  Call us
                </span>
                <span className="block text-sm font-bold text-navy">{COMPANY.phone1}</span>
                <span className="block text-sm text-muted">{COMPANY.phone2}</span>
              </span>
            </a>

            <a
              href={COMPANY.emailLink}
              className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 transition-colors hover:border-navy"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="block break-all text-sm font-bold text-navy">
                  {COMPANY.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-line bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                  Address
                </span>
                <span className="block text-sm font-semibold leading-snug text-navy">
                  {COMPANY.address}
                </span>
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-navy/20 bg-navy/10 p-5">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-navy" aria-hidden="true" />
              <p className="text-sm font-bold text-navy">Prefer WhatsApp?</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              Message us directly — we will reply with the details you need.
            </p>
            <a
              href={getWhatsAppUrl({
                type: ENQUIRY_TYPES.GENERAL,
                message: 'Hello CITO Surgicare, I have an enquiry.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-dark"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
        >
          <h3 className="text-lg font-bold text-navy">Send an enquiry</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Fill in the form and we will open WhatsApp with your message ready — just
            press Send.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="c-name"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Your name <span className="text-navy">*</span>
              </label>
              <input
                id="c-name"
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Full name"
                className={fieldClass(errors.name)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'c-name-error' : undefined}
                required
              />
              {errors.name && (
                <p id="c-name-error" className="mt-1 text-xs font-medium text-navy">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="c-phone"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Phone number <span className="text-navy">*</span>
              </label>
              <input
                id="c-phone"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="+91 ..."
                className={fieldClass(errors.phone)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'c-phone-error' : undefined}
                required
              />
              {errors.phone && (
                <p id="c-phone-error" className="mt-1 text-xs font-medium text-navy">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="c-type"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Enquiry type
              </label>
              <select
                id="c-type"
                value={form.type}
                onChange={update('type')}
                className={fieldClass(false)}
              >
                {ENQUIRY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="c-item"
                className="mb-1.5 block text-sm font-semibold text-navy"
              >
                Product / service
              </label>
              <select
                id="c-item"
                value={form.item}
                onChange={update('item')}
                className={fieldClass(false)}
              >
                <option value="">Select (optional)</option>
                <optgroup label="Products">
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Services">
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="c-message"
            className="mb-1.5 block text-sm font-semibold text-navy"
          >
            Your requirement <span className="text-navy">*</span>
            </label>
            <textarea
              id="c-message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us what you need — product, quantity, location…"
              className={fieldClass(errors.message)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'c-message-error' : undefined}
              required
            />
            {errors.message && (
              <p id="c-message-error" className="mt-1 text-xs font-medium text-navy">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Review & Send on WhatsApp
          </button>

          <p className="mt-3 text-xs leading-relaxed text-muted">
            This opens WhatsApp with your message pre-filled so you can review it. Press
            Send inside WhatsApp to share it with our team.
          </p>
        </form>
      </div>
    </Section>
  )
}