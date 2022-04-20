const nameList =  ["Leo", "Marco", "Giovanni", "Pietro", "Matteo", "Nicola"];
const lastNameList = ["Armillotta", "Costantino", "Bottalico", "De Padova", "Rinaldi", "Coccia"];

const fakeName = [];
console.log(fakeName);


for (let index = 0; index < 3; index++) {

    const randomNameNumber = Math.floor(Math.random () * nameList.length)
    const randomName = nameList[randomNameNumber]

    const randomLastNameNumber = Math.floor(Math.random () * lastNameList.length)
    const randomLastName = lastNameList[randomLastNameNumber]
    
    let completRandomName = `${randomName} ${randomLastName}`;
    console.log(completRandomName);

    fakeName.push(completRandomName)
}