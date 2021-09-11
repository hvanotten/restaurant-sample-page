const createMenu = (() => {

    const contentContainer = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.innerHTML = `
    <div class="hero">
    <h1>Menu</h1>
    </div>
    <div class="menu-container">

    <div class="menu-item">
        <img src="./images/bak_n_loaded_tot.jpg" alt="loaded tots" />
        <div class="item-content">
            <h4>BAK'D N LOADED BEER CHEESE TOTS: <span>$7.49</span></h4>
            <p>
                TOTS!, Sour Cream, Cart made Beer Cheese, Bacon, Green Onion
            </p>
        </div>
    </div>

    <div class="menu-item">
        <img src="./images/buffalo_tots.png" alt="buffalo tots" />
        <div class="item-content">
            <h4>BUFFALO STYLE: <span>$8.49</span></h4>
            <p>TOTS!, Franks hot sauce, Ranch drizzle, Blue cheese crumbles, Chives</p>
        </div>
    </div>

    <div class="menu-item">
    <img src="./images/truffle_tot.jpg" alt="truffle tots" />
        <div class="item-content">
        <h4>TRUFFLE TOTS! SHUFFLE: <span>$6.49</span></h4>
        <p>TOTS!, Truffle Zest, Fresh Shaved Parmesan, Parsley, White Truffle Oil</p>
        </div>
    </div>
    <div class="menu-item">
    <img src="./images/avo_tot.jpg" alt="Cobb salad Style Tots" />
    <div class="item-content">
      <h4>COBB SALAD STYLE: <span>$7.99</span></h4>
      <p>
      TOTS! topped with avocado, bacon, blue cheese crumbles, fresh diced tomatoes, fresh lettuce and cart made ranch dressing
      </p>
    </div>
  </div>

    `;
    contentContainer.appendChild(menu);
    return menu;
})

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
