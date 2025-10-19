import { useMemo, useState, useEffect } from 'react'
import TestimonialCard from '../components/TestimonialCard.jsx'
import ContactSection from '../components/ContactSection.jsx'
import logo3 from '../assets/logo_3.png'
import logo1 from '../assets/logo_1.png'
import mujerMagica from '../assets/mujer_magica.svg'
import axios from 'axios'
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
      <div className="mt-6 text-lg font-bold text-secondary">{price} USD</div>
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
  const apiToken = import.meta.env.VITE_STRAPI_API_KEY;
  const apiUrl = import.meta.env.VITE_STRAPI_API_URL;
  console.log(apiUrl);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/landing-page?populate=*`, {
          headers: {
            'Authorization': `Bearer ${apiToken}`
          }
        });
        console.log("Full API response:", response.data);
        const apiData = response.data.data;

        setPageData(apiData)
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      }
    };
    fetchData();
  }, []);

  const zodiacAngles = useMemo(() => (
    zodiacSymbols.map((_, i) => i * 30)
  ), [])
  if (!pageData) {
    return <div className="flex items-center justify-center h-screen">Cargando contenido...</div>;
  }
  return (
    <div>
      {/* Hero */}
      <section id="inicio" tabIndex={0} aria-label="Inicio" className="relative flex min-h-dvh items-center overflow-hidden bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-primary md:text-5xl">
              {pageData.hero_title}
            </h1>
            <p className="mt-4 max-w-prose text-lg text-primary/80">
             {pageData.hero_description}
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
                src={mujerMagica}
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
                  <img src={sym} alt={`Símbolo zodiacal ${idx + 1}`} className="h-12 w-12 object-contain" />
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
            <div className="mx-auto flex h-64 w-96 items-center justify-center overflow-hidden">
              <img
                src={ apiUrl + pageData.about_me_image.url}
                alt="Logo El Cielo en Ti"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = logo1;
                }}
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-primary">{pageData.about_me_title}</h2>
            <p className="mt-4 text-lg text-primary/80">{pageData.about_me_description}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" tabIndex={0} aria-label="Servicios" className="py-20 bg-gradient-to-b from-[#E0E0E0] to-[#888888]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">{pageData.service_title}</h2>
            <p className="mt-2 text-primary/80">{pageData.service_subtitle}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pageData.service && pageData.service.length > 0 ? (
            pageData.service.map((service) => (
              <ServiceCard
                key={service.id}
                icon="◴"
                title={service.title}
                description={service.description}
                features={service.characteristics ? service.characteristics.replace(/<p>|<\/p>/g, '').split('<br>') : []}
                price={service.price}
                featured={service.featured}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-primary/70">
              <p>Los servicios se están cargando...</p>
            </div>
          )}
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

             {pageData.testimonial.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                text={testimonial.text}
                author={testimonial.author}
                tag={testimonial.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection contactData={pageData?.contact_section} />
    </div>
  )
}


