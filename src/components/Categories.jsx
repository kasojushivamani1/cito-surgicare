import { CATEGORIES, PRODUCTS } from '../data/company'
import { Icon, Section, SectionHeading } from './ui'

// Reuse each product's verified icon so the category tile matches the
// catalogue card the customer will see after clicking.
const ICON_BY_CATEGORY = new Map(PRODUCTS.map((p) => [p.category, p.icon]))
const PRODUCT_BY_CATEGORY = new Map(PRODUCTS.map((p) => [p.category, p]))

/**
 * Product category overview — compact card grid below the hero.
 * Each card leads to the relevant product category or enquiry action.
 */
export default function Categories({ onSelect }) {
  return (
    <Section id="categories" tone="light" className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Browse"
          title="Product Categories"
          subtitle="Ten categories of medical equipment and hospital furniture from the CITO Surgicare range. Choose a category to filter the catalogue."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CATEGORIES.map((cat) => {
            const product = PRODUCT_BY_CATEGORY.get(cat)
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelect(cat)}
                aria-label={`Show ${cat} products in the catalogue`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-4 text-left shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-navy hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/10 text-navy">
                  <Icon
                    name={ICON_BY_CATEGORY.get(cat) || 'Package'}
                    className="h-[22px] w-[22px]"
                  />
                </span>
                <span className="mt-3 text-sm font-bold leading-snug text-navy">
                  {cat}
                </span>
                <span className="mt-1 flex-1 text-xs leading-relaxed text-muted">
                  {product ? product.description : ''}
                </span>
                <span className="mt-3 text-xs font-semibold text-navy transition-colors group-hover:text-navy-dark">
                  View products →
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}