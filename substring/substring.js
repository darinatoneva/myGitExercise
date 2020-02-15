/*Quick
exercises with . substring
Continue with:
const name = Albus Percival Wulfric Brian Dumbledore
Figure out which values you need in . substring to get these results
1.Albus
2.2."Dumbledore" can you do it with just one parameter?)
3.Wulfric
4.ian
5.bus
Answer:
const fullName = "Albus Percival Wulfric Brian Dumbledore";
  //const Albus = name.substring(0, 5);
  //console.log(`${Albus}`);

  const firstName = "Albus";
  //find the index of the first letter
  const firstIndexOfAlbus = fullName.indexOf(firstName);
  //console.log(`${firstIndexOfAlbus}`); //0
  //find the index of the last letter

  //console.log(`${Albus.length}`); //5
  const AlbusSub = fullName.substring(firstIndexOfAlbus, firstName.length);
  console.log(`${AlbusSub}`);


function findAndPrintSubstring() {
  const fullName = "Albus Percival Wulfric Brian Dumbledore";
  //const Albus = name.substring(0, 5);
  //console.log(`${Albus}`);

  const firstName = "Albus";
  //find the index of the first letter
  const firstIndexOfAlbus = fullName.indexOf(firstName);
  //console.log(`${firstIndexOfAlbus}`); //0
  //find the index of the last letter

  //console.log(`${Albus.length}`); //5
  const AlbusSub = fullName.substring(firstIndexOfAlbus, firstName.length);

  if (AlbusSub == firstName) {
    console.log(`hoora - ${firstName}`);
  } else {
    console.log("da da ama ne");
  }
}*/

function findAndPrintSubstring(searchedPart, sentence) {
  const firstIndexOfSearchedPart = sentence.indexOf(searchedPart);
  const foundPart = sentence.substring(
    firstIndexOfSearchedPart,
    firstIndexOfSearchedPart + searchedPart.length
  );
  //testIfWorks(foundPart, searchedPart);
  console.log(testIfWorks(foundPart, searchedPart));
}
function testIfWorks(foundPart, searchedPart) {
  if (foundPart == searchedPart) {
    console.log(`hoora - ${foundPart}`);
  } else {
    return `da da ama ne ${foundPart}`;
  }
}

/*function testIfWorks(foundPart, searchedPart) {
  if (foundPart == searchedPart) {
    console.log(`hoora - ${foundPart}`);
  } else {
    console.log(`da da ama ne ${foundPart}`);
  }
}*/

const fullName = "Albus Percival Wulfric Brian Dumbledore";
findAndPrintSubstring("Albus", fullName);
findAndPrintSubstring("Wulfric", fullName);
findAndPrintSubstring("ian", fullName);

function oneParameterOnly(searchedPart) {
  findAndPrintSubstring(searchedPart, fullName);
}
oneParameterOnly("Dumbledore");
