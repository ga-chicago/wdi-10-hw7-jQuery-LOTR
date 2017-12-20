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
  let $newSection = $('<section>').attr("id",'middle-earth');
  
  // add each land as an `article` tag
  for(let i = 0; i < lands.length; i++) {

    // inside each `article` tag include an `h1` with the name of the land
    let $newArticle = $('<article>').addClass(lands[i]);
    let $newH1 = $('<h1>').text(lands[i]);
    $newArticle.append($newH1);
    $newSection.append($newArticle)
  }

  // append `middle-earth` to your document `body`
  $('body').append($newSection);
}

makeMiddleEarth();

function makeHobbits(){

  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
  let $newList = $('<ul>');

  // console.log($newList)
  for(let i = 0; i < hobbits.length; i++){
    let $newItem = $('<li>').addClass('hobbit').text(hobbits[i])
    $newList.append($newItem)
  }
  $('.The.Shire').append($newList)
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
