import { Link, useLocation} from "react-router-dom";
import MaskedText from "../Components/MaskedText/MaskedText";
import LetterButtons from "../Components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../Components/HangMan/HangMan";

function PlayGame() {

//   const [searchParams] = useSearchParams();
//   console.log(searchParams.get("text"));

//   const { text } = useParams();

  const {state} =  useLocation();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  function handleLetterClick(letter){

    if(state?.wordSelected?.toUpperCase().includes(letter)){
      console.log("Correct");
    } else {
      console.log("Incorrect");
      setStep(step + 1);
    }

    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>Play Game </h1>

      {state?.wordSelected && (
        <>
          <MaskedText text={state?.wordSelected} guessedLetters={guessedLetters}/>

          <div>
              <LetterButtons text={state?.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
          </div>

          <div>
              <HangMan step={step} />
          </div>

        </>
      )}

      <Link to="/" className="text-black-400">Home</Link>
      <Link to="/start" className="text-blue-400">Start Game link</Link>

    </>
  );
}

export default PlayGame;