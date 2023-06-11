export class User{
  name?: string;
  username: string;
  password: string;
  birthday?: Date;
  isAdmin: boolean;

  constructor(username: string, password: string, isAdmin = false){
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }

  public static clone(user: User){
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.birthday = user.birthday;
    return u;
  }
}
