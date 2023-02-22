"use strict"

// let formElem = document.querySelector("form");

// formElem.addEventListener("submit",function(e){
//     //console.log("form-submited")
//     e.preventDefault();
//    // document.querySelector("h1").innerText = "Hello"
//     if(document.getElementById("exampleInputEmail1").value !=""){
//         document.querySelector("span").classList.add("d-none")
//         writeWord(document.getElementById("exampleInputEmail1").value);
//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }
// })

// function writeWord(word){
//     document.querySelector("h1").innerText = word;
// }

//--------------------------------------------------------------------

// document.querySelector("a").addEventListener("click",function(e){
// e.preventDefault();
// console.log("clicked a")
// })

//----------------------------------------------------





// dragElem.ondragstart = () =>{
//     console.log("started")
// }


// dragElem.ondrag = ()=>{
//     console.log("dragging")
// }


// dragElem.ondragend = ()=>{
//     console.log("drag end")
// }


// dropElem.ondragover = (e)=>{
//    e.preventDefault();
// }


// dropElem.ondrop = ()=>{
//     console.log("tested")
// }


// let dragElem = document.querySelectorAll(".item")
// let dropElem = document.getElementById("drop-elem");


// dragElem.forEach(element => {
//     element.ondragstart = (e) =>{
//         e.dataTransfer.setData("id", element.getAttribute("id"))
//     }
// });

// dropElem.ondragover = (e) =>{
//     e.preventDefault();
// }


// dropElem.ondrop = (e) =>{
//     let id = e.dataTransfer.getData("id");

//     let elem = document.getElementById(id);

//     dropElem.append(elem);
// }



//-------Alternative Way For Drag Drop//-------


// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }


// dropElem.forEach(element => {
//     element.addEventListener("dragstart",function(){
//         dropElem.ondrop = () =>{
//             dropElem.append(element)
//         }
//     })
// });

//----------------------------------------------------------


//---File-Upload-----//


let uploadIcon = document.querySelector("i");

uploadIcon.addEventListener("click", function(){
    this.nextElementSibling.click();
})

uploadIcon.nextElementSibling.addEventListener("change",function(e){
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) =>{
            let fileBase64 = event.currentTarget.result;

            document.querySelector("img").setAttribute("src",fileBase64);
        }
        reader.readAsDataURL(file);
    }
})