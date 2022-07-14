

/*Query.getJSON('http://localhost:80/AppMapa2.1/connectDB.php', function (data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        lng = data[i].longitud;
        lat = data[i].latitud;
        nombre = data[i].pos_name;
        dir = data[i].address;
        supervisor = data[i].supervisor;
        var marker = L.marker([lat, lng],{icon: pdvIcon}).addTo(map).bindPopup('Lugar:'+nombre+"<br>Direccion:"+dir+"<br>Supervisor:"+supervisor);
    }
}); */
