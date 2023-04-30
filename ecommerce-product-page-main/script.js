const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const featureImage = document.getElementById("feature-image");
const imagesList = document.querySelectorAll(".prod-img");
const otherImages = document.querySelectorAll(".product");
const prevImage = document.querySelector(".left-btn");
const nextImage = document.querySelector(".right-btn");
const itemCount = document.getElementById("item-number");
const deleteItem = document.querySelector(".delete");
const cartContainer = document.querySelector(".item-container");
const emptyCart = document.querySelector(".no-item");
const cartBtn = document.querySelector(".checkout");
const itmName = document.querySelector(".name");
const itmPrice = document.querySelector(".i-price");
const itmCount = document.querySelector(".total-item");
const itmTotalPrice = document.querySelector(".total-price");
const showCart = document.querySelector(".cart");
const isItem = document.querySelector(".is-item");
const fullCart = document.querySelector(".cart-item");
const menuBar = document.querySelector('.menubar');
const menuBarClose = document.querySelector('.menu-close');
const navBar = document.querySelector('.navbar');
const imageScreen = document.querySelector(".img-screen");
const fullImageContainer = document.querySelector(".image");
const displayImgCopy = fullImageContainer.cloneNode(true);
const closeDisplayImg = document.querySelector(".close-img");
imageScreen.children[1].children[1].appendChild(displayImgCopy);
console.log(imageScreen.children)

const images = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];
let currentIndex = 0;
prevImage.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  featureImage.src = images[currentIndex];
  updateActiveClass();
});

nextImage.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  featureImage.src = images[currentIndex];
  updateActiveClass();
});
// Update the active class on the other images
function updateActiveClass() {
  otherImages.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

minus.addEventListener("click", () => {
  let count = +itemCount.innerHTML;
  if (count > 0) itemCount.innerHTML = --count;
});
plus.addEventListener("click", () => {
  let count = +itemCount.innerHTML;
  itemCount.innerHTML = ++count;
});

console.log(images);
imagesList.forEach((image) => {
  image.addEventListener("click", () => {
    removeActiveimage();
    if (!image.classList.contains("active")) {
      image.parentNode.classList.add("active");
      featureImage.src = image.src;
      featureImage.style.imageRendering = "pixelated";
    }
  });
});

function removeActiveimage() {
  imagesList.forEach((image) => image.parentNode.classList.remove("active"));
}

// Logic for cart

showCart.addEventListener("click", ()=> {
    fullCart.classList.toggle("hide");
})

let cart = [];
if (cart.length === 0) {
  emptyCart.classList.remove("hide");
}

function addItemToCart() {
  let itemCnt = +itemCount.innerHTML;
  if(itemCnt > 0) {
    const itemTitle = document.querySelector(".product-title h1");
    const itemPrice = document.querySelector(".price").innerHTML;
    cartContainer.classList.remove("hide");
    cartBtn.classList.remove("hide");
    isItem.classList.remove("hide");
    emptyCart.classList.add("hide");
    itmName.innerHTML = itemTitle.innerHTML;
    itmPrice.innerHTML = itemPrice;
    itmCount.innerHTML = `&nbsp;x ${itemCnt}`;
    itmTotalPrice.innerHTML = `$${+itemPrice.slice(1) * itemCnt}`;
    isItem.innerHTML = itemCnt;

    let item = {
      id: itemTitle.innerHTML,
      name: itemTitle.innerHTML,
      count: itemCnt,
      price: +itemPrice.slice(1) * +itemCount.innerHTML,
    };
    cart.push(item);
  }
  else{
    alert("Item count is 0");
  }
}

deleteItem.addEventListener("click", (e) => {
  let currentItemName =
    deleteItem.parentElement.children[1].children[0].children[0].innerHTML;
  cart.forEach((item, index) => {
    if (item.name === currentItemName) {
      cart.splice(index, 1);
    }
  });
  if (cart.length === 0) {
    cartContainer.classList.add("hide");
    cartBtn.classList.add("hide");
    emptyCart.classList.remove("hide");
    isItem.classList.add("hide");
  }
});

// backdrop functionality
document.addEventListener('click', function(event) {
    if (!showCart.contains(event.target) && !fullCart.contains(event.target)) {
      fullCart.classList.add("hide");
      console.log("clicked ouside cart")
    }
  });

// Menu Bar

menuBar.addEventListener("click", () => {
    menuBar.classList.add("hide");
    menuBarClose.classList.remove("hide");
    navBar.style.display = "block";
})

menuBarClose.addEventListener("click", ()=> {
    menuBar.classList.remove("hide");
    menuBarClose.classList.add("hide");
    navBar.style.display = "none";
})


// display image
document.querySelector(".main .display-image").addEventListener("click", () => {
    imageScreen.classList.remove("hide");
})

closeDisplayImg.addEventListener("click", () => {
    imageScreen.classList.add("hide");
})