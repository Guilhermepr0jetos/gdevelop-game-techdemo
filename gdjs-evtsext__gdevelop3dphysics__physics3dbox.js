
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox || {};

/**
 * Behavior generated from 3DPhysics Obstacle
 */
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox = class Physics3DBox extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.StepHeight = behaviorData.StepHeight !== undefined ? behaviorData.StepHeight : Number("10") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.StepHeight !== newBehaviorData.StepHeight)
      this._behaviorData.StepHeight = newBehaviorData.StepHeight;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    StepHeight: this._behaviorData.StepHeight,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.StepHeight !== undefined)
      this._behaviorData.StepHeight = networkSyncData.props.StepHeight;
  }

  // Properties:
  
  _getStepHeight() {
    return this._behaviorData.StepHeight !== undefined ? this._behaviorData.StepHeight : Number("10") || 0;
  }
  _setStepHeight(newValue) {
    this._behaviorData.StepHeight = newValue;
  }
}

/**
 * Shared data generated from 3DPhysics Obstacle
 */
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.SharedData = class Physics3DBoxSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._GDevelop3DPhysics_Physics3DBoxSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._GDevelop3DPhysics_Physics3DBoxSharedData = new gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.SharedData(
      initialData
    );
  }
  return instanceContainer._GDevelop3DPhysics_Physics3DBoxSharedData;
}

// Methods:
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Top3DPosition")).setNumber((gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Bottom3DPosition")).setNumber((gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()));
}
}{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("StepHeight")).setNumber((gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight()) - 5);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight())); }}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.StepHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "= (set to)");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepHeight(eventsFunctionContext.getArgument("New_Value"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "+ (add)");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepHeight(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight() + (eventsFunctionContext.getArgument("New_Value")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "- (subtract)");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepHeight(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight() - (eventsFunctionContext.getArgument("New_Value")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "* (multiply by");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepHeight(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight() * (eventsFunctionContext.getArgument("New_Value")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Modification_s_sign") : "") == "/ (divide by)");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepHeight(gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepHeight() / (eventsFunctionContext.getArgument("New_Value")));
}
}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeight = function(Modification_s_sign, New_Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "New_Value") return New_Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox.prototype.SetStepHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("GDevelop3DPhysics::Physics3DBox", gdjs.evtsExt__GDevelop3DPhysics__Physics3DBox.Physics3DBox);
