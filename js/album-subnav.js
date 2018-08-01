//Album subnav 

function albumSubnav () {
	var albumPages = [
		{
			pageName: "Boom Ching",
			url: "boom-ching.html"
		},
		{
			pageName: "Gourd of Bees",
			url: "gourd-of-bees.html"
		},
		{
			pageName: "Bad Machine",
			url: "bad-machine.html"
		},
		{
			pageName: "Headcount",
			url: "headcount.html"
		},
		{
			pageName: "B-Sides",
			url: "b-sides.html"
		}
	];

	var subnav = '';

	for(a = 0; a < albumPages.length; a++) {
	  subnav += "<li><a href='" + albumPages[a].url + "'>" + albumPages[a].pageName + "</a></li>";
	}

	$(".album-subnav-mobile-wrapper").find(".album-subnav").html(subnav);

	// var bSidesUrl = "b-sides.html";
	// var href = $(location).attr('href');
	// if(href.indexOf(bSidesUrl) != -1) {
	//   console.log("This is the b-sides page.");
	// }

	// else {
	//   console.log("This is some other page, dawg");
	// }
}