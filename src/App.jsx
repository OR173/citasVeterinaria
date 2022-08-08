
import {useState} from 'react'

import Header from './componentes/Header'
import Formulario from './componentes/Formulario.jsx'
import ListadoPacientes from './componentes/Lista_Pacientes/ListadoPacientes.jsx'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = paciente.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }
  
  return (
    
    <>

      <div className="container mx-auto mt-20">
      <Header/>
        <div className='md:flex mt-12'>
          <Formulario 

            pacientes = { pacientes }
            setPacientes = { setPacientes }
            paciente = { paciente }
            setPaciente = { setPaciente }
            
          />
          <ListadoPacientes 

            pacientes = { pacientes }
            setPaciente = { setPaciente }
            eliminarPaciente = { eliminarPaciente }
          
          />
        </div>
      </div>


    </>

  )
}

export default App
