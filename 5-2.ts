//TODO: 다음 타입과 클래스들을 구현하세요

interface PaymentResult {
    success: boolean;
    transactionId?: string;
    error?: string;
}

abstract class PaymentProcessor {
    //TODO: 추상 클래스 구현
    abstract process(amount : number, currency: string) :Promise<PaymentResult>;
}

class CreditCardProcessor extends PaymentProcessor {
    //TODO
    async process(amount : number, currency: string) :Promise<PaymentResult> {
        console.log("신용카드로 결제 중 금액 : " + amount + " 통화 : " + currency);

        //await new Promise(resolve => setTimeout(resolve, 500));
        return {success: true,
        transactionId: `${Date.now()}`,};
    }
}

class PayPalProcessor extends PaymentProcessor {
    //TODO
    async process(amount : number, currency: string) :Promise<PaymentResult> {
        console.log("페이팔로 결제 중 금액 : " + amount + " 통화 : " + currency);
        return {success: true};
    }
}


class CryptoProcessor extends PaymentProcessor {
    //TODO
    async process(amount : number, currency: string) :Promise<PaymentResult> {
        console.log("코인으로 결제 중 금액 : " + amount + "통화 : " + currency);
        return {success: false};
    }
}

// 팩토리
class PaymentFactory {
    static create(type: "credit" | "paypal" | "crypto"): PaymentProcessor {
        //TODO
        switch (type) {
            case "credit":
                return new CreditCardProcessor();
            case "paypal":
                return new PayPalProcessor();
            case "crypto":
                return new CryptoProcessor();
            default:
                throw new Error(`Unknown type ${type}`);

        }
    }
}

// 테스트
async function main() {
    try {
        console.log("결제 테스트 시작")
        const creditProcessor = PaymentFactory.create("credit");
        const result = await creditProcessor.process(100, "USD");
        console.log("실행 결과 : " ,result);
    }catch(err) {
        console.log(err);
    }
}

main()
