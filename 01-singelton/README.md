1.	¿Qué problema intenta resolver Singleton?
    El Singelton intenta arreglar el problema que se puede llegar a tener al crear muchas instancias de una clase en la que solo debería de haber una.

2.	¿Por qué suele utilizarse un constructor private?
    Se utiliza un constructor private para que no se pueda crear una instancia de la clase usando new desde fuera, obligando a usar el metodo correspondiente.


3.	¿Cómo se obtiene una instancia de la clase?
    La instancia se obtiene a través de un método, que podemos llamar por ejemplo getInstance, en el que si es la primera vez que creamos una instancia en la clase se crea una nueva, la cual será única, y la siguiente vez que lo llamemos devolverá la instancia ya creada

4.	¿Qué ocurriría si pudiéramos utilizar new libremente?
    Si pudieramos utilizar new libremente se podrian crear muchas instancias de la clase, por lo que ya no se estaria cumpliendo el patron Singelton.


5.	Pon un ejemplo real donde utilizarías Singleton.
    Un ejemplo real donde se podría ultilizar el Singelton sería en la configuración de una aplicación.

6.	¿Qué inconveniente puede tener abusar de Singleton?
    Que al tener solo una instancia a largo plazo estaríamos incumpliendo los principios SOLID
