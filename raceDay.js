let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let age = 15;

if(age > 18 && isEarly){
  raceNumber += 1000;
  console.log(`You will run as a ${raceNumber} number at 9:30 am`)
}else if(age > 18 && !(isEarly)){
    raceNumber += 1000;
   console.log(`You will run as a ${raceNumber} number at 11:00 am`)
}else if(age < 18){
    console.log(`You will run as a ${raceNumber} number at 12:30 pm`)
}else {
  console.log("See the registration desk!")
}
