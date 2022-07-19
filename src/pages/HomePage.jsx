import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Contacto } from './Contacto'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'
import refri from '../assets/img/refri.jpeg'
import { Marcas } from './Marcas'

export const HomePage = () => {
  return (
    <>
      <NavServi></NavServi>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-5 titulo my-5 px-5 py-5">
            <h2>¿TU LAVADORA Ó REFRIGERADOR ESTAN FALLANDO?</h2>
            <h5>En servimahz te brindamos el mejor servicio de reparacion y mantenimiento para tus electrodomesticos. </h5>
            <div className="botones d-flex justify-content-start">
              <a href="#" className="btn-contacto">
                Conocenos
              </a>
              <a href="#" className="btn-grad">
                Contactanos
              </a>
            </div>
          </div>
          <div className="col-7 px-0">
            <div className="cajaImg d-flex py-5">
              <img src={refri} className="lavadora"/>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <Nosotros />
        </div>
        <div className="row my-5">
          <Servicios />
          <Marcas/>
        </div>
        <div className="row my-5">
            <Contacto/>
        </div>
          <FooterServi/>
        </div>
      </>
  )
}
