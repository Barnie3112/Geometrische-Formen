import { Form } from './form';

export class Dreieck extends Form {
  constructor(_farbe: string, private _grundseite: number,private _hoehe: number) {
    super(_farbe);
    this._hoehe = _hoehe;
    this._grundseite= _grundseite;
  }

  berechneFlaecheDreieck(_grundseite: number,_hoehe: number) {
    let _flaecheDreieck : number;
    _flaecheDreieck=0.5*_hoehe*_grundseite;

    return _flaecheDreieck;
  }
  toString(): string {
    let text: string = super.toString();
    text += '\nGrundseite: ' + this._grundseite;
    text += '\nHoehe: ' + this._hoehe;
    return text;
  }
}