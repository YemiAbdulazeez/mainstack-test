export const mockUser = {
  name: "Olivier Jones",
  email: "olivierjones@gmail.com",
  initials: "OJ",
  avatar: "/icons/avi.svg", // Add this
};

export const mockWallet = {
  availableBalance: 120500.0,
  ledgerBalance: 0.0,
  totalPayout: 55080.0,
  totalRevenue: 175580.0,
  pendingPayout: 0.0,
};

export const mockTransactions = [
  {
    id: 1,
    title: "Psychology of Money",
    sub: "Roy Cash",
    status: "Successful",
    amount: 600.0,
    date: "Apr 03, 2022",
    type: "Store Transactions",
  },
  {
    id: 2,
    title: "Buy me a coffee",
    sub: "Jonathan Smart",
    status: "Successful",
    amount: 100.0,
    date: "Apr 02, 2022",
    type: "Get Tipped",
  },
  {
    id: 3,
    title: "How to build an online brand",
    sub: "Delvan Ludacris",
    status: "Pending",
    amount: 100.0,
    date: "Apr 02, 2022",
    type: "Store Transactions",
  },
  {
    id: 4,
    title: "Subscription Renewal",
    sub: "Netflix",
    status: "Failed",
    amount: 15.99,
    date: "Apr 01, 2022",
    type: "Chargebacks",
  },
  {
    id: 5,
    title: "Q1 Cashback Bonus",
    sub: "Platform Reward",
    status: "Successful",
    amount: 50.0,
    date: "Mar 30, 2022",
    type: "Cashbacks",
  },
  {
    id: 6,
    title: "Affiliate Commission",
    sub: "Marketing Team",
    status: "Successful",
    amount: 750.0,
    date: "Mar 29, 2022",
    type: "Refer & Earn",
  },
  {
    id: 7,
    title: "Withdrawal to Bank",
    sub: "Personal Bank",
    status: "Successful",
    amount: -2000.0,
    date: "Mar 28, 2022",
    type: "Withdrawals",
  },
];
export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: "/icons/home.svg",
  },
  {
    name: "Analytics",
    link: "/analytics",
    icon: "/icons/analytics.svg",
  },
  {
    name: "Revenue",
    link: "/revenue",
    active: true,
    icon: "/icons/revenue.svg",
  },
  {
    name: "CRM",
    link: "/crm",
    icon: "/icons/crm.svg",
  },
];

export const sidebarApps = [
  {
    name: "Link in Bio",
    icon: "/icons/link-in-bio.svg",
    color: "text-red-500",
    active: true,
  },
  {
    name: "Store",
    icon: "/icons/store.svg",
    color: "text-green-500",
    active: false,
  },
  {
    name: "Media Kit",
    icon: "/icons/media-kit.svg",
    color: "text-yellow-500",
    active: false,
  },
  {
    name: "Invoicing",
    icon: "/icons/invoicing.svg",
    color: "text-purple-600",
    active: false,
  },
  
];

export const apps = [
  {
    name: "Link in Bio",
    description: "Manage your Link in Bio",
    color: "bg-gradient-to-br from-purple-400 to-red-500",
    active: true,
    icon: "/icons/link-in-bio.svg",
  },
  {
    name: "Store",
    description: "Manage your Store activities",
    color: "bg-gradient-to-br from-green-400 to-yellow-500",
    active: false,
    icon: "/icons/store.svg",
  },
  {
    name: "Media Kit",
    description: "Manage your Media Kit",
    color: "bg-gradient-to-br from-teal-400 to-blue-500",
    active: false,
    icon: "/icons/media-kit.svg",
  },
  {
    name: "Invoicing",
    description: "Manage your Invoices",
    color: "bg-gradient-to-br from-pink-400 to-indigo-500",
    active: false,
    icon: "/icons/invoicing.svg",
  },
  {
    name: "Bookings",
    description: "Manage your Bookings",
    color: "bg-gradient-to-br from-cyan-400 to-blue-600",
    active: false,
    icon: "/icons/booking-color.png",
  },
];

// Add header action icons
export const headerIcons = {
  notification: "/icons/notification.svg",
  help: "/icons/help.svg",
  apps: "/icons/apps.svg",
  chevronDown: "/icons/chevron-down.svg",
  menu: "/icons/menu.svg",
  close: "/icons/close.svg",
};
