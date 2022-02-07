var list=[];
function fetchData()
{
    var product=insert();
    list.push(product);
    table =document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for (var i=0; i<list.length; i++){
        cell1.innerHTML = list[i].pId;
        cell2.innerHTML = list[i].pName;
        cell3.innerHTML = list[i].pPrice;
    }
}


function insert()
{
    var id= document.getElementById("productId").value;
    var name= document.getElementById("productName").value;
    var price= document.getElementById("productPrice").value;
    return{
        "pId":id,
        "pName":name,
        "pPrice":price 
    }
}