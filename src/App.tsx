import './App.css';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';

const App = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

    <Grid />
    <Keyboard />
  </div>
);

export default App;
