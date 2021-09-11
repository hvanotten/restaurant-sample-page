

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const truckImg = document.createElement("img");
    truckImg.src = "./images/tots_truck.jpeg";
    truckImg.alt = "Bomb Tot Food Cart";


    home.appendChild(createParagraph("BOMB TOTS! Often craving crunchy munchies while enjoying adult beverages, and with no suitable place to turn, an idea was born and magic was made !! Hand Scooped, Homemade tater TOTS! Try them with toppings, seasoning or sauce... YOU be the Boss!"));
    home.appendChild(createParagraph("This food truck is currently located at the MidTown Yacht Club"));
    home.appendChild(truckImg);
    home.appendChild(createParagraph("Order online or Visit Us!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;