var playername1=localStorage.getItem("player1");
var playername2=localStorage.getItem("player2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1name").innerHTML=playername1+":";
document.getElementById("player2name").innerHTML=playername2+":";
document.getElementById("player1score").innerHTML=" "+score1;
document.getElementById("player2score").innerHTML=" "+score2;
document.getElementById("playerquestion").innerHTML="question turn - "+playername1;
document.getElementById("playeranswer").innerHTML="answer turn - "+playername2;

function send(){
    word1= document.getElementById("word").value;
    word2 = word1.toLowerCase();
    letter1 = word2.charAt(1);
    lengthdiv2 = Math.floor(word2.length/2);
    letter2 = word2.charAt(lengthdiv2);
    lengthmin1 = word2.length-1;
    letter3 = word2.charAt(lengthmin1);
    removeletter1 = word2.replace(letter1,"_");
    removeletter2 = removeletter1.replace(letter2,"_");
    removeletter3 = removeletter2.replace(letter3,"_");
    questionword1 = "<h4 id='questionword'>"+"Q."+removeletter3+"</h4>";
    answertextinput = "<br>"+"Answer:<input id='answertag' type='text'>";
    checkbutton = "<br><br>"+"<button id='checkbutton1' onclick='checkanswer()'>check"+"</button>"
    row = questionword1+answertextinput+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
var question_turn="player1";
var answer_turn="player2"
function checkanswer(){
    console.log("checking");
    answer1 = document.getElementById("answertag").value;
    answer2 = answer1.toLowerCase();
    if(word2==answer2){
        if(answer_turn=="player2"){
            score2=score2+1;
            document.getElementById("player2score").innerHTML=score2;
        }
        else{
            score1++;
            document.getElementById("player1score").innerHTML=score1;
        }
    }
    if(question_turn=="player1"){
        document.getElementById("playerquestion").innerHTML="questionturn-"+playername2;
        question_turn="player2";
    }
    else{
        document.getElementById("playerquestion").innerHTML="questionturn-"+playername1;
        question_turn="player1";
    }
    if(answer_turn=="player1"){
        document.getElementById("playeranswer").innerHTML="answerturn-"+playername2;
        answer_turn="player2";
    }
    else{
        document.getElementById("playeranswer").innerHTML="answerturn-"+playername1;
        answer_turn="player1";
    }
    document.getElementById("output").innerHTML="";
}