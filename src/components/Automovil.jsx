import React from 'react'

const Automovil = () => {
  return (
    <>
      <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">
        <div className="col-10 row align-items-center mx-auto">
          <img
            className="img-fluid"
            src="./public/img/aspark owl.jpg"
            alt="imagen automóvil"
          />
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            Bugatti Chiron
          </h3>
          <p>Bugatti</p>
          <p>420 km/h</p>
          <p>2016</p>
          <p className="fw-black text-primary fs-3">U$S - 3.300.000</p>
          <button type="button" className="btn btn-dark w-100">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  )
}

export default Automovil