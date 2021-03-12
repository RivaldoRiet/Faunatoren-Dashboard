export class Notificatie {
    time: number;
    text: string;

    constructor(time?: number, text?: string) {
      this.time = time;
      this.text = text;
    }

    static deserialize(time: number, text: string): Notificatie {
        return new Notificatie(time, text);
      }
  }
