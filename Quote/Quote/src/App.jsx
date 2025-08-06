
import Quotes from './Components/Quote/Quote';
import Data from './Components/Data/Data';

function App() {
  return (
    <>
      {
        Data.map((item) => (
          <Quotes  quote={item.quote} author={item.author} />
        ))
      }
    </>
  );
}

export default App;
