export const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-primary/95 text-secondary">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-secondary">Mercurio Astral</h3>
            <p className="mt-2 text-sm text-secondary/70">Conectando almas con su destino a través de la sabiduría cósmica.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-third text-secondary transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" aria-label="Instagram">IG</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-third text-secondary transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" aria-label="Facebook">FB</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-third text-secondary transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" aria-label="Twitter">TW</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-third text-secondary transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold text-secondary">Servicios</h4>
            <ul className="mt-2 space-y-1 text-sm text-secondary/70">
              <li><a href="#servicios" className="hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">Carta Astral</a></li>
              <li><a href="#servicios" className="hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">Tránsitos Planetarios</a></li>
              <li><a href="#servicios" className="hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">Lectura de Tarot</a></li>
              <li><a href="#contacto" className="hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">Consulta Personalizada</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-secondary">Contacto</h4>
            <ul className="mt-2 space-y-1 text-sm text-secondary/70">
              <li>WhatsApp: +1 (555) 123-4567</li>
              <li>Email: consultas@mercurioastral.com</li>
              <li>Instagram: @mercurioastral</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-secondary/60">
          <p>© 2024 Mercurio Astral. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ para conectar almas con su destino.</p>
        </div>
      </div>
    </footer>
  )
}


