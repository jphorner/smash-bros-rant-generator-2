(this["webpackJsonpsmash-rant-generator"]=this["webpackJsonpsmash-rant-generator"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),s=(a(24),a(19)),c=a(7),l=a(8),h=a(10),d=a(9),u=(a(25),a(11)),m=a(2),b=(a(13),["Can we just talk about ","You know what I hate about ","Am I the only person who can't stand ","Why hasn't Nintendo done anything about ","Why does everyone go so crazy for ","What's the deal with ","Can anyone explain the hype over ","Am I crazy, or does every annoying player main ","Can we all just agree to ban ","Do we REALLY need to keep buffing ","Do you have to be a literal idiot to play "]),j=["I will literally explode if I have to fight another ","Out of all the characters they could have added, of course Nintendo had to choose ","I almost had a good day today, but that was all over the second I had to fight ","The biggest problem in this community isn't toxicity. It's ","I believe most people are good people...that is, unless they main ","I hate this game so much. Nintendo had such a good thing going until they decided to add ","Ever wondered how you can announce to the entire world that you're a complete idiot? Simple. Play ","Tier lists are stupid. Everyone with half a brain knows that the most overpowered character is ","I am SO tired of people making excuses for ","I normally hate to teabag, but I'll always make an exception for ","You know why nobody takes this community seriously? Because people are still maining "],v=["I mean, what kind of a name is that, anyway? ","Seriously, a five-year-old could have picked a better option. ","They look dumb, their moves are dumb, and the people who play them are dumb. ","Is it a requirement that you have to be a massive edgelord to play them? It sure feels like it. ","At this point, I've pretty much lost all respect for Nintendo. ","People whine about the $5.99 meta all the time, but you couldn't PAY me to play this character. ","Like, I get it. You want to be the protagonist, but we all know you're just a scrub. ","I mean, have you seen their FACE? It's almost as ugly as their personality. Almost. ","I've put more hours into this game than I can count, and I can CONFIRM that they going to kill it eventually. ","I'm just going to say it: I want everyone who plays this character dead. Every last one of them. They deserve it. ","But what do I know, right? I'm not a 'real' gamer. I only have a tattoo of Tom Nook ON MY BACK. "],y=a(1),p=function(e){e.alsoAppearsIn,e.availability,e.name,e.images;var t=e.saveRant,a=Math.round(10*Math.random()),n=a%2+1,r=Math.round(1e5*Math.random());return Object(y.jsxs)("div",{className:"rant-card",id:r,children:[Object(y.jsxs)("div",{className:"rant-text-container",children:[Object(y.jsx)("h3",{className:"character-name",id:"characterName",children:e.name}),Object(y.jsxs)("div",{className:"rant-text",id:"rantText",children:[1===n&&Object(y.jsxs)("h4",{children:[b[a],e.name,"? ",v[a]]}),2===n&&Object(y.jsxs)("h4",{children:[j[a],e.name,". ",v[a]]})]})]}),Object(y.jsx)("button",{className:"save-rant-button",onClick:t})]})},f=(a(15),function(e){var t=e.data,a=e.selection,n=e.saveRant,r=[],o=t.find((function(e){return e.name===a}));r.push(o);var i=r.map((function(e){if(e)return Object(y.jsx)(p,{characters:t,name:e.name,alsoAppearsIn:e.alsoAppearsIn,availability:e.availability,order:e.order,saveRant:n},Math.random())}));return Object(y.jsx)("section",{className:"rants-container",children:Object(y.jsx)("div",{className:"rant-display",children:r.length&&i})})}),g=a(14),x=(a(16),["Mario","Donkey Kong","Link","Samus","Dark Samus","Yoshi","Kirby","Fox","Pikachu","Luigi","Ness","Captain Falcon","Jigglypuff","Peach","Daisy","Bowser","Ice Climbers","Sheik","Zelda","Dr. Mario","Pichu","Falco","Marth","Lucina","Young Link","Ganondorf","Mewtwo","Roy","Chrom","Mr. Game & Watch","Meta Knight","Pit","Dark Pit","Zero Suit Samus","Wario","Snake","Ike","Pok\xe9mon Trainer","Diddy Kong","Lucas","Sonic","King Dedede","Olimar","Lucario","R.O.B.","Toon Link","Wolf","Villager","Mega Man","Wii Fit Trainer","Rosalina & Luma","Little Mac","Greninja","Mii Brawler","Mii Swordfighter","Mii Gunner","Palutena","Pac-Man","Robin","Shulk","Bowser Jr.","Duck Hunt","Ryu","Ken","Cloud","Bayonetta","Ridley","Simon","Richter","King K. Rool","Isabelle","Incineroar","Piranha Plant","Joker","Hero","Banjo & Kazooie","Terry","Byleth","Min Min"]),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).componentDidMount=function(){var e=x.map((function(e){return Object(y.jsxs)("option",{value:e,children:[" ",e]},Math.random())}));n.setState({characterOptions:e})},n.state={characterOptions:[],selectedCharacter:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e;return Object(y.jsx)("div",{className:"form-container",id:"formContainer",children:Object(y.jsxs)("form",{className:"character-selection-form",id:"characterSelectionForm",onSubmit:this.props.submitCharacter,children:[Object(y.jsx)("label",{for:"character-selection",className:"selection-text",children:"Select a character: "}),Object(y.jsx)("select",(e={id:"select-a-character",name:"characters",className:"character-dropdown"},Object(g.a)(e,"id","characterDropdown"),Object(g.a)(e,"children",this.state.characterOptions),e)),Object(y.jsx)("div",{className:"submit-button-container",children:Object(y.jsx)("button",{type:"submit",className:"submit-character-button",id:"submitButton",children:"MAKE ME RAGE"})})]})})}}]),a}(n.Component),I=(a(17),function(e){var t=e.savedRants;console.log(t);var a=t.map((function(e){return Object(y.jsx)("div",{className:"rant-card",id:e.id,children:Object(y.jsxs)("div",{className:"rant-text-container",children:[Object(y.jsx)("h3",{className:"character-name",id:"characterName",children:e.name}),Object(y.jsx)("div",{className:"rant-text",id:"rantText",children:e.text})]})})}));return Object(y.jsx)("div",{className:"saved-rants-container",children:Object(y.jsx)("section",{className:"saved-rants",children:a})})}),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).componentDidMount=function(){fetch("api/v1/ultimate/characters").then((function(e){return e.json()})).then((function(t){var a=t;e.setState({allCharacters:a})}))},e.submitCharacter=function(t){t.preventDefault();var a=document.getElementById("characterDropdown").value;e.setState({selectedCharacter:a}),document.getElementById("formContainer").classList.add("shifted")},e.saveRant=function(t){document.querySelector(".rant-card").id;var a=document.getElementById("characterName").innerText,n=document.getElementById("rantText").innerText,r={id:e.state.savedRants.length+1,name:a,text:n};e.setState({savedRants:[].concat(Object(s.a)(e.state.savedRants),[r])})},e.state={allCharacters:[],selectedCharacter:"",savedRants:[]},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(y.jsx)(u.a,{children:Object(y.jsxs)("main",{children:[Object(y.jsx)("header",{children:"Smash Ultimate Rant Generator"}),Object(y.jsx)(u.b,{exact:!0,to:"/saved-rants",className:"saved-rants-link navlink",children:"Saved Rants"}),Object(y.jsx)(u.b,{exact:!0,to:"/",className:"home-link navlink",children:"Home"}),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(m.c,{children:[Object(y.jsx)(m.a,{path:"/",element:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f,{data:this.state.allCharacters,selection:this.state.selectedCharacter,saveRant:this.saveRant}),Object(y.jsx)(O,{submitCharacter:this.submitCharacter})]})}),Object(y.jsx)(m.a,{exact:!0,path:"/saved-rants",element:Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(I,{savedRants:this.state.savedRants})})})]})})]})})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),w()}},[[27,1,2]]]);
//# sourceMappingURL=main.d37e6380.chunk.js.map