import { Form } from './form';

export class Kreis extends Form {
  constructor(_farbe: string, private _radius: number) {
    super(_farbe);
    this._radius = _radius;
  }

  berechneFlaecheKreis(_radius: number) {
    let _flaechekreis = Math.PI * Math.pow(_radius, 2);

    return _flaechekreis;
  }
  toString(): string {
    let text: string = super.toString();
    text += '\nRadius: ' + this._radius;
    return text;
  }
}
