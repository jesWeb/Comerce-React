import { useState } from "react";
import Automovil from "./components/automovil";
import Header from "./components/header";
import { db } from "./data/db";

function App() {
  //esatdo de button
  const [carrito, setCarrito] = useState([]);

  //extraer data
  const data = db;
  // console.log("====================================");
  // console.log(data);
  // console.log("====================================");

  //btn de agregar items
  function addToCar(item) {
    //console.log("agregando al carrito", item);
    const itemExist = carrito.findIndex(
      (automovil) => automovil.id === item.id
    );

    if (itemExist >= 0) {
      const updateCarrito = [...carrito];
      updateCarrito[itemExist].quantity++;
      setCarrito(updateCarrito);
    } else {
      item.quantity = 1;
      setCarrito([...carrito, item]);
    }
  }

  //remover los items
  function removeCars(idDelete) {
    //console.log(`Elimindado....`, id);
    setCarrito((preCart) =>
      preCart.filter((automovil) => automovil.id !== idDelete)
    );
  }

  //quitar elementos
  function restarCantidad(id) {
    const updatedCar = carrito.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCarrito(updatedCar);
  }

  //agregar elementos

  function sumarCarrito(id) {
    const upadateCarritoPlus = carrito.map((item) => {
      if (item.id === id && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCarrito(upadateCarritoPlus);
  }

  //limpiar carrito
  function limpiarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Header
        carrito={carrito}
        removeCars={removeCars}
        restarCarrito={restarCantidad}
        sumarCarrito={sumarCarrito}
        limpiar={limpiarCarrito}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5">
          {data.map((automovil) => (
            <Automovil
              key={automovil.id}
              automovil={automovil}
              button={addToCar}
              setCarrito={setCarrito}
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
