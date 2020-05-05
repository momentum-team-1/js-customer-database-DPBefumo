// will need to gather the following info from customers:
// name
// address
// phone number or email
// birthdate
// registered date

//name (ID = "customer-name") from js (name.first, name.last)
//address (ID = "customer-address") from js (location.street, lovation.city, location.state, location.postcode)
//phone number or email (ID = "customer-email") from js (phone or email)
//birthdate (ID = "customer-DOB") from js (dob)
//registered (ID = "customer-since") from js (registered)

function renderPageContent() {
    let targetElement = document.querySelector(".customer")

    for (let customer of customers) {
        let listItemElement = document.createElement("div")
        listItemElement.innerHTML = createImageElement(customer.picture.large)
        listItemElement.appendChild(createNameElement(customer.name.first + " " + customer.name.last))
        targetElement.appendChild(listItemElement)
    }
}

function createImageElement (picture) {
    return `<img src=${picture}>`
}

function createNameElement (name) {
    let nameEl = document.createElement("h4")
    nameEl.innerText = `${name}`
    return nameEl
}   

renderPageContent()