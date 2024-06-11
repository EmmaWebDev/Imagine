const myButton = document.getElementById('btn');
myButton.onclick = function() {
const name = prompt('Enter your full name');
document.getElementById('name').innerText = name;
document.getElementById('name').style.backgroundColor = 'red';
}
// variables
const pi = 3.142;
let name = 'Emmanuella Amonoo';
let age = 29;
let present = false;
console.log(name);
// object
const car = {
    numberPlate: 'GR-345-24',
    model: 'Bentley',
    color: 'pink',
    weight: '60',
    weightunit: 'KG',
    owner: {
        name: 'Emmanuella Amonoo',
        driver: {
            name: 'Fifi',
        }

    }
}
console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);
car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);



//Arrays
const tweet1 = {
    text: 'I am learning js today',
    likes: 5,
    shares: 2,
    retweets: 1
    
    }
    const tweet2 = {
    text: 'I am learning js today',
    likes: 8,
    shares: 3,
    retweets: 0
    
    }
    const tweets = [];
    tweets.push(tweet1);
    tweets.push(tweet2);
    tweets.length;
    tweets;
    
    //Dates
    const today = new Date(); 
    today.toString();
    today.toLocaleDateString();
    
    //If/Else
    
    if (today.getHours() == 16){
      console.log('class has ended!');
    
    } else {
      console.log('class is in session!');
    }
    // for loop
    for(let i = 0; i <=9; i++) {
      console.log('notify friends!', i)
    }
    
    //Functions
//Defining functions
function login(username, password) {
  if (username == 'mickeymond' && password == '1234') {
    return 'user is logged in';
  } else {
    return 'invalid username or password' ;
  }
}
//invoking functions
  login('mickeymond', '1234');
  

//Basic Arithmatic

12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;

// Comparison operators 

2 == 2;
3 !== 2;

//Built in Math Functions
Math.round(37/24);
Math.floor(37/24);
Math.random();
Math.ceil(37/24);
Math.max(12, 14, 89)
//order of operations
1 * 2 + 3 -4 / 2 % 2**2;
//handling user inputs
1200 + Number('250');

// String Concatenation
const firstname = 'Emmanuella';
const lastname = 'Amonoo';
firstname.trim() + ' ' + lastname.trim();

// Temple Literal
`${firstname.trim()}  $(lastname.trim()}`;

// String Methods

firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;
fistname.toUpperCase();
lastname.charAt(0);
`${firstname.trim().charAt(0)} ${lastname.trim().charAt(0)};`

// String conversation
String(2014);


//write a function that will add a participant to our Google Classroom

const participants = [];
function addParticipant(email) {
  // Check if email was provided
  if (!email) { 
    return 'Email not provided';
  }
  // Check if email is valid
  if (email.includes('0')) {
    return 'Invalid email provided!';
  }
  // Add email to the participants;
  participants.push(email);
    // Notify them via mail
  // Return response
    return 'participant is added!';
  } 
  
  addParticipant('nuella1995@yahoo.com');

// Arrays in Javascript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join(' ');
alphabets.join('  ').split(' ');

// Array methods in javascript
// Write a fuction that will take a user with first name and last name and return fullname;

const user = {
  firstname: 'Emma',
  lastname: 'Amonoo',
}

function fullname(user) {
return {
  ...user,
  fullname:`${user.firstname} ${user.lastname}`
 }
}

fullname(user);
         
         
//Array Map
const users = [
  {firstname: 'Linda', lastname: 'Parker'},
  {firstname: 'Mark', lastname: 'Twaine'},
  {firstname: 'Oliver', lastname: 'Queen'},
  {firstname: 'Stephan', lastname: 'Grider'},
  {firstname: 'Elon', lastname: 'Musk'}
]
users.map('fullname')
// map and return  squares of numbers
function square(number)  {
return number  ** 2;

}
const numbers = [0, 1, 2, 3, 4, 5]
numbers.map(square);

//filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    