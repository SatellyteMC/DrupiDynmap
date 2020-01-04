# Dynmap
This module is an implementation of the **Dynmap** Common API for Drupi.
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
  -  Returns MarkerAPI, or null if not configured
+ `markerAPIInitialized()` - Test if the marker API has been initialized yet
  -  Returns true if it has been initialized
+ `sendBroadcastToWeb(sender, msg)` - Send generic message to all web users&
  -  String `sender` - label for sender of message
  -  String `msg` - message to be sent
+ `triggerRenderOfVolume(wid, minx, miny, minz, maxx, maxy, maxz)` - Trigger update on tiles associated with given locations. The volume is the rectangular prism ("cuboid") with the two locations on opposite corners, (minx, miny, minz) and (maxx, maxy, maxz).
  - String `wid` - world ID
  - int `minx` - minimum x of volume
  - int `miny` - minimum y of volume
  - int `minz` - minimum z of volume
  - int `maxx` - maximum x of volume
  - int `maxy` - maximum y of volume
  - int `maxz` - maximum z of volume
  - Returns number of tiles queued to be rerendered
+ `triggerRenderOfBlock(wid, x, y, z)` - Trigger update on tiles associated with given block location.
  - String `wid` - world ID
  - int `x` - x coordinate of block
  - int `y` - y coordinate of block
  - int `z` - z coordinate of block
  - Returns number of tiles queued to be rerendered
+ `setPauseFullRadiusRenders(dopause)` - Pause full/radius render processing
  - boolean `dopause` - true to pause, false to unpause
+ `getPauseFullRadiusRenders()` - Test if full renders are paused
  - Returns boolean
+ `setPauseUpdateRenders(dopause)` - Pause update render processing
  - boolean `dopause` - true to pause, false to unpause
+ `getPauseUpdateRenders()` - Test if update renders are paused
  - Returns boolean
+ `setPlayerVisiblity(player, is_visible)` - Set player visibility (configuration - persistent)
  - String `player` - player ID
  - boolean `is_visible` - true if visible, false if hidden
+ `getPlayerVisbility(player)` - Test if player is visible
  - String `player` - player ID
  - Returns true if visible, false if not
+ `assertPlayerInvisibility(player, is_invisible, plugin_id)` - Set player visibility (transient - if player is configured to be visible, they are hidden if one or more plugins assert their invisiblity)
  - String `player` - player ID
  - boolean `is_invisible` - true if asserting player should be invisible, false if no assertion
  - String `plugin_id` - ID of asserting plugin
+ `assertPlayerVisibility(player, is_visible, plugin_id)` - Set player visibility (transient - if player is configured to be visible, they are hidden if one or more plugins assert their visiblity)
  - String `player` - player ID
  - boolean `is_visible` - true if asserting player should be visible, false if no assertion
  - String `plugin_id` - ID of asserting plugin
+ `postPlayerMessageToWeb(playerid, playerdisplay, message)` - Post message from player to web
  - String `playerid` - player ID
  - String `playerdisplay` - player display name
  - String `message` - message text
+ `postPlayerJoinQuitToWeb(playerid, playerdisplay, isjoin)` - Post join/quit message for player to web
  - String `playerid` - player ID
  - String `playerdisplay` - player display name
  - boolean `isjoin` - if true, join message; if false, quit message
+ `getDynmapCoreVersion()` - Get version of dynmap core
  - Returns version - format is "major.minor-build" or "major.minor.patch-build"
+ `setDisableChatToWebProcessing(disable)` - Disable chat message processing (used by mods that will handle sending chat to the web themselves, via sendBroadcastToWeb())
  - boolean `disable` - if true, suppress internal chat-to-web messages
+ `testIfPlayerVisibleToPlayer(player, player_to_see)`
  - String `player` - player attempting to observe
  - String `player_to_see` - player to be observed by 'player'
  - Returns true if can be seen on map, false if cannot be seen
+ `testIfPlayerInfoProtected()` - Test if player position/information is protected on map view
  - Returns true if protected, false if visible to guests and all players
+ `processSignChange(blkid, world, x, y, z, lines, playerid)`
  - int `blkid` - block ID
  - String `world` - world name
  - int `x` - x coord
  - int `y` - y coord
  - int `z` - z coord
  - Array `lines` - sign lines (input and output)
  - String `playerid` - player ID

## Events
Currently, the **Dynmap** Common API only has 1 event.
+ `DynmapWebChatEvent` - Custom Bukkit event, corresponding to the receiving of a web-chat message from a web UI user
  - `isCancelled` - returns true if event is cancelled
  - `setCancelled(cancelled)`
    - boolean `cancelled`
  - `getSource()` - returns String source
  - `getName()` - returns String name
  - `getMessage()` - returns String message
  - `isProcessed()` - returns boolean isprocessed
  - `setProcessed(isprocessed)`
    - boolean `isprocessed`

You can listen to events with `Dynmap.on()`. Let's see an example:
```js
Dynmap.on("DynmapWebChatEvent", event => {
  var message = event.getMessage();
  var name = event.getName();
  event.setCancelled(true);
  server.broadcastMessage(color(`&c[&7&lWEB &7${name}]: ${message}`));
});
```

## Notes
This documentation was obtained from the Dynmap [GitHub Repository](https://github.com/webbukkit/dynmap).

This documentation does not include the **Dynmap** Marker API that is obtained using `Dynmap.getMarkerAPI()`.
You can see the methods from the Marker API [here](https://github.com/webbukkit/dynmap/blob/v3.0/DynmapCoreAPI/src/main/java/org/dynmap/markers/MarkerAPI.java).

*Enjoy Drupi Dynmap? Consider checking out our [other services](https://satellyte.net).*
