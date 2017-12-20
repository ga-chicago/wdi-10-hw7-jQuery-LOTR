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
  let $shire = $("#middle-earth").children()[0];
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
  let $aside = $("<aside>");
  let $ul = $("<ul>").attr("id","buddies");
  $($aside).append($ul);
   // attach an `unordered list` of the `'buddies'` in the aside
   for (var i = 0; i < buddies.length; i++) {
    let $buddy = $("<li>"+buddies[i]+"</li>").addClass("buddy");
     $($ul).append($buddy)
   };
   // insert your aside as a child element of `rivendell`
   let $rivendell = $("#middle-earth").children()[1];
   $($rivendell).append($aside);
}

makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
  let $strider = $("#buddies").children()[3];
  $($strider).text("Aragorn")
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
  let $hobbits = $("#hobbits");
  let $rivendell = $("#middle-earth").children()[1];
  $($rivendell).append($hobbits);

}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
  let $fellowship = $("<div>").addClass("the-fellowship");
  let $rivendell = $("#middle-earth").children()[1];
  $($rivendell).append($fellowship);

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
  let $hobbitsList = $(".hobbit");
 
  for (var i = 0; i < $hobbitsList.length; i++) {
    let $hobbit = $($hobbitsList[i]);
    $(".the-fellowship").append($hobbit);
    // alert($hobbit.text() + " has joined the party!")
  }

  let $buddiesList = $(".buddy");
 
  for (var i = 0; i < $buddiesList.length; i++) {
    let $buddy = $($buddiesList[i]);
    $(".the-fellowship").append($buddy);
    // alert($buddy.text() + " has joined the party!")
  }
  
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
  let $gandolf = $(".buddy")[0];
  $($gandolf).text("Gandalf the White");
   // apply the following style to the element, make the // background 'white', add a grey border
  $($gandolf).css("background", "white").css("border", "grey");
}

theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   let $boromir = $(".buddy")[4];
   $($boromir).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let $frodo = $(".hobbit")[0];
  let $sam = $(".hobbit")[1];
  // console.log($(".hobbits"))
  let $mordor = $("article")[2];

  $($mordor).append($sam);
  $($mordor).append($frodo);
   // add a div with an id of `'mount-doom'` to `Mordor`
   let $doom = $("<div>").attr("id","mount-doom");
   $($mordor).append($doom);
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
