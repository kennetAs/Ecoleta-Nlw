const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db")


// configurar pasta selecionada
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))


//Utilizando pasta publica
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Responta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

        //req.query: Query strings da nossa url
   // console.log(req.query)
    console.log(req.query)

    return res.render("create-point.html")
})


server.post('/servepoint', (req, res) => {

    // req.body: o corpo da nossa formulário
    //console.log(req.body)

    //  Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    
    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.setDefaultEncoding("ERRO no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }

     db.run( query, values, afterInsertData)

})



server.get("/search", (req, res) => {


    const search = req.query.search

    if (search == "") {
        return res.render("search-results.html", {total: 0})
    }

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
         
        console.log("Aqui estão seus registros: ")
        console.log(rows)
        //Mostrar a página hmlt com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
    })

   
})




// ligar o servidor
server.listen(3000)