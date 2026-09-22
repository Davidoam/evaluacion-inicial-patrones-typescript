abstract class Notificacion {
  public static readonly EMAIL = "email";
  public static readonly PUSH = "push";
  public static readonly SMS = "sms";

  public abstract enviar(mensaje: string): void;
}

class EmailNotification extends Notificacion {
  public enviar(mensaje: string): void {
    console.log(`Enviando email: ${mensaje}`);
  }
}

class PushNotification extends Notificacion {
  public enviar(mensaje: string): void {
    console.log(`Enviando push: ${mensaje}`);
  }
}

class SmsNotification extends Notificacion {
  public enviar(mensaje: string): void {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

class NotificationFactory {
  public static create(notification: string): Notificacion | null {
    switch (notification) {
      case Notificacion.EMAIL:
        return new EmailNotification();
      case Notificacion.PUSH:
        return new PushNotification();
      case Notificacion.SMS:
        return new SmsNotification();
      default:
        return null;
    }
  }
}

const emailNotification = NotificationFactory.create(Notificacion.EMAIL);
const pushNotification = NotificationFactory.create(Notificacion.PUSH);
const smsNotification = NotificationFactory.create(Notificacion.SMS);

emailNotification?.enviar("Bienvenido a la aplicacion");
pushNotification?.enviar("Tienes una nueva notificacion");
smsNotification?.enviar("Tu codigo es 1234");
