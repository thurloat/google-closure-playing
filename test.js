goog.provide('thurloat.floatyeye');
goog.provide('thurloat.floateye.giver')

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

function updateFloatyText(text){
    goog.dom.getElement('obj').innerHTML = text;
}

var old_left = 0;
var new_left = 0;

var old_top = 0;
var new_top = 0;

function printThings(e){
    old_left = new_left;
    old_top = new_top;
    
    var browser_evt = e.getBrowserEvent();    
    
    new_top = browser_evt.beta;
    new_left = browser_evt.gamma;
    
    var left_diff = new_left - old_left;
    var top_diff = new_top - old_top;
    
    if(left_diff < -1.5 || left_diff > 1.5){
            goog.dom.getElement('obj').style.left = (new_left + 30) * 10;
    }
    if(top_diff < -1.5 || top_diff > 1.5){
            goog.dom.getElement('obj').style.top = (new_top + 20) * 10;
    }
}

thurloat.floatyeye.giver = function() {
    goog.dom.setProperties(goog.dom.getElement('obj'), {'style': 'position: absolute; z-index: 100; background-color: #339; height: 100px; width: 100px; border-radius: 100px;'});
    goog.events.listen(window, 'deviceorientation', printThings);
    goog.events.listen(goog.dom.getElement('input'), 'input', updateFloatyText);
};

goog.exportSymbol('thurloat.floatyeye.giver', thurloat.floatyeye.giver);