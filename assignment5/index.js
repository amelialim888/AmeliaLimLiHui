/* const p = Promise.resolve(42);
p.then(value => console.log(value)); */

// Question 1
/* const p = Promise.resolve('resolved');
p.then(value => console.log(value)); */

//Question 2
/* const p = Promise.reject(new Error('Oops!'));
p.catch(value => console.error(value)); */

// Question 3
/* const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then(value => console.log(value)); */

// Question 4
/* const p = Promise.resolve({ id: 1, name: 'Alice' });

p.then((user) => {
    console.log(`${user.name}`);
}) */


//Question 5
/* const p = Promise.reject(new Error('Invalid id'));
p.catch(value => console.error(value)); */

// Question 6
/* const p = Promise.resolve(42);

p
 .then(() => {
    console.log(p);
  })
  .catch(() => {
    console.error(p);
  })
  .finally(() => {
    console.log('Promise settled');
  });
  */

  // Question 7
/* const p = Promise.resolve(21);

p.then((value) => {
  const newP = value * 2;
  console.log(newP);
}); */

// Question 8
/*  const p = Promise.reject(new Error('Invalid value'));

p.catch((error) => {
  console.error(0);
}); */

// Question 9
/* const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

const p = Promise.all(promises)
.then((p) => { 
    console.log(p);
})  */

// Question 10
/* const promises = [
  new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
  new Promise(resolve => setTimeout(() => resolve('b'), 50)),
  new Promise(resolve => setTimeout(() => resolve('c'), 150))
];

Promise.race(promises).then((firstValue) => {
   console.log(firstValue);
}); */

//Bonus Question
function combineWord() {

const p = Promise.resolve('World');

p.then(value => {
   new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello ' + value);
    }, 1000);
  });
})
return p.then
}

combineWord().then(finalValue => {
  console.log(finalValue);
});

