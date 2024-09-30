import CV from "../models/cv.js";

export default class CVBuilder {
    constructor() {
        this.cv = new CV();
    }

    setInformacionPersonal(informacion) {
        throw new Error("Este método debe ser implementado");
    }

    addExperienciaLaboral(experiencia) {
        throw new Error("Este método debe ser implementado");
    }

    addEducacion(educacion) {
        throw new Error("Este método debe ser implementado");
    }

    addHabilidades(habilidades) {
        throw new Error("Este método debe ser implementado");
    }

    addProyectos(proyectos) {
        throw new Error("Este método debe ser implementado");
    }

    addReferencias(referencias) {
        throw new Error("Este método debe ser implementado");
    }

    // Retorna el CV construido
    getResultado() {
        return this.cv;
    }
}
