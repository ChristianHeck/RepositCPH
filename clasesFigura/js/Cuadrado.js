class Cuadrado extends Figura {
  constructor(nombre, lado ) {
      if (lado <= 0) {
        throw new Error (`En el ${nombre}, el lado debe ser distinto de cero.`);
      }
      super(nombre);
		  this.lado = lado;

  }

  calcularPerimetro() {
      return Math.round(4 * this.lado * 1e2) / 1e2;
  }

  calcularSuperficie() {
    return Math.round(this.lado * this.lado * 1e2) / 1e2;
  }

  toString() {
    return `${super.toString()}
              <br/>- Lado:  ${this.lado}cm`;
  }
}
