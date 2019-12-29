import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Navigation from './components/Navigation';

interface AppProps {

}

const App: React.FC<AppProps> = props => {

  const [name, setName] = useState<string>('');

  const getName = () => {
    let name = 'Michal';
    setName(name);
  }

  useEffect(() => {
    getName();
    console.log(props);
    //eslint-disable-next-line
  }, [])

  

  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
  );
}



export default App;
