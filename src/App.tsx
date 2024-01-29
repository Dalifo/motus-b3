import './App.css';
import Game from 'src/components/Game.tsx';
import GameProvider from 'src/contexts/GameProvider.tsx';

const App = () => (
  <div className="container mx-auto flex flex-col items-center">
    <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

    <GameProvider>
      <Game />
    </GameProvider>
  </div>
);

export default App;
