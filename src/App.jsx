
import './App.css'
import Choose from './components/Choose'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Tienda from './components/Shop'
import Who from './components/Who'

function App() {

  return (
    
    <div className="App">
        <Header />
        <div className='container'>
            <Choose />
            <Tienda />
            <Who />
            <Form />
        </div>
        <Footer />
    </div>
  )
}

export default App
