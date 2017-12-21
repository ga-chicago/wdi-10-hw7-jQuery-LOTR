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
   let $middleEarth = $('<section id="middle-earth"></section>')
   for(let i = 0; i < lands.length; i++) {
     // add each land as an `article` tag
     let $article = $('<article>');
     // inside each `article` tag include an `h1` with the name of the land
     let $h1 = $('<h1>');
     $h1.text(lands[i]);
     $article.append($h1); 
     $middleEarth.append($article);
   }
   // append `middle-earth` to your document `body`
   $middleEarth.appendTo($('body'));
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

console.log(document);