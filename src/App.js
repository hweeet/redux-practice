import './App.css';
import Counter from '../src/components/counter/Counter';
import CounterInput from '../src/components/counterInput/CounterInput';
import Colors from './components/colors/Colors';

function App() {
  return (
    <>
      <h1>
        Many Ways To Mess With State
      </h1>
      <main>
        <Counter />
        <CounterInput />
        <Colors />
      </main>
    </>
  );
}

export default App;
