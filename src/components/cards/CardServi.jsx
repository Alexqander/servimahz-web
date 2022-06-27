
import PropTypes from 'prop-types'

export const CardServi = ({ title, content, imgref }) => {
  return (
      <>
          <div className="card-servi" >
              <div className="cabezera">
                  <h5>{title}</h5>
              </div>
              <div className="cuerpo">
                  <img src={imgref} />
                  <p>{ content }</p>

              </div>
              <div className="pie">
                  <button className="boton-card">
                      Compra aqui
                  </button>
              </div>
          </div>
      </>
  )
}

CardServi.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imgref: PropTypes.string
}
