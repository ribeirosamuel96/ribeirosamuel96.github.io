var colorButtonPort = document.querySelector("#colorImagePort");
var clicked = false;

colorButtonPort.onclick = function()
	{
		if(!clicked)
		{
			var body = document.body;
			body.style.backgroundColor = "#311F02";

			var navBar = document.querySelector(".navBar");
			navBar.style.backgroundColor = "#B5A500";
			navBar.style.boxShadow = "0px 7px 24px -6px rgba(181,165,71,1)"

			var portDiv = document.querySelector(".portDiv");
			portDiv.style.backgroundColor = "#311F02";
			portDiv.style.color = "#60DCFF";

			var logo = document.querySelector("#logo");
			logo.style.color = "#60DCFF";

			var listaH1 = document.getElementsByTagName("h1");
			for(var i=0; i< listaH1.length; i++)
				listaH1[i].style.color = "#60DCFF";

			var listaH3 = document.getElementsByTagName("h3");
			for(var i=0; i< listaH3.length; i++)
				listaH3[i].style.color = "#60DCFF";

			var listaLink =  document.getElementsByClassName("link");
			for(var i=0; i < listaLink.length; i++)
				listaLink[i].style.color = "#F8E6FF";
			clicked = true;
		}
		else
			window.location.reload();

		

		
	}
