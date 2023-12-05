


    function getData() {
        var name = document.getElementById('name').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c532e56f877ab8a2225c8c03305290f7&units=metric`)
            .then(function (res) {
                res.json().then(function (res) {
                    if(res.cod == "404"){
                       alert("Data Not Available")
                    }else{
                        showData(res);
                    }
                })
            }).catch(function (err) {
                console.log("error");
            })
    }
    

    
    function showData(data) {

        var cityName = document.getElementById("cityName");
        cityName.innerHTML = data.name;

        var type = document.getElementById("type");
        type.innerHTML = data.weather[0].main;

        var temp = document.getElementById("temp");
        temp.innerHTML = data.main.temp + " °C";

        var humidity = document.getElementById("humidity");
        humidity.innerHTML = data.main.humidity + "%";

        var map = document.getElementById("map");
        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

        console.log(data);
    }



