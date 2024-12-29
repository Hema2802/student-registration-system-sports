
const fullNameInput = document.getElementById('firstName');
const phoneInput = document.getElementById('phone');
const stateInput = document.getElementById('State');
const genderInput = document.getElementById('gender');
const sportInput = document.getElementById('sport');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Add button event listener
addButton.addEventListener('click', function () {
  const fullName = fullNameInput.value.trim();
  const fphone = phoneInput.value.trim();
  const fstate = stateInput.value.trim();
  const fgender = genderInput.value.trim();
  const fsports = sportInput.value.trim();

  if (fullName && fphone && fstate && fgender && fsports) {
    addTodoItem(fullName, fphone, fstate, fgender, fsports);
    fullNameInput.value = "";
    phoneInput.value = "";
    stateInput.value = "";
    genderInput.value = "";
    sportInput.value = "";
  }
});

function addTodoItem(fullName, fphone, fstate, fgender, fsports) {
  const li = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = fullName;

  const phoneSpan = document.createElement('span');
  phoneSpan.textContent = fphone;

  const stateSpan = document.createElement('span');
  stateSpan.textContent = fstate;

  const genderSpan = document.createElement('span');
  genderSpan.textContent = fgender;

  const sportSpan = document.createElement('span');
  sportSpan.textContent = fsports;

  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>'; 
  editButton.classList.add('edit');
  editButton.addEventListener('click', function () {
  editTodoItem(li, fullName, fphone, fstate, fgender, fsports);
   });

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; 
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function () {
  li.remove();
  });

  li.appendChild(nameSpan);
  li.appendChild(phoneSpan);
  li.appendChild(stateSpan);
  li.appendChild(genderSpan);
  li.appendChild(sportSpan);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  todoList.appendChild(li);
}

function editTodoItem(li, fullName, fphone, fstate, fgender, fsports) {
  fullNameInput.value = fullName;
  phoneInput.value = fphone;
  stateInput.value = fstate;
  genderInput.value = fgender;
  sportInput.value = fsports;

  li.remove();
  addButton.textContent = "Update";
}


//js code to play game with computer

var box = document.getElementById("Guess")
var result = document.getElementById("Result")
var score=document.getElementById("score")
var totalScore=15
var randomNumber = Math.floor(Math.random()*10)+1
function checkNumber(){
    var enteredNumber=Guess.value
    if(randomNumber==enteredNumber){
        result.textContent="Correct"
        console.log("Correct")
        alert("You Won the Game! All the best my friend")
    }else{
        totalScore=totalScore-1
        score.textContent="score:"+totalScore
        result.textContent="Wrong"
        console.log("Wrong")
        box.value="";
    }
}


  

