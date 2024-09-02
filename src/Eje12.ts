console.log('Ejercicio 12');

type Direction = 'up'| 'down' | 'left' | 'right';


function move(direction: Direction){
    console.log('Moviendo ', direction);
}

move('up');