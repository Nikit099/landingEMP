import { useState } from "react";
import axios from 'axios';
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
  const setChangeInputs = (e, title) => {
    console.log("change")

    setOrder(
      order.map((elem) =>
        elem.title === title ? { ...elem, body: e.target.value } : { ...elem }
      )
    )
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post("https://61c3f0c4f1af4a0017d99198.mockapi.io/favorites", order)
    setOrder([
      { title: "email", body: "" },
      { title: "telega", body: "" },
    ])
  }

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
