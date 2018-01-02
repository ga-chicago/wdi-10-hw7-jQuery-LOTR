console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo-Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf-the-Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The-Shire', 'Rivendell', 'Mordor'];
var body = document.body;
//var section = '<section></section>';

function makeMiddleEarth() {
  // create a section tag with an id of `middle-earth`
let $section = $('<section id="middle-earth">Middle Earth</section>');
   // add each land as an `article` tag
   for(let i = 0; i<lands.length; i++) {
   let $article = $('<article>');
   $section.append($article);
   // inside each `article` tag include an `h1` with the name of the land
   let $h1 = $('<h1 id=' + lands[i] + '>' + lands[i] + '</h1>');
   $article.append($h1)

   // append `middle-earth` to your document `body`
   $(body).append($section);
   }
}

makeMiddleEarth();

// function that adds html tags for all the hobbits
function makeHobbits(){
  // make variable to store unordered list
    let $hobbitsInTheShire = $('<ul id="Hobbits-in-the-Shire"></ul>')
  $(body).append($hobbitsInTheShire);
  // for loop for making list items for the unordered list
  for(let i = 0; i<hobbits.length; i++) {

    let str = hobbits[i];

    let str2 = str.replace(/'/g, '');

    let str3 = str2.replace(/\s/g, '-');
    console.log(str3);
    let hobbit = $('<li id='+ str3 +'>'+ hobbits[i] + '</li>');
    $hobbitsInTheShire.append(hobbit);


  }
}

makeHobbits();

// function for making ring and giving it to frodo
function keepItSecretKeepItSafe(){
  // makes ring
  $div = $('<div id="the-ring" class="magic-imbued-jewlery"></div>');
  // gives ring to Frodo
  $('#Frodo-Baggins').append($div);

}

keepItSecretKeepItSafe();


function makeBuddies(){
  let $aside = $('<aside id="aside">Buddies</aside>')
  $('#Rivendell').append($aside);

  for(let i = 0; i<buddies.length; i++) {
    let $buddiesList = $('<li id='+ buddies[i] + '>' + buddies[i] + '</li>');
    $(aside).append($buddiesList);
  }

};

makeBuddies();
// function that turns strider into aragorn
function beautifulStranger(){
  // asign strider to a variable
  let $strider = $('#Strider')
  // set the html of strider to be aragorn
  $strider.html('Aragorn');

};

beautifulStranger();

// function that moves the hobbits out of the shire
function leaveTheShire(){
  // variable that stores the hobbits in a variable
  $shire = $('#Hobbits-in-the-Shire');
  // appends the hobbits variable to rivendell
  $('#Rivendell').append($shire);
}

leaveTheShire();

function forgeTheFellowship() {
  // makes a div for the fellowship
  $theFellowship = $('<div id="the-fellowship">The FellowShip</div>');
  // appends the fellowship to Rivendell
  $theFellowship.appendTo('#Rivendell')

  // for loop that puts one buddy at a time to "the-fellowship"
  for(let i = 0; i<hobbits.length; i++){

    // store variable for each hobbit as the loop runs
    let str = hobbits[i];
    str = str.replace(/'/g, '');
    str = str.replace(/\s/g, '-');
    let $hobbit = $(str);
    // append each hobbit to the fellowship
  }
  // set strider equal to aragorn in the array so the loop won't mess up
  buddies[3]="Aragorn"
  for(let i=0; i<buddies.length; i++) {
    // store variable for each buddy index
    let buddyIndex = buddies[i];
    // grab each buddy from the DOM and store it into a variable
    let $buddy = $(buddyIndex);
    // store the fellowship as a variable
    let x = $('the-fellowship');
    //append the buddy to the fellowship
    x.append($buddy);
  }
};

forgeTheFellowship();

function theBalrog(){
  // chage the 'Gandalf' text to 'Gandalf the White'
  $('#Gandalf-the-Grey').html('Gandalf the White');

  $('#Gandalf-the-Grey').css({'backgroundColor': 'white', 'borderStyle': 'groove'})



}

theBalrog();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown");
  // Remove `Boromir` from the Fellowship
  let theFellowship = $('#the-fellowship');
  // store boromir as a variable
  let boromir = $('Boromir');
  // remove child boromir from theFellowship
  boromir.remove();
};

hornOfGondor();

function itsDangerousToGoAlone() {
  // make variable for mordor
  let $mordor = $('#Mordor')
  // make variable for frodo
  let $frodo = $('Frodo-Baggins')
  // make variable for sam
  let $sam = $('Samwise Sam Gamgee')

  $mordor.append($frodo);
  $mordor.append($sam);

  let $article = $('<article id="Mount-Doom">Mount Doom</article>');
  $mordor.append($article);

};

itsDangerousToGoAlone();

function weWantsIt() {
  $('<div id="Gollum">Gollum</div>')
  let theRing = $('#the-ring');
  let gollum = $('#Gollum');

  gollum.append(theRing);
};

weWantsIt();

function thereAndBackAgain(){
  let $theRing = $('the-ring')
  let $gollum = $('Gollum')
  let $mordor = $('Mordor')

  $gollum.remove($theRing);
  $mordor.remove($gollum);

  for(let i = 0; i<hobbits.length; i++) {
    let str = hobbits[i]
    str = str.replace(/'/g, '')
    str = str.replace(/\s/g, '-');
    let hobbit = $('#'+str);
    let shire = $('#The-Shire');
    shire.append(hobbit);
  }
}

thereAndBackAgain();
