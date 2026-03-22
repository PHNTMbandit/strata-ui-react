import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/input.css"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<main className="h-screen w-full"></main>
		</React.StrictMode>,
	)
}
