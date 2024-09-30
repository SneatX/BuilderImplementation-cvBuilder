import CVBuilderCronologico from './builders/builderCronologico.js'
import GeneradorCV from './directors/director.js'
import readlineSync from 'readline-sync' 

const builderCronologico = new CVBuilderCronologico()
const generador = new GeneradorCV(builderCronologico)

const opcion = readlineSync.question('¿Deseas un CV completo? (si/no): ')
const esCompleto = opcion.toLowerCase() === 'si'

const cv = generador.construirCV(esCompleto)

console.log("\n--- CV generado ---\n")
cv.mostrar()

const textoPlano = cv.exportar('Texto')
console.log("\n--- CV en Texto Plano ---\n")
console.log(textoPlano)

const cvJson = cv.exportar('json')
console.log("\n--- CV en json ---\n")
console.log(JSON.stringify(cvJson,null,2))
