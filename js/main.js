
var indexIFrame;
var iFrameSrcHtml;
var indexNavi;

var deleteAllChild = function(ele) {
    while(ele.childNodes.length>0)
    {
    	var node = ele.childNodes[0];
        ele.removeChild(node);
    }
}

var onNaviClick = function() {
	indexIFrame.src = iFrameSrcHtml+"#"+this.title;
    console.log(iFrameSrcHtml+"#"+this.title);
}

var setIndexNavi = function() {

  deleteAllChild(indexNavi);
  
	var tmp = indexIFrame.contentWindow.document.getElementById("navi");
    if(null == tmp)
        return;

    console.log(tmp);
    var childElement = tmp.firstElementChild;
    while(null != childElement)
    {
        console.log(childElement);

        var t = document.createElement("li");
        t.title = childElement.title;
        t.innerHTML = childElement.innerHTML;
        t.onclick=onNaviClick;
    	indexNavi.appendChild(t);
        childElement = childElement.nextElementSibling;
    }
}

var chooseContent = function() {
    console.log(this.title+".html");

    iFrameSrcHtml = "sub/" + this.title + ".html";
    indexIFrame.src = iFrameSrcHtml;

}


var installProcess = function() {
	var contentType = document.getElementById("content_type");
    console.log(contentType);
    var firstChild = contentType.firstElementChild;
    console.log(firstChild);
    firstChild.onclick = chooseContent;

    for(var next = firstChild; next != null; next = next.nextElementSibling)
    {
    	next.onclick = chooseContent;
    }

    indexIFrame = document.getElementById("content");
    indexIFrame.onload = setIndexNavi;
    indexNavi = document.getElementById("indexNavi");
}

installProcess();
