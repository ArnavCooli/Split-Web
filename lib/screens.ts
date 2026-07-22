/** Real app screenshots, captured on iPhone 16 Pro (1206×2622). */
export const screens = {
  home: {
    src: "/screens/home.jpg",
    alt: "Split home screen showing a $540 total balance and recent activity",
  },
  scanEmpty: {
    src: "/screens/scan-empty.jpg",
    alt: "Split scan receipt screen prompting to point the camera at a receipt",
  },
  scanResult: {
    src: "/screens/scan-result.jpg",
    alt: "Split showing a Walgreens receipt itemized line by line",
  },
  expenseUsd: {
    src: "/screens/expense-usd.jpg",
    alt: "Split new expense split equally between two people",
  },
  expenseEur: {
    src: "/screens/expense-eur.jpg",
    alt: "Split new expense in euros with a live exchange rate",
  },
  settleUp: {
    src: "/screens/settle-up.jpg",
    alt: "Split settle up screen reducing the group to a single optimized payment",
  },
  group: {
    src: "/screens/group.jpg",
    alt: "Split Roommates group showing shared expenses and balances",
  },
} as const;

export type ScreenKey = keyof typeof screens;
