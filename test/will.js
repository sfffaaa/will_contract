var Will = artifacts.require("Will");
const Web3 = require('web3')
var TEST_USER_DATA = "aabbccddeeff";

contract('Will', function(accounts) {
    it("Retrieve (A)", async function() {
        var instance = await Will.deployed();
        var userdata = await instance.Retrieve.call(accounts[0]);
        assert.equal(userdata, "", "accounts not exist, so return empty data");
    });

    it("Delete (A) + Retrieve (A)", async function() {
        var contract = await Will.deployed();
        var result = await contract.Delete(accounts[0]);
        var userdata = await contract.Retrieve.call(accounts[0]);
        assert.equal(userdata, "", "accounts not exist, so return empty data");
    });
});

contract('Will', function(accounts) {
    it("Create (A) + Retrieve (A)", function() {
        var contract;
        return Will.deployed().then(function(instance) {
            contract = instance;
            return instance.Create(accounts[0], TEST_USER_DATA);
        }).then(function(result) {
            return contract.Retrieve.call(accounts[0]);
        }).then(function(userdata) {
            assert.equal(userdata, TEST_USER_DATA, "create and retrieve should be the same data");
        });
    });
    it("Delete (B) + Retrieve (A)", function() {
        var contract;
        return Will.deployed().then(function(instance) {
            contract = instance;
            return instance.Delete(accounts[1]);
        }).then(function(result) {
            return contract.Retrieve.call(accounts[0]);
        }).then(function(userdata) {
            assert.equal(userdata, TEST_USER_DATA, "create and retrieve should be the same data");
        });
    });
    it("Delete (A) + Retrieve (A)", function() {
        var contract;
        return Will.deployed().then(function(instance) {
            contract = instance;
            return instance.Delete(accounts[0]);
        }).then(function(result) {
            return contract.Retrieve.call(accounts[0]);
        }).then(function(userdata) {
            assert.equal(userdata, "", "accounts not exist, so return empty data");
        });
    });
});
