1. ¿Que problema resuelve Factory?
    Factory resuelve el problema de tener que crear objetos directamente en muchas partes del codigo, centralizando esa creacion en una clase.

2. ¿Que ventaja tiene respecto a utilizar new directamente por toda la aplicacion?
    La ventaja es que no necesitamos usar new por toda la aplicacion, sino que pedimos al Factory el objeto que necesitamos.

3. ¿Que tendria que ocurrir si manana anadimos WhatsAppNotification?
    Tendriamos que crear la clase WhatsAppNotification y anadir un nuevo caso en el Factory para que pueda devolver ese objeto.

4. ¿Quien tiene la responsabilidad de crear los objetos?
    La responsabilidad de crear los objetos la tiene la clase Factory, que decide que tipo de objeto devolver segun lo que se le pida.

5. ¿Que ventaja proporciona Factory respecto al acoplamiento?
    Factory reduce el acoplamiento porque el resto del codigo no necesita conocer como se crean las clases concretas, solo pedirlas al Factory.
