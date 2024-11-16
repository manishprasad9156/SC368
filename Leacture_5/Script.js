const inputText = document.getElementById("TodoTitle");
const list = document.getElementById("todos");
const countdown = document.getElementsByClassName("countdown")[0];
let initialCount = 10;

function Countdown(){
    initial
}
function Card(Todo){
    return ('<div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title">Card title</h5>     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>'')
}
const Todos = [];
function onClickSubmitButton() {

  Todos.push(inputText.value);
  inputText.value = "";
  Todos.forEach((todo) =>{
    list.innerHTML += "<li>" + todo + "</li>";
    })
//   console.log(Todos)

}