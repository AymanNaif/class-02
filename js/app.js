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


alert('another game !! get ready ^_^ , write the number of answer only');
let QustionAnswers =[1,2,3];
let input=parseInt(prompt('Qustion one : 1+1 = ?\n1) 2\n2) 8\n3) 5' ));
let score=0;

for(let i=0;i<5;i++){
  if (input===parseInt(QustionAnswers[0])) {
    score=score+1;
    alert('easy !! LOL ');
    break;
  }
  else {
    input=parseInt(prompt('Wrong !! try again please \nQustion one : 1+1 = ?\n1) 2\n2) 8\n3) 5' ));
  }
}
alert('the answer is 1');


let inpu=parseInt(prompt('Qustion two : Where are the pyramids located?\n1) Jordan\n2) Germany\n3) Egypt' ));

for(let i=0;i<5;i++){
  if (inpu===parseInt(QustionAnswers[2])) {
    score=score+1;
    alert('AMAZING , correct Answer ');
    break;
  }
  else {
    inpu=parseInt(prompt('Wrong !! try again please \nQustion two : Where are the pyramids located?\n1) Jordan\n2) Germany\n3) Egypt' ));
  }
}
alert('the answer is 3');


let inp=parseInt(prompt('Qustion three : What is strawberry color?\n1) blue\n2) red\n3) black' ));

for(let i=0;i<5;i++){
  if (inp===parseInt(QustionAnswers[1])) {
    score=score+1;
    alert('yeeeeah thats right ');
    break;
  }
  else {
    inp=parseInt(prompt('Wrong !! try again please \nQustion three : What is strawberry color?\n1) blue\n2) red\n3) black' ));
  }
}
alert('the answer is 3');


let inw=parseInt(prompt('Qustion four : who is messi?\n1) football player\n2) actor\n3) teacher' ));

for(let i=0;i<5;i++){
  if (inw===parseInt(QustionAnswers[0])) {
    score=score+1;
    alert('yeeeeah thats right , the GOAT ');
    break;
  }
  else {
    inw=parseInt(prompt('Wrong !! try again please \nQustion four : who is messi?\n1) football player\n2) actor\n3) teacher' ));
  }
}
alert('the answer is 1');



let inwr=parseInt(prompt('Qustion five : more than club !\n1) Realbites\n2) Alwehdat\n3) Barcalona' ));

for(let i=0;i<5;i++){
  if (inwr===parseInt(QustionAnswers[2])) {
    score=score+1;
    alert('yeeeeah thats right ');
    break;
  }
  else {
    inwr=parseInt(prompt('Wrong !! try again please \nQustion five : more than club !\n1) Realbites\n2) Alwehdat\n3) Barcalona' ));
  }
}
alert('the answer is 3');

let inwre=parseInt(prompt('Qustion six : what the color of banana !\n1) yellow\n2) white\n3) red' ));

for(let i=0;i<5;i++){
  if (inwre===parseInt(QustionAnswers[0])) {
    score=score+1;
    alert('yeeeeah thats right ');
    break;
  }
  else {
    inwre=parseInt(prompt('Wrong !! try again please \nQustion six : what the color of banana !\n1) yellow\n2) white\n3) red' ));
  }
}
alert('the answer is 1');

let inwrq=parseInt(prompt('bones ^_^ Qustion seven : do you like markdown file ?!\n1) sure(wrong answer)\n2) nooooooo!!\n3) yes(wrong answer)' ));

for(let i=0;i<5;i++){
  if (inwrq===parseInt(QustionAnswers[1])) {
    score=score+1;
    alert('hehehe correct ');
    break;
  }
  else {
    inwrq=parseInt(prompt('Wrong !! try again please \nbones ^_^ Qustion seven : do you like markdown file ?!\n1) sure(wrong answer)\n2) nooooooo!!\n3) yes(wrong answer)' ));
  }
}
alert('the answer is 2');

alert('your score is '+score+'/7');

