var parent = document.querySelector('#parent');


var picker = new Picker({
	parent,
	popup: 'bottom',
	editor: false,
	alpha: false,
	});


picker.onChange = function(color) {
    parent.style.fontWeight='bold';
    parent.style.color = color.rgbaString;
};

picker.onDone = function(color){
	dye(color);
};
function dye(color){
	document.execCommand('forecolor', false, color.hex);
	textEditor.focus();
}


const textEditor = document.querySelector('#text-editor');

