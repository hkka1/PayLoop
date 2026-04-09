// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title RevenueVault
 * @dev PayLoop 的核心金库：负责收款并根据 Agent 指令执行分账
 */
contract RevenueVault {
    address public owner;

    event Received(address indexed from, uint256 amount);
    event SplitExecuted(address indexed to, uint256 amount, string reason);

    constructor() {
        owner = msg.sender;
    }

    // 允许金库接收原生代币 (X Layer 上的原生 ETH/OKB)
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    /**
     * @dev 执行分账的函数
     * @param _to 接收者地址
     * @param _amount 分账金额
     * @param _reason 备注（例如："设计师费用"）
     */
    function executeSplit(address payable _to, uint256 _amount, string memory _reason) external {
        require(msg.sender == owner, "Only PayLoop Agent can trigger split");
        require(address(this).balance >= _amount, "Insufficient vault balance");

        _to.transfer(_amount);
        emit SplitExecuted(_to, _amount, _reason);
    }

    // 查看金库当前余额
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}