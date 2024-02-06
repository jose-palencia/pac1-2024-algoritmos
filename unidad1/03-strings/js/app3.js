const producto = 'Mouse DELL';
const precio = 'L 299.99';

console.log( producto.concat(' ').concat(precio).concat(' antes L 300.00'));

console.log(producto + ' ' + precio + ' antes L 300.00' );
console.log(producto, precio, 'antes L 300.00' );

// Template string o Template literals
console.log(`El producto ${producto} tiene un precio de ${precio}`);
