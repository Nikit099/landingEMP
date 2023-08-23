import { useState } from "react";
import "./index.css";
import Header from "./components/header";
import WhiteWave from "./components/whiteWave";
import MakePreorder from "./components/makePreorder";
import GreenWave from "./components/greenWave";
import OurProducts from "./components/ourProducts";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import TeamGallery from "./components/teamGallery";


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
      <FAQ />
      <TeamGallery />
      <MakePreorder order={order} setOrder={setOrder} />
      <Footer />
    </div>
  )
}

export default App
