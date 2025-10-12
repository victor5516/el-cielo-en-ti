import { useMemo, useRef, useState } from 'react'
import { useToast } from '../components/ToastProvider.jsx'
import logo3 from '../assets/logo_3.png'
import yenni from '../assets/yenni.jpeg'
import aquarius from '../assets/zodiac/aquarius.svg'
import pisces from '../assets/zodiac/pisces.svg'
import aries from '../assets/zodiac/aries.svg'
import taurus from '../assets/zodiac/taurus.svg'
import gemini from '../assets/zodiac/gemini.svg'
import cancer from '../assets/zodiac/cancer.svg'
import leo from '../assets/zodiac/leo.svg'
import virgo from '../assets/zodiac/virgo.svg'
import libra from '../assets/zodiac/libra.svg'
import scorpio from '../assets/zodiac/scorpio.svg'
import sagittarius from '../assets/zodiac/sagittarius.svg'
import capricorn from '../assets/zodiac/capricorn.svg'

export const zodiacSymbols = [aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn]

const ServiceCard = ({ icon, title, description, features, price, featured = false }) => {
  const baseClass = 'relative rounded-2xl border border-third/30 bg-primary/70 p-8 text-center transition will-change-transform'
  const featuredClass = featured ? 'scale-[1.02] border-third ring-1 ring-third/40' : ''
  return (
    <div className={[baseClass, featuredClass].join(' ')} tabIndex={0} aria-label={title}>
      {featured && (
        <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
          Más Popular
        </div>
      )}
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-third text-2xl text-secondary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-secondary/70">{description}</p>
      <ul className="mt-5 space-y-2 text-left text-sm text-secondary/80">
        {features.map((f) => (
          <li key={f} className="relative pl-5">
            <span className="absolute left-0 top-0 text-secondary">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 text-lg font-bold text-secondary">Desde {price}</div>
      <a
        href="#contacto"
        className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-third/40 px-4 py-2 text-sm font-medium text-secondary hover:border-secondary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
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
      <section id="inicio" tabIndex={0} aria-label="Inicio" className="relative flex min-h-dvh items-center overflow-hidden bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-primary md:text-5xl">
              Observa el Cielo en Ti
            </h1>
            <p className="mt-4 max-w-prose text-lg text-primary/80">
             Te ayudo a verte como nunca antes lo has hecho, e interpreto el mensaje que los astros tienen para ti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-md bg-third px-5 py-2.5 font-semibold text-secondary shadow-lg shadow-black/10 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-third" aria-label="Ver Servicios">Ver Servicios</a>

            </div>
          </div>
          {/* <div className="relative mx-auto h-[400px] w-[400px] max-w-full">
          <img src={logo2} alt="Logo El Cielo en Ti" className="h-full w-auto object-contain" />
          </div> */}
          <div className="relative mx-auto h-[400px] w-[400px] max-w-full">
            <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden>
              <img
                src={logo3}
                alt="Centro del círculo"

              />
            </div>
            <div
              className="absolute inset-0 animate-[spin_30s_linear_infinite]"
              aria-hidden
            >
              {zodiacSymbols.map((sym, idx) => (
                <div
                  key={sym}
                  className="absolute text-2xl text-third transition-colors hover:scale-110 hover:text-primary"
                  style={{ transformOrigin: '200px 200px', transform: `rotate(${zodiacAngles[idx]}deg) translateY(-180px)` }}
                >
                  <img src={sym} alt={`Símbolo zodiacal ${idx + 1}`} className="h-8 w-8 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" tabIndex={0} aria-label="Sobre mí" className="py-20 bg-gradient-to-b from-[#a9a5d6] to-[#bac6eb]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-3">
          <div className="mx-auto md:col-span-1">
            <div className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-third">
              <img src={yenni} alt="Logo El Cielo en Ti" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-primary">Sobre Mí</h2>
            <p className="mt-4 text-lg text-primary/80">Soy una astróloga apasionada con años de experiencia ayudando a las personas a descubrir su verdadero potencial a través de la lectura de los astros.</p>
            <p className="mt-3 text-primary/70">Mi misión es guiarte en tu camino de autoconocimiento, utilizando herramientas milenarias como la astrología y el tarot para revelar los mensajes que el universo tiene para ti.</p>
            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">★</span><span className="text-primary/90">+5 años de experiencia</span></div>
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">👥</span><span className="text-primary/90">+500 consultas realizadas</span></div>
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">✓</span><span className="text-primary/90">Certificada en Astrología</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" tabIndex={0} aria-label="Servicios" className="py-20 bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Mis Servicios</h2>
            <p className="mt-2 text-primary/80">Descubre qué servicio es perfecto para ti</p>
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
      <section id="testimonios" tabIndex={0} aria-label="Testimonios" className="py-20 bg-gradient-to-b from-[#a9a5d6] to-[#bac6eb]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Lo que Dicen Mis Clientes</h2>
            <p className="mt-2 text-primary/80">Experiencias reales de transformación</p>
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
              <div key={t.author} className="rounded-2xl border border-third/30 bg-white/40 p-6">
                <div className="mb-3 text-third">★★★★★</div>
                <p className="text-sm italic text-primary/80">“{t.text}”</p>
                <div className="mt-4">
                  <strong className="block text-primary">{t.author}</strong>
                  <span className="text-xs text-primary/70">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" tabIndex={0} aria-label="Contacto" className="py-20 bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">¿Lista para Descubrir tu Destino?</h2>
            <p className="mt-2 text-primary/80">Agenda tu consulta personalizada y comienza tu viaje de autoconocimiento.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">🟢</span><div><h4 className="font-semibold text-primary">WhatsApp</h4><p className="text-primary/70">+1 (555) 123-4567</p></div></div>
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">✉</span><div><h4 className="font-semibold text-primary">Email</h4><p className="text-primary/70">consultas@mercurioastral.com</p></div></div>
              <div className="flex items-center gap-3 rounded-md bg-white/40 p-3"><span className="text-third">◎</span><div><h4 className="font-semibold text-primary">Instagram</h4><p className="text-primary/70">@mercurioastral</p></div></div>
            </div>
            <div className="mt-6 rounded-md border border-third/30 bg-white/40 p-4">
              <h4 className="mb-2 font-semibold text-primary">Horarios de Consulta</h4>
              <p className="text-primary/80">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-primary/80">Sábados: 10:00 AM - 4:00 PM</p>
              <p className="text-primary/80">Domingos: Solo citas especiales</p>
            </div>
          </div>
          <div className="rounded-2xl border border-third/30 bg-white/40 p-6">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <h3 className="text-center text-xl font-semibold text-primary">Solicita tu Consulta Gratuita</h3>
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
                  className="w-full rounded-md border border-third/40 bg-white/70 px-3 py-2 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-third"
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
                  className="w-full rounded-md border border-third/40 bg-white/70 px-3 py-2 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-third"
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
                  className="w-full rounded-md border border-third/40 bg-white/70 px-3 py-2 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-third"
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
                  className="w-full rounded-md border border-third/40 bg-white/70 px-3 py-2 text-primary focus:outline-none focus:ring-2 focus:ring-third"
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
                  className="w-full rounded-md border border-third/40 bg-white/70 px-3 py-2 text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-third"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-third px-4 py-2 font-semibold text-secondary shadow-lg shadow-black/10 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-third/60"
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


