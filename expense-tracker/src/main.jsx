import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import theme from './theme.js'
import GlobalState from './context/context.jsx'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <GlobalState>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>,
  </GlobalState>
)



