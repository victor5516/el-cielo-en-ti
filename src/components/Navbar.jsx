import { useEffect, useMemo, useState } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [scrolled, setScrolled] = useState(false)

  const handleToggleMenu = () => setIsOpen((prev) => !prev)
  const handleCloseMenu = () => setIsOpen(false)

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 120
      let current = '#inicio'
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.clientHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          current = `#${section.id}`
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const containerClass = useMemo(() => (
    'mx-auto flex max-w-7xl items-center justify-between px-4'
  ), [])

  const handleSmoothNavigate = (event, href) => {
    event.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const y = target.offsetTop - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setActive(href)
    setIsOpen(false)
    target.focus({ preventScroll: true })
  }

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={[
        'fixed inset-x-0 top-0 z-50 w-full transition-all',
        scrolled ? 'bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75 shadow-lg shadow-violet-500/10' : 'bg-slate-900/90',
      ].join(' ')}
      onKeyDown={handleKeyDown}
    >
      <div className={containerClass}>
        <a href="#inicio" className="flex items-center gap-2 py-3 text-lg font-bold text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Ir al inicio">
          <span className="inline-block">Mercurio Astral</span>
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={handleToggleMenu}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 md:hidden"
        >
          <span aria-hidden>☰</span>
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'page' : undefined}
                className={[
                  'relative inline-flex items-center px-1.5 py-2 text-sm font-medium text-slate-300 outline-none transition hover:text-violet-400 focus-visible:ring-2 focus-visible:ring-violet-400',
                  active === link.href ? 'text-violet-400' : '',
                ].join(' ')}
                onClick={(e) => handleSmoothNavigate(e, link.href)}
              >
                {link.label}
                <span className={[
                  'absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-pink-500 transition-all',
                  active === link.href ? 'w-full' : '',
                ].join(' ')} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          'md:hidden transition-all',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <ul className="space-y-1 border-t border-white/10 bg-slate-900/95 px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[
                  'block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
                  active === link.href ? 'text-violet-400' : '',
                ].join(' ')}
                onClick={(e) => handleSmoothNavigate(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


