export default class ClientModel {
  // Properties
  _id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  birthdate: Date;
  // Constructor
  constructor(
    _id: string = "",
    lastname: string = "",
    firstname: string = "",
    email: string = "",
    phone: string = "",
    birthdate: Date = new Date()
  ) {
    this._id = _id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.phone = phone;
    this.birthdate = birthdate;
  }
}
