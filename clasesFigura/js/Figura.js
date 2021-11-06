class Figura {
 constructor( nombre ) {
   this.nombre = nombre;
 }
 calcularPerimetro(){
   throw new Error ('Se debe implementar calcularPerimetro para continuar.');
 }
 calcularSuperficie(){
  throw new Error ('Se debe implementar calcularSuperficie para continuar.');
 }
 toString(){
    return `<br/> - Nombre:  ${this.nombre}
            <br/> - Perimetro:  ${this.calcularPerimetro()}cm.
            <br/> - Superficie:  ${this.calcularSuperficie()}cm.`;
 }
}
