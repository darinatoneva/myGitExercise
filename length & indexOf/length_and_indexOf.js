/*Exercise
with . length and [ index
Start with:
const name = Albus Percival Wulfric Brian Dumbledore 
Write codelines with . length and [ ] to answer these questions
1.What is the total number of characters, including spaces
2.What is the character at index 2?
3.Which character is at index 6?
4.What is the index of the first D in Dumbledore?
5.What is the index of the last e in Dumbledore?*/

const name = "Albus Percival Wulfric Brian Dumbledore";
//1.What is the total number of characters, including spaces
const totalNumberCharacters = name.length;
//console.log(`${totalNumberCharacters}`); //Answer: 39

//2.What is the character at index 2?
const index2 = name[2];
//console.log(`${index2}`); //Answer: b

//3.Which character is at index 6?
const index6 = name[6];
//console.log(`${index6}`); //Answer: P

//4.What is the index of the first D in Dumbledore?
const searchFirstD = "Dumbledore";

const indexOfFirst = name.indexOf(searchFirstD);

/*console.log(
  'The index of the first "' +
    searchFirstD +
    '" from the beginning is ' +
    indexOfFirst
);*/
//Answer: The index of the first "Dumbledore" from the beginning is 29

//5.What is the index of the last e in Dumbledore?*/
const res = searchFirstD.lastIndexOf("e");
console.log(`the index of the last e in ${searchFirstD} is ${res}.`);
//Answer: the index of the last e in Dumbledore is 9.
