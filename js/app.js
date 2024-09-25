const products = [
  {
    id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
    category: "Cap",
    name: "UNISEX ORIGINALS WASHED BUCKET",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1e758585df14bbbb7d8aaf000c95bd7_9366/UNISEX_ORIGINALS_WASHED_BUCKET_White_CM3933_01_standard.jpg?fbclid=IwY2xjawFg8ShleHRuA2FlbQIxMAABHRzo3Ml2Lcv6FSGWTAxfHYbTv253sd9ONWBPeyzEljWVuaAmJobG__aryQ_aem_E7ZbQlF6aQDkf-0cmYk_rg",
    details: {
      price: 27,
      stock: 14,
      shipping: 14,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 4,
      ratingsCount: 3,
    },
  },
  {
    id: "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
    category: "Cap",
    name: "SST Plus Strap-Back Hat",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92e77a8d84d845d19171ad50003f2ea1_9366/SST_Plus_Strap-Back_Hat_White_FZ8569_01_standard.jpg?fbclid=IwY2xjawFg8ZVleHRuA2FlbQIxMAABHRgWwrdFGRmM2wkflTGuVuEbU7pBboiRgQmb1c2lYOUwmyfxOj6xEAHIZw_aem_UfnrqMHkgfUx__UI6rHyGg",
    details: {
      price: 23,
      stock: 14,
      shipping: 47,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 4,
      ratingsCount: 32,
    },
  },
  {
    id: "5690e579-a943-4b42-9ffe-dfc65b71c560",
    category: "Cap",
    name: "Dispatch Trucker Hat",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg?fbclid=IwY2xjawFg8ZhleHRuA2FlbQIxMAABHWXBzOhZBJSa0tl6vU8zVxbnxQlGDntNqT1XF_i2MQFDrsETjy5I4vJ7dg_aem_qkPNGAVDazLjKhJlhnGOTQ",
    details: {
      price: 28,
      stock: 16,
      shipping: 14,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 4,
      ratingsCount: 30,
    },
  },
  {
    id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
    category: "Earphones",
    name: "adidas Z.N.E. 01 True Wireless Earbuds",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg?fbclid=IwY2xjawFg8ZtleHRuA2FlbQIxMAABHRzo3Ml2Lcv6FSGWTAxfHYbTv253sd9ONWBPeyzEljWVuaAmJobG__aryQ_aem_E7ZbQlF6aQDkf-0cmYk_rg",
    details: {
      price: 142,
      stock: 11,
      shipping: 23,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 5,
      ratingsCount: 22,
    },
  },
  {
    id: "b278e667-ca17-465c-b603-af1af4319b7b",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg?fbclid=IwY2xjawFg8Z5leHRuA2FlbQIxMAABHdGIzxtBrO7LhL7ilRzSE7zH7SfMiYXnPaC2U4ZOWi8o-YHUxgtEEKghUQ_aem_B1aSCp1LZKj9bwEM79yspg",
    details: {
      price: 135,
      stock: 16,
      shipping: 30,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 5,
      ratingsCount: 51,
    },
  },
  {
    id: "1f56c0e5-4407-44bf-9225-90f592d2924a",
    category: "Earphones",
    name: "FWD-01 Sport In-Ear Headphones",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2cdb8652aa2340369ba2aa79010062d1_9366/FWD-01_Sport_In-Ear_Headphones_Black_CM5016_01_standard.jpg?fbclid=IwY2xjawFg8aFleHRuA2FlbQIxMAABHV2Yhv4eY_DTsUQG0rb4oaehPTL3bcs-ZajaX30fIRwpKdKA7BFJGZZEXA_aem_EQSnEw8joHAonbQXJw_a6w",
    details: {
      price: 185,
      stock: 8,
      shipping: 15,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 4,
      ratingsCount: 66,
    },
  },
  {
    id: "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
    category: "Earphones",
    name: "adidas FWD-02 Sport True Wireless Earbuds",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg?fbclid=IwY2xjawFg8aNleHRuA2FlbQIxMAABHRzo3Ml2Lcv6FSGWTAxfHYbTv253sd9ONWBPeyzEljWVuaAmJobG__aryQ_aem_E7ZbQlF6aQDkf-0cmYk_rg",
    details: {
      price: 162,
      stock: 14,
      shipping: 29,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 4,
      ratingsCount: 6,
    },
  },
  {
    id: "d1116075-10f2-49c4-985e-0d41e19ce1b3",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg?fbclid=IwY2xjawFg8adleHRuA2FlbQIxMAABHb6qKf0BIKPLa5FMuYWZPoaIW6tPsa6xqSGaeo-j_YJ6razyJhnIcZFpUQ_aem_RaRXOI8HfI9H3m8v6e0YgA",
    details: {
      price: 110,
      stock: 15,
      shipping: 48,
      quantity: 0,
    },
    ratingsInfo: {
      ratings: 5,
      ratingsCount: 9,
    },
  },
];

let cartCount = 0;
let subTotal = 0;

function showProducts() {
  for (let item of products) {
    // console.log(item);
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-base-100 shadow-xl h-full">
          <figure class="p-7">
            <img
              src= ${item.img}
              alt="products"
              class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${item.name}</h2>
            <p class="text-purple-700 text-lg font-bold" >Price: ${item.details.price} $</p>
            <div class="card-actions">
              <button onclick= "addToCart('${item.name}', ${item.details.price})" class="btn bg-purple-800 text-white text-base">Add to cart</button>
            </div>
          </div>
        </div>    
    `;

    const productContainer = document.getElementById("product-container");
    productContainer.appendChild(card);
  }
}

//onclick button function
function addToCart(name, price) {
  // console.log(name, price);
  cartCount++;
  subTotal = subTotal + price;

  const cartCountContainer = document.getElementById("cart-count");
  const cartTotalContainer = document.getElementById("cart-total");
  const subTotalContainer = document.getElementById("sub-total");
  cartCountContainer.innerText = cartCount;
  cartTotalContainer.innerText = cartCount;
  subTotalContainer.innerText = subTotal;
}

//call the function
showProducts();
