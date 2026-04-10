# 🚀 PayLoop
**An Agentic Revenue, Settlement and Reinvestment OS on X Layer**

## 📖 Introduction
Current Web3 financial interactions have high barriers (verifying 42-character addresses, security risks, calculating gas). PayLoop breaks this barrier by introducing an "Intent-Centric" approach, building an AI financial Agent capable of understanding natural language. 

Beyond simple payments, PayLoop turns one-off transactions into a reusable operating loop. Users configure revenue rules in natural language, and the Agentic Wallet autonomously handles collection, fund splitting, swapping, and reinvestment directly on the X Layer.

## ⚙️ Architecture Overview
PayLoop utilizes a highly modular Agentic architecture:
1. **LLM Parser:** Integrates Gemini 3.1 Pro to filter noise from natural language and extract precise transaction entities (`Recipient`, `Amount`, `Reason`).
2. **Skills Layer:** Deeply integrates **OnchainOS Skills** to handle on-chain identity resolution and transaction payload construction.
3. **Agentic Wallet:** An independent, self-custodial Agent wallet that builds transactions, signs, and broadcasts on the execution layer, ensuring secure fund transfers.

## 🔗 Deployment Details
* **Network:** OKX X Layer Testnet
* **Agentic Wallet Address:** `0x0814fd7c5a2b4a63be6ae4ca2f5d9debf76247adde875ccf4a1f0bfb0b6e8f90`
* **Test Receiver Address:** `0x8254608f0ef3868885738c073e594a572f41f5f4`

## 🛠 OnchainOS Skill Usage
We deeply integrated the **OnchainOS Skill** module. The biggest pain point in natural language-to-chain conversion is "identity mapping". By attaching the OnchainOS Skill (see code in `skills/onchain_os_client.ts`), we empower the Agent with on-chain addressing capabilities. 

When the LLM extracts a natural language Alias (e.g., "John"), the Agent invokes this Skill to accurately map and resolve it to a real underlying `0x` address, eliminating the risk of ENS spoofing or manual copy-paste errors.

## 🔄 Workflow Mechanism
1. **Input:** User inputs a natural language settlement command.
2. **Parse:** LLM returns standardized JSON (e.g., `{"recipient": "John", "amount": "0.0001"}`).
3. **Resolve:** Agentic Wallet triggers OnchainOS Skill to fetch the real address.
4. **Execute:** Agentic Wallet automatically constructs the transaction, signs it, and broadcasts it to the X Layer.
5. **Confirm:** Returns the real TxHash, completing the settlement loop.

> **📍 MVP Scope Note:** Our current video demo showcases the core V1 execution (Intent-Transfer via OnchainOS). The full revenue-splitting and continuous loop architecture is ready and expanding.
## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone git clone https://github.com/hkka1/PayLoop.git
   cd PayLoop
