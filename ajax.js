// console.log("Ajax Tutorial in one Video");
 let fetchbtn = document.getElementById("fetchBtn");
fetchbtn.addEventListener("click", buttonClickHandeler);
function buttonClickHandeler() {
  console.log("Button has been Clicked");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  // open the object
 // xhr.open("GET", 'utsho.txt', true);//true means asynchonuse
 // xhr.open('Get','https://jsonplaceholder.typicode.com/todos/1',true) 
  xhr.open('Post','https://dummy.restapiexample.com/api/v1/create',true) 
  xhr.getResponseHeader('content-type','application/x-www-form-urlencoded')
 //What to do on progress
  xhr.onprogress = function () {
    console.log("On live");
  };

  //What to do when response is ready
  xhr.onload = function () {
    //checking status if response is ok
    if(this.status===200){  console.log(this.responseText);}
    else {
        console.log("Something is wrong")
    }

  
  };

  //send the request
params= `{"name":"test5645","salary":"123","age":"23"} `;
xhr.send(params);
console.log("We are done");

}

let popbtn = document.getElementById("popbtn");
popbtn.addEventListener('click',pophandler)
function pophandler(){
  console.log(" Pop Button has been Clicked");
  //Instantiate an xhr object
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true) 
 

  //What to do when response is ready
  xhr.onload = function () {
    //checking status if response is ok
    if(this.status===200){ 

      let obj=JSON.parse(this.responseText);
     // console.log(obj)
     let list =document.getElementById('list');
     str = '';
     for( key in obj)
      str +=`<li>${obj[key]}</li>`
    list.innerHTML =str;
    }
    else {
        console.log("Something is wrong")
    }

  
  };

  //send the request
  xhr.send();




}
