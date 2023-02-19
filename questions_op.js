const cat = document.getElementById("category")
const q_btn = document.getElementById("btn");
const p_btn = document.getElementById("passedBtn");
const ans_btn = document.getElementById("answer")
let q;
document.getElementById("PAST").style.visibility = "hidden";
document.getElementById("answer").style.display = "none";

go_next();

let general_q; 
let bible_q; 
let adult_q;
let children_q;
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
		//document.getElementById("answer").style.display = "inline-block";
		//document.getElementById("answer").style.visibility = "visible";
	}else if (category.value === "adult"){
		document.getElementById("heading").innerHTML = "Adult questions";
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		document.getElementById("answer").style.visibility = "hidden";
	}else if(category.value === "children"){
		document.getElementById("heading").innerHTML = "Children questions";
		document.getElementById("question").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		document.getElementById("answer").style.visibility = "hidden";
	} else {
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
	go_next();
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
		//***RANDPM INDEX is equal to q */
		q = Math.floor(Math.random()*Bible_Q_A.length);
		//bible_q = bible_questions[Math.floor(Math.random()* bible_questions.length)];
		bible_q = Bible_Q_A[q].Question;
		 already_q = passed_questions.find((question) =>{return question === bible_q;});
		if(already_q === bible_q){
			return;
		} else {
			document.getElementById("question").innerHTML = bible_q;
			document.getElementById("answer").style.display = "inline-block";
			document.getElementById("answer").style.visibility = "visible";
			pq.innerText = bible_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(bible_q);
		}
	}else if (category.value === "adult"){
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
	
	}else if (category.value === "children"){
		children_q = CHILDREN[Math.floor(Math.random()* CHILDREN.length)];
		already_q = passed_questions.find((question) =>{return question === children_q;});
		if(already_q === children_q){
			return;
		} else {
			document.getElementById("question").innerHTML = children_q;
			pq.innerText = children_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(children_q ) ;
		}
	}else {
		document.getElementById("heading").innerHTML = "Select a category";
	}
	go_next();
}});



p_btn.addEventListener("click", e=>{
	document.getElementById("PAST").style.visibility = "visible";
	
});
ans_btn.addEventListener("click",e=>{
	if(document.getElementById("question").innerHTML === ""){
		alert("Please ask a question before you look for an answer. Thank you.");
		return;
	} else {
		// I already know the index. its q.
	//let x = bible_questions.findIndex(q => q === bible_q);
	//alert(`Question : ${bible_answers[x].Question} 
//Answer : ${bible_answers[x].answer}`);
//QN stands for Question number.
let QN = q +1 ;
alert(`Question : Q${QN}
Answer : ${Bible_Q_A[q].Answer}`)
}
})

function go_next(){
	if(document.getElementById("question").innerHTML === ""){
		q_btn.innerText = "GO...";
	}else{
		q_btn.innerText = "NEXT ...";
	}
}

