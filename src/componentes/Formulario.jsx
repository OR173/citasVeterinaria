
import {useState, useEffect} from 'react'

import MensajeError from './utensilios/mensajeError.jsx'

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {   
    
    const [nombre,      setNombre]          = useState('');
    const [propietario, setPropietario]     = useState('');
    const [email,       setEmail]           = useState('');
    const [fecha,       setFecha]           = useState('');
    const [sintomas,    setSintomas]        = useState('');
    const [error,       setError]           = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre       (paciente.nombre)
            setPropietario  (paciente.propietario)
            setEmail        (paciente.email)
            setFecha        (paciente.fecha)
            setSintomas     (paciente.sintomas)
        }
    },[paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha ;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( [nombre, propietario, email, fecha, sintomas ].includes('') ){
            
            setError(true);
            return;
        }

        setError(false);
        
        const objetoPacientes = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }
        
        if (paciente.id){

            objetoPacientes.id = paciente.id ; 
            const pacientesActualizados = pacientes.map (

                pacienteState => pacienteState.id ===

                paciente.id ? objetoPacientes : pacienteState

            )

            setPacientes(pacientesActualizados);
            setPaciente({});

        }else{
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);

        }


        //Reiniciar el Form

        setNombre('');
        setPropietario('');
        setFecha('');
        setEmail('');
        setSintomas('');
    }

    
    return( <>

    <div className="md:w-1/2 lg:w-2/5 h-screen">
        
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>

        </p>
        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

            {error && <MensajeError mensaje='todos los campos son obligatorios'/>}

            <div className="mb-5">
                <label htmlFor="mascota" className="text-gray-700 uppercase font-bold">Nombre de la mascota {nombre}</label>
                <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="text-gray-700 uppercase font-bold">Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="text-gray-700 uppercase font-bold">Fecha Alta</label>
                <input 
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value) }
                />
            </div>
            <input 
                type="submit"
                className="bg-indigo-600 text-white w-full uppercase p-3 font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />
        </form>
    </div>


</> )}  export default Formulario;  