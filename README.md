# Sistema de Rastreo de Guía

El sistema permite ingresar un código de guía y rastrear toda la información pertinente al envío.

## Ambientes funcionales:

- **Local:** Si

- **Desplegado:** No

## Descripción

El proyecto requería la implementación de MicroFrontend, por tal razón se ha implementado **Module Federation**, tecnología de **Webpack**, por lo cual tendrémos dos aplicaciones corriendo.

## Estructura de Carpetas

- **shipping-tracking/**
  - **app-tracking/**
  - **shared-components/**
  - **Readme.md**

### Contenidos

- **app-tracking:** Contiene todo lo asociado a la aplicación.
- **shared-components:** Contiene los componentes que seran consumidos desde **app-tracking**.

### Stack usado en el proyecto

- `Next.js`
- `TypeScript`
- `Webpack y module federation`
- `Emotion`
- `Material UI`
- `Formik`
- `Yup`
- `react-svg`
- `Jest`
- `React Testing Library`

## Instalación

**Prerequisitos:** Node 20.11 | 20.17

### Variables de Entorno

Para efectos de prueba se ha omitido la exclusión del archivo `.env` en el archivo `.git-ignore` , así que no requiere configuración para ejecutar las aplicaciones en el ambiente local.

**1. Clonar e ingresar a la carpeta del proyecto:**

`git clone git@github.com:camilogonzalezf/shipping-tracking.git`

`cd shipping-tracking`

**2. Instalación ambiente app-tracking**

Ingresar a la ruta: `cd app-tracking/`

Instalar dependencias: `yarn install`

**3. Instalación ambiente shared-components**

regresar al directorio raíz: `cd ..`

Ingresar a la ruta: `cd shared-components/`

Instalar dependencias: `yarn install`

## Ejecución de las aplicaciones en Local

Las aplicaciones por ahora solo estarán disponibles en ambientes locales:

`app-tracking: localhost:3000`

`shared-components: localhost:3001`

**1. Abrir el proyecto una terminal y ejecutar shared-components**

`cd shared-components`

`yarn dev`

**2. Abrir el proyecto una segunda terminal y ejecutar app-tracking**

`cd app-tracking`

`yarn dev`

## Test Jest y React Testing Library

Para efectos de prueba y configuración de los Tests, se han aplicado Tests del lado de la apliación **app-tracking** , la aplicación **shared-components** No cuenta con Tests.

### Ejecución de Test

Los Test serán ejecutados como `jest --converage`, esto ya esta configurado en el archivo `package.json` , al final mostrará en la terminal la tabla con los porcentajes % de cobertura de los Tests.

`cd app-tracking`

`yarn test`

#### Cobertura actual de los Tests

![Test app tracking](https://i.imgur.com/FVpeQzT.jpeg)
