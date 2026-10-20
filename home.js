const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Devices",
        price: 1000000,
        description: "",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Devices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Everyday Backpack",
        category: "Juices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Classic Sunglasses",
        category: "Juices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Desk Lamp",
        category: "Devices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Coffee Mug",
        category: "Juices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Bluetooth Speaker",
        category: "Devices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Travel Bag",
        category: "Juices",
        price: 100,
        description: "",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80"
    }
];

let selectedCategory = "All";
let cart = JSON.parse(localStorage.getItem("shopEaseCart") || "[]");

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
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

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

function sendSupportEmail(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".support-form-note");

    submitButton.textContent = "Delivered ✓";
    submitButton.classList.add("support-form-delivered");
    status.textContent =
        "Demo only: your message was not actually sent or saved.";
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
