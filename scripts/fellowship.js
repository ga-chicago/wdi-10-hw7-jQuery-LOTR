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
  let $newSection = $('<section>').attr('id','middle-earth');
  for (let i = 0; i < lands.length; i++) {
    let $newArticle = $('<article>');
    let $newh1 = $('<h1>').text(lands[i]);
    $newh1.appendTo($newArticle);
    $newSection.append($newArticle);
  }
  $newSection.appendTo($('body'));
}

makeMiddleEarth();

function makeHobbits(){
  let $theShire = $('article')[0];
  let $newUl = $('<ul>');
  $theShire.append($newUl[0]);
  for (let i = 0; i < hobbits.length; i++) {
    let $newli = $('<li>').text(hobbits[i]);
    $newUl.append($newli);
  }
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
