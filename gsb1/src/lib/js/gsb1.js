function replier() {
  $('#navbarSupportedContent').collapse("hide");
}

function activBtns(){
  var recupId = document.getElementById("selectCompo").value;
  var bt1 = document.getElementById("sub1");
  //var bt2 = document.getElementById("sub2");
  if(recupId != 0 ){
      bt1.disabled = false;
      //bt2.disabled = false;
      bt1.setAttribute("class", "btn  btn-success pull-right");
      //bt2.setAttribute("class", "btn  btn-primary pull-right");
  }else{
    bt1.disabled = true;
    //bt2.disabled = true;
    bt1.setAttribute("class", "btn  btn-default pull-right");
    //bt2.setAttribute("class", "btn  btn-default pull-right");
  }
}
