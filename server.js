import express from 'express'

const app = express();

const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
    res.json({message: "Hi, from Server :)"})
})

app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on PORT ${PORT}`)
})