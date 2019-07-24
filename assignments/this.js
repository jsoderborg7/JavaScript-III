/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global object binding 
* 2. Implicit binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayLocation(location) {
  console.log(this);
  return location;
}
sayLocation('Heber');
// Principle 2

// code example for Implicit Binding
const myExample = {
  favFood: "tacos",
  sayFavFood: function(name){
    console.log(`Hi, i'm ${name} and I love ${this.favFood}`);
    console.log(this);
  }
};
myExample.sayFavFood("Jenn");

// Principle 3

// code example for New Binding
function favSport(sport) {
  this.favorite= "Kayaking";
  this.sport= sport;
  this.sayIt= function(){
    console.log(this.favorite + this.sport);
    console.log(this);
  };
  }
const paddleboarding = new favSport("paddleboarding");
const hiking = new favSport("hiking");

paddleboarding.sayIt();
hiking.sayIt();


// Principle 4

// code example for Explicit Binding
paddleboarding.sayIt.call(paddleboarding); hiking.sayIt.apply(hiking);