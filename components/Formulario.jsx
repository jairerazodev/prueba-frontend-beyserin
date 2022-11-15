import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { NumericFormat } from 'react-number-format';


function Formulario() {

const [documento, setDocumento] = useState('');
const [numero, setNumero] = useState('');

const formError = validar(documento, numero);

const data = {
  "clientes": {
    "identificacion": {documento},
    "identificador": {numero}
  }
}

const salvarData = () => { 
  localStorage.setItem('data', JSON.stringify(data)); 
} 

return (
    <>
      <header className='d-flex mx-auto pt-1'>
        <p className='fs-6 fw-normal text-warning pt-3'>
          <small>Todos los campos son obligatorios</small>
        </p>
      </header>
      
      <main className="mx-auto">
        <Form.Group className="mb-3"
          onSubmit=
          {
            evento => {
            evento.preventDefault();
            }
          } >

        <Form.Label 
          className='h6 text-info fs-6 fw-semibold'>
          <small>Tipo de documento</small>
        </Form.Label>
        <Form.Select 
          className='rounded-1' 
          name='tipo-documento' 
          id='documento'
          value={documento}
          onChange={evento => setDocumento(evento.target.value)}
          required >
          <option disabled></option>
          <option value='cedula'>Cédula de cuidadanía</option>
          <option value='pasaporte'>Pasaporte</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className='h6 text-info fs-6 fw-semibold'>
          <small>Número de documento</small>
          </Form.Label>
        <Form.Control 
          className='rounded-1' 
          placeholder='1039454860' 
          name='numero-documento' 
          id='numero'
          value={numero}
          type='number'
          onChange={evento => setNumero(evento.target.value)} />
      </Form.Group>

      <section className='row row-cols-1 mx-auto'>

          <button 
            type='submit'
            disabled={formError}
            onClick={salvarData}
            className='
              col-9
              p-2
              fs-6
              mt-3
              fw-semibold
              btn
              btn-primary
              text-warning 
              rounded-pill'>
            <Link
              className='text-warning text-decoration-none'
              to="/resumen">
              <small>Buscar</small>
            </Link>
          </button>

      </section>
      
    </main>
  </>
);
}

const validar = (documento, numero) => {
if
  (!documento.includes('a')) 
    return('Seleccione tipo de documento');
if
  (numero.length < 8 || numero.length > 11)
    return('Formato de número ingresado incorrecto');

}


export default Formulario;