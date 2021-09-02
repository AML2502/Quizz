var x = 0;

setScreen("startScreen");
function Draw(){
   console.log(x);
   write("Score="+ x); 
}
onEvent("button2", "click", function() {
  setScreen("Q1.");
  playSound("assets/default.mp3");
  playSound("assets/category_music/puzzle_game_meter_fill_musical_strings_03.mp3", false);
});

onEvent("button5", "click", function(){
setScreen("correct1");
playSound("assets/category_female_voiceover/correct_female.mp3");
x=x+1;
Draw();
});
onEvent("button3", "click", function(){
setScreen("Wrong1");
playSound("assets/category_female_voiceover/wrong_female.mp3");
x=x-1;
Draw();
});
onEvent("button4", "click", function(){
setScreen("Wrong1");
playSound("assets/category_female_voiceover/wrong_female.mp3");
x=x-1;
Draw();
});

//Question 2
onEvent("button1", "click", function() {
  setScreen("Q2");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});
onEvent("button7", "click", function() {
  setScreen("Q2");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});
onEvent("button8", "click", function(){
setScreen("Correct2");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
playSound("assets/category_female_voiceover/correct_female.mp3");
x=x+1;
Draw();
});
onEvent("button9", "click", function(){
setScreen("Wrong2");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});
onEvent("button10", "click", function(){
setScreen("Wrong2");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});


//Question 3.

onEvent("wrong2", "click", function() {
  setScreen("Q3");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});
onEvent("Button10","click",function(){
  setScreen("Q3");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});
onEvent("button13", "click", function(){
setScreen("C3.");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
playSound("assets/category_female_voiceover/correct_female.mp3");
x=x+1;
Draw();
});
onEvent("button14", "click", function(){
setScreen("W3");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});
onEvent("button12", "click", function(){
setScreen("W3");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});


//Question 4. 
onEvent("button11", "click", function() {
  setScreen("Q4.");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
  
});
onEvent("C3","click",function(){
  setScreen("Q4.");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});

onEvent("button18", "click", function(){
setScreen("screen2");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
playSound("assets/category_female_voiceover/correct_female.mp3");
x=x+1;
Draw();
});
onEvent("button17", "click", function(){
setScreen("W4.");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});
onEvent("button16", "click", function(){
setScreen("W4.");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});

//Question 5.

onEvent("screen2", "click", function() {
  
  setScreen("Q5.");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});
onEvent("button6","click",function(){
  setScreen("Q5.");
  playSound("assets/category_loops/pulsating_discovery_loop1.mp3", false);
});

onEvent("button20", "click", function(){
setScreen("C5");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
playSound("assets/category_female_voiceover/correct_female.mp3");
x=x+1;
Draw();
});
onEvent("button19", "click", function(){
setScreen("W5");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});
onEvent("button21", "click", function(){
setScreen("W5");
playSound("assets/category_female_voiceover/wrong_female.mp3");
stopSound("assets/category_loops/pulsating_discovery_loop1.mp3");
x=x-1;
Draw();
});

//END
/*function score(){
 var W= write("SCORE="+x,);
  setStrokeWidth(8);
 write("SCORE="+x);
}*/
onEvent("button22", "click", function() {
  setScreen("End");
});
onEvent("button23","click",function(){
  setScreen("End");
  
});
onEvent("button15", "click", function(){
setScreen("Q1.");
});



