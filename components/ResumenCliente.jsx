import React from 'react';
import { Link } from 'react-router-dom';

const ResumenCliente = () => {

  function GetFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  var myData = GetFromLocalStorage("data");
  
  console.log(myData.clientes.identificacion.documento);


  return(
    <>
      <section className='container mt-4'>
        <div className='row row-cols-1'>
          <h5 className=''>Información básica</h5>

          <small className=' text-mute opacity-50'>Primer apellido</small>
          <div className=' text-mute opacity-75'>
            <p className='text-bg-secondary p-2 rounded-1 fw-semibold opacity-50'>Pérez</p>
          </div>  

          <small className=' text-mute opacity-50'>Primer nombre</small>
          <div className=' text-mute opacity-75'>
            <p className='text-bg-secondary p-2 rounded-1 fw-semibold opacity-50'>Jhenny</p>
          </div>

          <small className=' text-mute opacity-50'>Tipo de documento</small>
          <div className=' text-mute opacity-75'>
            <p className='text-bg-secondary p-2 rounded-1 fw-semibold opacity-50'>{myData.clientes.identificacion.documento}</p>
          </div>

          <small className=' text-mute opacity-50'>Número de documento</small>
          <div className=' text-mute opacity-75'>
            <p className='text-bg-secondary p-2 rounded-1 fw-semibold opacity-50'>{myData.clientes.identificador.numero}</p>
          </div>

          <button
            type='button'
            className='
              col-9
              p-2
              fs-6
              mt-3
              mx-auto  
              fw-semibold
              btn
              btn-primary
              text-warning 
              rounded-pill'>
            <Link
              to="/">
              <small className='text-warning'>Volver</small>
            </Link>
        </button>
        </div>
      </section>
    </>
  );
}

export default ResumenCliente;