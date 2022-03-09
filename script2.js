let names = ["Brandon","Bob","joe","Von","Raheim","Jess","Savannah"];
// arrays have position index numbers //
// display on console ("Brandon", "Bob")
//console.log(names[2]);
//console.log(names[4]);
// names.length = number of indexes//
//names[0]="Brando";



//names.push("Victoria");
//names.push("Joey");
//names.push("George");

//console.table(names);
//console.log(names.length);

function register(){
    console.log("register");
    //get name from prompt, store value
    let student= prompt("Enter Student Name: ");
    //push new student into array
    names.push(student);
    //display the student again
    displayNames();
}



function displayNames(){
    //clear canvas
    document.getElementById("studentlist").innerHTML="";
    //travel array
    for(let x=0;x<names.length;x++){
        //display each name
        document.getElementById("studentlist").innerHTML+=`
        <li id="${x}">${names[x]} <button onclick="deleteStudent(${x});"> Delete </button></li>
        `;
    }
}
displayNames();    

function deleteStudent(id){
    document.getElementById(id).remove(); // remove the element from html
    names.splice(id,1); //remove element from array
}

