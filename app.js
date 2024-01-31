//array of 3 quotations
const quotations = [
  "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. -Will Ferrell",
  "“I'm not superstitious, but I am a little stitious. —Michael Scott (Steve Carrell), The Office",
  "“A day without sunshine is like, you know, night. —Steve Martin"
];

//function to pick a random quotation
function getRandomQuotation() {
  const randomIndex = Math.floor(Math.random() * quotations.length);
  return quotations[randomIndex];
}

//print a random quotation to the console
console.log(getRandomQuotation());

//i used w3 schools to help write this function