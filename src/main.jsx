import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "ifamished-ui"

// Shared UI package styles
import "ifamished-ui/styles/index.css"

// Site-specific styles
import "./styles/background.css"
import "./styles/overrides.css"

import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultCategory="solid" defaultTheme="violet">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
