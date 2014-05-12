$(document).ready(function () {

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

	$(window).ready(function() {

		var container = document.querySelector('#container');
		var msnry;
		// initialize Masonry after all images have loaded
		imagesLoaded( container, function() {

			msnry = new Masonry( container, {
			  // options
			  columnWidth: 33,
			  itemSelector: '.item'
			});

			msnry.layout();
		});

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
	});

	// Quote

	var quotes = ([

		"It would be easier to aquire a camel than the girl of my dreams",
		"bla bla bla",

	]);
	var quote = Math.floor((Math.random()*quotes.length));
	document.getElementById("quoteInner").innerHTML = '<p>"'+quotes[quote]+'"</p>'


});