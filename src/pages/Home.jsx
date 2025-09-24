import { useMemo, useRef, useState } from 'react'
import { useToast } from '../components/ToastProvider.jsx'

const zodiacSymbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']

const ServiceCard = ({ icon, title, description, features, price, featured = false }) => {
  const baseClass = 'relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center transition will-change-transform'
  const featuredClass = featured ? 'scale-[1.02] border-violet-500/60 ring-1 ring-violet-500/30' : ''
  return (
    <div className={[baseClass, featuredClass].join(' ')} tabIndex={0} aria-label={title}>
      {featured && (
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
          Más Popular
        </div>
      )}
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-2xl text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      <ul className="mt-5 space-y-2 text-left text-sm text-slate-300">
        {features.map((f) => (
          <li key={f} className="relative pl-5">
            <span className="absolute left-0 top-0 text-emerald-400">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg font-bold text-violet-400">Desde {price}</div>
      <a
        href="#contacto"
        className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:border-violet-500 hover:text-violet-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
      >
        Solicitar
      </a>
    </div>
  )
}

export const Home = () => {
  const { showToast } = useToast()
  const formRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, service } = formState
    if (!name || !email || !service) {
      showToast('Por favor completa los campos requeridos.', 'error')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showToast('Email inválido.', 'error')
      return
    }
    showToast('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success')
    setFormState({ name: '', email: '', phone: '', service: '', message: '' })
    formRef.current?.reset()
  }

  const zodiacAngles = useMemo(() => (
    zodiacSymbols.map((_, i) => i * 30)
  ), [])

  return (
    <div>
      {/* Hero */}
      <section id="inicio" tabIndex={0} aria-label="Inicio" className="relative flex min-h-dvh items-center overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/5 top-3/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-3xl" />
          <div className="absolute right-1/6 top-1/4 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/30 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-10 md:grid-cols-2">
          <div>
            <h1 className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Descubre los Secretos del Universo
            </h1>
            <p className="mt-4 max-w-prose text-lg text-slate-300">
              Conecta con tu destino a través de la sabiduría ancestral de los astros y las cartas del tarot
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-md bg-gradient-to-r from-violet-500 to-pink-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Ver Servicios">Ver Servicios</a>
              <a href="#contacto" className="rounded-md border border-violet-500 px-5 py-2.5 font-semibold text-violet-300 transition hover:bg-violet-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" aria-label="Consulta Gratis">Consulta Gratis</a>
            </div>
          </div>
          <div className="relative mx-auto h-[400px] w-[400px] max-w-full">
            <div
              className="absolute inset-0 animate-[spin_30s_linear_infinite]"
              aria-hidden
            >
              {zodiacSymbols.map((sym, idx) => (
                <div
                  key={sym}
                  className="absolute text-2xl text-violet-400 transition-colors hover:scale-110 hover:text-amber-400"
                  style={{ transformOrigin: '200px 200px', transform: `rotate(${zodiacAngles[idx]}deg) translateY(-180px)` }}
                >
                  {sym}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" tabIndex={0} aria-label="Sobre mí" className="bg-slate-900/70 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-3">
          <div className="mx-auto md:col-span-1">
            <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500">
              <span className="text-6xl text-white" aria-hidden>☾</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-100">Sobre Mí</h2>
            <p className="mt-4 text-lg text-slate-300">Soy una astróloga apasionada con años de experiencia ayudando a las personas a descubrir su verdadero potencial a través de la lectura de los astros.</p>
            <p className="mt-3 text-slate-400">Mi misión es guiarte en tu camino de autoconocimiento, utilizando herramientas milenarias como la astrología y el tarot para revelar los mensajes que el universo tiene para ti.</p>
            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-md bg-slate-800/60 p-3"><span className="text-amber-400">★</span><span className="text-slate-300">+5 años de experiencia</span></div>
              <div className="flex items-center gap-3 rounded-md bg-slate-800/60 p-3"><span className="text-amber-400">👥</span><span className="text-slate-300">+500 consultas realizadas</span></div>
              <div className="flex items-center gap-3 rounded-md bg-slate-800/60 p-3"><span className="text-amber-400">✓</span><span className="text-slate-300">Certificada en Astrología</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" tabIndex={0} aria-label="Servicios" className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-100">Mis Servicios</h2>
            <p className="mt-2 text-slate-300">Descubre qué servicio es perfecto para ti</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ServiceCard
              icon="◴"
              title="Lectura de Carta Astral"
              description="Un análisis completo de tu personalidad, fortalezas y propósito de vida basado en tu fecha, hora y lugar de nacimiento."
              features={[
                'Análisis de tu Sol, Luna y Ascendente',
                'Interpretación de casas astrológicas',
                'Aspectos planetarios importantes',
                'Informe detallado personalizado',
              ]}
              price="$75"
            />
            <ServiceCard
              icon="⌁"
              title="Lectura de Tránsito Planetario"
              description="Conoce las influencias cósmicas actuales y futuras en tu vida, y cómo aprovechar las energías planetarias."
              features={[
                'Tránsitos actuales y próximos 6 meses',
                'Fechas importantes y oportunidades',
                'Consejos para cada período',
                'Seguimiento personalizado',
              ]}
              price="$95"
              featured
            />
            <ServiceCard
              icon="♣"
              title="Lectura de Tarot"
              description="Obtén claridad sobre situaciones específicas de tu vida a través de la sabiduría ancestral del tarot."
              features={[
                'Tiradas especializadas por tema',
                'Interpretación detallada',
                'Consejos y orientación',
                'Sesión de 60 minutos',
              ]}
              price="$55"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" tabIndex={0} aria-label="Testimonios" className="bg-slate-900/70 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-100">Lo que Dicen Mis Clientes</h2>
            <p className="mt-2 text-slate-300">Experiencias reales de transformación</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                text: 'La lectura de mi carta astral fue increíblemente precisa. Me ayudó a entender aspectos de mi personalidad que no conocía y a tomar decisiones importantes en mi vida.',
                author: 'María González', tag: 'Carta Astral',
              },
              {
                text: 'Los tránsitos planetarios me permitieron prepararme para los cambios que se venían. Fue como tener un mapa del futuro. Altamente recomendado.',
                author: 'Carlos Ruiz', tag: 'Tránsitos Planetarios',
              },
              {
                text: 'La lectura de tarot me dio la claridad que necesitaba en un momento difícil. Sus interpretaciones son profundas y llenas de sabiduría.',
                author: 'Ana Sofía', tag: 'Lectura de Tarot',
              },
            ].map((t) => (
              <div key={t.author} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="mb-3 text-amber-400">★★★★★</div>
                <p className="text-sm italic text-slate-300">“{t.text}”</p>
                <div className="mt-4">
                  <strong className="block text-slate-100">{t.author}</strong>
                  <span className="text-xs text-slate-400">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" tabIndex={0} aria-label="Contacto" className="bg-slate-950 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-100">¿Lista para Descubrir tu Destino?</h2>
            <p className="mt-2 text-slate-300">Agenda tu consulta personalizada y comienza tu viaje de autoconocimiento.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-md bg-slate-900/60 p-3"><span className="text-violet-400">🟢</span><div><h4 className="font-semibold text-slate-100">WhatsApp</h4><p className="text-slate-400">+1 (555) 123-4567</p></div></div>
              <div className="flex items-center gap-3 rounded-md bg-slate-900/60 p-3"><span className="text-violet-400">✉</span><div><h4 className="font-semibold text-slate-100">Email</h4><p className="text-slate-400">consultas@mercurioastral.com</p></div></div>
              <div className="flex items-center gap-3 rounded-md bg-slate-900/60 p-3"><span className="text-violet-400">◎</span><div><h4 className="font-semibold text-slate-100">Instagram</h4><p className="text-slate-400">@mercurioastral</p></div></div>
            </div>
            <div className="mt-6 rounded-md border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="mb-2 font-semibold text-violet-400">Horarios de Consulta</h4>
              <p className="text-slate-300">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-slate-300">Sábados: 10:00 AM - 4:00 PM</p>
              <p className="text-slate-300">Domingos: Solo citas especiales</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="text-center text-xl font-semibold text-slate-100">Solicita tu Consulta Gratuita</h3>
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Tu email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu teléfono"
                  value={formState.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">Servicio</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formState.service}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="carta-astral">Lectura de Carta Astral</option>
                  <option value="transitos">Lectura de Tránsito Planetario</option>
                  <option value="tarot">Lectura de Tarot</option>
                  <option value="consulta">Consulta general</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntame sobre tu consulta..."
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Enviar Solicitud"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}


