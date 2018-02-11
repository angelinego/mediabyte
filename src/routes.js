import React from "react"
import { Route } from "react-router-dom"
import HomePage from "./components/HomePage"

// Map components to different routes
const Routes = () => (
  <div>
    <Route component={HomePage} />
  </div>
)

export default Routes
