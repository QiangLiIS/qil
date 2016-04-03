function init() {


  var content = document.getElementsById('content');
  for ( i = 0; i < content.length; i++ ) {
    var para = document.createElement('p');
    var node = document.createTextNode('This was added by JavaScript');
    para.appendChild(node);
      
    content[i].appendChild(para);
  }
}
