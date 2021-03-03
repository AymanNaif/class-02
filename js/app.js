'use strict';

let yourname= prompt('whats your name ?');
alert('hello '+yourname );

confirm('here we goooo , with guessing game !');
let MyName=prompt('is my name Ayman ?').toLowerCase();
let right='YES'.toLowerCase();
let correct='Y'.toLowerCase();

if(MyName===right) {
  alert('wooohoooo , that is correct my name is Ayman Naif ');

}
else if (MyName===correct)
{
  alert('wooohoooo , that is correct my name is Ayman Naif');
}
else{
  alert('naaah , not good answer !! try again');
}

let age=prompt('is my age 25?').toLowerCase();

if(age===right) {
  alert('wooohoooo , that is correct my age is 25 ');

}
else if (age===correct)
{
  alert('wooohoooo , that is correct my age is 25 ');
}
else{
  alert('naaah , not good answer !! try again');
}

let live=prompt('do I live in Jordan?').toLowerCase();

if(live===right) {
  alert('wooohoooo , that is correct I live in Jordan');

}
else if (live===correct)
{
  alert('wooohoooo , that is correct I live in Jordan');
}
else{
  alert('naaah , not good answer !! try again');
}

let learn=prompt('am I learning software devlopment?').toLowerCase();

if(learn===right) {
  alert('wooohoooo , that is correct Im Learning software devlopment');

}
else if (learn===correct)
{
  alert('wooohoooo , that is correct Im Learning software devlopment');
}
else{
  alert('naaah , not good answer !! try again');
}

let study=prompt('did I study at Applied Al Balqaa Univirsity?').toLowerCase();

if(study===right) {
  alert('wooohoooo , that is correct yea I did');


}else if (study===correct)
{
  alert('wooohoooo , that is correct yea I did');
}
else{
  alert('naaah , not good answer !! try again');
}

alert('well done '+yourname);

let QustionsAnswers=[28,87,8,15,55,100];
let answer=parseInt(prompt('how many days of feb month ?'));

for(let i=0;i<3;i++){
  if (answer===parseInt(QustionsAnswers[0])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answer<parseInt(QustionsAnswers[0])){
    answer=parseInt(prompt('too low , try agin .. how many days of feb month ?'));
  }else {
    answer=parseInt(prompt('too high , try agin .. how many days of feb month ?'));
  }
}
alert('the answer is 28 days');

let answe =parseInt(prompt('guess number between 85-90'));

for(let i=0;i<3;i++){
  if (answe===parseInt(QustionsAnswers[1])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answe<parseInt(QustionsAnswers[1])){
    answe=parseInt(prompt('too low , try agin .. guess number between 85-90'));
  }else {
    answe=parseInt(prompt('too high , try agin .. guess number between 85-90'));
  }
}
alert('the answer is 87');


let answ =parseInt(prompt('guess number between 0-9'));

for(let i=0;i<3;i++){
  if (answ===parseInt(QustionsAnswers[2])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answ<parseInt(QustionsAnswers[2])){
    answ=parseInt(prompt('too low , try agin .. guess number between 0-9'));
  }else {
    answ=parseInt(prompt('too high , try agin .. guess number between 0-9'));
  }
}
alert('the answer is 8');


let ans =parseInt(prompt('guess number between 13-17'));

for(let i=0;i<3;i++){
  if (ans===parseInt(QustionsAnswers[3])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answ<parseInt(QustionsAnswers[3])){
    ans=parseInt(prompt('too low , try agin .. guess number between 13-17'));
  }else {
    ans=parseInt(prompt('too high , try agin .. guess number between 13-17'));
  }
}
alert('the answer is 15');


let an =parseInt(prompt('guess number between 50-60'));

for(let i=0;i<3;i++){
  if (an===parseInt(QustionsAnswers[4])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answ<parseInt(QustionsAnswers[4])){
    an=parseInt(prompt('too low , try agin .. guess number between 50-60'));
  }else {
    an=parseInt(prompt('too high , try agin .. guess number between 50-60'));
  }
}
alert('the answer is 55');


let a =parseInt(prompt('guess number between 90-100'));

for(let i=0;i<3;i++){
  if (a===parseInt(QustionsAnswers[5])) {
    alert('Amazing !!! good answer');
    break;
  }else if (answ<parseInt(QustionsAnswers[5])){
    a=parseInt(prompt('too low , try agin .. guess number between 90-100(hint : the highist number)'));
  }else {
    a=parseInt(prompt('too high , try agin .. guess number between 90-100(hint : the highist number)'));
  }
}
alert('the answer is 100');

alert('another game !! get ready ^_^ ');

let series=['Prison Break','Dark','Peaky Blinder','a casa de papel','When they see us','Ganga star of berlin','Gangs of landon'];
let goodanswer=0;
let score=0;
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
alert('well done '+yourname+' \nyour score is '+score+'/7');
