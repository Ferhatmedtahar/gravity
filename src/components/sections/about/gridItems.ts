export type GridItemProps = {
  title: string;
  description: string;
  style?: string;
};
export const gridItems: GridItemProps[] = [
  {
    title: "~$100 Billion",
    description: "cumulative trading volume to date",
    style:
      "border-b sm:border-r md:border-b md:border-r border-hover sm:border-b-0",
  },
  {
    title: "0.8%",
    description: "of the global crypto spot trading volume",
    style:
      "border-b sm:border-b-0 btn-gradient md:border-b md:border-r border-hover",
  },
  {
    title: "~30",
    description: `Gravity Teammates (& growing)`,
    style:
      "border-b sm:border-r sm:border-t md:border-b md:border-r border-hover md:border-t-0",
  },
  {
    title: "25+",
    description: "leading global and local crypto exchanges",
    style:
      "border-b sm:border-t md:border-b border-hover md:border-t-0 sm:border-b-0",
  },
  {
    title: "2017",
    description: "start, crypto-natives",
    style:
      "border-b sm:border-r sm:border-t md:border-r border-hover md:border-t-0 sm:border-b-0",
  },
  {
    title: "1,200+",
    description: "crypto-assets pairs",
    style:
      "border-b sm:border-t md:border-r border-hover md:border-t-0 sm:border-b-0",
  },
  {
    title: "24/7",
    description: "liquidity",
    style:
      "border-b sm:border-r sm:border-t md:border-r border-hover md:border-t-0 sm:border-b-0",
  },
  {
    title: "5 billion+",
    description: "trades done to date",
    style: "sm:border-t md:border-t-0 border-hover",
  },
];
