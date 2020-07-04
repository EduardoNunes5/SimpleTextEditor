class TextEditor{
	constructor(buttons){
		this.buttons = buttons;
	}

	buttonHandler(){
		Array.prototype.map.call( this.buttons, (btn) => {
			btn.addEventListener('click', ()=>{
				if(btn.name === 'active'){
					btn.classList.toggle('active');					
				}
				textField.document.execCommand('styleWithCSS', false, true);
				textField.document.execCommand(btn.dataset.css, false, null);
				textField.focus();
			})
		})		
	}
	getSelectionStart() {
		var node = textField.document.getSelection().anchorNode;
   		return (node.nodeType == 3 ? node.parentNode : node);
	}

	cursorClickHandler(){
		document.querySelector('iframe').contentDocument.addEventListener('click', ()=>this.clickhandler());
		document.querySelector('iframe').contentDocument.addEventListener('keydown', () => this.clickhandler());
	}

	clickhandler(){
		let cursorNode = this.getSelectionStart();

		Array.prototype.map.call(this.buttons, btn=>{
			if(cursorNode.nodeName ==='BODY'){
				if(btn.className === 'active'){
					btn.classList.toggle('active');
				}
			}
			else{
				if(btn.className !== 'active' && btn.dataset.css === cursorNode.style[btn.dataset.style]){
					btn.classList.toggle('active');
				}
			}
		});

	}


}


textField.document.designMode='On';
const buttons = document.querySelectorAll('button')
let textEditor = new TextEditor(buttons);
textEditor.buttonHandler();
textEditor.cursorClickHandler();
