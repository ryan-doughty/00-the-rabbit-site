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
	var href = $(location).attr('href');

	for(a = 0; a < albumPages.length; a++) {
		if(href.indexOf(albumPages[a].url) != -1) {
			subnav += "<li class='current-page'><a href='javascript:void(0);'>" + albumPages[a].pageName + "</a></li>";
		}
		else {
			subnav += "<li><a href='" + albumPages[a].url + "'>" + albumPages[a].pageName + "</a></li>";
		}
	}

	$(".album-subnav-mobile-wrapper").find(".album-subnav").html(subnav);

	$(".album-subnav-mobile-wrapper").find(".current-page").on('click', function() {
		// $(this).siblings("li").slideToggle(500);
		$(this).siblings("li").toggleClass("open");
	});
}