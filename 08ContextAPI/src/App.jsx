import userContextProvider from './context/UserContextProvider'
import './App.css'

function App() {


  return (
    <userContextProvider>
      <h1>Context API</h1>
    </userContextProvider>
  )
}

export default App
