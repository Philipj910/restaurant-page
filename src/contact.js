function displayContact() {
    const contactBtn = document.querySelector("#contactBtn");
    contactBtn.addEventListener("click", function() {
        const content = document.querySelector("#content")
        const menuContainer = document.querySelector(".description");
        menuContainer.remove();

        const contactContainer = document.createElement("div");
        contactContainer.classList = "description";

        const contactBox = document.createElement("div");
        contactBox.classList = "contactBox";
        contactContainer.appendChild(contactBox)

        const contactHeader = document.createElement("h3");
        contactHeader.classList = "contactHeader";
        contactHeader.textContent = "Contact";
        const contactsPhone = document.createElement("p");
        contactsPhone.classList = "contacts";
        contactsPhone.textContent = "Phone: (919) 515-3963";
        const contactAddress = document .createElement("p");
        contactAddress.classList = "contacts";
        contactAddress.textContent = "Address: 2520 Sullivan Dr, Raleigh, NC 27695";
        const fistBumpLady = document.createElement("p");
        fistBumpLady.id = "fistBumpLady";
        fistBumpLady.textContent = "Ask for the fist bump lady."

        contactContainer.appendChild(contactBox);
        contactBox.appendChild(contactHeader);
        contactBox.appendChild(contactsPhone);
        contactBox.appendChild(contactAddress);
        content.appendChild(contactContainer);
        contactBox.appendChild(fistBumpLady)

    })
}

export default displayContact