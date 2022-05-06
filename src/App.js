import React from "react"
import Face from "./Face"
import About from "./About"
import Footer from "./Footer"
import "./App.css"

function App(){
    return (
        <div>
             <div className="container">
                <Face />
                <About />
                <Footer />
            </div>
        </div>  
    )
}

export default App