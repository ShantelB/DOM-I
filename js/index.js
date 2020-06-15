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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelectorAll("header nav a");
for (i = 0; i < navBar.length; i++){
  navBar[i].textContent = siteContent.nav [`nav-item-${i + 1}`];
  navBar[i].style.color = "green";
}

document.querySelector("nav") // Selects the nav
.appendChild(                   // Add element to nav
  document.createElement("a")   // creating the a inside the nav
    .appendChild(             // adding node to a
      document.createTextNode("Bye") // text node being addedinto the a tag
    )
  )

  document.querySelector("nav") // Selects the nav
  .prepend(                   // Add element to nav
    document.createElement("a")   // creating the a inside the nav
      .appendChild(             // adding node to a
        document.createTextNode("Hi") // text node being addedinto the a tag
      )
    )  

let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"]);
 
let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
 
let heading = document.querySelector(".cta h1");
heading.textContent = siteContent.cta.h1;
heading.style.flexDirection = "column";
heading.style.justifyContent = "center";
heading.style.textAlign = "center";
heading.innerHTML = siteContent.cta.h1.replace(/ /g, '<br>');


let btn = document.querySelector(".cta button");
btn.textContent = siteContent.cta.button;

let title = document.querySelectorAll(".main-content h4");
title[0].textContent = siteContent["main-content"]["features-h4"]
// title[0].textContent = 2+2;

title[1].textContent = siteContent["main-content"]["about-h4"]

title[2].textContent = siteContent["main-content"]["services-h4"]

title[3].textContent = siteContent["main-content"]["product-h4"]

title[4].textContent = siteContent["main-content"]["vision-h4"]

let paragraph = document.querySelectorAll(".main-content p");
paragraph[0].textContent = siteContent["main-content"]["features-content"]

paragraph[1].textContent = siteContent["main-content"]["about-content"]

paragraph[2].textContent = siteContent["main-content"]["services-content"]

paragraph[3].textContent = siteContent["main-content"]["product-content"]

paragraph[4].textContent = siteContent["main-content"]["vision-content"]

document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"]
// contact.textContent = siteContent.contact["contact-h4"]

document.querySelectorAll(".contact p")[0].textContent = siteContent.contact.address

document.querySelectorAll(".contact p")[1].textContent = siteContent.contact.phone

document.querySelectorAll(".contact p")[2].textContent = siteContent.contact.email

document.querySelector("footer p").textContent = siteContent.footer.copyright
console.log(siteContent)