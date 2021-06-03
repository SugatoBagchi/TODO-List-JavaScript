function getAndUpdate(){
    tit=document.getElementById('title').value;
    desc = document.getElementById('description').value;
    console.log("Adding to the list.....")
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    update()
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }

    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element,index) => {
        str += `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
    </tr>`;
    });
    tableBody.innerHTML=str;
}
add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArray=JSON.parse(localStorage.getItem('itemsJson'))
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    update();
}
function clearstorage(){
    if(confirm("Do you really want to clear your TODO list?")==true){
        console.log("Check");
        localStorage.clear();
        update();
    }
}