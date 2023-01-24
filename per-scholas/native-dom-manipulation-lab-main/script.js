let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  function newTitle(str) {
    document.getElementById("main-title").innerHTML = str;
  }
  newTitle("DOM'S PLAYGROUND");

  // Part 2

  function newColor(color) {
    document.body.style.backgroundColor = color;
  }
  newColor("#ff0090");



  // Part 3

  function removeLast() {
    const lastFav = document.getElementById("favorite-things");
    lastFav.removeChild(lastFav.lastElementChild);
  }
  removeLast();




  // Part 4

  function newFontSize(size) {
    document.querySelectorAll(".special-title").forEach((title) => {
      title.style.fontSize = size;
    });
  }
  newFontSize("2rem");


  // Part 5
  function removeWord(str) {
    let neverRaced = document.querySelectorAll("#past-races > li");
    for (let i = 0; i < neverRaced.length; i++) {
      if (neverRaced[i].innerHTML === str) {
        neverRaced[i].parentNode.removeChild(neverRaced[i]);
      }
    }
  }
  removeWord("Chicago");





  // Part 6
  function addCity(city) {
    let newCity = document.createElement("li");
    newCity.textContent = city;
    document.getElementById("past-races").append(newCity);
  }
  addCity('Boston')
  addCity('Cambridge')




  // Part 7

  function newBlogPost(city, sentence){
    let newDiv = document.createElement("div");
    let newH1 = document.createElement("h1");
    let newP = document.createElement("p");
    newDiv.classList.add("blog-post", "purple");
    newH1.textContent = city;
    newP.textContent = sentence;
    newDiv.append(newH1, newP);
    document.querySelector(".main").appendChild(newDiv);
    }
    newBlogPost('Boston', "I raced down Mass Ave!")
    newBlogPost('Cambridge', "I drove my race car through the Harvard Yard!")
    





  // Part 8 already listed above part 1


  

  // Part 9

  function mouseOver(ele, color){
    let blogPost = document.querySelectorAll(ele);
    
    blogPost.forEach(function (post) {
      console.log(post);
      post.addEventListener("mouseout", function () {
        post.classList.toggle(color);
      });
      post.addEventListener('mouseover', function() {
        post.classList.toggle(color);
      });
    });
    }
    
    mouseOver(".blog-post", "red")


});
