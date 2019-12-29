import React, {useState, useEffect} from 'react';

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
    <div>
      Hello {name}
    </div>
  );
}



export default App;
