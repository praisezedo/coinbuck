import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface TradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const coins = [
  "USDT",
  "BTC",
  "ETH",
  "SOL",
  "BNB",
  "TRX",
  "DOGE",
  "XRP",
  "Other",
];

export default function TradeModal({
  isOpen,
  onClose,
}: TradeModalProps) {
  const [coin, setCoin] = useState("");
  const [customCoin, setCustomCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleTrade = () => {
    const numericAmount = Number(amount);

    if (!coin) {
      setError("Please select a cryptocurrency.");
      return;
    }

    if (!amount) {
      setError("Please enter an amount.");
      return;
    }

    if (numericAmount < 5) {
      setError("Minimum trade amount is $5.");
      return;
    }

    if (numericAmount > 100000) {
      setError("Maximum trade amount is $100,000.");
      return;
    }

    const finalCoin =
      coin === "Other" ? customCoin.trim() : coin;

    if (!finalCoin) {
      setError("Please enter the cryptocurrency name.");
      return;
    }

    const message = encodeURIComponent(
      `Hello CoinBuck 🤎

I want to trade $${numericAmount.toLocaleString()} worth of ${finalCoin}.

Please assist me with the transaction.`
    );

    window.open(
      `https://wa.me/2349094985193?text=${message}`,
      "_blank"
    );

    onClose();

    setCoin("");
    setCustomCoin("");
    setAmount("");
    setError("");
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-4xl border border-[#D4AF37]/20 bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5E1]"
        >
          <X size={18} />
        </button>

        <p className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#FFF5E1] px-4 py-2 text-sm font-medium text-[#6A3B19]">
          Start Trading
        </p>

        <h2 className="mt-4 text-3xl font-black text-[#2B1207]">
          Tell us what you want to trade
        </h2>

        <p className="mt-3 text-[#6F5A4A]">
          CoinBuck supports trades from
          <span className="font-bold text-[#2B1207]">
            {" "}
            $5
          </span>{" "}
          to
          <span className="font-bold text-[#2B1207]">
            {" "}
            $100,000
          </span>
          .
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#2B1207]">
              Cryptocurrency
            </label>

            <select
              value={coin}
              onChange={(e) => {
                setCoin(e.target.value);
                setError("");
              }}
              className="w-full rounded-2xl border border-[#E8D7B8] px-4 py-3 outline-none focus:border-[#D4AF37]"
            >
              <option value="">Select a coin</option>

              {coins.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {coin === "Other" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2B1207]">
                Coin Name
              </label>

              <input
                value={customCoin}
                onChange={(e) => setCustomCoin(e.target.value)}
                placeholder="Enter coin name"
                className="w-full rounded-2xl border border-[#E8D7B8] px-4 py-3 outline-none focus:border-[#D4AF37]"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#2B1207]">
              Amount (USD)
            </label>

            <input
              type="number"
              min={5}
              max={100000}
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setError("");
              }}
              placeholder="e.g. 500"
              className="w-full rounded-2xl border border-[#E8D7B8] px-4 py-3 outline-none focus:border-[#D4AF37]"
            />
            <p className="mt-2 text-xs text-[#8B7355]">
                Allowed range: $5 – $100,000
                </p>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            onClick={handleTrade}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2B1207] px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
          >
            Trade Now
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}