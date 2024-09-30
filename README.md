# cvBuilder

Un generador de CV en JavaScript

## Descripción

Este proyecto es un generador de CV en JavaScript. El objetivo es que el usuario pueda generar un CV completo o un CV de forma simple, en diferentes formatos (HTML, Texto Plano, JSON).

El generador de CV se encarga de crear un objeto de tipo `CV` que contiene las secciones del CV. Cada sección se representa como un objeto con un nombre y un contenido. El objeto `CV` contiene una sección por cada uno de los campos del CV.

El objeto `CV` también tiene un método para mostrar el CV en consola, y otro para exportar el CV en diferentes formatos.

La clase `CVBuilder` es la encargada de crear el objeto `CV`. Cada método de la clase `CVBuilder` representa una sección del CV. Cada método toma un parámetro que representa el contenido de la sección.

La clase `CVBuilder` también tiene un método para obtener el objeto `CV` que ha sido construido.

La clase `GeneradorCV` es la encargada de construir el objeto `CV`. Cada método de la clase `GeneradorCV` toma un parámetro que representa el objeto `CVBuilder` que se utilizará para construir el objeto `CV`.

## Requisitos

- Node.js

## Instalación

```bash
npm install
```

## Uso

```bash
npm run dev
```

## Ejemplo de uso

## Autor

Santiago Ospina <santi02005@hotmail.com>
