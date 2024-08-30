
if (typeof gdjs.evtsExt__GDevelop3DPhysics__GravityScale !== "undefined") {
  gdjs.evtsExt__GDevelop3DPhysics__GravityScale.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GDevelop3DPhysics__GravityScale = {};


gdjs.evtsExt__GDevelop3DPhysics__GravityScale.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "= (set to)");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GravityScale3D").setNumber(gdjs.evtTools.common.toNumber((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "+ (add)");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GravityScale3D").add(gdjs.evtTools.common.toNumber((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "- (subtract)");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GravityScale3D").sub(gdjs.evtTools.common.toNumber((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "* (multiply by)");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GravityScale3D").mul(gdjs.evtTools.common.toNumber((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "/ (divide by)");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GravityScale3D").div(gdjs.evtTools.common.toNumber((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "")));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__GravityScale.func = function(runtimeScene, Modification_s_sign, Value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Modification_s_sign") return Modification_s_sign;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GDevelop3DPhysics__GravityScale.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GDevelop3DPhysics__GravityScale.registeredGdjsCallbacks = [];