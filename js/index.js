// new Vue({
//   el: '#choose',
//   data: {
//     picked: ''
//   }
// })
function hideall(){
  // $(".individual1").hide();
  $(".individual2").hide();
  $(".individual3").hide();
  $(".individual4").hide();
  $(".individual5").hide();
  $(".individual6").hide();
  $(".renshu").hide();
}

function showothers1(){
  if(document.getElementById("One").checked=true){
      $(".individual1").show();
      $(".renshu").hide();
    }
}

function showothers2(){
  if(document.getElementById("Two").checked=true){
    $(".renshu").show();
  }

}

function indivi(){
  var renshu2=document.getElementById('renshu').value
  // console.log(renshu2);
  $(".individual1").hide();
  $(".individual2").hide();
  $(".individual3").hide();
  $(".individual4").hide();
  $(".individual5").hide();
  $(".individual6").hide();
  for(var i=1;i<=renshu2;i++){
    $(".individual"+i).show();

  }
}
