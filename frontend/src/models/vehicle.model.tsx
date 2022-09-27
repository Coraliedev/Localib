import { Etat } from "../enums/etat.enum";
import { Type } from "../enums/type.enum";

export default class VehicleModel {
  // Properties
  brand: string;
  model: string;
  matriculation: string;
  available: boolean;
  locationPrice: number;
  type: Type;
  etat: Etat;
  // Constructor
  constructor(
    brand: string = "",
    model: string = "",
    matriculation: string = "",
    available: boolean = true,
    locationPrice: number = 0,
    type: Type = Type.Voiture,
    etat: Etat = Etat.A
  ) {
    this.brand = brand;
    this.model = model;
    this.matriculation = matriculation;
    this.available = available;
    this.locationPrice = locationPrice;
    this.type = type;
    this.etat = etat;
  }
}
