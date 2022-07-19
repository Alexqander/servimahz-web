
import PropTypes from 'prop-types'

export const CardServi = ({ title, content, imgref, titButton }) => {
  return (
      <>
          <div className="card-servi" >
              <div className="cabezera">
                  <h5>{title}</h5>
              </div>
              <div className="cuerpo">
                  <div className="cajaimg">
                  <img src={imgref} className="imagen" />
                  </div>
                  <p>{ content }</p>
              </div>
              <div className="pie py-4 px-4">
                  <button className="boton-card">
                      {titButton}
                  </button>
              </div>
          </div>
      </>
  )
}

CardServi.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imgref: PropTypes.string,
  titButton: PropTypes.string
}
