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

   // assemble the `hobbits` and move them to `rivendell`
  let $hobbitList = $('article.The.Shire li')
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

    // after each character is added make an alert that they // have joined your party
    console.log($(newItem).text() + " has joined your party");
  }
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
  
  // pop up an alert that the horn of gondor has been blown
  console.log("The horn of Gondor has been blown")
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  let boromir = $('li')[4]
  $(boromir).remove()
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let frodo = $('.hobbit')[0];
  // console.log(frodo); 
  let sam = $('.hobbit')[1];
  // console.log(sam);  
  $('.Mordor').append($(frodo));
  $('.Mordor').append($(sam));

  // add a div with an id of `'mount-doom'` to `Mordor`
  let $newDiv = $('<div>').attr('id', 'mount-doom');
  $('.Mordor').append($newDiv)

}

itsDangerousToGoAlone();

function weWantsIt() {

  // Create a div with an id of `'gollum'` and add it to Mordor
  let $newDiv = $('<div>').attr('id', 'gollum');
  $('.Mordor').append($newDiv);

  // Remove `the ring` from `Frodo` and give it to `Gollum`
  $('.magic-imbued-jewelry').appendTo($('#gollum'));
  
  // Move Gollum into Mount Doom
  $('#mount-doom').append($('#gollum'))
}

weWantsIt();

function thereAndBackAgain(){

  // remove `Gollum` and `the Ring` from the document
  $('#gollum').remove()
  // Move all the `hobbits` back to `the shire`
  $('.hobbit').appendTo($(".The.Shire"))
}

thereAndBackAgain();
