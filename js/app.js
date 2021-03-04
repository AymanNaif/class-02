'use strict';
let score=0;

let yourname= prompt('whats your name ?');
alert('hello '+yourname );

confirm('here we goooo , with guessing game !');
//q1
let right='YES'.toLowerCase();
let correct='Y'.toLowerCase();

function questionOne(){

  let MyName=prompt('is my name Ayman ?').toLowerCase();

  if(MyName===right) {
    alert('wooohoooo , that is correct my name is Ayman Naif ');
    score=score+1;

  }
  else if (MyName===correct)
  {
    alert('wooohoooo , that is correct my name is Ayman Naif');
    score=score+1;
  }
  else{
    alert('naaah , not good answer !! try again');
  }
}
questionOne();


//q2
function questionTwo(){
  let age=prompt('is my age 25?').toLowerCase();

  if(age===right) {
    alert('wooohoooo , that is correct my age is 25 ');
    score=score+1;

  }
  else if (age===correct)
  {
    alert('wooohoooo , that is correct my age is 25 ');
    score=score+1;
  }
  else{
    alert('naaah , not good answer !! try again');
  }
}
questionTwo();

//q3
function questionThree(){
  let live=prompt('do I live in Jordan?').toLowerCase();

  if(live===right) {
    alert('wooohoooo , that is correct I live in Jordan');
    score=score+1;

  }
  else if (live===correct)
  {
    alert('wooohoooo , that is correct I live in Jordan');
    score=score+1;
  }
  else{
    alert('naaah , not good answer !! try again');
  }
}
questionThree();

//q4
function questionFour(){
  let learn=prompt('am I learning software devlopment?').toLowerCase();

  if(learn===right) {
    alert('wooohoooo , that is correct Im Learning software devlopment');
    score=score+1;

  }
  else if (learn===correct)
  {
    alert('wooohoooo , that is correct Im Learning software devlopment');
    score=score+1;
  }
  else{
    alert('naaah , not good answer !! try again');
  }
}
questionFour();

//q5
function questionFive(){
  let study=prompt('did I study at Applied Al Balqaa Univirsity?').toLowerCase();

  if(study===right) {
    alert('wooohoooo , that is correct yea I did');
    score=score+1;


  }else if (study===correct)
  {
    alert('wooohoooo , that is correct yea I did');
    score=score+1;
  }

  else{
    alert('naaah , not good answer !! try again');
  }

  alert('well done '+yourname);
}
questionFive();

//q6
function questionSix(){
  let QustionsAnswers=28;
  let answer=parseInt(prompt('How many days of feb month?'));

  for(let i=0;i<3;i++){
    if (answer===parseInt(QustionsAnswers)) {
      alert('Amazing !!! good answer');
      score=score+1;
      break;
    }else if (answer<parseInt(QustionsAnswers)){
      answer=parseInt(prompt('too low , try agin .. how many days of feb month ?'));
    }else {
      answer=parseInt(prompt('too high , try agin .. how many days of feb month ?'));
    }
  }
  alert('the answer is 28 days');
}
questionSix();



//q7
function questionSeven(){
  let series=['Prison Break','Dark','Peaky Blinder','a casa de papel','When they see us','Ganga star of berlin','Gangs of landon'];
  let goodanswer=0;

  let userright=true;

  let qanswer= prompt('write the name of my best series:');
  while(goodanswer < 6){
    for (let i=0; i< series.length; i++){
      if(qanswer=== series[i]){
        alert('Amazing !! , this one of my favourit sereis');
        goodanswer=6;
        score=score+1;
        userright=false;
        break;
      }
    }
    goodanswer++;
    if( goodanswer < 6 && userright===true) {
      qanswer= prompt('its good series , but not of my favourit \n pleaes try again :');
    }
    if(goodanswer > 6 && userright===true){
      alert('You have lost all of your attempts , my favourite sereies are: Prison Break, Dark,Peaky Blinder, a casa de papel, When they see us,Ganga star of berlin,Gangs of landon');
    }
  }
}
questionSeven();
alert('well done '+yourname+' \nyour score is '+score+'/7');
