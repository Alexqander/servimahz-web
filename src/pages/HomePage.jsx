import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'
export const HomePage = () => {
  return (
    <>
      <NavServi></NavServi>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 titulo my-5 px-5">
            <h2>¿TU LAVADORA Ó REFRIGERADOR ESTAN FALLANDO?</h2>
            <h5>En servimahz te brindamos el mejor servicio de reparacion y mantenimiento para tus electrodomesticos. </h5>
            <div className="botones d-flex justify-content-start">
              <button className="btn-contacto">
                Conocenos
              </button>
              <button className="btn-grad">
                Contactanos
              </button>
            </div>
          </div>
          <div className="col-7 px-0">
            <div className="cajaImg d-flex">
              <img src="https://i.imgur.com/0Zphs9N.jpg" className="lavadora"/>
            </div>
          </div>
        </div>
        <div className="row my-1">
          <Nosotros />
        </div>
        <div className="row my-5">
          <Servicios/>
        </div>
          <FooterServi/>
        </div>
      </>
  )
}
