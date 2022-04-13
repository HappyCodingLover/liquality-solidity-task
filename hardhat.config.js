require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const { REACT_APP_API_URL, REACT_APP_PRIVATE_KEY, REACT_APP_ROPSTEN_API_URL } =
  process.env;
  console.log('REACT_APP_API_URL', REACT_APP_API_URL);
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic:
          "symptom bean awful husband dice accident crush tank sun notice club creek",
      },
      // chainId: 1234,
    },
    mumbai: {
      url: REACT_APP_API_URL,
      accounts: [`0x${REACT_APP_PRIVATE_KEY}`],
    },
    ropsten: {
      url: REACT_APP_ROPSTEN_API_URL,
      accounts: [`0x${REACT_APP_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "B68JHUAZUGIEFXYV98CSPSNKJKNP35QBRB"
  }
};
