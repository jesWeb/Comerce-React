import Automovil from "./components/automovil";
import Header from "./components/header";
import { db } from "./data/db";

function App() {
  const data = db;
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5">
          {data.map((automovil) => (
            <Automovil key={automovil.id} automovil={automovil} />
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
