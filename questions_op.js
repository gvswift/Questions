const cat = document.getElementById("category")
const q_btn = document.getElementById("btn");
const p_btn = document.getElementById("passedBtn");
const ans_btn = document.getElementById("answer")

document.getElementById("PAST").style.visibility = "hidden";
document.getElementById("answer").style.display = "none";

let general_q; 
let bible_q; 
let adult_q;
let passed_questions = [];

cat.addEventListener("change",e =>{
	if (category.value === "general"){
		document.getElementById("heading").innerHTML = "General questions";
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		document.getElementById("answer").style.visibility = "hidden";
	} else if (category.value === "bible"){
		document.getElementById("heading").innerHTML = "Bible questions";
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer").style.display = "inline-block";
		document.getElementById("answer").style.visibility = "visible";
	}else if (category.value === "adult"){
		document.getElementById("heading").innerHTML = "Adult questions";
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		document.getElementById("answer").style.visibility = "hidden";
	}else {
		if(confirm("Do you want to reset?")== true){
			document.getElementById("PAST").style.visibility = "hidden";
			document.getElementById("PAST").innerHTML = "";
			document.getElementById("heading").innerHTML = "Select a category";
			document.getElementById("question").innerHTML = "";
			document.getElementById("answer").style.display = "none";
			document.getElementById("answer").style.visibility = "hidden";

		} else{
			document.getElementById("PAST").style.visibility = "hidden";
			document.getElementById("heading").innerHTML = "Select a category";
			document.getElementById("question").innerHTML = "";
			document.getElementById("answer").style.display = "none";
			document.getElementById("answer").style.visibility = "hidden";
		}
	}
} )


q_btn.addEventListener("click",e =>{
	if(category.value === "reset"){
		alert("Please select a category. Thank you.")
	} else {
	document.getElementById("PAST").style.visibility = "hidden";
	let already_q = "";
	let pq = document.createElement("p");
	if (category.value === "general"){
		general_q = GENERAL[Math.floor(Math.random()* GENERAL.length)];
		 already_q = passed_questions.find((question) =>{return question === general_q;});
		if(already_q === general_q){
			return;
		} else {
			document.getElementById("question").innerHTML = general_q;
			pq.innerText = general_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(general_q);
		}
	} else if (category.value === "bible"){
		bible_q = bible_questions[Math.floor(Math.random()* bible_questions.length)];
		 already_q = passed_questions.find((question) =>{return question === bible_q;});
		if(already_q === bible_q){
			return;
		} else {
			document.getElementById("question").innerHTML = bible_q;
			pq.innerText = bible_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(bible_q);
		}
	}else if (category.value === "adult-fun"){
		adult_q = ADULTS[Math.floor(Math.random()* ADULTS.length)];
		already_q = passed_questions.find((question) =>{return question === adult_q;});
		if(already_q === adult_q){
			return;
		} else {
			document.getElementById("question").innerHTML = adult_q;
			pq.innerText = adult_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(adult_q ) ;
		}
	}else {
		document.getElementById("heading").innerHTML = "Select a category";
	}
}});



p_btn.addEventListener("click", e=>{
	document.getElementById("PAST").style.visibility = "visible";
	
});
ans_btn.addEventListener("click",e=>{
	if(document.getElementById("question").innerHTML === ""){
		alert("Please ask a question before you look for an answer. Thank you.");
		return;
	} else {
	let x = bible_questions.findIndex(q => q === bible_q);
	alert(`Question : ${bible_answers[x].Question} 
Answer : ${bible_answers[x].answer}`);
}
})

