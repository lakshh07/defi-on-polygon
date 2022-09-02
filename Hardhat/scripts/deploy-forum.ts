import { Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';

async function main() {
    // deploy the contracts
    const Goflow: ContractFactory = await ethers.getContractFactory('Goflow');
    const goflow: Contract = await Goflow.deploy();
    const Forum: ContractFactory = await ethers.getContractFactory('Forum');
    // pass the GOFLOW token address to the Forum contract's constructor!
    const forum: Contract = await Forum.deploy(goflow.address);
    await forum.deployed();
    console.log('goflow deployed to: ', goflow.address);
    console.log('forum deployed to: ', forum.address);

    // Let's populate our app with some questions and answers.
    // We are posting with our wallet address by default
    const qTx = await forum.postQuestion('Are you my fren? 🤗');
    await qTx.wait();

    // What a nice answer 🤝 🤗
    const answerTx3 = await forum.postAnswer(0, 'Yes, I am ur fren! 👊');
    await answerTx3.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });