const path = window.location.pathname;
const page = path.split("/").pop();

const products = [
  {
    id: 1,
    type: "sneaker",
    brand: "nike",
    imgSrc: "../assets/imgs/products/AFwhite.jpg",
    altText: "Air Force 1 Sneakers",
    name: "Air Force 1",
    price: "$100",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 3,
    topPick: false,
  },
  {
    id: 2,
    type: "sneaker",
    brand: "jordans",
    imgSrc: "../assets/imgs/products/FireRed5.jpg",
    altText: "Jordan's 5 Fire Red Sneakers",
    name: "Jordan's 5 Fire Red",
    price: "$250",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 5,
    topPick: true,
  },
  {
    id: 3,
    type: "sneaker",
    brand: "nike",
    imgSrc: "../assets/imgs/products/Panda.jpg",
    altText: "Panda Dunks Sneakers",
    name: "Panda Dunks",
    price: "$110",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 3,
    topPick: false,
  },
  {
    id: 4,
    type: "apparel",
    brand: "fog",
    imgSrc: "../assets/imgs/products/FOGBlack.jpg",
    altText: "FOG Black Hoodie",
    name: "FOG Black",
    price: "$180",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 5,
    topPick: true,
  },
  {
    id: 5,
    type: "apparel",
    brand: "fog",
    imgSrc: "../assets/imgs/products/FOGBeige.jpg",
    altText: "FOG Beige Hoodie",
    name: "FOG Beige",
    price: "$180",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 4,
    topPick: false,
  },
  {
    id: 6,
    type: "apparel",
    brand: "nike",
    imgSrc: "../assets/imgs/products/TechFleeceBlack.jpg",
    altText: "Nike Tech Fleece",
    name: "Nike Tech Fleece",
    price: "$110",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 5,
    topPick: true,
  },
  {
    id: 7,
    type: "sneaker",
    brand: "jordans",
    imgSrc: "../assets/imgs/products/Uncs4.jpg",
    altText: "Jordan's 4 UNC sneaker",
    name: "Jordan's 4 UNC",
    price: "$400",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 5,
    topPick: true,
  },
  {
    id: 8,
    type: "sneaker",
    brand: "adidas",
    imgSrc: "../assets/imgs/products/WaveRunner.jpg",
    altText: "Yeezy Wave Runner sneaker",
    name: "Yeezy Wave Runner",
    price: "$350",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 4,
    topPick: false,
  },
  {
    id: 9,
    type: "apparel",
    imgSrc: "../assets/imgs/products/TechFleeceGray.png",
    altText: "Nike Tech Fleece",
    name: "Nike Tech Fleece",
    price: "$110",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 4,
    topPick: false,
  },
  {
    id: 10,
    type: "sneaker",
    brand: "jordans",
    imgSrc: "../assets/imgs/products/JordansChicago.png",
    altText: "Jordans 1 Chicago",
    name: "Jordans 1 Chicago",
    price: "$3000",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 5,
    topPick: false,
  },
  {
    id: 11,
    type: "sneaker",
    brand: "jordans",
    imgSrc: "../assets/imgs/products/jbalvinJordans.png",
    altText: "Jordans 1 J Balvin",
    name: "Jordans 1 J Balvin",
    price: "$380",
    availableSizes: ["41 EU", "42 EU", "43 EU"],
    rating: 2,
    topPick: false,
  },
  {
    id: 12,
    type: "apparel",
    brand: "nike",
    imgSrc: "../assets/imgs/products/NikeRedSweater.png",
    altText: "Nike Red Sweater",
    name: "Nike Red Sweater",
    price: "$120",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 3,
    topPick: false,
  },
  {
    id: 13,
    type: "apparel",
    brand: "nike",
    imgSrc: "../assets/imgs/products/Nocta.jpg",
    altText: "Nike Drake X Nocta",
    name: "Nike Drake X Nocta",
    price: "$420",
    availableSizes: ["Small", "Medium", "Large"],
    rating: 4,
    topPick: false,
  },
  {
    id: 14,
    type: "electronics",
    brand: "sony",
    imgSrc: "../assets/imgs/products/ps5.jpg",
    altText: "Playstaion 5",
    name: "Playstaion 5",
    price: "$500",
    availableSizes: ["-"],
    rating: 5,
    topPick: false,
  },
  {
    id: 15,
    type: "electronics",
    brand: "apple",
    imgSrc: "../assets/imgs/products/airPodsProMax.jpg",
    altText: "Air Pods Pro Max",
    name: "Air Pods Pro Max",
    price: "$450",
    availableSizes: ["-"],
    rating: 4,
    topPick: false,
  },
  {
    id: 16,
    type: "electronics",
    brand: "apple",
    imgSrc: "../assets/imgs/products/airPodsPro.jpg",
    altText: "Air Pods Pro",
    name: "Air Pods Pro",
    price: "$200",
    availableSizes: ["-"],
    rating: 5,
    topPick: false,
  },
  {
    id: 17,
    type: "electronics",
    brand: "sony",
    imgSrc: "../assets/imgs/products/ps5Controller.jpg",
    altText: "Playstaion 5 Controller",
    name: "Playstaion 5 Controller",
    price: "$100",
    availableSizes: ["-"],
    rating: 4,
    topPick: false,
  },
  {
    id: 18,
    type: "electronics",
    brand: "apple",
    imgSrc: "../assets/imgs/products/airPods.jpg",
    altText: "Air Pods",
    name: "Air Pods",
    price: "$100",
    availableSizes: ["-"],
    rating: 4,
    topPick: false,
  },
  {
    id: 19,
    type: "electronics",
    brand: "sony",
    imgSrc: "../assets/imgs/products/ps4.jpg",
    altText: "Playstaion 4",
    name: "Playstaion 4",
    price: "$250",
    availableSizes: ["-"],
    rating: 5,
    topPick: false,
  },
  {
    id: 20,
    type: "electronics",
    brand: "razer",
    imgSrc: "../assets/imgs/products/razerViper.jpg",
    altText: "Razer Death Adder",
    name: "Razer Death Adder",
    price: "$100",
    availableSizes: ["-"],
    rating: 3,
    topPick: false,
  },
  {
    id: 21,
    type: "electronics",
    brand: "razer",
    imgSrc: "../assets/imgs/products/razerDeathAdder.jpg",
    altText: "Razer Viper",
    name: "Razer Viper",
    price: "$120",
    availableSizes: ["-"],
    rating: 4,
    topPick: false,
  },
  {
    id: 22,
    type: "electronics",
    brand: "razer",
    imgSrc: "../assets/imgs/products/razerKraken.jpg",
    altText: "Razer Kraken",
    name: "Razer Kraken",
    price: "$150",
    availableSizes: ["-"],
    rating: 4,
    topPick: false,
  },
];

const productListDiv = document.getElementById("productList");
const allProductsListDiv = document.getElementById("allProductsList");
const sneakersListDiv = document.getElementById("sneakersList");
const apparelListDiv = document.getElementById("apparelList");
const electronicsListDiv = document.getElementById("electronicsList");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const addProduct = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product_card");
  productCard.id = product.id;

  const productImage = document.createElement("img");
  productImage.src = product.imgSrc;
  productImage.alt = product.altText;

  const cardContent = document.createElement("div");
  cardContent.classList.add("content");

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("h6");
  productPrice.classList.add("price");
  productPrice.textContent = product.price;

  const rating = document.createElement("ul");
  rating.classList.add("rating");

  let ratingIndex = product.rating;
  for (let i = 0; i < 5; i++) {
    if (ratingIndex > 0) {
      const star = document.createElement("li");
      star.innerHTML = '<i class="fa-solid fa-star"></i>';
      rating.appendChild(star);
    } else {
      const star = document.createElement("li");
      star.innerHTML = '<i class="fa-regular fa-star"></i>';
      rating.appendChild(star);
    }

    ratingIndex--;
  }

  const sizeSelect = document.createElement("select");
  sizeSelect.classList.add("sizeSelect");
  const sizeOptions = product.availableSizes;

  sizeOptions.forEach((size) => {
    const option = document.createElement("option");
    option.value = size.toLowerCase();
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  const addButton = document.createElement("button");
  addButton.textContent = "Add to Cart";

  addButton.addEventListener("click", (e) => {
    const selectedSize = sizeSelect.value;

    const cartItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (cartItemIndex > -1) {
      cart[cartItemIndex].quantity++;

      let currentPrice = parseFloat(cart[cartItemIndex].price.replace("$", ""));
      let productPrice = parseFloat(product.price.replace("$", ""));
      let finalPrice = currentPrice + productPrice;

      cart[cartItemIndex].price = "$" + finalPrice.toFixed(2);
    } else {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        brand: product.brand,
        size: selectedSize,
        quantity: 1,
      };
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    e.target.innerHTML = '<i class="fas fa-check"></i>';
    e.target.disabled = true;

    setTimeout(() => {
      e.target.innerHTML = "Add to Cart";
      e.target.disabled = false;
    }, 1000);
  });

  cardContent.appendChild(productName);
  cardContent.appendChild(productPrice);
  cardContent.appendChild(rating);
  if (product.availableSizes.length > 1) {
    cardContent.appendChild(sizeSelect);
  }
  cardContent.appendChild(addButton);

  productCard.appendChild(productImage);
  productCard.appendChild(cardContent);

  return productCard;
};

products.forEach((product) => {
  const productCard = addProduct(product);

  if (page === "all.html") {
    allProductsListDiv.appendChild(productCard);
  } else if (page === "index.html" && product.topPick) {
    productListDiv.appendChild(productCard);
  } else if (page === "sneakers.html" && product.type === "sneaker") {
    sneakersListDiv.appendChild(productCard);
  } else if (page === "apparel.html" && product.type === "apparel") {
    apparelListDiv.appendChild(productCard);
  } else if (page === "electronics.html" && product.type === "electronics") {
    electronicsListDiv.appendChild(productCard);
  }
});

if (
  page === "all.html" ||
  page === "sneakers.html" ||
  page === "apparel.html" ||
  page === "electronics.html"
) {
  const applyFilters = () => {
    const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
    const priceCheckboxes = document.querySelectorAll('input[name="price"]');
    const productCards = document.querySelectorAll(".product_card");

    function filterProducts() {
      const selectedBrands = Array.from(brandCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id.toLowerCase());

      const selectedPrices = Array.from(priceCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => {
          switch (checkbox.id) {
            case "100to200":
              return { min: 100, max: 200 };
            case "200to300":
              return { min: 200, max: 300 };
            case "300to600":
              return { min: 300, max: 600 };
            case "400to600":
              return { min: 400, max: 600 };
            default:
              return null;
          }
        })
        .filter((priceRange) => priceRange !== null);

      productCards.forEach((productCard) => {
        const productId = parseInt(productCard.id);
        const product = products.find((prod) => prod.id === productId);

        const brand = product.brand;
        const price = parseFloat(product.price.replace("$", ""));

        const brandMatch =
          selectedBrands.length === 0 || selectedBrands.includes(brand);
        const priceMatch =
          selectedPrices.length === 0 ||
          selectedPrices.some(
            (range) => price >= range.min && price <= range.max
          );

        if (brandMatch && priceMatch) {
          productCard.style.display = "block";
        } else {
          productCard.style.display = "none";
        }
      });
    }

    brandCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });

    priceCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });
  };

  applyFilters();
}

const cartActions = document.getElementById("cartActions");

const displayCartContent = (() => {
  if (page !== "cart.html") {
    return;
  }

  const cartContainer = document.getElementById("cartTable");

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.textContent = "Your cart is empty";
    cartActions.hidden = true;
    return;
  }

  cartActions.hidden = false;
  const table = document.createElement("table");

  const tableHeader = document.createElement("tr");

  const nameHeader = document.createElement("th");
  nameHeader.textContent = "Name";

  const sizeHeader = document.createElement("th");
  sizeHeader.textContent = "Size";
  sizeHeader.classList.add("smallHeaders");

  const quantityHeader = document.createElement("th");
  quantityHeader.textContent = "Quantity";
  quantityHeader.classList.add("smallHeaders");

  const priceHeader = document.createElement("th");
  priceHeader.textContent = "Price";
  priceHeader.classList.add("smallHeaders");

  tableHeader.appendChild(nameHeader);
  tableHeader.appendChild(sizeHeader);
  tableHeader.appendChild(quantityHeader);
  tableHeader.appendChild(priceHeader);

  table.appendChild(tableHeader);

  cart.forEach((item) => {
    const row = document.createElement("tr");

    const itemName = document.createElement("td");
    itemName.textContent = item.name;

    const itemSize = document.createElement("td");
    itemSize.textContent = item.size;

    const itemQuantity = document.createElement("td");
    itemQuantity.textContent = item.quantity;

    const itemPrice = document.createElement("td");
    itemPrice.textContent = item.price;

    row.appendChild(itemName);
    row.appendChild(itemSize);
    row.appendChild(itemQuantity);
    row.appendChild(itemPrice);

    table.appendChild(row);
  });

  cartContainer.appendChild(table);

  const clearBtn = document.getElementById("clear_btn");
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload();
  });
})();

if (page === "index.html") {
  let video = document.getElementById("indexVideo");

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
}

let modeButton = document.getElementById("mode_button");

const toggleMode = () => {
  const modeIcon = document.getElementById("modeIcon");
  const root = document.documentElement;

  if (modeIcon.classList.contains("fa-moon")) {
    // Light
    modeIcon.classList.add("fa-sun");
    modeIcon.classList.remove("fa-moon");

    root.style.setProperty("--main-bg-color", "#e4e4e4");
    root.style.setProperty("--text-color", "#121212");
    root.style.setProperty("--second-bg-color", "#ffffff");

    localStorage.setItem("mode", "light");
  } else {
    // Dark
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");

    root.style.setProperty("--main-bg-color", "#121212");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--second-bg-color", "#1e1e1e");

    localStorage.setItem("mode", "dark");
  }
};

if (page !== "signUp.html") {
  modeButton.addEventListener("click", toggleMode);
}

const loadWebsiteColors = (() => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    toggleMode();
  }
})();

const signIn_btn = document.getElementById("signIn_btn");

if (page == "logIn.html") {
  signIn_btn.addEventListener("click", (e) => {
    e.preventDefault();

    let logInForm = document.forms["logInForm"];

    if (checkEmail(logInForm) && checkPassword(logInForm)) {
      alert("Logged In");
      window.location.href = "/index.html";
    }
  });
}

const checkEmail = (logInForm) => {
  let email = logInForm["email"].value;

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  let emailValidationP = document.querySelector(".email_validation_p");

  if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
    emailValidationP.hidden = true;
    return true;
  } else {
    emailValidationP.hidden = false;
    return false;
  }
};

const checkPassword = (logInForm) => {
  let password = logInForm["password"].value;
  let passwordValidationP = document.querySelector(".password_validation_p");

  if (password.length < 6) {
    passwordValidationP.hidden = false;
    return false;
  } else {
    passwordValidationP.hidden = true;
    return true;
  }
};

if (page == "signUp.html") {
  const signUp_btn = document.getElementById("signUp_btn");

  signUp_btn.addEventListener("click", (e) => {
    e.preventDefault();

    let signUpForm = document.forms["signUpForm"];

    if (validateSignUp(signUpForm)) {
      alert("Signed Up successfully!");
      window.location.href = "/auth/logIn.html";
    }
  });

  const validateSignUp = (signUpForm) => {
    let firstName = signUpForm["firstName"].value.trim();
    let lastName = signUpForm["lastName"].value.trim();
    let gender = signUpForm["gender"].value;
    let email = signUpForm["email"].value;
    let password = signUpForm["password"].value;
    let secondPassword = signUpForm["secondPassword"].value;

    let firstNameValidationP = document.querySelector(
      ".first_name_validation_p"
    );
    let lastNameValidationP = document.querySelector(".last_name_validation_p");
    let genderValidationP = document.querySelector(".gender_validation_p");
    let emailValidationP = document.querySelector(".email_validation_p");
    let passwordValidationP = document.querySelector(".password_validation_p");
    let secondPasswordValidationP = document.querySelector(
      ".second_password_validation_p"
    );

    if (firstName === "") {
      firstNameValidationP.hidden = false;
      return false;
    } else {
      firstNameValidationP.hidden = true;
    }

    if (lastName === "") {
      lastNameValidationP.hidden = false;
      return false;
    } else {
      lastNameValidationP.hidden = true;
    }

    if (gender === "") {
      genderValidationP.hidden = false;
      return false;
    } else {
      genderValidationP.hidden = true;
    }

    if (
      email.indexOf("@") === -1 ||
      email.lastIndexOf(".") <= email.indexOf("@")
    ) {
      emailValidationP.hidden = false;
      return false;
    } else {
      emailValidationP.hidden = true;
    }

    if (password.length < 6) {
      passwordValidationP.hidden = false;
      return false;
    }

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
      const char = password.charAt(i);
      if (char >= "a" && char <= "z") {
        hasLowerCase = true;
      } else if (char >= "A" && char <= "Z") {
        hasUpperCase = true;
      } else if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }

    if (hasLowerCase && hasUpperCase && hasNumber) {
      passwordValidationP.hidden = true;
    } else {
      passwordValidationP.hidden = false;
      return false;
    }

    if (password !== secondPassword) {
      secondPasswordValidationP.hidden = false;
      return false;
    } else {
      secondPasswordValidationP.hidden = true;
    }

    return true;
  };
}
