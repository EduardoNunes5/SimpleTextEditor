class TextEditor{
	constructor(buttonsId, textEditorId){
		this.$buttons = document.querySelectorAll(buttonsId);
		this.$textEditor = document.querySelector(textEditorId);
	}

	buttonHandler(){
		Array.prototype.map.call( this.$buttons, (btn) => {
			btn.addEventListener('click', ()=>{
				if(btn.name === 'active'){
					btn.classList.toggle('active');					
				}
				document.execCommand('styleWithCSS', false, true);
				document.execCommand(btn.dataset.css, false, null);
				this.$textEditor.focus();
			})
		})		
	}
	getSelectionStart() {
		var node = document.getSelection().anchorNode;
   		return (node.nodeType == 3 ? node.parentNode : node);
	}

	cursorClickHandler(){
		this.$textEditor.addEventListener('click', ()=> setTimeout(()=>this.clickhandler(),1000));
		this.$textEditor.addEventListener('keydown', () => setTimeout(()=>this.clickhandler(),1000));
	}

	clickhandler(){
		let cursorNode = this.getSelectionStart();
		Array.prototype.map.call(this.$buttons, btn=>{
			if(cursorNode.nodeName ==='DIV'){
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

let textEditor = new TextEditor('button', '#text-editor');
textEditor.buttonHandler();
textEditor.cursorClickHandler();
