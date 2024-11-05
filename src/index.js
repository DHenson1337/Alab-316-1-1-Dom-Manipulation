// Select and cache the <main> element in a variable named mainEl.
const mainEL = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEL.style.backgroundColor = "var(--main-bg)"

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement("h1")
h1.innerText = "DOM Manupulation"
mainEL.appendChild(h1)

// Add a class of flex-ctr to mainEl.
mainEL.classList.add("flex-ctr")

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu")

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%"

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//Iterate over the entire menuLinks array and for each "link" objec
for (zelda of menuLinks) {
    const a = document.createElement("a") //Create an <a> element.
    a.setAttribute("href", zelda.href) //On the new element, add an href attribute with its value set to the href property of the "link" object.
    a.textContent = zelda.text //Set the new element's content to the value of the text property of the "link" object.
    topMenuEl.append(a) //Append the new element to the topMenuEl element.
}

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top ="0";