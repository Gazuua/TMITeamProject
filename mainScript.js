//변경된 부분 attr("value")->val()변경

function dice(){
  var ranNumArr=[];
  var s;
  for(var i=0;i<8;i++){
    ranNumArr[i]=Math.floor(Math.random()*8)+1;

    for(var j=0;j<i;j++){
      if(ranNumArr[i]==ranNumArr[j]){
        i=i-1;
        break;
        }
      }
    }
     var img=document.getElementById(ranNumArr[0]);
     $(img).attr("src","img/한식.jpg");
     $(img).val("한식");
     img=document.getElementById(ranNumArr[1]);
     $(img).attr("src","img/서양식.jpg");
     $(img).val("서양식");
     img=document.getElementById(ranNumArr[2]);
     $(img).attr("src","img/일식.jpg");
     $(img).val("일식");
     img=document.getElementById(ranNumArr[3]);
     $(img).attr("src","img/중식.jpg");
     $(img).val("중식");
     img=document.getElementById(ranNumArr[4]);
     $(img).attr("src","img/아시아식.jpg");
     $(img).val("아시아식");
     img=document.getElementById(ranNumArr[5]);
     $(img).attr("src","img/이색음식점.jpg");
     $(img).val("이색음식점");
     img=document.getElementById(ranNumArr[6]);
     $(img).attr("src","img/채식전문점.jpg");
     $(img).val("채식전문점");
     img=document.getElementById(ranNumArr[7]);
     $(img).attr("src","img/카페.jpg");
     $(img).val("카페");
  }


  $(document).ready(function(){
    $("#8-button1").hide();
    $('#8-button2').hide();
    $('#8-button3').hide();
    $('#8-button4').hide();
    $('#4-button1').hide();
    $('#4-button2').hide();
    $('#2-button').hide();
    $('#1-button').hide();
    //변경된 부분 이전&다음 버튼
    $('#ppage').hide();
    $('#npage').hide();

    function showLightBox() {
      $('#darken-background').show();
    }
    function hideLightBox() {
      $('#darken-background').hide();
      $('.body').css('overflow','');
    }
    /* 줄 안 넣은 경우
    var id=9;
    var g=50;
    $('#pic1').click(function(){
      var pic=document.getElementById(id);
      var img=$('#pic1').attr("src");
      var graph=document.getElementById(g);
      $(pic).attr("src",img);
      var text=$("#food1").text();
      $(pic).val(text);
      $(graph).attr("src","tournamentLeft.png");
      id++;
      g++;
      hideLightBox();
    });
    $('#pic2').click(function(){
      var pic=document.getElementById(id);
      var img=$('#pic2').attr("src");
      var graph=document.getElementById(g);
      $(pic).attr("src",img);
      var text=$("#food2").text();
      $(pic).val(text);
      $(graph).attr("src","tournamentRight.png");
      id++;
      g++;
      hideLightBox();
    });
    */

    /* 줄 넣은 경우 */
    var id = 9;
    var g = 50;
    $('#pic1').click(function() {
      var pic = document.getElementById(id);
      var img = $('#pic1').attr("src");
      $(pic).attr("src", img);
      var graph = document.getElementById(g);
      $(graph).attr("src", "img/selectLeft.jpg");
      var text = $("#food1").text();
      $(pic).val(text);
      id++;
      g += 2
      hideLightBox();
    });
    $('#pic2').click(function() {
      var pic = document.getElementById(id);
      var img = $('#pic2').attr("src");
      $(pic).attr("src", img);
      var graph = document.getElementById(++g);
      $(graph).attr("src", "img/selectRight.jpg");
      var text = $("#food2").text();
      $(pic).val(text);
      id++;
      g++;
      hideLightBox();
    });

    $('#start').click(function() {
      $('#start').hide();
      $('#8-button1').show();
    });

    $('#8-button1').click(function(){
      var img=$('#1').attr("src");
      $('#pic1').attr("src",img);
      img=$('#2').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#1').val());
      $("#food2").text($('#2').val());
      showLightBox();
      $("#pic1").click(function(){
        $('#8-button1').hide();
        $('#8-button2').show();
      });

      $("#pic2").click(function(){
        $('#8-button1').hide();
        $('#8-button2').show();
      });
      //$('#8-button1').hide();
      //$('#8-button2').show();
    });

    $('#8-button2').click(function(){
      var img=$('#3').attr("src");
      $('#pic1').attr("src",img);
      img=$('#4').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#3').val());
      $("#food2").text($('#4').val());
      showLightBox();
      $("#pic1").click(function(){
        $('#8-button2').hide();
        $('#8-button3').show();
      });

      $("#pic2").click(function(){
        $('#8-button2').hide();
        $('#8-button3').show();
      });
    });

    $('#8-button3').click(function(){
      var img=$('#5').attr("src");
      $('#pic1').attr("src",img);
      img=$('#6').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#5').val());
      $("#food2").text($('#6').val());
      showLightBox();
      $("#pic1").click(function(){
        $('#8-button3').hide();
        $('#8-button4').show();
      });

      $("#pic2").click(function(){
        $('#8-button3').hide();
        $('#8-button4').show();
      });
    });

    $('#8-button4').click(function(){
      var img=$('#7').attr("src");
      $('#pic1').attr("src",img);
      img=$('#8').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#7').val());
      $("#food2").text($('#8').val());
      showLightBox();
      $("#pic1").click(function(){
        $('#8-button4').hide();
        $('#4-button1').show();
      });

      $("#pic2").click(function(){
        $('#8-button4').hide();
        $('#4-button1').show();
      });
    });


    $('#4-button1').click(function(){
      var img=$('#9').attr("src");
      $('#pic1').attr("src",img);
      img=$('#10').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#9').val());
      $("#food2").text($('#10').val());
      showLightBox();
      $('#darken-background').click(function(){
        hideLightBox();
      });
      $("#pic1").click(function(){

        $('#4-button1').hide();
        $('#4-button2').show();
      });

      $("#pic2").click(function(){
        $('#4-button1').hide();
        $('#4-button2').show();
      });
    });

    $('#4-button2').click(function(){
      var img=$('#11').attr("src");
      $('#pic1').attr("src",img);
      img=$('#12').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#11').val());
      $("#food2").text($('#12').val());
      showLightBox();
      $("#pic1").click(function(){
        $('#4-button2').hide();
        $('#2-button').show();
      });

      $("#pic2").click(function(){
        $('#4-button2').hide();
        $('#2-button').show();
      });
    });

    $('#2-button').click(function(){
      var img=$('#13').attr("src");
      $('#pic1').attr("src",img);
      img=$('#14').attr("src");
      $('#pic2').attr("src",img);
      $("#food1").text($('#13').val());
      $("#food2").text($('#14').val());
      showLightBox();

      $("#pic1").click(function(){
        $('#2-button').hide();
        img=$('#pic1').attr("src");
        $('#pic').attr("src",img);
        $("#food").val($('#13').val());
        $("#food").text($('#13').val());
        $('#darken-background1').show();
      });

      $("#pic2").click(function(){
        $('#2-button').hide();
        img=$('#pic2').attr("src");
        $('#pic').attr("src",img);
        $('#food').val($('#14').val());
        $("#food").text($('#14').val());
        //alert($('#food').val());
        $('#darken-background1').show();
      });
    });

    $('#next').click(function(){
      $('#darken-background1').hide();
      //$('#tournament').hide();
      var img=$('#pic').attr("src");
      $('#search').attr("src",img).addClass('box').css({
        width:140,
        height:100
      });
      $("#result").text($('#food').val()+"을(를) 검색 합니다.");
      $('#1-button').show();
    });

    $("#next").click(function() {
      $.ajax({
        url: "/catsave",
        type: "post",
        dataType: "json",
        data: {
          id : $('#saveID').attr("name"),
          category : $('#food').val()
        },
        success: function(result) {
          //alert(result.success);
        }
      });
    });

    $('#lightbox').click(function(event){
      event.stopPropagation();
    });

    $('#darken-background').click(function(){
      hideLightBox();
    });

  });

  $(document).ready(function () {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              var result = this.responseText;
              $(result).find("item").each(function () {
                  var areaCode = $(this).find("code").text();
                  var areaName = $(this).find("name").text();
                  $("#region-city").append("<option value='" + areaCode + "'>" + areaName + "</option>");
              })
          }
      };
      xmlhttp.open("GET", "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=0Wdx8eXmluZMDXXxcGxfQXyXigOooZdgfJ6KH3GrAksdbdLXzUUskShFvRIOMy0%2FgrjIPJkWKAPAjHrM4Vp9lA%3D%3D&numOfRows=17&pageSize=17&pageNo=1&startPage=1&MobileOS=ETC&MobileApp=AppTest", true);
      xmlhttp.send();
  });

function getSigunguList(value){
  $(document).ready(function () {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              var result = this.responseText;
              $("#region-part").append("<option>군 선택</option>");
              $(result).find("item").each(function () {
                  var areaCode = $(this).find("code").text();
                  var areaName = $(this).find("name").text();
                  $("#region-part").append("<option value='" + areaCode + "'>" + areaName + "</option>");
              });
          }
      };
      $("#region-part option").remove();
      var url="http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaCode?serviceKey=vdPFufP%2FkXq6znRm8ggSmqWvF6VI64OXqRy1ra%2FwtuRK2WAoApI5IeMYn6aeEAJLBivurDDlBXOL8jqFy5xobQ%3D%3D&numOfRows=100&pageSize=10&pageNo=1&startPage=1&MobileOS=ETC&MobileApp=AppTest&areaCode="+value;

      xmlhttp.open("GET",url, true);
      xmlhttp.send();
  });
}
//지도 처음화면 변수
var container;
var options;
var map;
var markers=[];
//지도 화면 띄우기
$(document).ready(function () {
  container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  options = { //지도를 생성할 때 필요한 기본 옵션
     center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
  };
  map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
});

var pageNum = 1;
function changeOptions() {
    $(document).ready(function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var selectCity = document.getElementById("region-city");
                var selectPart = document.getElementById("region-part");
                var result = this.responseText;
                $("#region-city").click(function () {
                    pageNum = 1;
                    for (var i = 0; i < markers.length; i++) {
                      markers[i].setMap(null);
                    }
                });
                $("#region-part").click(function () {
                    pageNum = 1;
                    for (var i = 0; i < markers.length; i++) {
                      markers[i].setMap(null);
                    }
                });

                var numofrows = $(result).find("numOfRows").text();
                var totalcount = $(result).find("totalCount").text();
                //변경된 부분 이전/다음 버튼의 설정
                if (numofrows * pageNum < totalcount) $("#npage").show();
                else $("#npage").hide();
                if(pageNum!=1) $("#ppage").show();
                else $("#ppage").hide();

                $("#ppage").click(function (event) {
                  $("#list ol li").remove();
                  for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                  }
                  pageNum--;
                  event.stopImmediatePropagation();
                });
                $("#npage").click(function (event) {
                  $("#list ol li").remove();
                  for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                  }
                  event.stopImmediatePropagation();
                    pageNum++;
                });
                //여기까지 추가
                if ($(result).find("pageNo").text() == 1) {
                    $("#list ol li").remove();

                }
                var bounds = new daum.maps.LatLngBounds();
                var i=0;
                $(result).find("item").each(function () {
                  //변경된 부분 변수 설정
                    var mapX = $(this).find("mapx").text();
                    var mapY = $(this).find("mapy").text();
                    var title = $(this).find("title").text();
                    var addr = $(this).find("addr1").text();
                    var tel = $(this).find("tel").text();


                    // 변경된 부분 마커가 표시될 위치입니다
                    var markerPosition  = new daum.maps.LatLng(mapY, mapX);

                    // 변경된 부분 마커를 생성합니다
                     var marker = new daum.maps.Marker({
                      position: markerPosition
                    });

                  // 변경된 부분 마커가 지도 위에 표시되도록 설정합니다
                  marker.setMap(map);
                  markers.push(marker);
                  bounds.extend(markerPosition);
                  map.setBounds(bounds);
                  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
          function makeOverListener(map, marker, infowindow) {
            return function() {
              infowindow.open(map, marker);
            };
          }

          // 인포윈도우를 닫는 클로저를 만드는 함수입니다
          function makeOutListener(infowindow) {
            return function() {
              infowindow.close();
            };
          }

          var infowindow = new daum.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">' + title + '</div>'
          });
          daum.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          daum.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
                  $("#list ol").append("<li>" + addr + " " +  title + "</li>");
                });
            }
        };
        var selectCity = document.getElementById("region-city");
        var selectPart = document.getElementById("region-part");
        var menu=$("#food").text();
        if(menu=="한식") var cat="A05020100";
        else if(menu=="서양식") var cat="A05020200";
        else if(menu=="일식") var cat="A05020300";
        else if(menu=="중식") var cat="A05020400";
        else if(menu=="아시아식") var cat="A05020500";
        else if(menu=="이색음식점") var cat="A05020700";
        else if(menu=="채식전문점") var cat="A05020800";
        else if(menu=="카페") var cat="A05020900";
        else var cat="";

        //변경된 부분 pageNum 더해주기
        var url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=vdPFufP%2FkXq6znRm8ggSmqWvF6VI64OXqRy1ra%2FwtuRK2WAoApI5IeMYn6aeEAJLBivurDDlBXOL8jqFy5xobQ%3D%3D&contentTypeId=39&areaCode="+selectCity.options[selectCity.selectedIndex].value+"&sigunguCode="+selectPart.options[selectPart.selectedIndex].value+"&cat1=A05&cat2=A0502&cat3="+cat+"&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=12&pageNo="+pageNum;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
}
