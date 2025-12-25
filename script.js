const allReviewButton$ = document.getElementById("allReviewsButton");
const stars$ = document.querySelectorAll(".stars");
const starOne = document.getElementById("star-1");
const starTwo = document.getElementById("star-2");
const starThree = document.getElementById("star-3");
const starFour = document.getElementById("star-4");
const starFive = document.getElementById("star-5");
// const amazonButtonButton$ = document.getElementById("amazonButton");
// const googleButton$ = document.getElementById("googleButton");
// const upworkButton$ = document.getElementById("upworkButton");
const navigationButtons = document.querySelectorAll(".nav-buttons");
const inputReview$ = document.getElementById("inputReview");
const writeButton$ = document.getElementById("writeButton");
const select$ = document.getElementById("select");
const myReview$ = document.getElementById("myReview");
const inputsReview$ = document.getElementById("inputsReview");
const messageButton$ = document.querySelector(".messageButton");

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let reviews = [];

// ---
const addNewReview = () => {
  const input = inputReview$.value;
  const selection = select$.value;
  console.log(input);

  if (input.length < 1) {
    alert("Please write at least 100 words!");
    return;
  }
  const review = {
    text: input, 
    select: selection, 
  };
  reviews.push(review);

  cleanReviewInput();
  renderReview(reviews);
};

// ---
const cleanReviewInput = () => {
  inputReview$.value = "";
};

// ---
const createAReview = (review) => {
  return `<div class="input-element">
   <p id="agencyButton">${review.select} client's review</p>
      <p id="myReview">"${review.text}"</p>
    </div>`;
};

// ---
const renderReview = (reviewsArr) => {
  let reviewsHTML = "";
  reviewsArr.forEach((review) => {
    const reviewEach = createAReview(review);

    reviewsHTML = reviewsHTML + reviewEach;
  });

  inputsReview$.innerHTML = reviewsHTML;
};

// ----
const filterSelector = (selectOption) => {
  if (selectOption === "All reviews") {
    renderReview(reviews);
    return;
  }

  const filteredReviews = reviews.filter((review) => {
    return review.select === selectOption;
  });

  console.log("filteredReviews: ", filteredReviews);

  renderReview(filteredReviews);
};

writeButton$.addEventListener("click", addNewReview);

//   const userName = prompt("What is your name?");
//   const userProfession = prompt("What is you designation?");
