gdjs.debugCode = {};
gdjs.debugCode.localVariables = [];
gdjs.debugCode.GDdebugEmprestimoCasaObjects1= [];
gdjs.debugCode.GDdebugEmprestimoCasaObjects2= [];
gdjs.debugCode.GDVoltarBotaoObjects1= [];
gdjs.debugCode.GDVoltarBotaoObjects2= [];


gdjs.debugCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debugEmprestimoCasa"), gdjs.debugCode.GDdebugEmprestimoCasaObjects1);
{for(var i = 0, len = gdjs.debugCode.GDdebugEmprestimoCasaObjects1.length ;i < len;++i) {
    gdjs.debugCode.GDdebugEmprestimoCasaObjects1[i].getBehavior("Text").setText("emprestimoCasa " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VoltarBotao"), gdjs.debugCode.GDVoltarBotaoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.debugCode.GDVoltarBotaoObjects1.length;i<l;++i) {
    if ( gdjs.debugCode.GDVoltarBotaoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.debugCode.GDVoltarBotaoObjects1[k] = gdjs.debugCode.GDVoltarBotaoObjects1[i];
        ++k;
    }
}
gdjs.debugCode.GDVoltarBotaoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.debugCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.debugCode.GDdebugEmprestimoCasaObjects1.length = 0;
gdjs.debugCode.GDdebugEmprestimoCasaObjects2.length = 0;
gdjs.debugCode.GDVoltarBotaoObjects1.length = 0;
gdjs.debugCode.GDVoltarBotaoObjects2.length = 0;

gdjs.debugCode.eventsList0(runtimeScene);

return;

}

gdjs['debugCode'] = gdjs.debugCode;
