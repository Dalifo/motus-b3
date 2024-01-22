import './App.css';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';
import { useEffect, useState } from 'react';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';
import { getAttemptResult } from 'src/helpers/gameHelper.ts';
import Message from 'src/components/Message.tsx';
import { getRandomWord } from 'src/api/wordApi.ts';
import { Message as MessageInterface, MessageType } from 'src/types/GameTypes.ts';
import Spinner from 'src/components/Spinner.tsx';
import { formatWord } from 'src/helpers/genericHelper.ts';

const App = () => {
  const [word, setWord] = useState('');
  const [attempts, setAttempts] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const [message, setMessage] = useState<MessageInterface|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    try {
      setLoading(true);
      const randomWord = await getRandomWord();
      const formattedWord = formatWord(randomWord[0].name);
      setWord(formattedWord);
      setAttempts([formattedWord.slice(0, 1)]);
    } catch (e: Error|any) {
      console.error(e);
      setMessage({
        type: MessageType.ERROR,
        content: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (character: string) => {
    setMessage(null);
    const copy = [...attempts];

    switch (character) {
      case '⌫':
        copy[attempts.length - 1] = copy[attempts.length - 1].slice(0, -1);
        break;
      case '⏎':
        return validAttempt();
      default:
        if (copy[attempts.length - 1].length === word.length) {
          return false;
        }

        copy[attempts.length - 1] = `${copy[attempts.length - 1]}${character}`;
        break;
    }

    setAttempts(copy);
  };

  const validAttempt = () => {
    const copy = [...attempts];

    if (copy[attempts.length - 1].length < word.length) {
      setMessage({
        type: MessageType.WARNING,
        content: "Votre mot n'est passez long",
      });
      return;
    }

    const attemptResult = getAttemptResult(copy[attempts.length - 1], word);
    setResults([...results, attemptResult.join('')]);

    if (copy[attempts.length - 1] === word) {
      setMessage({
        type: MessageType.SUCCESS,
        content: 'Vous avez gagné, Bravo !',
      });
      return;
    }

    if (attempts.length === NB_ATTEMPTS) {
      setMessage({
        type: MessageType.INFO,
        content: 'Dommage, vous avez perdu',
      });
      return;
    }

    setAttempts([...attempts, word.substring(0, 1)]);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

      {message && <Message message={message} />}

      <Grid
        length={word.length}
        attempts={attempts}
        results={results}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
