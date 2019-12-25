# react-router-regex
Created with CodeSandbox

Use different components for numeric and non-numeric params in route:

```js
        <Switch>
          <Route path="/:id(\d+)" component={DemoNum} exact={false} />
          <Route path="/" component={Demo} exact={false} />
        </Switch>
```
