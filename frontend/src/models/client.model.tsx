export default class ClientModel {
  // Properties
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  birthdate: Date;
  // Constructor
  constructor(
    lastname: string = "",
    firstname: string = "",
    email: string = "",
    phone: string = "",
    birthdate: Date = new Date()
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.phone = phone;
    this.birthdate = birthdate;
  }
}
