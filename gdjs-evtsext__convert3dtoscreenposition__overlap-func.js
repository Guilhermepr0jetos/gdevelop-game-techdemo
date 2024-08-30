
if (typeof gdjs.evtsExt__Convert3dToScreenPosition__Overlap !== "undefined") {
  gdjs.evtsExt__Convert3dToScreenPosition__Overlap.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Convert3dToScreenPosition__Overlap = {};
gdjs.evtsExt__Convert3dToScreenPosition__Overlap.GDObject2DObjects1= [];
gdjs.evtsExt__Convert3dToScreenPosition__Overlap.GDObject3DObjects1= [];


gdjs.evtsExt__Convert3dToScreenPosition__Overlap.userFunc0xa65ae0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__Convert3dToScreenPosition) {
    return;
}
const Object2Ds = eventsFunctionContext.getObjects("Object2D");
const Hide = eventsFunctionContext.getArgument("Hide");
const Object3D = eventsFunctionContext.getObjects("Object3D")[0];
const OffsetX = eventsFunctionContext.getArgument("OffsetX");
const OffsetY = eventsFunctionContext.getArgument("OffsetY");
const OffsetZ = eventsFunctionContext.getArgument("OffsetZ");
const Offset3D = new THREE.Vector3(OffsetX, OffsetY, OffsetZ);
if (!Object3D) {
    return;
}
const Layer3D = Object3D.layer;
const RendererObject3D = Object3D.get3DRendererObject();
if (!runtimeScene.getLayer(Layer3D).getRenderer().getThreeCamera()) {
    return;
}
//
let Position3D;
if (RendererObject3D) {
    // 3D
    Position3D = RendererObject3D.position.clone();
} else {
    // 2D
    Position3D = new THREE.Vector3(Object3D.getX(), Object3D.getY(), 0);
}
Position3D.add(Offset3D);
for (const Object2D of Object2Ds) {
    const Result = gdjs.__Convert3dToScreenPosition.get("convert")(Layer3D, Position3D.x, Position3D.y, Position3D.z);
    Object2D.setPosition(Result[0], Result[1]);
    Object2D.hide(!Result[2]);
}

};
gdjs.evtsExt__Convert3dToScreenPosition__Overlap.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Convert3dToScreenPosition__Overlap.userFunc0xa65ae0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Convert3dToScreenPosition__Overlap.func = function(runtimeScene, Object2D, Hide, Object3D, Capability3D, OffsetX, OffsetY, OffsetZ, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object2D": Object2D
, "Object3D": Object3D
},
  _objectArraysMap: {
"Object2D": gdjs.objectsListsToArray(Object2D)
, "Object3D": gdjs.objectsListsToArray(Object3D)
},
  _behaviorNamesMap: {
"Capability3D": Capability3D
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
if (argName === "Hide") return Hide;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
if (argName === "OffsetZ") return OffsetZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Convert3dToScreenPosition__Overlap.GDObject2DObjects1.length = 0;
gdjs.evtsExt__Convert3dToScreenPosition__Overlap.GDObject3DObjects1.length = 0;

gdjs.evtsExt__Convert3dToScreenPosition__Overlap.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Convert3dToScreenPosition__Overlap.registeredGdjsCallbacks = [];