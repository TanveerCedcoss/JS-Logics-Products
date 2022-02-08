var list=[];

function fetchData()
{
    insertData();
    console.log(list);
    display();
    
}


function insertData()
{
    var id= document.getElementById("productId").value;
    var name= document.getElementById("productName").value;
    var price= document.getElementById("productPrice").value;
    var exist=checkData(id);
    if(exist==true)
    {
        alert('ID already exist!!!!');
    }
    else
    {
        var data={
            "pId":id,
            "pName":name,
            "pPrice":price 
        }
        list.push(data);
    }
    
}

function display()
{
    var text = document.getElementById("table")
    text.innerHTML="<tr>\
    <th>Product Id</th>\
    <th>Product Name</th>\
    <th>Product Price</th>\
  </tr>";
  for(var i=0;i<list.length;i++)
  {
      text.innerHTML+="<tr>\
      <td>"+list[i].pId+"</td>\
      <td>"+list[i].pName+"</td>\
      <td>"+list[i].pPrice+"</td>\
      </tr>";
  }
}

function checkData(id)
{
    console.log('data check done') ;
    for (var i=0; i<list.length; i++)
    {
        if(id == list[i].pId)
        {
            return true;

        }
    }
    
}