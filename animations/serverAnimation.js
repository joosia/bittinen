(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"arrival_animation_atlas_", frames: [[3347,0,297,110],[0,0,3345,550]]}
];
lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		
lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		
lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		
	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		
lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		
	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
(lib.Bitmap1 = function() {
	this.spriteSheet = ss["arrival_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
(lib.flash0ai = function() {
	this.spriteSheet = ss["arrival_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:
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
(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB5B").s().p("AgzA0QgVgWAAgeQAAgeAVgVQAWgVAdAAQAeAAAVAVQAWAVAAAeQAAAegWAWQgVAVgeAAQgeAAgVgVg");
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.6,14.7);
(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB5B").s().p("AgzAzQgVgVAAgeQAAgdAVgWQAWgVAdAAQAeAAAWAVQAVAWAAAdQAAAegVAVQgWAWgeAAQgdAAgWgWg");
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,14.6);
(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE5653").s().p("AiFdxIgdgbIhLhLQgagbhGhOQhchphUhwQitjkiAj1QhDiCg0h/IgZhCIhCjMQhSkdAAkZIAEiNIAFhFIAFhFQAOiSAWh/QAbiVAfh4QAoiWAphyQBokeCNjNQBXh/BZhUIBphXQA2gmA/geIgZAWIgZAWQgLAKgjAlQgzA8gdAsIgjA2IghA4IgdA5IgcA7Qg2B6gkB3QgnCAgYB5QgbCDgQB7QgRCOgGBxQgICMAAB1IABBAIACBAIAHB8IAHA8IAIA8QAQBdAHAaIAdB3IASA7IATA6IBECsIAZA5IBFCKIAtBSQCADdCZDCQBNBjBVBeIAiAnIAkgnQBUheBNhjQCbjEB+jbIA8htQATglAJgTIAbg3IAZg4IBDitQAIgTAMgnQAMgnAFgUIAeh3QAIgfAPhYIAIg8QAGguABgOIAEg8IADhAIAChAIABhAQAAiAgIiBQgFhqgTiVQgPh/gbh/QgYh5gniAQgkh3g2h6Igcg7Igeg6Iggg3Igkg2Qgcgsg0g8QghgjgNgMQgJgJgpgjQA8AcA5AoIAbAUQANAJAOAMIAzAuQBdBZBTB6QCODPBnEcQBaD7AwEaQANBGAIBDIAIBDIAHBFIAGBFIAJDSQABASgDA3IgCAiIgCAkQgKBpgGAnQgQB3gsCgIgUBFIhHDJQgzB/hECCQiAD1itDkQhPBrhhBuQgyA5gtAvIhMBMIgdAbIiFB7g");
	this.shape.setTransform(0,1.1,0.139,0.139);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEEAE").s().p("AlCRnQlEpAABonQAAlDAykoQAykeBZjdQBZjdB1h5QB4h9CCAAQCEAAB4B9QBzB5BaDdQC9HTAAKTQAAIuk2I5QhoC+h1CYQhhB9gSAAQihiyihkhg");
	this.shape_1.setTransform(0,-7.2,0.139,0.139);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCB5B").s().p("AjfXkQgkgqglgvQhGhYhChjQiGjFhhjKQhojXg+jaQhDjugNjeQgDg4AAg+IABg7IACg6QAIh9APhmQASiBAUhdQAYhvAghsQBGjnBei6QA1hoA7hZQAmg4AbgiQAjgsAlgpQhWC0g6DjQgcBugSBjQgTBugMBjQgNBygFBgQgGB4AABaQABBuAFBjQAFBbARBtQA+FyDRGBQBjC0B2CmQA4BPA1BDQA2hDA2hNQB4ioBhixQDRl+A/lxQAShuAFhYQAHhuAAhiQAAjagXjIQgZjdgxjDQg5jihUi1QAiAmAlAuQAmA0AZAnQA7BbAzBmQBgC+BCDiQA/DYAdDgQAPBpAHB3QAHBzgIB3QgODghCDqQhADbhmDUQhhDJiFDEQg/BehIBbQgjAtgmAtIjgDwg");
	this.shape_2.setTransform(0,-1.1,0.139,0.139);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-29.3,30.7,58.7);
(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB5B").s().p("An6GfIH6s9IH7M9g");
	this.shape.setTransform(0.1,0);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-41.5,101.5,83);
(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCB5B").s().p("Ah8oXQgFgzAhgpQAggoA0gFQAzgGAoAhQApAhAFA0QABANgBAMIh9S5g");
	this.shape.setTransform(0.1,47.5);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFEEAE").ss(10).p("AGQAAQAACmh1B1Qh1B1imAAQilAAh1h1Qh1h1AAimQAAikB1h2QB1h1ClAAQCmAAB1B1QB1B2AACkg");
	this.shape_1.setTransform(0.1,-93.1);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCB5B").s().p("AkaEbQh1h1AAimQAAikB1h2QB1h1ClAAQClAAB1B1QB2B2AACkQAACmh2B1Qh1B1ilAAQikAAh2h1g");
	this.shape_2.setTransform(0.1,-93.1);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCB5B").s().p("AAAGWQg6AAhQgOQhbgRAFgSIDgr7IDhL7QAFAShbARQhQAOg7AAg");
	this.shape_3.setTransform(0.1,-218.7);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE5653").s().p("AlnYtQimiDiAjtQiAjuhHk0QhIk+AAldQAAlcBIk/QBHk0CAjsQCAjuCmiCQCsiHC7AAQC8AACsCHQCmCCCADuQCADsBGE0QBJE/AAFcQAAFdhJE+QhGE0iADuQiADtimCDQisCGi8AAQi7AAisiGg");
	this.shape_4.setTransform(0.1,-16.6);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCB5B").s().p("Aohh4IDIuiILfOAIAECaQAIC6ANCpQArIeBYCag");
	this.shape_5.setTransform(84.7,154);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCB5B").s().p("AmeFkQANiqAHi6IAFiaILfuAIDIOiIxDSTQBXiaAsodg");
	this.shape_6.setTransform(-84.5,154.3);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.1,-259.4,278.4,518.8);
(lib.timelinecloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.874,0.874);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.timelinecloud, new cjs.Rectangle(0,0,259.7,96.2), null);
(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F3F").s().p("AgVBIQgGgDgDgFQgEgHACgOQACgVAJgkIAPg4QAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAlAAIgNAwIgKAnQgFAXgBARQAAAHgEAFQgEAFgGABIgFAAQgEAAgDgBg");
	this.shape.setTransform(3.4,7.3);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,6.8,14.7), null);
(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.612,0.576);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,2047.7,316.6), null);
(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E3D3B").s().p("Aj3gqIHZiSQAoCDgiCHQgRBEgZArg");
	this.shape.setTransform(74.3,54);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E3D3B").s().p("AjnhNQAKgrARgmIAPgeIG1DoInZCRQgoiCAiiIg");
	this.shape_1.setTransform(24.8,45.2);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E3D3B").s().p("AhNDoQgrgKgmgRIgegPIDom1ICRHZQhHAWhIAAQg9AAg+gQg");
	this.shape_2.setTransform(45.2,74.4);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E3D3B").s().p("Ai8jiQCDgoCHAjQBFARAqAZIjoG1g");
	this.shape_3.setTransform(53.9,24.8);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E3D3B").s().p("Ag4BsQgtgYgPgwQgPgwAYgsQAYgtAwgPQAwgPAsAYQAtAYAPAwQAOAwgXAsQgYAtgwAPQgTAGgRAAQgdAAgbgPg");
	this.shape_4.setTransform(49.6,49.6);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,99.1,99.2), null);
(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E3D3B").s().p("Aj3i5IHuAhQgJCIhRByQgoA6gmAeg");
	this.shape.setTransform(74.3,68.2);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E3D3B").s().p("Aj3CZQAKiIBQhyQApg6AmgfIFFF1g");
	this.shape_1.setTransform(24.8,30.8);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E3D3B").s().p("AhhCeQgkgagegdIgXgYIF1lFIgiHtQiIgJhyhQg");
	this.shape_2.setTransform(30.8,74.2);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E3D3B").s().p("AiYj2QCIAIByBRQA6AoAfAnIl1FGg");
	this.shape_3.setTransform(68.2,24.8);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E3D3B").s().p("AgHB6QgygEgigmQghgmADgxQADgyAngiQAlghAyADQAyAEAiAmQAhAmgDAxQgDAzgmAhQgjAegsAAIgJAAg");
	this.shape_4.setTransform(49.5,49.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,99,99), null);
(lib.ramp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEEAE").s().p("AQbvuICGBtMghRAdqIjwAGg");
	this.shape.setTransform(118.6,100.7);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.ramp, new cjs.Rectangle(0,0,237.1,201.3), null);
(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1C592").s().p("AEeFpQlOgGlHgMQh3ADiBAAQkBABgwgJQg5gLg0gpQg1gqABgiQAAgrAqhGQAzhSBKgqQBFgoB7AJQA+AFAwAMQANhUA2hVQAegvBfgUQAvgKBUgDQAjgCA/AdQAfAPAYAPQAWhCCAgqQCOgtCCAsQBAAWAzBAQANARAFATIAEATQAKAtAgAjQAgAjAtAOQAUAHAVgKQB6g6AlgDQCfgLBKA+QAsAkA1BYQAuA4giBqQgeBdg1AuQgcAYl6AAQiCAAirgDg");
	this.shape.setTransform(109,36.4);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,-0.1,218.1,72.9), null);
(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAE3").s().p("AprGdQmhgkg4gMQgogJAThHQAThKBDg0QA/gwCogLQA1gDAqgaQAqgaAQgoQACgFgDgjQgEgygBgWQgChqAqglQCliPDCgpQDKgqCsBUQBTAoBNCTQAJASA9CTIA4gjQBHgpBHgXQDjhLCWB5QA3AtA1BLQA+BaAQBOQAsDXlCAQQjDAKj0AFImJAIIgdAAQiuAAmlgkg");
	this.shape.setTransform(111.9,44.8);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(-0.1,0,224.1,89.8), null);
(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAE3").s().p("AjNC6QiLgQgTgFQgNgEAGggQAHgiAWgXQAWgXA3gEQARgBAOgMQAOgMAFgSIgBgyQgBgwAOgQQA3hBBAgSQBEgTA4AlQAcASAZBDQANAiALAoIASgQQAYgSAXgLQBMghAyA2QAzA4ALBKQAOBhhrAHQhAAFhSACIiDADIgIABQg6AAiMgRg");
	this.shape.setTransform(37.3,20.3);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,74.5,40.5), null);
(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1C592").s().p("ABfCjQhugDhtgFQifAEgZgHQgTgFgSgSQgRgTAAgQQAAgTAOgfQARglAZgTQAXgSApAEQAUADAQAFQAEgmATgmQAKgWAfgIQAOgEAegDQASgBAhAbQAHgdAqgTQAvgVArAUQAWAKARAdQAEAIABAIIACAJQADAUALAQQALAPAPAHQAGADAHgEQAngbAOgBQA1gFAZAcQAOAQASAnQAPAagLAwQgKApgSAWQgJAKh3AAIhrgBg");
	this.shape.setTransform(36.3,16.4);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,72.6,32.9), null);
(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(-39.4,18.7,1,1,0,0,0,109.1,36.4);
	this.instance.alpha = 0.5;
	this.instance_1 = new lib.Path_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.5,-10,1,1,0,0,0,111.9,44.9);
	this.instance_1.alpha = 0.398;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-55,297,110.1);
(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,4.3,1,1,0,0,0,36.3,16.4);
	this.instance.alpha = 0.5;
	this.instance_1 = new lib.Path_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.7,-0.3,1,1,0,0,0,37.3,20.3);
	this.instance_1.alpha = 0.398;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-20.6,105.8,41.3);
(lib.trees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(1023.9,158.3,1,1,0,0,0,1023.9,158.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1023.8,x:1023.8},0).wait(1).to({x:1023.7},0).wait(1).to({skewX:-0.1,x:1023.6},0).wait(1).to({x:1023.5},0).wait(1).to({x:1023.4},0).wait(2).to({x:1023.3},0).wait(1).to({skewX:-0.2,x:1023.2},0).wait(1).to({x:1023.1},0).wait(1).to({x:1023},0).wait(2).to({x:1022.9},0).wait(2).to({skewX:-0.3,x:1022.8},0).wait(1).to({x:1022.7},0).wait(1).to({x:1022.6},0).wait(1).to({x:1022.5},0).wait(2).to({skewX:-0.4,x:1022.4},0).wait(1).to({x:1022.3},0).wait(1).to({x:1022.2},0).wait(1).to({x:1022.1,y:158.4},0).wait(2).to({skewX:-0.5,x:1022},0).wait(1).to({x:1021.9},0).wait(1).to({x:1021.8},0).wait(1).to({x:1021.7},0).wait(1).to({x:1021.6},0).wait(2).to({skewX:-0.6,x:1021.5},0).wait(1).to({x:1021.4},0).wait(1).to({x:1021.3},0).wait(1).to({x:1021.2},0).wait(2).to({skewX:-0.7,x:1021.1},0).wait(1).to({x:1021},0).wait(2).to({x:1020.9},0).wait(1).to({x:1020.8},0).wait(1).to({skewX:-0.8,x:1020.7},0).wait(2).to({x:1020.6},0).wait(1).to({x:1020.5},0).wait(1).to({x:1020.4},0).wait(1).to({x:1020.3},0).wait(1).to({skewX:-0.9},0).wait(1).to({x:1020.2},0).wait(1).to({x:1020.1},0).wait(1).to({x:1020},0).wait(1).to({x:1019.9},0).wait(1).to({skewX:-1,x:1019.8},0).wait(1).to({y:158.3},0).wait(1).to({x:1019.7},0).wait(1).to({x:1019.6},0).wait(1).to({x:1019.5},0).wait(1).to({scaleY:1,skewX:-1.1,x:1019.4},0).wait(2).to({x:1019.3},0).wait(1).to({x:1019.2},0).wait(1).to({x:1019.1},0).wait(1).to({x:1019},0).wait(1).to({skewX:-1.2},0).wait(1).to({x:1018.9},0).wait(2).to({x:1018.8},0).wait(1).to({x:1018.7},0).wait(1).to({skewX:-1.3,x:1018.6},0).wait(1).to({x:1018.5},0).wait(2).to({x:1018.4},0).wait(1).to({x:1018.3},0).wait(1).to({skewX:-1.4,x:1018.2},0).wait(1).to({x:1018.1},0).wait(1).to({x:1018},0).wait(2).to({x:1017.9},0).wait(1).to({x:1017.8},0).wait(1).to({skewX:-1.5,x:1017.7},0).wait(1).to({x:1017.6},0).wait(2).to({x:1017.5},0).wait(1).to({x:1017.4},0).wait(1).to({skewX:-1.6,x:1017.3},0).wait(1).to({x:1017.2},0).wait(2).to({x:1017.1},0).wait(2).to({skewX:-1.7,x:1017},0).wait(1).to({x:1016.9},0).wait(1).to({x:1016.8},0).wait(1).to({x:1016.7},0).wait(2).to({skewX:-1.8,x:1016.6},0).wait(1).to({x:1016.5},0).wait(1).to({x:1016.4},0).wait(1).to({x:1016.3},0).wait(1).to({x:1016.2},0).wait(2).to({skewX:-1.9,x:1016.1},0).wait(1).to({x:1016},0).wait(1).to({x:1015.9},0).wait(1).to({x:1015.8},0).wait(2).to({skewX:-2,x:1015.7},0).wait(1).to({x:1015.6},0).wait(1).to({x:1015.5},0).wait(1).to({x:1015.4},0).wait(2).to({skewX:-2.1,x:1015.3},0).wait(2).to({x:1015.2},0).wait(1).to({x:1015.1},0).wait(1).to({x:1015},0).wait(1).to({x:1014.9},0).wait(1).to({skewX:-2.2,y:158.4},0).wait(1).to({x:1014.8},0).wait(1).to({x:1014.7},0).wait(1).to({x:1014.6},0).wait(1).to({x:1014.5},0).wait(1).to({skewX:-2.3,x:1014.4},0).wait(2).to({x:1014.3},0).wait(1).to({x:1014.2},0).wait(1).to({x:1014.1},0).wait(1).to({skewX:-2.4,x:1014},0).wait(2).to({x:1013.9},0).wait(1).to({x:1013.8},0).wait(1).to({x:1013.7},0).wait(1).to({x:1013.6},0).wait(1).to({skewX:-2.5},0).wait(1).to({x:1013.5},0).wait(2).to({x:1013.4},0).wait(1).to({x:1013.3},0).wait(1).to({skewX:-2.6,x:1013.2},0).wait(1).to({x:1013.1},0).wait(1).to({x:1013},0).wait(2).to({x:1012.9},0).wait(1).to({skewX:-2.7,x:1012.8},0).wait(1).to({x:1012.7},0).wait(1).to({x:1012.6},0).wait(1).to({y:158.3},0).wait(1).to({x:1012.5},0).wait(1).to({x:1012.4},0).wait(1).to({skewX:-2.8,x:1012.3},0).wait(1).to({x:1012.2},0).wait(2).to({x:1012.1},0).wait(1).to({x:1012},0).wait(1).to({skewX:-2.9,x:1011.9},0).wait(1).to({x:1011.8},0).wait(2).to({x:1011.7},0).wait(1).to({x:1011.6},0).wait(1).to({skewX:-3,x:1011.5},0).wait(2).to({x:1011.4},0).wait(1).to({x:1011.3},0).wait(1).to({x:1011.2},0).wait(1).to({skewX:-3.1},0).wait(1).to({x:1011.1},0).wait(1).to({x:1011},0).wait(1).to({x:1010.9},0).wait(1).to({scaleY:1,x:1010.8},0).wait(2).to({skewX:-3.2,x:1010.7},0).wait(1).to({x:1010.6},0).wait(1).to({x:1010.5},0).wait(1).to({x:1010.4},0).wait(1).to({x:1010.5},0).wait(1).to({x:1010.6},0).wait(2).to({x:1010.7},0).wait(1).to({skewX:-3.1,x:1010.8},0).wait(1).to({x:1010.9},0).wait(1).to({x:1011},0).wait(1).to({scaleY:1},0).wait(1).to({x:1011.1},0).wait(1).to({x:1011.2},0).wait(1).to({skewX:-3},0).wait(1).to({x:1011.3},0).wait(2).to({x:1011.4},0).wait(1).to({x:1011.5},0).wait(2).to({skewX:-2.9,x:1011.6},0).wait(1).to({x:1011.7},0).wait(1).to({x:1011.8},0).wait(1).to({x:1011.9},0).wait(2).to({x:1012},0).wait(1).to({skewX:-2.8,x:1012.1},0).wait(2).to({x:1012.2},0).wait(1).to({x:1012.3},0).wait(2).to({x:1012.4},0).wait(1).to({skewX:-2.7},0).wait(1).to({x:1012.5},0).wait(1).to({x:1012.6,y:158.4},0).wait(1).to({x:1012.7},0).wait(1).to({x:1012.8},0).wait(2).to({skewX:-2.6,x:1012.9},0).wait(1).to({x:1013},0).wait(2).to({x:1013.1},0).wait(1).to({x:1013.2},0).wait(2).to({skewX:-2.5,x:1013.3},0).wait(2).to({x:1013.4},0).wait(1).to({x:1013.5},0).wait(1).to({x:1013.6},0).wait(1).to({x:1013.7},0).wait(1).to({skewX:-2.4},0).wait(1).to({x:1013.8},0).wait(1).to({x:1013.9},0).wait(2).to({x:1014},0).wait(1).to({x:1014.1},0).wait(1).to({skewX:-2.3},0).wait(1).to({x:1014.2},0).wait(1).to({x:1014.3},0).wait(2).to({x:1014.4},0).wait(1).to({x:1014.5},0).wait(1).to({skewX:-2.2,x:1014.6},0).wait(2).to({x:1014.7},0).wait(1).to({x:1014.8},0).wait(2).to({x:1014.9,y:158.3},0).wait(1).to({skewX:-2.1,x:1015},0).wait(2).to({x:1015.1},0).wait(1).to({x:1015.2},0).wait(2).to({x:1015.3},0).wait(1).to({skewX:-2,x:1015.4},0).wait(1).to({x:1015.5},0).wait(2).to({x:1015.6},0).wait(1).to({x:1015.7},0).wait(2).to({skewX:-1.9,x:1015.8},0).wait(1).to({x:1015.9},0).wait(2).to({x:1016},0).wait(1).to({x:1016.1},0).wait(2).to({skewX:-1.8,x:1016.2},0).wait(1).to({x:1016.3},0).wait(1).to({x:1016.4},0).wait(2).to({x:1016.5},0).wait(1).to({x:1016.6},0).wait(1).to({skewX:-1.7},0).wait(1).to({x:1016.7},0).wait(1).to({x:1016.8},0).wait(2).to({x:1016.9},0).wait(1).to({x:1017},0).wait(1).to({skewX:-1.6},0).wait(1).to({x:1017.1},0).wait(1).to({x:1017.2},0).wait(1).to({x:1017.3},0).wait(2).to({x:1017.4},0).wait(1).to({skewX:-1.5,x:1017.5},0).wait(2).to({x:1017.6},0).wait(1).to({x:1017.7},0).wait(2).to({x:1017.8},0).wait(1).to({skewX:-1.4,x:1017.9},0).wait(2).to({x:1018},0).wait(1).to({x:1018.1},0).wait(1).to({x:1018.2},0).wait(2).to({skewX:-1.3,x:1018.3},0).wait(1).to({x:1018.4},0).wait(2).to({x:1018.5},0).wait(1).to({x:1018.6},0).wait(2).to({skewX:-1.2,x:1018.7},0).wait(1).to({x:1018.8},0).wait(2).to({x:1018.9},0).wait(1).to({x:1019},0).wait(1).to({x:1019.1},0).wait(1).to({skewX:-1.1},0).wait(1).to({x:1019.2},0).wait(1).to({x:1019.3},0).wait(2).to({x:1019.4},0).wait(1).to({x:1019.5},0).wait(1).to({scaleY:1,skewX:-1},0).wait(1).to({x:1019.6},0).wait(1).to({x:1019.7},0).wait(2).to({x:1019.8},0).wait(1).to({x:1019.9,y:158.4},0).wait(1).to({skewX:-0.9,x:1020},0).wait(2).to({x:1020.1},0).wait(1).to({x:1020.2},0).wait(2).to({x:1020.3},0).wait(1).to({skewX:-0.8,x:1020.4},0).wait(2).to({x:1020.5},0).wait(1).to({x:1020.6},0).wait(2).to({x:1020.7},0).wait(1).to({skewX:-0.7,x:1020.8},0).wait(1).to({x:1020.9},0).wait(2).to({x:1021},0).wait(1).to({x:1021.1},0).wait(2).to({skewX:-0.6,x:1021.2},0).wait(1).to({x:1021.3},0).wait(2).to({x:1021.4},0).wait(1).to({x:1021.5},0).wait(2).to({skewX:-0.5,x:1021.6},0).wait(1).to({x:1021.7},0).wait(1).to({x:1021.8},0).wait(2).to({x:1021.9},0).wait(1).to({x:1022},0).wait(1).to({skewX:-0.4},0).wait(1).to({x:1022.1},0).wait(1).to({x:1022.2,y:158.3},0).wait(2).to({x:1022.3},0).wait(1).to({x:1022.4},0).wait(1).to({skewX:-0.3},0).wait(1).to({x:1022.5},0).wait(1).to({x:1022.6},0).wait(1).to({x:1022.7},0).wait(1).to({x:1022.8},0).wait(2).to({skewX:-0.2,x:1022.9},0).wait(2).to({x:1023},0).wait(1).to({x:1023.1},0).wait(2).to({x:1023.2},0).wait(1).to({skewX:-0.1,x:1023.3},0).wait(2).to({x:1023.5},0).wait(2).to({x:1023.6},0).wait(1).to({x:1023.7},0).wait(1).to({skewX:0},0).wait(1).to({x:1023.8},0).wait(2));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2047.7,316.6);
(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(3.4,7.3,1,1,0,0,0,3.4,7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1,skewX:-0.5,x:3.5},0).wait(1).to({scaleY:1,skewX:-1.1,x:3.6,y:7.4},0).wait(1).to({scaleY:1.01,skewX:-1.6,y:7.3},0).wait(1).to({scaleY:1.01,skewX:-2.2,x:3.7},0).wait(1).to({scaleY:1.01,skewX:-2.7,x:3.8,y:7.4},0).wait(1).to({scaleY:1.01,skewX:-3.3},0).wait(1).to({scaleY:1.02,skewX:-3.8,x:3.9,y:7.3},0).wait(1).to({scaleY:1.02,skewX:-4.4},0).wait(1).to({scaleY:1.02,skewX:-4.9,x:4,y:7.4},0).wait(1).to({scaleY:1.02,skewX:-5.5,x:4.1},0).wait(1).to({scaleY:1.03,skewX:-6,y:7.3},0).wait(1).to({scaleY:1.03,skewX:-6.6,x:4.2},0).wait(1).to({scaleY:1.03,skewX:-7.1,x:4.3},0).wait(1).to({scaleY:1.03,skewX:-7.6,y:7.4},0).wait(1).to({scaleY:1.04,skewX:-8.2,x:4.4},0).wait(1).to({scaleY:1.04,skewX:-8.7},0).wait(1).to({scaleY:1.04,skewX:-9.3,x:4.5,y:7.3},0).wait(1).to({scaleY:1.04,skewX:-9.8,x:4.6},0).wait(1).to({scaleY:1.05,skewX:-10.4},0).wait(1).to({scaleY:1.05,skewX:-10.9,x:4.7},0).wait(1).to({scaleY:1.05,skewX:-11.5,x:4.8},0).wait(1).to({scaleY:1.05,skewX:-12},0).wait(1).to({scaleY:1.06,skewX:-12.6,x:4.9},0).wait(1).to({scaleY:1.06,skewX:-13.1},0).wait(1).to({scaleY:1.06,skewX:-13.7,x:5,y:7.4},0).wait(1).to({scaleY:1.06,skewX:-14.2,y:7.3},0).wait(1).to({scaleY:1.07,skewX:-14.8,x:5.1},0).wait(1).to({scaleY:1.07,skewX:-15.3,x:5.2},0).wait(1).to({scaleY:1.07,skewX:-15.8},0).wait(1).to({scaleY:1.07,skewX:-16.4,x:5.3},0).wait(1).to({scaleY:1.08,skewX:-16.9,x:5.4},0).wait(1).to({scaleY:1.08,skewX:-17.5},0).wait(1).to({scaleY:1.08,skewX:-18,x:5.5,y:7.4},0).wait(1).to({scaleY:1.08,skewX:-18.6},0).wait(1).to({scaleY:1.09,skewX:-19.1,x:5.6},0).wait(1).to({scaleY:1.09,skewX:-19.7},0).wait(1).to({scaleY:1.09,skewX:-20.2,x:5.7,y:7.3},0).wait(1).to({scaleY:1.09,skewX:-20.8,x:5.8},0).wait(1).to({scaleY:1.1,skewX:-21.3,y:7.4},0).wait(1).to({scaleY:1.1,skewX:-21.9,x:5.9},0).wait(1).to({scaleY:1.1,skewX:-22.4,x:6,y:7.3},0).wait(1).to({scaleY:1.1,skewX:-22.9},0).wait(1).to({scaleY:1.11,skewX:-23.5,x:6.1,y:7.4},0).wait(1).to({scaleY:1.11,skewX:-24,x:6.2},0).wait(1).to({scaleY:1.11,skewX:-24.6,y:7.3},0).wait(1).to({scaleY:1.11,skewX:-25.1,x:6.3,y:7.4},0).wait(1).to({scaleY:1.11,skewX:-25.7},0).wait(1).to({scaleY:1.12,skewX:-26.2,x:6.4,y:7.3},0).wait(1).to({scaleY:1.12,skewX:-26.8,x:6.5},0).wait(1).to({scaleY:1.12,skewX:-26.2,x:6.4},0).wait(1).to({scaleY:1.12,skewX:-25.7,y:7.4},0).wait(1).to({scaleY:1.11,skewX:-25.2,x:6.3},0).wait(1).to({scaleY:1.11,skewX:-24.7,x:6.2,y:7.3},0).wait(1).to({scaleY:1.11,skewX:-24.1,x:6.1,y:7.4},0).wait(1).to({scaleY:1.11,skewX:-23.6},0).wait(1).to({scaleY:1.1,skewX:-23.1,x:6,y:7.3},0).wait(1).to({scaleY:1.1,skewX:-22.6},0).wait(1).to({scaleY:1.1,skewX:-22,x:5.9,y:7.4},0).wait(1).to({scaleY:1.1,skewX:-21.5},0).wait(1).to({scaleY:1.09,skewX:-21,x:5.8,y:7.3},0).wait(1).to({scaleY:1.09,skewX:-20.5},0).wait(1).to({scaleY:1.09,skewX:-19.9,x:5.7},0).wait(1).to({scaleY:1.09,skewX:-19.4,x:5.6,y:7.4},0).wait(1).to({scaleY:1.08,skewX:-18.9},0).wait(1).to({scaleY:1.08,skewX:-18.4,x:5.5},0).wait(1).to({scaleY:1.08,skewX:-17.8,x:5.4,y:7.3},0).wait(1).to({scaleY:1.08,skewX:-17.3},0).wait(1).to({scaleY:1.08,skewX:-16.8,x:5.3},0).wait(1).to({scaleY:1.07,skewX:-16.3},0).wait(1).to({scaleY:1.07,skewX:-15.7,x:5.2},0).wait(1).to({scaleY:1.07,skewX:-15.2},0).wait(1).to({scaleY:1.07,skewX:-14.7,x:5.1},0).wait(1).to({scaleY:1.06,skewX:-14.2,x:5},0).wait(1).to({scaleY:1.06,skewX:-13.6,y:7.4},0).wait(1).to({scaleY:1.06,skewX:-13.1,x:4.9,y:7.3},0).wait(1).to({scaleY:1.06,skewX:-12.6},0).wait(1).to({scaleY:1.05,skewX:-12.1,x:4.8},0).wait(1).to({scaleY:1.05,skewX:-11.5},0).wait(1).to({scaleY:1.05,skewX:-11,x:4.7},0).wait(1).to({scaleY:1.05,skewX:-10.5,x:4.6},0).wait(1).to({scaleY:1.04,skewX:-10,x:4.5},0).wait(1).to({scaleY:1.04,skewX:-9.4},0).wait(1).to({scaleY:1.04,skewX:-8.9,y:7.4},0).wait(1).to({scaleY:1.04,skewX:-8.4,x:4.4},0).wait(1).to({scaleY:1.03,skewX:-7.9,x:4.3},0).wait(1).to({scaleY:1.03,skewX:-7.3},0).wait(1).to({scaleY:1.03,skewX:-6.8,x:4.2,y:7.3},0).wait(1).to({scaleY:1.03,skewX:-6.3,x:4.1},0).wait(1).to({scaleY:1.03,skewX:-5.8,y:7.4},0).wait(1).to({scaleY:1.02,skewX:-5.2},0).wait(1).to({scaleY:1.02,skewX:-4.7,x:4},0).wait(1).to({scaleY:1.02,skewX:-4.2,x:3.9,y:7.3},0).wait(1).to({scaleY:1.02,skewX:-3.7},0).wait(1).to({scaleY:1.01,skewX:-3.1,x:3.8,y:7.4},0).wait(1).to({scaleY:1.01,skewX:-2.6},0).wait(1).to({scaleY:1.01,skewX:-2.1,x:3.7,y:7.3},0).wait(1).to({scaleY:1.01,skewX:-1.6,x:3.6,y:7.4},0).wait(1).to({scaleY:1,skewX:-1},0).wait(1).to({scaleY:1,skewX:-0.5,x:3.5,y:7.3},0).wait(1).to({scaleY:1,skewX:0,x:3.4},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,14.7);
(lib.rampp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.ramp();
	this.instance.parent = this;
	this.instance.setTransform(118.6,100.7,1,1,0,0,0,118.6,100.7);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.rampp, new cjs.Rectangle(0,0,237.1,201.3), null);
(lib.leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(3.4,7.3,1,1,0,0,0,3.4,7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6.4,scaleY:1,skewX:0.5,x:6.4},0).wait(1).to({scaleY:1,skewX:1,x:6.3},0).wait(1).to({scaleY:1,skewX:1.5,x:6.2},0).wait(1).to({scaleY:1,skewX:2,x:6.1},0).wait(1).to({scaleY:1,skewX:2.5,y:7.4},0).wait(1).to({scaleY:1.01,skewX:3,x:5.9},0).wait(1).to({skewX:3.5},0).wait(1).to({scaleY:1.01,skewX:4,x:5.8},0).wait(1).to({scaleY:1.01,skewX:4.5,x:5.7},0).wait(1).to({scaleY:1.01,skewX:5,x:5.6},0).wait(1).to({scaleY:1.01,skewX:5.5,x:5.5},0).wait(1).to({scaleY:1.01,skewX:6},0).wait(1).to({scaleY:1.01,skewX:6.5,x:5.3},0).wait(1).to({scaleY:1.01,skewX:6.9},0).wait(1).to({scaleY:1.01,skewX:7.4,x:5.2},0).wait(1).to({scaleY:1.01,skewX:7.9,x:5.1},0).wait(1).to({scaleY:1.02,skewX:8.4,x:5},0).wait(1).to({scaleY:1.02,skewX:8.9},0).wait(1).to({skewX:9.4,x:4.9},0).wait(1).to({scaleY:1.02,skewX:9.9,x:4.8,y:7.3},0).wait(1).to({scaleY:1.02,skewX:10.4,x:4.7},0).wait(1).to({scaleY:1.02,skewX:10.9,x:4.6},0).wait(1).to({scaleY:1.02,skewX:11.4},0).wait(1).to({scaleY:1.02,skewX:11.9,x:4.4},0).wait(1).to({scaleY:1.02,skewX:11.3,x:4.5},0).wait(1).to({scaleY:1.02,skewX:10.7,x:4.6},0).wait(1).to({skewX:10,x:4.7,y:7.4},0).wait(1).to({scaleY:1.02,skewX:9.4,x:4.8},0).wait(1).to({scaleY:1.02,skewX:8.8},0).wait(1).to({scaleY:1.02,skewX:8.2,x:4.9},0).wait(1).to({scaleY:1.02,skewX:7.6,x:5,y:7.3},0).wait(1).to({skewX:6.9,x:5.1},0).wait(1).to({scaleY:1.01,skewX:6.3,x:5.2},0).wait(1).to({scaleY:1.01,skewX:5.7},0).wait(1).to({scaleY:1.01,skewX:5.1,x:5.3},0).wait(1).to({scaleY:1.01,skewX:4.5,x:5.4},0).wait(1).to({scaleY:1.01,skewX:3.8,x:5.5},0).wait(1).to({skewX:3.2,x:5.6},0).wait(1).to({scaleY:1.01,skewX:2.6},0).wait(1).to({scaleY:1.01,skewX:2,x:5.7},0).wait(1).to({scaleY:1.01,skewX:1.3,x:5.8},0).wait(1).to({scaleY:1.01,skewX:0.7,x:5.9},0).wait(1).to({skewX:0.1,x:6,y:7.4},0).wait(1).to({scaleY:1.01,skewX:-0.5},0).wait(1).to({scaleY:1,skewX:-1.1,x:6.1},0).wait(1).to({scaleY:1,skewX:-1.8,x:6.2},0).wait(1).to({scaleY:1,skewX:-2.4,x:6.3,y:7.3},0).wait(1).to({skewX:-3,x:6.4},0).wait(1).to({scaleY:1,skewX:-3.6},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.8,14.7);
(lib.fan2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(49.6,49.6,1,1,0,0,0,49.6,49.6);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-3.7,x:49.7},0).wait(1).to({rotation:-5.5,x:49.6},0).wait(1).to({rotation:-7.3,x:49.7},0).wait(1).to({rotation:-9.2,x:49.6},0).wait(1).to({rotation:-11,x:49.7},0).wait(1).to({rotation:-12.9},0).wait(1).to({rotation:-14.7},0).wait(1).to({rotation:-16.5,x:49.6},0).wait(1).to({rotation:-18.4,x:49.7,y:49.5},0).wait(1).to({rotation:-20.2,y:49.6},0).wait(1).to({rotation:-22,x:49.6},0).wait(1).to({rotation:-23.9,x:49.7,y:49.5},0).wait(1).to({rotation:-25.7,y:49.6},0).wait(1).to({rotation:-27.6},0).wait(1).to({rotation:-29.4,y:49.5},0).wait(1).to({rotation:-31.2,x:49.6,y:49.6},0).wait(1).to({rotation:-33.1},0).wait(1).to({rotation:-34.9,x:49.7},0).wait(1).to({rotation:-36.7},0).wait(1).to({rotation:-38.6},0).wait(1).to({rotation:-40.4,y:49.5},0).wait(1).to({rotation:-42.2},0).wait(1).to({rotation:-44.1,y:49.6},0).wait(1).to({rotation:-45.9,y:49.5},0).wait(1).to({rotation:-47.8,y:49.6},0).wait(1).to({rotation:-49.6},0).wait(1).to({rotation:-51.4,y:49.5},0).wait(1).to({rotation:-53.3},0).wait(1).to({rotation:-55.1},0).wait(1).to({rotation:-56.9,x:49.6},0).wait(1).to({rotation:-58.8},0).wait(1).to({rotation:-60.6,x:49.7,y:49.6},0).wait(1).to({rotation:-62.4,y:49.5},0).wait(1).to({rotation:-64.3},0).wait(1).to({rotation:-66.1,y:49.6},0).wait(1).to({rotation:-68,x:49.6,y:49.5},0).wait(1).to({rotation:-69.8,x:49.7},0).wait(1).to({rotation:-71.6,y:49.6},0).wait(1).to({rotation:-73.5,x:49.6,y:49.5},0).wait(1).to({rotation:-75.3,x:49.7},0).wait(1).to({rotation:-77.1},0).wait(1).to({rotation:-79},0).wait(1).to({rotation:-80.8,x:49.6},0).wait(1).to({rotation:-82.7,x:49.7},0).wait(1).to({rotation:-84.5,x:49.6},0).wait(1).to({rotation:-86.3,x:49.7},0).wait(1).to({rotation:-88.2,x:49.6},0).wait(1).to({rotation:-90},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.1,99.2);
(lib.fan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(49.5,49.5,1,1,0,0,0,49.5,49.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-7.3,x:49.6},0).wait(1).to({rotation:-9.2,x:49.5},0).wait(1).to({rotation:-11,x:49.6},0).wait(1).to({rotation:-12.9,x:49.5},0).wait(1).to({rotation:-14.7,x:49.6},0).wait(1).to({rotation:-16.5},0).wait(1).to({rotation:-18.4},0).wait(1).to({rotation:-20.2},0).wait(1).to({rotation:-22},0).wait(1).to({rotation:-23.9},0).wait(1).to({rotation:-25.7},0).wait(1).to({rotation:-27.6},0).wait(1).to({rotation:-29.4},0).wait(1).to({rotation:-31.2},0).wait(1).to({rotation:-33.1},0).wait(1).to({rotation:-34.9},0).wait(1).to({rotation:-36.7},0).wait(1).to({rotation:-38.6},0).wait(1).to({rotation:-40.4},0).wait(1).to({rotation:-42.2},0).wait(1).to({rotation:-44.1},0).wait(1).to({rotation:-45.9},0).wait(1).to({rotation:-47.8},0).wait(1).to({rotation:-49.6},0).wait(1).to({rotation:-51.4},0).wait(1).to({rotation:-53.3},0).wait(1).to({rotation:-55.1},0).wait(1).to({rotation:-56.9},0).wait(1).to({rotation:-58.8,y:49.4},0).wait(1).to({rotation:-60.6,y:49.5},0).wait(1).to({rotation:-62.4},0).wait(1).to({rotation:-64.3},0).wait(1).to({rotation:-66.1},0).wait(1).to({rotation:-68},0).wait(1).to({rotation:-69.8},0).wait(1).to({rotation:-71.6,y:49.4},0).wait(1).to({rotation:-73.5,y:49.5},0).wait(1).to({rotation:-75.3,y:49.4},0).wait(1).to({rotation:-77.1,y:49.5},0).wait(1).to({rotation:-79,y:49.4},0).wait(1).to({rotation:-80.8,y:49.5},0).wait(1).to({rotation:-82.7},0).wait(1).to({rotation:-84.5},0).wait(1).to({rotation:-86.3,y:49.4},0).wait(1).to({rotation:-88.2,y:49.5},0).wait(1).to({rotation:-90},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,99);
(lib.eye21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.3,7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.4,y:1.3},49).to({x:7.3,y:-7.4},50).to({x:15.5,y:0.9},50).to({x:7.3,y:7.3},50).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,14.7);
(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween20("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.3,7.3);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.2,y:1},49).to({x:7.3,y:-6.7},50).to({x:-0.6,y:1.3},50).to({x:7.3,y:7.3},50).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,14.6);
(lib.engine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50.7,41.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},19).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.5,83);
(lib.cloudstopcenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween3("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1648.3,20.7);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1355.2},2030).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1595.4,0,105.8,41.4);
(lib.cloudsright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(596,55);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1690.3},2001).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447.5,0,297,110.1);
(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(2.7,3.7,0.122,0.122,0,0,180,2.9,7.8);
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(0.3,1,1).p("ABkABQggAAgQgIQgKgFAEALIADADIADAHQAGgCgBgCQgBgCgHgBQgKgBgTAAQgUAAgEABQgBAAgBAAQgbgFgPADQgIAAgJgBQgYgDgKAFAgEACQgCACAGABQAGACAOACQgLgDgNgEgAgwAAQgCAAgBABQgPAFAKgCQAFgBAIgCQgDgBgCAAg");
	this.shape.setTransform(-2,-2.2,0.06,0.06);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3F3F3F").ss(0.3,1,1).p("ABhgTQgNAEgQAAQgKAAAGAHQADADAFADQA0AdgYgJQgPgFgWgLIgTgIQAgAQgIAAQgDAAgWgJQgWgHgJAAQgBAAgCAAQgMgGgYAGQgMACgEACQgEACAFAAQAFABAKAAQgIgBgIgCQgygMgOAIAAJgGQgGAAAHAEQAEACAGABQgCgDgHgDQgBgBgBAAg");
	this.shape_1.setTransform(-1.8,-2.4,0.06,0.06);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AitA5QgEgVAAgKQABgagGgdQgBgFACgCQABgCAFgBIAngJQAigIAsgDIBMgFIAiACQAiAABEAIQAKACACAJIARBWQACAIgIAAIgWgCQhWgEgfAAQg4ABgcACQhCAEgyAMIgEABQgGAAgBgIg");
	this.shape_2.setTransform(-1.9,-2.2,0.06,0.06);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFD").s().p("AgFAGQgIgHALgIQAJADADAJQgFAHgFAAQgCAAgDgEg");
	this.shape_3.setTransform(3.4,-0.6,0.06,0.06);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAlQgXgHgFgaQgCgHAFgKQAEgLAJgFQAWgPATAMIgBAEQgEAGAEAEQADADAHgDIAEgBQAKAJgDAOQgDASgOAKQgKAGgLAAQgFAAgGgBg");
	this.shape_4.setTransform(3.3,-0.5,0.06,0.06);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C7C7C").s().p("AgVBSQgHABgBgJIABgpQAAgNgDgDQgCgDgPAAIgCgBIABgDIArhcIA4BfIgKABQgMgCABANIAAAzQAAAHgHAAg");
	this.shape_5.setTransform(4.9,-0.3,0.06,0.06);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFD").s().p("AgFAIQgIgIAKgHIABgCQAKAGABAHQgEAGgFAAQgCAAgDgCg");
	this.shape_6.setTransform(-0.9,-0.6,0.06,0.06);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F3F3F").s().p("Ag4AHQgNgGgFgFQgEgFADgFQAEgHAGADIAKAEQAcAQAWgBIANAAQAJAAAGgBQAQgDAWgPQAIgFAFAFQAGAEgEAGQgBADgGAFQgVAOgdAGIgYACQgfgEgUgLg");
	this.shape_7.setTransform(1.1,0.1,0.06,0.06);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAjQgPgHgFgPQgFgOAHgPQAHgPAQgFQAPgGAPAKQABABgCAFQgDAGADADQAEAEAFgDIAFgCQACACABADIABAGQAGAUgSAQQgLAKgNAAQgHAAgJgEg");
	this.shape_8.setTransform(-1,-0.5,0.06,0.06);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEF7DA").s().p("AlwBMIhoiRIAIgEQA/gSBfgTQBsgVBsgMQCBgOB1gDQAmgBCEAAQAIAAAFAGQBEBVAlBYQAZA/AEAtIrqAAQgbAAgaAVIgGAIQgEAFgDACQgDgxgaglg");
	this.shape_9.setTransform(-1.8,-2.2,0.06,0.06);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#806D62").s().p("AgNDNIACmfQANgHAMAFIgDGhQgDAKgIAAQgJAAgEgKg");
	this.shape_10.setTransform(1.1,1.4,0.06,0.06);
	this.instance_1 = new lib.leg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,3.6,0.122,0.122,0,0,0,3.7,7.8);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEC18E").s().p("AgyElQgcgmAAg1IAApEQAUACALAPIBzCjQAEAGAHAAQgRABgFAVQgLArgJBBQgKA/gGBZIgJCzIgCBug");
	this.shape_11.setTransform(-5.1,-1.6,0.06,0.06);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#806D62").s().p("AsKG2QgDgHAAgKIAAgRQgEgJABgOIABgWQABg0AEhoQABgxAEgnQAEhFAHg1QAMhcAMgtQAEgNAEgFQAGgHAMABQBNgYB5gWQCNgbCqgMQB7gJCPABIAUAAQhth3hfg7QABgFAFgDIAJgCQAJgCAKAEIAQAKIAFAFQBiBLBIBTQAMAPAUAAIBYADQBtAFCHAOQBJAIBrAQIBZAPIASAEQALACAGAEQATANgHAVQgDABgHgFQgNgJgMgDIg5gKQiFgWiHgOQh7gMiZgGIgEgBQgDABgCACIADAFQBGBdAgBWQATAyAHAyIgCDuQAAAGAEABQgFAFgIAAQgIAAgIgEIABj2QgEgEgBgHQgGgpgTgwQgkhahBhSQgKgMgPAAQhkAAgzABIhFACIhpAHQhDAGhDAIIhvARQhFAMhZAVQgpAMgVADQgGgCgCAIIgGAZQgSBTgKCIQgGBHgCBRIgDCZIAAARQABAJAEAGIABADIgCADIgIABQgNAAgGgNg");
	this.shape_12.setTransform(-0.4,-1.7,0.06,0.06);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEF7DA").s().p("AGHB3QgygJhrgPQhxgPh5gKQhSgGg8gCIg7gCQgQAAgKgNQgVgZgcgaQhAhAg3goQgIgGgBgFIIQgBQATAAAXAKQAVAKATAUIA3A1IA1A2QAeAfA9A8QgDADgEAAg");
	this.shape_13.setTransform(1.6,-3.6,0.06,0.06);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CEC18E").s().p("ABDGLQgagigkg0Ig7hWIgTgcQgMgQgJgLQgGgKgBgMQgBhAACghIAChIIADhJIAFhQQAGhRAHg1QAKhEAJgiIACgJQADgEAFgCQAEABAEADIAFAHIBYB8QAeApAGAvQABAHgDAFQgEAQAAAhIAAH1QAAAHAFAjQABAGAFAIQAHAKABAEQgcgYgHgJg");
	this.shape_14.setTransform(-4.3,0,0.06,0.06);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEF7DA").s().p("AFWB9Ip6AAQgEgGgBgJIgDgQQgRhLgmhFQgagxgngzQgGgHACgEQADgEAHABQANACAUAAIC8ALQBQAHBEAJQCIARBZASQAWAEATAPQAAACAGAHICSCTQAUAVAKAOQAWAgAAAXQgdgog2AAg");
	this.shape_15.setTransform(3,-2.2,0.06,0.06);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEF7DA").s().p("AlMCBIhmiNIgRgXQgLgLgNgEQACgYARgVQAggmAwAAIJ8gBIAGABQAEAAACgDQACAAAIADQAKAFAYASQBKA4A+BAIAWAZQAGAHgKACIgMAAQhJgBgkACQhVACgrADIhGAFQgwAEg+AIQheAKhfAUQhhAThHAVIgCAAQgJAAgFgIg");
	this.shape_16.setTransform(-2.8,-3.5,0.06,0.06);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEEDAD").s().p("AjEFYQgHAAgEgDIiUAAQgHAAgDABQgDgDAAgFIAAgJQgBgoAChWQAChTgBgsIAAiAQAAgMABgEQABgEAEgBIAHgDQAVgFASgNQAJgGgEgGQgDgGgKAGIgWANIgJADQgFABgFgCQgCgDgBgJIAAgcQgBggAChAQAChBgBggQAAgJADgEQADgCAGAAIAJAAIJiAAQAoAAAcASQASAMADANQAHAQABAYIAAAoQABAjAABDIABBlIABBiQAABAABAiQADAzgDAzQgBAZgHALQgJAMgXAGQgMAEgPAAIkMAAIiDAAIgNAAQgHAAgEAFIhKAAg");
	this.shape_17.setTransform(3.4,0.6,0.06,0.06);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEEDAD").s().p("ABzFUIgHABIjZAAQiHABhTgDQglgBgZgWIgKgMQgFgHgCgHQgFgcAAgNIAAoMQAAgQAFgOQAbgnAzABILRAAQANAAAEADQACAEAAALIAADYIgBANQgCAGgJgBQgMgBgKgFQgMgEgPgIQgGgEgEAFQgDAEAGAFIAKAHQAbAMAQADIAIACQAEABACAEIAAARIgBAQIAAFpIAAAKQgBAFgDADQgCgBgHAAIjBAAQgEADgHAAQgxgBgZABQgBgEgDAAg");
	this.shape_18.setTransform(-1.4,0.6,0.06,0.06);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-4.4,11.2,9);
(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Tween13("synched",0,false);
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-4.4,11.2,9);
(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(21.3,29,1,1,0,0,180,3.4,7.3);
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3F3F3F").ss(0.3,1,1).p("ABkABQggAAgQgIQgKgFAEALIADADIADAHQAGgCgBgCQgBgCgHgBQgKgBgTAAQgUAAgEABQgBAAgBAAQgbgFgPADQgIAAgJgBQgYgDgKAFAgEACQgCACAGABQAGACAOACQgLgDgNgEgAgwAAQgCAAgBABQgPAFAKgCQAFgBAIgCQgDgBgCAAg");
	this.shape.setTransform(-16.7,-17.7,0.488,0.488);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3F3F3F").ss(0.3,1,1).p("ABhgTQgNAEgQAAQgKAAAGAHQADADAFADQA0AdgYgJQgPgFgWgLIgTgIQAgAQgIAAQgDAAgWgJQgWgHgJAAQgBAAgCAAQgMgGgYAGQgMACgEACQgEACAFAAQAFABAKAAQgIgBgIgCQgygMgOAIAAJgGQgGAAAHAEQAEACAGABQgCgDgHgDQgBgBgBAAg");
	this.shape_1.setTransform(-14.9,-19.6,0.488,0.488);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AitA5QgEgVAAgKQABgagGgdQgBgFACgCQABgCAFgBIAngJQAigIAsgDIBMgFIAiACQAiAABEAIQAKACACAJIARBWQACAIgIAAIgWgCQhWgEgfAAQg4ABgcACQhCAEgyAMIgEABQgGAAgBgIg");
	this.shape_2.setTransform(-15.7,-18.2,0.488,0.488);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFD").s().p("AgFAGQgIgHALgIQAJADADAJQgFAHgFAAQgCAAgDgEg");
	this.shape_3.setTransform(27.7,-5.2,0.488,0.488);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAlQgXgHgFgaQgCgHAFgKQAEgLAJgFQAWgPATAMIgBAEQgEAGAEAEQADADAHgDIAEgBQAKAJgDAOQgDASgOAKQgKAGgLAAQgFAAgGgBg");
	this.shape_4.setTransform(26.6,-4.1,0.488,0.488);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C7C7C").s().p("AgVBSQgHABgBgJIABgpQAAgNgDgDQgCgDgPAAIgCgBIABgDIArhcIA4BfIgKABQgMgCABANIAAAzQAAAHgHAAg");
	this.shape_5.setTransform(40.2,-2.7,0.488,0.488);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFD").s().p("AgFAIQgIgIAKgHIABgCQAKAGABAHQgEAGgFAAQgCAAgDgCg");
	this.shape_6.setTransform(-7.1,-5.1,0.488,0.488);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F3F3F").s().p("Ag4AHQgNgGgFgFQgEgFADgFQAEgHAGADIAKAEQAcAQAWgBIANAAQAJAAAGgBQAQgDAWgPQAIgFAFAFQAGAEgEAGQgBADgGAFQgVAOgdAGIgYACQgfgEgUgLg");
	this.shape_7.setTransform(9,0.3,0.488,0.488);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAjQgPgHgFgPQgFgOAHgPQAHgPAQgFQAPgGAPAKQABABgCAFQgDAGADADQAEAEAFgDIAFgCQACACABADIABAGQAGAUgSAQQgLAKgNAAQgHAAgJgEg");
	this.shape_8.setTransform(-8.2,-4,0.488,0.488);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEF7DA").s().p("AlwBMIhoiRIAIgEQA/gSBfgTQBsgVBsgMQCBgOB1gDQAmgBCEAAQAIAAAFAGQBEBVAlBYQAZA/AEAtIrqAAQgbAAgaAVIgGAIQgEAFgDACQgDgxgaglg");
	this.shape_9.setTransform(-14.4,-17.8,0.488,0.488);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#806D62").s().p("AgNDNIACmfQANgHAMAFIgDGhQgDAKgIAAQgJAAgEgKg");
	this.shape_10.setTransform(9.2,11.7,0.488,0.488);
	this.instance_1 = new lib.leg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.6,28.9,1,1,0,0,0,3.4,7.3);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CEC18E").s().p("AgyElQgcgmAAg1IAApEQAUACALAPIBzCjQAEAGAHAAQgRABgFAVQgLArgJBBQgKA/gGBZIgJCzIgCBug");
	this.shape_11.setTransform(-41.8,-13,0.488,0.488);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#806D62").s().p("AsKG2QgDgHAAgKIAAgRQgEgJABgOIABgWQABg0AEhoQABgxAEgnQAEhFAHg1QAMhcAMgtQAEgNAEgFQAGgHAMABQBNgYB5gWQCNgbCqgMQB7gJCPABIAUAAQhth3hfg7QABgFAFgDIAJgCQAJgCAKAEIAQAKIAFAFQBiBLBIBTQAMAPAUAAIBYADQBtAFCHAOQBJAIBrAQIBZAPIASAEQALACAGAEQATANgHAVQgDABgHgFQgNgJgMgDIg5gKQiFgWiHgOQh7gMiZgGIgEgBQgDABgCACIADAFQBGBdAgBWQATAyAHAyIgCDuQAAAGAEABQgFAFgIAAQgIAAgIgEIABj2QgEgEgBgHQgGgpgTgwQgkhahBhSQgKgMgPAAQhkAAgzABIhFACIhpAHQhDAGhDAIIhvARQhFAMhZAVQgpAMgVADQgGgCgCAIIgGAZQgSBTgKCIQgGBHgCBRIgDCZIAAARQABAJAEAGIABADIgCADIgIABQgNAAgGgNg");
	this.shape_12.setTransform(-3.2,-14.2,0.488,0.488);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEF7DA").s().p("AGHB3QgygJhrgPQhxgPh5gKQhSgGg8gCIg7gCQgQAAgKgNQgVgZgcgaQhAhAg3goQgIgGgBgFIIQgBQATAAAXAKQAVAKATAUIA3A1IA1A2QAeAfA9A8QgDADgEAAg");
	this.shape_13.setTransform(13,-29.7,0.488,0.488);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CEC18E").s().p("ABDGLQgagigkg0Ig7hWIgTgcQgMgQgJgLQgGgKgBgMQgBhAACghIAChIIADhJIAFhQQAGhRAHg1QAKhEAJgiIACgJQADgEAFgCQAEABAEADIAFAHIBYB8QAeApAGAvQABAHgDAFQgEAQAAAhIAAH1QAAAHAFAjQABAGAFAIQAHAKABAEQgcgYgHgJg");
	this.shape_14.setTransform(-35.3,-0.5,0.488,0.488);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEF7DA").s().p("AFWB9Ip6AAQgEgGgBgJIgDgQQgRhLgmhFQgagxgngzQgGgHACgEQADgEAHABQANACAUAAIC8ALQBQAHBEAJQCIARBZASQAWAEATAPQAAACAGAHICSCTQAUAVAKAOQAWAgAAAXQgdgog2AAg");
	this.shape_15.setTransform(24.3,-17.8,0.488,0.488);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEF7DA").s().p("AlMCBIhmiNIgRgXQgLgLgNgEQACgYARgVQAggmAwAAIJ8gBIAGABQAEAAACgDQACAAAIADQAKAFAYASQBKA4A+BAIAWAZQAGAHgKACIgMAAQhJgBgkACQhVACgrADIhGAFQgwAEg+AIQheAKhfAUQhhAThHAVIgCAAQgJAAgFgIg");
	this.shape_16.setTransform(-22.4,-29,0.488,0.488);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEEDAD").s().p("AjEFYQgHAAgEgDIiUAAQgHAAgDABQgDgDAAgFIAAgJQgBgoAChWQAChTgBgsIAAiAQAAgMABgEQABgEAEgBIAHgDQAVgFASgNQAJgGgEgGQgDgGgKAGIgWANIgJADQgFABgFgCQgCgDgBgJIAAgcQgBggAChAQAChBgBggQAAgJADgEQADgCAGAAIAJAAIJiAAQAoAAAcASQASAMADANQAHAQABAYIAAAoQABAjAABDIABBlIABBiQAABAABAiQADAzgDAzQgBAZgHALQgJAMgXAGQgMAEgPAAIkMAAIiDAAIgNAAQgHAAgEAFIhKAAg");
	this.shape_17.setTransform(27.6,4.9,0.488,0.488);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEEDAD").s().p("ABzFUIgHABIjZAAQiHABhTgDQglgBgZgWIgKgMQgFgHgCgHQgFgcAAgNIAAoMQAAgQAFgOQAbgnAzABILRAAQANAAAEADQACAEAAALIAADYIgBANQgCAGgJgBQgMgBgKgFQgMgEgPgIQgGgEgEAFQgDAEAGAFIAKAHQAbAMAQADIAIACQAEABACAEIAAARIgBAQIAAFpIAAAKQgBAFgDADQgCgBgHAAIjBAAQgEADgHAAQgxgBgZABQgBgEgDAAg");
	this.shape_18.setTransform(-11.2,4.9,0.488,0.488);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-36.2,91.4,72.6);
// stage content:
(lib.RECOVER_dnsanimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	// rocket
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1754.8,780.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1328).to({rotation:2},4).to({rotation:0.2},4).to({regX:0.1,regY:0.1,rotation:-1.2,x:1754.9,y:780.6},4).to({regX:0,regY:0,rotation:0,x:1754.8,y:780.5},4).to({startPosition:0},4).to({rotation:2},4).to({rotation:0.2},4).to({regX:0.1,regY:0.1,rotation:-1.2,x:1754.9,y:780.6},4).to({regX:0,regY:0,rotation:0,x:1754.8,y:780.5},4).to({startPosition:0},4).to({rotation:2},4).to({rotation:0.2},4).to({regX:0.1,regY:0.1,rotation:-1.2,x:1754.9,y:780.6},4).to({regX:0,regY:0,rotation:0,x:1754.8,y:780.5},4).to({startPosition:0},4).to({rotation:2},4).to({rotation:0.2},4).to({regX:0.1,regY:0.1,rotation:-1.2,x:1754.9,y:780.6},4).to({regX:0,regY:0,rotation:0,x:1754.8,y:780.5},4).to({startPosition:0},3).to({rotation:2},4).to({rotation:0.2},4).to({regX:0.1,regY:0.1,rotation:-1.2,x:1754.9,y:780.6},4).to({regX:0,regY:0,rotation:0,x:1754.8,y:780.5},4).to({y:-472.8},187,cjs.Ease.cubicIn).wait(2));
	// engine
	this.instance_1 = new lib.engine();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1754.7,923.9,1,1,0,0,0,50.7,41.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1423).to({y:-333.6},187,cjs.Ease.cubicIn).wait(2));
	// thrust
	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1754.2,935.7);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-29.4,y:906.3},1328).to({scaleX:2.28,scaleY:2.28,y:906.2},95).to({regX:0.1,scaleX:4,scaleY:4,x:1754.6,y:-341.1},187,cjs.Ease.cubicIn).wait(2));
	// ramp
	this.instance_3 = new lib.rampp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1566,939.3,1,1,0,0,0,118.6,100.7);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1133).to({regX:237.1,regY:0.7,x:1684.5,y:839.3},1).to({regY:0.9,scaleX:0.74,scaleY:0.76},69).to({regY:0.7,rotation:142,y:839.4},125).to({_off:true},174).wait(110));
	// main packet
	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-65.2,1012.8);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:958.9,y:1004.6},226).to({startPosition:0},188).to({x:1416.4},237).to({regX:0.1,regY:0.1,rotation:-40.8,x:1460.9,y:979.3},15).to({regX:0,regY:0,rotation:-40.9,x:1634.4,y:822.2},74).to({regX:-0.1,regY:0.1,rotation:-1.7,x:1730.7,y:787.8},41).to({_off:true},721).wait(110));
	// packet copy 5
	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(871.8,721.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(272).to({_off:false},0).to({startPosition:0},299).to({alpha:0.48},3).to({scaleX:1.32,scaleY:1.32,x:879.8,y:708.5,alpha:1},6).to({regX:0.1,regY:0.1,scaleX:1.84,scaleY:1.84,x:901.6,y:982.6},60).to({x:1441.3,y:1032.5},400).to({regX:1.3,regY:1.1,scaleX:1.84,scaleY:1.84,rotation:-39.7,x:1450,y:1030},3).to({x:1662.7,y:838.3},59).to({regX:1.4,rotation:-1.2,x:1688.7,y:830.4},5).to({_off:true},395).wait(110));
	// packet copy 4
	this.instance_6 = new lib.Tween12("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(871.8,721.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(227).to({_off:false},0).to({startPosition:0},299).to({alpha:0.48},3).to({scaleX:1.32,scaleY:1.32,x:879.8,y:708.5,alpha:1},6).to({regX:0.1,regY:0.1,scaleX:1.84,scaleY:1.84,x:901.6,y:982.6},60).to({x:1441.3,y:1032.5},400).to({regX:1.3,regY:1.1,scaleX:1.84,scaleY:1.84,rotation:-39.7,x:1450,y:1030},3).to({x:1662.7,y:838.3},59).to({regX:1.4,rotation:-1.2,x:1688.7,y:830.4},5).to({_off:true},440).wait(110));
	// packet copy 3
	this.instance_7 = new lib.Tween12("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(871.8,721.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(162).to({_off:false},0).to({startPosition:0},299).to({alpha:0.48},3).to({scaleX:1.32,scaleY:1.32,x:879.8,y:708.5,alpha:1},6).to({regX:0.1,regY:0.1,scaleX:1.84,scaleY:1.84,x:901.6,y:982.6},60).to({x:1441.3,y:1032.5},400).to({regX:1.3,regY:1.1,scaleX:1.84,scaleY:1.84,rotation:-39.7,x:1450,y:1030},3).to({x:1662.7,y:838.3},59).to({regX:1.4,rotation:-1.2,x:1688.7,y:830.4},5).to({_off:true},505).wait(110));
	// packet copy 2
	this.instance_8 = new lib.Tween12("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(871.8,721.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(112).to({_off:false},0).to({startPosition:0},299).to({alpha:0.48},3).to({scaleX:1.32,scaleY:1.32,x:879.8,y:708.5,alpha:1},6).to({regX:0.1,regY:0.1,scaleX:1.84,scaleY:1.84,x:901.6,y:982.6},60).to({x:1441.3,y:1032.5},400).to({regX:1.3,regY:1.1,scaleX:1.84,scaleY:1.84,rotation:-39.7,x:1450,y:1030},3).to({x:1662.7,y:838.3},59).to({regX:1.4,rotation:-1.2,x:1688.7,y:830.4},5).to({_off:true},555).wait(110));
	// packet
	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(871.8,721.5);
	this.instance_9.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},299).to({alpha:0.48},3).to({scaleX:1.32,scaleY:1.32,x:879.8,y:708.5,alpha:1},6).to({regX:0.1,regY:0.1,scaleX:1.84,scaleY:1.84,x:901.6,y:982.6},60).to({x:1441.3,y:1032.5},400).to({regX:1.3,regY:1.1,scaleX:1.84,scaleY:1.84,rotation:-39.7,x:1450,y:1030},3).to({x:1662.7,y:838.3},59).to({regX:1.4,rotation:-1.2,x:1688.7,y:830.4},5).to({_off:true},668).wait(109));
	// server
	this.instance_10 = new lib.eye21();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1064.5,585.6,1,1,0,0,0,7.3,7.3);
	this.instance_11 = new lib.eye();
	this.instance_11.parent = this;
	this.instance_11.setTransform(867,585.7,1,1,0,0,0,7.3,7.3);
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E3D3B").s().p("A8lDNIGhmZMArvAAAIG7GZg");
	this.shape.setTransform(965.6,489);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEEAE").s().p("AhzB0QgwgwAAhEQAAhDAwgwQAwgwBDAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhDAAgwgwg");
	this.shape_1.setTransform(1064.1,579.8);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEEAE").s().p("AhzB0QgwgwAAhEQAAhDAwgwQAwgwBDAAQBEAAAwAwQAwAwAABDQAABEgwAwQgwAwhEAAQhDAAgwgwg");
	this.shape_2.setTransform(867,579.8);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE5653").s().p("AovIwIAAxfIRfAAIAARfgAHwIPIh0h0QhUBOhpAmIExAAgAlkGDQBIBCBaAkQBdAmBlAAQBlAABegmQBagkBIhCIhMhLQg5AzhHAcQhKAdhPAAQhPAAhKgdQhGgcg5gzgAi+IPQhogmhVhOIh0B0IExAAIAAAAgAGVGEIB6B6IAAk/QgpBvhRBWgAoOH+IB6h6QhShWgohvgAkBEgQA1AvBBAZQBDAbBIAAQBJAABDgbQBBgZA1gvIhLhKQglAhguASQgwATg0AAQgyAAgxgTQgugSglghgAE4kYQAzA5AcBHQAdBJAABPQAABSgfBMQgdBJg3A5IBMBMQBFhIAmhdQAnhfAAhoQAAhkgmheQgjhahDhIgAnojCQgmBeAABkQAABoAoBfQAlBcBGBJIBLhMQg2g5gehJQgfhLAAhTQAAhPAdhJQAbhHA0g5IhMhMQhCBIgjBagADPivQAhAlASAuQATAwAAAzQAABphGBOIBKBLQAyg1AchDQAchFAAhMQAAhIgbhDQgZhBgvg1gAlniLQgbBDAABIQAABLAcBGQAcBDAyA1IBKhLQghglgSguQgSgwgBg0QABgzASgwQASguAhglIhRhSQgvA1gZBBgAifC+QAhAdAoAPQAqAQAsAAQAtAAAqgQQAogPAhgdIigifgAAYAHICfCfQAdggAPgpQARgpgBgtQABgsgRgqQgPgogdghgAjyAHQAABbA8BEICfifIififQg8BEAABbgAhWjbQgoAPghAdICfCfICgifQghgdgogPQgqgQgtAAQgsAAgqAQgAGbl7QBNBSAnBrIAAkxgAoOi+QAnhrBNhSIh0h0gABkj6QAuASAlAhIBShSQg1gyhDgbQhGgchLAAQhKAAhGAcQhCAcg1AxIBRBSQAlghAugSQAxgTAyAAQA0AAAwATgACemEQBIAdA6A3IBMhMQhIhFhdgmQhfgnhoAAQhnAAhfAnQhcAmhJBFIBLBMQA6g3BKgdQBLgfBRAAQBSAABMAfgAGDmTIB7h7Ik/AAQBwApBUBSgAmDmTQBWhSBvgpIk/AAg");
	this.shape_3.setTransform(1063.5,839.8);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE5653").s().p("AovIwIAAxfIRfAAIAARfgAHxIPIh1h0QhUBOhpAmIEyAAgAlkGDQBIBCBaAkQBeAmBkAAQBmAABdgmQBagkBIhCIhMhLQg5AzhGAcQhLAdhPAAQhPAAhJgdQhIgcg4gzgAi+IPQhpgmhUhOIh0B0IExAAIAAAAgAGVGEIB6B6IAAk/QgoBvhSBWgAoOH+IB7h6QhShWgphvgAkBEgQA1AvBBAZQBDAbBIAAQBJAABDgbQBBgZA0gvIhKhKQglAhguASQgwASg0AAQgzAAgwgSQgugSgmghgAE4kYQA0A5AbBHQAdBJAABPQAABSgfBMQgdBJg2A5IBKBMQBGhJAlhcQAohfAAhoQAAhkgmheQgjhahChIgAnpjCQglBeAABkQAABoAoBfQAlBcBGBJIBLhMQg3g5gdhJQgfhMAAhSQAAhPAdhJQAchHAzg5IhLhMQhCBIglBagADPiwQAhAmASAuQASAwABAzQgBA0gSAwQgSAughAlIBKBLQAzg1AbhDQAchGAAhLQAAhIgahDQgahBgvg1gAlniLQgaBDAABIQAABLAcBGQAaBDAzA1IBKhLQghglgSguQgTgwAAg0QAAgzATgwQASguAhgmIhRhRQgvA1gZBBgAifC+QAhAdAoAPQAqAQAsAAQAtAAApgQQApgPAhgdIigiggAAXAHICgCfQA8hEAAhbQAAgsgQgqQgPgogdghgAjihPQgQAqAAAsQAABbA7BEICgifIigifQgcAhgPAogAhWjbQgoAPghAcICfCgICgigQghgcgpgPQgpgQgtAAQgsAAgqAQgAGbl8QBNBTAnBrIAAkxgAoOi+QAohrBMhTIh0hzgABkj6QAuASAlAhIBRhSQg1gxhCgcQhGgchLAAQhKAAhGAcQhDAcg1AxIBRBSQAmghAugSQAwgTAzAAQA0AAAwATgACemFQBJAeA6A3IBLhMQhJhFhcgmQhfgnhoAAQhnAAhfAnQhdAmhIBFIBMBMQA5g3BJgeQBMgeBRAAQBSAABMAegAGEmTIB6h7Ik/AAQBtAnBYBUgAmCmTQBXhUBtgnIk/AAg");
	this.shape_4.setTransform(867.5,839.2);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE5653").s().p("EgclAi3MAAAhFuMA5LAAAMAAABFugAGlZJIRJAAIAAxJIxJAAgA3/ZJIRJAAIAAxJIxJAAgAxuhCMAjdAAAIAAsSMgjdAAAg");
	this.shape_5.setTransform(965.6,732.7);
	this.instance_12 = new lib.fan();
	this.instance_12.parent = this;
	this.instance_12.setTransform(867.5,839.9,1,1,0,0,0,49.5,49.5);
	this.instance_13 = new lib.fan2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1063.5,839.9,1,1,0,0,0,49.6,49.6);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A6ff5MAAAg/wMA0/AAAMAAAA/wg");
	this.shape_6.setTransform(964.5,732.6);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.instance_13},{t:this.instance_12},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_11},{t:this.instance_10}]}).wait(1612));
	// road
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("EirLAL0IAA3nMFWYAAAIAAXng");
	this.shape_7.setTransform(927.2,1031.4);
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1612));
	// front
	this.instance_14 = new lib.trees();
	this.instance_14.parent = this;
	this.instance_14.setTransform(958.9,830.3,1,1,0,0,0,1023.9,158.3);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("EiWYALHIAA2NMEsxAAAIAAWNg");
	this.shape_8.setTransform(962.5,1010);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_14}]}).wait(1612));
	// skylane
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#34311E").s().p("EiWYA8yMAAAgzfMAnsAAAMAAAgq9IZoAAMAAAA3EIFUAAIAA4XIZoAAIgDSYIScAAMAADhMMMAk3AAAMAAABdbIGuAAMAAAg/bIeKAAMAAAApeIJYAAMAAAhE+IM0AAMAAHBP1INIAAIgH3HIfuAAIAAY1IFUAAMAAAg3EIZoAAMAAAAuZIOYAAMAAAAuLg");
	this.shape_9.setTransform(962.5,515.9,1,1.089);
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1612));
	// Layer 6
	this.instance_15 = new lib.timelinecloud();
	this.instance_15.parent = this;
	this.instance_15.setTransform(983.8,115.1,1,1,0,0,0,129.8,48.1);
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:-208.3,y:166.1},1155).wait(457));
	// Layer 4
	this.instance_16 = new lib.cloudstopcenter();
	this.instance_16.parent = this;
	this.instance_16.setTransform(853.7,405.6,1,1,0,0,0,52.9,20.7);
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1612));
	// DNS-bg
	this.instance_17 = new lib.cloudsright();
	this.instance_17.parent = this;
	this.instance_17.setTransform(2841.9,256.2,1,1,0,0,0,596,55);
	this.instance_18 = new lib.cloudsright();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1626,217.6,1,1,0,0,0,148.5,55);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFCB5B","#FFEEAE"],[0,1],0,540,0,-540).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_10.setTransform(960,541.1);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance_18},{t:this.instance_17}]}).wait(1612));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(791.5,541.1,3158.9,1105.9);
// library properties:
lib.properties = {
	id: '12E5E88220ED0743BD62378275A644CA',
	width: 1920,
	height: 1080,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/arrival_animation_atlas_.png", id:"arrival_animation_atlas_"
		}],
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
an.compositions['12E5E88220ED0743BD62378275A644CA'] = {
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
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	
function serverAnimation() {
	canvas = document.getElementById("canvas3");
	anim_container = document.getElementById("server-animation");
	var comp=AdobeAn.getComposition("12E5E88220ED0743BD62378275A644CA");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.RECOVER_dnsanimation();
	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height =  h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(true,'width',true,2);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}