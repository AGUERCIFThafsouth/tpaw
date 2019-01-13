$(document).ready(function () {
    console.log("DOM ready...!");

    $("#gps").on("click", function (event) {

        
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        
    })

    function showPosition(position) {
        var x = document.querySelector("img");
        x.setAttribute('src', "https://maps.googleapis.com/maps/api/staticmap?markers=" + position.coords.latitude+"," + position.coords.longitude+"&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
    }

   // var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
  
   $(document).ready(function(){
  $("#name").keypress(function(){
    $("#nam").text($("#name").val().length);
  });
   });
   $(document).ready(function(){
    $("#firstname").keypress(function(){
      $("#fname").text($("#firstname").val().length);
    });
     });


     

   $("#submit").on("click", function () {
    var
        name = document.querySelector("#name").value,
        firstname = document.querySelector("#firstname").value,
        date = document.querySelector("#birth").value,
        adress = document.querySelector("#adresse").value,
        mail = document.querySelector("#mail").value;
        
 
        contactStore.add(name, firstname, date, adress, mail);
        contactList = contactStore.getList();
        document.querySelector("table tbody").innerHTML = "";
        for (var index in contactList) {
          document.querySelector("table tbody").innerHTML =document.querySelector("table tbody").innerHTML +
          '<td>' +contactList[index].name +
          '</td><td>' + contactList[index].firstname+
          '</td><td>'+contactList[index].date+
          '</td><td>'+contactList[index].adress+
          '</td><td>'+contactList[index].mail+'</td>';
 
      }
 
 });
});
