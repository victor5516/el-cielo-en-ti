import { useRef, useState } from 'react'
import { useToast } from './ToastProvider.jsx'
import axios from 'axios'

const ContactForm = ({ formTitle = "Solicita tu Consulta Gratuita" }) => {
  const { showToast } = useToast()
  const formRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, service } = formState

    // Validaciones
    if (!name || !email || !service) {
      showToast('Por favor completa los campos requeridos.', 'error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showToast('Email inválido.', 'error')
      return
    }

    try {
      // Obtener las variables de entorno
      const apiUrl = import.meta.env.VITE_STRAPI_API_URL

      // Enviar datos a Strapi
      const response = await axios.post(`${apiUrl}/submissions`, {
        data: {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          service: formState.service,
          message: formState.message
        }
      })

      console.log('Submission sent successfully:', response.data)
      showToast('¡Mensaje enviado exitosamente! Te contactaré pronto.', 'success')

      // Limpiar el formulario
      setFormState({ name: '', email: '', phone: '', service: '', message: '' })
      formRef.current?.reset()

    } catch (error) {
      console.error('Error sending submission:', error)
      showToast('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.', 'error')
    }
  }

  return (
    <div className="rounded-2xl border border-third/30 bg-white/40 p-6">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
        <h3 className="text-center text-xl font-semibold text-primary">{formTitle}</h3>
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
  )
}

export default ContactForm
