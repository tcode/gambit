$(document).ready(function () {
    $('<center><h1>Gambit Web-Magasin</h1></center>').prependTo("body");
    $('<img src="skak.jpg" />').appendTo("#article");
    $("#sondex2012").click(function () {
	$("#article").load("articles/sondex2012.html");
    });
    $("#exam").click(function () {
	$("#article").html
	('<a href="http://www.chessvideos.tv/chess-game-replayer.php?id=63365">Example Game</a>');
    });
    $("#index").click(function () {
	$("#article").html('<p>Partier &oslash;nskes, gerne fra intern turnering</p>');
	$('<p>Send til <a href="mailto:tobias.private@gmail.com">MinMail</a></p>').appendTo("#article");
    });
   

    $("img").click(function () {
	$("#sondex2012").click(function () {
	    $("#article").load("articles/sondex2012.html");
	});
	$("#exam").click(function () {
	    $("#article").html
	    ('<a href="http://www.chessvideos.tv/chess-game-replayer.php?id=63365">Example Game</a>');
	});
	$("#index").click(function () {
	    $("#article").html('<p>Partier &oslash;nskes, gerne fra intern turnering</p>');
	    $('<p>Send til <a href="mailto:tobias.private@gmail.com">MinMail</a></p>').appendTo("#article");
	});
	$("#index").click();
    });
});



