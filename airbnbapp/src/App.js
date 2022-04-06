import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { renderRouteHome } from "./routes";
import { renderRoutesAdmin } from "./routes";
import withAuthen from "./hoc/withAuth";

import Loading from "./components/loading";
import PageNotFound from "./container/PageNotFound";
import TrangChu from "./container/HomeTemplate/TrangChu";
import DangKy from "./container/HomeTemplate/_components/DangKy";
export const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={withAuthen(TrangChu)}/>
          <Route path="/dang-ky" component={DangKy} />
          {renderRouteHome()}
          {renderRoutesAdmin()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
