export default function handler(req, res) {

  if (req.method !== "POST")
    return res.status(400).json({ message: 'Método inválido' })

  const { number } = JSON.parse(req.body)
  console.log(number)

  const randomNumber = Math.floor(Math.random() * 10 + 1)

  if (number === randomNumber) {
    res.status(200).json({
      message: "Parabéns! Você acertou.",
      randomNumber,
      status: true,
    })
  } else {
    res.status(200).json({
      message: "Poxaaa, que pena. Tente novamente!",
      randomNumber,
      status: false,
    })
  }


}