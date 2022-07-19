import '../assets/css/main.css'
import '../assets/css/cards.css'
import lavadora from '../assets/img/lavgonzalo.png'
import anaquel from '../assets/img/ventas.png'
import licuadora from '../assets/img/licuadora.jpeg'
import { CardServi } from '../components/cards/CardServi'

export const Servicios = () => {
  return (
    <>
      <div className="row tit-seccion">
        <h3>
          Servicios
        </h3>
      </div>
      <div className="col-4 my-5">
        <CardServi title={'Reparacion de lavadoras'}
          content='Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.'
          imgref={lavadora}
          titButton="Agenda una cita"
        />
      </div>
      <div className="col-4 my-5">
        <CardServi title={'Venta de refacciones'}
          content='Contamos con un amplio surtido de refacciones para electrodomesticos ¡Cotiza ahora mismo!'
          imgref={anaquel}
          titButton="Cotiza"
        />
      </div>
      <div className="col-4 my-5">
        <CardServi title={'Licuadoras y estufas'}
          content='Contamos con servicio y venta de refacciones para tus licuadoras,estufas y ollas express'
          imgref={licuadora}
          titButton={'Cotiza'}
        />
      </div>
    </>
  )
}
