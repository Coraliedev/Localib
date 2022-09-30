import { Etat } from "../enums/etat.enum";
import { Type } from "../enums/type.enum";

type Dates = [string, string];

export default class VehicleModel {
  // Properties
  _id: string;
  brand: string;
  model: string;
  matriculation: string;
  locationPrice: number;
  type: Type;
  state: Etat;
  unavailableDates: Dates[];
  // Constructor
  constructor(
    _id: string = "",
    brand: string = "",
    model: string = "",
    matriculation: string = "",
    locationPrice: number = 0,
    type: Type = Type.Voiture,
    state: Etat = Etat.A,
    unavailableDates: Dates[] = []
  ) {
    this._id = _id;
    this.brand = brand;
    this.model = model;
    this.matriculation = matriculation;
    this.locationPrice = locationPrice;
    this.type = type;
    this.state = state;
    this.unavailableDates = unavailableDates;
  }
}
