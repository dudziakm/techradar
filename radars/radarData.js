//This is the title for your window tab, and your Radar
document.title = "Technology Radar for Quality Assurance (September 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':200,'name':'Use'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Remove'}
                 //,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
		
		//Use
			{"name":"Pair Testing", "pc":{"r":170,"t":150},"movement":"c"},
            {"name":"Page Object", "pc":{"r":130,"t":170},"movement":"c"},
            {"name":"Code Review", "pc":{"r":170,"t":115},"movement":"c"},
            {"name":"Automation Tests for Bugs", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
            {"name":"Automation Tests for Stories", "pc":{"r":180,"t":105},"movement":"c"},
			{"name":"API testing", "pc":{"r":140,"t":125},"movement":"c"},
		
		//Assess:            
            {"name":"Pairing QA + DEV", "pc":{"r":250,"t":165},"movement":"c"},    
            {"name":"Community of Practice", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Testing Dojo", "pc":{"r":280,"t":110},"movement":"c"}, 
            
		//Remove:
            {"name":"Only Manual testing approach", "pc":{"r":330,"t":110},"movement":"c"},
            {"name":"Manual Scenarios", "pc":{"r":330,"t":140},"movement":"c"},            
        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
		//Use
		  { name: 'Visual Studio 2015', pc: { r: 170, t: 19 }, movement: 'c' },
		  { name: 'Git Kraken',    pc: { r: 150, t: 40 },    movement: 'c' },
		  { name: 'ReSharper',    pc: { r: 110, t: 50 },    movement: 'c'}, 
		  { name: 'TeamCity',    pc: { r: 150, t: 60 },    movement: 'c' },
		  { name: 'VSO',    pc: { r: 110, t: 70 },    movement: 'c' }, 
		
		//Assess:      
		  { name: 'Enterprise Architect',    pc: { r: 280, t: 64 },    movement: 'c' },  
		  { name: 'Microsoft Test Manager',    pc: { r: 280, t: 74 },    movement: 'c' },
		  { name: 'Trello',    pc: { r: 260, t: 85 },    movement: 'c' },
		  { name: 'JMeter',    pc: { r: 260, t: 48 },    movement: 'c' },
		  { name: 'SoapUI', pc: { r: 280, t: 40 }, movement: 'c' },
		  { name: 'HP QC',    pc: { r: 280, t: 25 },    movement: 'c' },		  

    	//Remove:
		//  { name: 'AppManager ',    pc: { r: 360, t: 82 },    movement: 'c' },
		//  { name: 'Hibernate ',    pc: { r: 380, t: 56 },    movement: 'c' },
		//  { name: 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' }, 
		//  { name: 'Subversion',    pc: { r: 330, t: 18 },    movement: 'c' }
  ]
    },
    { "quadrant": "Languages",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
		//Use
            {"name":"C#", "pc":{"r":130,"t":200},"movement":"c"},   
            {"name":"TypeScript", "pc":{"r":130,"t":220},"movement":"c"},
            
		//Assess
            { name: 'JavaScript',              pc: { r: 260, t: 265 },              movement: 'c' },
         //   { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
         //   { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },            
            		
		//Remove
			{"name":"Java", "pc":{"r":340,"t":200},"movement":"c"}
        ]
    },
    { "quadrant": "Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
		//Use
            { name: 'Protractor', pc: { r: 100, t: 300 },  movement: 'c' },
            { name: 'NUnit', pc: { r: 100, t: 320 },  movement: 'c' },
            { name: 'Selenium Webdriver', pc: { r: 100, t: 280 },  movement: 'c' },
        //Assess
            {"name":"Jasmine", "pc":{"r":280,"t":300},"movement":"c"},
            { name: 'OWIN', pc: { r: 260, t: 330 },  movement: 'c' },
		
		//Remove
			{ name: 'Microsoft UnitTesting',    pc: { r: 360, t: 300 },    movement: 'c' },
			//{ name: 'Hibernate ^',    pc: { r: 380, t: 310 },    movement: 'c' },
			//{ name: 'mongoDB',    pc: { r: 330, t: 320 },    movement: 'c' }, 
			//{ name: 'Subversion',    pc: { r: 330, t: 330 },    movement: 'c' }
        ]
    }
];
