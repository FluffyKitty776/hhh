

function addCSS (){

		var theHead = document.getElementsByTagName('head');
		var styleSheet = theHead[0].appendChild(document.createElement('style'));
		// theCSS.rel='stylesheet';
		// 		theCSS.href='https://raw.githubusercontent.com/goooogle944/hhh/master/.css';
		styleSheet.type='text/css';
		manifestR.insertElementContent(styleSheet, theCSS);
		
}

addCSS();
