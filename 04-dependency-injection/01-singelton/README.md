1. Que es una dependencia?
    Una dependencia es una clase o servicio que otra clase necesita para realizar su trabajo.

2. Que significa inyectar una dependencia?
    Significa proporcionar esa dependencia desde el exterior, normalmente mediante el constructor.

3. Que diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
    Con new la clase queda unida a una implementacion concreta. Al recibirla por el constructor podemos cambiarla sin modificar la clase.

4. Que problema genera un alto acoplamiento?
    Un alto acoplamiento dificulta cambiar, reutilizar y mantener las clases sin afectar al resto de la aplicacion.

5. Que ventaja proporciona Dependency Injection para realizar pruebas?
    Permite sustituir una dependencia real por una falsa o simulada y probar la clase de forma aislada.

6. Por que este concepto es especialmente importante en frameworks como NestJS?
    Porque NestJS crea e inyecta automaticamente los servicios necesarios, facilitando el desacoplamiento, las pruebas y el mantenimiento.
