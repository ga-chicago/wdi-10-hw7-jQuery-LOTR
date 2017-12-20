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
  $($theShire).append($newUl);
  for (let i = 0; i < hobbits.length; i++) {
    let $newli = $('<li>').text(hobbits[i]).addClass('hobbit');
    $newUl.append($newli);
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  let $newDiv = $('<div>').attr('id','the-ring').addClass('magic-imbued-jewelry');
  let $frodo = $('li')[0];
  $($frodo).append($newDiv);
  console.log($frodo);
}

keepItSecretKeepItSafe();

function makeBuddies(){
  let $newAside = $('<aside>');
  let $newList = $('<ul>');
  let rivendell = $('article')[1];
  for(let i = 0; i < buddies.length; i++) {
     let $newItem = $('<li>').text(buddies[i]);
     $newList.append($newItem);
   }
  $newAside.append($newList);
  $(rivendell).append($newAside);
}

makeBuddies();

function beautifulStranger(){
  let stranger = $('li')[7];
  $(stranger).text('Aragorn');
}

beautifulStranger();

function leaveTheShire(){
  let $allHobbits = $('.hobbit');
  let rivendell = $('article')[1];
  $(rivendell).append($allHobbits);
}

leaveTheShire();

function forgeTheFellowship() {
  let $newDiv = $('<div>').addClass('the-fellowship');
  let rivendell = $('article')[1];
  $(rivendell).append($newDiv);

  let array = $('li')
  for(let i = 0; i < array.length; i++) {
    let temp = array[i]
    $('.the-fellowship').append($(temp));
  }
}

forgeTheFellowship();

function theBalrog(){
  let gandalf = $('li')[0];
  $(gandalf).text('Gandalf the White').css('background-color', 'white').css('border', '2px solid grey');
}

theBalrog();

function hornOfGondor() {
  alert('The horn of Gondor has been blown!');
  alert("Boromir's been killed by Uruk-hai!");
  let boromir = $('li')[4];
  $(boromir).remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  let frodo = $('.hobbit')[0];
  let sam = $('.hobbit')[1];
  let mordor = $('article')[2];
  $(mordor).append($(frodo));
  $(mordor).append($(sam));
  let $newDiv = $('<div>').attr('id','mount-doom');
  $(mordor).append($newDiv);
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
