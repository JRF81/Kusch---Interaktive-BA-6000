var ContentView = function(view,hash) {
	this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
	};
	
	this.render = function(key) {
		if(!view) { console.log("View does not exist!"); return this; }
		switch(key) {
			case "content":
				var token				= view.content.indexOf('#');
				var type 					= view.content.substr(0,token);
				var content 			= view.content.substr(token+1);
				view.htmlcontent	= content;
				view.type 				= type;
				switch(type) {
					case "video":
						this.el.html(ContentView.videoTemplate(view));
						break;
					default:
						this.el.html(ContentView.htmlTemplate(view));
						break;
				}
				break;
			case "info":
				var type 					= view.sidebar.split('#')[0];
				var sidebar 			= view.sidebar.split('#')[1];
				view.htmlcontent 	= sidebar;
				view.type 				= type;
				this.el.html(ContentView.htmlTemplate(view));
				break;
			case "nav":
				var obj = {topics:view};
				this.el.html(ContentView.navTemplate(obj));
				break;
		}
	    return this;    	
    };
    
	this.initialize();
};
ContentView.videoTemplate		= Handlebars.compile($("#video-tpl").html());
ContentView.htmlTemplate		= Handlebars.compile($("#html-tpl").html());
ContentView.navTemplate		= Handlebars.compile($("#nav-tpl").html());
