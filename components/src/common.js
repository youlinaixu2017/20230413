var originalClassNameString;
originalClassNameString="";
//对所有的input 和 textarea 批量用CSS控制
function formatInput(strID){   
	var   a   =   document.getElementById(strID).getElementsByTagName("INPUT"); 
	for   (var   i=0;   i<a.length;   i++)  {
		if(a[i].type=="text" || a[i].type=="password") {
			a[i].className="input_text";
			a[i].onfocus=function() {
				//originalClassNameString = this.className;
				//this.className+=" input_focus"; 
				this.className="input_textFocus"; 
			};
			a[i].onblur=function() {
				this.className="input_text"; 
			};
		}
	} 
	
	
	var   a   =   document.all(strID).getElementsByTagName("textarea"); 
	for   (var   i=0;   i<a.length;   i++)  {
			a[i].className="input_textarea";
			a[i].onfocus=function() {
				this.className="input_textareaFocus"; 
			};
			a[i].onblur=function() {
				this.className="input_textarea"; 
			};
	} 
	
}

function tagEventEffect(type,tag, parentId) { 	
	if (window.attachEvent) {   
		window.attachEvent("onload", function() {
		var sfEls = (parentId==null)?document.getElementsByTagName(tag):document.getElementById(parentId).getElementsByTagName(tag);
		type(sfEls);   
		});   
	}  	
}
/*tagsEventEffect 是在 tagEventEffect基础上改良的函数*/
function tagsEventEffect(type,arrayElements) { 
	window.addEvent('domready', function(){
		var sfEls = arrayElements;
		type(sfEls); 	
	}); 
}
sfHover = function(sfEls) {
	for (var i=0; i < sfEls.length; i++) {
		if(sfEls[i].className.indexOf("noOverStyle")<0){		
			sfEls[i].onmouseover=function() {
				originalClassNameString = this.className;
				this.className+=" over";
			}
			sfEls[i].onmouseout=function() {
				this.className=originalClassNameString;
			}
		}		
	}
}

function submitForm(thisObj,url,prop) {
	thisObj.action=url+"?u="+escape(self.location)+"&"+prop;
}


function goto(url,prop) {
	if(url.indexOf("?")>0) {
		location.href=url+"&u="+escape(self.location)+"&"+prop;
	}
	else {
		location.href=url+"?u="+escape(self.location)+"&"+prop;
	}	
}





function clickFor(thisObj,thisIndex) {
	document.getElementsByName(thisObj)[thisIndex].click();
}

function naviNext(thisObj,thisUrl) {	
	if($(thisObj).getElements('a').length>1) {
		location.href=$(thisObj).getElements('a')[1].href;
	}
	else {
		location.href=thisUrl;
	}
}

function mouseEventEffect(thisObj) {
	thisObj.mouseover(function(){
	   $(this).addClass("mOver");
	});
	thisObj.mouseout(function(){
	   $(this).removeClass("mOver");
	});
}

$(document).ready(function(){
	mouseEventEffect($("#footBar li.footBtn"));
	$("#navigationDIV").html($("#navigation").html());
	$("#innerNavigationCase").html($("#innerNavigation .case div[name='1']").html());
	
	$("#btnAbout").click(function(){
		location.href=$("#innerNavigation .about a").attr("href");
	})
	$("#btnContact").click(function(){
		location.href=$("#innerNavigation .contact a").attr("href");
	})
	
	$("#content #picShow li:odd").addClass("odd");
	

	

	$("div#container",document).on({
		click:function(e){
			var src = e.srcElement || e.target;
			
	

			if($(src).attr("id")=="navigationCase"||$(src).parents("#navigationCase").attr("id")) {			
			  $("#innerNavigationCase").show();		
			  $("#innerNavigationCase").animate({top:70,opacity:100}, 500);	
			}else {
			  $("#innerNavigationCase").animate({top:20,opacity:0}, 500,function(){
				  $("#innerNavigationCase").hide();	
			  });
			}
			
		}
	})


	
	$('.album').iphoneSlide({
		handler: ".paging",
		pageHandler: ".page",
		easing: "swing",
        autoPlay: true,
        autoCreatePager: true,
		cancelAutoPlayOnResize: true,
		pager: {
			pagerType: "dot",
			selectorName: ".banner_pager",
			childrenOnClass: "on",
			slideToAnimated: true
		},
        onShiftComplete: function(elem, page) {
        }
	});

});