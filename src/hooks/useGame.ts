import { useContext, useEffect } from 'react';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { getRandomWord } from 'src/api/wordApi.ts';
import { formatWord } from 'src/helpers/genericHelper.ts';
import { GameAction } from 'src/contexts/GameReducer.ts';
import { ApiWord } from 'src/types/GameTypes.ts';
import useFetch from 'src/hooks/useFetch.ts';

const useGame = () => {
  const [, dispatch] = useContext(GameContext);
  const { query, loading, error } = useFetch<ApiWord[]>();

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    const randomWord = await query(getRandomWord);

    if (randomWord) {
      const formattedWord = formatWord(randomWord[0].name);

      dispatch({
        type: GameAction.START_GAME,
        payload: {
          word: formattedWord,
          attempts: [formattedWord.slice(0, 1)],
        },
      });
    }
  };

  return {
    loading,
    error,
  };
};

export default useGame;
