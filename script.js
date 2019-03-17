let playerScore=0;
let compScore=0;

const playerScore_span=document.getElementById('playerScore');
const compScore_span=document.getElementById('compScore');
const result_p=document.getElementById('res');
const r_div=document.getElementById('r');
const p_div=document.getElementById('p');
const s_div=document.getElementById('s');

function compC(){
  var choice=['p','r','s'];
  return choice[Math.floor(Math.random()*3)];
}

function toWord(ch){
  if(ch=='r')
    return "Rock";
  if(ch=='s')
    return "Scissor";
  return "Paper";
}

function win(choice,comp){
  playerScore++;
  playerScore_span.innerHTML=playerScore;
  result_p.innerHTML=`${toWord(choice)} beats ${toWord(comp)}. You win :)`;
  const choiceElement=document.getElementById(choice).classList;
  choiceElement.add('c_green');
  setTimeout(function(){ choiceElement.remove('c_green');}, 500);
}

function draw(choice,comp){
  result_p.innerHTML=`${toWord(choice)} equals ${toWord(comp)}. It's a draw.`;
  const choiceElement=document.getElementById(choice).classList;
  choiceElement.add('c_grey');
  setTimeout(function(){ choiceElement.remove('c_grey');}, 500);
}

function lose(choice,comp){
  compScore++;
  compScore_span.innerHTML=compScore;
  result_p.innerHTML=`${toWord(comp)} beats ${toWord(choice)}. You lose :(`;
  const choiceElement=document.getElementById(choice).classList;
  choiceElement.add('c_red');
  setTimeout(function() { choiceElement.remove('c_red');}, 500);
}

function game(choice){
  let comp=compC();
  switch(choice+comp){
    case 'rs':
    case 'pr':
    case 'sp':
      win(choice,comp);
      //console.log('win');
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(choice,comp);
      //console.log('draw');
      break;
    case 'sr':
    case 'rp':
    case 'ps':
        lose(choice,comp);
        //console.log('lose');
  }
}

function main(){
  r_div.addEventListener('click',function(){
    game('r');
  })
  p_div.addEventListener('click',function(){
    game('p');
  })
  s_div.addEventListener('click',function(){
    game('s');
  })
}

main();
