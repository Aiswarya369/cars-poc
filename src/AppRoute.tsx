import React, { FC, Suspense } from "react";
import { Result, Button, Spin } from 'antd';
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import AppLayout from "./components/AppLayout";
// import ScrollToTop from '../src/helpers/ScrollToTop';

const AppRoute: FC = () => {

  return(
  <BrowserRouter>
  {/* <ScrollToTop> */}
    <Switch>
      {PrivateRoutes.map((route:any, index:any) => {
        const { Component } = route;
        return (
          <Route key={index} {...route}>
            <AppLayout {...route}>
              <Suspense fallback={<span style={{display:"flex",justifyContent: "center" }}><Spin/></span>}>
                <Component />
              </Suspense>
            </AppLayout>
          </Route>
        );
      })}
      ;
      <Route>
        <Suspense fallback={<span style={{display:"flex",justifyContent: "center" }}><Spin/></span>}>
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"><NavLink to="/">Back to Dashboard</NavLink></Button>}
          />
        </Suspense>
      </Route>
    </Switch>
    {/* </ScrollToTop> */}
  </BrowserRouter>
)};

export default AppRoute;
