// https://kevinyckim33.medium.com/note-to-self-on-dijkstras-algorithm-6be26842f21d
// Step 1: Express the graph/path in an object where each key holds an object of the 
// neighboring nodes and their cost

const graph = {
  start: {
    a: 5,
    b: 2,
  },
  a: {
    c: 4,
    d: 2,
  },
  b: {
    a: 8,
    d: 7,
  },
  c: {
    finish: 3,
    d: 6,
  },
  d: {
    finish: 1,
  },
  finish: {},
};

// Step 2: Create a costs object.  
// For any node that is not a direct neighbor of start set its cost to Infinity.

const costs = {
  a: 5,
  b: 2,
  c: Infinity, // be myopic, only see the costs from the start
  d: Infinity,
  finish: Infinity,
};

// Step 3: Set the parents table/object.  
// Similarly, for any node that is not a direct neighbor of start, 
// set its parent node to null.

const parents = {
  a: "start",
  b: "start",
  c: null,
  d: null,
  finish: null,
};

// Step 4: Create a processed array.  
// After looking at a node and examining its cost to all its neighbors, 
// push the node into here.
const processed = [];

// Step 5: create this function to find the lowest cost, 
// initially it's obviously just b with 2, but there are a couple
// subtle caviats that make it clutch
const findLowestCostNode = (itCosts) => {
  let lowestCostNode = null; // #1 this line is very important at killing the while loop
  let lowestCost = Infinity;

  // basically play King of the Hill with finding the lowest cost
  Object.keys(itCosts).forEach((node) => {
    const cost = itCosts[node];
    // #2 keep finding the lowest cost node AS LONG AS it has NOT been processed!
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCostNode = node;
      lowestCost = cost;
    }
  });

  // if all nodes have been processed, this node will return null thanks to subtle point #1.
  return lowestCostNode; 
};

// Step 6: Get the ball rolling by 
// firing up that function you wrote in Step 5 to get the cheapest node. 
// Obviously b with 2.
let node = findLowestCostNode(costs); // 'b'

while (node) {
  // the while loop will end when node becomes null; 
  // node becomes null when all nodes are added to the processed array
  // node ==> 'b'
  const cost = costs[node]; // 2
  // look at its neighbors
  const neighbors = graph[node]; // graph[b] ==> {a: 8, d: 7}
  // loop through the neighboring nodes...
  Object.keys(neighbors).forEach((n) => {
    // [a, d].forEach(n)
    const newCost = neighbors[n] + cost; // again play KoH
    // i.e. it took me 2 points to get to b, so to get to a from b, 
    // I have to do 2 + 8 = 10
    if (newCost < costs[n]) {
      // but a only costs costs[a] ==> 5, so it won't pass this block
      costs[n] = newCost; // for d though, costs[d] = Infinity so newCost is definitiely cheaper;
      // so update the cost table to say that costs[d] is now 2 + 7 = 9
      parents[n] = node; // and then also say that d's parent is b
    }
  });
  // at this point you looked at all of b's neighbors 
  // and updated the costs table/object accordingly
  processed.push(node); // so add b here so that...
  // when you run this again, b will be eliminated from contention in the if block in findLowestCostNode()
  node = findLowestCostNode(costs);
}

// When the while loop ends, you will have an updated cost table
// this states that the cheapest way to get to a is 5, 
// b is 2, c is 9, d is 7, and finish is 8.  Finish is what we care about.
console.log(costs); // { a: 5, b: 2, c: 9, d: 7, finish: 8}

// we can draw out what path gets us the cheapest way to finish.  
// finish <== d <== a <== start
// go backwards and you'll get it
console.log(parents); // { a: "start", b: "start", c: "a", d: "a", finish: "d" }