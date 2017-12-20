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
  // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
  let $shire = $("article").get(0);
  let $newUl = $("<ul>").attr("id","hobbits");
  $($shire).append($newUl);
   // give each hobbit a class of `hobbit`
   for (var i = 0; i < hobbits.length; i++) {
    let $hobbit = $("<li>"+hobbits[i]+"</li>").addClass("hobbit");
     $("#hobbits").append($hobbit);
   }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
  let $ring = $("<div>").attr("id", "the-ring").addClass("magic-imbued-jewelry");
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $(".hobbit").first().append($ring);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
}

makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}

theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
}

itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
}

weWantsIt();

function thereAndBackAgain(){
  // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
}

thereAndBackAgain();
