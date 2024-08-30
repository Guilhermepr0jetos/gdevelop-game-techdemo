gdjs.emprestimoCode = {};
gdjs.emprestimoCode.localVariables = [];
gdjs.emprestimoCode.GDDinheiro_9595Objects1= [];
gdjs.emprestimoCode.GDDinheiro_9595Objects2= [];
gdjs.emprestimoCode.GDparaquemestaemprestandoObjects1= [];
gdjs.emprestimoCode.GDparaquemestaemprestandoObjects2= [];
gdjs.emprestimoCode.GDemprestimoCasaObjects1= [];
gdjs.emprestimoCode.GDemprestimoCasaObjects2= [];
gdjs.emprestimoCode.GDemprestimoFamiliaObjects1= [];
gdjs.emprestimoCode.GDemprestimoFamiliaObjects2= [];
gdjs.emprestimoCode.GDemprestimoPessoaObjects1= [];
gdjs.emprestimoCode.GDemprestimoPessoaObjects2= [];
gdjs.emprestimoCode.GDVoltarObjects1= [];
gdjs.emprestimoCode.GDVoltarObjects2= [];


gdjs.emprestimoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dinheiro_"), gdjs.emprestimoCode.GDDinheiro_9595Objects1);
{for(var i = 0, len = gdjs.emprestimoCode.GDDinheiro_9595Objects1.length ;i < len;++i) {
    gdjs.emprestimoCode.GDDinheiro_9595Objects1[i].getBehavior("Text").setText("Dinheiro:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.emprestimoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.emprestimoCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.emprestimoCode.GDVoltarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.emprestimoCode.GDVoltarObjects1[k] = gdjs.emprestimoCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.emprestimoCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("emprestimoCasa"), gdjs.emprestimoCode.GDemprestimoCasaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.emprestimoCode.GDemprestimoCasaObjects1.length;i<l;++i) {
    if ( gdjs.emprestimoCode.GDemprestimoCasaObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.emprestimoCode.GDemprestimoCasaObjects1[k] = gdjs.emprestimoCode.GDemprestimoCasaObjects1[i];
        ++k;
    }
}
gdjs.emprestimoCode.GDemprestimoCasaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 5000);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12654804);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.emprestimoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.emprestimoCode.GDDinheiro_9595Objects1.length = 0;
gdjs.emprestimoCode.GDDinheiro_9595Objects2.length = 0;
gdjs.emprestimoCode.GDparaquemestaemprestandoObjects1.length = 0;
gdjs.emprestimoCode.GDparaquemestaemprestandoObjects2.length = 0;
gdjs.emprestimoCode.GDemprestimoCasaObjects1.length = 0;
gdjs.emprestimoCode.GDemprestimoCasaObjects2.length = 0;
gdjs.emprestimoCode.GDemprestimoFamiliaObjects1.length = 0;
gdjs.emprestimoCode.GDemprestimoFamiliaObjects2.length = 0;
gdjs.emprestimoCode.GDemprestimoPessoaObjects1.length = 0;
gdjs.emprestimoCode.GDemprestimoPessoaObjects2.length = 0;
gdjs.emprestimoCode.GDVoltarObjects1.length = 0;
gdjs.emprestimoCode.GDVoltarObjects2.length = 0;

gdjs.emprestimoCode.eventsList0(runtimeScene);

return;

}

gdjs['emprestimoCode'] = gdjs.emprestimoCode;
