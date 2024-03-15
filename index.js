/* 
create an array of initial workers
create an array of workers that will be added
show initial workers on page
set interval to add a worker every 3 seconds from new workers list
have the average price at the top of the page gather ther average price of all workers on the page
*/
const initialWorkers = [
  {name: `Peter`, price: 100, occupation: `spiderman`},
  {name: `Tony`, price: 100, occupation: `ironman`},
  {name: `Bruce`, price: 100, occupation: `hulk`},
]


const initialWorkerArray = [...initialWorkers];
// console.log(initialWorkerArray);
// console.log(initialWorkers);

const workerList = document.querySelector(`#workersBox`)
initialWorkerArray.forEach(worker => {
  let workerBranch = document.createElement(`li`);
  workerBranch.textContent = `${worker.name} - ${worker.occupation} - ${worker.price}`;
  workerList.appendChild(workerBranch);
})

const workers = [
  {name: `Ann`, price: 10, occupation: `teacher`},
  {name: `Cheyenne`, price: 15, occupation: `lawyer`},
  {name: `Dan`, price: 20, occupation: `athlete`},
  {name: `Fran`, price: 10, occupation: `tutor`},
  {name: `Jan`, price: 30, occupation: `reporter`},
  {name: `Luann`, price: 20, occupation: `driver`},
  {name: `Roseann`, price: 30, occupation: `actor`},
  {name: `Stan`, price: 10, occupation: `writer`},
]

const newWorkerArray = [...workers];
const addNewWorker = () => {
  const currentWorker = newWorkerArray.shift();
  if(currentWorker){
  let workerBranch = document.createElement(`li`);
  workerBranch.textContent = `${currentWorker.name} - ${currentWorker.occupation} - ${currentWorker.price}`;
  workerList.appendChild(workerBranch);
  }
};

let totalInitialWorkerPrice = (initialWorkers) => {
  let totalPrice = 0;
  for(let i = 0; i < initialWorkers.length; i++){
  totalPrice += initialWorkers[i].price;
  }
  return totalPrice;
}

averageStartingPrice = document.querySelector(`#avgPrice`)
averageStartingPrice.textContent = totalInitialWorkerPrice(initialWorkers) / initialWorkers.length;


const addWorkerInterval = setInterval(addNewWorker, 3000)


let totalNewWorkerPrice = (workers) => {
  let totalPrice = 0;
  for(let i = 0; i < workers.length; i++){
  totalPrice += workers[i].price;
  }
  return totalPrice;
}
console.log(totalInitialWorkerPrice(workers));

console.log(totalInitialWorkerPrice(initialWorkers));
