import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

import App from "./containers/App"
import Routes from "./routes"

// Initialize store
const store = configureStore()

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
