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
  $ul.appendTo($('article').eq(0))
}

makeHobbits();

function keepItSecretKeepItSafe(){
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   let $theOneRing = $('<div class="magic-imbued-jewelry"></div>')
   // add the ring as a child of `Frodo`
   // get Frodo
   // console.log($('.hobbit')[0])
   // attach the ring to Frodo
   $theOneRing.appendTo($('.hobbit').eq(0))
}

keepItSecretKeepItSafe();

function makeBuddies(){
   // create an `aside` tag
   let $aside = $('<aside>');
   // create and unordered list for the buddies
   let $buddies = $('<ul>');
   // attach an `unordered list` of the `'buddies'` in the aside
   for (let i = 0; i < buddies.length; i++) {
     let $buddy = $('<li>').text(buddies[i]);
     $buddy.appendTo($buddies);
   }
   $buddies.appendTo($aside);
   // get rivendell
   // console.log($('article')[1]);
   // insert your aside as a child element of `rivendell`
   $aside.appendTo($('article').eq(1));
}

makeBuddies();

function beautifulStranger(){
  // change the `'Strider'` text to `'Aragorn'`
  // get the li that has Strider --->change to Aragorn
  $("li:contains('Strider')").text('Aragorn')
}

beautifulStranger();

function leaveTheShire(){
  // assemble the `hobbits` and move them to `rivendell`
  // get the hobbits
  // console.log($('.hobbit'))
  $hobbits = $('.hobbit')
  // fine rivendell
  // console.log($('article')[1])
  // send the hobbits to rivendell
  $hobbits.appendTo($('article').eq(1))
}

leaveTheShire();

function forgeTheFellowship() {
   // create a new div called `'the-fellowship'` within `rivendell`
   let $theFellowship = $('<div class="the-fellowship"></div>')
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   let $partyMembers = $('li')
   // console.log($partyMembers.length)
   for(let i = 0; i < $partyMembers.length; i++) {
   // after each character is added make an alert that they // have joined your party
     // alert($partyMembers.eq(i).text() + ' has joined the party!')
     $theFellowship.append($partyMembers[i])
   }
   $theFellowship.appendTo($('article').eq(1))
}

forgeTheFellowship();

function theBalrog(){
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   // get gandalf --------> change text -------> add css styling
   $("li:contains('Gandalf')").text('Gandalf the white').css({'background-color': 'white', 'border': '1px solid grey'});
}

theBalrog();

function hornOfGondor() {
   // pop up an alert that the horn of gondor has been blown
   // alert('The Horn of Gondor has been blown!')
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   // get boromir and remove him from the fellowship
   $("li:contains('Boromir')").remove()
}

hornOfGondor();

function itsDangerousToGoAlone() {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   for(let i = 0; i < 2; i++){
   // get frodo and sam
   // run 2x to get sam and frodo, both will be at index 0
   $('.hobbit').eq(0).appendTo($('article').eq(2))
   }  
   // add a div with an id of `'mount-doom'` to `Mordor`
   let $mountDoom = $('<div id="mount-doom"></div>')
   $mountDoom.appendTo($('article').eq(2))
}

itsDangerousToGoAlone();

function weWantsIt() {
   // Create a div with an id of `'gollum'` and add it to Mordor
   let $gollum = $('<div id="gollum"></div>')
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   $gollum.append($('.magic-imbued-jewelry'))
   // Move Gollum into Mount Doom
   $gollum.appendTo($('#mount-doom'))
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();

console.log(document);