export default class CV {
    constructor() {
        this.secciones = {}
    }

    agregarSeccion(nombre, contenido) {
        this.secciones[nombre] = contenido
    }

    mostrar() {
        for (const [seccion, contenido] of Object.entries(this.secciones)) {
            console.log(`${seccion}:`)
            console.log(contenido)
            console.log('---------------------------')
        }
    }

    exportar(formato) {
        switch (formato) {
            case 'HTML':
                return this.exportarHTML()
            case 'Texto':
                return this.exportarTextoPlano()
            case 'json':
                return this.exportarJSON() 
            default:
                throw new Error('Formato no soportado')
        }
    }

    exportarHTML() {
        let html = "<html><body>"
        for (const [seccion, contenido] of Object.entries(this.secciones)) {
            html += `<h2>${seccion}</h2><p>${contenido}</p>`
        }
        html += "</body></html>"
        return html
    }

    exportarTextoPlano() {
        let texto = ""
        for (const [seccion, contenido] of Object.entries(this.secciones)) {
            texto += `${seccion.toUpperCase()}\n${contenido}\n\n`
        }
        return texto
    }

    exportarJSON() {
        return this.secciones
    }
    exportarPDF() {
        return "PDF generado" // Simulación
    }
}
