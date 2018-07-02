pragma solidity ^0.4.17;

contract CoinFactory {
    address[] public participants;


    function joinCollageCoin(string user) public {
        address join = new CollageCoin(user, msg.sender);
        participants.push(join);
    }

    function getParticipants() public view returns (address[]) {
        return participants;
    }
}



contract CollageCoin {
    address public manager;
    string public name;
    uint Bronze;
    uint Silver;
    uint Gold;
    uint Black;

    function CollageCoin(string userName, address participant) public {
        manager = participant;
        name = userName;
        Bronze = 0;
        Silver = 0;
        Gold = 0;
        Black = 0;
    }

    function GetName() public view returns (string) {
        return name;
    }

    function SendBronzeCoin() public {
        Bronze++;
    }
    function SendSilverCoin() public {
        Silver++;
    }
    function SendGoldCoin() public {
        Gold++;
    }
    function SendBlackCoin() public {
        Black++;
    }

    function GetNumBronzeCoin() public view returns (uint){
        return Bronze;
    }
    function GetNumSilverCoin() public view returns (uint){
        return Silver;
    }
    function GetNumGoldCoin() public view returns (uint){
        return Gold;
    }
    function GetNumBlackCoin() public view returns (uint){
        return Black;
    }


}