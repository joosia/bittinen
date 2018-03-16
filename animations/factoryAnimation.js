(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [{
		name: "animation1_atlas_",
		frames: [
			[0, 134, 316, 134],
			[0, 0, 802, 132]
		]
	}];

	// symbols:
	(lib.Path_1 = function () {
		this.spriteSheet = ss["animation1_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.hihna = function () {
		this.spriteSheet = ss["animation1_atlas_"];
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


	(lib.Symbol3 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AiKCLQg6g5AAhSQAAhRA6g5QA6g5BQgBQBSABA5A5QA5A5AABRQAABSg5A5Qg5A6hSAAQhQAAg6g6g");
		this.shape.setTransform(74, 74.5, 0.615, 0.615);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AmXEPQB2geCghVQFBipDXkQQAFBIgZBeQgzC6iYBrQiXBqjrAGIghAAQhhAAhLgPg");
		this.shape_1.setTransform(40.8, 29.1);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("ACiD9Il6noIAqgdIF7HnQAegHgtAgQgYASgGAAQgFAAAHgNg");
		this.shape_2.setTransform(56.8, 51.7, 0.615, 0.615);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFCA6D").s().p("AhGg2QgdAMgegHQgegIgUgZQgYgeAEgmQAEgmAfgZQAegYAmAFQAnAEAYAeQATAZABAfQABAfgSAZIDmEgIgoAgg");
		this.shape_3.setTransform(38.1, 27.9, 0.615, 0.615);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#5A5B5A").s().p("Ao/EbQCdjcFljrQFKjbDlgyQBzgZAxASIlhKkIvKDlQAIg/BOhvg");
		this.shape_4.setTransform(40.7, 28.1, 0.615, 0.615);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0, 0, 86.2, 86.6), null);


	(lib.rightleg = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3F3F3F").s().p("AACCMQgLgLAAgQQgBgbgLg0QgMg7gkh8QAagBAzABQAEgBADAFIADANQAbBiAOA+QALA3gBAbQAAARgLAMQgLALgRAAIgBAAQgQAAgLgKg");
		this.shape.setTransform(7, 15.1);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.rightleg, new cjs.Rectangle(0, 0, 13.9, 30.1), null);


	(lib.pakettibody = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3F3F3F").s().p("Ag4AHQgOgHgEgEQgFgFAEgFQAEgHAGADIAKAFQAdAPAVgBIANAAQAJABAGgCQAQgDAWgPQAIgGAFAFQAFAFgDAGQgBAEgGAEQgUAOgeAGIgYACQgegFgVgKg");
		this.shape.setTransform(112.1, 74.8);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		// Layer_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#3F3F3F").ss(0.3, 1, 1).p("ABkABQggAAgQgHQgKgGAEALQABABABACQABADADAEQAGgCgBgCQgBgCgIgBQgKgBgSAAQgWAAgCACQgBABAFABQAGACAOACQgLgEgNgCQgBgBgBAAQgbgFgPADQgkgGgPAHAgwAAQgCAAgBABQgPAFAKgCQAFgBAIgCQgDgBgCAAg");
		this.shape_1.setTransform(59.5, 37.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f().s("#3F3F3F").ss(0.3, 1, 1).p("AgrgCQgygMgOAIAgrgCQgEACAFAAQAFABAKAAQgIgBgIgCgAAJgGQgNgGgXAGQgMACgEACAAJgGQgGAAAHAEQAEACAGABQgCgDgHgDQgBgBgBAAgABhgTQgNAEgQAAQgKAAAGAHQADADAFADQA0AdgYgJQgPgFgWgLIgTgIQAgAQgIAAQgDAAgWgJQgWgHgJAAQgCAAgBAA");
		this.shape_2.setTransform(63.1, 34);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FEFEFE").s().p("AitA5QgEgUAAgLQABgagGgdQgBgFACgCIAGgDIAngJQAzgMBngEIAiACQAnAAA/AIQAKABACAJIARBXQACAHgIAAIgWgBQhWgFgfABQguABgmACQhAAEg0AMIgEABQgGAAgBgIg");
		this.shape_3.setTransform(61.5, 36.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FEFEFD").s().p("AgFAGQgIgHALgIQAJADADAJQgFAHgFAAQgCAAgDgEg");
		this.shape_4.setTransform(150.4, 63.5);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AgKAlQgXgHgFgaQgCgHAFgKQAEgLAIgFQAXgPATANQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgDAHADADQAEAEAGgEIAEgBQAJAIgCAPQgDASgPAKQgKAGgKAAQgFAAgGgBg");
		this.shape_5.setTransform(148.2, 65.8);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#7C7C7C").s().p("AgUBTQgIAAAAgJIAAgoQAAgOgDgDQgCgCgOgCIgCAAIAAgDIAshcIA3BfIgJABQgNgCABAOQABAQgBAiQAAAHgHAAIgqAAg");
		this.shape_6.setTransform(176, 68.7);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FEFEFD").s().p("AgFAHQgIgHAKgIIABgBQALAFABAIQgFAGgFAAQgCAAgDgDg");
		this.shape_7.setTransform(79.2, 63.8);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#000000").s().p("AgPAjQgPgHgFgQQgFgOAHgOQAHgQAQgFQAPgFAPAKQABACgCAEQgDAFADAEQADADAGgDIAFgBQACACABADIABAGQAGATgSARQgMALgMAAQgIAAgIgFg");
		this.shape_8.setTransform(76.9, 66.1);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FEF7DD").s().p("AlwBNIhoiSIAIgEQA6gRBkgUQBlgUBzgNQB3gNB/gEQA5gCBxABQAIAAAFAGQBEBUAlBZQAYA9AFAvIrqAAQgbAAgaAWIgGAHQgEAFgDACQgDgxgagkg");
		this.shape_9.setTransform(64.2, 37.6);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#816D63").s().p("AgNDNIACmfQAOgHALAFIgDGhQgDAKgIAAQgJAAgEgKg");
		this.shape_10.setTransform(112.6, 98.1);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#CFC094").s().p("AgyElQgcgnAAg0IAApEQATABAMAQIBzCjQAFAGAGgBQgRACgFAUQgLAsgJBBQgLBIgFBQQgFBKgDBpIgDBug");
		this.shape_11.setTransform(7.9, 47.5);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#816D63").s().p("AsKG1QgDgGAAgKIAAgRQgEgJABgOIABgWQABhPAEhNQABgtADgsQAGhKAGgvQANhhALgpQAEgMAEgFQAGgIALACQBUgZBzgWQCWgbChgLQCCgJCIABIAUAAQhth3hfg7QABgGAFgCIAJgCQAJgCAKAEIAQAKIAFAFQBhBKBJBUQAMAPAUAAQAdAAA7ADQB7AGB5ANQBaAKBaAOIBZAPIASAEQALACAGAEQATAMgHAWQgEABgGgFQgPgKgLgCIg4gKQiGgXiHgNQh9gNiWgFIgFgBQgDABgBACIADAFQBEBZAiBaQATAzAHAwIgCDvQAAAGAEABQgFAEgIABQgIAAgIgEIABj3QgEgDgBgIQgFgmgUgyQgihXhDhVQgJgMgQAAQhkgBgzABIiuAKQgtADhZAKIhvARQg1AJhpAYQgpANgVADQgGgCgCAIIgGAYQgSBUgKCIQgGBHgCBRIgDCZIAAAQQABAKAEAGQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgCADIgIABQgMAAgHgOg");
		this.shape_12.setTransform(87.1, 45.1);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FEF7DD").s().p("AGHB3QhJgNhUgLQhugPh8gKQg+gEhQgEIg7gBQgQgBgKgNQgUgYgdgcQg+g9g5gqIgGgFQgDgCAAgEIIQAAQATAAAXAKQAVAJATAUIBsBrQAlAnA2A0QgDACgEAAIgHgBg");
		this.shape_13.setTransform(120.4, 13.3);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#CFC094").s().p("ABDGKQgaghgkg0Ig7hWQgZgmgOgRQgHgMAAgKQgBhJABgYQAChhADgwIAFhQQAHhRAHg2QAIg8AKgpIADgJQACgFAFgBQAFABADADIAFAHQAeApA6BTQAeApAGAvQACAHgDAEQgEAQAAAhIAAH2QAAAHAFAjQABAGAFAIQAGAKABAEQgcgZgHgJg");
		this.shape_14.setTransform(21.4, 73.2);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FEF7DD").s().p("AFWB9Ip6AAQgEgGgBgJIgDgQQgRhLgmhFQgbgygmgyQgGgHACgEQACgEAIABQANACAUABIAgAAQBoAGA0AFQBZAHA7AIQCXAUBKAPQAVAEAUAPQAAADAGAGICSCTQATATALAQQAWAgAAAXQgdgog2AAg");
		this.shape_15.setTransform(143.4, 37.7);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FEF7DD").s().p("AlMCBIhmiNQgNgTgEgEQgLgMgOgDQADgYARgVQAggnAvAAIJ9AAQAKAAACgCQADAAAGADQALAEAYATQBLA5A9A/IAWAYQAGAIgKACIgMAAIg2AAIg3ABQhWACgqADIhGAFIhuALQhgAMhdASQhlAVhDATIgDABQgHAAgGgIg");
		this.shape_16.setTransform(47.7, 14.7);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFECB4").s().p("AjEFYQgHgBgEgDIiUAAQgHAAgDACQgDgDAAgFIAAgJQgBgsAChTQABhWAAgpIAAh/QAAgMABgEQABgEADgBIAIgDQAVgGARgMQAJgGgDgGQgDgEgDABIgHADQgRAKgFACIgJAEQgFABgFgCQgDgDAAgKIAAgbQgBghACg/QABhCAAgfQAAgJACgEQAFgDAOAAIJiAAQAoABAbARQASAMAEAOQAHAQABAYIAAAoQABAiAABDIABBmIABBhQAABBABAiQADAzgDAzQgBAZgHALQgJAMgXAHQgMADgPAAImPAAIgNAAQgHAAgEAGIhKgBg");
		this.shape_17.setTransform(150.3, 84.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFECB4").s().p("ABzFUIgHABIjZAAQiEAAhWgCQgjgBgcgVIgJgNQgGgHgBgHQgFgbAAgOIAAoMQAAgSAGgLQAagoAzAAILRABQANAAAEADQACADAAANQABBrgBBsQAAAKgBADQgCAGgJgBQgJgBgMgEQgMgFgQgIQgGgEgEAFQgDAEAGAFQAEAEAGADQAaAMASADIAHABQAFACABAEQABALgCAWQABC1gBC0IAAAKQAAAFgEAEQgCgCgGAAIjCAAQgDADgIAAIhJABQgBgEgEgBg");
		this.shape_18.setTransform(70.6, 84.3);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_18
			}, {
				t: this.shape_17
			}, {
				t: this.shape_16
			}, {
				t: this.shape_15
			}, {
				t: this.shape_14
			}, {
				t: this.shape_13
			}, {
				t: this.shape_12
			}, {
				t: this.shape_11
			}, {
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.shape_8
			}, {
				t: this.shape_7
			}, {
				t: this.shape_6
			}, {
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.pakettibody, new cjs.Rectangle(0, 0, 187.3, 119.6), null);


	(lib.leftleg = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#3F3F3F").s().p("AgtCSQgLgFgHgLQgIgNADgcQAFgsAThLIAehzQACgEAFAAIBMAAIgbBiIgUBRQgLAvgBAkQAAAOgJAKQgIAJgOADIgHABQgJAAgIgEg");
		this.shape.setTransform(7, 15);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.leftleg, new cjs.Rectangle(0, 0, 13.9, 30.1), null);


	(lib.hihna_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape.setTransform(305.2, 8.7, 0.663, 0.663);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_1.setTransform(272.1, 8.7, 0.663, 0.663);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_2.setTransform(338.5, 8.7, 0.663, 0.663);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_3.setTransform(239, 8.7, 0.663, 0.663);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FF6D6C").s().p("AhmCDIgBgBIgLAAIAAkEIAUABIDRAAIAAEEg");
		this.shape_4.setTransform(7.3, 8.7, 0.722, 0.663);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_5.setTransform(40.4, 8.7, 0.663, 0.663);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_6.setTransform(73.5, 8.7, 0.663, 0.663);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_7.setTransform(172.8, 8.7, 0.663, 0.663);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_8.setTransform(106.6, 8.7, 0.663, 0.663);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_9.setTransform(205.8, 8.7, 0.663, 0.663);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FF6D6C").s().p("Ah8CCIAAkDID5AAIAAEDg");
		this.shape_10.setTransform(139.7, 8.7, 0.663, 0.663);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.shape_8
			}, {
				t: this.shape_7
			}, {
				t: this.shape_6
			}, {
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.hihna_1, new cjs.Rectangle(-1, 0, 347.8, 17.3), null);


	(lib.Path = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#92CEB5").s().p("AooIpIAAxRIRRAAIAARRg");
		this.shape.setTransform(55.3, 55.3);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0, 0, 110.6, 110.5), null);


	(lib.Group = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#92CEB5").s().p("Ap7LmQgrAAggggQgegeAAgsIAAz3QAAgrAeggQAggfArAAIT3AAQAsAAAeAfQAfAgABArIAAT3QgBAsgfAeQgeAggsAAg");
		this.shape.setTransform(305.7, 89.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#92CEB5").s().p("AsmAoIAAhOIZNAAIAABOg");
		this.shape_1.setTransform(80.7, 254.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#92CEB5").s().p("AhTVCMAAAgqEICnAAMAAAAqEg");
		this.shape_2.setTransform(159.2, 134.7);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#92CEB5").s().p("AkNEOQhvhwAAieQAAidBvhwQBwhwCdAAQCeAABwBwQBwBwAACdQAACehwBwQhwBwieAAQidAAhwhwg");
		this.shape_3.setTransform(375, 239.9);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#92CEB5").s().p("AkMEOQhxhwAAieQAAidBxhwQBvhwCdAAQCeAABwBwQBvBwABCdQgBCehvBwQhwBwieAAQidAAhvhwg");
		this.shape_4.setTransform(241.7, 239.9);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#92CEB5").s().p("A1XFfIAAq9MAqwAAAIAAK9g");
		this.shape_5.setTransform(299.1, 203.5);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 436, 278.1), null);


	(lib.pipesm = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#92CEB5").s().p("EgpnAJxIgIgBIgIABQg4AAgXgfQgRgYAAgzIAAukMg/2AAAIAAjTMBBWAAAQA9AAArAfQArAfAAArIgBAIIABAIIAAOVMCSyAAAIAADTg");
		this.shape.setTransform(686.2, 62.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.pipesm, new cjs.Rectangle(0, 0, 1372.4, 125), null);


	(lib.pipelg = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#83BAA4").s().p("EhqtADcIAAm3MDVbAAAIAAG3g");
		this.shape.setTransform(683, 22);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.pipelg, new cjs.Rectangle(0, 0, 1366, 44), null);


	(lib.Symbol4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.instance = new lib.Group();
		this.instance.parent = this;
		this.instance.setTransform(160.2, 95.6, 0.734, 0.686, 0, 0, 0, 218.3, 139.4);
		this.instance.alpha = 0.5;

		this.instance_1 = new lib.Path();
		this.instance_1.parent = this;
		this.instance_1.setTransform(56.9, 132, 0.734, 0.686, 0, 0, 0, 55.6, 55.6);
		this.instance_1.alpha = 0.5;

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_1
			}, {
				t: this.instance
			}]
		}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0, 0, 320, 190.7), null);


	(lib.satelite = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.instance = new lib.Symbol3();
		this.instance.parent = this;
		this.instance.setTransform(76.3, 73.5, 1, 1, -7.5, 0, 0, 73.9, 74.6);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			regX: 43.1,
			regY: 43.3,
			rotation: -7,
			x: 42,
			y: 46.2
		}, 0).wait(1).to({
			rotation: -6.5,
			x: 42.2,
			y: 45.8
		}, 0).wait(1).to({
			rotation: -5.9,
			x: 42.5,
			y: 45.5
		}, 0).wait(1).to({
			rotation: -5.3,
			x: 42.8,
			y: 45.2
		}, 0).wait(1).to({
			rotation: -4.8,
			x: 43.1,
			y: 44.9
		}, 0).wait(1).to({
			rotation: -4.2,
			x: 43.4,
			y: 44.5
		}, 0).wait(1).to({
			rotation: -3.6,
			x: 43.7,
			y: 44.2
		}, 0).wait(1).to({
			rotation: -3,
			x: 44,
			y: 43.9
		}, 0).wait(1).to({
			rotation: -2.5,
			x: 44.2,
			y: 43.5
		}, 0).wait(1).to({
			rotation: -1.9,
			x: 44.6,
			y: 43.2
		}, 0).wait(1).to({
			rotation: -1.3,
			x: 44.8,
			y: 42.9
		}, 0).wait(1).to({
			rotation: -0.8,
			x: 45.1,
			y: 42.7
		}, 0).wait(1).to({
			rotation: -0.2,
			x: 45.4,
			y: 42.3
		}, 0).wait(1).to({
			rotation: 0.4,
			x: 45.7,
			y: 42.1
		}, 0).wait(1).to({
			rotation: 1,
			x: 46.1,
			y: 41.7
		}, 0).wait(1).to({
			rotation: 1.5,
			x: 46.4,
			y: 41.5
		}, 0).wait(1).to({
			rotation: 2.1,
			x: 46.6,
			y: 41.1
		}, 0).wait(1).to({
			rotation: 2.7,
			x: 47,
			y: 40.8
		}, 0).wait(1).to({
			rotation: 3.2,
			x: 47.3,
			y: 40.6
		}, 0).wait(1).to({
			rotation: 3.8,
			x: 47.6,
			y: 40.3
		}, 0).wait(1).to({
			rotation: 4.4,
			x: 48,
			y: 40
		}, 0).wait(1).to({
			rotation: 5,
			x: 48.3,
			y: 39.7
		}, 0).wait(1).to({
			rotation: 5.5,
			x: 48.7,
			y: 39.4
		}, 0).wait(1).to({
			rotation: 6.1,
			x: 49,
			y: 39.1
		}, 0).wait(1).to({
			rotation: 6.7,
			x: 49.4,
			y: 38.9
		}, 0).wait(1).to({
			rotation: 7.2,
			x: 49.7,
			y: 38.6
		}, 0).wait(1).to({
			rotation: 7.8,
			x: 50,
			y: 38.4
		}, 0).wait(1).to({
			rotation: 8.4,
			x: 50.4,
			y: 38.1
		}, 0).wait(1).to({
			rotation: 8.9,
			x: 50.8,
			y: 37.8
		}, 0).wait(1).to({
			rotation: 9.5,
			x: 51.1,
			y: 37.6
		}, 0).wait(1).to({
			rotation: 10.1,
			x: 51.5,
			y: 37.4
		}, 0).wait(1).to({
			rotation: 10.7,
			x: 51.8,
			y: 37.1
		}, 0).wait(1).to({
			rotation: 11.2,
			x: 52.1,
			y: 36.8
		}, 0).wait(1).to({
			rotation: 11.8,
			x: 52.6,
			y: 36.6
		}, 0).wait(1).to({
			rotation: 12.4,
			x: 52.9,
			y: 36.4
		}, 0).wait(1).to({
			rotation: 12.9,
			x: 53.3,
			y: 36.1
		}, 0).wait(1).to({
			rotation: 13.5,
			x: 53.7,
			y: 35.9
		}, 0).wait(1).to({
			rotation: 14.1,
			x: 54,
			y: 35.7
		}, 0).wait(1).to({
			rotation: 14.7,
			x: 54.4,
			y: 35.5
		}, 0).wait(1).to({
			rotation: 15.2,
			x: 54.8,
			y: 35.3
		}, 0).wait(1).to({
			rotation: 15.8,
			x: 55.2,
			y: 35
		}, 0).wait(1).to({
			rotation: 16.4,
			x: 55.6,
			y: 34.8
		}, 0).wait(1).to({
			rotation: 16.9,
			x: 56,
			y: 34.6
		}, 0).wait(1).to({
			rotation: 17.5,
			x: 56.3,
			y: 34.4
		}, 0).wait(1).to({
			rotation: 18.1,
			x: 56.7,
			y: 34.2
		}, 0).wait(1).to({
			rotation: 18.7,
			x: 57.1,
			y: 34.1
		}, 0).wait(1).to({
			rotation: 19.2,
			x: 57.5,
			y: 33.9
		}, 0).wait(1).to({
			rotation: 19.8,
			x: 57.9,
			y: 33.7
		}, 0).wait(1).to({
			rotation: 20.4,
			x: 58.3,
			y: 33.5
		}, 0).wait(1).to({
			rotation: 20.9,
			x: 58.7,
			y: 33.3
		}, 0).wait(1).to({
			rotation: 21.5,
			x: 59.1,
			y: 33.1
		}, 0).wait(1).to({
			rotation: 22.1,
			x: 59.6,
			y: 33
		}, 0).wait(1).to({
			rotation: 22.6,
			x: 60,
			y: 32.8
		}, 0).wait(1).to({
			rotation: 23.2,
			x: 60.3,
			y: 32.7
		}, 0).wait(1).to({
			rotation: 23.8,
			x: 60.8,
			y: 32.5
		}, 0).wait(1).to({
			rotation: 24.4,
			x: 61.1,
			y: 32.4
		}, 0).wait(1).to({
			rotation: 24.9,
			x: 61.6,
			y: 32.1
		}, 0).wait(1).to({
			rotation: 25.5,
			x: 62,
			y: 32
		}, 0).wait(1).to({
			rotation: 26.1,
			x: 62.4,
			y: 31.9
		}, 0).wait(1).to({
			rotation: 26.6,
			x: 62.8,
			y: 31.8
		}, 0).wait(1).to({
			rotation: 27.2,
			x: 63.2,
			y: 31.6
		}, 0).wait(1).to({
			rotation: 27.8,
			x: 63.6,
			y: 31.5
		}, 0).wait(1).to({
			rotation: 28.4,
			x: 64.1,
			y: 31.3
		}, 0).wait(1).to({
			rotation: 28.9,
			x: 64.5
		}, 0).wait(1).to({
			rotation: 29.5,
			x: 64.9,
			y: 31.1
		}, 0).wait(1).to({
			rotation: 30.1,
			x: 65.3,
			y: 31
		}, 0).wait(1).to({
			rotation: 30.6,
			x: 65.8,
			y: 30.9
		}, 0).wait(1).to({
			rotation: 31.2,
			x: 66.2
		}, 0).wait(1).to({
			rotation: 31.8,
			x: 66.6,
			y: 30.7
		}, 0).wait(1).to({
			rotation: 32.4,
			x: 67,
			y: 30.6
		}, 0).wait(1).to({
			rotation: 32.9,
			x: 67.5,
			y: 30.5
		}, 0).wait(1).to({
			rotation: 33.5,
			x: 67.9
		}, 0).wait(1).to({
			rotation: 34.1,
			x: 68.3,
			y: 30.4
		}, 0).wait(1).to({
			rotation: 34.6,
			x: 68.7,
			y: 30.3
		}, 0).wait(1).to({
			rotation: 35.2,
			x: 69.2,
			y: 30.2
		}, 0).wait(1).to({
			rotation: 35.8,
			x: 69.6
		}, 0).wait(1).to({
			rotation: 36.3,
			x: 70,
			y: 30.1
		}, 0).wait(1).to({
			rotation: 36.9,
			x: 70.5,
			y: 30
		}, 0).wait(1).to({
			rotation: 37.5,
			x: 70.9
		}, 0).wait(1).to({
			rotation: 38.1,
			x: 71.4,
			y: 29.9
		}, 0).wait(1).to({
			rotation: 38.6,
			x: 71.7
		}, 0).wait(1).to({
			rotation: 39.2,
			x: 72.2,
			y: 29.8
		}, 0).wait(1).to({
			rotation: 39.8,
			x: 72.7
		}, 0).wait(1).to({
			rotation: 40.3,
			x: 73.1,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 40.9,
			x: 73.5
		}, 0).wait(1).to({
			rotation: 41.5,
			x: 74
		}, 0).wait(1).to({
			rotation: 42.1,
			x: 74.4
		}, 0).wait(1).to({
			rotation: 42.6,
			x: 74.8
		}, 0).wait(1).to({
			rotation: 43.2,
			x: 75.2,
			y: 29.6
		}, 0).wait(1).to({
			rotation: 43.8,
			x: 75.7
		}, 0).wait(1).to({
			rotation: 44.3,
			x: 76.2
		}, 0).wait(1).to({
			rotation: 44.9,
			x: 76.6
		}, 0).wait(1).to({
			rotation: 45.5,
			x: 77
		}, 0).wait(1).to({
			rotation: 46.1,
			x: 77.5,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 46.6,
			x: 77.9
		}, 0).wait(1).to({
			rotation: 47.2,
			x: 78.4,
			y: 29.6
		}, 0).wait(1).to({
			rotation: 47.8,
			x: 78.8,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 48.3,
			x: 79.2
		}, 0).wait(1).to({
			rotation: 48.9,
			x: 79.6,
			y: 29.8
		}, 0).wait(1).to({
			rotation: 49.5,
			x: 80.1
		}, 0).wait(1).to({
			rotation: 50,
			x: 80.5
		}, 0).wait(1).to({
			rotation: 50.6,
			x: 81
		}, 0).wait(1).to({
			rotation: 51.2,
			x: 81.4,
			y: 30
		}, 0).wait(1).to({
			rotation: 51.8,
			x: 81.8
		}, 0).wait(1).to({
			rotation: 52.3,
			x: 82.3
		}, 0).wait(1).to({
			rotation: 52.9,
			x: 82.7,
			y: 30.1
		}, 0).wait(1).to({
			rotation: 53.5,
			x: 83.1,
			y: 30.2
		}, 0).wait(1).to({
			rotation: 54,
			x: 83.5,
			y: 30.3
		}, 0).wait(1).to({
			rotation: 54.6,
			x: 84
		}, 0).wait(1).to({
			rotation: 55.2,
			x: 84.4,
			y: 30.4
		}, 0).wait(1).to({
			rotation: 55.8,
			x: 84.8,
			y: 30.5
		}, 0).wait(1).to({
			rotation: 56.3,
			x: 85.3
		}, 0).wait(1).to({
			rotation: 56.9,
			x: 85.7,
			y: 30.6
		}, 0).wait(1).to({
			rotation: 57.5,
			x: 86.2,
			y: 30.8
		}, 0).wait(1).to({
			rotation: 58,
			x: 86.5
		}, 0).wait(1).to({
			rotation: 58.6,
			x: 87,
			y: 31
		}, 0).wait(1).to({
			rotation: 59.2,
			x: 87.4,
			y: 31.1
		}, 0).wait(1).to({
			rotation: 59.7,
			x: 87.8,
			y: 31.2
		}, 0).wait(1).to({
			rotation: 60.3,
			x: 88.3,
			y: 31.3
		}, 0).wait(1).to({
			rotation: 60.9,
			x: 88.6,
			y: 31.4
		}, 0).wait(1).to({
			rotation: 61.5,
			x: 89.1,
			y: 31.5
		}, 0).wait(1).to({
			rotation: 62,
			x: 89.5,
			y: 31.6
		}, 0).wait(1).to({
			rotation: 62.6,
			x: 89.9,
			y: 31.8
		}, 0).wait(1).to({
			rotation: 63.2,
			x: 90.3,
			y: 31.9
		}, 0).wait(1).to({
			rotation: 63.7,
			x: 90.7,
			y: 32.1
		}, 0).wait(1).to({
			rotation: 64.3,
			x: 91.2,
			y: 32.2
		}, 0).wait(1).to({
			rotation: 64.9,
			x: 91.6,
			y: 32.4
		}, 0).wait(1).to({
			rotation: 65.5,
			x: 92,
			y: 32.5
		}, 0).wait(1).to({
			rotation: 66,
			x: 92.4,
			y: 32.7
		}, 0).wait(1).to({
			rotation: 66.6,
			x: 92.8,
			y: 32.8
		}, 0).wait(1).to({
			rotation: 67.2,
			x: 93.2,
			y: 33
		}, 0).wait(1).to({
			rotation: 67.7,
			x: 93.6,
			y: 33.2
		}, 0).wait(1).to({
			rotation: 68.3,
			x: 94,
			y: 33.4
		}, 0).wait(1).to({
			rotation: 68.9,
			x: 94.4,
			y: 33.5
		}, 0).wait(1).to({
			rotation: 69.5,
			x: 94.8,
			y: 33.7
		}, 0).wait(1).to({
			rotation: 70,
			x: 95.2,
			y: 33.9
		}, 0).wait(1).to({
			rotation: 70.6,
			x: 95.6,
			y: 34.1
		}, 0).wait(1).to({
			rotation: 71.2,
			x: 95.9,
			y: 34.3
		}, 0).wait(1).to({
			rotation: 71.7,
			x: 96.4,
			y: 34.5
		}, 0).wait(1).to({
			rotation: 72.3,
			x: 96.8,
			y: 34.7
		}, 0).wait(1).to({
			rotation: 72.9,
			x: 97.1,
			y: 34.9
		}, 0).wait(1).to({
			rotation: 73.4,
			x: 97.6,
			y: 35.1
		}, 0).wait(1).to({
			rotation: 74,
			x: 97.9,
			y: 35.3
		}, 0).wait(1).to({
			rotation: 74.6,
			x: 98.3,
			y: 35.5
		}, 0).wait(1).to({
			rotation: 75.2,
			x: 98.7,
			y: 35.8
		}, 0).wait(1).to({
			rotation: 74.6,
			x: 98.3,
			y: 35.6
		}, 0).wait(1).to({
			rotation: 74.1,
			x: 97.9,
			y: 35.3
		}, 0).wait(1).to({
			rotation: 73.5,
			x: 97.6,
			y: 35.1
		}, 0).wait(1).to({
			rotation: 73,
			x: 97.3,
			y: 34.9
		}, 0).wait(1).to({
			rotation: 72.5,
			x: 96.9,
			y: 34.8
		}, 0).wait(1).to({
			rotation: 71.9,
			x: 96.5,
			y: 34.6
		}, 0).wait(1).to({
			rotation: 71.4,
			x: 96.1,
			y: 34.4
		}, 0).wait(1).to({
			rotation: 70.9,
			x: 95.8,
			y: 34.2
		}, 0).wait(1).to({
			rotation: 70.3,
			x: 95.4,
			y: 34
		}, 0).wait(1).to({
			rotation: 69.8,
			x: 95,
			y: 33.8
		}, 0).wait(1).to({
			rotation: 69.2,
			x: 94.6,
			y: 33.7
		}, 0).wait(1).to({
			rotation: 68.7,
			x: 94.3,
			y: 33.5
		}, 0).wait(1).to({
			rotation: 68.2,
			x: 93.9,
			y: 33.3
		}, 0).wait(1).to({
			rotation: 67.6,
			x: 93.5,
			y: 33.1
		}, 0).wait(1).to({
			rotation: 67.1,
			x: 93.1,
			y: 33
		}, 0).wait(1).to({
			rotation: 66.6,
			x: 92.8,
			y: 32.8
		}, 0).wait(1).to({
			rotation: 66,
			x: 92.4,
			y: 32.7
		}, 0).wait(1).to({
			rotation: 65.5,
			x: 92,
			y: 32.5
		}, 0).wait(1).to({
			rotation: 64.9,
			x: 91.6,
			y: 32.4
		}, 0).wait(1).to({
			rotation: 64.4,
			x: 91.2,
			y: 32.2
		}, 0).wait(1).to({
			rotation: 63.9,
			x: 90.8,
			y: 32.1
		}, 0).wait(1).to({
			rotation: 63.3,
			x: 90.5,
			y: 32
		}, 0).wait(1).to({
			rotation: 62.8,
			x: 90.1,
			y: 31.9
		}, 0).wait(1).to({
			rotation: 62.3,
			x: 89.7,
			y: 31.7
		}, 0).wait(1).to({
			rotation: 61.7,
			x: 89.2,
			y: 31.6
		}, 0).wait(1).to({
			rotation: 61.2,
			x: 88.9,
			y: 31.4
		}, 0).wait(1).to({
			rotation: 60.7,
			x: 88.5,
			y: 31.3
		}, 0).wait(1).to({
			rotation: 60.1,
			x: 88.1
		}, 0).wait(1).to({
			rotation: 59.6,
			x: 87.7,
			y: 31.1
		}, 0).wait(1).to({
			rotation: 59,
			x: 87.3,
			y: 31
		}, 0).wait(1).to({
			rotation: 58.5,
			x: 86.9,
			y: 30.9
		}, 0).wait(1).to({
			rotation: 58,
			x: 86.5,
			y: 30.8
		}, 0).wait(1).to({
			rotation: 57.4,
			x: 86.1,
			y: 30.7
		}, 0).wait(1).to({
			rotation: 56.9,
			x: 85.7,
			y: 30.6
		}, 0).wait(1).to({
			rotation: 56.4,
			x: 85.3
		}, 0).wait(1).to({
			rotation: 55.8,
			x: 84.9,
			y: 30.5
		}, 0).wait(1).to({
			rotation: 55.3,
			x: 84.5,
			y: 30.4
		}, 0).wait(1).to({
			rotation: 54.7,
			x: 84.1,
			y: 30.3
		}, 0).wait(1).to({
			rotation: 54.2,
			x: 83.7
		}, 0).wait(1).to({
			rotation: 53.7,
			x: 83.3,
			y: 30.2
		}, 0).wait(1).to({
			rotation: 53.1,
			x: 82.8
		}, 0).wait(1).to({
			rotation: 52.6,
			x: 82.5,
			y: 30.1
		}, 0).wait(1).to({
			rotation: 52.1,
			x: 82,
			y: 30
		}, 0).wait(1).to({
			rotation: 51.5,
			x: 81.6
		}, 0).wait(1).to({
			rotation: 51,
			x: 81.2,
			y: 29.9
		}, 0).wait(1).to({
			rotation: 50.4,
			x: 80.8
		}, 0).wait(1).to({
			rotation: 49.9,
			x: 80.4,
			y: 29.8
		}, 0).wait(1).to({
			rotation: 49.4,
			x: 80
		}, 0).wait(1).to({
			rotation: 48.8,
			x: 79.6
		}, 0).wait(1).to({
			rotation: 48.3,
			x: 79.2,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 47.8,
			x: 78.8
		}, 0).wait(1).to({
			rotation: 47.2,
			x: 78.4
		}, 0).wait(1).to({
			rotation: 46.7,
			x: 77.9
		}, 0).wait(1).to({
			rotation: 46.1,
			x: 77.5
		}, 0).wait(1).to({
			rotation: 45.6,
			x: 77.1
		}, 0).wait(1).to({
			rotation: 45.1,
			x: 76.7,
			y: 29.6
		}, 0).wait(1).to({
			rotation: 44.5,
			x: 76.3
		}, 0).wait(1).to({
			rotation: 44,
			x: 75.9
		}, 0).wait(1).to({
			rotation: 43.5,
			x: 75.5,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 42.9,
			x: 75,
			y: 29.6
		}, 0).wait(1).to({
			rotation: 42.4,
			x: 74.6,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 41.8,
			x: 74.2
		}, 0).wait(1).to({
			rotation: 41.3,
			x: 73.8
		}, 0).wait(1).to({
			rotation: 40.8,
			x: 73.4
		}, 0).wait(1).to({
			rotation: 40.2,
			x: 73,
			y: 29.8
		}, 0).wait(1).to({
			rotation: 39.7,
			x: 72.6,
			y: 29.7
		}, 0).wait(1).to({
			rotation: 39.2,
			x: 72.1,
			y: 29.8
		}, 0).wait(1).to({
			rotation: 38.6,
			x: 71.8,
			y: 29.9
		}, 0).wait(1).to({
			rotation: 38.1,
			x: 71.4
		}, 0).wait(1).to({
			rotation: 37.5,
			x: 70.9,
			y: 30
		}, 0).wait(1).to({
			rotation: 37,
			x: 70.5
		}, 0).wait(1).to({
			rotation: 36.5,
			x: 70.1
		}, 0).wait(1).to({
			rotation: 35.9,
			x: 69.7,
			y: 30.1
		}, 0).wait(1).to({
			rotation: 35.4,
			x: 69.3,
			y: 30.2
		}, 0).wait(1).to({
			rotation: 34.9,
			x: 68.9,
			y: 30.3
		}, 0).wait(1).to({
			rotation: 34.3,
			x: 68.5
		}, 0).wait(1).to({
			rotation: 33.8,
			x: 68.1,
			y: 30.4
		}, 0).wait(1).to({
			rotation: 33.2,
			x: 67.7
		}, 0).wait(1).to({
			rotation: 32.7,
			x: 67.3,
			y: 30.6
		}, 0).wait(1).to({
			rotation: 32.2,
			x: 66.9,
			y: 30.7
		}, 0).wait(1).to({
			rotation: 31.6,
			x: 66.5
		}, 0).wait(1).to({
			rotation: 31.1,
			x: 66.1,
			y: 30.9
		}, 0).wait(1).to({
			rotation: 30.6,
			x: 65.7
		}, 0).wait(1).to({
			rotation: 30,
			x: 65.3,
			y: 31
		}, 0).wait(1).to({
			rotation: 29.5,
			x: 64.9,
			y: 31.1
		}, 0).wait(1).to({
			rotation: 28.9,
			x: 64.5,
			y: 31.3
		}, 0).wait(1).to({
			rotation: 28.4,
			x: 64.1,
			y: 31.4
		}, 0).wait(1).to({
			rotation: 27.9,
			x: 63.7,
			y: 31.5
		}, 0).wait(1).to({
			rotation: 27.3,
			x: 63.3,
			y: 31.6
		}, 0).wait(1).to({
			rotation: 26.8,
			x: 62.9,
			y: 31.7
		}, 0).wait(1).to({
			rotation: 26.3,
			x: 62.5,
			y: 31.9
		}, 0).wait(1).to({
			rotation: 25.7,
			x: 62.1,
			y: 32
		}, 0).wait(1).to({
			rotation: 25.2,
			x: 61.8,
			y: 32.1
		}, 0).wait(1).to({
			rotation: 24.6,
			x: 61.4,
			y: 32.2
		}, 0).wait(1).to({
			rotation: 24.1,
			x: 61,
			y: 32.4
		}, 0).wait(1).to({
			rotation: 23.6,
			x: 60.6,
			y: 32.6
		}, 0).wait(1).to({
			rotation: 23,
			x: 60.2,
			y: 32.7
		}, 0).wait(1).to({
			rotation: 22.5,
			x: 59.8,
			y: 32.9
		}, 0).wait(1).to({
			rotation: 22,
			x: 59.4,
			y: 33
		}, 0).wait(1).to({
			rotation: 21.4,
			x: 59,
			y: 33.2
		}, 0).wait(1).to({
			rotation: 20.9,
			x: 58.6,
			y: 33.3
		}, 0).wait(1).to({
			rotation: 20.3,
			x: 58.3,
			y: 33.5
		}, 0).wait(1).to({
			rotation: 19.8,
			x: 57.9,
			y: 33.7
		}, 0).wait(1).to({
			rotation: 19.3,
			x: 57.6,
			y: 33.8
		}, 0).wait(1).to({
			rotation: 18.7,
			x: 57.2,
			y: 34
		}, 0).wait(1).to({
			rotation: 18.2,
			x: 56.8,
			y: 34.2
		}, 0).wait(1).to({
			rotation: 17.7,
			x: 56.4,
			y: 34.3
		}, 0).wait(1).to({
			rotation: 17.1,
			x: 56.1,
			y: 34.6
		}, 0).wait(1).to({
			rotation: 16.6,
			x: 55.7,
			y: 34.8
		}, 0).wait(1).to({
			rotation: 16,
			x: 55.3,
			y: 34.9
		}, 0).wait(1).to({
			rotation: 15.5,
			x: 55,
			y: 35.1
		}, 0).wait(1).to({
			rotation: 15,
			x: 54.6,
			y: 35.4
		}, 0).wait(1).to({
			rotation: 14.4,
			x: 54.3,
			y: 35.6
		}, 0).wait(1).to({
			rotation: 13.9,
			x: 53.9,
			y: 35.8
		}, 0).wait(1).to({
			rotation: 13.4,
			x: 53.6,
			y: 36
		}, 0).wait(1).to({
			rotation: 12.8,
			x: 53.2,
			y: 36.2
		}, 0).wait(1).to({
			rotation: 12.3,
			x: 52.9,
			y: 36.4
		}, 0).wait(1).to({
			rotation: 11.7,
			x: 52.5,
			y: 36.6
		}, 0).wait(1).to({
			rotation: 11.2,
			x: 52.2,
			y: 36.8
		}, 0).wait(1).to({
			rotation: 10.7,
			x: 51.8,
			y: 37.1
		}, 0).wait(1).to({
			rotation: 10.1,
			x: 51.5,
			y: 37.3
		}, 0).wait(1).to({
			rotation: 9.6,
			x: 51.2,
			y: 37.6
		}, 0).wait(1).to({
			rotation: 9.1,
			x: 50.8,
			y: 37.8
		}, 0).wait(1).to({
			rotation: 8.5,
			x: 50.5,
			y: 38
		}, 0).wait(1).to({
			rotation: 8,
			x: 50.2,
			y: 38.3
		}, 0).wait(1).to({
			rotation: 7.4,
			x: 49.8,
			y: 38.6
		}, 0).wait(1).to({
			rotation: 6.9,
			x: 49.5,
			y: 38.8
		}, 0).wait(1).to({
			rotation: 6.4,
			x: 49.2,
			y: 39.1
		}, 0).wait(1).to({
			rotation: 5.8,
			x: 48.9,
			y: 39.3
		}, 0).wait(1).to({
			rotation: 5.3,
			x: 48.5,
			y: 39.5
		}, 0).wait(1).to({
			rotation: 4.8,
			x: 48.2,
			y: 39.8
		}, 0).wait(1).to({
			rotation: 4.2,
			x: 47.9,
			y: 40.1
		}, 0).wait(1).to({
			rotation: 3.7,
			x: 47.5,
			y: 40.3
		}, 0).wait(1).to({
			rotation: 3.1,
			x: 47.3,
			y: 40.6
		}, 0).wait(1).to({
			rotation: 2.6,
			x: 47,
			y: 40.9
		}, 0).wait(1).to({
			rotation: 2.1,
			x: 46.6,
			y: 41.1
		}, 0).wait(1).to({
			rotation: 1.5,
			x: 46.4,
			y: 41.4
		}, 0).wait(1).to({
			rotation: 1,
			x: 46.1,
			y: 41.7
		}, 0).wait(1).to({
			rotation: 0.5,
			x: 45.7,
			y: 42
		}, 0).wait(1).to({
			rotation: -0.1,
			x: 45.4,
			y: 42.3
		}, 0).wait(1).to({
			rotation: -0.6,
			x: 45.1,
			y: 42.6
		}, 0).wait(1).to({
			rotation: -1.2,
			x: 44.9,
			y: 42.9
		}, 0).wait(1).to({
			rotation: -1.7,
			x: 44.6,
			y: 43.2
		}, 0).wait(1).to({
			rotation: -2.2,
			x: 44.4,
			y: 43.4
		}, 0).wait(1).to({
			rotation: -2.8,
			x: 44.1,
			y: 43.7
		}, 0).wait(1).to({
			rotation: -3.3,
			x: 43.8,
			y: 44
		}, 0).wait(1).to({
			rotation: -3.8,
			x: 43.5,
			y: 44.3
		}, 0).wait(1).to({
			rotation: -4.4,
			x: 43.2,
			y: 44.6
		}, 0).wait(1).to({
			rotation: -4.9,
			x: 43,
			y: 45
		}, 0).wait(1).to({
			rotation: -5.5,
			x: 42.7,
			y: 45.3
		}, 0).wait(1).to({
			rotation: -6,
			x: 42.4,
			y: 45.6
		}, 0).wait(1).to({
			rotation: -6.5,
			x: 42.1,
			y: 45.9
		}, 0).wait(1).to({
			rotation: -7.1,
			x: 41.9,
			y: 46.2
		}, 0).wait(1).to({
			rotation: -7.6,
			x: 41.7,
			y: 46.5
		}, 0).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6.7, -1.4, 96.7, 88.4);


	(lib.pakettihahm = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// paketti-body
		this.instance = new lib.pakettibody();
		this.instance.parent = this;
		this.instance.setTransform(93.6, 59.8, 1, 1, 0, 0, 0, 93.6, 59.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({
			scaleY: 0.98,
			y: 61
		}, 0).wait(1).to({
			scaleY: 0.97,
			y: 62.1
		}, 0).wait(1).to({
			scaleY: 0.95,
			y: 63.3
		}, 0).wait(1).to({
			scaleY: 0.94,
			y: 64.4
		}, 0).wait(1).to({
			scaleY: 0.92,
			y: 65.6
		}, 0).wait(1).to({
			scaleY: 0.9,
			y: 66.7
		}, 0).wait(1).to({
			scaleY: 0.89,
			y: 67.9
		}, 0).wait(1).to({
			scaleY: 0.87,
			y: 69
		}, 0).wait(1).to({
			scaleY: 0.86,
			y: 70.1
		}, 0).wait(1).to({
			scaleY: 0.84,
			y: 71.3
		}, 0).wait(1).to({
			scaleY: 0.85,
			y: 70.7
		}, 0).wait(1).to({
			scaleY: 0.86,
			y: 70.1
		}, 0).wait(1).to({
			scaleY: 0.87,
			y: 69.6
		}, 0).wait(1).to({
			scaleY: 0.87,
			y: 69
		}, 0).wait(1).to({
			scaleY: 0.88,
			y: 68.4
		}, 0).wait(1).to({
			scaleY: 0.89,
			y: 67.9
		}, 0).wait(1).to({
			scaleY: 0.9,
			y: 67.3
		}, 0).wait(1).to({
			scaleY: 0.9,
			y: 66.7
		}, 0).wait(1).to({
			scaleY: 0.91,
			y: 66.1
		}, 0).wait(1).to({
			scaleY: 0.92,
			y: 65.6
		}, 0).wait(1).to({
			scaleY: 0.93,
			y: 65
		}, 0).wait(1).to({
			scaleY: 0.94,
			y: 64.4
		}, 0).wait(1).to({
			scaleY: 0.94,
			y: 63.8
		}, 0).wait(1).to({
			scaleY: 0.95,
			y: 63.3
		}, 0).wait(1).to({
			scaleY: 0.96,
			y: 62.7
		}, 0).wait(1).to({
			scaleY: 0.97,
			y: 62.1
		}, 0).wait(1).to({
			scaleY: 0.98,
			y: 61.5
		}, 0).wait(1).to({
			scaleY: 0.98,
			y: 61
		}, 0).wait(1).to({
			scaleY: 0.99,
			y: 60.4
		}, 0).wait(1).to({
			scaleY: 1,
			y: 59.8
		}, 0).wait(122));

		// left-leg
		this.instance_1 = new lib.leftleg();
		this.instance_1.parent = this;
		this.instance_1.setTransform(80.9, 118.4, 1, 1, 0, 0, 0, 13.9, 0);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
			regX: 7,
			regY: 15,
			rotation: -0.1,
			x: 74,
			y: 133.4
		}, 0).wait(1).to({
			rotation: -0.2,
			x: 74.1
		}, 0).wait(1).to({
			rotation: -0.3
		}, 0).wait(1).to({
			rotation: -0.4
		}, 0).wait(1).to({
			rotation: -0.5,
			y: 133.5
		}, 0).wait(1).to({
			rotation: -0.6,
			x: 74.2
		}, 0).wait(2).to({
			rotation: -0.7
		}, 0).wait(1).to({
			rotation: -0.8
		}, 0).wait(1).to({
			rotation: -0.9,
			x: 74.3
		}, 0).wait(1).to({
			rotation: -1
		}, 0).wait(1).to({
			rotation: -1.1
		}, 0).wait(1).to({
			rotation: -1.2
		}, 0).wait(1).to({
			rotation: -1.3,
			x: 74.4,
			y: 133.6
		}, 0).wait(1).to({
			rotation: -1.4
		}, 0).wait(1).to({
			rotation: -1.5
		}, 0).wait(1).to({
			rotation: -1.6
		}, 0).wait(1).to({
			rotation: -1.7,
			x: 74.5
		}, 0).wait(1).to({
			rotation: -1.8
		}, 0).wait(2).to({
			rotation: -1.9
		}, 0).wait(1).to({
			rotation: -2,
			x: 74.6
		}, 0).wait(1).to({
			rotation: -2.1,
			y: 133.7
		}, 0).wait(1).to({
			rotation: -2.2
		}, 0).wait(1).to({
			rotation: -2.3
		}, 0).wait(1).to({
			rotation: -2.4,
			x: 74.7
		}, 0).wait(1).to({
			rotation: -2.5
		}, 0).wait(1).to({
			rotation: -2.6
		}, 0).wait(1).to({
			rotation: -2.7
		}, 0).wait(1).to({
			rotation: -0.9,
			x: 74.3
		}, 0).wait(1).to({
			rotation: 0.9,
			x: 73.8
		}, 0).wait(1).to({
			rotation: 2.6,
			x: 73.3
		}, 0).wait(1).to({
			rotation: 4.4,
			x: 72.9
		}, 0).wait(1).to({
			rotation: 6.2,
			x: 72.4,
			y: 133.6
		}, 0).wait(1).to({
			rotation: 7.9,
			x: 72,
			y: 133.5
		}, 0).wait(1).to({
			rotation: 9.7,
			x: 71.5
		}, 0).wait(1).to({
			rotation: 11.5,
			x: 71.1,
			y: 133.4
		}, 0).wait(1).to({
			rotation: 13.2,
			x: 70.7,
			y: 133.3
		}, 0).wait(1).to({
			rotation: 15,
			x: 70.3,
			y: 133.2
		}, 0).wait(1).to({
			rotation: 14.2,
			x: 70.5
		}, 0).wait(1).to({
			rotation: 13.5,
			x: 70.7,
			y: 133.3
		}, 0).wait(1).to({
			rotation: 12.7,
			x: 70.9
		}, 0).wait(1).to({
			rotation: 12,
			x: 71.1
		}, 0).wait(1).to({
			rotation: 11.2,
			x: 71.2
		}, 0).wait(1).to({
			rotation: 10.5,
			x: 71.4,
			y: 133.4
		}, 0).wait(1).to({
			rotation: 9.7,
			x: 71.6
		}, 0).wait(1).to({
			rotation: 9,
			x: 71.7
		}, 0).wait(1).to({
			rotation: 8.2,
			x: 71.9
		}, 0).wait(1).to({
			rotation: 7.5,
			x: 72.1
		}, 0).wait(1).to({
			rotation: 6.7,
			x: 72.3
		}, 0).wait(1).to({
			rotation: 6,
			x: 72.5
		}, 0).wait(1).to({
			rotation: 5.2,
			x: 72.7,
			y: 133.5
		}, 0).wait(1).to({
			rotation: 4.5,
			x: 72.8,
			y: 133.4
		}, 0).wait(1).to({
			rotation: 3.7,
			x: 73
		}, 0).wait(1).to({
			rotation: 3,
			x: 73.2
		}, 0).wait(1).to({
			rotation: 2.2,
			x: 73.4
		}, 0).wait(1).to({
			rotation: 1.5,
			x: 73.6
		}, 0).wait(1).to({
			rotation: 0.7,
			x: 73.8
		}, 0).wait(1).to({
			rotation: 0,
			x: 74
		}, 0).wait(122));

		// right-leg
		this.instance_2 = new lib.rightleg();
		this.instance_2.parent = this;
		this.instance_2.setTransform(119.4, 118.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
			regX: 7,
			regY: 15.1,
			rotation: 0.1,
			x: 126.4,
			y: 133.4
		}, 0).wait(1).to({
			rotation: 0.2
		}, 0).wait(1).to({
			rotation: 0.3,
			y: 133.5
		}, 0).wait(1).to({
			rotation: 0.4,
			x: 126.3
		}, 0).wait(1).to({
			rotation: 0.5
		}, 0).wait(1).to({
			rotation: 0.6
		}, 0).wait(2).to({
			rotation: 0.7,
			x: 126.2
		}, 0).wait(1).to({
			rotation: 0.8
		}, 0).wait(1).to({
			rotation: 0.9
		}, 0).wait(1).to({
			rotation: 1
		}, 0).wait(1).to({
			rotation: 1.1,
			x: 126.1,
			y: 133.6
		}, 0).wait(1).to({
			rotation: 1.2
		}, 0).wait(1).to({
			rotation: 1.3
		}, 0).wait(1).to({
			rotation: 1.4
		}, 0).wait(1).to({
			rotation: 1.5,
			x: 126
		}, 0).wait(1).to({
			rotation: 1.6
		}, 0).wait(1).to({
			rotation: 1.7
		}, 0).wait(1).to({
			rotation: 1.8
		}, 0).wait(1).to({
			x: 125.9,
			y: 133.7
		}, 0).wait(1).to({
			rotation: 1.9
		}, 0).wait(1).to({
			rotation: 2
		}, 0).wait(1).to({
			rotation: 2.1
		}, 0).wait(1).to({
			rotation: 2.2,
			x: 125.8
		}, 0).wait(1).to({
			rotation: 2.3
		}, 0).wait(1).to({
			rotation: 2.4
		}, 0).wait(1).to({
			rotation: 2.5
		}, 0).wait(1).to({
			rotation: 2.6,
			x: 125.7
		}, 0).wait(1).to({
			rotation: 2.7,
			y: 133.8
		}, 0).wait(1).to({
			rotation: 0.9,
			x: 126.2,
			y: 133.7
		}, 0).wait(1).to({
			rotation: -0.9,
			x: 126.7
		}, 0).wait(1).to({
			rotation: -2.6,
			x: 127.1
		}, 0).wait(1).to({
			rotation: -4.4,
			x: 127.6,
			y: 133.6
		}, 0).wait(1).to({
			rotation: -6.2,
			x: 128
		}, 0).wait(1).to({
			rotation: -7.9,
			x: 128.5
		}, 0).wait(1).to({
			rotation: -9.7,
			x: 128.9,
			y: 133.5
		}, 0).wait(1).to({
			rotation: -11.5,
			x: 129.3,
			y: 133.4
		}, 0).wait(1).to({
			rotation: -13.2,
			x: 129.7,
			y: 133.3
		}, 0).wait(1).to({
			rotation: -15,
			x: 130.1,
			y: 133.2
		}, 0).wait(1).to({
			rotation: -14.2,
			x: 129.9
		}, 0).wait(1).to({
			rotation: -13.5,
			x: 129.7
		}, 0).wait(1).to({
			rotation: -12.7,
			x: 129.6,
			y: 133.3
		}, 0).wait(1).to({
			rotation: -12,
			x: 129.4
		}, 0).wait(1).to({
			rotation: -11.2,
			x: 129.2
		}, 0).wait(1).to({
			rotation: -10.5,
			x: 129.1
		}, 0).wait(1).to({
			rotation: -9.7,
			x: 128.9,
			y: 133.4
		}, 0).wait(1).to({
			rotation: -9,
			x: 128.7
		}, 0).wait(1).to({
			rotation: -8.2,
			x: 128.5
		}, 0).wait(1).to({
			rotation: -7.5,
			x: 128.3
		}, 0).wait(1).to({
			rotation: -6.7,
			x: 128.1
		}, 0).wait(1).to({
			rotation: -6,
			x: 128
		}, 0).wait(1).to({
			rotation: -5.2,
			x: 127.8
		}, 0).wait(1).to({
			rotation: -4.5,
			x: 127.6
		}, 0).wait(1).to({
			rotation: -3.7,
			x: 127.4
		}, 0).wait(1).to({
			rotation: -3,
			x: 127.2,
			y: 133.5
		}, 0).wait(1).to({
			rotation: -2.2,
			x: 127
		}, 0).wait(1).to({
			rotation: -1.5,
			x: 126.8,
			y: 133.4
		}, 0).wait(1).to({
			rotation: -0.7,
			x: 126.6
		}, 0).wait(1).to({
			rotation: 0,
			x: 126.4
		}, 0).wait(122));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 187.3, 148.5);


	(lib.hakanen = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_6
		this.instance = new lib.hihna_1();
		this.instance.parent = this;
		this.instance.setTransform(-226.4, 46.4, 1, 1, 0, 0, 0, 189.8, 8.7);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			regX: 172.9,
			x: -243.9
		}, 0).wait(1).to({
			x: -244.4
		}, 0).wait(1).to({
			x: -245
		}, 0).wait(1).to({
			x: -245.6
		}, 0).wait(1).to({
			x: -246.1
		}, 0).wait(1).to({
			x: -246.7
		}, 0).wait(1).to({
			x: -247.2
		}, 0).wait(1).to({
			x: -247.8
		}, 0).wait(1).to({
			x: -248.4
		}, 0).wait(1).to({
			x: -248.9
		}, 0).wait(1).to({
			x: -249.5
		}, 0).wait(1).to({
			x: -250.1
		}, 0).wait(1).to({
			x: -250.6
		}, 0).wait(1).to({
			x: -251.2
		}, 0).wait(1).to({
			x: -251.7
		}, 0).wait(1).to({
			x: -252.3
		}, 0).wait(1).to({
			x: -252.9
		}, 0).wait(1).to({
			x: -253.4
		}, 0).wait(1).to({
			x: -254
		}, 0).wait(1).to({
			x: -254.6
		}, 0).wait(1).to({
			x: -255.1
		}, 0).wait(1).to({
			x: -255.7
		}, 0).wait(1).to({
			x: -256.2
		}, 0).wait(1).to({
			x: -256.8
		}, 0).wait(1).to({
			x: -257.4
		}, 0).wait(1).to({
			x: -257.9
		}, 0).wait(1).to({
			x: -258.5
		}, 0).wait(1).to({
			x: -259.1
		}, 0).wait(1).to({
			x: -259.6
		}, 0).wait(1).to({
			x: -260.2
		}, 0).wait(1).to({
			x: -260.7
		}, 0).wait(1).to({
			x: -261.3
		}, 0).wait(1).to({
			x: -261.9
		}, 0).wait(1).to({
			x: -262.4
		}, 0).wait(1).to({
			x: -263
		}, 0).wait(1).to({
			x: -263.6
		}, 0).wait(1).to({
			x: -264.1
		}, 0).wait(1).to({
			x: -264.7
		}, 0).wait(1).to({
			x: -265.2
		}, 0).wait(1).to({
			x: -265.8
		}, 0).wait(1).to({
			x: -266.4
		}, 0).wait(1).to({
			x: -266.9
		}, 0).wait(1).to({
			x: -267.5
		}, 0).wait(1).to({
			x: -268.1
		}, 0).wait(1).to({
			x: -268.6
		}, 0).wait(1).to({
			x: -269.2
		}, 0).wait(1).to({
			x: -269.7
		}, 0).wait(1).to({
			x: -270.3
		}, 0).wait(1).to({
			x: -270.9
		}, 0).wait(1).to({
			x: -271.4
		}, 0).wait(1).to({
			x: -272
		}, 0).wait(1).to({
			x: -272.6
		}, 0).wait(1).to({
			x: -273.1
		}, 0).wait(1).to({
			x: -273.7
		}, 0).wait(1).to({
			x: -274.2
		}, 0).wait(1).to({
			x: -274.8
		}, 0).wait(1).to({
			x: -275.4
		}, 0).wait(1).to({
			x: -275.9
		}, 0).wait(1).to({
			x: -276.5
		}, 0).wait(1));

		// Layer_5
		this.instance_1 = new lib.hihna_1();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-254.7, 7.2, 1, 1, 0, 0, 0, 189.8, 8.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
			regX: 172.9,
			x: -271
		}, 0).wait(1).to({
			x: -270.5
		}, 0).wait(1).to({
			x: -269.9
		}, 0).wait(1).to({
			x: -269.3
		}, 0).wait(1).to({
			x: -268.8
		}, 0).wait(1).to({
			x: -268.2
		}, 0).wait(1).to({
			x: -267.7
		}, 0).wait(1).to({
			x: -267.1
		}, 0).wait(1).to({
			x: -266.5
		}, 0).wait(1).to({
			x: -266
		}, 0).wait(1).to({
			x: -265.4
		}, 0).wait(1).to({
			x: -264.8
		}, 0).wait(1).to({
			x: -264.3
		}, 0).wait(1).to({
			x: -263.7
		}, 0).wait(1).to({
			x: -263.2
		}, 0).wait(1).to({
			x: -262.6
		}, 0).wait(1).to({
			x: -262
		}, 0).wait(1).to({
			x: -261.5
		}, 0).wait(1).to({
			x: -260.9
		}, 0).wait(1).to({
			x: -260.3
		}, 0).wait(1).to({
			x: -259.8
		}, 0).wait(1).to({
			x: -259.2
		}, 0).wait(1).to({
			x: -258.7
		}, 0).wait(1).to({
			x: -258.1
		}, 0).wait(1).to({
			x: -257.5
		}, 0).wait(1).to({
			x: -257
		}, 0).wait(1).to({
			x: -256.4
		}, 0).wait(1).to({
			x: -255.8
		}, 0).wait(1).to({
			x: -255.3
		}, 0).wait(1).to({
			x: -254.7
		}, 0).wait(1).to({
			x: -254.2
		}, 0).wait(1).to({
			x: -253.6
		}, 0).wait(1).to({
			x: -253
		}, 0).wait(1).to({
			x: -252.5
		}, 0).wait(1).to({
			x: -251.9
		}, 0).wait(1).to({
			x: -251.3
		}, 0).wait(1).to({
			x: -250.8
		}, 0).wait(1).to({
			x: -250.2
		}, 0).wait(1).to({
			x: -249.7
		}, 0).wait(1).to({
			x: -249.1
		}, 0).wait(1).to({
			x: -248.5
		}, 0).wait(1).to({
			x: -248
		}, 0).wait(1).to({
			x: -247.4
		}, 0).wait(1).to({
			x: -246.8
		}, 0).wait(1).to({
			x: -246.3
		}, 0).wait(1).to({
			x: -245.7
		}, 0).wait(1).to({
			x: -245.2
		}, 0).wait(1).to({
			x: -244.6
		}, 0).wait(1).to({
			x: -244
		}, 0).wait(1).to({
			x: -243.5
		}, 0).wait(1).to({
			x: -242.9
		}, 0).wait(1).to({
			x: -242.3
		}, 0).wait(1).to({
			x: -241.8
		}, 0).wait(1).to({
			x: -241.2
		}, 0).wait(1).to({
			x: -240.7
		}, 0).wait(1).to({
			x: -240.1
		}, 0).wait(1).to({
			x: -239.5
		}, 0).wait(1).to({
			x: -239
		}, 0).wait(1).to({
			x: -238.4
		}, 0).wait(1));

		// Layer_4
		this.instance_2 = new lib.hihna_1();
		this.instance_2.parent = this;
		this.instance_2.setTransform(196, 46.5, 1, 1, 0, 0, 0, 189.8, 8.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
			regX: 172.9,
			x: 178.5
		}, 0).wait(1).to({
			x: 177.9
		}, 0).wait(1).to({
			x: 177.4
		}, 0).wait(1).to({
			x: 176.8
		}, 0).wait(1).to({
			x: 176.2
		}, 0).wait(1).to({
			x: 175.7
		}, 0).wait(1).to({
			x: 175.1
		}, 0).wait(1).to({
			x: 174.5
		}, 0).wait(1).to({
			x: 174
		}, 0).wait(1).to({
			x: 173.4
		}, 0).wait(1).to({
			x: 172.9
		}, 0).wait(1).to({
			x: 172.3
		}, 0).wait(1).to({
			x: 171.8
		}, 0).wait(1).to({
			x: 171.2
		}, 0).wait(1).to({
			x: 170.7
		}, 0).wait(1).to({
			x: 170.1
		}, 0).wait(1).to({
			x: 169.5
		}, 0).wait(1).to({
			x: 169
		}, 0).wait(1).to({
			x: 168.4
		}, 0).wait(1).to({
			x: 167.8
		}, 0).wait(1).to({
			x: 167.3
		}, 0).wait(1).to({
			x: 166.7
		}, 0).wait(1).to({
			x: 166.2
		}, 0).wait(1).to({
			x: 165.6
		}, 0).wait(1).to({
			x: 165
		}, 0).wait(1).to({
			x: 164.5
		}, 0).wait(1).to({
			x: 163.9
		}, 0).wait(1).to({
			x: 163.3
		}, 0).wait(1).to({
			x: 162.8
		}, 0).wait(1).to({
			x: 162.2
		}, 0).wait(1).to({
			x: 161.7
		}, 0).wait(1).to({
			x: 161.1
		}, 0).wait(1).to({
			x: 160.5
		}, 0).wait(1).to({
			x: 160
		}, 0).wait(1).to({
			x: 159.4
		}, 0).wait(1).to({
			x: 158.8
		}, 0).wait(1).to({
			x: 158.3
		}, 0).wait(1).to({
			x: 157.7
		}, 0).wait(1).to({
			x: 157.2
		}, 0).wait(1).to({
			x: 156.6
		}, 0).wait(1).to({
			x: 156
		}, 0).wait(1).to({
			x: 155.5
		}, 0).wait(1).to({
			x: 154.9
		}, 0).wait(1).to({
			x: 154.3
		}, 0).wait(1).to({
			x: 153.8
		}, 0).wait(1).to({
			x: 153.2
		}, 0).wait(1).to({
			x: 152.7
		}, 0).wait(1).to({
			x: 152.1
		}, 0).wait(1).to({
			x: 151.5
		}, 0).wait(1).to({
			x: 151
		}, 0).wait(1).to({
			x: 150.4
		}, 0).wait(1).to({
			x: 149.8
		}, 0).wait(1).to({
			x: 149.3
		}, 0).wait(1).to({
			x: 148.7
		}, 0).wait(1).to({
			x: 148.2
		}, 0).wait(1).to({
			x: 147.6
		}, 0).wait(1).to({
			x: 147
		}, 0).wait(1).to({
			x: 146.5
		}, 0).wait(1).to({
			x: 145.9
		}, 0).wait(1));

		// Layer 1
		this.instance_3 = new lib.hihna_1();
		this.instance_3.parent = this;
		this.instance_3.setTransform(163, 6.9, 1, 1, 0, 0, 0, 189.8, 8.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
			regX: 172.9,
			x: 146.7
		}, 0).wait(1).to({
			x: 147.3
		}, 0).wait(1).to({
			x: 147.8
		}, 0).wait(1).to({
			x: 148.4
		}, 0).wait(1).to({
			x: 149
		}, 0).wait(1).to({
			x: 149.5
		}, 0).wait(1).to({
			x: 150.1
		}, 0).wait(1).to({
			x: 150.7
		}, 0).wait(1).to({
			x: 151.2
		}, 0).wait(1).to({
			x: 151.8
		}, 0).wait(1).to({
			x: 152.3
		}, 0).wait(1).to({
			x: 152.9
		}, 0).wait(1).to({
			x: 153.5
		}, 0).wait(1).to({
			x: 154
		}, 0).wait(1).to({
			x: 154.6
		}, 0).wait(1).to({
			x: 155.2
		}, 0).wait(1).to({
			x: 155.7
		}, 0).wait(1).to({
			x: 156.3
		}, 0).wait(1).to({
			x: 156.8
		}, 0).wait(1).to({
			x: 157.4
		}, 0).wait(1).to({
			x: 158
		}, 0).wait(1).to({
			x: 158.5
		}, 0).wait(1).to({
			x: 159.1
		}, 0).wait(1).to({
			x: 159.7
		}, 0).wait(1).to({
			x: 160.2
		}, 0).wait(1).to({
			x: 160.8
		}, 0).wait(1).to({
			x: 161.3
		}, 0).wait(1).to({
			x: 161.9
		}, 0).wait(1).to({
			x: 162.5
		}, 0).wait(1).to({
			x: 163
		}, 0).wait(1).to({
			x: 163.6
		}, 0).wait(1).to({
			x: 164.2
		}, 0).wait(1).to({
			x: 164.7
		}, 0).wait(1).to({
			x: 165.3
		}, 0).wait(1).to({
			x: 165.8
		}, 0).wait(1).to({
			x: 166.4
		}, 0).wait(1).to({
			x: 167
		}, 0).wait(1).to({
			x: 167.5
		}, 0).wait(1).to({
			x: 168.1
		}, 0).wait(1).to({
			x: 168.7
		}, 0).wait(1).to({
			x: 169.2
		}, 0).wait(1).to({
			x: 169.8
		}, 0).wait(1).to({
			x: 170.3
		}, 0).wait(1).to({
			x: 170.9
		}, 0).wait(1).to({
			x: 171.5
		}, 0).wait(1).to({
			x: 172
		}, 0).wait(1).to({
			x: 172.6
		}, 0).wait(1).to({
			x: 173.1
		}, 0).wait(1).to({
			x: 173.7
		}, 0).wait(1).to({
			x: 174.2
		}, 0).wait(1).to({
			x: 174.8
		}, 0).wait(1).to({
			x: 175.4
		}, 0).wait(1).to({
			x: 175.9
		}, 0).wait(1).to({
			x: 176.5
		}, 0).wait(1).to({
			x: 177
		}, 0).wait(1).to({
			x: 177.6
		}, 0).wait(1).to({
			x: 178.2
		}, 0).wait(1).to({
			x: 178.7
		}, 0).wait(1).to({
			x: 179.3
		}, 0).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-445.5, -1.8, 798.5, 57);


	(lib.trukki = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_1
		this.instance = new lib.Symbol4();
		this.instance.parent = this;
		this.instance.setTransform(160, 95.4, 1, 1, 0, 0, 0, 160, 95.4);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({
			_off: false
		}, 0).wait(1).to({
			regY: 95.3,
			x: 157,
			y: 95.3
		}, 0).wait(1).to({
			x: 153.9
		}, 0).wait(1).to({
			x: 150.8
		}, 0).wait(1).to({
			x: 147.7
		}, 0).wait(1).to({
			x: 144.6
		}, 0).wait(1).to({
			x: 141.5
		}, 0).wait(1).to({
			x: 138.4
		}, 0).wait(1).to({
			x: 135.3
		}, 0).wait(1).to({
			x: 132.3
		}, 0).wait(1).to({
			x: 129.2
		}, 0).wait(1).to({
			x: 126.1
		}, 0).wait(1).to({
			x: 123
		}, 0).wait(1).to({
			x: 119.9
		}, 0).wait(1).to({
			x: 116.8
		}, 0).wait(1).to({
			x: 113.7
		}, 0).wait(1).to({
			x: 110.6
		}, 0).wait(1).to({
			x: 107.5
		}, 0).wait(1).to({
			x: 104.5
		}, 0).wait(1).to({
			x: 101.4
		}, 0).wait(1).to({
			x: 98.3
		}, 0).wait(1).to({
			x: 95.2
		}, 0).wait(1).to({
			x: 92.1
		}, 0).wait(1).to({
			x: 89
		}, 0).wait(1).to({
			x: 85.9
		}, 0).wait(1).to({
			x: 82.8
		}, 0).wait(1).to({
			x: 79.7
		}, 0).wait(1).to({
			x: 76.7
		}, 0).wait(1).to({
			x: 73.6
		}, 0).wait(1).to({
			x: 70.5
		}, 0).wait(1).to({
			x: 67.4
		}, 0).wait(1).to({
			x: 64.3
		}, 0).wait(1).to({
			x: 61.2
		}, 0).wait(1).to({
			x: 58.1
		}, 0).wait(1).to({
			x: 55
		}, 0).wait(1).to({
			x: 51.9
		}, 0).wait(1).to({
			x: 48.9
		}, 0).wait(1).to({
			x: 45.8
		}, 0).wait(1).to({
			x: 42.7
		}, 0).wait(1).to({
			x: 39.6
		}, 0).wait(1).to({
			x: 36.5
		}, 0).wait(1).to({
			x: 33.4
		}, 0).wait(1).to({
			x: 30.3
		}, 0).wait(1).to({
			x: 27.2
		}, 0).wait(1).to({
			x: 24.1
		}, 0).wait(1).to({
			x: 21.1
		}, 0).wait(1).to({
			x: 18
		}, 0).wait(1).to({
			x: 14.9
		}, 0).wait(1).to({
			x: 11.8
		}, 0).wait(1).to({
			x: 8.7
		}, 0).wait(1).to({
			x: 5.6
		}, 0).wait(1).to({
			x: 2.5
		}, 0).wait(1).to({
			x: -0.6
		}, 0).wait(1).to({
			x: -3.7
		}, 0).wait(1).to({
			x: -6.7
		}, 0).wait(1).to({
			x: -9.8
		}, 0).wait(1).to({
			x: -12.9
		}, 0).wait(1).to({
			x: -16
		}, 0).wait(1).to({
			x: -19.1
		}, 0).wait(1).to({
			x: -22.2
		}, 0).wait(1).to({
			x: -25.3
		}, 0).wait(1).to({
			x: -28.4
		}, 0).wait(1).to({
			x: -31.4
		}, 0).wait(1).to({
			x: -34.5
		}, 0).wait(1).to({
			x: -37.6
		}, 0).wait(1).to({
			x: -40.7
		}, 0).wait(1).to({
			x: -43.8
		}, 0).wait(1).to({
			x: -46.9
		}, 0).wait(1).to({
			x: -50
		}, 0).wait(1).to({
			x: -53.1
		}, 0).wait(1).to({
			x: -56.2
		}, 0).wait(1).to({
			x: -59.2
		}, 0).wait(1).to({
			x: -62.3
		}, 0).wait(1).to({
			x: -65.4
		}, 0).wait(1).to({
			x: -68.5
		}, 0).wait(1).to({
			x: -71.6
		}, 0).wait(1).to({
			x: -74.7
		}, 0).wait(1).to({
			x: -77.8
		}, 0).wait(1).to({
			x: -80.9
		}, 0).wait(1).to({
			x: -84
		}, 0).wait(1).to({
			x: -87
		}, 0).wait(1).to({
			x: -90.1
		}, 0).wait(1).to({
			x: -93.2
		}, 0).wait(1).to({
			x: -96.3
		}, 0).wait(1).to({
			x: -99.4
		}, 0).wait(1).to({
			x: -102.5
		}, 0).wait(1).to({
			x: -105.6
		}, 0).wait(1).to({
			x: -108.7
		}, 0).wait(1).to({
			x: -111.8
		}, 0).wait(1).to({
			x: -114.8
		}, 0).wait(1).to({
			x: -117.9
		}, 0).wait(1).to({
			x: -121
		}, 0).wait(1).to({
			x: -124.1
		}, 0).wait(1).to({
			x: -127.2
		}, 0).wait(1).to({
			x: -130.3
		}, 0).wait(1).to({
			x: -133.4
		}, 0).wait(1).to({
			x: -136.5
		}, 0).wait(1).to({
			x: -139.6
		}, 0).wait(1).to({
			x: -142.6
		}, 0).wait(1).to({
			x: -145.7
		}, 0).wait(1).to({
			x: -148.8
		}, 0).wait(1).to({
			x: -151.9
		}, 0).wait(1).to({
			x: -155
		}, 0).wait(1).to({
			x: -158.1
		}, 0).wait(1).to({
			x: -161.2
		}, 0).wait(1).to({
			x: -164.3
		}, 0).wait(1).to({
			x: -167.4
		}, 0).wait(1).to({
			x: -170.4
		}, 0).wait(1).to({
			x: -173.5
		}, 0).wait(1).to({
			x: -176.6
		}, 0).wait(1).to({
			x: -179.7
		}, 0).wait(1).to({
			x: -182.8
		}, 0).wait(1).to({
			x: -185.9
		}, 0).wait(1).to({
			x: -189
		}, 0).wait(1).to({
			x: -192.1
		}, 0).wait(1).to({
			x: -195.2
		}, 0).wait(1).to({
			x: -198.2
		}, 0).wait(1).to({
			x: -201.3
		}, 0).wait(1).to({
			x: -204.4
		}, 0).wait(1).to({
			x: -207.5
		}, 0).wait(1).to({
			x: -210.6
		}, 0).wait(1).to({
			x: -213.7
		}, 0).wait(1).to({
			x: -216.8
		}, 0).wait(1).to({
			x: -219.9
		}, 0).wait(1).to({
			x: -222.9
		}, 0).wait(1).to({
			x: -226
		}, 0).wait(1).to({
			x: -229.1
		}, 0).wait(1).to({
			x: -232.2
		}, 0).wait(1).to({
			x: -235.3
		}, 0).wait(1).to({
			x: -238.4
		}, 0).wait(1).to({
			x: -241.5
		}, 0).wait(1).to({
			x: -244.6
		}, 0).wait(1).to({
			x: -247.7
		}, 0).wait(1).to({
			x: -250.8
		}, 0).wait(1).to({
			x: -253.8
		}, 0).wait(1).to({
			x: -256.9
		}, 0).wait(1).to({
			x: -260
		}, 0).wait(1).to({
			x: -263.1
		}, 0).wait(1).to({
			x: -266.2
		}, 0).wait(1).to({
			x: -269.3
		}, 0).wait(1).to({
			x: -272.4
		}, 0).wait(1).to({
			x: -275.5
		}, 0).wait(1).to({
			x: -278.5
		}, 0).wait(1).to({
			x: -281.6
		}, 0).wait(1).to({
			x: -284.7
		}, 0).wait(1).to({
			x: -287.8
		}, 0).wait(1).to({
			x: -290.9
		}, 0).wait(1).to({
			x: -294
		}, 0).wait(1).to({
			x: -297.1
		}, 0).wait(1).to({
			x: -300.2
		}, 0).wait(1).to({
			x: -303.3
		}, 0).wait(1).to({
			x: -306.3
		}, 0).wait(1).to({
			x: -309.4
		}, 0).wait(1).to({
			x: -312.5
		}, 0).wait(1).to({
			x: -315.6
		}, 0).wait(1).to({
			x: -318.7
		}, 0).wait(1).to({
			x: -321.8
		}, 0).wait(1).to({
			x: -324.9
		}, 0).wait(1).to({
			x: -328
		}, 0).wait(1).to({
			x: -331.1
		}, 0).wait(1).to({
			x: -334.1
		}, 0).wait(1).to({
			x: -337.2
		}, 0).wait(1).to({
			x: -340.3
		}, 0).wait(1).to({
			x: -343.4
		}, 0).wait(1).to({
			x: -346.5
		}, 0).wait(1).to({
			x: -349.6
		}, 0).wait(1).to({
			x: -352.7
		}, 0).wait(1).to({
			x: -355.8
		}, 0).wait(1).to({
			x: -358.9
		}, 0).wait(1).to({
			x: -361.9
		}, 0).wait(1).to({
			x: -365
		}, 0).wait(1).to({
			x: -368.1
		}, 0).wait(1).to({
			x: -371.2
		}, 0).wait(1).to({
			x: -374.3
		}, 0).wait(1).to({
			x: -377.4
		}, 0).wait(1).to({
			x: -380.5
		}, 0).wait(1).to({
			x: -383.6
		}, 0).wait(1).to({
			x: -386.7
		}, 0).wait(1).to({
			x: -389.7
		}, 0).wait(1).to({
			x: -392.8
		}, 0).wait(1).to({
			x: -395.9
		}, 0).wait(1).to({
			x: -399
		}, 0).wait(1).to({
			x: -402.1
		}, 0).wait(1).to({
			x: -405.2
		}, 0).wait(1).to({
			x: -408.3
		}, 0).wait(1).to({
			x: -411.4
		}, 0).wait(1).to({
			x: -414.4
		}, 0).wait(1).to({
			x: -417.5
		}, 0).wait(1).to({
			x: -420.6
		}, 0).wait(1).to({
			x: -423.7
		}, 0).wait(1).to({
			x: -426.8
		}, 0).wait(1).to({
			x: -429.9
		}, 0).wait(1).to({
			x: -433
		}, 0).wait(1).to({
			x: -436.1
		}, 0).wait(1).to({
			x: -439.2
		}, 0).wait(1).to({
			x: -442.3
		}, 0).wait(1).to({
			x: -445.3
		}, 0).wait(1).to({
			x: -448.4
		}, 0).wait(1).to({
			x: -451.5
		}, 0).wait(1).to({
			x: -454.6
		}, 0).wait(1).to({
			x: -457.7
		}, 0).wait(1).to({
			x: -460.8
		}, 0).wait(1).to({
			x: -463.9
		}, 0).wait(1).to({
			x: -467
		}, 0).wait(1).to({
			x: -470
		}, 0).wait(1).to({
			x: -473.1
		}, 0).wait(1).to({
			x: -476.2
		}, 0).wait(1).to({
			x: -479.3
		}, 0).wait(1).to({
			x: -482.4
		}, 0).wait(1).to({
			x: -485.5
		}, 0).wait(1).to({
			x: -488.6
		}, 0).wait(1).to({
			x: -491.7
		}, 0).wait(1).to({
			x: -494.8
		}, 0).wait(1).to({
			x: -497.8
		}, 0).wait(1).to({
			x: -500.9
		}, 0).wait(1).to({
			x: -504
		}, 0).wait(1).to({
			x: -507.1
		}, 0).wait(1).to({
			x: -510.2
		}, 0).wait(1).to({
			x: -513.3
		}, 0).wait(1).to({
			x: -516.4
		}, 0).wait(1).to({
			x: -519.5
		}, 0).wait(1).to({
			x: -522.6
		}, 0).wait(1).to({
			x: -525.6
		}, 0).wait(1).to({
			x: -528.7
		}, 0).wait(1).to({
			x: -531.8
		}, 0).wait(1).to({
			x: -534.9
		}, 0).wait(1).to({
			x: -538
		}, 0).wait(1).to({
			x: -541.1
		}, 0).wait(1).to({
			x: -544.2
		}, 0).wait(1).to({
			x: -547.3
		}, 0).wait(1).to({
			x: -550.4
		}, 0).wait(1).to({
			x: -553.4
		}, 0).wait(1).to({
			x: -556.5
		}, 0).wait(1).to({
			x: -559.6
		}, 0).wait(1).to({
			x: -562.7
		}, 0).wait(1).to({
			x: -565.8
		}, 0).wait(1).to({
			x: -568.9
		}, 0).wait(1).to({
			x: -572
		}, 0).wait(1).to({
			x: -575.1
		}, 0).wait(1).to({
			x: -578.2
		}, 0).wait(1).to({
			x: -581.2
		}, 0).wait(1).to({
			x: -584.3
		}, 0).wait(1).to({
			x: -587.4
		}, 0).wait(1).to({
			x: -590.5
		}, 0).wait(1).to({
			x: -593.6
		}, 0).wait(1).to({
			x: -596.7
		}, 0).wait(1).to({
			x: -599.8
		}, 0).wait(1).to({
			x: -602.9
		}, 0).wait(1).to({
			x: -606
		}, 0).wait(1).to({
			x: -609
		}, 0).wait(1).to({
			x: -612.1
		}, 0).wait(1).to({
			x: -615.2
		}, 0).wait(1).to({
			x: -618.3
		}, 0).wait(1).to({
			x: -621.4
		}, 0).wait(1).to({
			x: -624.5
		}, 0).wait(1).to({
			x: -627.6
		}, 0).wait(1).to({
			x: -630.7
		}, 0).wait(1).to({
			x: -633.8
		}, 0).wait(1).to({
			x: -636.8
		}, 0).wait(1).to({
			x: -639.9
		}, 0).wait(1).to({
			x: -643
		}, 0).wait(1).to({
			x: -646.1
		}, 0).wait(1).to({
			x: -649.2
		}, 0).wait(1).to({
			x: -652.3
		}, 0).wait(1).to({
			x: -655.4
		}, 0).wait(1).to({
			x: -658.5
		}, 0).wait(1).to({
			x: -661.6
		}, 0).wait(1).to({
			x: -664.6
		}, 0).wait(1).to({
			x: -667.7
		}, 0).wait(1).to({
			x: -670.8
		}, 0).wait(1).to({
			x: -673.9
		}, 0).wait(1).to({
			x: -677
		}, 0).wait(1).to({
			x: -680.1
		}, 0).wait(1).to({
			x: -683.2
		}, 0).wait(1).to({
			x: -686.3
		}, 0).wait(1).to({
			x: -689.3
		}, 0).wait(1).to({
			x: -692.4
		}, 0).wait(1).to({
			x: -695.5
		}, 0).wait(1).to({
			x: -698.6
		}, 0).wait(1).to({
			x: -701.7
		}, 0).wait(1).to({
			x: -704.8
		}, 0).wait(1).to({
			x: -707.9
		}, 0).wait(1).to({
			x: -711
		}, 0).wait(1).to({
			x: -714.1
		}, 0).wait(1).to({
			x: -717.1
		}, 0).wait(1).to({
			x: -720.2
		}, 0).wait(1).to({
			x: -723.3
		}, 0).wait(1).to({
			x: -726.4
		}, 0).wait(1).to({
			x: -729.5
		}, 0).wait(1).to({
			x: -732.6
		}, 0).wait(1).to({
			x: -735.7
		}, 0).wait(1).to({
			x: -738.8
		}, 0).wait(1).to({
			x: -741.9
		}, 0).wait(1).to({
			x: -744.9
		}, 0).wait(1).to({
			x: -748
		}, 0).wait(1).to({
			x: -751.1
		}, 0).wait(1).to({
			x: -754.2
		}, 0).wait(1).to({
			x: -757.3
		}, 0).wait(1).to({
			x: -760.4
		}, 0).wait(1).to({
			x: -763.5
		}, 0).wait(1).to({
			x: -766.6
		}, 0).wait(1).to({
			x: -769.7
		}, 0).wait(1).to({
			x: -772.7
		}, 0).wait(1).to({
			x: -775.8
		}, 0).wait(1).to({
			x: -778.9
		}, 0).wait(1).to({
			x: -782
		}, 0).wait(1).to({
			x: -785.1
		}, 0).wait(1).to({
			x: -788.2
		}, 0).wait(1).to({
			x: -791.3
		}, 0).wait(1).to({
			x: -794.4
		}, 0).wait(1).to({
			x: -797.5
		}, 0).wait(1).to({
			x: -800.5
		}, 0).wait(1).to({
			x: -803.6
		}, 0).wait(1).to({
			x: -806.7
		}, 0).wait(1).to({
			x: -809.8
		}, 0).wait(1).to({
			x: -812.9
		}, 0).wait(1).to({
			x: -816
		}, 0).wait(1).to({
			x: -819.1
		}, 0).wait(1).to({
			x: -822.2
		}, 0).wait(1).to({
			x: -825.3
		}, 0).wait(1).to({
			x: -828.3
		}, 0).wait(1).to({
			x: -831.4
		}, 0).wait(1).to({
			x: -834.5
		}, 0).wait(1).to({
			x: -837.6
		}, 0).wait(1).to({
			x: -840.7
		}, 0).wait(1).to({
			x: -843.8
		}, 0).wait(1).to({
			x: -846.9
		}, 0).wait(1).to({
			x: -850
		}, 0).wait(1).to({
			x: -853
		}, 0).wait(1).to({
			x: -856.1
		}, 0).wait(1).to({
			x: -859.2
		}, 0).wait(1).to({
			x: -862.3
		}, 0).wait(1).to({
			x: -865.4
		}, 0).wait(1).to({
			x: -868.5
		}, 0).wait(1).to({
			x: -871.6
		}, 0).wait(1).to({
			x: -874.7
		}, 0).wait(1).to({
			x: -877.8
		}, 0).wait(1).to({
			x: -880.8
		}, 0).wait(1).to({
			x: -883.9
		}, 0).wait(1).to({
			x: -887
		}, 0).wait(1).to({
			x: -890.1
		}, 0).wait(1).to({
			x: -893.2
		}, 0).wait(1).to({
			x: -896.3
		}, 0).wait(1).to({
			x: -899.4
		}, 0).wait(1).to({
			x: -902.5
		}, 0).wait(1).to({
			x: -905.6
		}, 0).wait(1).to({
			x: -908.6
		}, 0).wait(1).to({
			x: -911.7
		}, 0).wait(1).to({
			x: -914.8
		}, 0).wait(1).to({
			x: -917.9
		}, 0).wait(1).to({
			x: -921
		}, 0).wait(1).to({
			x: -924.1
		}, 0).wait(1).to({
			x: -927.2
		}, 0).wait(1).to({
			x: -930.3
		}, 0).wait(1).to({
			x: -933.4
		}, 0).wait(1).to({
			x: -936.4
		}, 0).wait(1).to({
			x: -939.5
		}, 0).wait(1).to({
			x: -942.6
		}, 0).wait(1).to({
			x: -945.7
		}, 0).wait(1).to({
			x: -948.8
		}, 0).wait(1).to({
			x: -951.9
		}, 0).wait(1).to({
			x: -955
		}, 0).wait(1).to({
			x: -958.1
		}, 0).wait(1).to({
			x: -961.2
		}, 0).wait(1).to({
			x: -964.2
		}, 0).wait(1).to({
			x: -967.3
		}, 0).wait(1).to({
			x: -970.4
		}, 0).wait(1).to({
			x: -973.5
		}, 0).wait(1).to({
			x: -976.6
		}, 0).wait(1).to({
			x: -979.7
		}, 0).wait(1).to({
			x: -982.8
		}, 0).wait(1).to({
			x: -985.9
		}, 0).wait(1).to({
			x: -989
		}, 0).wait(1).to({
			x: -992
		}, 0).wait(1).to({
			x: -995.1
		}, 0).wait(1).to({
			x: -998.2
		}, 0).wait(1).to({
			x: -1001.3
		}, 0).wait(1).to({
			x: -1004.4
		}, 0).wait(1).to({
			x: -1007.5
		}, 0).wait(1).to({
			x: -1010.6
		}, 0).wait(1).to({
			x: -1013.7
		}, 0).wait(1).to({
			x: -1016.8
		}, 0).wait(1).to({
			x: -1019.8
		}, 0).wait(1).to({
			x: -1022.9
		}, 0).wait(1).to({
			x: -1026
		}, 0).wait(1).to({
			x: -1029.1
		}, 0).wait(1).to({
			x: -1032.2
		}, 0).wait(1).to({
			x: -1035.3
		}, 0).wait(1).to({
			x: -1038.4
		}, 0).wait(1).to({
			x: -1041.5
		}, 0).wait(1).to({
			x: -1044.6
		}, 0).wait(1).to({
			x: -1047.6
		}, 0).wait(1).to({
			x: -1050.7
		}, 0).wait(1).to({
			x: -1053.8
		}, 0).wait(1).to({
			x: -1056.9
		}, 0).wait(1).to({
			x: -1060
		}, 0).wait(1).to({
			x: -1063.1
		}, 0).wait(1).to({
			x: -1066.2
		}, 0).wait(1).to({
			x: -1069.3
		}, 0).wait(1).to({
			x: -1072.3
		}, 0).wait(1).to({
			x: -1075.4
		}, 0).wait(1).to({
			x: -1078.5
		}, 0).wait(1).to({
			x: -1081.6
		}, 0).wait(1).to({
			x: -1084.7
		}, 0).wait(1).to({
			x: -1087.8
		}, 0).wait(1).to({
			x: -1090.9
		}, 0).wait(1).to({
			x: -1094
		}, 0).wait(1).to({
			x: -1097.1
		}, 0).wait(1).to({
			x: -1100.1
		}, 0).wait(1).to({
			x: -1103.2
		}, 0).wait(1).to({
			x: -1106.3
		}, 0).wait(1).to({
			x: -1109.4
		}, 0).wait(1).to({
			x: -1112.5
		}, 0).wait(1).to({
			x: -1115.6
		}, 0).wait(1).to({
			x: -1118.7
		}, 0).wait(1).to({
			x: -1121.8
		}, 0).wait(1).to({
			x: -1124.9
		}, 0).wait(1).to({
			x: -1127.9
		}, 0).wait(1).to({
			x: -1131
		}, 0).wait(1).to({
			x: -1134.1
		}, 0).wait(1).to({
			x: -1137.2
		}, 0).wait(1).to({
			x: -1140.3
		}, 0).wait(1).to({
			x: -1143.4
		}, 0).wait(1).to({
			x: -1146.5
		}, 0).wait(1).to({
			x: -1149.6
		}, 0).wait(1).to({
			x: -1152.7
		}, 0).wait(1).to({
			x: -1155.7
		}, 0).wait(1).to({
			x: -1158.8
		}, 0).wait(1).to({
			x: -1161.9
		}, 0).wait(1).to({
			x: -1165
		}, 0).wait(1).to({
			x: -1168.1
		}, 0).wait(1).to({
			x: -1171.2
		}, 0).wait(1).to({
			x: -1174.3
		}, 0).wait(1).to({
			x: -1177.4
		}, 0).wait(1).to({
			x: -1180.5
		}, 0).wait(1).to({
			x: -1183.5
		}, 0).wait(1).to({
			x: -1186.6
		}, 0).wait(1).to({
			x: -1189.7
		}, 0).wait(1).to({
			x: -1192.8
		}, 0).wait(1).to({
			x: -1195.9
		}, 0).wait(1).to({
			x: -1199
		}, 0).wait(1).to({
			x: -1202.1
		}, 0).wait(1).to({
			x: -1205.2
		}, 0).wait(1).to({
			x: -1208.3
		}, 0).wait(1).to({
			x: -1211.3
		}, 0).wait(1).to({
			x: -1214.4
		}, 0).wait(1).to({
			x: -1217.5
		}, 0).wait(1).to({
			x: -1220.6
		}, 0).wait(1).to({
			x: -1223.7
		}, 0).wait(1).to({
			x: -1226.8
		}, 0).wait(1).to({
			x: -1229.9
		}, 0).wait(1).to({
			x: -1233
		}, 0).wait(1).to({
			x: -1236
		}, 0).wait(1).to({
			x: -1239.1
		}, 0).wait(1).to({
			x: -1242.2
		}, 0).wait(1).to({
			x: -1245.3
		}, 0).wait(1).to({
			x: -1248.4
		}, 0).wait(1).to({
			x: -1251.5
		}, 0).wait(1).to({
			x: -1254.6
		}, 0).wait(1).to({
			x: -1257.7
		}, 0).wait(1).to({
			x: -1260.8
		}, 0).wait(1).to({
			x: -1263.8
		}, 0).wait(1).to({
			x: -1266.9
		}, 0).wait(1).to({
			x: -1270
		}, 0).wait(1).to({
			x: -1273.1
		}, 0).wait(1).to({
			x: -1276.2
		}, 0).wait(1).to({
			x: -1279.3
		}, 0).wait(1).to({
			x: -1282.4
		}, 0).wait(1).to({
			x: -1285.5
		}, 0).wait(1).to({
			x: -1288.6
		}, 0).wait(1).to({
			x: -1291.6
		}, 0).wait(1).to({
			x: -1294.7
		}, 0).wait(1).to({
			x: -1297.8
		}, 0).wait(1).to({
			x: -1300.9
		}, 0).wait(1).to({
			x: -1304
		}, 0).wait(1).to({
			x: -1307.1
		}, 0).wait(1).to({
			x: -1310.2
		}, 0).wait(1).to({
			x: -1313.3
		}, 0).wait(1).to({
			x: -1316.4
		}, 0).wait(1).to({
			x: -1319.4
		}, 0).wait(1).to({
			x: -1322.5
		}, 0).wait(1).to({
			x: -1325.6
		}, 0).wait(1).to({
			x: -1328.7
		}, 0).wait(1).to({
			x: -1331.8
		}, 0).wait(1).to({
			x: -1334.9
		}, 0).wait(1).to({
			x: -1338
		}, 0).wait(1).to({
			x: -1341.1
		}, 0).wait(1).to({
			x: -1344.2
		}, 0).wait(1).to({
			x: -1347.2
		}, 0).wait(1).to({
			x: -1350.3
		}, 0).wait(1).to({
			x: -1353.4
		}, 0).wait(1).to({
			x: -1356.5
		}, 0).wait(1).to({
			x: -1359.6
		}, 0).wait(1).to({
			x: -1362.7
		}, 0).wait(1).to({
			x: -1365.8
		}, 0).wait(1).to({
			x: -1368.9
		}, 0).wait(1).to({
			x: -1372
		}, 0).wait(1).to({
			x: -1375
		}, 0).wait(1).to({
			x: -1378.1
		}, 0).wait(1).to({
			x: -1381.2
		}, 0).wait(1).to({
			x: -1384.3
		}, 0).wait(1).to({
			x: -1387.4
		}, 0).wait(483));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;


	// stage content:
	(lib.animation_test = function (mode, startPosition, loop) {
		if (loop == null) {
			loop = false;
		}
		this.initialize(mode, startPosition, loop, {});

		// antenni
		this.instance = new lib.satelite();
		this.instance.parent = this;
		this.instance.setTransform(1086.7, 215.9, 1.712, 1.712, 0, 0, 0, 40.9, 43.4);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

		// reititin
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ATGHKQk8hul3ghQkCgWl8AEIk5AGIh6AEQhIABgzgEQklgUiNixQgkgtgbhDQgOghgdhaQgVhDgQggQgagzgmgfQgcgXACgpQABgoAZgZQAagaAmABQAiABAeAYQAyApAkBCQAbAyAaBOIAoB4QAbBDAnAmQBEBCByAYQBSARB8gEQGHgKDDAAQFhABENAgQFNAoESBfQAnAOAQAjQAOAggKAkQgKAjgbASQgSALgVAAQgOAAgRgGg");
		this.shape.setTransform(1168.9, 691.1, 1.034, 1.034);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A4IAAhvIBtAAIAABvg");
		this.shape_1.setTransform(1028.3, 670.8, 1.034, 1.034);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("Ag2A4IAAhvIBtAAIAABvg");
		this.shape_2.setTransform(1222.3, 670.8, 1.034, 1.034);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("Ag2A4IAAhvIBtAAIAABvg");
		this.shape_3.setTransform(1246, 670.8, 1.034, 1.034);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AjWDaIAAmzIGtAAIAAGzgAikCnIFIAAIAAlOIlIAAg");
		this.shape_4.setTransform(1234.5, 654, 1.034, 1.034);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AjWDaIAAmzIGtAAIAAGzg");
		this.shape_5.setTransform(1234.5, 654, 1.034, 1.034);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A4IAAhvIBtAAIAABvg");
		this.shape_6.setTransform(1125.8, 670.8, 1.034, 1.034);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("Ag2A4IAAhvIBtAAIAABvg");
		this.shape_7.setTransform(1149.5, 670.8, 1.034, 1.034);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AjWDaIAAmzIGtAAIAAGzgAijCnIFHAAIAAlOIlHAAg");
		this.shape_8.setTransform(1137.7, 654, 1.034, 1.034);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AjWDaIAAmzIGtAAIAAGzg");
		this.shape_9.setTransform(1137.7, 654, 1.034, 1.034);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AjWDaIAAmzIGtAAIAAGzgAikCnIFJAAIAAlOIlJAAg");
		this.shape_10.setTransform(1040.8, 654, 1.034, 1.034);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#000000").s().p("AjWDaIAAmzIGtAAIAAGzg");
		this.shape_11.setTransform(1040.8, 654, 1.034, 1.034);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFCA6D").s().p("AjNA+QgZAAgSgSQgSgSAAgZIAAgBQAAgZASgSQASgSAZAAIGbAAQAZAAASASQASASAAAZIAAABQAAAZgSASQgSASgZAAg");
		this.shape_12.setTransform(1040.3, 306.1, 1.034, 1.034);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FF6D6C").s().p("AjNA+QgZAAgSgSQgSgSAAgZIAAgBQAAgZASgSQASgSAZAAIGbAAQAZAAASASQASASAAAZIAAABQAAAZgSASQgSASgZAAg");
		this.shape_13.setTransform(1234, 306.1, 1.034, 1.034);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFEDB5").s().p("AjNA+QgZAAgSgSQgSgSAAgZIAAgBQAAgZASgSQASgSAZAAIGbAAQAZAAASASQASASAAAZIAAABQAAAZgSASQgSASgZAAg");
		this.shape_14.setTransform(1137.2, 306.1, 1.034, 1.034);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#666666").s().p("EgWPAhDQheAAhBhEQhChEAAhgMAAAg1rQAAjoCfilQCgilDiAAMArAAAAMAAABCFg");
		this.shape_15.setTransform(1136.3, 482, 1.034, 1.034);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_15
			}, {
				t: this.shape_14
			}, {
				t: this.shape_13
			}, {
				t: this.shape_12
			}, {
				t: this.shape_11
			}, {
				t: this.shape_10
			}, {
				t: this.shape_9
			}, {
				t: this.shape_8
			}, {
				t: this.shape_7
			}, {
				t: this.shape_6
			}, {
				t: this.shape_5
			}, {
				t: this.shape_4
			}, {
				t: this.shape_3
			}, {
				t: this.shape_2
			}, {
				t: this.shape_1
			}, {
				t: this.shape
			}]
		}).wait(600));

		// paketti
		this.instance_1 = new lib.pakettihahm();
		this.instance_1.parent = this;
		this.instance_1.setTransform(452.3, -81.4, 0.818, 0.818, 0, 0, 0, 93.5, 52.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
			regX: 93.6,
			regY: 74.8,
			y: -47.5
		}, 0).wait(1).to({
			y: -32
		}, 0).wait(1).to({
			y: -16.5
		}, 0).wait(1).to({
			y: -1
		}, 0).wait(1).to({
			y: 14.5
		}, 0).wait(1).to({
			y: 30
		}, 0).wait(1).to({
			y: 45.6
		}, 0).wait(1).to({
			y: 61.1
		}, 0).wait(1).to({
			y: 76.5
		}, 0).wait(1).to({
			y: 92
		}, 0).wait(1).to({
			y: 107.6
		}, 0).wait(1).to({
			y: 123.1
		}, 0).wait(1).to({
			y: 138.6
		}, 0).wait(1).to({
			y: 154.1
		}, 0).wait(1).to({
			y: 169.6
		}, 0).wait(1).to({
			y: 185.1
		}, 0).wait(1).to({
			y: 200.7
		}, 0).wait(1).to({
			y: 216.2
		}, 0).wait(1).to({
			y: 231.7
		}, 0).wait(1).to({
			y: 247.2
		}, 0).wait(1).to({
			y: 262.7
		}, 0).wait(1).to({
			y: 278.2
		}, 0).wait(1).to({
			y: 293.7
		}, 0).wait(1).to({
			y: 309.3
		}, 0).wait(1).to({
			y: 324.8
		}, 0).wait(1).to({
			y: 340.3
		}, 0).wait(1).to({
			y: 355.8
		}, 0).wait(1).to({
			y: 371.3
		}, 0).wait(1).to({
			y: 386.8
		}, 0).wait(1).to({
			y: 402.3
		}, 0).wait(2).to({
			x: 455.4
		}, 0).wait(1).to({
			x: 459.2
		}, 0).wait(1).to({
			x: 462.9
		}, 0).wait(1).to({
			x: 466.6
		}, 0).wait(1).to({
			x: 470.4
		}, 0).wait(1).to({
			x: 474.1
		}, 0).wait(1).to({
			x: 477.8,
			y: 402.2
		}, 0).wait(1).to({
			x: 481.4
		}, 0).wait(1).to({
			x: 485.1
		}, 0).wait(1).to({
			x: 488.8
		}, 0).wait(1).to({
			x: 492.4
		}, 0).wait(1).to({
			x: 496.1
		}, 0).wait(1).to({
			x: 499.7
		}, 0).wait(1).to({
			x: 503.3
		}, 0).wait(1).to({
			x: 506.9,
			y: 402.1
		}, 0).wait(1).to({
			x: 510.5
		}, 0).wait(1).to({
			x: 514.1
		}, 0).wait(1).to({
			x: 517.6
		}, 0).wait(1).to({
			x: 521.2
		}, 0).wait(1).to({
			x: 524.7
		}, 0).wait(1).to({
			x: 528.3
		}, 0).wait(1).to({
			x: 531.8
		}, 0).wait(1).to({
			x: 535.3,
			y: 402
		}, 0).wait(1).to({
			x: 538.8
		}, 0).wait(1).to({
			x: 542.2
		}, 0).wait(1).to({
			x: 545.7
		}, 0).wait(1).to({
			x: 549.2
		}, 0).wait(1).to({
			x: 552.6
		}, 0).wait(1).to({
			x: 556
		}, 0).wait(1).to({
			x: 559.4,
			y: 401.9
		}, 0).wait(1).to({
			x: 562.8
		}, 0).wait(1).to({
			x: 566.2
		}, 0).wait(1).to({
			x: 569.6
		}, 0).wait(1).to({
			x: 572.9
		}, 0).wait(1).to({
			x: 576.3
		}, 0).wait(1).to({
			x: 579.6
		}, 0).wait(1).to({
			x: 582.9
		}, 0).wait(1).to({
			x: 586.2,
			y: 401.8
		}, 0).wait(1).to({
			x: 589.5
		}, 0).wait(1).to({
			x: 592.8
		}, 0).wait(1).to({
			x: 596.1
		}, 0).wait(1).to({
			x: 599.3
		}, 0).wait(1).to({
			x: 602.6
		}, 0).wait(1).to({
			x: 605.8
		}, 0).wait(1).to({
			x: 609
		}, 0).wait(1).to({
			x: 612.2,
			y: 401.7
		}, 0).wait(1).to({
			x: 615.4
		}, 0).wait(1).to({
			x: 618.6
		}, 0).wait(1).to({
			x: 621.7
		}, 0).wait(1).to({
			x: 624.9
		}, 0).wait(1).to({
			x: 628
		}, 0).wait(1).to({
			x: 631.1
		}, 0).wait(1).to({
			x: 634.2,
			y: 401.6
		}, 0).wait(1).to({
			x: 637.3
		}, 0).wait(1).to({
			x: 640.4
		}, 0).wait(1).to({
			x: 643.5
		}, 0).wait(1).to({
			x: 646.5
		}, 0).wait(1).to({
			x: 649.6
		}, 0).wait(1).to({
			x: 652.6
		}, 0).wait(1).to({
			x: 655.6
		}, 0).wait(1).to({
			x: 658.6,
			y: 401.5
		}, 0).wait(1).to({
			x: 661.6
		}, 0).wait(1).to({
			x: 664.6
		}, 0).wait(1).to({
			x: 667.6
		}, 0).wait(1).to({
			x: 670.5
		}, 0).wait(1).to({
			x: 673.4
		}, 0).wait(1).to({
			x: 676.4
		}, 0).wait(1).to({
			x: 679.3
		}, 0).wait(1).to({
			x: 682.2,
			y: 401.4
		}, 0).wait(1).to({
			x: 685.1
		}, 0).wait(1).to({
			x: 687.9
		}, 0).wait(1).to({
			x: 690.8
		}, 0).wait(1).to({
			x: 693.6
		}, 0).wait(1).to({
			x: 696.5
		}, 0).wait(1).to({
			x: 699.3
		}, 0).wait(1).to({
			x: 702,
			y: 401.3
		}, 0).wait(1).to({
			x: 704.9
		}, 0).wait(1).to({
			x: 707.7
		}, 0).wait(1).to({
			x: 710.4
		}, 0).wait(1).to({
			x: 713.2
		}, 0).wait(1).to({
			x: 716
		}, 0).wait(1).to({
			x: 718.7
		}, 0).wait(1).to({
			x: 721.4
		}, 0).wait(1).to({
			x: 724.1,
			y: 401.2
		}, 0).wait(1).to({
			x: 726.8
		}, 0).wait(1).to({
			x: 729.5
		}, 0).wait(1).to({
			x: 732.2
		}, 0).wait(1).to({
			x: 734.8
		}, 0).wait(1).to({
			x: 737.5
		}, 0).wait(1).to({
			x: 740.1
		}, 0).wait(1).to({
			x: 742.8
		}, 0).wait(1).to({
			x: 745.4,
			y: 401.1
		}, 0).wait(1).to({
			x: 748
		}, 0).wait(1).to({
			x: 750.6
		}, 0).wait(1).to({
			x: 753.2
		}, 0).wait(1).to({
			x: 755.7
		}, 0).wait(1).to({
			x: 758.3
		}, 0).wait(1).to({
			x: 760.8
		}, 0).wait(1).to({
			x: 763.4
		}, 0).wait(1).to({
			x: 765.9,
			y: 401
		}, 0).wait(1).to({
			x: 768.4
		}, 0).wait(1).to({
			x: 770.9
		}, 0).wait(1).to({
			x: 773.4
		}, 0).wait(1).to({
			x: 775.9
		}, 0).wait(1).to({
			x: 778.4
		}, 0).wait(1).to({
			x: 780.9
		}, 0).wait(1).to({
			x: 783.3,
			y: 400.9
		}, 0).wait(1).to({
			x: 785.7
		}, 0).wait(1).to({
			x: 788.2
		}, 0).wait(1).to({
			x: 790.6
		}, 0).wait(1).to({
			x: 793
		}, 0).wait(1).to({
			x: 795.4
		}, 0).wait(1).to({
			x: 797.8
		}, 0).wait(1).to({
			x: 800.2
		}, 0).wait(1).to({
			x: 802.6,
			y: 400.8
		}, 0).wait(1).to({
			x: 804.9
		}, 0).wait(1).to({
			x: 807.3
		}, 0).wait(1).to({
			x: 809.7
		}, 0).wait(1).to({
			x: 812
		}, 0).wait(1).to({
			x: 814.3
		}, 0).wait(1).to({
			x: 816.7
		}, 0).wait(1).to({
			x: 819
		}, 0).wait(1).to({
			x: 821.3,
			y: 400.7
		}, 0).wait(1).to({
			x: 823.5
		}, 0).wait(1).to({
			x: 825.8
		}, 0).wait(1).to({
			x: 828.1
		}, 0).wait(1).to({
			x: 830.4
		}, 0).wait(1).to({
			x: 832.6
		}, 0).wait(1).to({
			x: 834.9
		}, 0).wait(1).to({
			x: 837.1,
			y: 400.6
		}, 0).wait(1).to({
			x: 839.4
		}, 0).wait(1).to({
			x: 841.6
		}, 0).wait(1).to({
			x: 843.8
		}, 0).wait(1).to({
			x: 846
		}, 0).wait(1).to({
			x: 848.2
		}, 0).wait(1).to({
			x: 850.4
		}, 0).wait(1).to({
			x: 852.6
		}, 0).wait(1).to({
			x: 854.8,
			y: 400.5
		}, 0).wait(1).to({
			x: 857
		}, 0).wait(1).to({
			x: 859.2
		}, 0).wait(1).to({
			x: 861.3
		}, 0).wait(1).to({
			x: 863.5
		}, 0).wait(1).to({
			x: 865.6
		}, 0).wait(1).to({
			x: 867.8
		}, 0).wait(1).to({
			x: 869.9
		}, 0).wait(1).to({
			x: 872,
			y: 400.4
		}, 0).wait(1).to({
			x: 874.1
		}, 0).wait(1).to({
			x: 876.3
		}, 0).wait(1).to({
			x: 878.4
		}, 0).wait(1).to({
			x: 880.5
		}, 0).wait(1).to({
			x: 882.6
		}, 0).wait(1).to({
			x: 884.7
		}, 0).wait(1).to({
			x: 886.7
		}, 0).wait(1).to({
			x: 888.8
		}, 0).wait(1).to({
			x: 890.9
		}, 0).wait(1).to({
			x: 893
		}, 0).wait(1).to({
			x: 895
		}, 0).wait(1).to({
			x: 897.1
		}, 0).wait(1).to({
			x: 899.1
		}, 0).wait(1).to({
			x: 901.2
		}, 0).wait(1).to({
			x: 903.2
		}, 0).wait(1).to({
			x: 905.2
		}, 0).wait(1).to({
			x: 907.3
		}, 0).wait(1).to({
			x: 909.3
		}, 0).wait(1).to({
			x: 911.3
		}, 0).wait(1).to({
			x: 913.3
		}, 0).wait(1).to({
			x: 915.3
		}, 0).wait(1).to({
			x: 917.3
		}, 0).wait(1).to({
			x: 919.3
		}, 0).wait(1).to({
			x: 921.3
		}, 0).wait(1).to({
			x: 923.3
		}, 0).wait(1).to({
			x: 925.3
		}, 0).wait(1).to({
			x: 927.3
		}, 0).wait(1).to({
			x: 929.3
		}, 0).wait(1).to({
			x: 931.3
		}, 0).wait(1).to({
			x: 933.2
		}, 0).wait(1).to({
			x: 935.2
		}, 0).wait(1).to({
			x: 937.1
		}, 0).wait(1).to({
			x: 939.1
		}, 0).wait(1).to({
			x: 941
		}, 0).wait(1).to({
			x: 943
		}, 0).wait(1).to({
			x: 944.9
		}, 0).wait(1).to({
			x: 946.9
		}, 0).wait(1).to({
			x: 948.8
		}, 0).wait(1).to({
			x: 950.7
		}, 0).wait(1).to({
			x: 952.7
		}, 0).wait(1).to({
			x: 954.6
		}, 0).wait(1).to({
			x: 956.5
		}, 0).wait(1).to({
			x: 958.4
		}, 0).wait(1).to({
			x: 960.4
		}, 0).wait(1).to({
			x: 962.3
		}, 0).wait(1).to({
			x: 964.2
		}, 0).wait(1).to({
			x: 966.1
		}, 0).wait(1).to({
			x: 968
		}, 0).wait(1).to({
			x: 969.9
		}, 0).wait(1).to({
			x: 971.8
		}, 0).wait(1).to({
			x: 973.7
		}, 0).wait(1).to({
			x: 975.6
		}, 0).wait(1).to({
			x: 977.5
		}, 0).wait(1).to({
			x: 979.4
		}, 0).wait(1).to({
			x: 981.2
		}, 0).wait(1).to({
			x: 983.1
		}, 0).wait(1).to({
			x: 985
		}, 0).wait(1).to({
			x: 986.9
		}, 0).wait(1).to({
			x: 988.8
		}, 0).wait(1).to({
			x: 990.6
		}, 0).wait(1).to({
			x: 992.5
		}, 0).wait(1).to({
			x: 994.4
		}, 0).wait(1).to({
			x: 996.2
		}, 0).wait(1).to({
			x: 998.1
		}, 0).wait(1).to({
			x: 1000
		}, 0).wait(1).to({
			x: 1001.8
		}, 0).wait(1).to({
			x: 1003.7
		}, 0).wait(1).to({
			x: 1005.5
		}, 0).wait(1).to({
			x: 1007.4
		}, 0).wait(1).to({
			x: 1009.2
		}, 0).wait(1).to({
			x: 1011.1
		}, 0).wait(1).to({
			x: 1012.9
		}, 0).wait(1).to({
			x: 1014.8
		}, 0).wait(1).to({
			x: 1016.6
		}, 0).wait(1).to({
			x: 1018.5
		}, 0).wait(1).to({
			x: 1020.3
		}, 0).wait(1).to({
			x: 1022.1
		}, 0).wait(1).to({
			x: 1024
		}, 0).wait(1).to({
			x: 1025.8
		}, 0).wait(1).to({
			x: 1027.6
		}, 0).wait(1).to({
			x: 1029.5
		}, 0).wait(1).to({
			x: 1031.3
		}, 0).wait(1).to({
			x: 1033.1
		}, 0).wait(1).to({
			x: 1035
		}, 0).wait(1).to({
			x: 1036.8
		}, 0).wait(1).to({
			x: 1038.6
		}, 0).wait(1).to({
			x: 1040.4
		}, 0).wait(1).to({
			x: 1042.3
		}, 0).wait(1).to({
			x: 1044.1
		}, 0).wait(1).to({
			x: 1045.9
		}, 0).wait(1).to({
			x: 1047.7
		}, 0).wait(1).to({
			x: 1049.5
		}, 0).wait(1).to({
			x: 1051.4
		}, 0).wait(1).to({
			x: 1053.2
		}, 0).wait(1).to({
			x: 1055
		}, 0).wait(1).to({
			x: 1056.8
		}, 0).wait(1).to({
			x: 1058.6
		}, 0).wait(1).to({
			x: 1060.4
		}, 0).wait(1).to({
			x: 1062.2
		}, 0).wait(1).to({
			x: 1064.1
		}, 0).wait(1).to({
			x: 1065.9
		}, 0).wait(1).to({
			x: 1066.4
		}, 0).wait(20).to({
			_off: true
		}, 1).wait(300));

		// front
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#92CEB5").s().p("AgiB9QgPgOAAgVIAAizQAAgVAPgPQAOgOAUAAQAUAAAPAOQAPAPAAAVIAACzQAAAVgPAOQgPAPgUAAQgUAAgOgPg");
		this.shape_16.setTransform(487.5, 228.8, 0.932, 0.999);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#92CEB5").s().p("Ah3B3QgOgOAAgVQAAgUAOgPICoioQAPgOAUAAQAVAAAOAOQAPAPAAAVQAAAUgPAPIinCnQgPAPgUAAQgVAAgPgPg");
		this.shape_17.setTransform(396.3, 226.7, 0.932, 0.999);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#92CEB5").s().p("AhtBuQgOgOAAgVQAAgVAOgOICViVQAOgOAVAAQAVAAAOAOQAOAOAAAVQAAAVgOAOIiVCVQgOAOgVAAQgVAAgOgOg");
		this.shape_18.setTransform(391.5, 125.9, 0.932, 0.999);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#92CEB5").s().p("AgiB9QgPgPAAgUIAAizQAAgVAPgPQAOgOAUAAQAUAAAPAOQAPAPAAAVIAACzQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
		this.shape_19.setTransform(308.6, 124, 0.932, 0.999);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#92CEB5").s().p("AgiB9QgPgPAAgUIAAizQAAgVAPgPQAOgOAUAAQAUAAAPAOQAPAPAAAVIAACzQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
		this.shape_20.setTransform(211.7, 124, 0.932, 0.999);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#92CEB5").s().p("AgiB9QgPgPAAgUIAAizQAAgVAPgPQAPgOATAAQAVAAAOAOQAOAPAAAVIAACzQAAAUgOAPQgOAPgVAAQgTAAgPgPg");
		this.shape_21.setTransform(114.8, 124, 0.932, 0.999);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#92CEB5").s().p("AgiB9QgOgPAAgUIAAizQAAgVAOgPQAOgOAUAAQAUAAAPAOQAPAPAAAVIAACzQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
		this.shape_22.setTransform(17.9, 124, 0.932, 0.999);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#92CEB5").s().p("AgiB+QgOgQAAgUIAAizQAAgVAOgOQAOgPAUAAQAUAAAPAPQAPAOAAAVIAACzQAAAUgPAQQgPAOgUAAQgUAAgOgOg");
		this.shape_23.setTransform(1261.8, 227.8, 0.932, 0.999);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAOgPAUAAQAVAAAOAPQAOAOAAAVIAACzQAAAUgOAQQgOAOgVAAQgUAAgOgOg");
		this.shape_24.setTransform(1164.9, 227.8, 0.932, 0.999);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAPgPATAAQAVAAAOAPQAPAOAAAVIAACzQAAAUgPAQQgOAOgVAAQgTAAgPgOg");
		this.shape_25.setTransform(1068, 227.8, 0.932, 0.999);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAPgPATAAQAVAAAOAPQAPAOAAAVIAACzQAAAUgPAQQgOAOgVAAQgTAAgPgOg");
		this.shape_26.setTransform(971.1, 227.8, 0.932, 0.999);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAVIAACzQAAAUgPAQQgPAOgUAAQgUAAgOgOg");
		this.shape_27.setTransform(874.2, 227.8, 0.932, 0.999);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAVIAACzQAAAUgPAQQgPAOgUAAQgUAAgOgOg");
		this.shape_28.setTransform(777.3, 227.8, 0.932, 0.999);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#92CEB5").s().p("AgiB+QgOgQAAgUIAAizQAAgVAOgOQAOgPAUAAQAUAAAPAPQAPAOAAAVIAACzQAAAUgPAQQgPAOgUAAQgUAAgOgOg");
		this.shape_29.setTransform(680.4, 227.8, 0.932, 0.999);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#92CEB5").s().p("AgiB+QgPgQAAgUIAAizQAAgVAPgOQAPgPATAAQAVAAAOAPQAOAOAAAVIAACzQAAAUgOAQQgOAOgVAAQgTAAgPgOg");
		this.shape_30.setTransform(583.5, 227.8, 0.932, 0.999);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#92CEB5").s().p("AAAETQgjAAgYgZQgZgZAAgjIAAl8QAAgiAZgZQAYgZAjAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_31.setTransform(1219.9, 45.1, 0.932, 0.999);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#92CEB5").s().p("AAAETQgiAAgZgZQgZgZAAgjIAAl8QAAgiAZgZQAZgZAiAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_32.setTransform(1054, 45.1, 0.932, 0.999);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#92CEB5").s().p("AAAETQgjAAgYgZQgZgZAAgjIAAl8QAAgiAZgZQAYgZAjAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_33.setTransform(888.2, 45.1, 0.932, 0.999);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#92CEB5").s().p("AAAETQgjAAgYgZQgZgZAAgjIAAl8QAAgiAZgZQAYgZAjAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_34.setTransform(722.3, 45.1, 0.932, 0.999);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#92CEB5").s().p("AAAETQgjAAgYgZQgZgZAAgjIAAl8QAAgiAZgZQAYgZAjAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_35.setTransform(556.5, 45.1, 0.932, 0.999);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#92CEB5").s().p("AAAETQgiAAgZgZQgZgZAAgjIAAl8QAAgiAZgZQAZgZAiAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_36.setTransform(390.6, 45.1, 0.932, 0.999);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#92CEB5").s().p("AAAETQgiAAgZgZQgZgZAAgjIAAl8QAAgiAZgZQAZgZAiAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_37.setTransform(224.8, 45.1, 0.932, 0.999);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#92CEB5").s().p("AAAETQgjAAgYgZQgZgZAAgjIAAl8QAAgiAZgZQAYgZAjAAIAAAAQAjAAAZAZQAZAZAAAiIAAF8QAAAjgZAZQgZAZgjAAg");
		this.shape_38.setTransform(59, 45.1, 0.932, 0.999);

		this.instance_2 = new lib.pipelg();
		this.instance_2.parent = this;
		this.instance_2.setTransform(639.5, 44.8, 0.932, 0.999, 0, 0, 0, 683.4, 22.3);
		this.instance_2.alpha = 0.5;

		this.instance_3 = new lib.pipesm();
		this.instance_3.parent = this;
		this.instance_3.setTransform(641.6, 176.2, 0.932, 0.999, 0, 0, 0, 686.5, 62.9);
		this.instance_3.alpha = 0.5;

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#FF6D6C").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
		this.shape_39.setTransform(189.6, 523.6, 0.944, 0.999);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#FFEDB5").s().p("AjrDsQhihiAAiKQAAiJBihhQBihiCJgBQCKABBiBiQBhBhAACJQAACKhhBiQhiBhiKAAQiJAAhihhg");
		this.shape_40.setTransform(190, 524, 0.944, 0.999);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#FFEDB5").s().p("AhCkKQA+AvAiBEQAlBHAABQQAABQglBIQgiBEg+Avg");
		this.shape_41.setTransform(5.2, 524, 0.944, 0.999);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#FFEDB5").s().p("AM7HMIAAheIA5AAIAAldI+zAAIAAhlIezAAIAAjuI+zAAIAAiJMAhMAAAIAAM5IAzAAIAABeg");
		this.shape_42.setTransform(101.6, 635.1, 0.944, 0.999);

		this.instance_4 = new lib.Path_1();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-47, 457, 0.944, 0.999);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#FF6D6C").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
		this.shape_43.setTransform(315.6, 522.6, 0.932, 0.999);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#FFEDB5").s().p("AjrDsQhhhiAAiKQAAiJBhhhQBihjCJABQCKAABiBiQBhBhAACJQAACKhhBiQhiBhiKABQiJgBhihhg");
		this.shape_44.setTransform(315.9, 523, 0.932, 0.999);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#FF6D6C").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
		this.shape_45.setTransform(942.3, 522.6, 0.932, 0.999);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#FFEDB5").s().p("AjqDsQhihigBiKQABiJBihhQBhhjCJABQCKAABiBiQBhBhAACJQAACKhhBiQhiBhiKABQiJgBhhhhg");
		this.shape_46.setTransform(942.6, 523, 0.932, 0.999);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#FF6D6C").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
		this.shape_47.setTransform(735.2, 522.6, 0.932, 0.999);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#FFEDB5").s().p("AjqDsQhihigBiKQABiJBihhQBhhjCJABQCKAABiBiQBhBhAACJQAACKhhBiQhiBhiKABQiJgBhhhhg");
		this.shape_48.setTransform(735.5, 523, 0.932, 0.999);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#FF6D6C").s().p("Ah0B2QgygxAAhFQAAhEAygxQAwgxBEAAQBFAAAxAxQAwAxAABEQAABFgwAxQgxAxhFAAQhEAAgwgxg");
		this.shape_49.setTransform(525.4, 522.6, 0.932, 0.999);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#FFEDB5").s().p("AjqDsQhjhiABiKQgBiJBjhhQBhhjCJABQCKAABiBiQBiBhAACJQAACKhiBiQhiBhiKABQiJgBhhhhg");
		this.shape_50.setTransform(525.7, 523, 0.932, 0.999);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#FFEDB5").s().p("EAyoAHMIAAheIA6AAIAAldMggxAAAIAAFdIAyAAIAABeIkEAAIAAheIA5AAIAAldMggwAAAIAAFdIAzAAIAABeIkFAAIAAheIA6AAIAAldMggxAAAIAAFdIA6AAIAABeIkFAAIAAheIAzAAIAAs5MBrzAAAIAAM5IAzAAIAABegASxhUMAgxAAAIAAjuMggxAAAgAwYhUMAgwAAAIAAjuMggwAAAgEgzhgBUMAgxAAAIAAjuMggxAAAg");
		this.shape_51.setTransform(630.6, 634.1, 0.932, 0.999);

		this.instance_5 = new lib.hihna();
		this.instance_5.parent = this;
		this.instance_5.setTransform(257, 457, 0.932, 0.999);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#4D4D4D").s().p("EhrVALzIAA3lMDWrAAAIAAXlg");
		this.shape_52.setTransform(635.8, 686.7, 0.941, 0.999);

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.shape_52
			}, {
				t: this.instance_5
			}, {
				t: this.shape_51
			}, {
				t: this.shape_50
			}, {
				t: this.shape_49
			}, {
				t: this.shape_48
			}, {
				t: this.shape_47
			}, {
				t: this.shape_46
			}, {
				t: this.shape_45
			}, {
				t: this.shape_44
			}, {
				t: this.shape_43
			}, {
				t: this.instance_4
			}, {
				t: this.shape_42
			}, {
				t: this.shape_41
			}, {
				t: this.shape_40
			}, {
				t: this.shape_39
			}, {
				t: this.instance_3
			}, {
				t: this.instance_2
			}, {
				t: this.shape_38
			}, {
				t: this.shape_37
			}, {
				t: this.shape_36
			}, {
				t: this.shape_35
			}, {
				t: this.shape_34
			}, {
				t: this.shape_33
			}, {
				t: this.shape_32
			}, {
				t: this.shape_31
			}, {
				t: this.shape_30
			}, {
				t: this.shape_29
			}, {
				t: this.shape_28
			}, {
				t: this.shape_27
			}, {
				t: this.shape_26
			}, {
				t: this.shape_25
			}, {
				t: this.shape_24
			}, {
				t: this.shape_23
			}, {
				t: this.shape_22
			}, {
				t: this.shape_21
			}, {
				t: this.shape_20
			}, {
				t: this.shape_19
			}, {
				t: this.shape_18
			}, {
				t: this.shape_17
			}, {
				t: this.shape_16
			}]
		}).wait(600));

		// hakaset
		this.instance_6 = new lib.hakanen();
		this.instance_6.parent = this;
		this.instance_6.setTransform(359.5, 490.4, 1.712, 1.712, 0, 0, 0, 7.7, 7.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(600));

		// trukki
		this.instance_7 = new lib.trukki();
		this.instance_7.parent = this;
		this.instance_7.setTransform(1329.6, 524.6, 1.276, 1.276, 0, 0, 0, 204.7, 122.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(600));

		// tehdas
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#B7FFE0").s().p("EhkJAzWMAAAhmrMDITAAAMAAABmrg");
		this.shape_53.setTransform(640.8, 328);

		this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(600));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(223, 235.7, 1723.5, 886.5);
	// library properties:
	lib.properties = {
		id: '029D1531BEE7404DABC85B40615AE6CD',
		width: 1279,
		height: 720,
		fps: 60,
		color: "#3F3929",
		opacity: 1.00,
		manifest: [{
			src: "images/animation1_atlas_.png",
			id: "animation1_atlas_"
		}],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
	}
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	}
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
	}
	p.getDuration = function () {
		return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
	}

	p.getTimelinePosition = function () {
		return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
	}

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['029D1531BEE7404DABC85B40615AE6CD'] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		}
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function factoryAnimation() {
	canvas = document.getElementById("canvas1");
	anim_container = document.getElementById("factory-animation");
	var comp = AdobeAn.getComposition("029D1531BEE7404DABC85B40615AE6CD");
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) {
		handleFileLoad(evt, comp)
	});
	loader.addEventListener("complete", function (evt) {
		handleComplete(evt, comp)
	});
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && (evt.item.type == "image")) {
		images[evt.item.id] = evt.result;
	}
}

function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({
			"images": [queue.getResult(ssMetadata[i].name)],
			"frames": ssMetadata[i].frames
		})
	}
	canvas.style.display = 'block';
	exportRoot = new lib.animation_test();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();

		function resizeCanvas() {
			var w = lib.properties.width,
				h = lib.properties.height;
			var iw = window.innerWidth,
				ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1,
				xRatio = iw / w,
				yRatio = ih / h,
				sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				} else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w * pRatio * sRatio;
			canvas.height = h * pRatio * sRatio;
			canvas.style.width = anim_container.style.width = w * sRatio + 'px';
			canvas.style.height = anim_container.style.height = h * sRatio + 'px';
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw;
			lastH = ih;
			lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	makeResponsive(true, 'width', true, 2);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}