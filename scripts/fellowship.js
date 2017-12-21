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
  // display an `unordered list` of hobbits in the shire
  // create an unordered list
  let $ul = $('<ul>');
  for(let i = 0; i < hobbits.length; i++) {
      // create a list item for each hobbit, give them a hobbit class
      let $li = $('<li class="hobbit"></li>');
      // add the hobbit's name as the text
      $li.text(hobbits[i]);
      // add the hobbit to the unordered list
      $li.appendTo($ul);
  }
  // get the shire
  // console.log($('article')[0])
  // attach the hobbit list to the shire
  $ul.appendTo($('article')[0])
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
}

keepItSecretKeepItSafe();

function makeBuddies(){
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   let $theOneRing = $('<div class="magic-imbued-jewelry"></div>')
   // add the ring as a child of `Frodo`
   // get Frodo
   // console.log($('.hobbit')[0])
   // attach the ring to Frodo
   $theOneRing.appendTo($('.hobbit')[0])
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