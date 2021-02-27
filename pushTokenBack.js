// pushTokenBack
// (c) 2021 David Zvekic
// permission granted to use and distribute as per LICENSE file


let pushTokenBack = new Object();
pushTokenBack.hoverToken= new Object();
pushTokenBack.hoverToken.hoveredTarget=0;
pushTokenBack.hotkey='';




Hooks.on('init', () => {

game.settings.register('pushTokenBack', 'hotkey', {
  name: game.i18n.localize("PUSHTOKENBACK.SelectHotKey"),
  hint: game.i18n.localize("PUSHTOKENBACK.SelectHotKeyHelp"),
  scope: 'client',   
  config: true,      
  type: String,     
  default: "Z",
  
  onChange: value => { pushTokenBack.hotkey = value // value is the new value of the setting
    console.log(value)
  }
});

pushTokenBack.hotkey=game.settings.get('pushTokenBack', 'hotkey');


});






pushTokenBack.pushTokenBackListener = function(event){
    if ( event.isComposing ) return; 
  
   if (event.key==pushTokenBack.hotkey && !event.repeat) pushToBack();

};

 

pushTokenBack.hoverToken.hook= Hooks.on('hoverToken',(token,hoverON)=>{
	
if (hoverON) {
	pushTokenBack.hoverToken.hoveredTarget=token;
	window.addEventListener('keydown', pushTokenBack.pushTokenBackListener );
}
else {
    window.removeEventListener('keydown', pushTokenBack.pushTokenBackListener );
	delete pushTokenBack.hoverToken.hoveredTarget;
}
});


function pushToBack()
{ if (typeof pushTokenBack == "undefined") {
    console.warn("Module pushTokenBack is not installed.");
    return;
  }

  if ( pushTokenBack?.hoverToken?.hoveredTarget instanceof Token) { 
    const token = pushTokenBack.hoverToken.hoveredTarget; 
    let position = 0;
    var foundchild;
    for (const x of canvas.tokens.children[0].children) {
       if (x==token) break;
       position++;
    }

    if (position<canvas.tokens.children[0].children.length){
      // found the child, push it to element 0
      canvas.tokens.children[0].children.splice(position,1);
      canvas.tokens.children[0].children.unshift(token);
    }
  } else {
    console.warn('pushtoback - invalid target', pushTokenBack.hoverToken.hoveredTarget);
  } 

};




