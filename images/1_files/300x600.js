(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.element_end = function() {
	this.initialize(img.element_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,262);


(lib.iconyo = function() {
	this.initialize(img.iconyo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,65);


(lib.leaves = function() {
	this.initialize(img.leaves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,330);


(lib.splash01 = function() {
	this.initialize(img.splash01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,105);


(lib.traxanh = function() {
	this.initialize(img.traxanh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,69);


(lib.yobottle1 = function() {
	this.initialize(img.yobottle1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,163);


(lib.yobottle2 = function() {
	this.initialize(img.yobottle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,350);


(lib.yocopy = function() {
	this.initialize(img.yocopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,75);


(lib.yofr01 = function() {
	this.initialize(img.yofr01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,743,340);


(lib.yofr02 = function() {
	this.initialize(img.yofr02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,253);


(lib.yofr02milk = function() {
	this.initialize(img.yofr02milk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,60);


(lib.yologo = function() {
	this.initialize(img.yologo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,60);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.traxanh();
	this.instance.parent = this;
	this.instance.setTransform(0,135,1.0002,1.0002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,135,339.1,69), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.iconyo();
	this.instance.parent = this;
	this.instance.setTransform(14,3,1.169,1.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(14,3,105.2,76), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yocopy();
	this.instance.parent = this;
	this.instance.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-34,0,300,75), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yobottle2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5146,0.5143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,56.1,180), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.splash01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,95,105), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yofr01();
	this.instance.parent = this;
	this.instance.setTransform(11,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(11,-21,743,340), null);


(lib.Symbol_14_Layer_1_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-318.5,-229.7)).s().p("AlEFCIAAqEIKJAAIAAKEg");
	this.shape.setTransform(346.45,311.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-105.8,-83.4)).s().p("AogFnIAAqjID6AAIAAgqINHAAIAALNg");
	this.shape_1.setTransform(11.35,286);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-288.2,-28.9)).s().p("AldEhIAApBIK7AAIAAJBg");
	this.shape_2.setTransform(244.45,-80.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-337.1,-12)).s().p("AiKArIAAhVIEVAAIAABVg");
	this.shape_3.setTransform(276.625,-37.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-337.1,-30.8)).s().p("AiKAnIAAhNIEVAAIAABNg");
	this.shape_4.setTransform(230.275,-37.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-25.6,-78.9)).s().p("ACOE3IgBAAImMAAIAAhKIAAnFIAAhdIH/AAIAAJsg");
	this.shape_5.setTransform(74.375,-33.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-18.6,-3.7)).s().p("Ai5AlIAAhJIFzAAIAABJg");
	this.shape_6.setTransform(30.15,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-5.8,-31.9)).s().p("Ag5BCIAAhDIAAhAIBzAAIAACDg");
	this.shape_7.setTransform(28.925,25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-104.5,-92.2)).s().p("AFGEPIgZAAIgrAAIAAgFIsVAAIAAmUIAAiEINZAAIDOAAIAAEdIAAEAg");
	this.shape_8.setTransform(87.9,46.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-285.3,-76.5)).s().p("AgdAcIh2AAIAAg3IB2AAIAkAAICNAAIAAA3g");
	this.shape_9.setTransform(239,35.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-343.9,-3.9)).s().p("AhGAnIAAhNICNAAIAABNg");
	this.shape_10.setTransform(297.575,-14.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-325.6,-70.8)).s().p("AhwFpIAAg4IiNAAIAAmzIDnAAIAAjmIEUAAIAACZIAABNIAAHrg");
	this.shape_11.setTransform(265.075,2.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-283.2,-107.4)).s().p("AmEFRIAAphIAAhAIEGAAIAAA4IEnAAIAACiIAAETIDcAAIAAA1Ih+AAIAAB/g");
	this.shape_12.setTransform(283.2,85.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-280.3,-181.5)).s().p("AgYFuIhvAAIAApGIAAhZIgvAAIggAAIAHg7IAZAAIGNAAIAAIMIifAAIAADOg");
	this.shape_13.setTransform(264.55,187.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-73.5,-178.7)).s().p("AivEJIAAoRIFPAAIAACTIAQAAIAAEZIAABlg");
	this.shape_14.setTransform(73.475,166.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(img.element_end, null, new cjs.Matrix2D(1.307,0.142,0.123,-1.133,-260.3,191.7)).s().p("AsEDOIAfkhIALhgIAHhCIANh4ID9AAIAAgIIQwB1IAvAFIAAJFIBvAAIgEAsg");
	this.shape_15.setTransform(184.7375,191.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-17.3,-213.1)).s().p("AisA+IAAh6IFZAAIAAB6g");
	this.shape_16.setTransform(54.525,368.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-105.8,-83.4)).s().p("AIHFnIAAhAIAaAAIAABAgAogi3IAAivIEAAAIIBAAIFAAAIAABvItZAAIh0AAIAABAg");
	this.shape_17.setTransform(66.05,43.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-25.7,-74.4)).s().p("AkAFnIAAgDIIAAAIAAheIABAAIAAAUIAABNgAkAkIIAAheIB0AAIAABeg");
	this.shape_18.setTransform(62.875,-28.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-332.6,-69.7)).s().p("Ai3IWIAAijIFvAAIAACjgAhdmsIAAhpIEVAAIAABpg");
	this.shape_19.setTransform(318.5,19.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(img.element_end, null, new cjs.Matrix2D(1,0,0,1,-175.5,-131)).s().p("APdUeIAAh3IB0AAIAAB3gA7aP4IAAiFIH0AAIAAh3IA7AAIAAgVICfAAIAAERgAtLIIIAAkbIDhAAIgNB5IgHAAIAABBIgLBhgAlsDmIAAlaIDWAAIAArOIjBAAIAAkeIjOAAIAAhwIk/AAIAAhNIXBAAIAAFJIh2AAIAAA4IB2AAIAADBIBTAAIAAJhIAADfIKMAAIAAAnIp5AAIAAA/IgZAAIgGA7IAfAAIAABUgAW6gZIAAg1IEhAAIAAA1gA7awgIAAizIF0AAIAAADIkBAAIAACwg");
	this.shape_20.setTransform(175.5,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_14_Layer_1_copy, null, null);


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C0C0C0").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,300.003,1,2.4056);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


(lib.re = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyBNQgigPgNgiQgNggAOghQAOghAhgOIAJAUQgZAKgLAaQgLAZAKAYQAKAZAZAKQAaAKAXgKQAZgKALgYQAKgZgKgZIgoAQIAfhHIBHAfIgpAQQAOAhgOAiQgPAhghAOQgQAHgQAAQgRAAgRgIg");
	this.shape.setTransform(10.237,7.8504);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AidCcIAAk3IE7AAIAAE3g");
	this.shape_1.setTransform(12.55,11.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-4.5,31.599999999999998,31.2);


(lib.milk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yofr02milk();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.milk, new cjs.Rectangle(0,0,114,60), null);


(lib.main_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(1,-173,1,2.41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198));

}).prototype = p = new cjs.MovieClip();


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yologo();
	this.instance.parent = this;
	this.instance.setTransform(-6,-7,0.8333,0.8333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-6,-7,72.5,50), null);


(lib.lighting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,1],-3.7,0,3.8,0).s().p("AglDlIAAnKIBKAAIAAHKg");
	this.shape.setTransform(3.75,22.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lighting, new cjs.Rectangle(0,0,7.5,45.9), null);


(lib.leaves_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.leaves();
	this.instance.parent = this;
	this.instance.setTransform(31.2,7.35,0.9453,0.9453,5.7365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaves_1, new cjs.Rectangle(0,7.4,420.6,349.5), null);


(lib.cta_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#443C91").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,302,602);


(lib.bottle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.yobottle1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottle1, new cjs.Rectangle(0,0,245,163), null);


(lib.twoBottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(24.95,187.8,1,1,0,0,0,28,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,1.7,168.9,199.8);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy_obj_
	this.Layer_1_copy = new lib.Symbol_14_Layer_1_copy();
	this.Layer_1_copy.name = "Layer_1_copy";
	this.Layer_1_copy.parent = this;
	this.Layer_1_copy.setTransform(167.9,132.7,1,1,0,0,0,167.9,132.7);
	this.Layer_1_copy.depth = 0;
	this.Layer_1_copy.isAttachedToCamera = 0
	this.Layer_1_copy.isAttachedToMask = 0
	this.Layer_1_copy.layerDepth = 0
	this.Layer_1_copy.layerIndex = 0
	this.Layer_1_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1_copy).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-43.1,-109,422.1,483.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(135.5,302.5,1,1,0,0,0,169.5,34.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(27));

	// Layer_1
	this.instance_1 = new lib.Symbol14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.6,204.65,0.4557,0.4753,0,0,0,175.7,131.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:175.5,regY:130.9,scaleX:1.2192,scaleY:1.2192,x:137.5,y:153.9,alpha:1},34,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-138.8,514.8,610.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(14.5,130.5,1,1,0,0,0,47.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({x:-3,y:141.5,alpha:0},5,cjs.Ease.quartOut).wait(1));

	// Layer_1
	this.instance_1 = new lib.bottle1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.5,81.5,1,1,0,0,0,122.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,0,295.5,194);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.milk();
	this.instance.parent = this;
	this.instance.setTransform(317,119,1,1,0,0,0,57,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({alpha:0},4).to({_off:true},1).wait(7));

	// Layer_1
	this.instance_1 = new lib.yofr02();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,503,253);


(lib.main_tagline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tagline
	this.cta = new lib.cta_();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(-331.7,-331.1,4.7499,3.7698);
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta_(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(309));

}).prototype = p = new cjs.MovieClip();


(lib.main_Stop_idn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stop_idn
	this.replayBtn = new lib.re();
	this.replayBtn.name = "replayBtn";
	this.replayBtn.parent = this;
	this.replayBtn.setTransform(256.45,408.85,0.8956,0.8901,0,0,0,-0.2,-0.6);
	this.replayBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replayBtn).wait(197).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.main_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(48.5,-137.8,1.2114,1.2121,0,0,0,28.5,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(198));

}).prototype = p = new cjs.MovieClip();


(lib.main_ico_yo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico_yo
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(194,98.85,2.8349,2.8349,0,0,0,38.6,27.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({regX:38,regY:27.5,scaleX:1,scaleY:1,x:195,y:113.5,alpha:1},5).to({regX:38.1,regY:27.6,scaleX:1.1053,scaleY:1.1053,x:195.1,y:113.65},2).to({regX:38,regY:27.5,scaleX:1,scaleY:1,x:195,y:113.5},2).wait(17).to({scaleX:1.2895,scaleY:1.2895,x:204,y:109.5},4).to({scaleX:1,scaleY:1,x:195,y:113.5},4).wait(67));

}).prototype = p = new cjs.MovieClip();


(lib.main_fr4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fr4
	this.instance = new lib.twoBottle("synched",8,false);
	this.instance.parent = this;
	this.instance.setTransform(168.7,82.65,1.6184,1.619,6.6964,0,0,28.1,90.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).wait(115));

}).prototype = p = new cjs.MovieClip();


(lib.main_bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg2
	this.instance = new lib.Symbol7("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(175,120.25,1,1,0,0,0,166,143);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({_off:false},0).wait(116));

}).prototype = p = new cjs.MovieClip();


(lib.endCopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("ADABsQhjgIi7AJQgPACgYgFQgtgIgpgdIgRhXQgShYACgCIA9ACQBVAAB3gKQCBgLA4BKQAlAyASB5QgLgFgygFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:207.7897,y:84.4542}).wait(75));

	// Layer_4
	this.instance = new lib.lighting();
	this.instance.parent = this;
	this.instance.setTransform(160.65,75.3,1.6104,1,17.2297,0,0,3.8,22.9);
	this.instance.alpha = 0.8984;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:3.9,scaleX:1.4583,x:245.35,y:92.65},15).to({_off:true},1).wait(55));

	// Layer_1
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.5,53.5,2.5852,2.5852,0,0,0,114.5,39.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:40,scaleX:1,scaleY:1,x:114.5,y:66.25,alpha:1},5).to({scaleX:1.0873,scaleY:1.0873,y:66.3},2).to({scaleX:1,scaleY:1,y:66.25},3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.4,-49.6,775.5999999999999,193.9);


(lib.ctaend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_copy_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPAmQgKgLAAgWIAAg0IAVAAIAAA2QAAAMAFAGQAEAHAIgBQAJABAEgHQAFgFAAgNIAAg2IAVAAIAAA0QAAAWgKALQgLALgSAAQgSAAgKgLgABzAsQgJgCgGgHQgHgGgDgIQgEgKAAgKQAAgPAHgKQAHgMAMgFQAMgGAQgBIAQACIAKADIgEASIgJgEIgNgBQgJAAgHADQgHAEgEAHQgEAHAAAJQAAAKADAGQAEAIAHADQAHADAIABIAHAAIAEgBIAAgUIgPAAIAAgQIAjAAIAAAwIgIADIgLACIgMABQgNAAgKgEgAEeAvIAAgnIgdg3IAYAAIAKAYIADAJIAEAJIAAAAIADgJIAEgJIAKgYIAYAAIgfA2IAAAogADyAvIgHgZIgbAAIgHAZIgWAAIAdheIAcAAIAdBegADoAHIgGgTIgCgKIgDgJIgCAKIgCAJIgGATIAVAAgAAyAvIgUgkIgJgPIgIgSIAAAAIAAAUIABAVIAAAcIgTAAIAAheIAYAAIATAjIAJAPIAHARIAAAAIgBgTIgBgUIAAgcIAUAAIAABegAhFAvIgIgZIgbAAIgGAZIgWAAIAcheIAdAAIAdBegAhQAHIgFgTIgDgKIgCgJIgDAKIgCAJIgFATIAUAAgAj+AvIgCgkIAAgRIgBgVIgFASIgGARIgLAmIgRAAIgKglIgEgRIgEgTIgBAAIAAAUIgBASIgCAkIgUAAIAGheIAdAAIAJAgIAEAQIAEARIABAAIAEgRIAFgQIAKggIAbAAIAGBeg");
	this.shape.setTransform(60.825,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKCUQg9AAgrgsQgrgrAAg9QAAg8ArgrQArgrA9gBIOVAAQA9ABArArQArArAAA8QAAA9grArQgrAsg9AAg");
	mask.setTransform(60.625,14.75);

	// Layer_3
	this.instance = new lib.lighting();
	this.instance.parent = this;
	this.instance.setTransform(-12.05,14.4,1.7333,2.0131,20.4391,0,0,3.6,22.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:128.8,y:18.9},15).wait(46));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["#B96C09","#10C8BB"],[0,1],-61.1,0,61.2,0).ss(1,1,1).p("AnKiTIOVAAQA9AAArArQArAsAAA8QAAA9grArQgrAsg9AAIuVAAQg9AAgrgsQgrgrAAg9QAAg8ArgsQArgrA9AAg");
	this.shape_1.setTransform(60.625,14.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF8D25","#EFD251","#36D7B6"],[0,0.38,1],-60.6,0,60.7,0).s().p("AnKCUQg9AAgrgsQgrgrAAg9QAAg8ArgrQArgrA9gBIOVAAQA9ABArArQArArAAA8QAAA9grArQgrAsg9AAg");
	this.shape_2.setTransform(60.625,14.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,123.3,31.5);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text_end
	this.instance = new lib.endCopy("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(150.6,179,1,1,0,0,0,114.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({startPosition:34},0).to({scaleX:1.1965,scaleY:1.1965,x:150.65,startPosition:35},3).to({scaleX:1,scaleY:1,x:150.6,startPosition:38},2).to({scaleX:1.0917,scaleY:1.0917,startPosition:41},2).to({scaleX:1,scaleY:1,startPosition:45},3).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.2,89.4,775.5,193.9);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.ctaend("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(112.85,178.8,1,1,0,0,0,60.6,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:134.8,startPosition:10},6,cjs.Ease.quadOut).wait(19).to({startPosition:32},0).to({scaleX:1.2226,scaleY:1.2226,x:112.9,y:134.85,startPosition:37},5).to({scaleX:1,scaleY:1,x:112.85,y:134.8,startPosition:42},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.8,115.8,150.3,78.7);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fr3
	this.instance = new lib.Symbol3("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(42.1,164.65,0.4245,0.4245,0,0,0,122.6,81.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({regX:122.5,regY:81.5,scaleX:1,scaleY:1,x:152.5,y:119.5,alpha:1,startPosition:9},5,cjs.Ease.quadOut).wait(4).to({startPosition:13},0).to({regX:122.6,rotation:5.6253,x:155.75,y:130,startPosition:16},2).to({regX:122.5,regY:81.6,rotation:-6.1897,x:145.55,y:109.55,startPosition:18},2).to({regY:81.5,rotation:0,x:152.5,y:119.5,startPosition:20},3).wait(8).to({startPosition:28},0).wait(1).to({regX:97.3,regY:97,scaleX:0.993,scaleY:0.993,rotation:-5.4967,x:134.8,y:130.85},0).wait(1).to({regX:122.5,regY:81.5,scaleX:0.986,scaleY:0.986,rotation:-11.0554,x:163.95,y:106.6},0).wait(1).to({regX:97.3,regY:97,scaleX:0.9794,scaleY:0.9794,rotation:-16.7432,x:150.45,y:121.75,alpha:0.7469},0).wait(1).to({scaleX:0.9728,scaleY:0.9728,rotation:-22.4118,x:158.6,y:116.95,alpha:0.4946},0).wait(1).to({scaleX:0.9663,scaleY:0.9663,rotation:-28.0187,x:166.75,y:111.9,alpha:0.245},0).wait(1).to({regX:122.4,regY:82.4,scaleX:0.9598,scaleY:0.9599,rotation:-33.5239,x:186.85,y:81.1,alpha:0},0).wait(1));

	// fr3_leaf
	this.instance_1 = new lib.leaves_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,175.85,0.5159,0.5159,0,0,0,100.9,214);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({regX:101,scaleX:1,scaleY:1,y:175.8},10,cjs.Ease.quintOut).wait(24).to({x:-38,y:194.8,alpha:0},6).to({_off:true},1).wait(5));

	// fr2
	this.instance_2 = new lib.Symbol2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(414.95,57.5,1,1,0,0,0,251.5,126.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({x:362.95,y:72.4,alpha:0.2659,startPosition:1},0).wait(1).to({x:323.45,y:83.75,alpha:0.4681,startPosition:2},0).wait(1).to({x:293.05,y:92.45,alpha:0.6235,startPosition:3},0).wait(1).to({x:269.8,y:99.1,alpha:0.7426,startPosition:4},0).wait(1).to({x:252.15,y:104.15,alpha:0.8329,startPosition:5},0).wait(1).to({x:239.15,y:107.9,alpha:0.8996,startPosition:6},0).wait(1).to({x:229.9,y:110.55,alpha:0.9468,startPosition:7},0).wait(1).to({x:223.9,y:112.3,alpha:0.9777,startPosition:8},0).wait(1).to({x:220.55,y:113.25,alpha:0.9947,startPosition:9},0).wait(1).to({x:219.5,y:113.5,alpha:1},0).wait(7).to({startPosition:16},0).to({regX:251.4,scaleX:0.8986,scaleY:0.8986,rotation:-9.4185,x:19.5,y:173.6,startPosition:28},12,cjs.Ease.cubicInOut).wait(26).to({startPosition:29},0).to({regX:251.5,x:-76.4,y:211.55,alpha:0},6).to({_off:true},1).wait(5));

	// fr1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(245,130.05,1,1,0,0,0,371.5,170);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:382.5,regY:149,x:216.7,y:121.85,alpha:0.2659},0).wait(1).to({x:186.75,y:131.55,alpha:0.4681},0).wait(1).to({x:163.8,y:139,alpha:0.6235},0).wait(1).to({x:146.15,y:144.7,alpha:0.7426},0).wait(1).to({x:132.8,y:149,alpha:0.8329},0).wait(1).to({x:122.95,y:152.2,alpha:0.8996},0).wait(1).to({x:115.95,y:154.45,alpha:0.9468},0).wait(1).to({x:111.4,y:155.95,alpha:0.9777},0).wait(1).to({x:108.85,y:156.75,alpha:0.9947},0).wait(1).to({regX:371.5,regY:170,x:97.05,y:178.05,alpha:1},0).wait(8).to({regX:382.5,regY:149,x:28.75,y:177.25},0).wait(1).to({x:-31.65,y:192.6},0).wait(1).to({x:-78,y:204.4},0).wait(1).to({x:-113.55,y:213.45},0).wait(1).to({x:-140.5,y:220.3},0).wait(1).to({x:-160.4,y:225.4},0).wait(1).to({x:-174.5,y:229},0).wait(1).to({x:-183.7,y:231.35},0).wait(1).to({x:-188.8,y:232.6},0).wait(1).to({regX:371.5,regY:170,x:-201.4,y:254.05},0).to({_off:true},14).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-561.9,-69,1228.4,472.1);


(lib.main_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol17("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(153.1,341.6,1.3555,1.3559,0,0,0,115.4,141.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(78));

}).prototype = p = new cjs.MovieClip();


(lib.main_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(153.1,254.25,1,1,0,0,0,151.4,200.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({_off:false},0).wait(221));

}).prototype = p = new cjs.MovieClip();


(lib.main_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol16("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-1.5,243.55,1.1869,1.1869,-18.7974,0,0,0,182.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},88).wait(221));

}).prototype = p = new cjs.MovieClip();


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cta = this.tagline.cta;
		this.cta.addEventListener("click", ctaClicked);
		function ctaClicked(e) {
			
			button = e.nativeEvent.which
			if(button!=3)
			window.open(clickTag,"_blank");
			//Enabler.exit("exit",'');
		}
	}
	this.frame_197 = function() {
		this.replayBtn = this.Stop_idn.replayBtn;
		this.stop();
		this.replayBtn.addEventListener("click", onPlayButton_clickHanlder.bind(this));
		function onPlayButton_clickHanlder() {
			this.gotoAndPlay(1);
		}
	}
	this.frame_308 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(197).call(this.frame_197).wait(111).call(this.frame_308).wait(1));

	// Stop_idn_obj_
	this.Stop_idn = new lib.main_Stop_idn();
	this.Stop_idn.name = "Stop_idn";
	this.Stop_idn.parent = this;
	this.Stop_idn.depth = 0;
	this.Stop_idn.isAttachedToCamera = 0
	this.Stop_idn.isAttachedToMask = 0
	this.Stop_idn.layerDepth = 0
	this.Stop_idn.layerIndex = 0
	this.Stop_idn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Stop_idn).wait(197).to({_off:true},1).wait(111));

	// tagline_obj_
	this.tagline = new lib.main_tagline();
	this.tagline.name = "tagline";
	this.tagline.parent = this;
	this.tagline.setTransform(380.8,799.8,1,1,0,0,0,380.8,799.8);
	this.tagline.depth = 0;
	this.tagline.isAttachedToCamera = 0
	this.tagline.isAttachedToMask = 0
	this.tagline.layerDepth = 0
	this.tagline.layerIndex = 1
	this.tagline.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tagline).wait(309));

	// logo_obj_
	this.logo = new lib.main_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(50.6,-136.1,1,1,0,0,0,50.6,-136.1);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 2
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).to({_off:true},198).wait(111));

	// Layer_5_obj_
	this.Layer_5 = new lib.main_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 3
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(120).to({_off:true},78).wait(111));

	// Layer_3_obj_
	this.Layer_3 = new lib.main_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 4
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(309));

	// ico_yo_obj_
	this.ico_yo = new lib.main_ico_yo();
	this.ico_yo.name = "ico_yo";
	this.ico_yo.parent = this;
	this.ico_yo.depth = 0;
	this.ico_yo.isAttachedToCamera = 0
	this.ico_yo.isAttachedToMask = 0
	this.ico_yo.layerDepth = 0
	this.ico_yo.layerIndex = 5
	this.ico_yo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ico_yo).wait(131).to({_off:true},67).wait(111));

	// Layer_2_obj_
	this.Layer_2 = new lib.main_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(257.9,62.7,1,1,0,0,0,257.9,62.7);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 6
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(309));

	// fr4_obj_
	this.fr4 = new lib.main_fr4();
	this.fr4.name = "fr4";
	this.fr4.parent = this;
	this.fr4.depth = 0;
	this.fr4.isAttachedToCamera = 0
	this.fr4.isAttachedToMask = 0
	this.fr4.layerDepth = 0
	this.fr4.layerIndex = 7
	this.fr4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fr4).wait(83).to({_off:true},115).wait(111));

	// bg2_obj_
	this.bg2 = new lib.main_bg2();
	this.bg2.name = "bg2";
	this.bg2.parent = this;
	this.bg2.depth = 0;
	this.bg2.isAttachedToCamera = 0
	this.bg2.isAttachedToMask = 0
	this.bg2.layerDepth = 0
	this.bg2.layerIndex = 8
	this.bg2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(82).to({_off:true},116).wait(111));

	// bg_obj_
	this.bg = new lib.main_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(151,128.3,1,1,0,0,0,151,128.3);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 9
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).to({_off:true},198).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-678.5,-333.2,1774.2,2266.1);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(149.05,296.1,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_2, null, null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(150,300,1,1,0,0,0,150,300);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(379.9,970.9,1,1,0,0,0,379.9,970.9);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,140,922,460.6);
// library properties:
lib.properties = {
	id: 'DC7743167AFA5A4FAD5AD54D885C520D',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1558515108584", id:"bg"},
		{src:"images/element_end.png?1558515108584", id:"element_end"},
		{src:"images/iconyo.png?1558515108584", id:"iconyo"},
		{src:"images/leaves.png?1558515108584", id:"leaves"},
		{src:"images/splash01.png?1558515108584", id:"splash01"},
		{src:"images/traxanh.png?1558515108584", id:"traxanh"},
		{src:"images/yobottle1.png?1558515108584", id:"yobottle1"},
		{src:"images/yobottle2.png?1558515108584", id:"yobottle2"},
		{src:"images/yocopy.png?1558515108584", id:"yocopy"},
		{src:"images/yofr01.png?1558515108584", id:"yofr01"},
		{src:"images/yofr02.png?1558515108584", id:"yofr02"},
		{src:"images/yofr02milk.png?1558515108584", id:"yofr02milk"},
		{src:"images/yologo.png?1558515108584", id:"yologo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC7743167AFA5A4FAD5AD54D885C520D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;