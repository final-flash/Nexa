// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
let menuOverlay;

// Create overlay element
function createOverlay() {
    menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);
}

// Initialize overlay
createOverlay();

// Toggle menu function
function toggleMenu() {
    navList.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Toggle hamburger icon
    const icon = hamburgerMenu.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Event Listeners
hamburgerMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Handle search functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    performSearch(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
    }
});

function performSearch(query) {
    // TODO: Implement actual search functionality
    console.log('Searching for:', query);
}

// Handle filter button clicks
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // TODO: Implement actual filtering functionality
        console.log('Filter selected:', button.textContent);
    });
});

// Chart configuration
const chartConfig = {
    type: 'line',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [65, 59, 80, 81, 56],
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }
    }
};

// Create charts for each stat card
document.addEventListener('DOMContentLoaded', () => {
    const chartElements = document.querySelectorAll('.chart');
    
    chartElements.forEach(element => {
        const ctx = document.createElement('canvas');
        element.appendChild(ctx);
        new Chart(ctx, chartConfig);
    });
});

// Notification badge toggle
const notification = document.querySelector('.notification');
notification.addEventListener('click', () => {
    const badge = notification.querySelector('.badge');
    if (badge) {
        badge.style.display = 'none';
    }
});
