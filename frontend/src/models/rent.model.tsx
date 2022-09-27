import ClientModel from "./client.model";
import VehicleModel from "./vehicle.model";

export default class RentModel {
  client: ClientModel;
  vehicle: VehicleModel;
  startDate: Date;
  endDate: Date;
  price: number;
  constructor(
    client: ClientModel = new ClientModel(),
    vehicle: VehicleModel = new VehicleModel(),
    startDate: Date = new Date(),
    endDate: Date = new Date(),
    price: number = 0
  ) {
    this.client = client;
    this.vehicle = vehicle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
  }
}
