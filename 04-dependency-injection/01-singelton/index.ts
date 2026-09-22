interface NotificationService {
  send(message: string): void;
}

class EmailService implements NotificationService {
  public send(message: string): void {
    console.log(`Enviando email: ${message}`);
  }
}

class SmsService implements NotificationService {
  public send(message: string): void {
    console.log(`Enviando SMS: ${message}`);
  }
}

class UserService {
  constructor(private readonly notificationService: NotificationService) {}

  public register(name: string): void {
    console.log(`Usuario registrado: ${name}`);
    this.notificationService.send(`Bienvenido, ${name}`);
  }
}

const emailService = new EmailService();
const emailUserService = new UserService(emailService);
emailUserService.register("Ana");

const smsService = new SmsService();
const smsUserService = new UserService(smsService);
smsUserService.register("Luis");
