import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `${process.env.MUMBAI_ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PK}`],
    },
  },
};

export default config;
