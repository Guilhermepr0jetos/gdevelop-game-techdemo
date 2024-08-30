
if (typeof gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded = {};


gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.userFunc0x8f6af0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__Convert3dToScreenPosition) {
    // return;
}
if (!runtimeScene.getLayer("").getRenderer().getThreeCamera()) {
    return;
}
gdjs.__Convert3dToScreenPosition = new Map();
gdjs.__Convert3dToScreenPosition.set("convert", (Layer, X, Y, Z)=>{
    const Camera3D = runtimeScene.getLayer(Layer).getRenderer().getThreeCamera();
    const Position3D = new THREE.Vector3(X, -Y, Z);
    const Project = Position3D.clone().project(Camera3D);
    const GameResolutionWidth = runtimeScene.getGame().getGameResolutionWidth();
    const GameResolutionHeight = runtimeScene.getGame().getGameResolutionHeight();
    const PointX = (GameResolutionWidth / 2) * (Project.x + 1.0);
    const PointY = (GameResolutionHeight / 2) * ((Project.y * -1) + 1.0);
    //
    const Frustum = new THREE.Frustum();
    const CloneCamera = Camera3D.clone();
    CloneCamera.rotateZ(gdjs.toRad(180));
    Frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(CloneCamera.projectionMatrix, CloneCamera.matrixWorldInverse));
    const Within = Frustum.containsPoint(Position3D);
    return [PointX, PointY, Within];
});
};
gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.userFunc0x8f6af0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Convert3dToScreenPosition"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Convert3dToScreenPosition"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Convert3dToScreenPosition__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
