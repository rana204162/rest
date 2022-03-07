/*function openNav() {
    var element = document.getElementById("mySidebar");
    element.classList.toggle("openSidebar");
}*/
function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    //document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    //document.getElementById("main").style.marginRight= "0";
}
$(".sub").click(function(e) {
    e.preventDefault();
    $("#openSWAL").click();
});
function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        rtl:true,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:0,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:8
            },
            1200:{
                items:8
            }
        }
    });

    $("#amg").click(function(e) {
        var button = $("#qr-reader__dashboard_section_csr button");
        button[0].click();
        //$("#amg")[0].style.display="none";
    });
  
});
if (document.getElementById("image") != null){
    document.getElementById("image").onchange = function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // e.target.result is a base64-encoded url that contains the image data
                document.getElementById('profileImage').setAttribute('src', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    }
}


$('#r11').on('click', function(){
    $(this).parent().find('a').trigger('click')
  })
  
  $('#r12').on('click', function(){
    $(this).parent().find('a').trigger('click')
  })

  var counter = 0;
   
  $(document).ready(function() {

      $(".addMe").click(function(){
          counter++;

        //   $(".theCount").text(counter);

          $(this).parent().find('.theCount').text(counter);

      });
        
      $(".main").click(function(){
          if(counter != 0 ){
            counter--;

          }



          
          $(this).parent().find('.theCount').text(counter);
    });
    
    
    $(".card").click(function(){
        $(this).siblings().find('.new').fadeOut();
                    $(this).find('.new').slideToggle();

       
    });

    $(".delte").fadeOut();

    $(".descr").mouseenter(function(){
        $(".edt").fadeOut();
        $(".delte").fadeIn();

       
    });
    $(".descr").mouseleave(function(){
        $(".edt").fadeIn();
        $(".delte").fadeOut();

       
    });

    
    $('.delete').fadeOut();

    $(".cont-shop").click(function(){
        $(this).siblings().find('.delete').fadeOut();
                    $(this).find('.delete').fadeToggle();

       
    });

  });

  $(".addcard").click((function(){
  $( `       <div class="card mb-3 slidecard ">
  <div class="plus">
    <!-- <i class="far fa-plus-circle plus" style="font-size: 40px"></i> -->
  </div>

  <div class="card-img-top contdelte">
    <i class="far fa-times-circle delete2" ></i>
    <img class="card-img-top" src="../assets/img/addpics.png" alt="Card image cap" />
  </div>
  <div class="card-body">
    <div class="d-flex justify-content-between">
      <div>
        <p class="m-0 p-0" style="color: black" data-toggle="modal" data-target="#exampleModalCenter">
          اسم الطبق
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2072)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.59882 2.85398L1.55982 9.90858C1.48449 10.0138 1.4351 10.1499 1.41882 10.2971L1.06632 13.5129C1.05443 13.6215 1.06096 13.7325 1.0854 13.8369C1.10984 13.9413 1.15149 14.0362 1.20699 14.1139C1.26249 14.1916 1.33028 14.25 1.40486 14.2842C1.47945 14.3184 1.55874 14.3275 1.63632 14.3109L3.93382 13.8174C4.03891 13.7948 4.13611 13.7259 4.21132 13.6207L9.25032 6.56608C9.34406 6.43481 9.39672 6.2568 9.39672 6.07118C9.39672 5.88557 9.34406 5.70755 9.25032 5.57628L7.30532 2.85328C7.21158 2.72227 7.08453 2.64868 6.95207 2.64868C6.81961 2.64868 6.69257 2.72227 6.59882 2.85328V2.85398ZM2.15832 12.7828L2.38232 10.736L6.95232 4.33798L8.18982 6.07118L3.61982 12.4692L2.15832 12.7828Z"
                fill="black" />
              <path d="M5.7207 5.67288L6.2507 4.93018L7.8717 7.19818L7.3412 7.94088L5.7207 5.67288Z"
                fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1_2072">
                <rect width="10" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>


        </p>
        <p class="m-0 p-0" data-toggle="modal" data-target="#subs">
          الوصف
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2072)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.59882 2.85398L1.55982 9.90858C1.48449 10.0138 1.4351 10.1499 1.41882 10.2971L1.06632 13.5129C1.05443 13.6215 1.06096 13.7325 1.0854 13.8369C1.10984 13.9413 1.15149 14.0362 1.20699 14.1139C1.26249 14.1916 1.33028 14.25 1.40486 14.2842C1.47945 14.3184 1.55874 14.3275 1.63632 14.3109L3.93382 13.8174C4.03891 13.7948 4.13611 13.7259 4.21132 13.6207L9.25032 6.56608C9.34406 6.43481 9.39672 6.2568 9.39672 6.07118C9.39672 5.88557 9.34406 5.70755 9.25032 5.57628L7.30532 2.85328C7.21158 2.72227 7.08453 2.64868 6.95207 2.64868C6.81961 2.64868 6.69257 2.72227 6.59882 2.85328V2.85398ZM2.15832 12.7828L2.38232 10.736L6.95232 4.33798L8.18982 6.07118L3.61982 12.4692L2.15832 12.7828Z"
                fill="black" />
              <path d="M5.7207 5.67288L6.2507 4.93018L7.8717 7.19818L7.3412 7.94088L5.7207 5.67288Z"
                fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1_2072">
                <rect width="10" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>


        </p>
      </div>
      <div class="row">
        <p style="color: black" data-toggle="modal" data-target="#price">
          السعر
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2072)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6.59882 2.85398L1.55982 9.90858C1.48449 10.0138 1.4351 10.1499 1.41882 10.2971L1.06632 13.5129C1.05443 13.6215 1.06096 13.7325 1.0854 13.8369C1.10984 13.9413 1.15149 14.0362 1.20699 14.1139C1.26249 14.1916 1.33028 14.25 1.40486 14.2842C1.47945 14.3184 1.55874 14.3275 1.63632 14.3109L3.93382 13.8174C4.03891 13.7948 4.13611 13.7259 4.21132 13.6207L9.25032 6.56608C9.34406 6.43481 9.39672 6.2568 9.39672 6.07118C9.39672 5.88557 9.34406 5.70755 9.25032 5.57628L7.30532 2.85328C7.21158 2.72227 7.08453 2.64868 6.95207 2.64868C6.81961 2.64868 6.69257 2.72227 6.59882 2.85328V2.85398ZM2.15832 12.7828L2.38232 10.736L6.95232 4.33798L8.18982 6.07118L3.61982 12.4692L2.15832 12.7828Z"
                fill="black" />
              <path d="M5.7207 5.67288L6.2507 4.93018L7.8717 7.19818L7.3412 7.94088L5.7207 5.67288Z"
                fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1_2072">
                <rect width="10" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>


        </p>
      </div>
    </div>
  </div>
</div>` ).prependTo( $( ".cont-card" ) );


$(".delete2").click((function(){

  $(this).parents().find(".slidecard").remove();

}));

}));

$(".added").click((function(){
  $(this).parent().prepend('<form id="inputWindow" onsubmit="return false"><input type="text" id="input1" name ="extra_row" class="newInput form-control mt-2 mb-2 w-100" ></form>');
}));


$(".clicked").click(function(e) {
  $(".clicker").click();
});

$("#hedding").fadeOut();

$(".shows").click(function(e) {
  $("#hedding").fadeIn();

});



$("#hedding2").fadeOut();

$(".shows2").click(function(e) {
  $("#hedding2").fadeIn();
});

$('#send_btn').click(function(e){
    $('#send_btn')[0].innerText = 'مرسل';
});
$('#send_btn1').click(function(e){
    $('#send_btn1')[0].innerText = 'مرسل';
});
$('#send_btn2').click(function(e){
    $('#send_btn2')[0].innerText = 'مرسل';
})
$('#proggress_btn').click(function(e){
    $('#proggress_btn')[0].innerText = 'جاهز';
    $('#proggress_btn')[0].style.width= '105px';
});
$('#proggress_btn1').click(function(e){
    $('#proggress_btn1')[0].innerText = 'جاهز';
    $('#proggress_btn1')[0].style.width= '105px';
});
$('#proggress_btn2').click(function(e){
    $('#proggress_btn2')[0].innerText = 'جاهز';
    $('#proggress_btn2')[0].style.width= '105px';
})
$('#delete4').click(function(e){
    $('#delete_div_4').attr("style", "display: none !important");
})
$('#delete1').click(function(e){
    $('#delete_div_1').attr("style", "display: none !important");
})
$('#delete2').click(function(e){
    $('#delete_div_2').attr("style", "display: none !important");
})
$('#delete3').click(function(e){
    $('#delete_div_3').attr("style", "display: none !important");
})
function deleteDiv(e){
console.log(e.parentNode);
e.parentNode.remove();
//e.parentNode.attr("style", "display: none !important");
}

// $('#inputWindow').on(function() {
//console.log('here');
//        var answer = $("input[name=extra_row]").val();
//        console.log(answer);
//         $('#extra').append('<div class="d-flex box-da mt-1 form-check form-check-inline" id="delete_div_4">'+
//                                    '<label class="form-check-label w-50 float-right" >'+answer+'</label>'+
//                                     '<button class="btn bg none w-75 float-left">غير متوفر</button>'+
//                                     '<i class="mr-2 fas fa-minus-circle orange show" id="delete4"></i>'+
//                                   '</div>');
//
//   });
   $(document).on('keypress',function(e) {
       if(e.which == 13) {
       var answer = $("input[name=extra_row]").val();
                $('#extra').append('<div class="d-flex box-da mt-1 form-check form-check-inline" id="delete_div_4">'+
                                           '<label class="form-check-label w-50 float-right" >'+answer+'</label>'+
                                            '<button class="btn bg none pr-2 pl-2 float-left">غير متوفر</button>'+
                                            '<i class="mr-2 fas fa-minus-circle orange show" onclick="deleteDiv(this)"></i>'+
                                          '</div>');
       }
   });
   $("body").on( 'scroll', function(){
      $(".footer").attr("style", "position: relative !important; margin-top:30px !important");

   });

        var i= parseInt(0);
    $('#add_to_cart1').on('click', function(){
      $('#cart').attr("style", "display: block !important;");

      var a = document.getElementById('cart').innerHTML;
      var b = parseInt(a);
      var d = b+i;
      i++;
      document.getElementById('cart').innerHTML = i;
      });

   $('#add_to_cart2').on('click', function(){
      $('#cart').attr("style", "display: block !important;");
      var a = document.getElementById('cart').innerHTML;
            var b = parseInt(a);
            var d = b+i;
            i++;
            document.getElementById('cart').innerHTML = i;
      });
      $('.delete').on('click', function(){
        $(this).parent().attr("style", "display: none !important");
      });