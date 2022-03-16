// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fibo {

  function fib(uint _n) pure external returns(uint){
    if(_n==0){
      return 0;
    }
    else if(_n==1 || _n==2){
      return 1;
    }
    else{
      uint f1 = 1;
      uint f2 = 1;
      
      for(uint j=2;j<_n;j++){
        uint fi = f1+f2;
        f2=f1;
        f1=fi;
      }
      return f1;
    }
  }


}
