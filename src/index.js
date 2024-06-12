// index.js
/* Code Challenge with basic functionality completed on 6/11/2024. Fails npm test
but functionality works as mentioned in the assignment description. Will add advanced
deliverables tomorrow. */

//! Global variables
const ramenMenu = document.querySelector("#ramen-menu")
const form = document.querySelector("#new-ramen")


/* Function to render ramen when passed a ramen object. Encapsulated in a function so 
that it can be re-used for form submission as well. */
const renderRamen = (ramenObj) => {
    const img = document.createElement("img")
    img.src = ramenObj.image
    img.alt = `${ramenObj.name} from ${ramenObj.restaurant}`

    // Add event listener for click event so you can dynamically select ramen
    img.addEventListener("click", (e) => handleClick(ramenObj))

    //Append to ramen menu 
    ramenMenu.appendChild(img)
}

const parseRamenData = (ramenArray) => {
  ramenArray.forEach(renderRamen)
}

const getRamenData = (url) => {
  return fetch(url)
  .then(resp => resp.json())
  .then(parseRamenData)
  .catch(err => console.log(err))
}

const handleSubmit = (e) => {
  e.preventDefault();

  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.valueAsNumber,
    comment: e.target['new-comment'].value
  
  }

  renderRamen(newRamen)
}

// Callbacks
const handleClick = (ramen) => {

  // Set image and alt to selected ramen
  const imageTarget = document.querySelector(".detail-image")
  imageTarget.src = ramen.image
  imageTarget.alt = `${ramen.name} from ${ramen.restaurant}`

  // Set name to selected ramen 
  const nameTarget = document.querySelector(".name")
  nameTarget.textContent = ramen.name

  // Set restaurant name to selected ramen properties
  const restaurantTarget = document.querySelector(".restaurant")
  restaurantTarget.textContent = ramen.restaurant

  // Set rating to selected ramen properties
  const ratingTarget = document.querySelector("#rating-display")
  ratingTarget.textContent = ramen.rating

  // Set comment to selected ramen properties
  const commentTarget = document.querySelector("#comment-display")
  commentTarget.textContent = ramen.comment

};

const addSubmitListener = () => {
  // Add code
  form.addEventListener("submit", handleSubmit)

}

const displayRamens = () => {
  getRamenData("http://localhost:3000/ramens")
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
