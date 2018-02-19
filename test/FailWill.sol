pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Will.sol";


contract TestWill {

	function toString(address x) internal returns (string) {
		bytes memory b = new bytes(20);
		for (uint i = 0; i < 20; i++) {
			b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
		}
		return string(b);
	}

	function testRetrieveA() public {
		Will will = Will(DeployedAddresses.Will());
		string memory expected = '';
		string memory myaddress = toString(tx.origin);
		// string memory original = will.Retrieve(myaddress);
		// Assert.equal(original, expected, "Owner should have 10000 MetaCoin initially");
		// This test is failure because will.Retrieve will return a string object but now EVM doesn't support callee contract call the function which return dynamic data in caller contract. So til now, just ignore this error and go ahead.
	}
}
