import '../assets/css/main.css'
import '../assets/css/cards.css'
import { CardServi } from '../components/cards/CardServi'

export const Servicios = () => {
  return (
    <>
        <h3>
          Servicios
        </h3>
      <div className="col-3 my-5">
        <CardServi title={'Reparacion y Mantenimiento'}
          content='brindamos servicio de calidad'
        />
      </div>
      <div className="col-3 my-5">
        <CardServi title={'Venta de refacciones'}
          content='brindamos servicio de calidad'
        />
      </div>
      <div className="col-3 my-5">
        <CardServi title={'Servicio a domicilio'}
          content='brindamos servicio de calidad'
        />
      </div>
      <div className="col-3 my-5">
        <CardServi title={'Licuadoras y estufas'}
          content='brindamos servicio de calidad'
        />
      </div>
    </>
  )
}
