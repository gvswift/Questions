const cat = document.getElementById("category")
const q_btn = document.getElementById("btn");
const p_btn = document.getElementById("passedBtn");

document.getElementById("PAST").style.visibility = "hidden";

let general_q; 
let children_q; 
let adult_q;
let passed_questions = [];

cat.addEventListener("change",e =>{
	if (category.value === "general"){
		document.getElementById("heading").innerHTML = "General fun questions";
		document.getElementById("question").innerHTML = "";
	} else if (category.value === "children-B"){
		document.getElementById("heading").innerHTML = "Children bible questions";
		document.getElementById("question").innerHTML = "";
	}else if (category.value === "adult-fun"){
		document.getElementById("heading").innerHTML = "Adult fun questions";
		document.getElementById("question").innerHTML = "";
	}else {
		if(confirm("Do you want to reset?")== true){
			document.getElementById("PAST").style.visibility = "hidden";
			document.getElementById("PAST").innerHTML = "";
			document.getElementById("heading").innerHTML = "Select a category";
			document.getElementById("question").innerHTML = "";

		} else{
			document.getElementById("PAST").style.visibility = "hidden";
			document.getElementById("heading").innerHTML = "Select a category";
			document.getElementById("question").innerHTML = "";
		}
	}
} )


q_btn.addEventListener("click",e =>{
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
	} else if (category.value === "children-B"){
		children_q = CHILDREN[Math.floor(Math.random()* CHILDREN.length)];
		 already_q = passed_questions.find((question) =>{return question === children_q;});
		if(already_q === children_q){
			return;
		} else {
			document.getElementById("question").innerHTML = children_q;
			pq.innerText = children_q;
			document.getElementById("PAST").appendChild(pq);
			passed_questions.push(children_q);
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
});



p_btn.addEventListener("click", e=>{
	document.getElementById("PAST").style.visibility = "visible";
	
});
