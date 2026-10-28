import { MessageCircle, MapPin, Phone, Mail, Stethoscope } from 'lucide-react'
import { CATEGORIES, COMPANY, NAV_LINKS } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'

// Computed once at module load so the component render stays pure.
const YEAR = new Date().getFullYear()

export default function Footer({ onNavigate }) {
  const go = (id) => onNavigate(id)

  return (
    <>
      {/* Floating WhatsApp action — kept clear of the bottom-right corner content */}
      <a
        href={getWhatsAppUrl({
          type: ENQUIRY_TYPES.GENERAL,
          message: 'Hello CITO Surgicare, I would like to make an enquiry.',
        })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CITO Surgicare on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-navy text-white shadow-lg ring-2 ring-white transition-transform duration-150 hover:scale-105 motion-reduce:hover:scale-100"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>

      <footer className="border-t border-line bg-white text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                <Stethoscope className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-bold tracking-tight text-navy">
                CITO <span className="text-navy-dark">Surgicare</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Medical equipment sales, rentals, service and hospital furniture
              manufacturing in Hyderabad.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                <span className="flex flex-col">
                  <a
                    href={COMPANY.phone1Link}
                    className="font-medium text-navy hover:text-navy-dark"
                  >
                    {COMPANY.phone1}
                  </a>
                  <a
                    href={COMPANY.phone2Link}
                    className="font-medium text-navy hover:text-navy-dark"
                  >
                    {COMPANY.phone2}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                <a
                  href={COMPANY.emailLink}
                  className="break-all font-medium text-navy hover:text-navy-dark"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold text-navy">Quick links</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="text-left text-sm text-muted hover:text-navy-strong"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold text-navy">Product categories</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className="rounded-full border border-line bg-soft px-2.5 py-1 text-xs font-medium text-navy"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:px-6">
            <p>© {YEAR} CITO Surgicare. All rights reserved.</p>
            <p>Nizampet, Hyderabad – 500090</p>
          </div>
        </div>
      </footer>
    </>
  )
}