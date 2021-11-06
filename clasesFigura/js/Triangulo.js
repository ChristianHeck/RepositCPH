class Triangulo extends Figura {
 constructor( nombre, base, altura ) {
   if (base <= 0 || altura <= 0) {
     throw new Error (`En el ${nombre}, la base y altura deben ser mayor a 0 .`);
   }
   super(nombre)
   this.base = base;
   this.altura = altura;
 }
 calcularPerimetro(base, altura){
   var hip = Math.sqrt(this.base * this.base + this.altura * this.altura);
	 return Math.round((hip + this.base + this.altura) * 1e2) / 1e2;

 }

 calcularSuperficie() {
		return Math.round(((this.base * this.altura) / 2) * 1e2) / 1e2;
 }

 toString(){
   return `${ super.toString() }
              <br/>- Base:    ${this.base}cm
              <br/>- Altura:  ${this.altura}cm`;
 }
}
