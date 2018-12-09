Hello HBC team!

Thank you for giving me the opportunity to showcase my skills via this coding challenge!

I created the project with [Create React App](https://github.com/facebook/create-react-app) for quick setup. 
In the past I developed projects from scratch where I setup React with Webpack and Babel. 

To start a development server and load the page, run:
#### `npm start`

To see how the page looks on mobile, reload while simulating the mobile screen size (Chrome Dev Tools - Toggle device Toolbar).

A little analysis on the shuffling algorithm. 
I came up with 2 implementations of the shuffling algorithm:
1. Using Array.prototype.splice(), where I generate a random index and then splice the array containing all the elements.
Repeat this process n times (n being the length of the employees array). 
Here is code for that algorithm:
```javascript
function createRandomPairs(employees) {
  const generateRandomIdx = currentEmployees => Math.floor(Math.random() * currentEmployees.length);
  const generatePerson = currEmployees => {
    const randomIdx = generateRandomIdx(currEmployees);
    const employee = currEmployees[randomIdx];
    currEmployees.splice(randomIdx);
    return employee;
  };

  const employeesCopy = [...employees]; 
  const randomizedEmployees = [];
  while (employeesCopy.length > 0) {
    randomizedEmployees.push(generatePerson(employeesCopy));
  }

  const randomizedPairs = [];
  for (let i = 0; i < randomizedEmployees.length; i += 1) {
    const giverIdx = i;
    let receiverIdx;

    if (i === randomizedEmployees.length - 1) {
      receiverIdx = 0;
    } else {
      receiverIdx = i + 1;      
    }
    
    const pair = {giver: randomizedEmployees[giverIdx], receiver: randomizedEmployees[receiverIdx]};
    randomizedPairs.push(pair);
  }

  return randomizedPairs;
}
```

2. Using an array to keep track of already used indicies with the utilization of truthy & falsy as a flag - current implementation. The reason I chose this implementation over the one above, is because the above algorithm relies on deleting elements from the `employeesCopy` array in order to generate new, never-before-used indicies, which requires that the `employeesCopy` is re-indexed every time the deletion occurs, which is an expensive operation. The exact time complexity is difficult to estimate, because it depends on where the deletion is happening in the array (which in turn determines the number of loops required in order to shift all the indicies in the array), however in the worst case where all indicies happen to be in order (0, 1, 2, 3...) the time complexity is O(n^2), because (n-1) + (n-2) + (n-3) + ... + 2 + 1 is O(n^2). Whereas, my current implementation doesn't require any systematic looping, with the only potential looping happening if the generated random index has already been created previously (which is a low probability event, given that Math.random() is implemented to return values with uniform distribution). 

