const board=[];
let player="X";
let end=0;

function playerWins()
{
    const winConds = [[board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]]];
    return winConds.some(cond => cond.every(cell=>cell===player));
}
function isBoardFull()
{
    return board.every(row => row.every(cell=>cell!==""));
}

for (let i=0; i<3; i++)
{
    board[i]=[];
    for (let j=0; j<3; j++)
        board[i][j]="";
}

if (end===0)
{
    document.getElementById("message").textContent = `${player}'s Turn!`;
    document.querySelectorAll(".box").forEach(function (box){
        box.addEventListener("click",function (){
            box.textContent = player;
            let row = parseInt(box.id[1]);
            let col = parseInt(box.id[2]);
            board[row][col] = player;
            if (playerWins())
            {
                document.getElementById("message").textContent=`${player} Wins!!!`;
                end=1;
            }
            if (isBoardFull() && end===0)
            {
                document.getElementById("message").textContent=`It's a Draw!!!`;
                end=1;
            }
            if (end===0)
            {
                player = player==="X" ? "O" : "X";
                document.getElementById("message").textContent = `${player}'s Turn!`;
            }
        });
    });
}