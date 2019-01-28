const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// GENERATE ARRAY FOR NAV TITLES
const navLinkNames = Object
  .entries(siteContent.nav)
  .filter(e => e[0].includes('nav-item'))
  .map(e => e[1]);

// GENERATE ARRAY FOR CONTENT TITLES
const contentTitleArray = Object
  .entries(siteContent['main-content'])
  .filter(e => e[0].includes('h4'))
  .map(e => e[1]);

// GENERATE ARRAY FOR CONTENT TEXT
const contentTextArray = Object
  .entries(siteContent['main-content'])
  .filter(e => e[0].includes('content'))
  .map(e => e[1]);

// POPULATE A TAGS
function fillNav() {
  let navLinks = document.querySelectorAll('nav a');
  let i = 0;
  navLinks.forEach(element => {
    element.textContent = navLinkNames[i];
    i++;
  });
}
fillNav();

// CTA CONTENT
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;
document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// FILL CONTENT CARDS
function fillContentCards() {
  // TITLES
  let contentTitles = document.querySelectorAll('.text-content h4');
  let i=0;
  contentTitles.forEach(element => {
    element.textContent = contentTitleArray[i];
    i++;
  });
  //TEXT
  let contentText = document.querySelectorAll('.text-content p');
  i=0;
  console.log(contentText);
  contentText.forEach(element => {
    element.textContent = contentTextArray[i];
    i++;
  });
}
fillContentCards();  

// MIDDLE IMAGE
let middleImg = document
  .querySelector('.main-content img.middle-img')
  .setAttribute('src', siteContent["main-content"]["middle-img-src"]);
