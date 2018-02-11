import React from "react"
import { Link } from "react-router-dom"

// Home page component
// This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">Media Byte</h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary"> Visit Media</button>
      </Link>
    </div>
  </div>
)

export default HomePage
