# Dynmap
**Dynmap** is an implementation of the Dynmap Common API for Drupi.
You can download Drupi [here](https://stacket.net/drupi).
You can download the Dynmap plugin [here](https://github.com/webbukkit/dynmap/releases).

## Installation
To install this module, start up your Minecraft server and make sure Drupi is installed.
Once Drupi has been installed, restart your server, and type the command `/drupi install dynmap` into chat.
This will begin installing the module.

## Methods
The **Dynmap** Common API has many methods.
Remember to preface all methods with `Dynmap.`

+ `getMarkerAPI()` - This method can return null if the 'markers' component has not been configured - a warning message will be issued to the server.log in this event.
..+  Returns MarkerAPI, or null if not configured
+ `markerAPIInitialized()` - Test if the marker API has been initialized yet
..+  Returns true if it has been initialized
+ `sendBroadcastToWeb(sender, msg)` - Send generic message to all web users&
..+  String `sender` - label for sender of message
..+  String `msg` - message to be sent
+ `triggerRenderOfVolume(wid, minx, miny, minz, maxx, maxy, maxz)` - Trigger update on tiles associated with given locations. The volume is the rectangular prism ("cuboid") with the two locations on opposite corners, (minx, miny, minz) and (maxx, maxy, maxz).
..+ String `wid` - world ID
..+ int `minx` - minimum x of volume
..+ int `miny` - minimum y of volume
..+ int `minz` - minimum z of volume
..+ int `maxx` - maximum x of volume
..+ int `maxy` - maximum y of volume
..+ int `maxz` - maximum z of volume
..+ Returns number of tiles queued to be rerendered
+ `triggerRenderOfBlock(wid, x, y, z)` - Trigger update on tiles associated with given block location.
..+ String `wid` - world ID
..+ int `x` - x coordinate of block
..+ int `y` - y coordinate of block
..+ int `z` - z coordinate of block
..+ Returns number of tiles queued to be rerendered
+ `setPauseFullRadiusRenders(dopause)` - Pause full/radius render processing
..+ boolean `dopause` - true to pause, false to unpause
+ `getPauseFullRadiusRenders()` - Test if full renders are paused
..+ Returns boolean
+ `setPauseUpdateRenders(dopause)` - Pause update render processing
..+ boolean `dopause` - true to pause, false to unpause
