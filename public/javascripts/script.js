// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/* for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/



function dupeAddFood(step, id, callback) {
  return new Promise(promiseHandler);
} //the promise "resolve" is trapped in a random timeout, so it can come whenever it wants. that's why we need the thens


// Iteration 2 using `.then()`
/* 
mashPotatoes.forEach((el, index) => {
  addFood(mashPotatoes[index], "#mashPotatoes")
})

=> this returns all the elements but in the wrong order
*/

function addImage(name) {
  let imagesElement = document.getElementById("table")
  imagesElement.innerHTML += `<img src="./public/images/${name}.jpg" alt="${name}"></img>`
}


function poTaToes() {
  return new Promise((resolve, reject) => {
    addFood(mashPotatoes[0], '#mashPotatoes')
    .then(result => addFood(mashPotatoes[1], '#mashPotatoes'))
    .then(result => addFood(mashPotatoes[2], '#mashPotatoes'))
    .then(result => addFood(mashPotatoes[3], '#mashPotatoes'))
    .then(result => addFood(mashPotatoes[4], '#mashPotatoes'))
    .then(result => addImage("mashPotatoes"))
    .then(result => resolve(console.log("first")))
  })
}

function meat() {
  return new Promise((resolve, reject) => {
    addFood(steak[0], '#steak')
      .then(result => addFood(steak[1], '#steak'))
      .then(result => addFood(steak[2], '#steak'))
      .then(result => addFood(steak[3], '#steak'))
      .then(result => addFood(steak[4], '#steak'))
      .then(result => addFood(steak[5], '#steak'))
      .then(result => addFood(steak[6], '#steak'))
      .then(result => addFood(steak[7], '#steak'))
      .then(result => addImage("steak"))
      .then(result => resolve(console.log("second one")))
  })
}

function choux() {
  return new Promise((resolve, reject) => {
    addFood(brusselSprouts[0], '#brusselSprouts')
      .then(result => addFood(brusselSprouts[1], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[2], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[3], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[4], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[5], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[6], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[7], '#brusselSprouts'))
      .then(result => addFood(brusselSprouts[8], '#brusselSprouts'))
      .then(result => addImage("brusselSprouts"))
      .then(result => resolve(console.log("third one")))
  })
}

poTaToes().then(result => meat()).then(result => choux())
/* meat()
choux() */

//meat()
//choux()
/* 
public/images/mashPotatoes.jpg
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')
});


mashPotatoes.forEach((el, index) => {
  addFood(mashPotatoes[index], "#mashPotatoes")
})

 

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {

  })
});
 
 // Iteration 3 using async/await

  async function makeFood(step) {
    // ... your code here
    
  }
  makeFood(eachStep);
 */