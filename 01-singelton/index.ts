//Creamos la clase
class DatabaseConnection {
  private static instance: DatabaseConnection;
    //Constructor privado 
  private constructor() {
    console.log("Creando conexion a la base de datos...");
  }
    //Método getI
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

    //Apoyo visual
  public query(sql: string): void {
    console.log(`[Conexion] Ejecutando: ${sql}`);
  }
}

const firstConnection = DatabaseConnection.getInstance();
const secondConnection = DatabaseConnection.getInstance();

firstConnection.query("SELECT * FROM users");
secondConnection.query("SELECT * FROM products");

console.log(
  "Las dos conexiones son el mismo objeto:",
  //Confirmación real de que son lo mismo
  firstConnection === secondConnection,
);
