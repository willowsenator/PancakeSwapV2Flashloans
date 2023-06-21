const { network, ethers } = require("hardhat");

const fundErc20 = async (contract, sender, recepient, amount) => {
  const FUND_AMOUNT = ethers.parseUnits(amount, 18);
  const whale = await ethers.getSigner(sender);
  const contractSigner = contract.connect(whale);
  await contractSigner.transfer(recepient, FUND_AMOUNT);
};

module.exports = {
  fundErc20: fundErc20,
};
