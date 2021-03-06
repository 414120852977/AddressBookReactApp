import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import AddressBookForm from '../src/component/addressbook-form/addressbook-form';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path = "">
          <AddressBookForm />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
