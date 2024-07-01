var imges = document.getElementsByClassName("carimg")
var list = document.getElementById("list")
var menubt = document.getElementById("menubt")
let closed = true

function showList(){
 if(closed){
  list.style.display="block"
  menubt.innerText="-"
  closed=false
  }
 else{
  list.style.display="none"
  menubt.innerText="+"
  closed=true
  }
}