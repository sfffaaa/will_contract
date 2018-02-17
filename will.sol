pragma solidity ^0.4.0;
contract Will {

    mapping(string => string) userData;

    function Will() public {
    }

    function Create(string user_addr, string data) public {
        userData[user_addr] = data;
    }

    function Retrieve(string user_addr) public constant returns (string data) {
        data = userData[user_addr];
    }
    
    function Update(string user_addr, string data) public {
        Create(user_addr, data);
    }

    function Delete(string user_addr) public {
        delete userData[user_addr];
    }
}
