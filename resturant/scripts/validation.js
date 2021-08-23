function validate(){

var name = document.getElementById('name').value;
 


if(name.length <=1){
    document.getElementById('retSection').innerHTML = "<div class=\"w3-panel w3-red\" ><h3>Danger!</h3> <p>Name is invalid please try again</p></div> "
}else{return true; }
console.log(name)

return false; 
}
function reset(){
    location.reload(); 
}