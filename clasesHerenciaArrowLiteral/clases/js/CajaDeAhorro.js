class CajaDeAhorro extends Cuenta {
 constructor( numero, saldo, interes ) {
   super(numero,saldo)
   this.interes = interes;
 }
 debitar(monto){
   if (monto <= this.saldo){
     super.debitar(monto);
   } else {
     throw new Error( 'No se puede llevar a cabo la operacion, saldo insuficiente.' );
   }
     
 }
 toString(){
   return `${ super.toString() }
              <br/>- Interes:  ${this.interes}`;

              /*
              return super.toString() +
                     "<br/> - Interes: "  +
                     this.interes; */
 }
}
