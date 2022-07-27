
import {useState} from 'react'

import Header from './componentes/Header'
import Formulario from './componentes/Formulario.jsx'
import ListadoPacientes from './componentes/Lista_Pacientes/ListadoPacientes.jsx'

function App() {

  const [pacientes, setPacientes] = useState([]);
  
  return (
    
    <>

      <div className="container mx-auto mt-20">
      <Header/>
        <div className='md:flex mt-12'>
          <Formulario 

            pacientes = {pacientes}
            setPacientes = { setPacientes }
            
          />
          <ListadoPacientes 

            pacientes={pacientes}
          
          />
        </div>
      </div>


    </>

  )
}

export default App
