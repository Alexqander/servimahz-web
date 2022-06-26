import '../assets/css/footer.css'
import telefono from '../assets/img/telefono.png'
import whatsapp from '../assets/img/whatsapp.png'
import email from '../assets/img/email.png'
import facebook from '../assets/img/facebook.png'

export const FooterServi = () => {
  return (
      <>
          <footer className="row px-5 py-5-">
              <div className="col-6 d-flex align-items-center">
                  <h4 className="mx-3 marca">sm</h4>
                  <div className="caja-nom">
                      <h5 className='mx-3 descrip'>
                          servicio de refrigeracion mahz
                      </h5>
                  </div>
              </div>
              <div className="col-6 text-end">
                  <div className="d-flex align-items-center justify-content-end my-3">
                      <img src={telefono} width="30px" height="30px" className="mx-3" />
                    <div>
                      <h4>7773210948</h4>
                      <h4>7772412087</h4>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end my-3">
                       <img src={whatsapp} width="30px" height="30px" className="mx-3" />
                  <h4>7774576803</h4>
                    </div>
                  <div className="d-flex align-items-center justify-content-end my-3">
                     <img src={email} width="30px" height="30px" className="mx-3" />
                  <h4>servimahz@hotmail.com</h4>
                </div>
                  <div className="d-flex align-items-center justify-content-end my-3">
                <img src={facebook} width="30px" height="30px" className="mx-3" />
                  <h4>@servimaz</h4>
                    </div>
              </div>

        </footer>
      </>
  )
}
