import { useState } from "react"
import "./App.css"
import PreOrder from "./components/preOrder"

function App() {
  const [order, setOrder] = useState([
    { title: "email", body: "" },
    { title: "telega", body: "" },
  ])

  return (
    <div className="App">
      <PreOrder order={order} setOrder={setOrder} />
    </div>
  )
}

export default App
