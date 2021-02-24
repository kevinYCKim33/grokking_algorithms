/*
Radio Stations Problem:

Find least amount of radio stations to play in all the statesNeeded
Greedy/Approximation Algorithm O(n^2)
*/

// Cool Epiphany: You pass an array into a Set then you don't have to do set.add('a')
// statesNeeded: states that need to be covered by a subset of these five stations
// statesNeeded will wittle down to size 0 by the time we're done with this while loop
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

// what you're building up to...
// I don't really think this needs to be a Set based on the algo...but ho-hum for now..
const finalStations = new Set();

// nitpick with this while loop:
// we're assuming that all of the states needed will be covered by the five stations
while (statesNeeded.size) {
  // set.size; not set.length;

  // initializing per while loop
  let bestStation = null;
  let statesCovered = new Set();
  Object.keys(stations).forEach((station) => {
    // [kone, ktwo, kthree, kfour, kfive].forEach()
    const states = stations[station];

    // Big Picture: Get the intesection of statesNeeded & statesCoveredPerStation
    // Python syntax: states_needed & states_for_station
    // ES6 janky version for intersection, union, difference: https://2ality.com/2015/01/es6-set-operations.html
    // First Pass through while loop it feels kinda silly
    // yes, the intersection of statesPerStation and statesNeeded will just be statesPerStation
    const covered = new Set(
      // low key clutch/strange/cool/nifty:
      // spread operator on a set gets you an array
      // [...statesNeeded] ==> ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]
      [...statesNeeded].filter((x) => {
        return states.has(x);
      })
    );

    // two, three, four won't pass this if block
    if (covered.size > statesCovered.size) {
      // first pass: kone
      bestStation = station; // 1st: kone,
      statesCovered = covered; // [id, nv, ut]
    }
  }); // end stations loop

  // Big Picture: take the difference between statesNeeded and statesCovered (with your bestStation)
  // Python syntax: states_needed -= states_covered
  // pare down statesNeeded;
  // 1st pass: take off id, nv, ut off the list; add k1
  // 2nd pass: take off wa, mt off the list
  // 3rd pass: take off or, ca off the list
  // 4th pass: take off az off the list;
  // statesNeeded is now empty
  statesNeeded = new Set(
    [...statesNeeded].filter((x) => {
      return !statesCovered.has(x);
    })
  );

  // 1st pass: add kone;
  // 2nd pass: add ktwo;
  // 3rd pass: add kthree;
  // 4th pass: add kfive;
  // statesNeeded is now empty
  finalStations.add(bestStation);
} // end while loop

debugger;
// not exact but close enough according to Approximation/Greedy Algorithm
console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
