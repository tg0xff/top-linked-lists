import LinkedList from "./linked-list.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.prepend("kookaburra");
console.log(`Prepending 'kookaburra': \n${list.toString()}`);

console.log(`Return third element: ${list.at(2).value}`)
