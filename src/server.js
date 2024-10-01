const express = require ("express")


const app = express()




app.get("/", (request, response) => {
    response.send(":-D")
})




const PORT = 5555
app.listen(PORT, () => console.log(`The server is running on port ${PORT}.`))