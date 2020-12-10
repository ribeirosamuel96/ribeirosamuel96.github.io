var colorButtonGames = document.querySelector("#colorImageGames");
var clicked = false;

colorButtonGames.onclick = function()
	{
		if(!clicked)
		{
			var body = document.body;
			body.style.backgroundColor = "#311F02";

			var navBar = document.querySelector(".navBar");
			navBar.style.backgroundColor = "#B5A500";
			navBar.style.boxShadow = "0px 7px 24px -6px rgba(181,165,71,1)"

			var logo = document.querySelector("#logo");
			logo.style.color = "#60DCFF";

			var gameComment = document.querySelector(".gameComment");
			gameComment.style.color = "#60DCFF";

			var listaLink =  document.getElementsByClassName("link");
			for(var i=0; i < listaLink.length; i++)
				listaLink[i].style.color = "#F8E6FF";
			clicked = true;
		}
	else
		window.location.reload();

		

		
	}