require("PluginLoaded")("Dynmap", () => {
  var Dynmap = manager.loadExternal(manager.getPluginFile("Dynmap"));
  var DynmapAPI = Dynmap.loadClass("org.dynmap.DynmapCommonAPI");
  module.exports = {
    getMarkerAPI: DynmapAPI.getMarkerAPI,
    markerAPIIntitialized: DynmapAPI.markerAPIIntitialized,
    sendBroadcastToWeb: DynmapAPI.sendBroadcastToWeb,
    triggerRenderOfVolume: DynmapAPI.triggerRenderOfVolume,
    triggerRenderOfBlock: DynmapAPI.triggerRenderOfBlock,
    setPauseFullRadiusRenders: DynmapAPI.setPauseFullRadiusRenders,
    getPauseFullRadiusRenders: DynmapAPI.getPauseFullRadiusRenders,
    setPauseUpdateRenders: DynmapAPI.setPauseUpdateRenders,
    getPauseUpdateRenders: DynmapAPI.getPauseUpdateRenders,
    setPlayerVisibility: DynmapAPI.setPlayerVisibility,
    getPlayerVisibility: DynmapAPI.getPlayerVisibility,
    assertPlayerInvisibility: DynmapAPI.assertPlayerInvisibility,
    assertPlayerVisibility: DynmapAPI.assertPlayerVisibility,
    postPlayerMessageToWeb: DynmapAPI.postPlayerMessageToWeb,
    postPlayerJoinQuitToWeb: DynmapAPI.postPlayerJoinQuitToWeb,
    getDynmapCoreVersion: DynmapAPI.getDynmapCoreVersion,
    setDisableChatToWebProcessing: DynmapAPI.setDisableChatToWebProcessing,
    testIfPlayerVisibleToPlayer: DynmapAPI.testIfPlayerVisibleToPlayer,
    testIfPlayerInfoProtected: DynmapAPI.testIfPlayerInfoProtected,
    processSignChange: DynmapAPI.processSignChange,
    on: (eventType, eventHandler) => event.addListenerExternal(Dynmap.loadClass("org.dynmap." + eventType), eventHandler)
  }
});
