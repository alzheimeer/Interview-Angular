import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CreateUser, User } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  value = 0;
  emailX = '';
  dominio = 'cidenet.com.co';
  hoy = new Date();
  indexEmail = 0;
  mesAtras = new Date();

  hoy2: any
  mesAtras2: any

  public typeID = [
    'CEDULA DE CIUDADANIA',
    'CEDULA DE EXTRANJERIA',
    'PASAPORTE',
    'PERMISO ESPECIAL',
  ];
  public country = [
    'COLOMBIA',
    'ESTADOS UNIDOS',
  ];

  public area = [
    'ADMINISTRACION',
    'FINANCIERA',
    'COMPRAS',
    'INFRAESTRUCTURA',
    'OPERACION',
    'TALENTO HUMANO',
    'SERVICIOS VARIOS',
    'OTRA',
  ];

  usuarios: User[] = [];
  usuario: any = [];

  miFormulario = this.fb.group({
    surname: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[A-Z ]+$")]],
    secondSurname: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[A-Z ]+$")]],
    firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[A-Z ]+$")]],
    othersName: ['', [Validators.maxLength(50), Validators.pattern("^[A-Z ]+$")]],
    country: ['', [Validators.required]],
    typeID: ['', [Validators.required]],
    numID: ['', [Validators.required, Validators.maxLength(20), Validators.pattern("^[0-9]+$")]],
    email: [`nombre.apellido@${this.dominio}`, [Validators.required, Validators.maxLength(300), Validators.email]],
    dateEntry: ['', [Validators.required]],
    area: ['', [Validators.required]],
    status: ['Activo', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.miFormulario.get('country')?.valueChanges.subscribe((value) => {
      if (value === 'COLOMBIA') {
        this.dominio = 'cidenet.com.co';
      } else if (value === 'ESTADOS UNIDOS') {
        this.dominio = 'cidenet.com.us';
      }
      this.emailX = value;
    });




    // min and max by input Date
    this.hoy2 = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2);
    var x = new Date();
    x.setDate(x.getDate() - 30);
    this.mesAtras2 = x.getFullYear().toString() + '-' + ('0' + (x.getMonth() + 1).toString()).slice(-2) + '-' + ('0' + (x.getDate().toString())).slice(-2);


  }


  getError(campo: string): string {
    let message = '';
    if (this.miFormulario.get(campo)?.hasError('required')) {
      message = 'Porfavor llene este Campo';
    } else if (this.miFormulario.get(campo)?.hasError('maxlength')) {
      const maxLength = this.miFormulario.get(campo)?.errors?.maxlength
        .requiredLength;
      message = `Debe Tener menos de ${maxLength} letras`;
    }
    return message;
  }

  campoEsValido(campo: string): any {
    return (
      (this.miFormulario.get(campo)?.touched ||
        this.miFormulario.get(campo)?.dirty) &&
      this.miFormulario.get(campo)?.invalid
    );
  }

  cambios(field: string) {
    let x = this.miFormulario.get(field)?.value;
    x = x.toUpperCase();
    this.miFormulario.controls[field].setValue(x);

    const a = this.miFormulario.get('firstName')?.value;
    let b = this.miFormulario.get('surname')?.value;
    if (a !== '' && b !== '') {
      this.email(0);
    }

  }

  email(index: number) {
    const a = this.miFormulario.get('firstName')?.value;
    let b = this.miFormulario.get('surname')?.value;
    if (index === 0) {
      if (a && b) { b = b.replace(/ /g, "") }
      this.emailX = (`${a}.${b}@${this.dominio}`).toLowerCase();
      this.miFormulario.controls['email'].setValue(this.emailX)
    }

    if (index !== 0) {
      if (a && b) { b = b.replace(/ /g, "") }
      this.emailX = (`${a}.${b}.${this.indexEmail}@${this.dominio}`).toLowerCase();
      this.miFormulario.controls['email'].setValue(this.emailX)
    }
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      console.log('Formulario no válido');
      Swal.fire({
        title: 'Error',
        text: 'Formulario no válido',
        icon: 'error',
      });
      return;
    } else {
      this.email(this.indexEmail);
      Swal.fire({
        title: 'Espere',
        text: 'Guardando Información',
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const {
        surname,
        secondSurname,
        firstName,
        othersName,
        country,
        typeID,
        numID,
        email,
        dateEntry,
        area,
        status
      } = this.miFormulario.value;
      const newUser: CreateUser = {
        surname,
        secondSurname,
        firstName,
        othersName,
        country,
        typeID,
        numID,
        email,
        dateEntry,
        area,
        status
      };
      this.userService.createUser(newUser)
        .subscribe(
          (user) => {
            Swal.fire({
              title: 'OK',
              text: 'Usuario Creado',
              icon: 'success',
            });
            this.indexEmail = 0;
            this.miFormulario.reset();
            this.router.navigateByUrl('/landing/consulta');
          }, (err) => {
            if (err.error.ok === false && err.error.msg === 'email ya existe') {
              this.indexEmail = this.indexEmail + 1;
              this.email(this.indexEmail);
              this.guardar();
            } else {
              Swal.fire({
                title: 'Error',
                text: `${err.error.msg}`,
                icon: 'error',
              });
            }
          }
      )
    }
  }
}
