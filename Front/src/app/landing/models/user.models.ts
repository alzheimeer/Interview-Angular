export interface User {
  _id: string;
  surname: string;
  secondSurname: string;
  firstName: string;
  othersName: string;
  country: string;
  typeID: string;
  numID: string;
  email: string;
  dateEntry: Date;
  area: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface CreateUser {
  surname: string;
  secondSurname: string;
  firstName: string;
  othersName: string;
  country: string;
  typeID: string;
  numID: string;
  email: string;
  dateEntry: Date;
  area: string;
  status: string;
}

export class UserIni implements User {
  _id: string;
  surname: string;
  secondSurname: string;
  firstName: string;
  othersName: string;
  country: string;
  typeID: string;
  numID: string;
  email: string;
  dateEntry: Date;
  area: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this._id = '',
      this.surname = '',
      this.secondSurname = '',
      this.firstName = '',
      this.othersName = '',
      this.country = '',
      this.typeID = '',
      this.numID = '',
      this.email = '',
      this.dateEntry = new Date(),
      this.area = '',
      this.status = 'Activo',
      this.createdAt = new Date(),
      this.updatedAt = new Date()
  }
}
