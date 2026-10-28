import {
  Accessibility,
  Activity,
  Armchair,
  BedDouble,
  Building2,
  Check,
  Clock,
  Factory,
  Gauge,
  HeartPulse,
  Layers,
  MessageCircle,
  MessagesSquare,
  Package,
  Ruler,
  Scissors,
  ShoppingBag,
  Syringe,
  Truck,
  Wind,
  Wrench,
} from 'lucide-react'
import { getWhatsAppUrl } from '../utils/whatsapp'

// Explicit icon registry — avoids importing the whole lucide library.
const ICONS = {
  Accessibility,
  Activity,
  Armchair,
  BedDouble,
  Building2,
  Check,
  Clock,
  Factory,
  Gauge,
  HeartPulse,
  Layers,
  MessagesSquare,
  Ruler,
  Scissors,
  ShoppingBag,
  Syringe,
  Truck,
  Wind,
  Wrench,
}

/** Resolve a registered lucide icon by name with a safe fallback. */
export function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const Cmp = ICONS[name] || Package
  return <Cmp className={className} aria-hidden="true" {...rest} />
}

/**
 * Consistent product image frame: fixed height, cool light-grey surface and
 * object-contain so brochure artwork is never cropped or distorted.
 * Falls back to the product icon when no verified image is supplied.
 */
export function ProductImage({ src, alt = '', icon = 'Package', height = 'h-48' }) {
  if (!src) {
    return (
      <div
        className={`flex w-full items-center justify-center rounded-t-xl border-b border-line bg-soft ${height}`}
      >
        <Icon name={icon} className="h-12 w-12 text-slate-300" />
      </div>
    )
  }

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-t-xl border-b border-line bg-soft ${height}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain p-5"
      />
    </div>
  )
}

/**
 * Section heading. `onDark` swaps to the light-on-navy palette so the same
 * component stays accessible on dark bands (contrast tested).
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  onDark = false,
}) {
  const alignment = align === 'left' ? 'text-left' : 'text-center'
  return (
    <div className={`mb-10 ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.16em] ${
            onDark ? 'text-navy' : 'text-navy'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.15rem] ${
          onDark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-[15px] leading-relaxed sm:text-base ${
            onDark ? 'text-white/80' : 'text-muted'
          } ${align === 'left' ? 'max-w-2xl' : 'mx-auto max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-[3px] w-12 rounded-full bg-navy ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </div>
  )
}

/**
 * CTA that opens WhatsApp with a URL-encoded enquiry message.
 * The customer presses Send inside WhatsApp.
 * Navy is used for WhatsApp actions to match the corporate palette.
 */
export function WhatsAppButton({
  enquiry,
  label = 'Enquire on WhatsApp',
  variant = 'solid',
  className = '',
  children,
}) {
  const href = getWhatsAppUrl(enquiry)
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150'

  const styles = {
    solid: 'bg-navy text-white shadow-sm hover:bg-navy-dark',
    soft: 'bg-soft text-navy border border-line hover:bg-navy/10',
    outline:
      'border border-line bg-white text-navy hover:border-navy hover:bg-navy hover:text-white',
    ghost: 'text-navy hover:bg-soft',
  }[variant]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
      {children || label}
    </a>
  )
}

export function Section({ id, className = '', children, tone = 'light' }) {
  const tones = {
    light: 'bg-white',
    soft: 'bg-soft',
    navy: 'bg-navy text-white',
  }
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  )
}