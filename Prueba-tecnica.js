var comics = {
	render: function(){
		var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6";
		var footer = document.getElementById("footer");
		var marvelContainer = document.getElementById("marvel");

	$.ajax(
		{
			url:url,
			type:"GET",
			success: function(data){
				footer.innerHTML=data.attributionHTML;
				var cadena = "";
				cadena += "<div class='row'>";

				for(var i = 0; i<data.data.results.length;i++){
					var element = data.data.results[i];

					for (var j = 0; j<10;j++){
						var fecha = element.dates[0].date[j-9]+element.dates[0].date[j-8]+element.dates[0].date[j-7]
						+element.dates[0].date[j-6]+element.dates[0].date[j-5]+element.dates[0].date[j-4]+element.dates[0].date[j-3]
						+element.dates[0].date[j-2]+element.dates[0].date[j-1]+element.dates[0].date[j];
						console.log(fecha);	
					}
					
					cadena +="<div class='col-md-3'>";
					cadena += "<a href='"+element.urls[0].url+"'>";
					cadena += "<div class ='bordes'>"+"<img class ='comics' src='"+element.thumbnail.path+"/portrait_fantastic."+element.thumbnail.extension+"'/></div><br>";
					cadena += "<a>"+"Titulo: "+element.title+"</a><br>";
					cadena += "<a>"+"Fecha Publicacion: "+fecha+"</a><br>";
					cadena += "<button id='likes' class='btn btn-primary' onclick='Like()'>"+"<span id='click'>"+(a)+" Like's"+"</span><br>"+"</button>";
					cadena += " ";
					cadena += "<button class='btn btn-danger' onclick='dislike()'>"+"<span id='dislike'>"+b+" Dislike"+"</span>"+"</button><br>";
					cadena += "<hr>";
					cadena += "</div>";

					if((i+1)%4==0){
						cadena += "</div>";
						cadena += "<div class = 'row'>";
					}
				}
				marvelContainer.innerHTML=cadena;
			}
		});
	}
};

var a =  0
        function Like() {
            a++;
            if (a == 1) {
            	
                document.getElementById("click").innerHTML = a + " Like's";
            }
            else
            {
                document.getElementById("click").innerHTML = a + " Like's";
            }
        }

var b = 0
        function dislike(){
            b++;
            if (b==1) {
            	document.getElementById("dislike").innerHTML = b + " Dislike";
            }
            else{
            	document.getElementById("dislike").innerHTML = b + " Dislike";
            }
        }
comics.render();