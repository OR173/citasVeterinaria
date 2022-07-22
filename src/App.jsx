
import Header from './componentes/Header'
import Formulario from './componentes/Formulario.jsx'
import ListadoPacientes from './componentes/ListadoPacientes.jsx'

function App() {
  
  return (
    
    <>

      <Header />
      <div className='contenido'>
        <Formulario />
        <ListadoPacientes />
      </div>


    </>

  )
}

export default App
