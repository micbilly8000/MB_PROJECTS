// scripts/whitelist.js
// npx hardhat run scripts/whitelist.js --network <yourNetwork>
const { ethers } = require("hardhat");

async function main() {
  const saleAddress = process.env.SALE_ADDRESS; // TokenSale deployment address
  if (!saleAddress) throw new Error("Set SALE_ADDRESS env var");

  const sale = await ethers.getContractAt("TokenSale", saleAddress);

  // Example: add a batch of investors
  const investors = [
    "0x1234...ABCD",
    "0x2345...BCDE",
    "0x3456...CDEF",
  ];

  const tx = await sale.addToWhitelistBatch(investors);
  console.log("Submitting tx:", tx.hash);
  await tx.wait();
  console.log("Whitelisted:", investors.length, "addresses");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});