import * as React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";

import "./styles.css";

const Renderer = (props: any) => (
  <div>
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  </div>
);

const DemoNum = (props: RouteComponentProps<{ id: string }>) => (
  <div>
    <h1>DemoNum</h1>
    <Renderer {...props} />
  </div>
);

const Demo = (props: RouteComponentProps) => (
  <div>
    <h1>Demo</h1>
    <Renderer {...props} />
  </div>
);

function App() {
  return (
    <>
      <p>
        Use different components for numeric and non-numeric params in route:
      </p>
      <pre>
        <code>/123</code>
      </pre>{" "}
      should render DemoNum component.
      <pre>
        <code>/abc</code>
      </pre>
      should render Demo component.
      <Router>
        <Switch>
          <Route path="/:id(\d+)" component={DemoNum} exact={false} />
          <Route path="/" component={Demo} exact={false} />
        </Switch>
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
