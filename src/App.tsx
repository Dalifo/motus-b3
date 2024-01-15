import './App.css';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';

const WORD = 'CASTOR';
const ATTEMPTS: string[] = [];
ATTEMPTS.push(WORD.substring(0, 1));

const App = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

    <Grid
      length={WORD.length}
      attempts={ATTEMPTS}
    />
    <Keyboard />
  </div>
);

export default App;
