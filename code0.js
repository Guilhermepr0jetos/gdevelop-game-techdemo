gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDcoinObjects1= [];
gdjs.Untitled_32sceneCode.GDcoinObjects2= [];
gdjs.Untitled_32sceneCode.GDcoinObjects3= [];
gdjs.Untitled_32sceneCode.GDpredioObjects1= [];
gdjs.Untitled_32sceneCode.GDpredioObjects2= [];
gdjs.Untitled_32sceneCode.GDpredioObjects3= [];
gdjs.Untitled_32sceneCode.GDdinheiroObjects1= [];
gdjs.Untitled_32sceneCode.GDdinheiroObjects2= [];
gdjs.Untitled_32sceneCode.GDdinheiroObjects3= [];
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects1= [];
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects2= [];
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects3= [];
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1= [];
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects2= [];
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects3= [];
gdjs.Untitled_32sceneCode.GDturnoObjects1= [];
gdjs.Untitled_32sceneCode.GDturnoObjects2= [];
gdjs.Untitled_32sceneCode.GDturnoObjects3= [];
gdjs.Untitled_32sceneCode.GDRoadStraightObjects1= [];
gdjs.Untitled_32sceneCode.GDRoadStraightObjects2= [];
gdjs.Untitled_32sceneCode.GDRoadStraightObjects3= [];
gdjs.Untitled_32sceneCode.GDDinoLenaObjects1= [];
gdjs.Untitled_32sceneCode.GDDinoLenaObjects2= [];
gdjs.Untitled_32sceneCode.GDDinoLenaObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects3= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects3= [];
gdjs.Untitled_32sceneCode.GDdebugObjects1= [];
gdjs.Untitled_32sceneCode.GDdebugObjects2= [];
gdjs.Untitled_32sceneCode.GDdebugObjects3= [];
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects1= [];
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects2= [];
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects3= [];
gdjs.Untitled_32sceneCode.GDColisorObjects1= [];
gdjs.Untitled_32sceneCode.GDColisorObjects2= [];
gdjs.Untitled_32sceneCode.GDColisorObjects3= [];
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects1= [];
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects2= [];
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects3= [];
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1= [];
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2= [];
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects3= [];
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3= [];
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1= [];
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2= [];
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects3= [];
gdjs.Untitled_32sceneCode.GDtouchColisorObjects1= [];
gdjs.Untitled_32sceneCode.GDtouchColisorObjects2= [];
gdjs.Untitled_32sceneCode.GDtouchColisorObjects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDavan_959595231arTurnoObjects1Objects = Hashtable.newFrom({"avançarTurno": gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNew3DBoxObjects1Objects = Hashtable.newFrom({"New3DBox": gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "menu", 0) >= 600);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "menu", 0) <= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].getBehavior("Object3D").setRotationX(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].getBehavior("Object3D").getRotationX() + (gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[i].setAngle(gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[i].getBehavior("Object3D").setZ((( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[0].getBehavior("Object3D").getZ()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].getBehavior("Object3D").setRotationY(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].getBehavior("Object3D").getRotationY() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").setRotationX(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").getRotationX() + (gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].setAngle(gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].getAngle() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].getBehavior("Object3D").setZ((( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[0].getBehavior("Object3D").getZ()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").setRotationY(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").getRotationY() + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDjoystickcolisorObjects1Objects = Hashtable.newFrom({"joystickcolisor": gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDjoystickcolisorObjects2Objects = Hashtable.newFrom({"joystickcolisor": gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].addPolarForce((( gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[0].getAngle()), 350, 0);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].addPolarForce((( gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[0].getAngle()), -(350), 0);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].addPolarForce((( gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[0].getAngle()) + 90, -(350), 0);
}
}}

}


{

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2[i].addPolarForce((( gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[0].getAngle()) - 90, -(350), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12551548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animState");
}}

}


{

gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1.length = 0;

/* Reuse gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[k] = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2);
{isConditionTrue_1 = ((( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[0].StickForceY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final.push(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1, gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2);

isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDjoystickcolisorObjects2Objects, runtimeScene, true, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1_1final.push(gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(12554180);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1_1final, gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1_1final, gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "animState");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects = Hashtable.newFrom({"Colisor": gdjs.Untitled_32sceneCode.GDColisorObjects1});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[i].setFaceResourceName("left", "Generic Character 2_Up_1.png");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2[i].setFaceResourceName("left", "Generic Character 2_Up_2.png");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].setFaceResourceName("left", "Generic Character 2_Up_3.png");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("dinheiro"), gdjs.Untitled_32sceneCode.GDdinheiroObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDdinheiroObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDdinheiroObjects1[i].getBehavior("Text").setText("Dinheiro:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("avançarTurno"), gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[k] = gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("turno"), gdjs.Untitled_32sceneCode.GDturnoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDturnoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDturnoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("avançarTurno"), gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[k] = gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12530660);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10000 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("avançarTurno"), gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDavan_959595231arTurnoObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12532220);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.Untitled_32sceneCode.GDdebugObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDdebugObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.input.getCursorX(runtimeScene, "menu", 0)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);
{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNew3DBoxObjects1Objects, "Object3D", 200, (( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[0].getBehavior("Object3D").getRotationY()), gdjs.evtTools.common.clamp((( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[0].getBehavior("Object3D").getRotationX()), -(10), 115), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("touchColisor"), gdjs.Untitled_32sceneCode.GDtouchColisorObjects1);
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtouchColisorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtouchColisorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[0].getCenterXInScene()),(( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[0].getCenterYInScene()) - 50);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("joystickcolisor"), gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDjoystickcolisorObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Colisor"), gdjs.Untitled_32sceneCode.GDColisorObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").Block2DEntry(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").Block3DBottomEntry("Tween", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").Block3DTopEntry("Tween", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__GDevelop3DPhysics__GravityScale.func(runtimeScene, "= (set to)", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Colisor"), gdjs.Untitled_32sceneCode.GDColisorObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12565444);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").CollisonWithObstacleTop("Tween", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").setZ(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Object3D").getZ() + (60));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Colisor"), gdjs.Untitled_32sceneCode.GDColisorObjects1);
gdjs.copyArray(runtimeScene.getObjects("New3DBox"), gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").CollisonWithObstacleTop("Tween", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDColisorObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1[i].getBehavior("Physics3D_3D_box_").Fall_3D(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDColisorObjects1Objects, "Physics3DBox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12569508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animState");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12570164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animState");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "animState");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "animState") >= 0.3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animState");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].setFaceResourceName("left", "Generic Character 2_Up_1.png");
}
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12576532);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DBox2"), gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1[i].getBehavior("Resizable").setWidth(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDcoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDpredioObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpredioObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpredioObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdinheiroObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdinheiroObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdinheiroObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDturnoConvertidoEmAnoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDavan_95231arTurnoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDturnoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDturnoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDturnoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRoadStraightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRoadStraightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRoadStraightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDinoLenaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDinoLenaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDinoLenaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSkeletonMinionObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDColisorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDColisorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDColisorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGenericCharacter2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBox2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLineLightJoystickObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDjoystickcolisorObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtouchColisorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtouchColisorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtouchColisorObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
