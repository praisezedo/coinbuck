type Metric = {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

export const metrics: Metric[] = [
  { value: 500, suffix: "+", label: "Satisfied Traders" },
  { value: 100, prefix: "₦", suffix: "M+", label: "Processed Volume" },
  { value: 4.9, suffix: "/5", label: "Customer Rating" },
  { value: 24, suffix: "hrs", label: "Payout Support" },
];