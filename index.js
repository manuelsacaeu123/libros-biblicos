//express LIBRERIA
const express = require('express');
//INICIAR EL EXPRESS
const app = express();
const PORT = 3000;  //el puerto se puede cambian

//crear un array 
let librosBiblicos = [
    { id: 1, nombre: 'Genesis', autor: 'Moises' },
    { id: 2, nombre: 'Exodo', autor: 'Moises' },
    { id: 3, nombre: 'Levitico', autor: 'Moises' },
];

//manejo de JSON
app.use(express.json());


//creamos nuesto metodo 
//endpoint 1 QUE ESTA OBTENIEDNO TODOS LOS LIBROS
app.get('/libros', (req, res) => {
    res.json(librosBiblicos);
});

//obtener libro por id 
app.get('/libros/:id', (req, res) => {
    //recuperar el id 
    const idCapturado = parseInt(req.params.id);
    //mostramos en la consola 
    console.log(idCapturado);
    const libroEncontrado = librosBiblicos.find((libro) => libro.id === idCapturado);
    if (libroEncontrado) {
        res.json(libroEncontrado);
    } else {
        res.status(404).json({ mensaje: 'libro no econtrado' })
    }
});


//endpoint 3 AGREGAR U LIBRO+
app.post('/agregar-libro', (req, res) => {
    const nuevoLibro = req.body;
    console.log(nuevoLibro);
    librosBiblicos.push(nuevoLibro);
    res.status(201).json('este libro fue guardado exidtosamente');
})

//endpoint 4 actualizr libro
app.put('/actualizar-libro/:id', (req, res) => {
    const idCapturado = parseInt(req.params.id);
    const indexLibroLocalizado = librosBiblicos.findIndex((libro) => libro.id === idCapturado);

    if (indexLibroLocalizado !== -1){
    librosBiblicos[indexLibroLocalizado] = req.body;
    res.json(librosBiblicos[indexLibroLocalizado]);
}else {
    res.status(404).json({ mensaje: 'libro no econtrado' })
}

    //console.log(librosBiblicos);
    //console.log(libroEncontrado);
})

app.listen(PORT, () => {
    console.log("servido corriedno el el puerto http://localhost:" + PORT);
});

