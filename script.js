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

// ---

// const starRating = (rating) => {
//   for (let i = 1; i < 6; i++) {
//     const star = stars$[i];
//     if (i <= rating) {
//         starOne.innerHTML=
//     }
//   }
// };

const updateStars = (rating) => {
  // Loop from 1 to 5 to target each of your star IDs
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star-${i}`);

    if (i <= rating) {
      star.innerHTML = "★"; // Filled star
      star.classList.add("active"); // Add class for CSS coloring
    } else {
      star.innerHTML = "☆"; // Empty star
      star.classList.remove("active");
    }
  }

  // Update the numerical display next to the stars
  const ratingNumber = document.querySelector(".rating-number");
  if (ratingNumber) {
    ratingNumber.innerText = `${rating}.0 / 5.0`;
  }
};

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
   <p id="agencyButton">${review.select} client's review</p>
      <p id="myReview">"${review.text}"</p>
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
  let filteredReviews;
  if (selectOption === "All reviews") {
    filteredReviews = reviews;
    renderReview(filteredReviews);
    return;
  } else {
    filteredReviews = reviews.filter((review) => {
      review.select === selectOption;
      return;
    });
    renderReview(filteredReviews);
  }
};
writeButton$.addEventListener("click", addNewReview);

//   const userName = prompt("What is your name?");
//   const userProfession = prompt("What is you designation?");
//   if (selectOption === "Upwork") {
//     const selectUpwork = reviews.filter((review) => {
//       review.select === selectUpwork;
//       return;
//     });
//     renderReview(selectUpwork);
//   }

//   if (selectOption === "Amazon") {
//     const selectAmazon = reviews.filter((review) => {
//       review.select === selectAmazon;
//       return;
//     });
//     renderReview(selectAmazon);
//   }

//   if (selectOption === "Google") {
//     const selectGoogle = reviews.filter((review) => {
//       review.select === selectOption;
//       return;
//     });
//     renderReview(selectGoogle);
//   }
