var app = {
    initialize: function() {
    	var self 						= this;
    	this.registerEvents(); // Register Events
    	this.navigation = applicationNavigation;
    		
        this.store = new WebSqlStore(applicationID, applicationContentDatabase, function() {
        	self.render(); // Use routing to define View
        	self.generateMenu();
        });
    },
    
    render: function() {
    	// Checking for hash - if none present: load HomeView
    	var hash = window.location.hash;
    	hash = hash === "" ? "home" : hash.substr(1); 
		this.store.findById(hash, function(view) {
			$('#media').html(new ContentView(view).render("content").el.html());
			$('#info').html(new ContentView(view).render("info").el.html());

			if(view) { 
				document.title = view.title; // Seitentitel setzen
				// Falls Navigationspfad nicht aktiviert wurde => aktivieren - Kommt bei Direktladen einer Subseite im Web vor
				var item = '#topics li#'+view.id; 
				if($(item).parent().hasClass("active") === false) {
					$(item).addClass("active");
					$(item).children("a").addClass("active");
	        		if($(item).children("a").data("level") == 2) {$(item).parent().parent().addClass('active');}
				}
			}
		});
    },
    
    generateMenu: function() {
    	var self = this;
		$('#topics').html(new ContentView(self.navigation).render("nav").el.html());
        
		// Navigation activation
        $('#topics a').each(function(index,item) { 
        	$(item).bind('click', [], function() {
        		$("#topics li").each(function(index,item){ $(item).removeClass('active'); });
        		$("#topics li a").each(function(index,item){ $(item).removeClass('active'); });
        		$(item).parent().addClass('active');
        		$(item).addClass('active');
        		if($(item).data("level") == 2) {
        			$(item).parent().parent().parent().addClass('active');
        		}
        	});
        });
    },
        
    registerEvents: function() {
     
        // URL Hash-Tag Listener
        $(window).on('hashchange', $.proxy(this.render, this));
        
        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }   	
    },
    
    exit : function() {}
};

app.initialize();