import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { About, Services, ServicePage, Legal, NotFound } from './pages/Pages'
export default function App() {
  return (<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}><Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="services" element={<Services />} /><Route path="services/:slug" element={<ServicePage />} />
    <Route path="contact" element={<Contact />} /><Route path=":legal" element={<Legal />} /><Route path="*" element={<NotFound />} /></Route></Routes></BrowserRouter>)
}
