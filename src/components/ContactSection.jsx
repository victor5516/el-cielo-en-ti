import ContactForm from './ContactForm.jsx'

const ContactSection = ({ contactData }) => {
  if (!contactData) {
    return (
      <section id="contacto" tabIndex={0} aria-label="Contacto" className="py-20 bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-primary/70">Cargando información de contacto...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" tabIndex={0} aria-label="Contacto" className="py-20 bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-primary">{contactData.contact_title}</h2>
          <p className="mt-2 text-primary/80">{contactData.contact_subtitle}</p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3">
              <span className="text-third">🟢</span>
              <div>
                <h4 className="font-semibold text-primary">WhatsApp</h4>
                <p className="text-primary/70">{contactData.contact_whatsapp}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3">
              <span className="text-third">✉</span>
              <div>
                <h4 className="font-semibold text-primary">Email</h4>
                <p className="text-primary/70">{contactData.contact_email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-md bg-white/40 p-3">
              <span className="text-third">◎</span>
              <div>
                <h4 className="font-semibold text-primary">Instagram</h4>
                <p className="text-primary/70">{contactData.contact_instagram}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-md border border-third/30 bg-white/40 p-4">
            <h4 className="mb-2 font-semibold text-primary">{contactData.schedule_title}</h4>
            {contactData.schedule_details.split('\n\n').map((schedule, index) => (
              <p key={index} className="text-primary/80">{schedule}</p>
            ))}
          </div>
        </div>
        <ContactForm formTitle={contactData.form_title} />
      </div>
    </section>
  )
}

export default ContactSection
