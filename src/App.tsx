import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";
import { useEffect } from "react";

const App = () => {
  const character = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyA":
      case "ArrowLeft":
        character.moveLeft();
        break;

      case "KeyW":
      case "ArrowUp":
        character.moveUp();
        break;

      case "KeyD":
      case "ArrowRight":
        character.moveRight();
        break;

      case "KeyS":
      case "ArrowDown":
        character.moveDown();
        break;
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={character.x} y={character.y} side={character.side} />
      </C.Map>
    </C.Container>
  );
};

export default App;
