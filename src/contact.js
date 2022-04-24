function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact');
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = 'Phone: 📞  541 788 5682'

    const address = document.createElement('p');
    address.textContent = 'Current Location: 🏠 1661 NE 4th St, Bend, OR 97701';

    const hours = document.createElement('p');
    hours.textContent = 'HOURS: Delivery: 12:00pm - 9:00pm Pickup: 12:00pm - 7:00pm';

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = './images/location.png';
    restaurantLocation.alt = "Bomb Tot's Truck location";

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
    contact.appendChild(hours)

    return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;