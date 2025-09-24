export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-900/80">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">Mercurio Astral</h3>
            <p className="mt-2 text-sm text-slate-400">Conectando almas con su destino a través de la sabiduría cósmica.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:-translate-y-0.5 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Instagram">IG</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:-translate-y-0.5 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Facebook">FB</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:-translate-y-0.5 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Twitter">TW</a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white transition hover:-translate-y-0.5 hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-100">Servicios</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="#servicios" className="hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Carta Astral</a></li>
              <li><a href="#servicios" className="hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Tránsitos Planetarios</a></li>
              <li><a href="#servicios" className="hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Lectura de Tarot</a></li>
              <li><a href="#contacto" className="hover:text-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Consulta Personalizada</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-100">Contacto</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>WhatsApp: +1 (555) 123-4567</li>
              <li>Email: consultas@mercurioastral.com</li>
              <li>Instagram: @mercurioastral</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-slate-500">
          <p>© 2024 Mercurio Astral. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ para conectar almas con su destino.</p>
        </div>
      </div>
    </footer>
  )
}


