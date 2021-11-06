class Rectangulo extends Figura {
  constructor(nombre, base, altura ) {
      if (base <= 0 || altura <= 0) {
        throw new Error (`En el ${nombre}, la base y altura deben ser distintos de cero.`);
      }
      super(nombre);
		  this.base = base;
      this.altura = altura;

  }

  calcularPerimetro() {
      return Math.round(2 * this.base + 2 * this.altura * 1e2) / 1e2;
  }

  calcularSuperficie() {
    return Math.round(this.base * this.altura * 1e2) / 1e2;
  }

  toString() {
    return `${super.toString()}
              <br/>- Base:    ${this.base}cm
              <br/>- Altura:  ${this.altura}cm`;
  }
}
