import { useEffect, useState } from "react";
import { db } from "../data/db";


const useCart = () => {
  //localstorage
  const local = () => {
    const localstorageCar = localStorage.getItem("carro");
    return localstorageCar ? JSON.parse(localstorageCar) : [];
  };
  //esatdo de button antes era un arreglo pero por el lcal storage cambia
  const [carrito, setCarrito] = useState(local);
  //extraer data
  const data = db;
  // console.log(data);
  useEffect(() => {
    localStorage.setItem("carro", JSON.stringify(carrito));
  }, [carrito]);
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
  //header
  //operacion de carrito del costo final
  const carTotal = carrito.reduce((total, { quantity, price }) => {
    return total + quantity * price;
  }, 0);

  return {   data,
    carrito,
    addToCar,
    removeCars,
    restarCantidad,
    limpiarCarrito,
    sumarCarrito,
    carTotal};
};

export default useCart;
