// if ("0") {
//     alert( 'Hello' );
//

// const condition = prompt("Whats the “official” name of JavaScript", "");
// if (condition == "Ecmascript") {
//   alert("Right");
// } else {
//   alert("You dont know? “ECMAScript”");
// }

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.call(employee1, "Hello", "How are you today ?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you today ?"); // Hello Jimmy Baily, How are you?


const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
      console.log('Mashina ishga tushdi!');
    }
  };
  
  console.log(car.brand); // 'Toyota'
  car.start(); // 'Mashina ishga tushdi!'
  