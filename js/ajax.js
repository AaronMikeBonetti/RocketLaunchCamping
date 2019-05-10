// window.addEventListener("load", function(){
//     this.setTimeout()
//   }
//   );
$(function(){

//:::::::::::Launch API:::::::::::::://
//Use for API GET Request:
//https://launchlibrary.net/1.4/launch/USA
// location.id =16 Cape Canaveral
// location.id = 17 for kennedy Space center

    $.ajax({
        
        type: 'GET',
        url: 'https://launchlibrary.net/1.4/launch/next/100?fields=name,net,location',
        success: function(data){
            var launches= [];

            for(i=0; i <=99; i++){
          var location = data.launches[i].location.id;
          var name = data.launches[i].name;
          var initialDate = data.launches[i].net.split(" ");
          var finalDate = initialDate.slice(0,3).join(" ")
          var initialTime = initialDate[3].substring(0,5).split(":").join("")
          var numTime = Number(initialTime)
          var finalTime = ""

          
            if(location === 16 || data.launches[i].location.id === 17){

                    var pad = data.launches[i].location.pads[0].name;
                              
             if(numTime < 1200 && numTime > 0){
                 finalTime = numTime + " AM"
                
            }
            if(numTime > 1200){
                pmTime = numTime - 1200
                finalTime = pmTime + " PM"
            }
            else{
                finalTime = "1200 AM"

           }

           if(finalTime.length < 7){
               finalTime = "0" + finalTime 
           }
            
            
                    
                    
    
                    launches.push("<span>Rocket:</span>&nbsp" + name + " <br> " +"<span>Date: </span>&nbsp "+ finalDate + " "+ finalTime + " <br> " + "<span>Location:</span>&nbsp" + pad);    
                 }
           
           }
    
           
        for(i=0; i<= 3; i++){
        $( "#launchlist" ).append("<li>"+ launches[i] + "</li>").addClass("launches");
        
    }
          
        }
    });
    //::::::::::::::Weather API:::::::::::::::://

//Kennedy Space Station= https://api.darksky.net/forecast/2038ed25248f743cdd2d093f8202e6ef/28.5856559,-80.6507658?exclude=currently,flags,hourly,minutely&units=us

// Weather Icons API
// http://api.openweathermap.org/data/2.5/forecast?id=4149959&units=Imperial&APPID=19610317003906e21fb39af74af63ae6

  $.ajax({
    type: 'GET',
    url: 'https://api.darksky.net/forecast/2038ed25248f743cdd2d093f8202e6ef/28.5856559,-80.6507658?exclude=currently,flags,hourly,minutely&units=us',
    success: function(data){
        var forecast= [];
        for(i=0; i<=4; i++){
            var calcDate = (data.daily.data[i].time*1000);
            var preTemp= data.daily.data[i].temperatureHigh;
            var temp = Math.round(preTemp);
            var dates= new Date(calcDate);
            var newDates= String(dates).split(" ").splice(0,1).join(" ");
            
            var summary= data.daily.data[i].summary;
           
            
        
          
           forecast.push(newDates + " <br> " + temp + " F");

      
       
        }
        for(i=0; i<= 4; i++){
            $( "#forecast" ).append("<li>"+ forecast[i] + "</li>").addClass("forecast");
        }
              
    }
    
  });
  $.ajax({
    type: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/forecast?id=4149959&units=Imperial&APPID=19610317003906e21fb39af74af63ae6',
    success: function(data){
        var icons= [];
        for(i=1; i<=40; i+=8){
            var calcDate = (data.list[i].dt)*1000;
            var dates= new Date(calcDate);

            var id= data.list[i].weather[0].id;
            
            if(id<=298){
              
                $( "#forecastIcons" ).append("<li>"+ "<ion-icon name='thunderstorm'></ion-icon>" + "</li>");
            }
            if(id<=399&&id>=299){
               
                $( "#forecastIcons" ).append("<li>"+ "<ion-icon name='rainy'></ion-icon>" + "</li>");
            }
            if(id<=599 && id>=499){
               
                $( "#forecastIcons" ).append("<li>"+ "<ion-icon name='rainy'></ion-icon>" + "</li>");
            }
            
            if(id<=799&&id>=699){
               
                $( "#forecastIcons" ).append("<li>"+"<ion-icon name='cloud-outline'></ion-icon>" + "</li>");
            }
            if(id===800){
                
                $( "#forecastIcons" ).append("<li>"+ "<ion-icon name='sunny'></ion-icon>" + "</li>");
            }
            if(id>800){
              
                $( "#forecastIcons" ).append("<li>"+ "<ion-icon name='cloudy'></ion-icon>" + "</li>");
            }
            
            
        }

        }
    }); 

  function initMap() {
	
	var jetty = {
		info: '<strong>Jetty Park Campground</strong><br>\
        400 Jetty Park Rd<br> Cape Canaveral,FL 32920<br>\
					<a href="https://www.google.com/maps/dir//cape+canaveral+camping/@28.4700728,-81.5644413,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e0a65ab4e711e9:0x6e317a25e092d2fb!2m2!1d-80.5941313!2d28.406522">Get Directions</a>',
		lat: 28.406522,
        long: -80.59632,
        icon:'imgs/bonfire_icon.png'
	};
	var ksc = {
		info: '<strong>KSC Campground</strong><br>\
        Audobon Rd<br> Merritt Island, FL 32953<br>\
					<a href="https://www.google.com/maps/place/KSC+Campground/@28.4376887,-80.6614487,17z/data=!3m1!4b1!4m5!3m4!1s0x88e0a8c93f7021d3:0xc5923429f4d397f5!8m2!3d28.4376887!4d-80.6592654">Get Directions</a>',
		lat: 28.4379131,
        long: -80.6629852,
        icon:'imgs/bonfire_icon.png'
	};
	var manatee = {
		info: '<strong>Manatee Hammock Campground</strong><br>\
        7275 S. , US-1<br> Titusville, FL 32780<br>\
					<a href="https://www.google.com/maps/place/Manatee+Hammock+Campground/@28.5042909,-80.785199,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xfefa750110ee0478!8m2!3d28.5042986!4d-80.7829857">Get Directions</a>',
		lat: 28.4820741,
        long: -80.8038945,
        icon:'imgs/bonfire_icon.png'
	};
	var koa = {
		info: '<strong>Titusville / Kennedy Space Center KOA</strong><br>\
        4513 W Main St<br> Mims, FL 32754<br>\
					<a href="https://www.google.com/maps/place/Titusville+%2F+Kennedy+Space+Center+KOA/@28.6651356,-80.877193,17z/data=!3m1!4b1!4m5!3m4!1s0x88e74b9517d6229d:0x19c0562c7c5f01f1!8m2!3d28.6651356!4d-80.8750097">Get Directions</a>',
		lat: 28.6651356,
        long: -80.877193,
        icon:"imgs/bonfire_icon.png"
    };
    
    //Launch Sites 




	var sx40 = {
		info: '<strong>SpaceX Launch Complex 40</strong><br>\
        Cape Canaveral, FL<br>\
					<a href="https://www.google.com/maps/place/SpaceX+Launch+Complex+40/@28.5583416,-80.6502184,11.96z/data=!4m5!3m4!1s0x88e0bb1a0a9edd77:0x983d6a01a54ad7e5!8m2!3d28.5619795!4d-80.5771904">Get Directions</a>',
		lat: 28.5619795,
        long: -80.5773218,
        icon:'imgs/rocket_icon.png'
	};
	var na34 = {
		info: '<strong>Launch Complex 34</strong><br>\
        Cape Canaveral Air Force Station, FL<br>\
					<a href="https://www.google.com/maps/place/Launch+Complex+34/@28.5743247,-80.7290562,11z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0a4b72f4ad02b:0x2e65414601c6bab1!8m2!3d28.5217945!4d-80.561124">Get Directions</a>',
		lat: 28.5218925,
        long:-80.5613055,
        icon:'imgs/rocket_icon.png'
	};
	var na14 = {
		info: '<strong>Launch Complex 14</strong><br>\
        Cape Canaveral Air Force Station, FL<br>\
					<a href="https://www.google.com/maps/place/Launch+Complex+34/@28.5743247,-80.7290562,11z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0a4b72f4ad02b:0x2e65414601c6bab1!8m2!3d28.5217945!4d-80.561124">Get Directions</a>',
		lat: 28.4911491,
        long:-80.5490547,
        icon:'imgs/rocket_icon.png'
	};
	var na41 = {
		info: '<strong>Launch Complex 41</strong><br>\
        Cape Canaveral Air Force Station, FL<br>\
					<a href="https://www.google.com/maps/place/CCAFS+Space+Launch+Complex+41/@28.5832241,-80.5833146,18z/data=!4m5!3m4!1s0x0:0x8fa7b529b39d5f65!8m2!3d28.5834713!4d-80.5828359">Get Directions</a>',
		lat: 28.5834313,
        long:-80.5829366,
        icon:'imgs/rocket_icon.png'
	};
	var na37 = {
		info: '<strong>Launch Complex 37</strong><br>\
        Cape Canaveral Air Force Station, FL<br>\
					<a href="https://www.google.com/maps/place/Launch+Complex+37/@28.532205,-80.5671016,19.25z/data=!4m8!1m2!2m1!1sLaunch+Complex+39A!3m4!1s0x88e0bb4acba483e3:0xd2ffb5e35b875464!8m2!3d28.5323018!4d-80.5666711">Get Directions</a>',
		lat: 28.532205,
        long:-80.5671016,
        icon:'imgs/rocket_icon.png'
	};
	var na39 = {
		info: '<strong>Launch Complex 39A</strong><br>\
        Cape Canaveral Air Force Station, FL<br>\
					<a href=""https://www.google.com/maps/place/Launch+Pad+39A+-+Kennedy+Space+Center/@28.607819,-80.6043207,19.54z/data=!4m8!1m2!2m1!1s39A!3m4!1s0x88e0bb35c3e49421:0xa9e1bb92ccf32340!8m2!3d28.6079105!4d-80.6040429">Get Directions</a>',
		lat: 28.607819,
        long:-80.6043207,
       icon:'imgs/rocket_icon.png'
	};

	

	var locations = [
      [jetty.info, jetty.lat, jetty.long, jetty.icon,0],
      [ksc.info, ksc.lat, ksc.long, ksc.icon,1],
      [manatee.info, manatee.lat, manatee.long, manatee.icon, 2],
      [koa.info, koa.lat, koa.long, koa.icon,3],
      [na14.info, na14.lat, na14.long, na14.icon,4],
      [sx40.info, sx40.lat, sx40.long, sx40.icon,5],
      [na34.info, na34.lat, na34.long, na34.icon, 6],
      [na41.info, na41.lat, na41.long, na41.icon,7],
      [na37.info, na37.lat, na37.long, na37.icon,8],
      [na39.info, na39.lat, na39.long, na39.icon, 9],
   
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10.5,
		center: new google.maps.LatLng(28.5722, -80.6077),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});


	for (i = 0; i < locations.length; i++) {
        
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: locations[i][3]
           
             
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
  }
  initMap()
});