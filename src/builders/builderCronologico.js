import CVBuilder from './builder.js';

export default class CVBuilderCronologico extends CVBuilder {
    setInformacionPersonal(informacion) {
        this.cv.agregarSeccion('Información Personal', informacion);
    }

    addExperienciaLaboral(experiencia) {
        this.cv.agregarSeccion('Experiencia Laboral', experiencia);
    }

    addEducacion(educacion) {
        this.cv.agregarSeccion('Educación', educacion);
    }

    addHabilidades(habilidades) {
        this.cv.agregarSeccion('Habilidades', habilidades);
    }

    addProyectos(proyectos) {
        this.cv.agregarSeccion('Proyectos', proyectos);
    }

    addReferencias(referencias) {
        this.cv.agregarSeccion('Referencias', referencias);
    }
}
