import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

// let root=ReactDOM.createRoot(document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.Fragment>
        <div className="group">
            <div className="name">前端</div>
            <div className="person">夏特希</div>
        </div>
    </React.Fragment>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
