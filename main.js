$(function() {

function startFire() {

  setInterval(function(){
    redBurn();
    orangeBurn();
  }, 1000);
};

function redBurn(){
  allRed = $("#land .btn-danger");

  if(allRed.closest("li").next().find("a").hasClass("btn-warning")){
    allRed.closest("li").next().find("a").removeClass("btn-warning").addClass("btn-danger");
  }

  if(allRed.closest("li").prev().find("a").hasClass("btn-warning")){
    allRed.closest("li").prev().find("a").removeClass("btn-warning").addClass("btn-danger");
  }  
};

function orangeBurn(){
  allBurning = $("#land .btn-danger").add("#land .btn-warning");

  if(allBurning.closest("li").next().find("a").hasClass("btn-default")){
    allBurning.closest("li").next().find("a").removeClass("btn-default").addClass("btn-warning");
  
    if(allBurning.closest("li").next().next().find("a").hasClass("btn-default")){
      allBurning.closest("li").next().next().find("a").removeClass("btn-default").addClass("btn-warning");
    }
  }

  if(allBurning.closest("li").prev().find("a").hasClass("btn-default")){
    allBurning.closest("li").prev().find("a").removeClass("btn-default").addClass("btn-warning");
    
    if(allBurning.closest("li").prev().prev().find("a").hasClass("btn-default")){
      allBurning.closest("li").prev().prev().find("a").removeClass("btn-default").addClass("btn-warning");
    }
  }  

};



///Shows active power button
  $(document).on("click", ".power", function(e){
    e.preventDefault();
    $(".power").removeClass("selected-power");
    $(this).addClass("selected-power");
  });

  $("#land").on("click", "a", function(e){
    e.preventDefault();

    if ($(".selected-power").attr("id")==="lake") {
      $(this).removeClass("btn-default").addClass("btn-info");
    }
    else if($(".selected-power").attr("id")==="campfire") {
      $(this).removeClass("btn-default").addClass("btn-danger");
    };

    $(this).hasClass("btn-danger")?startFire():null;
  
  });

});
