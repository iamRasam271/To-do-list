let input=document.querySelector("#inpt");
let btn=document.querySelector("#btn");
let tasklist=document.querySelector("#tasklist");
btn.addEventListener("click",function(){
  let tasktext=input.value;
  if(tasktext===""){
    alert("Enter a text!!!");
    return;}
    let li = document.createElement("Li");
    let span=document.createElement("span");
    span.textContent=tasktext;
    let deletebtn=document.createElement("button");
    deletebtn.textContent="×";
   
    deletebtn.style.cursor="pointer";
    deletebtn.addEventListener("click",function(){
      li.remove();
    });
    li.appendChild(span);
    li.appendChild(deletebtn);

    tasklist.appendChild(li);
    input.value="";

})
