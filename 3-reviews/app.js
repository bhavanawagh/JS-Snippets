// local reviews data
const reviews = [
  {
    id: 1,
    name: "Atul Chavan",
    job: "Software engineer",
    img:
      "https://corptut.com/wp-content/uploads/2018/09/DSC_0321.jpg",
    text:
      "He is the great software engineer. His perfomance get increses day by day. Coz his hardwork is enough to become a great software engineer. And he is my life partner and mentor too. I love him so much.",
  },
  {
    id: 2,
    name: "Bhavana Chavan",
    job: "javascript developer",
    img:
      "https://corptut.com/wp-content/uploads/2019/12/Bhavana-chavan.jpeg",
    text:
      "I am a javascript programmer. I m from India. I just learn a javascript programming language.I want to become a full stack developer. Thats my dream. I will do hardwork to fulfill my dream. Actualy this dream is of my partner.",
  },
  {
    id: 3,
    name: "Atul Chavan",
    job: "Software engineer",
    img:
      "https://corptut.com/wp-content/uploads/2018/09/DSC_0321.jpg",
    text:
      "He is the great software engineer. His perfomance get increses day by day. Coz his hardwork is enough to become a great software engineer. And he is my life partner and mentor too. I love him so much.",
  },
  {
    id: 4,
    name: "Bhavana Chavan",
    job: "javascript developer",
    img:
      "https://corptut.com/wp-content/uploads/2019/12/Bhavana-chavan.jpeg",
    text:
      "I am a javascript programmer. I m from India. I just learn a javascript programming language.I want to become a full stack developer. Thats my dream. I will do hardwork to fulfill my dream. Actualy this dream is of my partner.",
  },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

//show person based on item

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//show random person

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

