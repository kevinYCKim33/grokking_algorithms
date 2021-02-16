// the graph
const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

// The costs table
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// the parents table
const parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

let processed = [];

debugger;

const findLowestCostNode = (itCosts) => {
  // itCosts = {a: 6, b:2, fin: Infinity }
  debugger;
  let lowestCost = Infinity;
  let lowestCostNode = null; // low key clutch in killing the while loop

  // just good ol' king of the hill play here...processed isn't very clear to me but so far so good...
  Object.keys(itCosts).forEach((node) => {
    debugger;
    const cost = itCosts[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      debugger;
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  debugger;
  return lowestCostNode;
};

let node = findLowestCostNode(costs); // "b"
debugger;

while (node !== null) {
  debugger;
  const cost = costs[node]; // costs["b"] => 2
  // Go through all the neighbors of this node
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((n) => {
    debugger;
    const newCost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > newCost) {
      debugger;
      // ... update the cost for this node
      costs[n] = newCost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  debugger;
  // Mark the node as processed
  processed = processed.concat(node);

  debugger;
  // Find the next node to process, and loop
  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
console.log(parents); // {a: "b", b: "start", fin: "a"} // fin <-- a <-- b <-- start
