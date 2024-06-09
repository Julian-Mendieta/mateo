const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('agregarProducto debe añadir un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 100 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito.length).toBe(1);
        expect(carrito.carrito[0]).toEqual(producto);
    });

    test('calcularTotal debe devolver el total correcto', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.calcularTotal()).toBe(300);
    });

    test('aplicarDescuento debe aplicar correctamente el descuento', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(10)).toBe(270); // 300 - 10% = 270
    });

    test('aplicarDescuento con 0% debe devolver el mismo total', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(0)).toBe(300);
    });

    test('aplicarDescuento con 100% debe devolver 0', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(100)).toBe(0);
    });
});