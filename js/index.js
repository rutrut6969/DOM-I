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
    "main_content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav
const nav = document.querySelectorAll('nav a');
for (let i = 0; i < nav.length; i++) {
    nav[i].textContent = siteContent['nav']['nav-item-' + (i + 1)];
};

//Header
const ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent.cta['h1'];
ctah1.style.fontFamily = "'Bangers', cursive";

//Header Img
const hImg = document.querySelector('#cta-img');
hImg.setAttribute('src', siteContent['cta']['img-src'])

// Header Btn
const btn = document.querySelector('.cta-text button');
btn.textContent = siteContent.cta['button'];

// Main Content
// Top-Main Content

// Features
const featureh4 = document.querySelector('.top-content .text-content h4');
featureh4.textContent = siteContent.main_content['features-h4'];

// Features Content
const featCon = document.querySelector('.top-content .text-content p');
featCon.textContent = siteContent.main_content['features-content'];

// About
const abH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
abH4.textContent = siteContent.main_content['about-h4'];

// About Content
const abCon = document.querySelector('.top-content .text-content:nth-of-type(2) p');
abCon.textContent = siteContent.main_content['about-content'];


// Middle Image
const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main_content']['middle-img-src']);

// Bottom Content

// Services
const servicesH4 = document.querySelector('.bottom-content .text-content h4');
servicesH4.textContent = siteContent.main_content['services-h4'];
const servicesCon = document.querySelector('.bottom-content .text-content p');
servicesCon.textContent = siteContent.main_content['services-content'];

// Product
const productH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productH4.textContent = siteContent.main_content['product-h4'];
const productCon = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productCon.textContent = siteContent.main_content['product-content'];


// Vision
const visionH4 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionH4.textContent = siteContent.main_content['vision-h4'];
const visionCon = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionCon.textContent = siteContent.main_content['vision-content'];

// Contact
const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent.contact['contact-h4'];

// Contact Content
const contactp1 = document.querySelector('.contact p');
contactp1.textContent = siteContent.contact['address'];

const contactp2 = document.querySelector('.contact p:nth-of-type(2)');
contactp2.textContent = siteContent.contact['phone'];

const contactp3 = document.querySelector('.contact p:nth-of-type(3)');
contactp3.textContent = siteContent.contact['email'];


const copy = document.querySelector('footer p');
copy.textContent = siteContent.footer['copyright'];