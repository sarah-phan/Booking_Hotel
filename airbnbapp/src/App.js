import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { renderRouteHome } from "./routes";
import { renderRoutesAdmin } from "./routes";
import Loading from "./components/loading";
import PageNotFound from "./container/PageNotFound";

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense history={history} fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          {renderRoutesAdmin()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
