import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../data/company'
import { getWhatsAppUrl } from '../utils/whatsapp'

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <button
          type="button"
          onClick={() => go('home')}
          className="flex items-center gap-3 text-left"
          aria-label="CITO Surgicare — go to top"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
            <img
              src="/images/cito-emblem.png"
              alt="CITO Surgicare emblem"
              className="h-7 w-auto object-contain"
              style={{ width: 'auto', height: '2.5rem' }}
            />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-tight text-navy sm:text-[17px]">
              CITO <span className="text-navy-dark">Surgicare</span>
            </span>
            <span className="block text-[10px] font-medium text-muted">
              Medical Equipment Solutions
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(link.id)
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-navy-dark'
                    : 'text-navy/80 hover:text-navy-dark'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-3 -bottom-[7px] h-[2px] rounded-full bg-navy-dark"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={COMPANY.phone1Link}
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-dark"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY.phone1}
          </a>
          <a
            href={getWhatsAppUrl({ type: 'GENERAL', message: 'Hello CITO Surgicare, I would like to make an enquiry.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-dark"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy hover:bg-soft lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-white px-4 pb-4 pt-2 lg:hidden"
        aria-label="Mobile"
      >
        <ul className="flex flex-col gap-0.5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(link.id)
                }}
                aria-current={active === link.id ? 'page' : undefined}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-soft text-navy-dark'
                    : 'text-navy hover:bg-soft hover:text-navy-dark'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-col gap-2">
          <a
            href={COMPANY.phone1Link}
            className="rounded-lg bg-navy px-3 py-2.5 text-center text-sm font-semibold text-white"
          >
            Call {COMPANY.phone1}
          </a>
          <a
            href={getWhatsAppUrl({ type: 'GENERAL', message: 'Hello CITO Surgicare, I would like to make an enquiry.' })}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-center text-sm font-semibold text-navy"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  )
}