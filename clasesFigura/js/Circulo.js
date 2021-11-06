class Circulo extends Figura {
	constructor(nombre, radio) {
		if (radio <= 0) {
			throw new Error(`En el ${nombre}, Radio debe ser distinto de cero.`);
		}
		super(nombre);
		this.radio = radio;
	}

	calcularPerimetro() {
		return Math.round(2 * 3.14 * this.radio * 1e2) / 1e2;
	}

	calcularSuperficie() {
		return Math.round(3.14 * this.radio * this.radio * 1e2) / 1e2;
	}

	toString() {
		return `${super.toString()}
		          <br/>- Radio:  ${this.radio}cm`;
	}
}
