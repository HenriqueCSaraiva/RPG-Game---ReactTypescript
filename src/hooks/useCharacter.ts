import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/mapSpots";

export const useCharacter = () => {
  const [position, setPosition] = useState({ x: 3, y: 4 });
  const [side, setSide] = useState<CharacterSides>("down");

  const moveLeft = () => {
    setPosition((position) => ({
      x: canMove(position.x - 1, position.y) ? position.x - 1 : position.x,
      y: position.y,
    }));

    setSide("left");
  };

  const moveRight = () => {
    setPosition((position) => ({
      x: canMove(position.x + 1, position.y) ? position.x + 1 : position.x,
      y: position.y,
    }));

    setSide("right");
  };

  const moveDown = () => {
    setPosition((position) => ({
      x: position.x,
      y: canMove(position.x, position.y + 1) ? position.y + 1 : position.y,
    }));
    setSide("down");
  };

  const moveUp = () => {
    if (canMove(position.x, position.y - 1)) {
      setPosition((position) => ({
        x: position.x,
        y: canMove(position.x, position.y - 1) ? position.y - 1 : position.y,
      }));
    }
    setSide("up");
  };

  const canMove = (x: number, y: number) => {
    if (x < 0 || y < 0) return false;

    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined) {
      if (mapSpots[y][x] === 1) {
        return true;
      }
    }

    return false;
  };

  return {
    x: position.x,
    y: position.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};
