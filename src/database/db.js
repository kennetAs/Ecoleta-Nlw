// importa a dependencia da Sqlite3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que ira fazer a operação com o banco de dados.
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db



db.serialize(() => {
    //Com comados SQL 


    //  // 1 Criar uma tabela
    //  db.run(`
    //      CREATE TABLE IF NOT EXISTS places (
    //          id INTEGER PRIMARY KEY AUTOINCREMENT,
    //          image TEXT,
    //          name TEXT,
    //          address TEXT,
    //          address2 TEXT,
    //          state TEXT,
    //          city TEXT,
    //          items TEXT
    //      );
    //  `)      

    // // 2 Inserir dados na tabela
    //  const query = `
    //      INSERT INTO places (
    //          image,
    //          name,
    //          address,
    //          address2,
    //          state,
    //          city,
    //          items
    //      ) VALUES (?,?,?,?,?,?,?);
    //  `
    //  const values = [
    //      "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
    //      "Colectoria",
    //      "Guilherme Gemballa, Jardim América",
    //      "Nº 260",
    //      "Santa Cantarina",
    //      "Rio do Sul",
    //      "Residuos Eletrónicos, Lâmpadas"
    //  ]
    
    //  function afterInsertData(err) {
    //      if(err) {
    //          return console.log(err)
    //      }

    //      console.log("Cadastro feito com sucesso")
    //      console.log(this)
    //  }
    
    // db.run(query, values, afterInsertData)

//     // 3 Consultar dados na tabela

//     db.all('SELECT * FROM places', function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

    // 4Deleta um dado da tabela
        //  db.run('DELETE FROM places WHERE id = ?', [], function(err) {
        //      if(err) {
        //          return console.log(err)
        //  }

        //     console.log(" deletado com sucesso!")
  
        //  })


})  
