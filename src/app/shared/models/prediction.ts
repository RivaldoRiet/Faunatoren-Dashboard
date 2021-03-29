export class Prediction {
    name: string;
    value: number;

    constructor(name?: string, value?: number) {
      this.name = name;
      this.value = value;
    }

    static deserialize(name: string, value: number): Prediction {
        return new Prediction(name, value);
      }
  }
