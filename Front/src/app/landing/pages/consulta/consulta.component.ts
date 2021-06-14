import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  suscription!: Subscription;
  usuarios: User[] = [];
  usuario: any = [];
  page1 = 0;
  page2 = 0;
  page3 = 0;
  search1 = '';
  search2 = '';
  search3 = '';
  tiposearch = 'firstName';
  hayerror = false;
  p = '';
  UserToDelete: any = [];


  productos = [
    { name: 'ID', value: 'id' },
    { name: 'Primer Apellido', value: 'surname' },
    { name: 'Segundo Apellido', value: 'secondSurname' },
    { name: 'Primer Nombre', value: 'firstName' },
    { name: 'Otros Nombres', value: 'othersName' },
    { name: 'País', value: 'country' },
    { name: 'Tipo De Documento', value: 'typeID' },
    { name: 'Numero De Documento', value: 'numID' },
    { name: 'email', value: 'email' },
    { name: 'Area', value: 'area' },
    { name: 'Estado', value: 'state' },
  ]
  formularioResultado: FormGroup = this.fb.group({
    id: ['0', Validators.required],
    resultado: ['', Validators.required],
    calificacion: [0, Validators.required],
  });
  formularioCuenta: FormGroup = this.fb.group({
    id: ['', Validators.required],
    fechaConsignacion: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (resp) => {
        this.usuarios = resp;
        if (this.usuarios.length === 0) {
          Swal.fire({
            title: 'Luego de Crear El Primer Usuario',
            text: 'Consulta Sera La Pagina De Inicio',
            icon: 'info',
          });
          this.router.navigateByUrl('/landing/registro');
        }
      });
  }

  editar(User: User): void {
    this.userService.saveUser(User);
    this.router.navigateByUrl('/landing/edicion')

  }
  guardarID(User: User) {
    this.UserToDelete = User;
  }
  delete(): void {

    this.userService.deleteUserById(this.UserToDelete._id).subscribe(
      (res) => {
        const index = this.usuarios.indexOf(this.UserToDelete);
        if (index > -1) {
          this.usuarios.splice(index, 1);
        }
        Swal.fire({
          title: 'OK',
          text: 'Usuario Eliminado',
          icon: 'success',
        });
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'error',
        });
      }
    );
  }

  nextPage(n: number): void {
    if (n === 1) { this.page1 += 10; }
    if (n === 2) { this.page2 += 10; }
    if (n === 3) { this.page3 += 10; }
  }
  prevPage(n: number): void {
    if (this.page1 > 0) { if (n === 1) { this.page1 -= 10; } }
    if (this.page2 > 0) { if (n === 2) { this.page2 -= 10; } }
    if (this.page3 > 0) { if (n === 3) { this.page3 -= 10; } }
  }
  choose(value: any) {
    if (value === 'id') {
      this, this.tiposearch = 'id'
    }
    if (value === 'firstName') {
      this, this.tiposearch = 'firstName'
    }
    if (value === 'othersName') {
      this, this.tiposearch = 'othersName'
    }
    if (value === 'surname') {
      this, this.tiposearch = 'surname'
    }
    if (value === 'secondSurname') {
      this, this.tiposearch = 'secondSurname'
    }
    if (value === 'country') {
      this, this.tiposearch = 'country'
    }
    if (value === 'typeID') {
      this, this.tiposearch = 'typeID'
    }
    if (value === 'numID') {
      this, this.tiposearch = 'numID'
    }
    if (value === 'email') {
      this, this.tiposearch = 'email'
    }
    if (value === 'area') {
      this, this.tiposearch = 'area'
    }
    if (value === 'status') {
      this, this.tiposearch = 'status'
    }
  }
  searchSolicitud(valueSearch: string, n: number, tipo: string): void {
    if (n === 1) {
      this.page1 = 0;
      this.search1 = valueSearch;
    }
    if (n === 2) {
      this.page2 = 0;
      this.search2 = valueSearch;
    }
    if (n === 3) {
      this.page3 = 0;
      this.search3 = valueSearch;
    }
  }
}
