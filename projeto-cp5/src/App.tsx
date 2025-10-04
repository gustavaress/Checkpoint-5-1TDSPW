import './globals.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <Cabecalho></Cabecalho>
          <Outlet/>
      <Rodape></Rodape>
    </>
  )
}

export default App