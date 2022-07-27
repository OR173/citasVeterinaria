
function mensajeError({mensaje}) {   return (
  <>
    <div className="bg-red-800 rounded-md text-white text-center p-3 uppercase mb-3 font-bold">
      <p>{mensaje}</p>
    </div>
  </>
);}  export default mensajeError;  