require("dotenv").config();
const express = require("express");
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express();

//Middlewares
app.use(cors())
app.use(express.json())

//Default Health Route
app.get("/api/checkHealth", (req, res) => {
    res.status(200).json({ message: 'API is running...' })
})

//Start Server
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})
