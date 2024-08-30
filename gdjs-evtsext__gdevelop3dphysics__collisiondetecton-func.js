
if (typeof gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton !== "undefined") {
  gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton = {};
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects2= [];


gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595CollisionDetecton_9546GDObject2Objects1Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1});
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595CollisionDetecton_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1});
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < (( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1[0].getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) + 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < (( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1[0].getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1[k] = gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595CollisionDetecton_9546GDObject2Objects1Objects, gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595CollisionDetecton_9546GDObjectObjects1Objects, false, runtimeScene, true);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.func = function(runtimeScene, Object, Object2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GDevelop3DPhysics"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GDevelop3DPhysics"),
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

gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.GDObject2Objects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GDevelop3DPhysics__CollisionDetecton.registeredGdjsCallbacks = [];