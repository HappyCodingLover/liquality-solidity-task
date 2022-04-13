const hre = require("hardhat");
const { ethers } = require('hardhat')

async function main() {
  const TestPaymentToken = await ethers.getContractFactory('ERC20PresetMinterPauser');
  testPaymentToken = await TestPaymentToken.deploy('TestPaymentToken', 'TPT');
  await testPaymentToken.deployed();
  const MockPool = await hre.ethers.getContractFactory("MockPool");
  const payeeAddressArray = ['0x047425f8d784dcc6d73df12bc6eeca3aa51f4fb2', '0x522eb82b8394f1abc499be2b986b79feaf7e451e']
  const payeeShareArray = [30, 70]
  const mockPool = await MockPool.deploy(payeeAddressArray, payeeShareArray, testPaymentToken.address);

  await mockPool.deployed();

  console.log("MockPool deployed to:", mockPool.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });