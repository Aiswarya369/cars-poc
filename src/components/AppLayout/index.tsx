import React, { memo, useState } from "react";
import { Layout, Avatar, Menu, Dropdown, Button } from "antd";
import { NavLink } from "react-router-dom";

import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  ApartmentOutlined,
  DollarOutlined,
  RetweetOutlined,
  ShoppingOutlined,
  CheckCircleOutlined,
  GiftOutlined,
  CheckSquareOutlined,
  BankOutlined,
  SolutionOutlined,
  TransactionOutlined,
  ApiOutlined,
  IdcardOutlined,
  TrophyOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import styles from "./AppLayout.module.css";
import Search from "antd/lib/input/Search";
// import { Auth } from "aws-amplify";


const { Header, Sider, Content } = Layout;

function AppLayout(props: any) {
  let url_string = window.location.href;
  let url = new URL(url_string);
  let searchValue: any = "";
  searchValue = url.searchParams.get("customer");

  const { children, path = "" } = props;
  let selectedMenuItems: string[] = [""];
  switch (path) {
    case "/":
      selectedMenuItems[0] = "Map";
      break;
    case "/weapons":
      selectedMenuItems[0] = "Weapons";
      break;
    case "/ammunitions":
      selectedMenuItems[0] = "Ammunitions";
      break;
    case "/armouries":
      selectedMenuItems[0] = "Armouries";
      break;
    case "/personnel":
      selectedMenuItems[0] = "Personnel";
      break;
    case "/transfers":
      selectedMenuItems[0] = "Transfers";
      break;
    case "reports":
      selectedMenuItems[0] = "TReports";
      break;
    case "/admin":
      selectedMenuItems[0] = "Admin";
      break;
  }
  const [collapsed, setCollapsed] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const toggle = () => {
    setCollapsed(!collapsed);
    localStorage.setItem("collapsed", JSON.stringify(collapsed));
  };

  //   const signOut = async () => {
  //     try {
  //       await Auth.signOut();
  //       localStorage.clear();
  //       window.location.href = "/";
  //     } catch (error) {
  //       console.log("error signing out: ", error);
  //     }
  //   };
  const avatarmenu = (
    <Menu>
      <Menu.Item key="changepassword">
        <NavLink to="/changepassword">Change Password</NavLink>
      </Menu.Item>
      <Menu.Item key="signout">
        {/* <Button style={{ width: "100%" }} onClick={signOut}>
          Sign Out
        </Button> */}
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        style={{ zIndex: 999, backgroundColor: "white" }}
        width={250}
        className="site-layout-background"
        trigger={
          <>
            <div style={{ backgroundColor: "white", color: "black" }}>
              {collapsed ? "<" : ">"}
            </div>
          </>
        }
      >
        {/* <div className="logo" style={{ fontSize: "24px", fontWeight: 600 }}>
          WAM DB
        </div> */}
        <Menu selectedKeys={selectedMenuItems} theme="light" mode="inline">
          <Menu.Item key="Map" icon={<DashboardOutlined />}>
            <NavLink to="/">Map</NavLink>
          </Menu.Item>
          <Menu.Item key="Weapons" icon={<ApartmentOutlined />}>
            <NavLink to="/weapons">Weapons</NavLink>
          </Menu.Item>
          <Menu.Item key="Ammunitions" icon={<IdcardOutlined />}>
            <NavLink to="/ammunitions">Ammunitions</NavLink>
          </Menu.Item>
          <Menu.Item key="Armouries" icon={<SolutionOutlined />}>
            <NavLink to="/armouries">Armouries</NavLink>
          </Menu.Item>
          <Menu.Item key="Personnel" icon={<TeamOutlined />}>
            <NavLink to="/personnel">Customers</NavLink>
          </Menu.Item>
          <Menu.Item key="Transfers" icon={<DollarOutlined />}>
            <NavLink to="/transfers">Transfers</NavLink>
          </Menu.Item>
          <Menu.Item key="Reports" icon={<RetweetOutlined />}>
            <NavLink to="/reports">Reports</NavLink>
          </Menu.Item>
          <Menu.Item key="Admin" icon={<TrophyOutlined />}>
            <NavLink to="/admin">Admin</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ overflowY: "scroll", maxHeight: "100vh" }}>
        <Content
          className={`site-layout-background ${styles.content_container}`}
        >
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default memo(AppLayout);
