var element = ["✕", "○"];
var win = ["✕✕✕", "○○○"];
var next = element[0];
var marked = [];
var winOp = [];
$('.box').one("click", function(e) {
	($('h1').text() == "") ? drawAndPlay(e) : false;
	theWinner(e);
});
$('button').click(function() {
    location.reload();
});
$()
function drawAndPlay (e) {
	$('<span>', {
		text: next
	}).appendTo(e.target);
	next = (next == element[0]) ? element[1] : element[0];
	$('.row div').each(function(key, value){
		value = (value.children[0]) ? value.children[0].textContent : "";
		marked[key] = value;
	})
}
function theWinner (e) {
	for(var i = 0; i < 8; i++){
		winOp[i] = "";
	}
	for (var i = 0; i < marked.length; i++) {
		winOp[Math.floor(i/3)] += marked[i];
		var col = i + 3 - Math.floor(i/3) * 3; //order i position by column
		winOp[col] += marked[i];
	}

	var x = 0; // Starting diagonal \
	var y = 2; // Starting diagonal /
	winOp[6] = marked[x] + marked[x + 4] + marked[x + 4*2]; // win diagonal \
	winOp[7] = marked[y] + marked[y + 2] + marked[y + 2*2]; // win diagonal /

	console.log(winOp);
	$.each(winOp, function(key, value){
		if (value == win[0]) {
			console.log(element[0] + ' WON! 🏆');
			$('h1').text(element[0] + ' WON! 🏆');
		} else if (value == win[1]) {
			console.log(element[1] + ' WON! 🏆');
			$('h1').text(element[1] + ' WON! 🏆');
		}
	})
}