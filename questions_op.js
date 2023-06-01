const cat = document.getElementById("category");
const q_btn = document.getElementById("btn");
const p_btn = document.getElementById("past_btn");
const ans_btn = document.getElementById("answer");
const hd = document.getElementById("heading");
const qry = document.getElementById("cat_query");
const number_to_query = document.getElementById("num_to_query");
const slider = document.getElementById("number");

let q;
document.getElementById("PAST").style.visibility = "hidden";
document.getElementById("answer").style.display = "none";
qry.style.display = "none";
document.getElementById("num_to_query").style.display = "none";

go_next();

let r_question; 
let past_questions = [];
let qq = 0;

cat.addEventListener("change",e =>{
	if(category.value === "query"){
		hd.innerHTML = "Select a category to query";
		qry.style.display = "inline-block";
		q_btn.style.display = "none";
		ans_btn.style.display = "none";

	}else {
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
		//document.getElementById("question").innerHTML = "";
		//document.getElementById("answer").style.display = "none";
		document.getElementById("cat_query").style.display = "none";
		document.getElementById("num_to_query").style.display = "none";

		qry.style.display = "none";
		q_btn.style.display = "inline-block";
		go_next();
	}
	document.getElementById("question").innerHTML = "";
	document.getElementById("answer").style.display = "none";
	document.getElementById("PAST").style.visibility = "hidden";
    go_next();
	} )


q_btn.addEventListener("click",e =>{
	if(category.value === "query" && cat_query.value === "bible"){
		qq= Number(slider.value) - 1;
		document.getElementById("question").innerHTML = `${NewBible[qq].Question}  Ans: ${NewBible[qq].Answer}`;
	}else if(category.value === "query" && cat_query.value === "trivia"){
		qq = Number(slider.value) - 1;
		document.getElementById("question").innerHTML = `${NEW_GENERAL[qq].Question} Ans : ${NEW_GENERAL[qq].Answer}`;
	} else if(category.value === "reset"){
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
				q = Math.floor(Math.random()*NEW_GENERAL.length);
				r_question = NEW_GENERAL[q].Question;

		}else if (category.value === "bible"){
				q = Math.floor(Math.random()* NewBible.length);
				r_question = NewBible[q].Question;
		

		}
		already_q = past_questions.find((question) =>{return question === r_question;});
			if(already_q === r_question){
				return;
			} else {
				document.getElementById("question").innerHTML = r_question;
				pq.innerText = r_question;
				document.getElementById("PAST").appendChild(pq);
				past_questions.push(r_question);
				document.getElementById("PAST").style.visibility = "hidden";
			}
	}
	show_ans();
	go_next();
});

qry.addEventListener("change", e =>{
	if(cat_query.value === "bible"){
		hd.innerHTML = "Query: Bible Questions";
		document.getElementById("number").max = "199";

	}else if(cat_query.value === "trivia"){
		//prompt("What is the question number")
		hd.innerHTML = "Query: General Trivia"
		document.getElementById("number").max = "80";

		//qry.value = "select";
	}
	number_to_query.style.display = "block";
	q_btn.style.display = "inline-block";
	document.getElementById("number").value = "1";
	document.getElementById("q_number").innerHTML= 1;
	document.getElementById("question").innerHTML = "";
	go_next();

})

p_btn.addEventListener("click", e=>{
	if(document.getElementById("PAST").innerHTML === ""){
		alert("There are no past questions.");

	}else{
	document.getElementById("PAST").style.visibility = "visible";
	}
	
});
ans_btn.addEventListener("click",e=>{
	// I already know the index. its q.
	//QN stands for Question number.
	let QN = q + 1;
	if(category.value === "bible"){
		alert(`Question : Q${QN}
Answer : ${NewBible[q].Answer}`);
	}else if(category.value === "trivia"){
		alert(`Question : Q${QN}
Answer : ${NEW_GENERAL[q].Answer}`);

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
document.getElementById("q_number").innerHTML = slider.value;
slider.oninput = function() {
	q_number.innerHTML = this.value;
}