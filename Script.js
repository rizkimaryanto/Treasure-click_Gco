// Mengambil elemen dari DOM
const loginButton = document.getElementById('login-button');
const distributeButton = document.getElementById('distribute-button');
const addressInput = document.getElementById('address-input');

// Event listener untuk tombol login
loginButton.addEventListener('click', () => {
    const address = addressInput.value;
    if (address) {
        alert(`Login successful for address: ${address}`);
        // Di sini, panggil fungsi untuk berinteraksi dengan smart contract untuk login
        // Contoh: loginDaily(address);
    } else {
        alert('Please enter your wallet address');
    }
});

// Event listener untuk tombol distribusi
distributeButton.addEventListener('click', () => {
    const address = addressInput.value;
    if (address) {
        alert(`Distributing treasure to: ${address}`);
        // Di sini, panggil fungsi untuk berinteraksi dengan smart contract untuk distribusi
        // Contoh: distributeTreasure(isSmall);
    } else {
        alert('Please enter your wallet address');
    }
});
