import { useState } from "react"
import "./index.css"
import Header from "./components/header"
import WhiteWave from "./components/whiteWave"
import PreOrder from "./components/preOrder"


function App() {
  const [order, setOrder] = useState([
    { title: "email", body: "" },
    { title: "telega", body: "" },
  ])

  return (
    <div className="App">
      <Header />
      <WhiteWave />
      <PreOrder order={order} setOrder={setOrder} />

    </div>
  )
}

export default App
