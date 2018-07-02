# Proyecto Final - Certificación de Herramientas de Desarrollo

Este es un prototipo de un menu adaptativo.<br>

## Características

* El menú se lee através de un archivo de texto que contiene un JSON.
* El menú se auto-ordena al dar click en los elementos (Items).
* El menú refleja el estilo que se ponga en el JSON.
* El menú se guarda en una taba de base de datos Postgres, por lo que al refrescar la pagina no pierde el orden.

## Tecnologías Usadas

Se utilizaron diversas tecnologías para el desarrollo del prototipo:
* Front End - [AngularJS](https://angularjs.org/)
* Front End - [JQuery](https://angularjs.org/)
* Back End - [SailsJS](https://sailsjs.com/)
* Back End - [NPM](https://www.npmjs.com/)
* BD - [PostgreSQL](https://www.postgresql.org/)


## Instalación (Windows)

Para la instalación del ambiente de funcionamiento del prototipo en windows debe seguir los siguientes pasos:

**1.** Instalar la base de datos:<br>
    1.1. Descargar [Instalador PostgreSQL](https://www.openscg.com/bigsql/oscg_download/?file=packages/PostgreSQL-10.4-1-win64-bigsql.exe&user=${auth.authName})<br>
    1.2. Instalar, para lo que se debe configurar el host: postgresql, usuario: root y contraseña: root<br>
    1.3. Configurar, se debe crear una base de datos llamada menuAdaptativo:<br>
    ```bash
    create database menuAdaptativo;
    ```

**2.** Instalar GIT:<br>
  2.1. Descargar [GIT](https://git-scm.com/download/win)
  2.2. Instalar configuración por defecto.<br>

**3.** Clonar repositorio:<br>
  3.1. Se debe ir al directorio al cual se debe clonar el directorio:<br>
  ```bash
  cd Desktop
  mkdir prototipo
  cd prototipo
  ```
  3.2. Clonar repositorio:<br>
  ```bash
  git clone https://github.com/marcomald/adaptiveMenu.git
  ```
  ## Levantar Ambiente

  Se debe ir al directorio del repositorio
    ```bash
    cd Desktop/prototipo/menuAdaptativo
    sails lift
    ```
  Ir la dirección: http://localhost:1337/

  ## Contribuidores

  Marco Lozano, Alvaro Carrera, Paul Garcia, Martin Beltran, William Marcillo.<br>
  Universidad de las Americas, 2018.
  Certificación de Herramientas de Desarrollo.
