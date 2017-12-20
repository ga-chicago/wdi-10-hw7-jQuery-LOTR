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
    let $newSection = $('<section>').attr("id",'middle-earth');
   // add each land as an `article` tag
    for(let i = 0; i < lands.length; i++) {
      let $newArticle = $('<article>').addClass(lands[i]);
      let $newH1 = $('<h1>').text(lands[i]);
      $newArticle.append($newH1);
      $newSection.append($newArticle)
    }
   // inside each `article` tag include an `h1` with the name of the land
    $('body').append($newSection);
   // append `middle-earth` to your document `body`
}

makeMiddleEarth();

function makeHobbits(){
  // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
  let $newList = $('<ul>');
  
  // console.log($newList)
  for(let i = 0; i < hobbits.length; i++){
    let $newItem = $('<li>').addClass('hobbit').text(hobbits[i]);
    $newList.append($newItem)
  }
  $('.The.Shire').append($newList)
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // create a div with an id of `'the-ring'`
    let $newDiv = $('<div>').attr("id", "the-ring");
    // console.log($newDiv)
   // give the div a class of `'magic-imbued-jewelry'`
    $newDiv.addClass('magic-imbued-jewelry');
    // console.log($newDiv)
   // add the ring as a child of `Frodo`
   let frodo = $('li')[0];
   $(frodo).append($newDiv)
}

keepItSecretKeepItSafe();

function makeBuddies(){
   // create an `aside` tag
    let $newAside = $('<aside>');
   // attach an `unordered list` of the `'buddies'` in the aside
    let $newList = $("<ul>")
    
    for(let i = 0; i < buddies.length; i++){
      let $newItem = $('<li>').text(buddies[i])
      $newList.append($newItem)
    }
   // insert your aside as a child element of `rivendell`
   $newAside.append($newList);
   $('.Rivendell').append($newAside)
}

makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
  let aragorn = $('li')[7];
  $(aragorn).text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  let $hobbitList = $('article.The.Shire li')

  // for(let i = 0; i < hobbitList.length; i++){
    $('.Rivendell').append($hobbitList)
}

leaveTheShire();

function forgeTheFellowship() {
  // create a new div called `'the-fellowship'` within `rivendell`
  let $newDiv = $('<div>').addClass('the-fellowship')
  $('Rivendell').append($newDiv)
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let newArray = $('li')
  for(let i = 0; i < newArray.length; i++){
    let newItem = newArray[i]
    $('.the-fellowship').append($(newItem));
    console.log($(newItem).text() + " has joined your party");
  }
  // after each character is added make an alert that they // have joined your party
}

forgeTheFellowship();

function theBalrog(){
  // change the `'Gandalf'` text to `'Gandalf the White'`
    let gandalf = $('li')[0]
    $(gandalf).text('Gandalf the white')
   // apply the following style to the element, make the // background 'white', add a grey border
   $(gandalf).css("background-color", "white").css("border", "2px grey solid")
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
