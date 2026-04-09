# 🚀 PayLoop: Web3 Intent-Centric Settlement Agent

## 📖 项目简介
在当前的 Web3 交互中，代币转账与财务结算体验门槛极高（需核对 42 位地址、提防安全风险、计算 Gas）。**PayLoop** 致力于打破这一壁垒，通过引入“意图驱动 (Intent-Centric)”理念，构建了一个能够理解自然语言的 AI 财务 Agent。用户只需输入日常大白话（如：“给阿强打 500U 尾款”），Agent 即可全自动完成意图解析、地址映射及最终的链上资金结算。

## ⚙️ 架构概述
PayLoop 采用高度模块化的 Agentic 架构：
1. **意图感知层 (LLM Parser):** 接入 Gemini 3.1 Pro 模型，过滤自然语言中的冗余信息，精准提取转账实体（Recipient、Amount、Reason）。
2. **能力挂载层 (Skills):** 集成 `Onchain OS Skill` 等核心模块，完成链上身份解析。
3. **链上执行层 (Agentic Wallet):** 拥有独立私钥控制权的 Agent 钱包在底层构建交易并签名广播，实现资金的安全划拨。

## 🔗 部署地址 (Deployment)
* **网络环境:** OKX X Layer Testnet
* **Agentic Wallet (链上身份/资金池地址):** `0x0814fd7c5a2b4a63be6ae4ca2f5d9debf76247adde875ccf4a1f0bfb0b6e8f90`
* **测试收款地址:** `0x8254608f0ef3868885738c073e594a572f41f5f4`

## 🛠️ Onchain OS Skill 或 Uniswap Skill 使用情况
**本项目深度调用了 `Onchain OS Skill` 模块：**
在自然语言向链上数据转换的过程中，最大的痛点是“身份映射”。我们通过挂载 Onchain OS Skill（详见代码仓 `skills/onchain_os_client.ts`），赋予了 Agent 链上寻址能力。当大模型提取出“阿强”这一自然语言 Alias（别名）时，Agent 会通过该 Skill 模块，将其精准映射解析为底层真实的 0x 钱包地址，从而消除手动复制地址带来的 ENS 伪造及填错风险。

## 🔄 运作机制
1. **输入:** 用户输入口语化结算指令。
2. **解析:** LLM 返回标准化 JSON `{"recipient": "阿强", "amount": "0.0001"}`。
3. **寻址:** Agentic Wallet 触发 Onchain OS Skill，获取真实地址。
4. **执行:** Agentic Wallet 自动调用 `ethers.js`，在 OKX X Layer 链上构建 Transaction、签名并消耗 Gas 发送。
5. **确认:** 返回真实的 TxHash，结算闭环完成。

## 👥 团队成员
* **hkkai1** - Full-Stack & AI Agent Developer

## 🌍 项目在 X Layer 生态中的定位
PayLoop 的定位是 X Layer 生态中的 **“基础设施级 AI Agent 交互层”**。
通过隐藏复杂的底层交互，PayLoop 大幅降低了传统 Web2 用户、企业财务乃至 DAO 组织进入 X Layer 生态的门槛。它不仅是一个转账工具，未来更能作为底层网关，无缝衔接 X Layer 上的各类 DeFi、NFT 及 GameFi 应用，推动 X Layer 实现真正的大规模普及 (Mass Adoption)。
