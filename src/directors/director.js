export default class GeneradorCV {
    constructor(builder) {
        this.builder = builder;
    }
    construirCV(completo) {
        this.builder.setInformacionPersonal('Nombre: Santiago Ospina \nContacto: santi02005@hotmail.com\nFoto: imgExample.com');

        if (completo) {
            this.builder.addExperienciaLaboral('Empresa A, Cargo: Desarrollador, 2024-actualidad');
            this.builder.addEducacion('Universidad UDES, Título en Ingeniería de Software, 2022-2026');
            this.builder.addHabilidades('JavaScript, Python, HTML, CSS, React, Node.js, Git, GitHub, express, MongoDB, SQLserver, MySQL');
            this.builder.addProyectos('Proyecto A: Descripción y tecnologías utilizadas\nProyecto B: Descripción y tecnologías utilizadas');
            this.builder.addReferencias('Nombre: Ana López, Relación: Supervisor\nNombre: Carlos Gómez, Relación: Compañero de trabajo');
        }

        return this.builder.getResultado();
    }
}
