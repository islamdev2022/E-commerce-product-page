const galleryImages = document.querySelectorAll('.gallery-image');
const modalOverlay = document.querySelector('.modal-overlay');
const enlargedImage = document.querySelector('.enlarged-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showEnlargedView();
  });
});

closeBtn.addEventListener('click', hideEnlargedView);
prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);

function showEnlargedView() {
  modalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  displayImage();
}

function hideEnlargedView() {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = '';
  document.body.style.filter = '';
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  displayImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  displayImage();
}

function displayImage() {
  const imageUrl = galleryImages[currentIndex].dataset.largeSrc;
  enlargedImage.src = imageUrl;
}



// FOR THE NUMBER PLUS OR MINUS
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const numberInput = document.querySelector('.num input');

plusButton.addEventListener('click', () => {
  incrementNumber();
});

minusButton.addEventListener('click', () => {
  decrementNumber();
});

function incrementNumber() {
  const currentValue = parseInt(numberInput.value);
  const newValue = isNaN(currentValue) ? 1 : currentValue + 1;
  numberInput.value = newValue;
}

function decrementNumber() {
  const currentValue = parseInt(numberInput.value);
  const newValue = isNaN(currentValue) || currentValue === 0 ? 0 : currentValue - 1;
  numberInput.value = newValue;
}

// FOR THE CART CLICKING
const cart = document.getElementById('cart');
const cartCon = document.getElementsByClassName('the-cart')[0];
const check= document.getElementsByClassName('check')[0];
cart.addEventListener('click', () => {
  cartCon.style.display = "block";
});
check.addEventListener('click',()=>{
    cartCon.style.display = "none";
})

// TO ADD TO THE CART

const addbtn=document.getElementById('add-cart')
const numitem=document.getElementById('numitem')
const numitem1=document.getElementById('quantity')
const price=document.getElementById('price')
const del= document.getElementById('delete')
const inside= document.getElementsByClassName('inside')[0];
const empty =document.getElementById('empty');
const body=document.getElementById('av');

addbtn.addEventListener('click',()=>{
    if (numberInput.value>0){
    empty.style.display="none"
    inside.style.display="block"
    numitem.innerText=numberInput.value;
    numitem.style.display="block"
    numitem1.innerText=numberInput.value;
    const num = parseInt(numberInput.value)
    pr=125*num;
    price.innerText=pr ;  
} 
});

body.addEventListener('click',()=>{
    cartCon.style.display = "none";
})

del.addEventListener('click',()=>{
    numitem.style.display="none"
    empty.style.display='block'
    inside.style.display='none'

})
