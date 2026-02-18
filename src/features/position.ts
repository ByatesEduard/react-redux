type MOVE_LEFT = { type: 'position/MOVE_LEFT'; }
type MOVE_RIGHT = { type: 'position/MOVE_RIGHT'; }
type MOVE_UP = { type: 'position/MOVE_UP'; }
type MOVE_DOWN = { type: 'position/MOVE_DOWN'; }

type Action = MOVE_LEFT | MOVE_RIGHT | MOVE_UP | MOVE_DOWN;


const moveLeft = (): MOVE_LEFT => ({ type: 'position/MOVE_LEFT' });
const moveRight = (): MOVE_RIGHT => ({ type: 'position/MOVE_RIGHT' });
const moveUp = (): MOVE_UP => ({ type: 'position/MOVE_UP' });
const moveDown = (): MOVE_DOWN => ({ type: 'position/MOVE_DOWN' });

type Position = {
  x: number;
  y: number;
}

const startPosition = { x: 0, y: 0 };

const positionReducer = (position: Position = startPosition, action: Action): Position => {
  switch (action.type) {
    case 'position/MOVE_LEFT':
      return {...position, x: position.x - 1 };
    case 'position/MOVE_RIGHT':
      return {...position, x: position.x + 1 };
    case 'position/MOVE_UP':
      return {...position, y: position.y - 1 };
    case 'position/MOVE_DOWN':
      return {...position, y: position.y + 1 };
    default:
      return position;
  }
};

export default positionReducer;
export const actions = { moveLeft, moveRight, moveUp, moveDown };
