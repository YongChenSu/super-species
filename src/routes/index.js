import React, { Suspense, lazy } from "react";
import { HashRouter as Switch, Route } from "react-router-dom";

const BoardPage = lazy(() => import("../pages/BoardPage"));
const MessagePage = lazy(() => import("../pages/MessagePage"));
const UploadImgPage = lazy(() => import("../pages/UploadImgPage"));

const Routes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={BoardPage} />
        <Route path="/post/48">
          <MessagePage />
        </Route>
        <Route path="/post/:id">
          <MessagePage />
        </Route>
        <Route path="/upload-img">
          <UploadImgPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
