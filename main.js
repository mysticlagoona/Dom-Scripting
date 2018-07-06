'use strict' 

let bookObject = {
 'book1' : {
  'ID':'the_dragon_of_fortune',
  'title' : 'The Dragon of fortune', 
  'language' : 'English',
  'author': 'Geronimo Stilton',
  'image':'image/the_dragon_of_fortune.jpg'},

  'book2' :{
  'ID':'lost_treasure_of_the_emerald_eye',
  'title' : 'Lost Treasure of the Emerald Eye',
  'language' : 'English', 
   'author': 'Geronimo Stilton',
  'image':'image/lost_treasure_of_the_emerald_eye.jpg'},

  'book3' : { 
  'ID':'the_kingdom_of_fantasy',
  'title': 'The Kingdom of Fantasy',
  'language' : 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/the_kingdom_of_fantasy.jpg'},

  'book4' : { 
  'ID':'the_ship_of_secrets',
  'title' : 'The Ship of Secrets',
  'language': 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/the_ship_of_secrets.jpg'},

  'book5' : { 
  'ID':'the_enchanted_charms',
  'title': 'The Enchanted Charms', 
  'language': 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/the_enchanted_charms.jpg'},

'book6' : { 
  'ID':'the_kingdom_of_fantasy',
  'title': 'The Quest for Paradise', 
  'language': 'English',
  'author': 'Geronimo Stilton',
  'image':'image/the_kingdom_of_fantasy.jpg'},


 'book7': {
  'ID':'christmas_catastrophe' ,
  'title': 'Christmas Catastrophe',
  'language': 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/christmas_catastrophe.jpg'},



 'book8' : { 
  'ID':'the_curse_of_the_cheese_pyramid',
  'title': 'The Curse of the Cheese Pyramid ',
  'language': 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/the_curse_of_cheese_pyramid.jpg'},



 'book9' : {
  'ID' :'the_volcano_of_fire', 
  'title': 'The Volcano of Fire',
  'language': 'English', 
  'author': 'Geronimo Stilton',
  'image':'image/the_volcano_of_fire.jpg'},



  'book10' : { 
  'ID' :"the_wizard's_wand",
  'title': "The Wizard's Wand",
  'language': 'English',
  'author': 'Geronimo Stilton',
  'image':'image/the_wizards_wand.jpg'},

};



function onLoadTable() {
  let listBooks = document.getElementById("foocafe");
  let bookTable = document.createElement('table');

  /* Go through all the books */
  for(let book in bookObject) {
    let tableRow = document.createElement('tr');
    let tableHead = document.createElement('th');
    let headText = document.createTextNode(book);
    tableHead.appendChild(headText);
    tableRow.appendChild(tableHead);

    /* Go through all the keys inside one book */
    for (let key in bookObject[book]) {
      let tableColumn = document.createElement('td');

      if (key === "image") {
      /* If the key is image we need to append a img tag */
        let insideColumn = document.createElement('img');
        insideColumn.setAttribute("src", bookObject[book][key]);
        insideColumn.setAttribute("width", 100);
        insideColumn.setAttribute("height", 150);

        tableColumn.appendChild(insideColumn);
      } else {
        /* Otherwise, just create a table column and put the text */
        let insideColumn = document.createTextNode(bookObject[book][key]);
        tableColumn.appendChild(insideColumn);
      }

      tableRow.appendChild(tableColumn); 
    }

    bookTable.appendChild(tableRow);
  }

  listBooks.appendChild(bookTable);
} 


