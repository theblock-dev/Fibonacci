const Fib = artifacts.require('Fibo.sol');

contract('Fibo', ()=>{

    let fib = undefined;
    beforeEach(async()=>{
        fib = await Fib.deployed();
    })

    it('should return the correct fibonacci sequence', async function(){
        let result = await fib.fib(10);
        assert(result.toNumber() === 55);
    })
    
    it('should return the correct fibonacci sequence for Zero', async function(){
        let result = await fib.fib(0);
        assert(result.toNumber() === 0);
    })

    
    it('should return the correct fibonacci sequence for 1', async function(){
        let result = await fib.fib(0);
        assert(result.toNumber() === 0);
    })

    
    it('should return the correct fibonacci sequence for 2', async function(){
        let result = await fib.fib(0);
        assert(result.toNumber() === 0);
    })
})