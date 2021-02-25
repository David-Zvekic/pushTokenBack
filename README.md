# pushTokenBack
**Push Token Back** - Reveal Tokens Buried Behind Each Other
***
A module for Foundry VTT.

With **Push Token Back** you can float your cusor over foreground obstructing tokens, press a hot-key and send them to the back of stack. This allows you to access the token you want, even when was hidden behind others.<br><br> Push Token Back works on your own canvas so it will not confuse other players or alter their view.<br><br>Great for when the entire party falls into the same 5x5 pit.

**Installation**
1. Install the included pushTokenBack macro (found in your compendium after installation) onto any macrobar slot, so you can activate it by pressing a number.

**Usage**
1. Float your cursor over a token which is obstructing your view of other tokens.
2. Press the number associated with the macrobar slot.  
3. The token will be pushed beneath any other tokens it was hiding, allowing you to access them normally.

Notes: pushTokenBack does not actually manipulate tokens on the server, it is purely a local manipulation of the canvas rendering order, so no other players will see what you are pushing back. This enables multiple players to access multiple tokens all occupying the same grid square.

