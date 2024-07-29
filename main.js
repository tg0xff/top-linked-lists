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
console.log(`Prepend 'kookaburra':\n${list.toString()}`);

console.log(`Return third element: ${list.at(2).value}`);

list.pop();
console.log(`Remove last element:\n${list.toString()}`);

console.log(`Contains 'cat'? ${list.contains("cat")}`);
console.log(`Contains 'doe'? ${list.contains("doe")}`);

console.log(`Get index of 'snake': ${list.find("snake")}`);
console.log(`Get index of 'fish': ${list.find("fish")}`);

list.insertAt("doe", 4);
console.log(`Insert 'doe' at index 4:\n${list.toString()}`);
