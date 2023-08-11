import { useState } from "react"
import PreOrder from "./components/preOrder"
import axios from "axios"

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
      <PreOrder
        handleFormSubmit={handleFormSubmit}
        order={order}
        setChangeInputs={setChangeInputs}
      />
    </div>
  )
}

export default App
