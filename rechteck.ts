import { Form } from './form';
export class Rechteck extends Form {
  constructor(_farbe: string, private _breite: number, private _hoehe: number) {
    super(_farbe);
    this._breite=_breite;
  this._hoehe=_hoehe;
  }

  berechneFlaecheRechteck(_breite: number, _hoehe: number) {
    let flaecheRechteck: number;
    flaecheRechteck = _breite * _hoehe;
    return flaecheRechteck;
  }
  toString(): string {
    let text: string = super.toString();
    text += '\nHoehe: ' + this._hoehe;
    text += '\nBreite: ' + this._breite;
    return text;
  }
}
