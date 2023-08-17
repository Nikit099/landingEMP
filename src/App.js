import { useState } from "react";
import "./index.css";
import Header from "./components/header";
import WhiteWave from "./components/whiteWave";
import PreOrder from "./components/preOrder";
import GreenWave from "./components/greenWave";
import OurProducts from "./components/ourProducts";
import Footer from "./components/footer";


function App() {
  const [order, setOrder] = useState([
    { title: "email", body: "" },
    { title: "telega", body: "" },
  ])

  return (
    <div className="App">
      <Header />
      <WhiteWave />
      <GreenWave />
      <OurProducts />
      <PreOrder order={order} setOrder={setOrder} />
      <Footer />
    </div>
  )
}

export default App
