let addtask = document.querySelector(".addtask");
let send = document.querySelector("#send");
let taskadd = document.querySelector(".taskadd");
 let btn = document.querySelector(".addbtn");
addtask.addEventListener("click",function(){
    addtask.style.display = "none";
    send.style.display = "block";
    btn.style.display = "block";
})

let i = document.querySelector(".addbtn");



i.addEventListener("click",function(event){
    let inputtext = send.value;
    if(inputtext != ""){
      let p = document.createElement("p");
       p.innerText = inputtext;
       let li = document.createElement("li");
       li.append(p);
       let delbtn = document.createElement("button");
       delbtn.innerText = "delete";
       delbtn.classList.add("delbtn");
       li.append(delbtn);
      
       taskadd.append(li);
       send.value="";
      
       send.style.display="none";
       btn.style.display = "none";
       addtask.style.display="block";
}
})
taskadd.addEventListener("click",function(event){
   
   if(event.target.nodeName == "BUTTON"){
    let listitem = event.target.parentElement;
    listitem.remove();
     console.log(event.target.parentElement);
   } else{
    console.log("press on delete");
   }
})

