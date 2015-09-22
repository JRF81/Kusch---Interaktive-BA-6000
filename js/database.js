var applicationContentDatabase = [
                // ********************* Startseite *********************                 
            	{
            		"id": 				"home",
            		"category":	"Startseite",
            		"title":			"6000 São Paulo",
            		"content":	'html#' +
			            				'<img id="intro_image" src="img/intro/001.png" style="width:600px;"/>'+
										'<canvas id="intro_canvas" style="position: absolute; left: 0px; width: 600px; height: 480px;"></canvas>'+
										'<br/>'+			
										'<div id="intro_scrubber">'+
											'<div id="intro_progress" data-status="180">&#149;</div>'+
										'</div>'+
										
										'<div id="intro_markers">'+
											'<a class="intro_marker" data-status="22" data-position="110/100" data-delta="-30/-15" data-target="110/100" href="#kleiderbuegel">Kleiderbügel</a>'+
											'<a class="intro_marker" data-status="66" data-position="130/220" data-delta="-30/-10" data-target="130/220" href="#lumbalstuetze">Lumbalstütze</a>'+
											'<a class="intro_marker" data-status="110" data-position="50/270" data-delta="-20/-5" data-target="50/270" href="#synchronmechanik">Dual-Synchron-<br/>mechanik</a>'+
											'<a class="intro_marker" data-status="154" data-position="180/305" data-delta="-20/-5" data-target="180/305" href="#sitzhoehe">Sitzhöhe</a>'+
								
											'<a class="intro_marker" data-status="206" data-position="360/305" data-delta="20/5" data-target="360/305" href="#sitzneigung">Sitzneigung</a>'+
											'<a class="intro_marker" data-status="250" data-position="390/270" data-delta="20/5" data-target="390/270" href="#sitztiefe">Sitztiefe</a>'+
											'<a class="intro_marker" data-status="294" data-position="380/220" data-delta="30/10" data-target="380/220" href="#armlehne">Armlehnen</a>'+
											'<a class="intro_marker" data-status="338" data-position="400/100" data-delta="30/15" data-target="400/100" href="#nackenstuetze">Nackenstütze</a>'+
										'</div>',
            		"sidebar":	'headline#'+
            							'<p class="headline">'+
					            			'F i t&nbsp;&nbsp; s e i n&nbsp;&nbsp; u n d<br/>'+
					            			'g e s ü n d e r&nbsp;&nbsp; s i t z e n !<br/><br/>'+
					            			'S o &nbsp;&nbsp;s t e l l e n &nbsp;&nbsp; S i e&nbsp;&nbsp; I h r e n<br/>'+
					            			'B ü r o d r e h s t u h l<br/>'+
					            			'r i c h t i g &nbsp;&nbsp;a u f &nbsp;&nbsp;s i c h&nbsp;&nbsp; e i n<br/>'+
				            			'</p>'+
				            			'<img class="certs" src="img/logos.jpg"/>'

            	},
            	
            	// ********************* Sitzposition *********************
            	{
            		"id": 				"sitzposition",
            		"category":	"Standardausstattung",
            		"title":			"Die korrekte Sitzposition",
            		"content":	'image#<img src="img/sitzposition.png" style="width:600px;"/>',
            		"sidebar":	'instruction#'+
            							'<div class="infotext">'+
											'<img src="img/sitzposition_pikto.png" style="height: 168px;"/>'+
											'<p>'+
												'Die ideale Sitzposition:<br/>'+
												'Das Becken aufgerichtet,<br/>'+
												'die Wirbelsäule gestreckt,<br/>'+
												'der Brustkorb gehoben,<br/>'+
												'der Kopf ausbalanciert, die<br/>'+
												'Körperhaltung im Gleichgewicht.'+
											'</p>'+
										'</div>'
            	},
            	{
            		"id": 				"sitzhoehe",
            		"category":	"Standardausstattung",
            		"title":			"Sitzhöhe einstellen",
            		"content":	"video#sitzhoehe",
            		"sidebar":	'instruction#'+
            							'<img src="img/sitzhoehe_p.png" style="height: 168px;"/>'+
            							'<p>'+
            								'Ober- und Unterschenkel bilden einen Winkel von mindestens 90°'+
            							'</p>'+
            							'<ul>'+
            							'<li>Platz nehmen</li>'+
            							'<li>Rechts vordere Taste herausziehen</li>'+
            							'<li>Sitzhöhe durch Be- und Entlasten verändern</li>'+
            							'<li>Taste bei Erreichen entsprechender Höhe loslassen</li>'+
            							'</ul>'
            	},
            	{
            		"id": 				"sitztiefe",
            		"category":	"Standardausstattung",
            		"title":			"Sitztiefe einstellen",
            		"content":	"video#sitztiefe",
            		"sidebar":	'instruction#'+
            							'<img src="img/sitztiefe_p.png" style="height: 168px;"/>'+
            							'<p>'+
            								'Zwei bis drei Finger Abstand zwischen Unterschenkel und Vorderkante Sitz'+
            							'</p>'+
            							'<ul>'+
            							'<li>Platz nehmen</li>'+
            							'<li>Links hintere Taste herausziehen</li>'+
            							'<li>Sitz nach vorn/hinten verschieben</li>'+
            							'<li>In entsprechender Position Taste loslassen</li>'+
            							'</ul>'
            	},
            	
            	// ********************* DS-Mechanik *********************
            	{
            		"id": 				"synchronmechanik",
            		"category":	"Standardausstattung",
            		"title":			"Die Dual-Synchronmechanik",
            		"content":	'image#<img src="img/synchronmechanik_render.png" style="width:600px;"/>',
            		"sidebar":	'instruction#'+
            							'<img src="img/synchronmechanik_pikto.png" style="height: 168px;"/>'+
            							'<p>'+
            							'Die Technik für aktiv-dynamisches Sitzen.<br/>'+
            							'Sitz- und Rückenlehne folgen den Körperbewegungen und sorgen in jeder Sitzposition für permanente Abstützung.'+ 
            							'Denn mehr Bewegung hält Kreislauf und Stoffwechsel in Schwung.'+
            							'</p>'
            	},
            	{
            		"id": 				"freigeben",
            		"category":	"Standardausstattung",
            		"title":			"Freigeben und Feststellen der Dual-Synchronmechanik",
            		"content":	'video#freigeben',
            		"sidebar":	'instruction#'+
            							'<img src="img/freigeben_pikto.png" style="height: 168px;"/>'+
            							'<p>'+
            							'Freigeben für bewegtes Sitzen:'+
            							'</p>'+
            							'<ul>'+
										'<li>Platz nehmen</li>'+
										'<li>Links vordere Taste eindrücken</li>'+
										'</ul>'+
										'Kurzzeitig Feststellen in 5 Positionen:<br/>'+
										'<ul>'+
										'<li>Gewünschte Sitzstellung einnehmen</li>'+
										'<li>Links vordere Taste herausziehen</li>'+
										'</ul>'
            	},
            	{
            		"id": 				"gegendruck",
            		"category":	"Standardausstattung",
            		"title":			"Einstellen des Rückengegendrucks",
            		"content":	'video#gegendruck',
            		"sidebar":	'instruction#'+
            							'<img src="img/rueckengegendruck_pikto.png" style="height: 168px;"/>'+
            							'<p>'+
            							'Je schwerer der Mensch, umso stärker der Gegendruck der Rückenlehne. Justieren nach Körpergewicht und angenehmen Empfinden.'+
            							'</p>'+
            							'<ul>'+
            							'<li>Platz nehmen</li>'+
            							'<li>Rechts Drehrad betätigen</li>'+
            							'<li>Gegendruck stärker <img src="img/uz.png" style="width: 15px;"></li>'+
            							'<li>Gegendruck geringer <img src="img/uz.png" style="width: 15px;'+
            							'-moz-transform: scaleX(-1);'+
            							'-o-transform: scaleX(-1);'+
            							'-webkit-transform: scaleX(-1);'+
            							'transform: scaleX(-1);'+
            							'filter: FlipH;'+
            							'-ms-filter: \'FlipH\';'+
            							'"></li>'+
            							'</ul>'
            	},
            	{
            		"id": 				"sitzneigung",
            		"category":	"Standardausstattung",
            		"title":			"Einstellen der weiteren Sitzneigung",
            		"content":	'video#sitzneigung',
            		"sidebar":	'instruction#'+
            							'<img src="img/sitzneigung_pikto.png" style="height: 168px;"/>'+
            							'<p>'+
										'Nach vorn um 3° tiefere Sitzneigung (empfohlen  <br/>bei längerer aufrechter Sitzposition,  z. B. Tastaturarbeit).'+
										'</p>'+
										'<ul>'+
										'<li>Platz nehmen, bei freigegebener Dual-Synchronmechanik nach hinten lehnen</li>'+
										'<li>Links vorn erst Ansatz-Taste nach oben, dann Taste nach innen drücken</li>'+
										'<li>Sitz vorn belasten</li>'+
										'</ul>'
            	},
            	
            	// ********************* Lumbalstütze *********************
            	{
            		"id": 				"lumbalstuetze",
            		"category":	"Optionen",
            		"title":			"Die Lumbalstütze",
            		"content":	'image#<img src="img/lumbalstuetze_render.png" style="width:600px;"/>',
            		"sidebar":	'instruction#'+
            							'<img src="img/lumbalstuetze.png" style="height: 168px;"/>'+
            							'<p>'+
										'Abstützung des Lendenwirbelbereichs in etwa auf Gürtellinie.'+
										'</p>'
            	},
            	{
            		"id": 				"lumbalhoehe",
            		"category":	"Optionen",
            		"title":			"Einstellen der Abstützungshöhe",
            		"content":	'video#lumbalhoehe',
            		"sidebar":	'instruction#'+
            							'<img src="img/lumbalhoehe_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Abstützung des Lendenwirbelbereichs in etwa auf Gürtellinie.'+
										'</p>'+
										'<ul>'+
										'<li>Verschieben nach oben / unten</li>'+
										'</ul>'
            	},
            	{
            		"id": 				"lumbaltiefe",
            		"category":	"Optionen",
            		"title":			"Einstellen der Abstützungsstärke",
            		"content":	'video#lumbaltiefe',
            		"sidebar":	'instruction#'+
            							'<img src="img/lumbaltiefe_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Abstützung des Lendenwirbelbereichs in etwa auf Gürtellinie.'+
										'</p>'+
										'<ul>'+
										'<li>Abstützung erhöhen <img src="img/uz.png" style="width: 15px;"></li>'+
										'<li>Abstützung verringern <img src="img/uz.png" style="width: 15px;'+
										'-moz-transform: scaleX(-1);'+
										'-o-transform: scaleX(-1);'+
										'-webkit-transform: scaleX(-1);'+
										'transform: scaleX(-1);'+
										'filter: FlipH;'+
										'-ms-filter: \'FlipH\';'+
										'">'+
										'</li>'+
										'</ul>'
            	},
            	
            	// ********************* Armlehnen *********************
            	{
            		"id": 				"armlehne",
            		"category":	"Optionen",
            		"title":			"Die Armlehnen",
            		"content":	'image#<img src="img/armlehne_render.png" style="width:600px;"/>',
            		"sidebar":	'instruction#'+
            							'<img src="img/armlehne.png" style="height: 168px;"/>'+
            							'<p>'+
										'An die Körperstatur angepasste Position der Armlehnen für eine punktuelle Auflage der Ellenbogen zur Entlastung der Arm- und Schultermuskulatur.'+
										'</p>'
            	},
            	{
            		"id": 				"lehnenhoehe",
            		"category":	"Optionen",
            		"title":			"Einstellen der Armlehnenhöhe",
            		"content":	'video#armlehnehoehe',
            		"sidebar":	'instruction#'+
            							'<img src="img/lehnenhoehe_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Armlehnenhöhe in der Regel etwas unterhalb der Tischplattenhöhe, die Unterarme liegen entspannt auf.'+
										'</p>'+
										'<ul>'+
										'<li>Knopf eindrücken</li>'+
										'<li>Verschieben nach oben / unten</li>'+
										'</ul>'
            	},
            	{
            		"id": 				"lehnenbreite",
            		"category":	"Optionen",
            		"title":			"Einstellen der Armlehnenbreite",
            		"content":	'video#armlehnebreite',
            		"sidebar":	'instruction#'+
            							'<img src="img/lehnenbreite_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Angepasst an die Körperbreite. Nicht zu eng, nicht zu weit. Bei entspannt vom Körper hängenden Armen liegen die Unterarme bequem auf.'+
										'</p>'+
										'<ul>'+
										'<li>Griff nach unten entriegeln</li>'+
										'<li>Armlehnenträger herausziehen / einschieben</li>'+
										'<li>In entsprechender Position<br/>Hebel nach oben verriegeln</li>'+
										'</ul>'
            	},
            	{
            		"id": 				"lehnenwinkel",
            		"category":	"Optionen",
            		"title":			"Einstellen von Tiefe und Winkel der Armlehnen",
            		"content":	'video#armlehnetiefewinkel',
            		"sidebar":	'instruction#'+
            							'<img src="img/lehnenwinkel_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Ergonomisch günstige Position zum bequemen Bedienen von Tastatur und Maus<br/>(optional bei 3D Armlehnen)'+
										'</p>'+
										'<ul>'+
										'<li><strong>Tiefe:</strong> von Hand Verschieben nach vorn / hinten</li>'+
										'<li><strong>Winkel:</strong> von Hand nach <br/>links / rechts in Richtung der Maus</li>'+
										'</ul>'
            	},
            	
            	// ********************* Nackenstütze *********************
            	{
            		"id": 				"nackenstuetze",
            		"category":	"Optionen",
            		"title":			"Die Nackenstütze",
            		"content":	'video#kopfstuetze',
            		"sidebar":	'instruction#'+
            							'<img src="img/nackenstuetze_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Abstützung der Hals- und Nackenmuskulatur, angepasst an Statur und  Empfinden.'+
										'</p>'+
										'<ul>'+
										'<li><strong>Neigung:</strong> Knopf drücken, nach vorne / hinten schwenken</li>'+
										'<li><strong>Höhe:</strong> über Rasterung von Hand nach oben / unten schieben</li>'+
										'</ul>'
            	},
            	
            	// ********************* Kleiderbügel *********************
            	{
            		"id": 				"kleiderbuegel",
            		"category":	"Optionen",
            		"title":			"Der Kleiderbügel",
            		"content":	'video#kleiderbuegel',
            		"sidebar":	'instruction#'+
            							'<img src="img/kleiderbuegel_pikto.png" style="height: 168px;"/>'+
					    				'<p>'+
					    				'Jacken und Jacketts ordentlich und kleiderschonend direkt am Arbeitsplatz aufhängen.'+
										'</p>'+
										'<ul>'+
										'<li><strong>Ausklappen:</strong> von Hand nach unten herausschwenken und einrasten</li>'+
										'</ul>'
            	},
            	
            	// ********************* Hinweise *********************
            	{
            		"id": 				"hinweise",
            		"category":	"Wichtig",
            		"title":			"Wichtige Hinweise",
            		"content":	'html#'+
            							'<div style="display: inline-block; float:left; padding-right: 15px;">'+
						    				'<br/>'+
						    				'<img src="img/hinweis1.png" style="width: 195px;"><br/><br/>'+
						    				'<img src="img/hinweis2.png" style="width: 195px;"><br/><br/>'+
						    				'<img src="img/hinweis3.png" style="width: 90px;">'+
						    			'</div>'+
						    			'<div style="display: inline-block;width: 50%">'+
						    				'<strong>Rollen:</strong><br/>'+
						    				'Nur an den Fußboden angepasste Sicherheitsrollen verwenden, bei Bodenwechsel austauschen:'+
						    				'<ul style="padding-left: 15px; margin: 0px;">'+
						    					'<li>Weiche Rollen für harte Böden</li>'+
						    					'<li>Harte Rollen für weiche Böden</li>'+
						    				'</ul>'+
						    				'<br/>'+
						    				'<strong>Gefahrenhinweis:</strong><br/>'+
						    				'Stuhl nur bestimmungsgemäß verwenden.'+
						    				'<ul style="padding-left: 15px; margin: 0px;">'+
						    					'<li>Arbeiten an der Gasfeder nur durch autorisiertes Fachpersonal</li>'+
						    				'</ul>'+
						    				'<br/><br/><br/><br/><br/><br/><br/>'+			
						    				'<strong>Reinigung:</strong><br/>'+
						    				'<ul style="padding-left: 15px; margin: 0px;">'+
						    					'<li>Per Staubsauger oder weicher Bürste 1 x jährlich</li>'+
						    					'<li>Zur Entfernung von Verschmutzungen/Flecken'+
						    					'bitte unseren Pflege-Guide Bezug-Materialien anfordern.'+
						    					'</li>'+
						    				'</ul>'+
						    			'</div>',
            		"sidebar":	''
            	}
];