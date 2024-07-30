/**
 * obs: este script não é necessário caso opte por usar o live-server
 */

const express = require("express")
const path = require("path")
const port =  3000;

const app = express()

// servi arquivos estaticos da raiz do projeto
app.use(express.static(path.join(__dirname)))


// serve p arquivo index.html no endpoint "/"
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, () => {
	console.log("server is running on port 3000")
})