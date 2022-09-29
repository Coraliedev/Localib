import { Etat } from "../enums/etat.enum";
import { Type } from "../enums/type.enum";

export default class VehicleModel {
  // Properties
  _id: string;
  brand: string;
  model: string;
  matriculation: string;
  available: boolean;
  locationPrice: number;
  type: Type;
  state: Etat;
  // Constructor
  constructor(
    _id: string = "",
    brand: string = "",
    model: string = "",
    matriculation: string = "",
    available: boolean = true,
    locationPrice: number = 0,
    type: Type = Type.Voiture,
    state: Etat = Etat.A
  ) {
    this._id = _id;
    this.brand = brand;
    this.model = model;
    this.matriculation = matriculation;
    this.available = available;
    this.locationPrice = locationPrice;
    this.type = type;
    this.state = state;
  }
}
