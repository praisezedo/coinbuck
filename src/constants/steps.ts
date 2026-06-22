import {
  MessageCircle,
  Coins,
  Wallet,
  ShieldCheck,
  Landmark,
} from "lucide-react";

type Step = {
    icon: typeof MessageCircle | typeof Coins | typeof Wallet | typeof ShieldCheck | typeof Landmark;
    title: string;
    text: string;
    note: string;
}

export const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Message Us on WhatsApp",
    text: "Open a conversation with a real CoinBuck agent in seconds. No bots, no forms, no waiting.",
    note: "Takes less than 10 seconds",
  },
  {
    icon: Coins,
    title: "Tell Us What You Want",
    text: "Let us know your coin and amount — USDT, BTC, ETH, and more. We give you a live rate upfront.",
    note: "Real-time rate disclosed upfront",
  },
  {
    icon: Wallet,
    title: "Send Your Crypto",
    text: "We give you a secure, verified wallet address. Send from TrustWallet, Binance, Bybit or anywhere.",
    note: "Secure verified address",
  },
  {
    icon: ShieldCheck,
    title: "We Confirm On-Chain",
    text: "Our team verifies your transaction on the blockchain and sends confirmation quickly.",
    note: "Blockchain verified",
  },
  {
    icon: Landmark,
    title: "Receive Your Money",
    text: "Naira lands straight in your bank account — GTBank, Zenith, Access, Opay, Palmpay.",
    note: "Direct bank payout",
  },
];