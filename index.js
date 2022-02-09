function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(function (json) {
    renderBooks(json);
    //console.log(json);
    //console.log(json[4].name);
    //for(const element of json){
    //  console.log(element.characters);
      //for(const character of element){
      //  if (character === 'https://anapioficeandfire.com/api/characters/1031') {
      //    console.log('Success');
      //  }
      //  else{
      //    console.log('failure');
      //  };
      //  
      //};
    //};
  })
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
