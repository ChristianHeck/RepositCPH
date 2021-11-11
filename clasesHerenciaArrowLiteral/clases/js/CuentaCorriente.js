class CuentaCorriente extends Cuenta {
 constructor( numero, saldo, descubierto ) {
   super(numero,saldo)
   this.descubierto = descubierto;
 }
 debitar(monto){
   if (monto <= (this.saldo + this.descubierto) ) {
     super.debitar(monto);
   } else {
     throw new Error( 'No se puede llevar a cabo la operacion, supera el limite.' );
   }
 }
 toString(){
   return `${ super.toString() }
              <br/>- Descubierto:  ${this.descubierto}`;
              /*
              return super.toString() +
                     "<br/> - Descubierto: "  +
                     this.descubierto;
               */
              //return super.toString() +  `<br/>Descubierto=  ${this.descubierto}`;
 }
}
