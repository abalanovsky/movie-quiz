import './App.css'
import { MovieAppProvider } from '@context/MovieAppContext.tsx'
import Layout from '@containers/Layout/Layout.tsx'

function App() {
  return (
    <MovieAppProvider>
      <Layout />
    </MovieAppProvider>
  )
}

export default App
