$(document).ready(function () {

	// HEADER

	$(window).scroll(function() {
		if($(window).scrollTop()>100){
			$("#logoBox").css({"width":"50"});
			$("#logoBox").css({"padding":"15"});
			$("#logo").css({"height":"40"});
			$("#logo").css({"width":"40"});
		}else{
			$("#logoBox").css({"width":"100%"});
			$("#logoBox").css({"padding":"0"});
			$("#logo").css({"height":"60"});
			$("#logo").css({"width":"60"});
		}
	});

	// 7 and WORD

	var words = (["Interactions","Sins","Dwarfs","Samurais","Creations","Wonders","Wolfs","Days a Week","Feminists","the fourth prime","Colors of the Rainbow","Seas","Continents","Heavens","UP","Seal","&7","Potters","Ages of Man"]);
	var word = Math.floor((Math.random()*words.length));
	document.getElementById("wordBox").innerHTML = "<p>"+words[word]+"</p>"
	$("#wordBox").animate({
	    opacity: 0,
	    left: "+=50",
	    // height: "toggle"
	  }, 1200, function() {
	    // Animation complete.
	  });

	// PROJECTS

	// var container = document.querySelector('#container');
	// var msnry;
	// // initialize Masonry after all images have loaded
	// imagesLoaded( container, function() {

	// 	msnry = new Masonry( container, {
	// 	  // options
	// 	  columnWidth: 33,
	// 	  itemSelector: '.item'
	// 	});

	// 	msnry.layout();
	// });

	$.getJSON("data/projects.json", function(data) { 
		
		var projects = data;
		// console.log(projects[0].images[0]);	
		appendProjects(projects);

	});

	function appendProjects(projects){

		var projects = projects;
		console.log(projects.length);

		for (var i = 0; i < projects.length; i++) {
			var imageType = Math.floor((Math.random()*2)+1);
			// console.log(projects);
			var project = '<div class="item w'+imageType+'" id="project'+i+'"><p>'+projects[i].title+'</p></div>';
			$("#container").append(project);
			$("#project"+i+"").css("background", "url('img/"+projects[i].images[0]+"')");
			$("#project"+i+"").css("background-size", "cover");
			$("#project"+i+"").css("background-position", "center");
		};
	}

	// Quote

	var quotes = ([

		"It's easier to aquire a camel than the girl of my dreams",
		"it's not a good quote, I've heard it too many times",
		"I don't wanna be in a meeting because of my body parts",

	]);
	var quote = Math.floor((Math.random()*quotes.length));
	document.getElementById("quoteInner").innerHTML = '<p>"'+quotes[quote]+'"</p>'

});