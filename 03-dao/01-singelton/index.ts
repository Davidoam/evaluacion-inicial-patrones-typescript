interface User {
  id: number;
  name: string;
  email: string;
}

interface UserDAO {
  selectAll(): User[];
  selectById(id: number): User | undefined;
  insert(user: User): void;
  update(user: User): boolean;
  delete(id: number): boolean;
}

class ArrayUserDAO implements UserDAO {
  private users: User[] = [];

  public selectAll(): User[] {
    return [...this.users];
  }

  public selectById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  public insert(user: User): void {
    this.users.push(user);
  }

  public update(user: User): boolean {
    const index = this.users.findIndex((savedUser) => savedUser.id === user.id);

    if (index === -1) {
      return false;
    }

    this.users[index] = user;
    return true;
  }

  public delete(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      return false;
    }

    this.users.splice(index, 1);
    return true;
  }
}

const userDAO: UserDAO = new ArrayUserDAO();

userDAO.insert({ id: 1, name: "Ana", email: "ana@email.com" });
userDAO.insert({ id: 2, name: "Luis", email: "luis@email.com" });

console.log("Todos los usuarios:", userDAO.selectAll());
console.log("Usuario con id 1:", userDAO.selectById(1));

userDAO.update({ id: 1, name: "Ana Garcia", email: "ana@email.com" });
userDAO.delete(2);

console.log("Usuarios finales:", userDAO.selectAll());
