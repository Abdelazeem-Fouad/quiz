let counter = 0;
const total = 10;
const score = document.getElementById('score');
const rate = document.getElementById("rate");
const q1_1 = document.getElementById("q1a");
const q1_2 = document.getElementById("q1b");
const q1_3 = document.getElementById("q1c");
const q1_4 = document.getElementById("q1d");
/*******************************/
const q2_1 = document.getElementById("q2a");
const q2_2 = document.getElementById("q2b");
const q2_3 = document.getElementById("q2c");
const q2_4 = document.getElementById("q2d");
/*******************************/
const q3_1 = document.getElementById("q3a");
const q3_2 = document.getElementById("q3b");
const q3_3 = document.getElementById("q3c");
const q3_4 = document.getElementById("q3d");
/*******************************/
const q4_1 = document.getElementById("q4a");
const q4_2 = document.getElementById("q4b");
const q4_3 = document.getElementById("q4c");
const q4_4 = document.getElementById("q4d");
/*******************************/
const q5_1 = document.getElementById("q5a");
const q5_2 = document.getElementById("q5b");
const q5_3 = document.getElementById("q5c");
const q5_4 = document.getElementById("q5d");
/*******************************/
const q6_1 = document.getElementById("q6a");
const q6_2 = document.getElementById("q6b");
const q6_3 = document.getElementById("q6c");
const q6_4 = document.getElementById("q6d");
/*******************************/
const q7_1 = document.getElementById("q7a");
const q7_2 = document.getElementById("q7b");
const q7_3 = document.getElementById("q7c");
const q7_4 = document.getElementById("q7d");
/*******************************/
const q8_1 = document.getElementById("q8a");
const q8_2 = document.getElementById("q8b");
const q8_3 = document.getElementById("q8c");
const q8_4 = document.getElementById("q8d");
/*******************************/
const q9_1 = document.getElementById("q9a");
const q9_2 = document.getElementById("q9b");
const q9_3 = document.getElementById("q9c");
const q9_4 = document.getElementById("q9d");
/*******************************/
const q10_1 = document.getElementById("q10a");
const q10_2 = document.getElementById("q10b");
const q10_3 = document.getElementById("q10c");
const q10_4 = document.getElementById("q10d");


for(let i= 1; i<=4; i++){
    eval('q1_' + i).addEventListener("click", function(){
        if(eval('q1_' + i).value == 'correct'){
            eval('q1_' + i).classList.add('answer-wright');
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q1_' + i).classList.add('answer-wrong')
        }
        q1_2.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q1_' + i).classList.add('non-active');
        }
    })

}


/*******************************/

for(let i= 1; i<=4; i++){
    eval('q2_' + i).addEventListener("click", function(){
        if(eval('q2_' + i).value == 'correct'){
            eval('q2_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q2_' + i).classList.add('answer-wrong')
        }
        q2_3.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q2_' + i).classList.add('non-active');
        }
    })

}

/*******************************/

for(let i= 1; i<=4; i++){
    eval('q3_' + i).addEventListener("click", function(){
        if(eval('q3_' + i).value == 'correct'){
            eval('q3_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q3_' + i).classList.add('answer-wrong')
        }
        q3_4.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q3_' + i).classList.add('non-active');
        }
    })

}

/*******************************/

for(let i= 1; i<=4; i++){
    eval('q4_' + i).addEventListener("click", function(){
        if(eval('q4_' + i).value == 'correct'){
            eval('q4_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q4_' + i).classList.add('answer-wrong')
        }
        q4_1.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q4_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q5_' + i).addEventListener("click", function(){
        if(eval('q5_' + i).value == 'correct'){
            eval('q5_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q5_' + i).classList.add('answer-wrong')
        }
        q5_4.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q5_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q6_' + i).addEventListener("click", function(){
        if(eval('q6_' + i).value == 'correct'){
            eval('q6_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q6_' + i).classList.add('answer-wrong')
        }
        q6_1.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q6_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q7_' + i).addEventListener("click", function(){
        if(eval('q7_' + i).value == 'correct'){
            eval('q7_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q7_' + i).classList.add('answer-wrong')
        }
        q7_4.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q7_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q8_' + i).addEventListener("click", function(){
        if(eval('q8_' + i).value == 'correct'){
            eval('q8_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q8_' + i).classList.add('answer-wrong')
        }
        q8_1.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q8_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q9_' + i).addEventListener("click", function(){
        if(eval('q9_' + i).value == 'correct'){
            eval('q9_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q9_' + i).classList.add('answer-wrong')
        }
        q9_2.classList.add('answer-wright')

        for(let i= 1; i<=4; i++){
            eval('q9_' + i).classList.add('non-active');
        }
    })

}

/*******************************/
for(let i= 1; i<=4; i++){
    eval('q10_' + i).addEventListener("click", function(){
        if(eval('q10_' + i).value == 'correct'){
            eval('q10_' + i).classList.add('answer-wright')
            console.log(++counter);
            score.textContent = `You Scored ${counter} out of ${total}`
        }
        else{
            eval('q10_' + i).classList.add('answer-wrong')
        }
    

        for(let i= 1; i<=4; i++){
            eval('q10_' + i).classList.add('non-active');
        }
    })

}










