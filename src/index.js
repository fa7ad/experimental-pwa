import React from 'react'
import { hydrate, render } from 'react-dom'

import './index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const domRoot = document.getElementById('root')
const renderFn = domRoot.hasChildNodes() ? hydrate : render

renderFn(<App />, domRoot)

registerServiceWorker()
