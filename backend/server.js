import express from 'express'
import cors from 'cors'

const app = express();
const port = 8080

app.use(
    cors({
        origin: "http://127.0.0.1:5173"
    })
)

app.get('/hello', (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})
