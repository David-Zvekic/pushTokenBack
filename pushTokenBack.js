// pushTokenBack
// (c) 2021 David Zvekic
// permission granted to distribute as per LICENSE file


// This version simply sets up a variable which will track if any token is being hovered.

let pushTokenBack = new Object();
pushTokenBack.hoverToken= new Object();
pushTokenBack.hoverToken.hoveredTarget=0;

pushTokenBack.hoverToken.hook= Hooks.on('hoverToken',(token,hoverON)=>{
if (hoverON) pushTokenBack.hoverToken.hoveredTarget=token;
else delete pushTokenBack.hoverToken.hoveredTarget;
  
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




