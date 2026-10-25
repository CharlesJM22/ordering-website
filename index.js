const products = [
    {
        id: 1,
        name: "Black Mamba (Black Currant)",
        category: "BL∀CK SERIES 35000",
        categories: ["BL∀CK SERIES 35000", "Best Seller"],
        price: 250,
        description: "",
        image: "6e47ff73-9452-4dc1-bb4c-475e96c30d4d.jpg"
    },
    {
        id: 2,
        name: "Very Mixed (Mixed Berries)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "8519786b-bc3d-46cc-9701-a2a1768d8727.jpg"
    },
    {
        id: 3,
        name: "Bubblebomb (Bubblegum)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "d37a432d-3a77-4f08-93a4-84bfd8cbfaea.jpg"
    },
    {
        id: 4,
        name: "Mellow Snow (Melon Ice Cream)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "c0e46647-ba39-4d69-96fb-7b8f5e3d486f.jpg"
    },
    {
        id: 5,
        name: "Sea Salt (Lemon Lime)",
        category: "BL∀CK SERIES 35000",
        categories: ["BL∀CK SERIES 35000", "Best Seller"],
        price: 250,
        description: "",
        image: "92735c7b-f292-4f4a-b133-f416051f1e40.jpg"
    },
    {
        id: 6,
        name: "Red Water (Watermelon)",
        category: "BL∀CK SERIES 35000",
        categories: ["BL∀CK SERIES 35000", "Best Seller"],
        price: 250,
        description: "",
        image: "4945b9ef-0ca2-47d4-a954-7a0b765417e0.jpg"
    },
    {
        id: 7,
        name: "Purple Delight (Taro Ice Cream)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "b49be5c9-97d6-4d06-bca7-9318c832728b.jpg"
    },
    {
        id: 8,
        name: "Monkey Ice (Banana)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "d4f5a180-9d5d-4c94-8d11-56adf5f2607d.jpg"
    },
    {
        id: 9,
        name: "Golden Slice (Cheesecake)",
        category: "BL∀CK SERIES 35000",
        categories: "BL∀CK SERIES 35000",
        price: 250,
        description: "",
        image: "189dd60b-d823-43a8-9508-61dff1797f49.jpg"
    },
    {
        id: 10,
        name: "Yellow Summer (Mango Ice)",
        category: "BL∀CK SERIES 35000",
        categories: ["BL∀CK SERIES 35000", "Best Seller"],
        price: 250,
        description: "",
        image: "1e143a4b-a616-4c0b-86ee-4adc7976156e.jpg"
    },
    {
        id: 11,
        name: "Watermelon",
        category: "BLACK ELITE PRO 50000",
        categories: ["BLACK ELITE PRO 50000", "Best Seller"],
        price: 250,
        description: "",
        image: "2dfdbc48-2a96-489e-8ac8-2fd37b59e6bf.jpg"
    },
    {
        id: 12,
        name: "Cheesecake",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "3f4f4ff4-84ec-415c-b721-4c2ef4c9c38d.jpg"
    },
    {
        id: 13,
        name: "Mixed Berries",
        category: "BLACK ELITE PRO 50000",
        categories: ["BLACK ELITE PRO 50000", "Best Seller"],
        price: 250,
        description: "",
        image: "3fac081e-6907-4834-987b-a37b0de99d78.jpg"
    },
    {
        id: 14,
        name: "Strawberry Ice",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "910a4d51-b1c7-49a1-9531-6cf5f1dbc9b2.jpg"
    },
    {
        id: 15,
        name: "Bubblegum",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "ce47cce1-8b49-4128-8697-96c67fa1daa9.jpg"
    },
    {
        id: 16,
        name: "Grape Ice",
        category: "BLACK ELITE PRO 50000",
        categories: ["BLACK ELITE PRO 50000", "Best Seller"],
        price: 250,
        description: "",
        image: "8d6be880-ae84-4ac5-8d8b-cb4eed7d082a.jpg"
    },
    {
        id: 17,
        name: "Banana Ice",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "7a83b10e-eb43-43f3-927f-446ff8698614.jpg"
    },
    {
        id: 18,
        name: "Yakult",
        category: "BLACK ELITE PRO 50000",
        categories: ["BLACK ELITE PRO 50000", "Best Seller"],
        price: 250,
        description: "",
        image: "2c808ddf-dc14-4cb4-9aa0-bd4538b84d56.jpg"
    },
    {
        id: 19,
        name: "Mango",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "c35004c8-56f9-4a77-a085-c120e065707d.jpg"
    },
    {
        id: 20,
        name: "Matcha",
        category: "BLACK ELITE PRO 50000",
        categories: "BLACK ELITE PRO 50000",
        price: 250,
        description: "",
        image: "08440b30-0ae0-4ffb-b1f5-e228bba5dbf3.jpg"
    }
];

let selectedCategory = "All";
let cart = JSON.parse(localStorage.getItem("VPRCart") || "[]");

function formatPrice(price) {
    return "₱" + price.toLocaleString("en-PH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function displayProducts() {
    const search = document.getElementById("search")
        .value.toLowerCase().trim();

    const filtered = products.filter(product => {
        const productCategories = product.categories || [product.category];
        const matchesCategory =
            selectedCategory === "All" ||
            productCategories.includes(selectedCategory);

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;
    });

    const grid = document.getElementById("product-grid");
    document.getElementById("no-results").hidden = filtered.length > 0;

    grid.innerHTML = filtered.map(product => `
        <article class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy">

            <p class="product-category">${product.category}</p>
            <h3>${product.name}</h3>
            <div class="product-description quantity-box" aria-label="Quantity selector for ${product.name}">
                <button class="qty-btn" type="button" onclick="changeQuantity(${product.id}, -1)" aria-label="Decrease quantity for ${product.name}">−</button>
                <span class="qty-value">${getCartQuantity(product.id)}</span>
                <button class="qty-btn" type="button" onclick="changeQuantity(${product.id}, 1)" aria-label="Increase quantity for ${product.name}">+</button>
            </div>

            <div class="product-bottom">
                <span class="product-price">
                    ${formatPrice(product.price)}
                </span>

                <button class="add-btn"
                    onclick="addToCart(${product.id})">
                    + Add
                </button>
            </div>
        </article>
    `).join("");
}

function filterCategory(category, button) {
    selectedCategory = category;

    document.querySelectorAll(".category").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");
    displayProducts();
}

function saveCart() {
    localStorage.setItem("shopEaseCart", JSON.stringify(cart));
    updateCartCount();

    const cartModal = document.getElementById("cart-modal");
    if (!cartModal.hidden) {
        viewCart();
    }
}

function getCartQuantity(productId) {
    const item = cart.find(entry => entry.id === productId);
    return item ? item.quantity : 0;
}

function changeQuantity(id, delta) {
    const product = products.find(item => item.id === id);
    const existing = cart.find(item => item.id === id);

    if (!product) return;

    if (existing) {
        existing.quantity += delta;

        if (existing.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
    } else if (delta > 0) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    displayProducts();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
}

function addToCart(id) {
    const product = products.find(item => item.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    displayProducts();
    alert(product.name + " added to your cart!");
}

function viewCart() {
    const modal = document.getElementById("cart-modal");
    const itemsContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    modal.hidden = false;

    if (cart.length === 0) {
        itemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "Total: ₱0.00";
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <p>${formatPrice(item.price)} × ${item.quantity}</p>
            </div>

            <button onclick="removeFromCart(${item.id})">
                Remove
            </button>
        </div>
    `).join("");

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    totalElement.textContent = "Total: " + formatPrice(total);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    viewCart();
}

function closeCart() {
    document.getElementById("cart-modal").hidden = true;
}

function openServiceModal() {
    const modal = document.getElementById("service-modal");
    modal.hidden = false;
    document.getElementById("close-service-modal").focus();
}

function closeServiceModal() {
    document.getElementById("service-modal").hidden = true;
    document.querySelector('[aria-controls="service-modal"]').focus();
}

const SUPPORT_EMAIL = 'garciajeremy3012@gmail.com';

function sendSupportEmail(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const customerEmail = form.querySelector('#customer-email').value.trim();
    const problem = form.querySelector('#customer-problem').value.trim();
    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.support-form-note');

    if (!customerEmail || !problem) {
        if (status) {
            status.textContent = 'Please enter your email and describe your problem.';
        }
        return;
    }

    const subject = 'Customer Support Request';
    const body = 'Customer Email: ' + customerEmail + '\n\nProblem:\n' + problem;
    const mailtoLink = 'mailto:' + SUPPORT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;

    if (submitButton) {
        submitButton.textContent = 'Email App Opened ✓';
        submitButton.classList.add('support-form-delivered');
    }

    if (status) {
        status.textContent = 'Your email app should open with the message sent to our support email.';
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const form = document.getElementById("checkout-form");
    if (!form || !form.reportValidity()) {
        return;
    }

    const address = document.getElementById("checkout-address").value.trim();
    const phone = document.getElementById("checkout-phone").value.trim();
    const email = document.getElementById("checkout-email").value.trim();

    alert(
        "Your order is ready for checkout!\n\n" +
        "Shipping Address: " + address + "\n" +
        "Phone Number: " + phone + "\n" +
        "Email: " + email);
}

displayProducts();
updateCartCount();

document.getElementById("service-modal").addEventListener("click", event => {
    if (event.target === event.currentTarget) {
        closeServiceModal();
    }
});

document.addEventListener("keydown", event => {
    const serviceModal = document.getElementById("service-modal");

    if (event.key === "Escape" && !serviceModal.hidden) {
        closeServiceModal();
    }
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
        });

        if (!isOpen) {
            item.classList.add('active');
        }
    });
});

const phoneInput = document.getElementById("checkout-phone");

if (phoneInput) {
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
    });
}
