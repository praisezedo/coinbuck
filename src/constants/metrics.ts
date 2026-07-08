export type Metric = {
  value: string; // Changed to string to safely parse strings like "4.9" and transaction limits
  prefix?: string;
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "5-100k", prefix: "$", label: "Flexible Trade Limits" },
  { value: "500", suffix: "+", label: "Satisfied Traders" },
  { value: "100", prefix: "₦", suffix: "M+", label: "Processed Volume" },
  { value: "4.9", suffix: "/5", label: "Customer Rating" },
];