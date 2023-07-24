const { ethers } = require("hardhat");

async function main() {
    const initialMessage = "This is the initial message.";
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const inboxContract = await ethers.deployContract("Inbox", [initialMessage]);

    console.log("Inbox address:", await inboxContract.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });