
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_ = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_ || {};

/**
 * Behavior generated from Physics3D(3D box)
 */
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_ = class Physics3D_3D_box_ extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PickupRange = behaviorData.PickupRange !== undefined ? behaviorData.PickupRange : Number("10") || 0;
    this._behaviorData.FallingSpeed = behaviorData.FallingSpeed !== undefined ? behaviorData.FallingSpeed : Number("5") || 0;
    this._behaviorData.FallingSpeedAcceleration = Number("10") || 0;
    this._behaviorData.JumpHeight = behaviorData.JumpHeight !== undefined ? behaviorData.JumpHeight : Number("45") || 0;
    this._behaviorData.JumpSpeed = behaviorData.JumpSpeed !== undefined ? behaviorData.JumpSpeed : Number("1") || 0;
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.Gravity_scale = behaviorData.Gravity_scale !== undefined ? behaviorData.Gravity_scale : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PickupRange !== newBehaviorData.PickupRange)
      this._behaviorData.PickupRange = newBehaviorData.PickupRange;
    if (oldBehaviorData.FallingSpeed !== newBehaviorData.FallingSpeed)
      this._behaviorData.FallingSpeed = newBehaviorData.FallingSpeed;
    if (oldBehaviorData.FallingSpeedAcceleration !== newBehaviorData.FallingSpeedAcceleration)
      this._behaviorData.FallingSpeedAcceleration = newBehaviorData.FallingSpeedAcceleration;
    if (oldBehaviorData.JumpHeight !== newBehaviorData.JumpHeight)
      this._behaviorData.JumpHeight = newBehaviorData.JumpHeight;
    if (oldBehaviorData.JumpSpeed !== newBehaviorData.JumpSpeed)
      this._behaviorData.JumpSpeed = newBehaviorData.JumpSpeed;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;
    if (oldBehaviorData.Gravity_scale !== newBehaviorData.Gravity_scale)
      this._behaviorData.Gravity_scale = newBehaviorData.Gravity_scale;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PickupRange: this._behaviorData.PickupRange,
    FallingSpeed: this._behaviorData.FallingSpeed,
    FallingSpeedAcceleration: this._behaviorData.FallingSpeedAcceleration,
    JumpHeight: this._behaviorData.JumpHeight,
    JumpSpeed: this._behaviorData.JumpSpeed,
    Tween: this._behaviorData.Tween,
    Gravity_scale: this._behaviorData.Gravity_scale,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PickupRange !== undefined)
      this._behaviorData.PickupRange = networkSyncData.props.PickupRange;
    if (networkSyncData.props.FallingSpeed !== undefined)
      this._behaviorData.FallingSpeed = networkSyncData.props.FallingSpeed;
    if (networkSyncData.props.FallingSpeedAcceleration !== undefined)
      this._behaviorData.FallingSpeedAcceleration = networkSyncData.props.FallingSpeedAcceleration;
    if (networkSyncData.props.JumpHeight !== undefined)
      this._behaviorData.JumpHeight = networkSyncData.props.JumpHeight;
    if (networkSyncData.props.JumpSpeed !== undefined)
      this._behaviorData.JumpSpeed = networkSyncData.props.JumpSpeed;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
    if (networkSyncData.props.Gravity_scale !== undefined)
      this._behaviorData.Gravity_scale = networkSyncData.props.Gravity_scale;
  }

  // Properties:
  
  _getPickupRange() {
    return this._behaviorData.PickupRange !== undefined ? this._behaviorData.PickupRange : Number("10") || 0;
  }
  _setPickupRange(newValue) {
    this._behaviorData.PickupRange = newValue;
  }
  _getFallingSpeed() {
    return this._behaviorData.FallingSpeed !== undefined ? this._behaviorData.FallingSpeed : Number("5") || 0;
  }
  _setFallingSpeed(newValue) {
    this._behaviorData.FallingSpeed = newValue;
  }
  _getFallingSpeedAcceleration() {
    return this._behaviorData.FallingSpeedAcceleration !== undefined ? this._behaviorData.FallingSpeedAcceleration : Number("10") || 0;
  }
  _setFallingSpeedAcceleration(newValue) {
    this._behaviorData.FallingSpeedAcceleration = newValue;
  }
  _getJumpHeight() {
    return this._behaviorData.JumpHeight !== undefined ? this._behaviorData.JumpHeight : Number("45") || 0;
  }
  _setJumpHeight(newValue) {
    this._behaviorData.JumpHeight = newValue;
  }
  _getJumpSpeed() {
    return this._behaviorData.JumpSpeed !== undefined ? this._behaviorData.JumpSpeed : Number("1") || 0;
  }
  _setJumpSpeed(newValue) {
    this._behaviorData.JumpSpeed = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getGravity_scale() {
    return this._behaviorData.Gravity_scale !== undefined ? this._behaviorData.Gravity_scale : Number("1") || 0;
  }
  _setGravity_scale(newValue) {
    this._behaviorData.Gravity_scale = newValue;
  }
}

/**
 * Shared data generated from Physics3D(3D box)
 */
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.SharedData = class Physics3D_3D_box_SharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._GDevelop3DPhysics_Physics3D_3D_box_SharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._GDevelop3DPhysics_Physics3D_3D_box_SharedData = new gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.SharedData(
      initialData
    );
  }
  return instanceContainer._GDevelop3DPhysics_Physics3D_3D_box_SharedData;
}

// Methods:
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Easing") : "") != "Jump");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween3("3DJump", gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1[i].getVariables().get("JumpProgress"), (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight()) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("GravityScale3D")) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()), eventsFunctionContext.getArgument("Easing"), (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpSpeed()) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("GravityScale3D")), false);
}
}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3D = function(Tween, Easing, parentEventsFunctionContext) {

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
, "Tween": this._getTween()
, "Tween": Tween
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
if (argName === "Easing") return Easing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Jump_3DContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Is3DJumping(eventsFunctionContext.getBehaviorName("Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("3DJump", false);
}
}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJump = function(Tween, parentEventsFunctionContext) {

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
, "Tween": this._getTween()
, "Tween": Tween
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Stop3DJumpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior2")).isPlaying("3DJump") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumping = function(Behavior2, parentEventsFunctionContext) {

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
, "Tween": this._getTween()
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Is3DJumpingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight())); }}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeight = function(parentEventsFunctionContext) {

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
, "Tween": this._getTween()
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpSpeed())); }}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeed = function(parentEventsFunctionContext) {

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
, "Tween": this._getTween()
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.JumpSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.toString((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallingSpeed())); }}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeed = function(parentEventsFunctionContext) {

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
, "Tween": this._getTween()
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.FallSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObject2Objects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() - ((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallingSpeed()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("GravityScale3D"))));
}
}}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3D = function(Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.GDObject2Objects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Fall_3DContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).isPlaying("3DJump") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("JumpProgress"))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).isPlaying("3DBottomSeparation") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("Bottom3DProgress"))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).isPlaying("3DJump")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("JumpProgress")).setNumber((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()));
}
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


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Tween": this._getTween()
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachIndex2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachObjects2 = [];

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachTemporary2 = null;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachTotalCount2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects4= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block2DEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() < (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[0].getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3[i].separateFromObjectsList(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block2DEntryContext_9546GDObject2Objects3Objects, true);
}
}}

}


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects1);

for (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachIndex2 = 0;gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachIndex2 < gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects1.length;++gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachIndex2) {
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects2.length = 0;


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachTemporary2 = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects1[gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachIndex2];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects2.push(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntry = function(Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.GDObject2Objects4.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block2DEntryContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachIndex2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachObjects2 = [];

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachTemporary2 = null;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachTotalCount2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects4= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getVariables()).get("StepHeight"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPickupRange()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallingSpeed()) + 4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getRotationY() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DTopEntryContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPickupRange()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFallingSpeed()));
}
}}

}


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects1);

for (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachIndex2 = 0;gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachIndex2 < gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects1.length;++gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachIndex2) {
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2.length = 0;


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachTemporary2 = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects1[gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachIndex2];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2.push(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntry = function(Tween, Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Tween": Tween
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.GDObject2Objects4.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DTopEntryContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachIndex2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachObjects2 = [];

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachTemporary2 = null;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachTotalCount2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects5= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects5= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

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


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Is3DJumping(eventsFunctionContext.getBehaviorName("Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getVariables()).get("Bottom3DPosition"))) - (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) - 30 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) / 2 - (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getVariables()).get("Bottom3DPosition"))) - (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop3DJump(eventsFunctionContext.getBehaviorName("Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Is3DJumping(eventsFunctionContext.getBehaviorName("Tween"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CollisonWithObstacleTop(eventsFunctionContext.getBehaviorName("Tween"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects, eventsFunctionContext.getBehaviorName(""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546Block3DBottomEntryContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getVariables()).get("Bottom3DPosition"))) - (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) - 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getZ()) + (( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3 */
{for(var i = 0, len = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ((( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length === 0 ) ? 0 :gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()) - (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getDepth()));
}
}
{ //Subevents
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects1);

for (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachIndex2 = 0;gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachIndex2 < gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects1.length;++gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachIndex2) {
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2.length = 0;


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachTemporary2 = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects1[gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachIndex2];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2.push(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntry = function(Tween, Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Tween": Tween
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.GDObject2Objects5.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.Block3DBottomEntryContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachIndex2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachObjects2 = [];

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachTemporary2 = null;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachTotalCount2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects4= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleTopContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleTopContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleTopContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleTopContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3[0].getVariables()).get("StepHeight"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPickupRange()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects1);

for (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachIndex2 = 0;gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachIndex2 < gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects1.length;++gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachIndex2) {
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects2.length = 0;


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachTemporary2 = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects1[gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachIndex2];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects2.push(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTop = function(Tween, Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Tween": Tween
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.GDObject2Objects4.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleTopContext.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext = {};
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachIndex2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachObjects2 = [];

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachTemporary2 = null;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachTotalCount2 = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects4= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects1= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects2= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3= [];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects4= [];


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleBottomContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleBottomContext_9546GDObject2Objects3Objects = Hashtable.newFrom({"Object2": gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3});
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3);
gdjs.copyArray(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects2, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleBottomContext_9546GDObjectObjects3Objects, gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.mapOfGDgdjs_9546evtsExt_9595_9595GDevelop3DPhysics_9595_9595Physics3D_95953D_9595box_9595_9546Physics3D_95953D_9595box_9595_9546prototype_9546CollisonWithObstacleBottomContext_9546GDObject2Objects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3[0].getVariables()).get("StepHeight"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() <= (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3[0].getVariables()).get("Top3DPosition"))) + (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPickupRange()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[k] = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object2"), gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects1);

for (gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachIndex2 = 0;gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachIndex2 < gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects1.length;++gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachIndex2) {
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects2.length = 0;


gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachTemporary2 = gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects1[gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachIndex2];
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects2.push(gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottom = function(Tween, Object2, Behavior2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
, "Tween": Tween
, "Behavior2": Behavior2
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

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects1.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects2.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects3.length = 0;
gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.GDObject2Objects4.length = 0;

gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_.prototype.CollisonWithObstacleBottomContext.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("GDevelop3DPhysics::Physics3D_3D_box_", gdjs.evtsExt__GDevelop3DPhysics__Physics3D_3D_box_.Physics3D_3D_box_);
