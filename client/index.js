import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'
const placeToMount = document.getElementById('root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  placeToMount
)
