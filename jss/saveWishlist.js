// JavaScript Document
function saveWishlist(sku,qtyy,prod_type,session,srr)
{
	
	if(session=="")
	{
		self.location=("../loginUser.php?urlRD=product_cat.php?prod_type="+prod_type);
	}
	else
	{
	
	if(window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById(srr).style.color="red";
			document.getElementById("toast").style.display="block";
			$("#toast").val('Save to wishlist');
			
  setTimeout(function(){ document.getElementById("toast").style.display="none";
  self.location=("product_cat.php?prod_type="+prod_type); }, 2000);
		}
	};
	xmlhttp.open("GET","specturm.php?sku="+sku+'&qtyy='+qtyy+'&mob='+session,true);
	xmlhttp.send();
	}
}