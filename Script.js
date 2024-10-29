const contractAddress = '0x6eB41F55b918b41f8271C5AfB9b96cA6A46e81bf';
const contractABI = /* ABI Array from previous data */;
let web3;
let contract;
let userAccount;

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('connectWallet').onclick = connectWallet;
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error("User denied account access.");
        }
    } else {
        alert("Please install a Web3 wallet such as MetaMask or Trust Wallet.");
    }
});

async function connectWallet() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    userAccount = accounts[0];
    document.getElementById('walletAddress').innerText = `Connected: ${userAccount}`;
}

async function claimDailyReward() {
    if (userAccount) {
        try {
            await contract.methods.loginDaily().send({ from: userAccount });
            document.getElementById('loginStatus').innerText = "Daily reward claimed!";
        } catch (error) {
            document.getElementById('loginStatus').innerText = "Failed to claim reward.";
            console.error(error);
        }
    } else {
        alert("Please connect your wallet.");
    }
}

async function claimTreasure(isSmall) {
    if (userAccount) {
        try {
            await contract.methods.distributeTreasure(isSmall).send({ from: userAccount });
            document.getElementById('treasureStatus').innerText = isSmall ? "Small treasure claimed!" : "Big treasure claimed!";
        } catch (error) {
            document.getElementById('treasureStatus').innerText = "Failed to claim treasure.";
            console.error(error);
        }
    } else {
        alert("Please connect your wallet.");
    }
}

document.getElementById('loginDaily').addEventListener('click', claimDailyReward);
