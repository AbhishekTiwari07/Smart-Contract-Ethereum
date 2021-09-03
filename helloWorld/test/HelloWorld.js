const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', ()=>{
    it('Should deploy smart contract properly', async () =>{
        const helloWorld = await HelloWorld.deployed();
        assert(helloWorld.address != '');
    });
});