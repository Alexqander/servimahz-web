
import { Form, Button } from 'react-bootstrap'

export const Contacto = () => {
  return (
      <>
          <div className="row tit-seccion">
              <h3>
                  Contacto
        </h3>
        </div>
        <div className="row">
          <div className="col-4 px-4 py-2">
          <div className="informacion px-3">
          <h4>Direccion</h4>
            <span>Avenida Gral.Emiliano Zapata 57, Colonia el Castillo,
              Jiutepec, Morelos, México C.P 62564
            </span>
            <h4>Horario</h4>
            <div className="horarios d-flex flex-column">
            <span>Lunes a Viernes : </span>
            <span>09:00am - 07:30pm</span>
            <span>Sabados</span>
            <span>09:00am - 6:00pm</span>
            </div>

            <h4>Teléfonos</h4>
            <div className="telefonos d-flex flex-column">
            <span>777-321-09-48</span>
            <span>777-241-20-87</span>
            <span>777-475-68-03</span>
            </div>
            <h4>Email</h4>
            <span>contacto@servimahz.com.mx</span>
          </div>
          </div>
        <div className="col-7 my-4 py-5 formulario-contacto">
                <h4>Contactanos</h4>
                <span>Solicita una cotizacion o servicio</span>
               <Form className="row px-5 py-5">
                <Form.Group className="mb-3 col-6">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3 col-6">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="tel" placeholder="+5277"/>
                </Form.Group>
                <Form.Group className="mb-3 col-6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 col-6">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Select aria-label='selecciona un asunto'>
                    <option>selecciona un asunto</option>
                    <option value="1">Cotizacion</option>
                    <option value="2">Servicio</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-12">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit" className='col-12 py-3'>Enviar</Button>
            </Form.Group>
              </Form>
          </div>
        </div>
      </>
  )
}
