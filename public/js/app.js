$(document).ready(function(){
	$('#body-row .collapse').collapse('hide'); 
	$('#collapse-icon').addClass('fa-angle-double-left'); 
	$('[data-toggle=sidebar-colapse]').click(function() {
		SidebarCollapse();
	});
	
	var listItem = $("#productLister").children(".listInside");
	var numberList = $("#productLister").html();
	var countListItem = $(listItem).length;
	$(".listInside").each(function(){
		if(countListItem<4){
		   $(this).after(numberList);
		   countListItem++;
		}
	});
	
	var listerSelect = $(".card-title").children("a");
	$(listerSelect).click(function(){
		var prodId = $(listerSelect).text();
		$.ajax({
			type: "POST",
			url: "https://api-test/get",
			data: "{empid: empid}",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
				$("#productLister").addClass(".d-none");
				$("#productDetails").removeClass("d.none");
			}
		});
	});
	
	var prodEntries = {
		  "headers":[
			"name",
			"quantity",
			"price"
		  ],
		  "items":{
			"1":{"name":"Inoculation","quantity":"1","price":"20"},
			"2":{"name":"Pig","quantity":"3","price":"5"}
		  },
		  "total":35
	};
	
	$(".list-group-item").each(function(){
		$.ajax({
			type: "GET",
			url: "https://api-test/get",
			data: "{prodID: prodId}",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(result) {
				for (var i = 0; i < prodEntries.length; i ++) {
				  for (var key in prodEntries.headers) {
					$(this).children().children(".form-check-label").html(prodEntries.headers.name);
				  }
				}
			});
	});

});
function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

