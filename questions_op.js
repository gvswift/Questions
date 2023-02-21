const cat = document.getElementById("category")
const q_btn = document.getElementById("btn");
const p_btn = document.getElementById("past_btn");
const ans_btn = document.getElementById("answer")
const hd = document.getElementById("heading")
let q;
document.getElementById("PAST").style.visibility = "hidden";
document.getElementById("answer").style.display = "none";

go_next();

let r_question; 
let passed_questions = [];

cat.addEventListener("change",e =>{
	if (category.value === "general"){
		hd.innerHTML = "General questions";
		
	} else if (category.value === "bible"){
		hd.innerHTML = "Bible questions";
		
	} else if (category.value === "trivia"){
		hd.innerHTML = "General Trivia";
		
	}else if (category.value === "adult"){
		hd.innerHTML = "Adult questions";
		
	}else if(category.value === "children"){
		hd.innerHTML = "Children questions";
		
	} else {
		if(confirm("Do you want to reset?")== true){
			document.getElementById("PAST").innerHTML = "";
			hd.innerHTML = "Select a category";

		} else{
			hd.innerHTML = "Select a category";
			
		}
	}
	document.getElementById("PAST").style.visibility = "hidden";
	document.getElementById("question").innerHTML = "";
	document.getElementById("answer").style.display = "none";
	//document.getElementById("answer").style.visibility = "hidden";
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
			r_question = GENERAL[Math.floor(Math.random()* GENERAL.length)];

		}else if (category.value === "adult"){
			r_question = ADULTS[Math.floor(Math.random()* ADULTS.length)];
	
		}else if (category.value === "children"){
				r_question = CHILDREN[Math.floor(Math.random()* CHILDREN.length)];

		}else if (category.value === "trivia"){
				//***RANDPM INDEX is equal to q */
				q = Math.floor(Math.random()*Fun_General.length);
				r_question = Fun_General[q].Question;

				//document.getElementById("answer").style.display = "inline-block";
				//document.getElementById("answer").style.visibility = "visible";

		}else if (category.value === "bible"){
				//***RANDPM INDEX is equal to q */
				q = Math.floor(Math.random()*Bible_Q_A.length);
				//bible_q = bible_questions[Math.floor(Math.random()* bible_questions.length)];
				r_question = Bible_Q_A[q].Question;

				//document.getElementById("answer").style.display = "inline-block";
				//document.getElementById("answer").style.visibility = "visible";
		}
	

		already_q = passed_questions.find((question) =>{return question === r_question;});
			if(already_q === r_question){
				return;
			} else {
				document.getElementById("question").innerHTML = r_question;
				pq.innerText = r_question;
				document.getElementById("PAST").appendChild(pq);
				passed_questions.push(r_question);
				document.getElementById("PAST").style.visibility = "hidden";
			}
	}
	show_ans();
	go_next();
});



p_btn.addEventListener("click", e=>{
	if(document.getElementById("PAST").innerHTML === ""){
		alert("There are no past questions.");

	}else{
	document.getElementById("PAST").style.visibility = "visible";
	}
	
});
ans_btn.addEventListener("click",e=>{
	// I already know the index. its q.
		//let x = bible_questions.findIndex(q => q === bible_q);
		//QN stands for Question number.
	let QN = q + 1;
	if(category.value === "bible"){
		alert(`Question : Q${QN}
Answer : ${Bible_Q_A[q].Answer}`);
	}else if(category.value === "trivia"){
		alert(`Question : Q${QN}
Answer : ${Fun_General[q].Answer}`);
	

}
})

function go_next(){
	if(document.getElementById("question").innerHTML === ""){
		q_btn.innerText = "GO...";
	}else{
		q_btn.innerText = "NEXT ...";
	}
}

function show_ans(){
	if(category.value=== "trivia" || category.value === "bible"){
		if(document.getElementById("question") === ""){
			ans_btn.style.display = "none";
			
		}else{
			ans_btn.style.display = "inline-block";
		}
	}
}
