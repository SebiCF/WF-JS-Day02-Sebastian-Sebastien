function ex1_temperature(){
	let rng = (Math.random()*30)-5;
	if (rng < 10){
		document.getElementById("exercise1").innerHTML = "The weather is cold, "+rng+"° Celsius";
	}
	else {
		document.getElementById("exercise1").innerHTML = "The weather is hot, "+rng+"° Celsius";
	}

}

function ex2_highestval(array) {
  let highest = array.sort(function(a,b){ return b-a })[0]
  document.getElementById("exercise2").innerHTML = `highest value: ${highest}`
}
