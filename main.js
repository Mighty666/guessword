function adduser(){
    var name1=document.getElementById("player1").value;
    var name2=document.getElementById("player2").value;

    localStorage.setItem("player1",name1);
    localStorage.setItem("player2",name2);
    window.location="game_page.html"
}