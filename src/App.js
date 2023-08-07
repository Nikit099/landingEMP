import { useState } from "react"
import "./index.css"
import PreOrder from "./components/preOrder"
import Header from "./components/header"


function App() {
  const [order, setOrder] = useState([
    { title: "email", body: "" },
    { title: "telega", body: "" },
  ])

  return (
    <div className="App">
      <Header />
      <PreOrder order={order} setOrder={setOrder} />

    </div>
  )
}

export default App
