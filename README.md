# Test-FullStack para Cidenet S.A.S

https://gitlab.com/alzheimeer/test-fullstack

#### VIDEO CORTO DE LA APLICACIÓN FUNCIONAL
+ https://youtu.be/EE6v2nhJUk0


## FrontEnd [Ver A Fondo Esta Sección](https://gitlab.com/alzheimeer/test-fullstack/-/blob/main/Front/README.md "BackEnd link")


### Tecnologías Usadas:
+ Angular Cli 12.03 ->  [Instalar Angular Cli](https://angular.io/cli "Angular link")
+ Angular Material 12.04 ->  [Instalar Angular Material](https://material.angular.io/guide/getting-started "Material link")
+ Bootstrap 4.5
+ FontAwesome 5.11.2
+ Sweet Alert 2 11.0.16

  

## BackEnd  [Ver A Fondo Esta Sección](https://gitlab.com/alzheimeer/test-fullstack/-/blob/main/Back/README.md "FrontEnd link")


### Tecnologias Usadas:
+ NodeJs 14.17.0  ->  [Instalar NodeJs](https://nodejs.org/es/download/ "Node link")
+ Cors 2.8.5
+ dotenv 10.0.0
+ express 4.17.1
+ express-validator 6.11.1
+ mongoose 5.12.13
+ morgan 1.10.0
+ nodemon 2.0.7
+ REST API


## Base De Datos: Mongodb ->  [Instalar Mongodb](https://docs.mongodb.com/manual/installation/ "Mongo link")

## Instrucciones De Instalación:
  + Clonar el repositorio copiando el siguiente enlace en tu terminal ->  [git clone https://gitlab.com/alzheimeer/test-fullstack.git](https://gitlab.com/alzheimeer/test-fullstack.git "Repo link")
  + Tener instalado nodejs
  + Tener instalado mongodb 
  + Entrar a la carpeta Back
      + Ejecutar: npm i
  + Entrar a la carpeta Front
      + Ejecutar: npm i

### Si ya cumple con los requisitos anteriores procedemos a:

    1. Ejecutar Mongodb en su computador, por defecto el proyecto esta configurado para conectarse como localhost en el puerto 27017, si desea cambiar esta configuración lo puede realizar en el siguiente archivo, Back/db/config.js, modificando mongodb://localhost:27017/cidenet
    2. Ejecutar NodeJS, para ello va a la carpeta Back y allí puede ejecutar el comando: npm run dev, y iniciara el servidor usando nodemon el cual sirve para evitar reiniciarlo continuamente, por defecto el se ejecutara en el puerto 3000.
    3. Ejecutar Angular, para ello vas a la carpeta Front y allí puede ejecutar el comando: ng serve -o, el por defecto se ejecutara en el puerto 4200
    4. Si desea probarlo en producción, en la carpeta Front debe ejecutar el comando: ng build --prod, esto generara una carpeta llamada dist, el contenido de esta carpeta lo deberá mover dentro de la carpeta Back/public. de esta forma en su servidor ubuntu solo deberá clonar el repositorio, seguir los mismos pasos de instalación anteriores y ejecutarlo con algún software que pueda mantener a mongo y a node corriendo siempre aunque se reinicie el servidor.
   
### Ya una vez iniciado
+ La aplicación iniciara en la sección de consulta de empleados, "La primera vez que se ejecute el detectara que no hay empleados en la BD y lo re-direccionara a la sección de registro de empleados.

## LA NECESIDAD

+ Se requiere de un sistema que le permita registrar el ingreso y la salida de sus empleados, así como administrar su información.
+ Sección de Registro de empleados:
  + Aqui se solicitaran los siguientes datos del empleado: 
    1. Primer nombre
    2. Otros Nombres
    3. Primer Apellido
    4. Segundo Apellido
    5. País del empleo
    6. Tipo De Identificación
    7. Numero de Identificación
    8. Email
    9. Fecha De Ingreso
   Requerimientos: Solo se permitirán teclear letras mayúsculas sin ñ Ñ ni tildes, a excepción del numero de documento, la fecha de registro no se podrá editar, el estado normalmente sera activo, el email se generará automáticamente con el primer nombre y primer apellido, completando con el dominio cidenet.com.co para Colombia y cidenet.com.eu para Estados Unidos, si el correo ya existe se deberá agregar un index incremental para diferenciarlo, ademas el sistema no permitirá documentos duplicados con el mismo tipo de documento. 
+ Sección de Consulta De Empleados
    + Aquí aparecerán todos los usuarios registrados en la base de datos, con un limite de 10 a la vez por pagina.
    + Tendrá un sistema de búsqueda o filtro de usuarios por los siguientes temas:
        + Primer Nombre, Otros Nombres, Primer Apellido, Segundo Apellido, Tipo de Identificación, Número de Identificación, País del empleo, Correo electrónico y/o Estado.
    + Cada registro de empleado tendrá la opción de ser editado mediante la funcionalidad de edición de empleado, o de ser eliminado previa confirmación del sistema (“Está seguro de que desea eliminar el empleado? Sí / No”).
+ Edición de empleados:
    + Una vez seleccionada la opción de editar el empleado en la funcionalidad de consulta de empleados se abrirá la funcionalidad de edición de empleados, la cual tendrá los mismos campos de la funcionalidad de registro de empleados, permitiendo modificarlos todos (excepto la fecha de registro), incluso su tipo y número de identificación, en caso de que se modifiquen los nombres y/o apellidos, el sistema re-generará su dirección de correo electrónico. A diferencia de la funcionalidad de registro de empleados, no se tendrá fecha de registro sino de edición. 


## APP

+ Desarrolle en el Back una API con el CRUD completo, conectado usando mongoose a la base de datos, utilizando la dirección localhost:3000/api/users.
Use un modelo de usuarios según los requerimientos, con sus respectivas rutas y controladores, estructurados en varias carpetas para ser legible y fácil de entender el desarrollo.

+ En la parte del Front usando angular, creando un servicio para el manejo del CRUD de usuarios, sweet Alert para los avisos al usuario, Angular Material para la parte visual, formularios dinámicos usando Formbuilder, se creo un modulo con routing llamado landing el cual a su vez contiene 3 componentes 1. registro 2. consulta 3. edición, con un navbar superior, algunas cosas de bootstrap y fontawesome para los iconos, 3 imagenes para el fondo de Unsplash.
  


## PRESENTO ALGUNAS IMÁGENES DEL PROYECTO YA TERMINADO. (En la carpeta img del repositorio)


![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/apicrud.jpg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/registroEmpleado.jpeg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/consultaEmpleados.jpeg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/consultaEmpleadosFiltro.jpeg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/consultaEmpleadosMenuFiltro.jpeg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/consultaEmpleadosOpciones.jpg)
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/edicionEmpleados.jpg)


## DESARROLLO DE LA SOLUCIÓN
![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/whiteboard1.jpeg)

![](https://gitlab.com/alzheimeer/test-fullstack/-/raw/main/Img/whiteboard2.jpeg)

Desarrollado Por

#"Alzheimeer" Edgar Quintero R.- <fogniebla@hotmail.com> -[ https://github.com/alzheimeer](https://github.com/alzheimeer)