const myForm = document.getElementById('main-form');
const points = document.getElementById('match-outcome')
const gender = document.getElementById('gender')
const division = document.getElementById('division')
const male_gi_table = document.getElementById('male__gi')
const female_gi_table = document.getElementById('female__gi')
const male_nogi_table = document.getElementById('male__nogi')
const female_nogi_table = document.getElementById('female__nogi')

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
        let rowNumber = male_gi_table.rows.length
        let row = male_gi_table.insertRow(rowNumber)
        let cellNumber = male_gi_table.rows[0].cells.length
        console.log(row)
        row.insertCell(0).innerHTML = rowNumber
        row.insertCell(1).innerHTML = user.first
        row.insertCell(2).innerHTML = user.last
        row.insertCell(3).innerHTML = user.outcome
        console.log(male_gi);
    }
    else if (user.sex === "male" && user.div === "no-gi") {
        male_no_gi.push(user);
        console.log(male_nogi_table)
        let rowNumber = male_nogi_table.rows.length
        let row = male_nogi_table.insertRow(rowNumber)
        let cellNumber = male_nogi_table.rows[0].cells.length
        console.log(row)
        row.insertCell(0).innerHTML = rowNumber
        row.insertCell(1).innerHTML = user.first
        row.insertCell(2).innerHTML = user.last
        row.insertCell(3).innerHTML = user.outcome
        console.log(male_no_gi);
    }
    else if (user.sex === "female" && user.div === "gi") {
        female_gi.push(user);
        let rowNumber = female_gi_table.rows.length
        let row = female_gi_table.insertRow(rowNumber)
        let cellNumber = female_gi_table.rows[0].cells.length
        console.log(row)
        row.insertCell(0).innerHTML = rowNumber
        row.insertCell(1).innerHTML = user.first
        row.insertCell(2).innerHTML = user.last
        row.insertCell(3).innerHTML = user.outcome
        console.log(female_gi);
    }
    else {
        female_no_gi.push(user)
        let rowNumber = female_nogi_table.rows.length
        let row = female_nogi_table.insertRow(rowNumber)
        let cellNumber = female_nogi_table.rows[0].cells.length
        console.log(row)
        row.insertCell(0).innerHTML = rowNumber
        row.insertCell(1).innerHTML = user.first
        row.insertCell(2).innerHTML = user.last
        row.insertCell(3).innerHTML = user.outcome
        console.log(female_no_gi)
    }

   /*const tr = document.createElement('tr');
    const th = document.createElement('th');
    const firstName = document.createElement('td');
    const lastName = document.createElement('td');
    const points = document.createElement('td');

    firstName.innerText = user.first
    lastName.innerText = user.last
    points.innerText = user.outcome

    male_gi.length+1 */

    })


    function AddRow() {

    }






    function getPoints() {
        let sum = 0
        male_gi.forEach(function(user){
            sum = sum + user.outcome
        })
        return sum
    }

    // OR 

    const addPoints = male_gi.filter(function(x){
        x = user.outcome

    })






        // ADD ROW 

		/*const n = 1;
		const x = 0;

		function AddRow(){
            let row = table.insertRow();
            let cell = row.insertCell();
            cell.textContent = "New Cell!";
            document.body.appendChild(row);

			const AddRown = document.getElementById('show');
			const NewRow = AddRown.insertRow(n);

			male_gi[x] = document.getElementById("fname").value;
			male_gi[x] = document.getElementById("lname").value;
			male_gi[x] = points.value;
			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];

			n++;
			x++;
		} */

    









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


   



