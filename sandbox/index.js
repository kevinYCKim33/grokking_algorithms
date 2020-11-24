console.log("hello");

const graph = {};

graph.you = ["alice", "bob", "claire"];

graph.alice = ["peggy"];
graph.bob = ["anuj", "peggy"];
graph.claire = ["thom", "jonny"];

graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const isMangoSeller = (name) => name[name.length - 1] === "m";

const search = (person) => {
  debugger;
  // check if this person is a mango seller
  const listOfPeopleChecked = [];
  let listOfPeopleToCheck = [person];

  while (listOfPeopleToCheck.length) {
    const thePerson = listOfPeopleToCheck.shift();
    if (listOfPeopleChecked.includes(thePerson)) {
      continue;
    } else if (isMangoSeller(thePerson)) {
      console.log(`${thePerson} is a mango seller!`);
      return true;
    } else {
      listOfPeopleChecked.push(thePerson);
      listOfPeopleToCheck = listOfPeopleToCheck.concat(graph[thePerson]);
    }
  }

  console.log("no mango sellers in your network");
  return false;

  // there needs to be a list of people you checked
};

search("you"); // 'thom is a mango seller!'
