console.log("jquery version");

// Dramatis Personae
let hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

let buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

let lands = ['The Shire', 'Rivendell', 'Mordor'];
let body = document.body;
let section = '<section></section>';

function makeMiddleEarth() {
    // create a section tag with an id of `middle-earth`
    let section = $('<section>').attr('id', 'middle-earth');
    // add each land as an `article` tag
    for(i=0; i < lands.length; i++){
        let article = $('<article>');
        // console.log($article)
        let h1 = $('<h1>').text(lands[i]);
        // console.log($h1)
        article.append(h1)
        section.append(article)
    }
    // $('body').append($section)
    section.appendTo($('body'))
    // inside each `article` tag include an `h1` with the name of the land
    // append `middle-earth` to your document `body`
}

makeMiddleEarth();

function makeHobbits(){
    // display an `unordered list` of hobbits in the shire
    let ul = $('<ul>')

    for(i=0; i < hobbits.length; i++){
        let li = $('<li>').attr('class', 'hobbit').text(hobbits[i]);
        ul.append(li)
    }
    
    let article = $("article:first") // get article
    article.append(ul)
    // (which is the second article tag on the page)
    // give each hobbit a class of `hobbit`
}

makeHobbits();

function keepItSecretKeepItSafe(){
    // create a div with an id of `'the-ring'`
    let div = $('<div>').attr('id', 'the-ring')
    div.attr('class', 'magic-imbued-jewelry');
    // give the div a class of `'magic-imbued-jewelry'`
    // add the ring as a child of `Frodo`
    // find frodo
    let frodo = $("li:contains('Frodo Baggins')")
    // div go inside frodo
    div.appendTo(frodo)
}

keepItSecretKeepItSafe();

function makeBuddies(){
    // // create an `aside` tag

    // //article append asside 

    let aside = $('<aside>')
    // attach an `unordered list` of the `'buddies'` in the aside
    let ul = $('<ul>')
    for(i=0; i < buddies.length; i++){

        let li = $('<li>').text(buddies[i])
        // li go inside ul
        ul.append(li)
    }
    $(aside).append(ul)
    
    //find rivendale
    let rivendale = $('article')[1];
    
    // check
    $(rivendale).append(aside)    
    // insert your aside as a child element of `rivendell`
}
makeBuddies();

function beautifulStranger(){
    // change the `'Strider'` text to `'Aragorn'
    //get strider element
    let strider = ($('li')[7]);
    
    //change the text
    $(strider).text('Aragorn');
}
beautifulStranger();

function leaveTheShire(){
    // assemble the `hobbits` and move them to `rivendell`
    //get hobbits
    let hobbits = ($('ul')[0])
    
    //get rivendale -> from article not ul
    let rivendale = $('article')[1];
    //move them to rivendale
    $(hobbits).appendTo(rivendale)
}

leaveTheShire();

function forgeTheFellowship() {
    // create a new div called `'the-fellowship'` within `rivendell`
     //make new div with class
    let div = $('<div>').attr('class', 'the-fellowship')
    //get rivendale
    let rivendale = $("#middle-earth").children()[1];
    //add div to rivendale
    $(rivendale).append(div)

    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    // gather all the hobbits and buddies -> all r in li tags
    let buddiesAndHobbits = $("li").each(function() {
        //for each li tag alert the text inside them and a sentance
        alert($(this).text() + " has joined the fellowship");
    });
}

// forgeTheFellowship();

function theBalrog(){
    // change the `'Gandalf'` text to `'Gandalf the White'`
    //find gandalf
    let gandalf = ($('li')[0])
    // console.log(gandalf)
    // make the background 'white', add a grey border
    $(gandalf).css('background-color', 'white').css('border', '2px solid grey')
}

theBalrog();

function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    alert("the horn of gondor has been blown");
    // Boromir's been killed by the Uruk-hai!
    let boromir = ($('li')[4])
    // Remove `Boromir` from the Fellowship
    boromir.remove()
}

hornOfGondor();

function itsDangerousToGoAlone() {
    // get frodo
    let frodo = ($('li')[4]);
    //get sam
    let sam = ($('li')[5]);

    //get mordor
    let mordor = ($('article')[2])
     // add a div with an id of `'mount-doom'` 
    let div = $('<div>').attr('id', 'mount-doom')
    // move to `Mordor`
    $(mordor).append(div)

    // move sam and frodo to `Mordor`
    $(mordor).append(sam);
    $(mordor).append(frodo);
}

itsDangerousToGoAlone();

function weWantsIt() {
    // Create a div with an id of `'gollum'` 
    let div = $('<div>').attr('id', 'gollum')
    //get mordor
    let mordor = ($('article')[2])
    // add div to Mordor
    $(mordor).append(div);
    // Remove `the ring` from `Frodo` and give it to `Gollum`
    // steal frodos ring
    let ring = ($('div')[2])
    
    //find golum
    let gollum = ($('div')[3])
    
    //give gollum the ring
    $(gollum).append(ring)
    // Move Gollum into Mount Doom
    $(gollum).appendTo('mount-doom')
}

weWantsIt();

function thereAndBackAgain(){
    // remove `Gollum` and `the Ring` from the document
    let gollum = ($('div')[2])
    // console.log(gollum)
    gollum.remove()
    // get all hobbits
    let hobbits = $(".hobbit")
    console.log(hobbits)
    //find the shire
    let shire = $('article')[0];
    console.log(shire)
    //move back to shire
    $(shire).append(hobbits)
}

thereAndBackAgain();




