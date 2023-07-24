const { ethers } = require("hardhat");
const { expect } = require("chai");
const { afterEach } = require("mocha");

describe("Inbox contract", function () {
    const initialMessage = "This is the initial message.";
    let inboxContract;

    afterEach(async function () {
        if (await inboxContract.message() !== initialMessage) {
            await inboxContract.setMessage(initialMessage);
        }
    });

    describe("Contract Deploy", async function () {
        it("Deploying...", async function () {
            inboxContract = await ethers.deployContract("Inbox", [initialMessage]);

            expect(await inboxContract.getAddress()).to.not.be.empty;
        });
    });

    describe("General tests", async function () {
        it("Deployment should assign the 'initialMessage' to the 'message' storage variable", async function () {
            expect(await inboxContract.message()).to.equal(initialMessage);
        });
    
        it("'setMessage()' should update the 'message' storage variable", async function () {
            const finalMessage = "This is the final message.";
    
            await inboxContract.setMessage(finalMessage);
    
            expect(await inboxContract.message()).to.equal(finalMessage);
        });
    });
});