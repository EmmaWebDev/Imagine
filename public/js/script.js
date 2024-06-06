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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    