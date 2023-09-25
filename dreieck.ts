import { Form } from './form';

export class Dreieck extends Form {
  constructor(_farbe: string, private _grundseite: number,private _hoehe: number) {
    super(_farbe);
    this._hoehe = _hoehe;
    this._grundseite= _grundseite;
  }

  berechneFlaecheDreieck(_radius: number) {
    let _flaecheDreieck = ;

    return _flaecheDreieck;
  }
  toString(): string {
    let text: string = super.toString();
    text += '\nRadius: ' + this._radius;
    return text;
  }
}