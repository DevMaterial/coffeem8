var burgerNav = document.querySelector('i');
var navigation = document.querySelector('header nav ul');
var submit = document.querySelectorAll('button');

burgerNav.addEventListener('click', function(){
  navigation.classList.toggle('navStatus');
});

for (var i = 0; i <= 1; i++){
  submit[i].addEventListener('click', function(e){
      e.preventDefault();
  });
}

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
