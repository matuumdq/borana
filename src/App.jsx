
import './App.css'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Header from './components/Header'
import Tienda from './components/Shop'
import Who from './components/Who'

function App() {

  return (
    <div className="App">
        <Header />
        <Choose />
        <Tienda />
        <Who />
        <Footer />
    </div>
  )
}

export default App
