import { useMemo, useState } from 'react'
import { Search, X, SearchX } from 'lucide-react'
import { PRODUCTS, CATEGORIES } from '../data/company'
import { ENQUIRY_TYPES, getWhatsAppUrl } from '../utils/whatsapp'
import { ProductImage, Section, SectionHeading } from './ui'

function matches(product, query) {
  if (!query) return true
  const q = query.trim().toLowerCase()
  const haystack = [
    product.name,
    product.category,
    product.description,
    ...(product.tags || []),
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(q)
}

/** Primary navy CTA that opens WhatsApp with a quotation request. */
function QuoteButton({ product }) {
  return (
    <a
      href={getWhatsAppUrl({
        type: ENQUIRY_TYPES.QUOTATION,
        item: product.name,
        category: product.category,
      })}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-dark"
    >
      Get Quote
    </a>
  )
}

/** Secondary navy outline CTA that opens WhatsApp with a purchase enquiry. */
function BuyButton({ product }) {
  return (
    <a
      href={getWhatsAppUrl({
        type: ENQUIRY_TYPES.PURCHASE,
        item: product.name,
        category: product.category,
      })}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-150 hover:border-navy hover:bg-navy hover:text-white"
    >
      Buy Enquiry
    </a>
  )
}

export default function Products({ category = 'All', onCategoryChange = () => {} }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) => (category === 'All' || p.category === category) && matches(p, query),
    )
  }, [query, category])

  const hasFilters = query.trim() !== '' || category !== 'All'

  const reset = () => {
    setQuery('')
    onCategoryChange('All')
  }

  return (
    <Section id="products" tone="light">
      <SectionHeading
        eyebrow="Products"
        title="Medical Equipment Catalogue"
        subtitle="Browse our range of medical equipment from the CITO Surgicare brochure. Search by product name or category, then send an enquiry on WhatsApp."
      />

      <div className="mb-8 rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-6">
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products… e.g. oxygen, bed, ECG, wheelchair"
            className="w-full rounded-lg border border-line bg-white py-3.5 pl-12 pr-11 text-base text-ink placeholder:text-muted/70 focus:border-navy"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:bg-soft hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((cat) => {
            const isActive = category === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm ${
                  isActive
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy ring-1 ring-line hover:bg-line/60'
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm text-muted">
          <span aria-live="polite">
            Showing <strong className="text-navy">{filtered.length}</strong> of{' '}
            {PRODUCTS.length} products
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={reset}
              className="font-semibold text-navy hover:text-navy-dark"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
          <SearchX className="mx-auto h-10 w-10 text-muted/60" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-bold text-navy">No matching products</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
            We could not find a product for this search. Try a different keyword, or
            send us a message and we will help you find the right equipment.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy hover:bg-navy hover:text-white"
            >
              Reset search
            </button>
            <a
              href={getWhatsAppUrl({
                type: ENQUIRY_TYPES.GENERAL,
                item: query,
                message:
                  'I could not find this on your website. Please help me with the requirement.',
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-wa-strong px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wa-dark"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow duration-150 hover:shadow-md"
            >
              <ProductImage src={product.image} alt={product.name} icon={product.icon} />

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-navy">
                  {product.category}
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-navy">
                  {product.name}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <QuoteButton product={product} />
                  <BuyButton product={product} />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-soft px-6 py-6 sm:flex-row">
        <div>
          <h3 className="text-base font-bold text-navy sm:text-lg">Need multiple units?</h3>
          <p className="mt-1 text-sm text-muted">
            Send a bulk quotation request for hospitals, clinics and institutions.
          </p>
        </div>
        <a
          href={getWhatsAppUrl({
            type: ENQUIRY_TYPES.BULK,
            item: 'Medical equipment (bulk order)',
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-navy-dark"
        >
          Request Bulk Quotation
        </a>
      </div>
    </Section>
  )
}