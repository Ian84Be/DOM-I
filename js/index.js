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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);
document.getElementById("logo-img").src = siteContent["nav"]["img-src"];


// ARRAYZER
  function arrayzer(content, tag) {
    return Object
    .entries(siteContent[content])
    .filter(e => e[0].includes(tag))
    .map(e => e[1]);
  }

// NAV
function fillNav() {
  const navLinkNames = arrayzer('nav', 'nav-item');
  let navLinks = document.querySelectorAll('nav a');
  let i = 0;
  navLinks.forEach(e => {
    e.style = 'color:green;'
    e.textContent = navLinkNames[i];
    i++;
  });
}
fillNav();

const prependix = document.createElement('a');
prependix.href = '#';
prependix.style = 'color:green;'
prependix.textContent = "Prependix"

const appendix = document.createElement('a');
appendix.href = '#';
appendix.style = 'color:green;'
appendix.textContent = "Appendix"

let navNode = document.querySelector('header nav');
navNode.prepend(prependix);
navNode.appendChild(appendix);

// CTA CONTENT
// document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text h1').innerHTML = "DOM<BR>IS<BR>AWESOME";
document.querySelector('.cta-text button').textContent = siteContent.cta.button;
document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

//MAIN CONTENT
function fillContentCards() {
  let i=0;
  const headerText = arrayzer('main-content', 'h4');
  let headers = document.querySelectorAll('.text-content h4');
  headers.forEach(e => {
    e.textContent = headerText[i];
    i++;
  });
  
  i=0;
  const contentText = arrayzer('main-content', 'content');
  let contentP = document.querySelectorAll('.text-content p');
  contentP.forEach(e => {
    e.textContent = contentText[i];
    i++;
  });
}
fillContentCards();  

// MIDDLE IMAGE
let middleImg = document
  .querySelector('.main-content img.middle-img')
  .setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// POPULATE CONTACT SECTION
function fillContact() {
  const contactText = arrayzer('contact', '');
  let contactTags = document.querySelector('.contact').getElementsByTagName('*');
  for (let i=0;i<contactText.length;i++) {
    contactTags[i].textContent = contactText[i];
  }
}
fillContact();

// COPYRIGHT
document.querySelector('footer p').textContent = siteContent.footer.copyright;