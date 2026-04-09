# 🚀 PayLoop: Web3 Intent-Centric Settlement Agent

> **Turn natural language directly into secure blockchain transactions.**

## 💡 痛点与愿景 (The Problem)
在目前的 Web3 世界中，企业财务分账、发工资或支付尾款的体验极其反人类：你需要核对 42 位的 0x 地址、手动计算 Decimals、切换网络并消耗 Gas。这不仅效率低下，且极易出错（如著名的 ENS 伪造攻击或转错地址）。

**PayLoop** 致力于打破 Web2 与 Web3 的交互壁垒，通过部署一个“冷酷无情的 AI 财务 Agent”，让链上结算如同发微信一样简单。

## ⚙️ 核心架构 (How it Works)
PayLoop 巧妙地融合了最新的大语言模型（LLM）与智能合约技术：
1. **意图解析 (Intent Parsing):** 用户输入日常口语指令（如：“给阿强打 500U 尾款”）。
2. **要素提取 (Data Extraction):** Agent 自动过滤废话，精准提取 `Recipient`、`Amount`、`Reason`，并映射底层真实的 0x 钱包地址。
3. **链上执行 (On-chain Execution):** 引擎自动连接区块链网络（当前演示接入 **OKX X Layer Testnet**），构建交易并签名广播，完成资金结算。

## 🛠️ 技术栈 (Tech Stack)
* **Agent Core:** TypeScript, Node.js
* **Blockchain:** Web3 `ethers.js`, OKX X Layer Testnet
* **AI Model:** Gemini 3.1 Pro (via API)

## 🚀 极速运行 Demo (Quick Start)
只需两步，即可在本地复现我们的极客终端 Demo：

1. 安装依赖包：
   ```bash
   npm install ethers
