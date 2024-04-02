import { ReactComponent as DashboardIcon } from "../../assets/icons/DashboardIcon.svg";
import { ReactComponent as CustomerIcon } from "../../assets/icons/CustomersIcon.svg";
import { ReactComponent as OrdersIcon } from "../../assets/icons/OrdersIcon.svg";
import { ReactComponent as ProductsIcon } from "../../assets/icons/ProductsIcon.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icons/TransactionsIcon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/MessageIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import { ReactComponent as SupportIcon } from "../../assets/icons/SupportIcon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/LogoutIcon.svg";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <ProductsIcon />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <OrdersIcon />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <CustomerIcon />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <TransactionsIcon />,
  },
  {
    key: "message",
    label: "Message",
    path: "/message",
    icon: <MessageIcon />,
  },
];
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <SupportIcon />,
  },
  {
    key: "logout",
    label: "Logout",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];
