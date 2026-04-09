// agent/intent_parser.ts

export interface PaymentIntent {
    recipient: string; 
    amount: string;    
    reason: string;    
}

export async function parseIntent(userInput: string): Promise<PaymentIntent> {
    console.log(`\n🧠 AI 正在通过中转站请求大模型解析指令: "${userInput}" ...`);

    const systemPrompt = `你是一个冷酷无情的 Web3 财务 Agent。
    用户的输入是一段口语化的分账指令，你需要从中精准提取出转账信息。
    请严格返回 JSON 格式，绝不允许包含任何多余的解释、Markdown 标记或废话：
    {"recipient": "提取出的接收人姓名", "amount": "提取出的金额数字", "reason": "打钱的原因"}`;

    try {
        const response = await fetch("https://api.aipaibox.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-VXxLrJ63NM5NL2cCo4Kl9uWlLW2uqjFaBE9kjgCghdHzvWAm" 
            },
            body: JSON.stringify({
                // 👇 换成了你在龙虾项目里验证过的终极暗号！
                model: "gemini-3.1-pro-low", 
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userInput }
                ]
            })
        });

        const data: any = await response.json();
        
        if (data.error) {
            console.log("\n❌ 中转站报错了，原因如下：");
            console.log(data.error);
            return { recipient: "测试", amount: "0", reason: "报错测试" };
        }

        // 获取并解析 AI 的回答
        const aiResult = JSON.parse(data.choices[0].message.content);

        console.log("✅ 解析完成，提取要素如下：");
        console.table(aiResult);
        return aiResult;

    } catch (error) {
        console.log("\n❌ 本地执行报错了，真正的原因是：");
        console.log(error);
        return { recipient: "测试", amount: "0", reason: "报错测试" };
    }
}

// 本地测试命令
parseIntent("嘿，PayLoop，马上给设计师阿强打 500U 作为LOGO设计尾款！");