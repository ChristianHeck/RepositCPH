class House {
 constructor( address = 'somewhere' ) {
 this.address = address;
 }
}
class Mansion extends House {
 constructor( address, floors, owner ) {
 super( address );
 this.floors = floors;
 this.owner = owner;
 }
}
