function Elem(teg){
  this.teg = teg;
  var e = document.createElement(this.teg);
  this.documentInsert = function(parr){
     return this.elem = parr.appendChild(e);
  }
}

function setChess(i, j, fig) {
  chessBoard.fig[j] = new Elem('img');
  chessBoard.fig[j].documentInsert(chessBoard.cell[i].elem.children[j]);
  chessBoard.fig[j].elem.setAttribute('alt', fig.name);
  if ((i==0)||(i==1)) {
    chessBoard.fig[j].elem.setAttribute('src', fig.src_b)
  } else if ((i==6)||(i==7)) {
	chessBoard.fig[j].elem.setAttribute('src', fig.src_w);
  }
}

var chessBoard = {
  cell: [],
  col: [],
  fig: [],
  lines: ['8', '7', '6', '5', '4', '3', '2', '1', ' '],
  columns: [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}

var figure = {
  k: {
  	name: 'King',
  	src_w: 'img/white-king.png',
  	src_b: 'img/black-king.png'
  },
  q: {
    name: 'Queen',
    src_w: 'img/white-queen.png',
    src_b: 'img/black-queen.png'
  },
  r: {
  	name: 'Rook',
  	src_w: 'img/white-rook.png',
  	src_b: 'img/black-rook.png'
  },
  e: {
  	name: 'Elephant',
  	src_w: 'img/white-elephant.png',
  	src_b: 'img/black-elephant.png'
  },
  h: {
  	name: 'Horse',
  	src_w: 'img/white-horse.png',
  	src_b: 'img/black-horse.png'
  },
  p: {
  	name: 'Pawn',
  	src_w: 'img/white-pawn.png',
  	src_b: 'img/black-pawn.png'
  }
}

var tableChess = new Elem('table');
tableChess.documentInsert(document.body);
tableChess.elem.classList = 'table-chessBoard';

for (var i=0; i<9; i++) {
  chessBoard.cell[i] = new Elem('tr');
  chessBoard.cell[i].documentInsert(tableChess.elem);
    for (var j=0; j<9; j++) {
      chessBoard.col[j] = new Elem('td');
      chessBoard.col[j].documentInsert(chessBoard.cell[i].elem);
	  chessBoard.col[j].elem.classList = 'cell-field';

	  if ((i==1 && j!=0) || (i==6 && j!=0)) setChess(i, j, figure.p);
      if (((i==0 && j==2)||(i==0 && j==7)) || ((i==7 && j==2)||(i==7 && j==7))) setChess(i, j, figure.h);
      if (((i==0 && j==3)||(i==0 && j==6)) || ((i==7 && j==3)||(i==7 && j==6))) setChess(i, j, figure.e);
      if (((i==7 && j==1)||(i==7 && j==8)) || ((i==0 && j==1)||(i==0 && j==8))) setChess(i, j, figure.r);
      if ((i==0 && j==4) || (i==7 && j==4)) setChess(i, j, figure.q);
      if ((i==0 && j==5) || (i==7 && j==5)) setChess(i, j, figure.k);

	  if (i==8) {
	    chessBoard.col[j].elem.innerHTML = chessBoard.columns[j];
        chessBoard.col[j].elem.classList.add('brim-columns');
      }
      if ((i!=8 && i%2==0 && j%2==0 && j!=0)||(i%2!=0 && j%2!=0 && j!=0)) chessBoard.col[j].elem.classList.add('black');
    }
  chessBoard.col[0].elem.innerHTML = chessBoard.lines[i];
  chessBoard.col[0].elem.classList.add('brim-lines');
}
