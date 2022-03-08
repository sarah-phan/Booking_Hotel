import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Suspense } from 'react';
import { renderRouteHome } from './routes';
import Loading from './components/loading';
import PageNotFound from './container/PageNotFound';
import DangKy from './container/HomeTemplate/DangKy';

export const history = createBrowserHistory()

function App() {
  return (
    <Suspense history={history} fallback={<Loading/>}>
      <BrowserRouter>
        <Switch>
          <Route path='/dang-ky' component={DangKy}/>
          {renderRouteHome()}
          <Route path='' component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
