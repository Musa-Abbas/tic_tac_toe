let currentPlayer = 'X'

  $.ajax({
	url: "https://www.boredapi.com/api/activity",
	type: 'GET',
	dataType: 'json', // added data type
	success: function(res) {
		console.log(res);
		$('#activity_head').text("Feeling Bored! "+res.type.charAt(0).toUpperCase() + res.type.slice(1)+" Activity for you.")
		$('#activity').text(res.activity)
		$('#participents').text("Participants: "+res.participants)

		$('#price').text("Cost: $"+Math.round((res.price*6) * 100) / 100)
	}
});

function checkWin(player){
	

	if (
		$('#0_0').text() === player &&
		$('#4_0').text() === player &&
		$('#8_0').text() === player
	)
		return true;
	if (
		$('#2_0').text() === player &&
		$('#4_0').text() === player &&
		$('#6_0').text() === player 
	)
		return true;
	if (
		$('#0_0').text() === player &&
		$('#3_0').text() === player &&
		$('#6_0').text() === player 
	)
		return true;
	if (
		$('#1_0').text() === player &&
		$('#4_0').text() === player &&
		$('#7_0').text() === player
	)
		return true;
	if (
		$('#2_0').text() === player &&
		$('#5_0').text() === player &&
		$('#8_0').text() === player 
	)
		return true;
	if (
		$('#0_0').text === player &&
		$('#1_0').text === player &&
		$('#2_0').text === player
	)
		return true;
	if (
		$('#3_0').text() === player &&
		$('#4_0').text() === player &&
		$('#5_0').text() === player
	)
		return true;
	if (
		$('#6_0').text() === player &&
		$('#7_0').text() === player &&
		$('#8_0').text() === player
	)
		return true;

	return false;		
}

function checkDraw(){

}


function play(row, col){	
		console.log(row)
		console.log(col)
		check = false;
		if ($('#'+row+'_'+col).text() === ''){
			$('#'+row+'_'+col).text(currentPlayer)
			if(checkWin(currentPlayer)){
				$('#'+row+'_'+col).text(currentPlayer)
				setTimeout(winner(), 5000);
				location.reload();
			}
			currentPlayer = currentPlayer === "X" ? "O" : "X"
		}else{
			alert("Selected box is filled already.")
		}
}
function winner(){
	alert(`Player ${currentPlayer} Won!`)
}
function reset(){
	location.reload();
}