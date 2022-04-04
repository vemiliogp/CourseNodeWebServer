const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // const persona = {
    //     id: 1,
    //     nombre: 'Victor'
    // }
    // res.write(JSON.stringify(persona));
    // res.write("id, nombre\n");
    // res.write("1, Victor\n");
    // res.write("2, Pedro\n");
    // res.write("3, Maria\n");
    // res.write("4, Esteban\n");
    // res.end();

    res.write('Hola Mundo');
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
