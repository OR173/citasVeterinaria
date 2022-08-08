

function ListaPacientes({paciente, setPaciente, eliminarPaciente}) {   
    
    const handleEliminar = () => {
        const respuesta = confirm('deseas eliminar el paciente?');

        if (respuesta){
            eliminarPaciente(paciente.id);
        }
    }
    
    return( <>

    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-gray-700 mb-3"> Nombre de la Mascota: {''}
            <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">propietario: {''}
            <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3"> email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3"> fecha alta: {''}
            <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3"> sintomas: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div>
            <button 
            type="button"
            className="text-white full-bold mx-2 uppercase rounded-md bg-indigo-600 py-2 px-5  hover:bg-indigo-700"
            onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            <button 
            onClick={handleEliminar}
            type="button"
            className="text-white  full-bold mx-2 uppercase rounded-md bg-red-600 py-2 px-5 hover:bg-red-700">
                Eliminar
            </button>
            
        </div>
    </div>


</> )}  export default ListaPacientes;  
