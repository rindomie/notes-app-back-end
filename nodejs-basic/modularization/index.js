const Tiger = require('./Tiger'); // TODO 3
const Wolf = require('./Wolf'); // TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    console.log(`Tiger strength : ${tiger.strength}`);
    console.log(`Wolf strength : ${wolf.strength}`);
    console.log('Tiger won');
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    console.log(`Tiger strength : ${tiger.strength}`);
    console.log(`Wolf strength : ${wolf.strength}`);
    console.log('Wolf won');
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);