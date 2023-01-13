const myForm = document.getElementById('main-form');
const points = document.getElementById('match-outcome')
const gender = document.getElementById('gender')
const division = document.getElementById('division')

const male_gi = []

const male_no_gi = []

const female_gi = []

const female_no_gi = []

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(fname.value)
    console.log(lname.value)
    console.log(points.value)
    console.log(gender.value)
    console.log(division.value)
    let user = {
        first: document.getElementById('fname').value,
        last: document.getElementById('lname').value,
        outcome: points.value,
        sex: gender.value,
        div: division.value,
    }
    if (user.sex === "male" && user.div === "gi") {
        male_gi.push(user);
        console.log(male_gi);
    }
    else if (user.age === "male" && user.div === "no-gi") {
        male_no_gi.push(user);
        console.log(male_no_gi);
    }
    else if (user.sex === "female" && user.div === "gi") {
        female_gi.push(user);
        console.log(female_gi);
    }
    else {
        female_no_gi.push(user)
        console.log(female_no_gi)
    }
    })









/*const formArray = ["", "", "", "", ""]

function pushData() {
    let fname = document.getElementById(fname).Value;

    formArray.push(fname);

    let pval = ""

    for(let i = 0; i < formArray.length; i++) {
        pval = pval + formArray[i];
    }

    document.getElementById(row1-input).innerHTML = pval
}



Array.from(document.querySelectorAll('#main-forms input')) */


   



