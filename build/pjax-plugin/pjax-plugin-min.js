YUI.add("pjax-plugin",function(b){function a(){a.superclass.constructor.apply(this,arguments);}b.extend(a,b.Pjax,{initializer:function(c){this._host=c.host;this._pluginEvents=this.after(["error","load"],this._onComplete);},destructor:function(){this._pluginEvents.detach();},_onComplete:function(d){var c=d.content;if(c.node){this._host.setContent(c.node);}if(c.title&&b.config.doc){b.config.doc.title=c.title;}}},{NS:"pjax"});b.Plugin.Pjax=a;},"@VERSION@",{requires:["node-pluginhost","pjax"]});