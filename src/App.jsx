import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar, Footer, ScrollToTop } from "ifamished-ui"

import Home from "./pages/Home"
import Info from "./pages/Info"
import FAQ from "./pages/FAQ"
import Rules from "./pages/Rules"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/info", label: "Info" },
  { to: "/faq", label: "FAQ" },
  { to: "/rules", label: "Rules" },
]

const socials = [
  { label: "Discord", href: "https://discord.gg/YOUR-SERVER" },
  { label: "GitHub", href: "https://github.com/iFamishedX" },
]

export default function App() {
  return (
    <>
      <Navbar
        brand="Hunger SMP"
        brandDotColor="#4f44ef"
        navItems={navItems}
      />

      <ScrollToTop />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer
        brand="Hunger SMP"
        socials={socials}
        footerNote={`© ${new Date().getFullYear()} HungerNet. Not affiliated with Mojang.`}
      />
    </>
  )
}
