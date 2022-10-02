import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return (
        <header>
            <img src="../images/Women" alt="Women"/>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <p>laurasmith.website</p>
            <button className="email-btn"><img src="../images/Email" alt="Email" className="email-img"/>Email</button>
            <button className="in-btn"><img src="../images/In" alt="In" className="in-img"/>LinkedIn</button>
        </header>
    )
}