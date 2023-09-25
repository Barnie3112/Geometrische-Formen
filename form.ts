export abstract class Form {
  constructor(public _farbe: string) {}

  berechneFlaeche() {
    return 0;
  }
  toString(): string {
    let text: string = toString();
    text += '\nFarbe: ' + this._farbe;
    return text;
  }
}
