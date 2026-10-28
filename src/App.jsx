import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Rentals from './components/Rentals'
import Furniture from './components/Furniture'
import Trust from './components/Trust'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { NAV_LINKS } from './data/company'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function App() {
  const [active, setActive] = useState('home')
  // Shared with the Categories band so a category tile can filter the
  // catalogue below before scrolling to it.
  const [category, setCategory] = useState('All')

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      })
      setActive(id)
    }
  }, [])

  const handleCategorySelect = useCallback(
    (cat) => {
      setCategory(cat)
      scrollTo('products')
    },
    [scrollTo],
  )

  // Track the section currently in view for the nav highlight.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Handle direct hash navigation on first load.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && SECTION_IDS.includes(hash)) {
      window.setTimeout(() => scrollTo(hash), 80)
    }
  }, [scrollTo])

  return (
    <>
      <Navbar active={active} onNavigate={scrollTo} />
      <main className="flex-1">
        <Hero onNavigate={scrollTo} />
        <Categories onSelect={handleCategorySelect} />
        <Products category={category} onCategoryChange={setCategory} />
        <Rentals />
        <Furniture />
        <Trust />
        <Contact />
      </main>
      <Footer onNavigate={scrollTo} />
    </>
  )
}

export default App
