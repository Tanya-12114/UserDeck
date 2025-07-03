const API_URL = 'https://jsonplaceholder.typicode.com/users';
const container = document.getElementById('user-container');
const reloadBtn = document.getElementById('reload');

function fetchUsers() {
    container.innerHTML = ''; // Clear previous data

    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(users => {
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user-card';
                card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p id="error">Failed to load users: ${error.message}</p>`;
        });
}

// Reload button functionality
reloadBtn.addEventListener('click', fetchUsers);

// Fetch users on initial load
fetchUsers();
