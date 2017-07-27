
 /**
 * Red Bull - Sportsnet Setup - All Pages
 * @version: 3
 * @position: Before </BODY>
 * @rules: All pages
 */
 
//  var f = window.wt_framework = window.wt_framework || {};
// f.searchTermExist = f.searchTermExist || function() {
// 	return (f.getSearchTerm() != false);
// };
// f.getSearchTerm = f.getSearchTerm || function() {
// 	var val = false;
// 	jQuery('.search-query[id!=globalstrapsearchinput]').each(function() { 
// 		val = (!val && jQuery(this).val()) ? jQuery(this).val() : val;
// 	});
// 	return val;
// };
 
jQuery(document).ready(function() {
	
setTimeout(function() {
	
	var f = window.wt_framework = window.wt_framework || {};
	wt.contentId = f.cleanContentid(wt.contentId);
	
jQuery(document)

/************************ PHASE 2 ****************************************************************/

	//LOGO AND HEADER MENU
		
	.off('tracking', ".sn-logo") 
	.on('tracking', ".sn-logo", function(event, data) {
	    data = jQuery.extend(true, data, {ct : window.location.hostname.split('.')[0]+'.redbull.com.logo',ck: {1:'üogo', 2:'header'}} );
	    	setTimeout(function() {
	    	wts.push(["send", "page", {
			
             contentId: window.location.hostname.split('.')[0]+'_redbull_com.index',
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'index'
                      }

                    }]);
          }, 2000);
	})
	
	.off('tracking', 'ul.navbar-menu li:not(.sn-logo)')
	.on('tracking', 'ul.navbar-menu li:not(.sn-logo)', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text();
		//var logo = $item.hasClass('sn-logo');
		if(event.button != 3) {
		data = jQuery.extend(true, data, {ck: {1:'menu', 2:'header'}});

		setTimeout(function() {
			
		wts.push(["send", "page", {
			
          // contentId: (location.href.indexOf('mainsearch') >= 0) ? wt.url2contentId(location.href.substr(0, location.href.lastIndexOf('/'))).replace('.#',''):wt.url2contentId(location.href).replace('.#',''),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
					    3: 'home'
                       }           
                    }]);
          }, 1000);
		}

	})
	
  //SIDEBAR MENU
	
	.off('tracking', "ul.nav-sidebar a, a[ng-click='athleteTeamsExpanded = !athleteTeamsExpanded;']")
	.on('tracking', "ul.nav-sidebar a, a[ng-click='athleteTeamsExpanded = !athleteTeamsExpanded;']", function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().trim().toLowerCase();
		var url = window.location.href;
		var contentGroup4 = cont.split(' ').join('-');
		var activeTab = jQuery('ul.navbar-menu .active a').text().trim().toLowerCase();
		var news = $item.hasClass('sn-news-count');
		data = jQuery.extend(true, data, {ck: {1:'menu', 2:'sidebar'}} );
		
		if(url.indexOf('/projects/') > -1) {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.projects'+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
			
		}
		
		else if(url.indexOf('/esports/') > -1) {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.esports'+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
			
		}
		
		else if(url.indexOf('/tools/') > -1) {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.tools'+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
			
		}
		
		else if(url.indexOf('/motorsports/') > -1) {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.motorsports'+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
			
		}
		
		else if(url.indexOf('/#/index') > -1) {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.home'+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
			
		}
		
		else {
		setTimeout(function() {
		wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.'+activeTab+'.'+contentGroup4,
         
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: ((location.href.indexOf('wiki') > 0) || (location.href.indexOf('profiles') > 0)) ? 'know-how' : location.hash.substr(1).split('/')[1],
						3: ((location.href.indexOf('calendar') > 0) || (location.href.indexOf('mainsearch') > 0)) ? '':location.hash.substr(1).split('/')[2],
						4: contentGroup4,
						5: window.wt_framework.getContentId().split('.')[4]
                      }

                    }]);
          }, 2000);
		}
	})

  
  //ATHLETE NEWS PAGE
   
    .off('tracking', "a[data-ng-click='createNewsItem()']") 
	.on('tracking', "a[data-ng-click='createNewsItem()']", function(event, data) {
		if(location.href.indexOf('/tools/') > -1) {
			data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.news', ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
		}
		else {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athlete.news', ck: {1:'button', 2:'headline', 6:'create'}} );
		}
	})
	
	.off('tracking', "a[data-ng-click='createNewAthlete();']") 
	.on('tracking', "a[data-ng-click='createNewAthlete();']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.and.teams', ck: {1:'button', 2:'headline', 6:'create'}} );
	})
	
	.off('tracking', "a[data-ng-click='createNewEvent();']") 
	.on('tracking', "a[data-ng-click='createNewEvent();']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.upcoming.activites', ck: {1:'button', 2:'headline', 6:'create'}} );
	})
	
  	.linkTrackInit('mousedown', "button[data-ng-click='createNewAthlete()']")
	.off('tracking', "button[data-ng-click='createNewAthlete()']") 
	.on('tracking', "button[data-ng-click='createNewAthlete()']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.and.teams', ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
	})
	
	.off('tracking', "button[data-ng-click='createNewEvent()']") 
	.on('tracking', "button[data-ng-click='createNewEvent()']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.create.new.athletes.and.teams', ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
	})
	
	// https://sportsnet-q.redbull.com/#/athletes/news/view/33664
	.off('tracking', "a[data-ng-click='callFn()']") 
	.on('tracking', "a[data-ng-click='callFn()']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.pdf', ck: {1:'external factsheet', 2:'headline'}} );
	})
	
	.off('tracking', "ul.snAthleteActions li:eq(1)") 
	.on('tracking', "ul.snAthleteActions li:eq(1)", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'print', 2:'headline'}} );
	})
	
		.off('tracking', "a[data-ng-click='cancel();']") 
	.on('tracking', "a[data-ng-click='cancel();']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'download'}} );
	})
	
	// https://sportsnet-q.redbull.com/#/athletes/athlete/list?collaboratorTypes=RBAthlete&collaboratorTypes=Team&exactMatch=true&page=0&size=48&sort=name.name.plain,ASC&semantics=APPROVED
	.off('tracking', "a[data-ng-click='openListModal();']") 
	.on('tracking', "a[data-ng-click='openListModal();']", function(event, data) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.download', ck: {2:'content'}} );
	})
	
	.off('tracking', "a[data-ng-click='close();']") 
	.on('tracking', "a[data-ng-click='close();']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'download'}} );
	})
	
	//https://sportsnet-q.redbull.com/#/athletes/performance/level/view
	
	.off('tracking', "a[data-ng-click='download()']") 
	.on('tracking', "a[data-ng-click='download()']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'download', 2:'content'}} );
	})
	
	//click on Athlete thumbnail
	.off('tracking', ".list-group-item") 
	.on('tracking', ".list-group-item", function(event, data) {
	var url = window.location.href;
      if(url.indexOf('/view/') > -1) {
      	 data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
			setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
      	
      }
  
	})
	
    // ATHLETE PROFILE PAGE
    .off('tracking', 'ul.dropdown-menu.dropdown-menu-left')
	.on('tracking', 'ul.dropdown-menu.dropdown-menu-left', function(event, data) {
    	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'headline', 6:'create'}} );
	 })
	
	// .linkTrackInit('click', 'a.select2-choice') 
	// .off('tracking', 'a.select2-choice') 
	// .on('tracking', 'a.select2-choice', function(event, data) {
	// 		var $this = jQuery(this),
	// 		$item = jQuery(event.target);
	//     	var cont = $item.find(":selected").text();
	//     	 data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'content', 6:cont}} );
	// })
	
	//SEARCH BUTTON (SIDE AND CONTENT)
	.linkTrackInit('mousedown', "button[data-ng-click='search()']")
	.off('tracking', "button[data-ng-click='search()']") 
	.on('tracking', "button[data-ng-click='search()']", function(event, data) {
		var tab = jQuery("ul.nav-tabs li.active").find('a').text();
		var is = jQuery('.sn-text-form-field-input ').val();
		var footer = jQuery('.sn-grid-footer').length;
		if(footer <= 0) {
		if((tab.indexOf('Athletes') > -1)&&(tab.indexOf('Motorsports') < 0)&&(tab.indexOf('E-Sports') < 0)) {
		 data = jQuery.extend(true, data, {internalSearch : is, ct: window.wt.contentId+'.athletes', ck: {1:'search_start', 2:'sidebar-right', 6:'athletes-qsearch'}} );
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'athletes',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'athletes-qsearch'
                      },
          internalSearch : is
                    }]);
          }, 2000);
		}
		
		else if(tab.indexOf('Motorsports') > -1) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.events', ck: {1:'search_start', 2:'sidebar-right', 6:'motorsports-qsearch'}} );
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'motorsports',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'motorsports-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		}
		
		else if(tab.indexOf('E-Sports') > -1) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.events', ck: {1:'search_start', 2:'sidebar-right', 6:'esports-qsearch'}} );
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'e-sports',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'esportssports-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		}
		
		
		else if(tab.indexOf('Events') > -1) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.events', ck: {1:'search_start', 2:'sidebar-right', 6:'events-qsearch'}} );
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'events',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'events-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		}
		if(tab.indexOf('Tools') > -1) {
		 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.tools', ck: {1:'search_start', 2:'sidebar-right', 6:'tools-qsearch'}} );
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'tools',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'tools-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		}
    	}
    	
    	else {
    		if(tab.indexOf('Athletes') > -1) {
		     data = jQuery.extend(true, data, {ct: window.wt.contentId+'.athletes', ck: {1:'search_start', 2:'content', 6:'athletes-search'}} );
		  setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'athlete-and-teams-search'
                      }            

                    }]);
          }, 2000);
		}
		
		else if(tab.indexOf('Events') > -1) {
		     data = jQuery.extend(true, data, {ct: window.wt.contentId+'.events', ck: {1:'search_start', 2:'content', 6:'events-search'}} );
		     setTimeout(function() {
			  wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'event-search'
                      }            

                    }]);
          }, 2000);
		}
		if(tab.indexOf('Tools') > -1) {
		     data = jQuery.extend(true, data, {ct: window.wt.contentId+'.tools', ck: {1:'search_start', 2:'content', 6:'tools-search'}} );
		     setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'tools-search'
                      }            

                    }]);
          }, 2000);
		}
    	}
	})
	
		
  	.linkTrackInit('mousedown', "button[data-ng-click='renderView(calendar.data.state.date, calendar.data, true)']")
	.off('tracking', "button[data-ng-click='renderView(calendar.data.state.date, calendar.data, true)']") 
	.on('tracking', "button[data-ng-click='renderView(calendar.data.state.date, calendar.data, true)']", function(event, data) {
	    var result = jQuery('ul.calendar_list li').length;
	    var is = jQuery('.sidebar-offcanvas input').val();
		 data = jQuery.extend(true, data, {ct: window.location.hostname.split('.')[0]+'_redbull_com_calendar.search', ck: {1:'search_start', 2:'sidebar', 6:'calendar-search'}} );
		 setTimeout(function() {
			  wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.calendar-search',
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'calendar'
                      },
          customParameter:{
                        1: result,
          	            4: 'calendar-search'
                      },
                        internalSearch : is

                    }]);
          }, 4000);
		 
	})
	
	// MAIN SEARCH
	.linkTrackInit('mousedown', "button[data-ng-click='triggerMainSearch(q)']")
	.off('tracking', "button[data-ng-click='triggerMainSearch(q)']") 
	.on('tracking', "button[data-ng-click='triggerMainSearch(q)']", function(event, data) {
		var is = jQuery('.form-control').val();
		 data = jQuery.extend(true, data, {ct : window.location.hostname.split('.')[0]+'.redbull.com.mainsearch.as.search-start', ck: {1:'search_start', 2:'header', 6:'mainsearch'}} );
		 setTimeout(function() {
			  wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.mainsearch',
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'header',
						3: 'mainsearch'
                      },
          customParameter:{
          	            4: 'main-search'
                      },
                        internalSearch : is

                    }]);
          }, 2000);
	})
	
	// FIND MANAGER SEARCH
	.off('tracking', 'ul.dropdown-menu.dropdown-menu-right.btn-block li') 
	.on('tracking', 'ul.dropdown-menu.dropdown-menu-right.btn-block li', function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
		    if((cont.indexOf('Red Bull International') > -1) || (cont.indexOf('All countries') > -1)) {
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'search_start', 2:'sidebar-right', 6:'find-manager'}} );
		      setTimeout(function() {
			  wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.events.event.list',
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1]
                      },
          customParameter:{
          	            4: 'find-manager'
                      }

                    }]);
          }, 2000);
		    }
	})
	
	//KNOW-HOW SEARCH
	.linkTrackInit('mousedown', "button[data-ng-click='quickSearch()']", "button[data-ng-click='quickSearch(searchTerm)']")
	.off('tracking', "button[data-ng-click='quickSearch()']", "button[data-ng-click='quickSearch(searchTerm)']") 
	.on('tracking', "button[data-ng-click='quickSearch()']", "button[data-ng-click='quickSearch(searchTerm)']", function(event, data) {
	     var is = jQuery('.sn-right-inv input').val();
		 data = jQuery.extend(true, data, {ct : window.location.hostname.split('.')[0]+'_redbull_com.wiki.search', ck: {1:'search_start', 2:'content', 6:'know-how-search'}} );
		   setTimeout(function() {
			wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com_wiki.search',
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'know-how',
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'know-how-search'
                      },
                      internalSearch : is

                    }]);
          }, 2000);
	})
	
// 	.linkTrackInit('mousedown',"button[data-ng-click='quickSearch(searchTerm)']")
// 	.off('tracking',"button[data-ng-click='quickSearch(searchTerm)']") 
// 	.on('tracking',"button[data-ng-click='quickSearch(searchTerm)']", function(event, data) {
// 		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'search_start', 2:'content', 6:'know-how-search'}} );
// 	})
	
	//SEARCH FOR ALL OTHER ELEMENTS LIKE CHECKBOX etc.
	
	.linkTrackInit('mousedown','.checkbox-inline')
	.off('tracking','.checkbox-inline') 
	.on('tracking','.checkbox-inline', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase();
		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'search_start', 2:'content', 6:cont}} );
	})
	
	.linkTrackInit('mousedown','.sn-checkbox-list-option-form-input')
	.off('tracking','.sn-checkbox-list-option-form-input') 
	.on('tracking','.sn-checkbox-list-option-form-input', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase();
		var temp = $item.parent().find('span').text().toLowerCase();
		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'search_start', 2:'content', 6:temp}} );
	})
	
	.linkTrackInit('mousedown','.sn-boolean-no-form-field-input')
	.off('tracking','.sn-boolean-no-form-field-input') 
	.on('tracking','.sn-boolean-no-form-field-input', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase();
		var temp = $item.parent().find('span').text().toLowerCase();
		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'search_start', 2:'content', 6:temp}} );
	})
	
	.linkTrackInit('mousedown','.sn-boolean-yes-form-field-input')
	.off('tracking','.sn-boolean-yes-form-field-input') 
	.on('tracking','.sn-boolean-yes-form-field-input', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase();
		var temp = $item.parent().find('span').text().toLowerCase();
		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'search_start', 2:'content', 6:temp}} );
	})
	
	//Select year from athlete
	.linkTrackInit('mousedown','a.select2-choice')
	.off('tracking','a.select2-choice') 
	.on('tracking','a.select2-choice', function(event, data) {
		var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase();
		 data = jQuery.extend(true, data, {ct : window.wt.contentId, ck: {1:'flyout', 2:'content', 6:cont}} );
	})
	

  // PROFILE CLICK (RIGHT-TOP)
  	.off('tracking', "a[data-ng-click='toggleNotifications($event)']") 
	.on('tracking', "a[data-ng-click='toggleNotifications($event)']", function(event, data) {
		 data = jQuery.extend(true, data, {ct : window.location.hostname.split('.')[0]+'.redbull.com.profile', ck: {1:'flyout', 2:'header'}} );
	})
	
	.off('tracking', 'ul#dropdownProfile li:not(:eq(1))')
	.on('tracking', 'ul#dropdownProfile li:not(:eq(1))', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
		var cont = $item.text().toLowerCase().trim().split(' ').join('-');
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:cont}} );
    })
    
    .off('tracking', 'ul#dropdownProfile li:eq(1)')
	.on('tracking', 'ul#dropdownProfile li:eq(1)', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target)
    	 	data = jQuery.extend(true, data, {ck: {1:'flyout', 2:'header', 6:'profil-view'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2]
					
                       }

                    }]);
          }, 2000);
    })
    
    //SHOW ALL links
    .off('tracking', 'a.pull-right') 
	.on('tracking', 'a.pull-right', function(event, data) {
		 var $this = jQuery(this),
			$item = jQuery(event.target);
	    var cont = $item.text();
	    	data = jQuery.extend(true, data, {ct: window.wt.contentId+'.show.all', ck: {1:'enhanced-options', 2:'headline'}} );
	})
	
	//PRINT (for all)
	// .off('tracking', '.hidden-sm') 
	// .on('tracking', '.hidden-sm', function(event, data) {
	// 	 var $this = jQuery(this),
	// 		$item = jQuery(event.target);
	//     var cont = $item.text();
	// 	 data = jQuery.extend(true, data, {ck: {1:'print', 2:'header'}} );
	    
	// })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	//TOOLS side-button
	.off('tracking', "a[data-ng-click='createNewTool()']") 
	.on('tracking', "a[data-ng-click='createNewTool()']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
	})
	
	//ESports side-buttons
	.off('tracking', "a[data-ng-click='createAthlete()']") 
	.on('tracking', "a[data-ng-click='createAthlete()']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
	})
	
	.off('tracking', "a[data-ng-click='createEvent()']") 
	.on('tracking', "a[data-ng-click='createEvent()']", function(event, data) {
		 data = jQuery.extend(true, data, {ck: {1:'button', 2:'sidebar-right', 6:'create'}} );
	})

	.off('tracking', "ul.dropdown-menu-right li a[data-ng-click='createAthlete()']") 
	.on('tracking', "ul.dropdown-menu-right li a[data-ng-click='createAthlete()']", function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'flyout', 2:'headline', 6:'create'}} );
	})
	
	.off('tracking', "ul.dropdown-menu-right li a[data-ng-click='createEvent()']") 
	.on('tracking', "ul.dropdown-menu-right li a[data-ng-click='createEvent()']", function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'flyout', 2:'headline', 6:'create'}} );
	})
	
	.off('tracking', "ul.dropdown-menu-right li a[data-ng-click='createNewsItem()']") 
	.on('tracking', "ul.dropdown-menu-right li a[data-ng-click='createNewsItem()']", function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'flyout', 2:'headline', 6:'create'}} );
	})
	
	.off('tracking', "a[data-ng-click='createOverview()']") 
	.on('tracking', "a[data-ng-click='createOverview()']", function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'flyout', 2:'headline', 6:'create'}} );
	})
	
	.off('tracking', "li[data-ng-if='withPrint']") 
	.on('tracking', "li[data-ng-if='withPrint']", function(event, data) {
			var $this = jQuery(this),
			$item = jQuery(event.target);
		    var cont = $item.text();
	    	 data = jQuery.extend(true, data, {ct: window.wt.contentId+'.'+cont, ck: {1:'print', 2:'content'}} );
	})
	
	//All search on pressing Enter key
	
	//main search
	.off('keyup', '.form-control') 
	.on('keyup', '.form-control', function(event, data) {
	var is = jQuery('.form-control').val();
	   if (is != "") {
		if (event.keyCode == 13) {
	   
		 setTimeout(function() {
			  wts.push(["send", "page", {
			
          contentId: window.location.hostname.split('.')[0]+'_redbull_com.mainsearch',
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'mainsearch'
                      },
          customParameter:{
          	            4: 'main-search'
                      },
                        internalSearch : is

                    }]);
          }, 2000);
	}
	   }
	})
	
	//qsearch
// 	.off('keydown', '.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty') 
// 	.on('keydown', '.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty', function(event, data) {
// 	var is = jQuery('.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty').val();
// 	var location = window.location.href;
// 	  	if (event.keyCode == 13) {
// 	   if(location.indexOf('/esports/') > -1) {
// 		 setTimeout(function() {
// 			  wts.push(["send", "page", {
			
//           contentId: window.location.hostname.split('.')[0]+'_redbull_com.esports.search',
//           contentGroup:{
// 						1: window.location.hostname.split('.')[0],
// 						2: 'esports',
// 						3: 'esports-qsearch'
//                       },
//           customParameter:{
//           	            4: 'qsearch'
//                       },
//                         internalSearch : is

//                     }]);
//           }, 2000);
// 		}
		    
// 		}
	  
// 	})
	

    .off('keydown', '.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty') 
 	.on('keydown', '.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty', function(event, data) {
		var tab = jQuery("ul.nav-tabs li.active").find('a').text();
		var is = jQuery('.sn-text-form-field-input.form-control.ng-valid.ng-valid-required.ng-dirty').val();
		var footer = jQuery('.sn-grid-footer').length;
		if (event.keyCode == 13) {
		if(footer <= 0) {
		if((tab.indexOf('Athletes') > -1)&&(tab.indexOf('Motorsports') < 0)&&(tab.indexOf('E-Sports') < 0)) {
		 	if (event.keyCode == 13) {
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'athletes',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'athletes-qsearch'
                      },
          internalSearch : is
                    }]);
          }, 2000);
		
		}  
		}
		
		else if(tab.indexOf('Motorsports') > -1) {
		 	
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'motorsports',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'motorsports-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		
		}
		
		else if(tab.indexOf('E-Sports') > -1) {
		 	
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'e-sports',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'esportssports-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		
		}
		
		else if(tab.indexOf('Events') > -1) {
		 	
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'events',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'events-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		
		}
		
		else if(tab.indexOf('Tools') > -1) {
			
		 setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: 'tools',
						3: 'quicksearch'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'tools-qsearch'
                      },
                        internalSearch : is
                    }]);
          }, 2000);
		
    	}
		}
		
    	else {
    		if(tab.indexOf('Athletes') > -1) {
		     
		  setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'athlete-and-teams-search'
                      }            

                    }]);
          }, 2000);
		}
		
		else if(tab.indexOf('Events') > -1) {
		   
		     setTimeout(function() {
			  wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'event-search'
                      }            

                    }]);
          }, 2000);
		}
		if(tab.indexOf('Tools') > -1) {
		    
		     setTimeout(function() {
			wts.push(["send", "page", {
			
          //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'')+'.'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[2],
						3: 'search'
                      },
          customParameter:{
          	            1: jQuery('.sn-grid-header h2').text().match(/\d+/)[0],
          	            4: 'tools-search'
                      }            

                    }]);
          }, 2000);
		}
    	}
    } //Enter key ends here
	})
	
	///////////////////////////////////////// after test on 20.07... all page-impressions should be implemented ///////////////////////////////////////////////////////////////////////////
	
	
	.off('tracking', '.eventsTableHorizontalWrapper td')
	.on('tracking', '.eventsTableHorizontalWrapper td', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);

          }, 2000);
    
	  })
	
	
	.off('tracking', '.table-fix-float td')
	.on('tracking', '.table-fix-float td', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
		var href = window.location.href;
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
			  
    })
	
	
	// .off('tracking', '.slickSliderLeading')
	// .on('tracking', '.slickSliderLeading', function(event, data) {
	//   	var $this = jQuery(this),
	// 		$item = jQuery(event.target)
 //   	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
 //   	 	setTimeout(function() {
	// 		wts.push(["send", "page", {
			
 //        //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
 //         contentGroup:{
	// 					1: window.location.hostname.split('.')[0],
	// 					2: location.hash.substr(1).split('/')[1],
	// 					3: location.hash.substr(1).split('/')[2],
	// 					4: location.hash.substr(1).split('/')[3],
	// 					5: 'id-'+location.hash.substr(1).split('/')[4]
					
 //                      }

 //                   }]);
 //         }, 2000);
 //   })
    
    .off('tracking', '.slick-list')
	.on('tracking', '.slick-list', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
			if(href.indexOf('/view/') < 0)
			{
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
	}	
	})
	
	.off('tracking', '#sn-grid-body')
	.on('tracking', '#sn-grid-body', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
			if((href.indexOf('/mainsearch/') > -1) || (href.indexOf('/athletes/performance/competitionOverview/view') > -1))
			{
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
	}	
	})
	
	.off('tracking', 'ul.list-group')
	.on('tracking', 'ul.list-group', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
			if((href.indexOf('/index/news/list?') > -1) || (href.indexOf('/athletes/athlete/logos/list?') > -1) || (href.indexOf('/athletes/activities/list-projects?endsAfter') > -1) || 
			(href.indexOf('/athletes/activities/list-activations?endsAfter') > -1) || (href.indexOf('/events/event/logos/list?') > -1) || (href.indexOf('/events/news/list?') > -1) ||
			(href.indexOf('/events/teamrooms') > -1) || (href.indexOf('/activities/list-competitions?') > -1) || (href.indexOf('/events/event/list?') > -1) || (href.indexOf('/athletes/athlete/list?') > -1)
			|| (href.indexOf('/athletes/news/list?') > -1) || (href.indexOf('/tools/news/list?') > -1) || (href.indexOf('/tools/tool/list-athlete-tools/') > -1) || 
			(href.indexOf('/wiki/search/') > -1) || (href.indexOf('/index/teamrooms') > -1))
			
			{
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
	}	
	})
	
	.off('tracking', '.table-hover td')
	.on('tracking', '.table-hover td', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
			if((href.indexOf('/athletes/activities/list-results?') > -1) || (href.indexOf('/events/event/list?') > -1)) 
			{
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
	}	
	})
	
	.off('tracking', '#calendarView')
	.on('tracking', '#calendarView', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
			if(href.indexOf('/calendar/day/') > -1) 
			{
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
	}	
	})
	
 	.off('tracking', '.table-striped td')
	.on('tracking', '.table-striped td', function(event, data) {
	   	var $this = jQuery(this),
			$item = jQuery(event.target);
			var href = window.location.href;
    	 	data = jQuery.extend(true, data, {ck: {1:'link', 2:'content'}} );
    	 	setTimeout(function() {
			wts.push(["send", "page", {
			
         //contentId: wt.url2contentId(location.href).replace(wt.url2contentId(location.href).substring(17,20),'').replace('_html','')+'.12'+location.href.match(/\d+$/),
          contentGroup:{
						1: window.location.hostname.split('.')[0],
						2: location.hash.substr(1).split('/')[1],
						3: location.hash.substr(1).split('/')[2],
						4: location.hash.substr(1).split('/')[3],
						5: 'id-'+location.hash.substr(1).split('/')[4]
					
                       }

                    }]);
          }, 2000);
    
		
	})	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  }, 400);  
    
     
 });