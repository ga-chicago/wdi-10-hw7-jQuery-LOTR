console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // create a section tag with an id of `middle-earth`
  let section = $("<section>").attr("id","middle-earth");
  // add each land as an `article` tag
  for (var i = 0; i < lands.length; i++) {
    $(section).append("<article><h1>"+lands[i]+"</h1></article>")
  };
  // inside each `article` tag include an `h1` with the name of the land
  // append `middle-earth` to your document `body`
  $("body").append(section);
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
}

makeBuddies();

function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
