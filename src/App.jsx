import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ToastProvider } from './components/ToastProvider.jsx'
import { Home } from './pages/Home.jsx'

const App = () => {
  return (
    <ToastProvider>
      <div className="min-h-dvh bg-slate-950 text-slate-100">
        <Navbar />
        <main id="main" className="pt-20">{/* offset for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

export default App
