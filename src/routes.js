import React from "react"
import { Route } from "react-router-dom"

import HomePage from "./components/HomePage"
import MediaGalleryPage from "./containers/MediaGalleryPage"

// Map components to different routes
const Routes = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/library" component={MediaGalleryPage} />
  </div>
)

export default Routes
