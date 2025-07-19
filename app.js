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



i.addEventListener("click",function(){
    let inputtext = send.value;
    if(inputtext != ""){
      let p = document.createElement("p");
       p.innerText = inputtext;
       let li = document.createElement("li");
       li.append(p);
       taskadd.append(li);
       send.value="";
       console.log(inputtext);
       send.style.display="none";
       btn.style.display = "none";
       addtask.style.display="block";
}
})
