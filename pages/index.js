import React, { useState } from 'react'

const Home = () => {

  const [number, setNumber] = useState(1)
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(false)
  const [randomNumber, setRandomNumber] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/hello', {
        method: "POST",
        body: JSON.stringify({
          number: Number(number)
        })
      })

      const data = await response.json()

      console.log(data)
      setMessage(data.message)
      setStatus(data.status)
      setRandomNumber(data.randomNumber)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <label>Digite um número entre 1 e 10</label>
      <br />
      <input
        type="number"
        min={1}
        max={10}
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Enviar</button>

      <p
        style={{
          color: status ? 'green' : 'red'
        }}
      >{message}</p>

      <p>Número gerado: {randomNumber}</p>
    </div>
  )
}

export default Home