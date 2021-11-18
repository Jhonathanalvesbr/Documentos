for(var i = 0; i < document.getElementsByTagName("iframe").length; i++){
	if(document.getElementsByTagName("iframe")[i].src.toString().search("youtube") > -1){
		var youTube = document.getElementsByTagName("iframe")[0].src.toString().split("?")[0].split("embed");
		youTube = youTube[0] + "watch?v=" + youTube[1].split("/")[1];
		console.log(youTube);
	}
}
