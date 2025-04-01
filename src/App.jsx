import Automovil from "./components/automovil";
import Header from "./components/header";
import useCart from "./hooks/useCart";

function App() {
  const {
    data,
    carrito,
    addToCar,
    removeCars,
    restarCantidad,
    limpiarCarrito,
    sumarCarrito,
    carTotal,
  } = useCart();

  return (
    <>
      <Header
        carrito={carrito}
        removeCars={removeCars}
        restarCarrito={restarCantidad}
        sumarCarrito={sumarCarrito}
        limpiar={limpiarCarrito}
        carTotal={carTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5">
          {data.map((automovil) => (
            <Automovil
              key={automovil.id}
              automovil={automovil}
              button={addToCar}
            />
          ))}
        </div>
      </main>

      <footer className="mt-5 py-5">
        <div className="container-xl">
          <p className="text-center fs-6 mt-4 m-md-0 text-muted">
            © 2024 Super Carros, Inc
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
