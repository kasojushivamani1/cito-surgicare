import { COMPANY } from '../data/company.js'

/**
 * Centralised WhatsApp enquiry utility.
 *
 * Every purchase, quotation, rental, service and bulk enquiry CTA on the
 * site routes through here so that the customer is taken to WhatsApp with a
 * pre-filled, URL-encoded message and simply presses Send.
 */

export const WHATSAPP_NUMBER = COMPANY.whatsappNumber // '917993741100' (+91 79937 41100)

/** Enquiry types used across the site. */
export const ENQUIRY_TYPES = {
  PURCHASE: 'Purchase Enquiry',
  QUOTATION: 'Product Quotation',
  RENTAL: 'Rental Enquiry',
  SERVICE: 'Service Enquiry',
  BULK: 'Bulk Quotation',
  GENERAL: 'General Enquiry',
  CONTACT: 'Contact Enquiry',
}

/**
 * Builds a plain-text enquiry message from the supplied fields.
 * @param {object} options
 * @param {string} options.type  One of ENQUIRY_TYPES
 * @param {string} [options.item] Product / service / furniture name
 * @param {string} [options.category] Product category
 * @param {string} [options.name] Customer name
 * @param {string} [options.phone] Customer phone
 * @param {string} [options.message] Free-form customer message
 * @param {string} [options.quantity] Quantity, if relevant
 * @returns {string}
 */
export function buildWhatsAppMessage({
  type = ENQUIRY_TYPES.GENERAL,
  item = '',
  category = '',
  name = '',
  phone = '',
  message = '',
  quantity = '',
} = {}) {
  const lines = [
    `Hello ${COMPANY.name},`,
    `I would like to send a ${type.toLowerCase()}.`,
  ]

  if (item) lines.push(`Product / Service: ${item}`)
  if (category) lines.push(`Category: ${category}`)
  if (quantity) lines.push(`Quantity: ${quantity}`)
  if (name) lines.push(`Name: ${name}`)
  if (phone) lines.push(`Phone: ${phone}`)
  if (message) lines.push(`Details: ${message}`)

  lines.push('', 'Please share the details. Thank you!')
  return lines.join('\n')
}

/**
 * Returns the full https://wa.me URL with the message URL-encoded.
 * @param {object} options Same fields as buildWhatsAppMessage
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppUrl(options = {}) {
  const text = buildWhatsAppMessage(options)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/**
 * Opens WhatsApp with a pre-filled enquiry message in a new tab.
 * The customer still has to press Send inside WhatsApp.
 */
export function openWhatsApp(options = {}) {
  const url = getWhatsAppUrl(options)
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return url
}

/** Convenience helpers for the common CTA types. */
export const whatsapp = {
  purchase: (item, extra = {}) =>
    openWhatsApp({ type: ENQUIRY_TYPES.PURCHASE, item, ...extra }),
  quotation: (item, extra = {}) =>
    openWhatsApp({ type: ENQUIRY_TYPES.QUOTATION, item, ...extra }),
  rental: (item, extra = {}) =>
    openWhatsApp({ type: ENQUIRY_TYPES.RENTAL, item, ...extra }),
  service: (item, extra = {}) =>
    openWhatsApp({ type: ENQUIRY_TYPES.SERVICE, item, ...extra }),
  bulk: (item, extra = {}) =>
    openWhatsApp({ type: ENQUIRY_TYPES.BULK, item, ...extra }),
  general: (extra = {}) => openWhatsApp({ type: ENQUIRY_TYPES.GENERAL, ...extra }),
}