
var url = '#';
var addid;
function show_add(evt,div_timeline,id){
   addid=document.getElementById(id).parentElement.id;
if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!==null) evt.cancelBubble = true;
document.getElementById('div_timeline').style.display = "";


}

function hide(div_timeline){
document.getElementById('div_timeline').style.display = "none";
window.location = url;
}

document.onclick=function()
{hide('div2_timeline');
};



var url = '#';
var editid;
function show_edit(evt,div_timeline_edit,id){
   editid=document.getElementById(id).parentElement.id;
if (evt.stopPropagation)    evt.stopPropagation();
 if (evt.cancelBubble!==null) evt.cancelBubble = true;
document.getElementById('div_timeline_edit').style.display = "";

}

function hide(div_timeline_edit){
document.getElementById('div_timeline_edit').style.display = "none";
window.location = url;
}

document.onclick=function()
{hide('div2_timeline_edit');
};
















function change_color()
{
    var select=document.getElementById("select_color");
    var color=select.selectedIndex;
    var set=document.getElementById("sample");
    if(color===0)
    {
        set.setAttribute('style','background-color:#FFC1C1');
    }
    else if(color===1)
    {
        set.setAttribute('style','background-color:#BFEFFF');
    }
    else if(color===2)
    {
        set.setAttribute('style','background-color:#FFFF00');
    }
    else
    {
        set.setAttribute('style','background-color:#EE7AE9');
    }
}


function change_color_edit()
{
    var select=document.getElementById("select_color_edit");
    var color=select.selectedIndex;
    var set=document.getElementById("sample_edit");
    if(color===0)
    {
        set.setAttribute('style','background-color:#FFC1C1');
    }
    else if(color===1)
    {
        set.setAttribute('style','background-color:#BFEFFF');
    }
    else if(color===2)
    {
        set.setAttribute('style','background-color:#FFFF00');
    }
    else
    {
        set.setAttribute('style','background-color:#EE7AE9');
    }
}






//set text
var uniqueId = function() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};

function addItem()
{
    var test2;
    test2=addid;
  //  alert(document.getElementById(test).parentElement.id);

    var div_content=document.createElement('div');
    var div_c_id=uniqueId();
    div_content.setAttribute('id',div_c_id);
    div_content.setAttribute('class','cd-timeline-content');

    var div_block=document.createElement('div');
    div_b_id=uniqueId();
    div_block.setAttribute('id',div_b_id);
    div_block.setAttribute('class','cd-timeline-block');

    var titleToAdd=document.getElementById("change-event");
    var para_title=document.createElement('h2');
    var paraId=uniqueId();
    para_title.setAttribute('id',paraId);
    var node_title=document.createTextNode(titleToAdd.value);
    para_title.appendChild(node_title);

    var contentToAdd = document.getElementById("change-content");
    var para_content=document.createElement('p');
    var paraId_content=uniqueId();
    para_content.setAttribute('id',paraId_content);
    var node_content=document.createTextNode(contentToAdd.value);
    para_content.appendChild(node_content);

    var para_a=document.createElement('a');
    var paraa_Id=uniqueId();
    para_a.setAttribute('id',paraa_Id);
    para_a.setAttribute('href',"#");
    para_a.setAttribute('class','cd-read-more');
    para_a.setAttribute('onclick','show_change(event,"div_timeline");');
    var a_content=document.createTextNode('edit');
    para_a.appendChild(a_content);

   div_content.appendChild(para_title);
   div_content.appendChild(para_content);
   div_content.appendChild(para_a);


// color
   var select=document.getElementById("select_color");
   var color=select.selectedIndex;
   var image=document.createElement('div');
   var image_Id=uniqueId();
   image.setAttribute('id',image_Id);
   if(color===0)
   {
       image.setAttribute('style','background-color:#FFC1C1');
   }
   else if(color===1)
   {
       image.setAttribute('style','background-color:#BFEFFF');
   }
   else if(color===2)
   {
       image.setAttribute('style','background-color:#FFFF00');
   }
   else
   {
       image.setAttribute('style','background-color:#EE7AE9');
   }
  image.setAttribute('class','cd-timeline-img cd-picture');

  div_block.appendChild(image);
  div_block.appendChild(div_content);


  var add=document.getElementById('section');
  add.appendChild(div_block);



}




function Edit()
{
  var test;
  test=editid;
  var titleToedit=document.getElementById("change-event-edit").value;
  var contentToedit=document.getElementById("change-content-edit").value;
  var divid=document.getElementById(test).childNodes;
  divid[1].innerHTML=titleToedit;
  divid[3].innerHTML=contentToedit;

  var parent_id=document.getElementById(test).parentElement.id;
  var parent_div=document.getElementById(parent_id).childNodes;
  var image_edit_id=parent_div[1].id;
  var image_edit=document.getElementById(image_edit_id);
  var select_edit=document.getElementById("select_color_edit");
  var color_edit=select_edit.selectedIndex;
  if(color_edit===0)
  {
      image_edit.setAttribute('style','background-color:#FFC1C1');
  }
  else if(color_edit===1)
  {
      image_edit.setAttribute('style','background-color:#BFEFFF');
  }
  else if(color_edit===2)
  {
      image_edit.setAttribute('style','background-color:#FFFF00');
  }
  else
  {
      image_edit.setAttribute('style','background-color:#EE7AE9');
  }

}
