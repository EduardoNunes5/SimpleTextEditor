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
    dye(color);
};

picker.onDone = function(color){
	dye(color);
};
function dye(color){
	textField.document.execCommand('forecolor', false, color.hex);
}

