// jQuery flexImages v1.0.0
// https://github.com/Pixabay/jQuery-snapPuzzle
! function (t) {
	t.fn.snapPuzzle = function (a) {
		function s(a) {
			var s = "sp_" + (new Date).getTime(),
				e = a.wrap('<span class="snappuzzle-wrap"/>').closest("span"),
				i = a.attr("src"),
				p = a.width() / o.columns,
				l = a.height() / o.rows,
				n = t(o.pile).addClass("snappuzzle-pile"),
				h = n.width() - p,
				r = n.height() - l;
			o.puzzle_class = s, a.data("options", o);
			for (var d = 0; d < o.rows; d++)
				for (var c = 0; c < o.columns; c++) t('<div class="snappuzzle-piece ' + s + '"/>').data("pos", d + "_" + c).css({
					width: p,
					height: l,
					position: "absolute",
					left: Math.floor(Math.random() * (h + 1)),
					top: Math.floor(Math.random() * (r + 1)),
					zIndex: Math.floor(10 * Math.random() + 1),
					backgroundImage: "url(" + i + ")",
					backgroundPosition: -c * p + "px " + -d * l + "px",
					backgroundSize: a.width()
				}).draggable({
					start: function () {
						t(this).removeData("slot")
					},
					stack: ".snappuzzle-piece",
					containment: o.containment
				}).appendTo(n).data("lastSlot", n), t('<div class="snappuzzle-slot ' + s + '"/>').data("pos", d + "_" + c).css({
					width: p,
					height: l,
					left: c * p,
					top: d * l
				}).appendTo(e).droppable({
					accept: "." + s,
					hoverClass: "snappuzzle-slot-hover",
					drop: function (e, i) {
						var p = t(this).data("pos");
						return t(".snappuzzle-piece." + s).each(function () {
							t(this).data("slot") == p && (p = !1)
						}), p ? (i.draggable.data("lastSlot", t(this)).data("slot", p), i.draggable.position({
							of: t(this),
							my: "left top",
							at: "left top"
						}), void(i.draggable.data("pos") == p && (i.draggable.addClass("correct"), t(this).droppable("disable").css("opacity", 1).fadeOut(1e3), i.draggable.css({
							opacity: 0,
							cursor: "default"
						}).draggable("disable"), t(".snappuzzle-piece.correct." + s).length == o.rows * o.columns && o.onComplete(a)))) : !1
					}
				})
		}
		var o = t.extend({
			pile: "",
			containment: "document",
			rows: 5,
			columns: 5,
			onComplete: function () {}
		}, a);
		return "string" == typeof a ? (this.each(function () {
			var s = t(this),
				o = s.data("options"),
				e = s.width() / o.columns,
				i = s.height() / o.rows,
				p = t(o.pile),
				l = p.width() - e,
				n = p.height() - i,
				h = s.closest("span").offset(),
				r = p.offset();
			"destroy" == a ? (t("." + o.puzzle_class).remove(), s.unwrap().removeData("options"), p.removeClass("snappuzzle-pile")) : "refresh" == a && (t(".snappuzzle-slot." + o.puzzle_class).each(function () {
				var a = t(this).data("pos").split("_"),
					s = a[0],
					o = a[1];
				t(this).css({
					width: e,
					height: i,
					left: o * e,
					top: s * i
				})
			}), t(".snappuzzle-piece." + o.puzzle_class).each(function () {
				if (t(this).data("slot")) {
					var a = t(this).data("slot").split("_"),
						o = a[0],
						p = a[1],
						a = t(this).data("pos").split("_"),
						d = a[0],
						c = a[1];
					t(this).css({
						width: e,
						height: i,
						left: p * e + h.left - r.left,
						top: o * i + h.top - r.top,
						backgroundPosition: -c * e + "px " + -d * i + "px",
						backgroundSize: s.width()
					})
				} else {
					var a = t(this).data("pos").split("_"),
						u = a[0],
						f = a[1];
					t(this).css({
						width: e,
						height: i,
						left: Math.floor(Math.random() * (l + 1)),
						top: Math.floor(Math.random() * (n + 1)),
						backgroundPosition: -f * e + "px " + -u * i + "px",
						backgroundSize: s.width()
					})
				}
			}))
		}), this) : this.each(function () {
			this.complete ? s(t(this)) : t(this).load(function () {
				s(t(this))
			})
		})
	}
}(jQuery);