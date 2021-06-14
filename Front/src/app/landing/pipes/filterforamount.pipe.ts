import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../models/user.models';


@Pipe({
  name: 'filterforamount'
})
export class FilterforamountPipe implements PipeTransform {

  transform(usuarios: User[], page: number = 0, search: string = '', tiposearch: string = 'firtsName'): User[] {
    // console.log(page, search, tiposearch)
    if (search.length === 0) { return usuarios.slice(page, page + 10); }
    let filterUsuarios: User[] = [];
    if (tiposearch === 'firstName') {
      filterUsuarios = usuarios.filter(user => user.firstName.includes(search));
    } else if (tiposearch === 'othersName') {
      filterUsuarios = usuarios.filter(user => user.othersName.includes(search));
    }
    else if (tiposearch === 'surname') {
      filterUsuarios = usuarios.filter(user => user.surname.includes(search));
    }
    else if (tiposearch === 'secondSurname') {
      filterUsuarios = usuarios.filter(user => user.secondSurname.includes(search));
    }
    else if (tiposearch === 'country') {
      filterUsuarios = usuarios.filter(user => user.country.includes(search));
    }
    else if (tiposearch === 'typeID') {
      filterUsuarios = usuarios.filter(user => user.typeID.includes(search));
    }
    else if (tiposearch === 'numID') {
      filterUsuarios = usuarios.filter(user => user.numID.includes(search));
    }
    else if (tiposearch === 'email') {
      filterUsuarios = usuarios.filter(user => user.email.includes(search));
    }
    else if (tiposearch === 'area') {
      filterUsuarios = usuarios.filter(user => user.area.includes(search));
    }
    else if (tiposearch === 'status') {
      filterUsuarios = usuarios.filter(user => user.status.includes(search));
    }
    else if (tiposearch === 'id') {
      filterUsuarios = usuarios.filter(user => user._id.includes(search));
    }

    return filterUsuarios.slice(page, page + 10);
  }

}
