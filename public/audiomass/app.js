(function ( w, d ) {
	'use strict';

	var _v = '0.9',
		_id = -1;

	function PKAE () {
		console.log("1");
		var q = this; // keeping track of current context
		console.log("2");

		q.el = null; // reference of main html element
		q.id = ++_id; // auto incremental id
		q._deps = {}; // dependencies

		w.PKAudioList[q.id] = q;

		console.log(q);
		var events = {};
		console.log("3");

		q.fireEvent = function ( eventName, value, value2 ) {
			console.log(eventName)
			var group = events[eventName];
			if (!group) return (false);

			var l = group.length;
			while (l-- > 0) {
				group[l] && group[l] ( value, value2 );
			}
		};

		q.listenFor = function ( eventName, callback ) {
			//console.log(eventName);
			if (!events[eventName])
				events[eventName] = [ callback ];
			else
				events[eventName].unshift ( callback  );
		};
		console.log("4");

		q.stopListeningFor = function ( eventName, callback ) {
			var group = events[eventName];
			if (!group) return (false);

			var l = group.length;
			while (l-- > 0) {
				if (group[l] && group[l] === callback) {
					group[l] = null; break;
				}
			}
		};

		q.stopListeningForName = function ( eventName ) {
			var group = events[eventName];
			if (!group) return (false);
			events[eventName] = null;
		};

		q.init = function ( el_id ) {
			var el = d.getElementById( el_id );
			if (!el) {
				console.log ('invalid element');
				return ;
			}
			q.el = el;

			console.log("5");

			// console.log(q.el);


			// init libraries
			q.ui = new q._deps.ui ( q );
			q._deps.uifx ( q );
			q.engine = new q._deps.engine ( q );
			q.state  = new q._deps.state ( 4, q );
			q.rec    = new q._deps.rec ( q );
			q.fls    = new q._deps.fls ( q );


			// nothing gets run in LiveServer

			if (w.location.href.split('local=')[1]) {
				var sess = w.location.href.split('local=')[1];

				console.log("dave");
				q.fls.Init (function () {
					q.fls.GetSession (sess, function ( e ) {
						if(e && e.id === sess )
						{
							q.engine.LoadDB ( e );
						}
					});
				});
			}

			return (q);
		};

		// check if we are mobile and hide tooltips on hover
		q.isMobile = (/iphone|ipod|ipad|android/).test
			(navigator.userAgent.toLowerCase ());
	};

	!w.PKAudioList && (w.PKAudioList = []);

	// ideally we do not want a global singleto refferencing our audio tool
	// but since this is a limited demo we can safely do it.
	w.PKAudioEditor = new PKAE ();

	PKAudioList.push (w.PKAudioEditor); // keeping track in the audiolist array of our instance


	console.log(w.PKAudioEditor);
})( window, document );