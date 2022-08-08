

import ListaPacientes from "./ListaPacientes.jsx";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="text-center font-black text-3xl">
              Listado de pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">
                Pacientes y Citas
              </span>
            </p>

            {pacientes.map(paciente => (
                <ListaPacientes 
                    key = { paciente.id } 
                    paciente = { paciente } 
                    setPaciente = { setPaciente }
                    eliminarPaciente = { eliminarPaciente }
                />
            ))}
          </>
        ) : (
          <>
            <h2 className="text-center font-black text-3xl">
              No hay Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Agrega tus pacientes {""}
              <span className="text-indigo-600 font-bold">
                y se mostraran aqui
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
export default ListadoPacientes;
