(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"79f3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"min-height":"inherit"}},[n("div",{ref:"blockly",staticClass:"blockly-wrap"}),n("xml",{ref:"toolbox",staticStyle:{display:"none"}},[e._t("default")],2)],1)},a=[],s=(n("ddb0"),n("ded3")),o=n.n(s),i=n("54ca"),l=n.n(i),c=n("2f62"),p="/**\r\n * IMPORTANT NOTE\r\n * This project MUST be ES5 compliant as that is what the JS Interpreter uses\r\n */\r\n\r\n/**\r\n * Simple tests\r\n */\r\nhasNumber = /\\d/\r\n \r\n/**\r\n * Stores events being listened to\r\n * {eventName: [...callbacks]}\r\n */\r\n_events = {}\r\n\r\n/**\r\n * console.log helper to properly send data to main app w/o obfuscation\r\n */\r\nconsole = {\r\n  log: function (arguments) {\r\n    log(JSON.stringify(arguments))\r\n  }\r\n}\r\n\r\n/**\r\n * target.addEventListener subsitution\r\n * @param {String} eventName The eventName to store this callback under\r\n * @param {Array} args The list of arguments\r\n * @param {Function} callback The function to call when this event is triggered\r\n */\r\naddEventListener = function (eventName, args, callback) {\r\n  if (!_events[eventName]) {\r\n    _events[eventName] = []\r\n  }\r\n\r\n  _events[eventName].push({\r\n    args: args,\r\n    callback: callback\r\n  })\r\n}\r\n\r\n/**\r\n * Trigger an event\r\n * @param {String} eventName \r\n * @param {*} payload\r\n */\r\ntriggerEvent = function (eventName, payload) {\r\n  _events[eventName] && _events[eventName].forEach(function (event) {\r\n    event.callback({\r\n      args: event.args,\r\n      payload: JSON.parse(payload)\r\n    })\r\n  })\r\n}\r\n\r\n/**\r\n * Plays a note\r\n */\r\nplayNote = function (payload) {\r\n  _playNote(JSON.stringify(payload))\r\n}\r\n\r\n/**\r\n * Compre helper for working with \"is\", \"is not\", etc\r\n */\r\ncompare = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      return a == b\r\n    case 'is not':\r\n      return a != b\r\n  }\r\n}\r\n\r\n/**\r\n * Checks if a string belongs to the \"is any\" family (\"all\", \"any\", etc)\r\n */\r\nisAny = function (str) {\r\n  var list = ['any', 'all']\r\n  var isValid = false\r\n\r\n  list.forEach(function (item) {\r\n    if (str === item) isValid = true\r\n  });\r\n\r\n  return isValid\r\n}\r\n\r\n/**\r\n * Checks if a given note matches a webmidi.name\r\n * - If no octave present, then matches the key in any octave\r\n */\r\nisNote = function (a, compare, b) {\r\n  switch (compare) {\r\n    case 'is':\r\n      if (hasNumber.test()) {\r\n        return a == b.name.concat(b.octave)\r\n      } else {\r\n        return a == b.name\r\n      }\r\n\r\n    case 'is not':\r\n      if (hasNumber.test()) {\r\n        return a != b.name.concat(b.octave)\r\n      } else {\r\n        return a != b.name\r\n      }\r\n  }\r\n}",h={name:"Blockly",props:["options"],watch:{"workspace.code"(e){this.$store.commit("set",["workspace.interpreter",new window.Interpreter(p+"\n"+this.workspace.code,this.setupInterpreter)]),this.workspace.interpreter.run()}},computed:o()({},Object(c["b"])(["workspace","devices"])),data(){return{blockly:null,interpreter:null}},mounted(){let e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs.toolbox),this.blockly=l.a.inject(this.$refs.blockly,e),this.blockly.addChangeListener(this.onChange)},methods:{onChange(e){switch(e.type){case l.a.Events.BLOCK_CREATE:case l.a.Events.BLOCK_DELETE:case l.a.Events.BLOCK_CHANGE:case l.a.Events.BLOCK_MOVE:case l.a.Events.VAR_CREATE:case l.a.Events.VAR_DELETE:case l.a.Events.VAR_RENAME:this.$store.commit("set",["workspace.code",l.a.JavaScript.workspaceToCode(this.blockly)]);break}},setupInterpreter(e,t){e.setProperty(t,"log",e.createNativeFunction(e=>{console.log("📦 log: ",...JSON.parse(e))})),e.setProperty(t,"_playNote",e.createNativeFunction(e=>{let t=JSON.parse(e);"all"===t.device&&Object.keys(this.devices.outputs).forEach(e=>{const n=this.$m.getOutputById(e);n.playNote(t.note,t.channel)})}))}}},u=h,b=n("2877"),d=Object(b["a"])(u,r,a,!1,null,null,null);t["a"]=d.exports},"7c67":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"full-height",attrs:{view:"lHh Lpr lFf"}},[n("q-page-container",{staticClass:"full-height"},[n("q-page",{staticClass:"full-height"},[e.isChecking?n("Loader"):n("div",{staticClass:"full-height"},[e.blocks.length?n("Blockly",{ref:"blockly",staticClass:"blockly",staticStyle:{right:"0"},attrs:{options:e.options}},[n("category",{attrs:{name:"Readonly",colour:"#fff"}},e._l(e.blocks,(function(e){return n("block",{key:e.type,attrs:{type:e.type}})})),1)],1):n("router-view",{attrs:{id:this.id}})],1)],1)],1)],1)},a=[],s=(n("e6cf"),n("a79d"),n("ded3")),o=n.n(s),i=n("2f62"),l=n("54ca"),c=n.n(l),p=n("79f3"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-circular-progress",{staticClass:"q-ma-md absolute-center",attrs:{indeterminate:"","show-value":"",size:"50px",color:"primary"}},[n("q-avatar",{attrs:{size:"30px"}},[n("img",{attrs:{src:"favicon.png"}})])],1)},u=[],b=n("2877"),d=n("58ea"),m=n("cb32"),f=n("eebe"),y=n.n(f),k={},v=Object(b["a"])(k,h,u,!1,null,null,null),g=v.exports;y()(v,"components",{QCircularProgress:d["a"],QAvatar:m["a"]});var E={name:"ReadOnly",computed:o()({},Object(i["b"])(["workspace"])),components:{Blockly:p["a"],Loader:g},data(){return{isChecking:!0,id:this.$route.params.id,blocks:[],options:{media:"media/",grid:null,sounds:!1,toolbox:null,trashcan:!1,zoom:!1}}},mounted(){document.querySelector("body").classList.add("transparent"),this.$axios.get(`${{base:"https://midiblocks.com/wp-json/midiblocks/"}.base}block/${this.$route.params.id}`).then(e=>{this.isChecking=!1,this.blocks=e.data.blocks,this.$nextTick(()=>{this.blocks.forEach(e=>{c.a.Blocks[e.title]={init:function(){this.jsonInit(JSON.parse(e.block_definition))}},c.a.JavaScript[e.title]=()=>"";const t=this.$refs.blockly.blockly.newBlock(e.title);t.initSvg(),t.render(),this.$refs.blockly.blockly.centerOnBlock(t.id),this.$refs.blockly.blockly.scroll(this.$refs.blockly.blockly.scrollX,this.$refs.blockly.blockly.scrollY)})})}).catch(e=>{console.log("🚨 Error: ",e)}).finally(()=>{this.isChecking=!1})}},w=E,N=n("4d5a"),C=n("09e3"),_=n("9989"),O=Object(b["a"])(w,r,a,!1,null,null,null);t["default"]=O.exports;y()(O,"components",{QLayout:N["a"],QPageContainer:C["a"],QPage:_["a"]})}}]);