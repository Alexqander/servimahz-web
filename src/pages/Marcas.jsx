import mabe from '../assets/img/mabe.png'
import whp from '../assets/img/whirlpool.png'
import samsung from '../assets/img/samsung.png'
import lg from '../assets/img/lg.png'
import electrolux from '../assets/img/electrolux.png'
import embraco from '../assets/img/embraco.png'
import maytag from '../assets/img/maytag.png'
import ecko from '../assets/img/ecko.png'
import oster from '../assets/img/oster.png'
import hb from '../assets/img/hb.png'
import gb from '../assets/img/gb.png'
import secop from '../assets/img/secop.png'
import presto from '../assets/img/presto.png'
import quimobasicos from '../assets/img/quimobasicos.png'
import tfal from '../assets/img/tfal.png'

import { useRef, useEffect } from 'react'

export const Marcas = () => {
  const slideshow = useRef(null)

  const siguiente = () => {
    console.log(slideshow.current)
    if (slideshow.current.children.length > 0) {
      console.log('siguiente')
      const primerElemento = slideshow.current.children[0]
      // eslint-disable-next-line quotes
      slideshow.current.style.transition = `7000ms ease-out all`

      const tamañoSlide = slideshow.current.children[0].offsetWidth
      // eslint-disable-next-line quotes
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

      const transicion = () => {
        // eslint-disable-next-line quotes
        slideshow.current.style.transition = `none`
        // eslint-disable-next-line quotes
        slideshow.current.style.transform = `translateX(0)`
        slideshow.current.appendChild(primerElemento)
      }

      slideshow.current.addEventListener('transitionend', transicion)
    }
  }

  useEffect(() => {
    setInterval(() => {
      siguiente()
    }, 100)
  }, [])

  return (
      <>
          <div className="row my-5 px-5">
              <h3 className="titulo-marca">Contamos con las mejores marcas</h3>
              <div className="carrusel">
                  <div className="slide-padre" ref={slideshow}>
                      <div className="slide-item">
                      <img src={mabe} alt="" className="img-marca" />
                      <img src={whp} alt="" className="img-marca" />
                      <img src={samsung} alt="" className="img-marca" />
                      <img src={lg} alt="" className="img-marca" />
                      </div>
                      <div className="slide-item">
                      <img src={electrolux} alt="" className="img-marca" />
                      <img src={maytag} alt="" className="img-marca" />
                      <img src={embraco} alt="" className="img-marca" />
                      <img src={secop} alt="" className="img-marca" />
                      </div>
                      <div className="slide-item">
                      <img src={oster} alt="" className="img-marca" />
                      <img src={hb} alt="" className="img-marca" />
                      <img src={ecko} alt="" className="img-marca" />
                      <img src={presto} alt="" className="img-marca" />
                      </div>
                      <div className="slide-item">
                      <img src={tfal} alt="" className="img-marca" />
                      <img src={gb} alt="" className="img-marca" />
                      <img src={quimobasicos} alt="" className="img-marca" />
                      </div>
                  </div>
              </div>
      </div>
      </>
  )
}
