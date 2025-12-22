const allReviewButton$ = document.getElementById("allReviewsButton");
const amazonButtonButton$ = document.getElementById("amazonButton");
const googleButton$ = document.getElementById("googleButton");
const upworkButton$ = document.getElementById("upworkButton");
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
  if (input === "") {
    alert("Please write at least 100 words!");
  }
  const review = {
    text: input,
    select: selection,
  };
  reviews.push(review);
  console.log(review);
  cleanReviewInput();
  renderReview();
  filterSelector(review);
};

// ---
const cleanReviewInput = () => {
  inputReview$.value = "";
};

// ---
const createAReview = (review) => {
  return `<div class="input-element">
      <p id="myReview">${review.text}</p>
    </div>`;
};

// ---
const renderReview = () => {
  let reviewsHTML = "";
  reviews.forEach((review) => {
    const reviewEach = createAReview(review);

    reviewsHTML = reviewsHTML + reviewEach;
  });

  if (reviewsHTML !== "") {
    inputsReview$.innerHTML = reviewsHTML;
  } else if (reviewsHTML === "") {
    alert("you can't submit");
  }
};
// ---
// if selected = upwork
const filterSelector = (selectOption) => {
  if (selectOption === "All reviews") {
    const optionAll = reviews.filter((review) => {
      return review.select;
    });
    renderReview(optionAll);
    console.log(optionAll);
  }
  if (selectOption === "Upwork") {
    const optionUpwork = reviews.filter((review) => {
      return review.select;
    });
    renderReview(optionUpwork);
  }
  if (selectOption === "Amazon") {
    const optionAmazon = reviews.filter((review) => {
      return review.select;
    });
    renderReview(optionAmazon);
  }

  if (selectOption === "Google") {
    const optionGoogle = reviews.filter((review) => {
      return review.select;
    });
    renderReview(optionGoogle);
  }
};

writeButton$.addEventListener("click", addNewReview);
//   const userName = prompt("What is your name?");
//   const userProfession = prompt("What is you designation?");
