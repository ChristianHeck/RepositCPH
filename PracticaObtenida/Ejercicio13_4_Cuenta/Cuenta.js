class Account {
 constructor( numero, saldo ) {
   this.numero = numero;
   this.saldo = saldo;
 }
 acreditar(monto){
   this.saldo+=monto;
 }
 debitar(monto){
   this.saldo -= monto;
 }
 toString(){
   return "<br/> - Numero: " +
          this.numero +
          "<br/> - Saldo: "  +
          this.saldo;
 }
}
