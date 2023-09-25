import { Form } from './form';

export class Trapez extends Form {
  constructor(_farbe: string, private _a: number,private _c: number,private _hoehe: number) {
    super(_farbe);
    this._hoehe = _hoehe;
    this._a= _a;
    this._c=_c;
  }

  berechneFlaecheDreieck(_a: number,_hoehe: number,_c: number) {
    let _flaecheTrapez : number;
    _flaecheTrapez=0.5*(_a+_c)*_hoehe;

    return _flaecheTrapez;
  }
  toString(): string {
    let text: string = super.toString();
    text += '\nA: ' + this._a;
    text += '\nC: ' + this._c;
    text += '\nHoehe: ' + this._hoehe;
    return text;
  }
}