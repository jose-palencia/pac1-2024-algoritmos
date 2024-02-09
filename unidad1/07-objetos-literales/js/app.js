// Objetos

const producto = {
    nombre: 'Bicicleta',
    precio: 4999,
    modelo: 'Carrera',
    disponible: true
};

// console.log(producto);

// Retorna un arreglo con los nombres de las propiedades del objeto (izquierda)
console.log(Object.keys(producto));

// Retorna un arreglo con los valores de las propiedades del objeto (derecha)
console.log(Object.values(producto));

// Retornar todo
console.log(Object.entries(producto))
