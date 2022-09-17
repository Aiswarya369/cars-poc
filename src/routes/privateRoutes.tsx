import { lazy } from "react";

const Admin = lazy(() => import("../pages/Admin"));
const Ammunitions = lazy(() => import("../pages/Ammunitions"));
const Armouries = lazy(() => import("../pages/Armouries"));
const Map = lazy(() => import("../pages/Map"));
const Personnel = lazy(() => import("../pages/Personnel"));
const Reports = lazy(() => import("../pages/Reports"));
const Transfers = lazy(() => import("../pages/Transfers"));
const Weapons = lazy(() => import("../pages/Weapons"));

export default [
  {
    exact: true,
    name: "Map",
    path: "/",
    Component: Map,
  },
  {
    exact: true,
    name: "Admin",
    path: "/admin",
    Component: Admin,
  },
  {
    exact: true,
    name: "Armouries",
    path: "/armouries",
    Component: Armouries,
  },
  {
    exact: true,
    name: "Ammunitions",
    path: "/ammunitions",
    Component: Ammunitions,
  },
  {
    exact: true,
    name: "Personnel",
    path: "/personnel",
    Component: Personnel,
  },
  {
    exact: true,
    name: "Reports",
    path: "/reports",
    Component: Reports,
  },
  {
    exact: true,
    name: "Transfers",
    path: "/transfers",
    Component: Transfers,
  },
  {
    exact: true,
    name: "Weapons",
    path: "/weapons",
    Component: Weapons,
  },
];
