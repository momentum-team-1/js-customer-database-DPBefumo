// will need to gather the following info from customers:
// registered date

//registered (ID = "customer-since") from js (registered)

function renderPageContent() {
    let targetElement = document.querySelector(".customer")

    for (let customer of customers) {
        let listItemElement = document.createElement("div")
        listItemElement.innerHTML = createImageElement(customer.picture.large)
        listItemElement.appendChild(createNameElement(customer.name.first + " " + customer.name.last))
        listItemElement.appendChild(createEmailElement(customer.email))
        listItemElement.appendChild(createStreetElement(customer.location.street))
        listItemElement.appendChild(createCityStateZipElement(customer.location.city + " " + customer.location.state + " " + customer.location.postcode))
        listItemElement.appendChild(createDOB("DOB: " + customer.dob))
        listItemElement.appendChild(createRegisteredElement("Customer since: " + customer.registered))
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

function createEmailElement (email) {
    let emailEl = document.createElement("p")
    emailEl.innerText = `${email}`
    return emailEl
}

function createStreetElement (street) {
    let streetEl = document.createElement("p")
    streetEl.innerText = `${street}`
    return streetEl
}
function createCityStateZipElement (csz) {
    let cszEl = document.createElement("p")
    cszEl.innerText = `${csz}`
    return cszEl
}

function nameToAbbr (stateName) {
  const idx = usStates.findIndex(function (state) {
    return state.name === stateName.toUpperCase()
  })

  if (idx === -1) {
    return null
  }

  return usStates[idx].abbreviation
}//how does this work into my code?

function createDOB (dob) {
    let dobEl = document.createElement("p")
    dobEl.innerText = `${dob}`
    return dobEl
}

function createRegisteredElement (register) {
    let registerEl = document.createElement("p")
    registerEl.innerText = `${register}`
    return registerEl
}

renderPageContent()