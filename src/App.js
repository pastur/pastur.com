import React from 'react'
import { Root, Routes } from 'react-static'
import { Router } from './components/Router'
import GlobalStyle from './ui/GlobalStyle'
import Spinner from './components/Spinner'

function App() {
  return (
    <Root>
      <GlobalStyle />
      <div className="content">
        <React.Suspense fallback={<Spinner />}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
