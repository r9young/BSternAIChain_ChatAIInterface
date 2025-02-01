export const PRIMARY_LINKS = [
  {
    label: "Home",
    path: "/",
    id: "home",
  },
  {
    label: "My Wallet",
    path: "/my-wallet",
    id: "my-wallet",
  },
  {
    label: "BStern AI",
    path: "/bstern-ai",
    id: "bstern-ai",
    new: true,
  },
  {
    label: "Community",
    path: "/community",
    id: "community",
  },
] as const;

export const SECONDARY_LINKS = [
  {
    label: "Docs",
    path: "/docs",
    id: "docs",
  },
  {
    label: "FAQs",
    path: "/faqs",
    id: "faqs",
  },
  {
    label: "Settings",
    path: "/settings",
    id: "settings",
  },
] as const;
