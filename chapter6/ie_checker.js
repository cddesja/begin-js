function isIE()
	{
		var lsBrowser = navigator.userAgent;
		if (lsBrowser.indexOf("MSIE") >= 0)
		{
			lsBrowser = "IE";
		}
		else
		{
			lsBrowser = "notIE";
		}
		return lsBrowser;
	}

function checkNotIE()
{
	if(isIE() == "notIE")
		window.location.replace("notieonly.html");
}

function checkIE()
{
	if(isIE() == "IE")
		window.location.replace("ieonly.html");
}