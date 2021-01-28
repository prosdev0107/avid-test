import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import { ReviewContext } from 'context/reviewContext';
import Home from 'pages/home';
import Reviews from 'pages/reviews';

const history = createBrowserHistory();

function App() {
  const { requestReviews } = React.useContext(ReviewContext);

  React.useEffect(() => {
    requestReviews();
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/reviews/:id" component={Reviews} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
