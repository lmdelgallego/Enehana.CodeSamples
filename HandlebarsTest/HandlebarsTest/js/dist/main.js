this.MyApp=this.MyApp||{},this.MyApp.templates=this.MyApp.templates||{},this.MyApp.templates.hellotemplate=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,l,t,a){var n,s="function",p=l.helperMissing,i=this.escapeExpression;return'<div class="hello" style="border: 1px solid red;">\r\n    <h1>'+i((n=null!=(n=l.title||(null!=e?e.title:e))?n:p,typeof n===s?n.call(e,{name:"title",hash:{},data:a}):n))+'</h1>\r\n    <div class="body">\r\n        Hello, '+i((n=null!=(n=l.name||(null!=e?e.name:e))?n:p,typeof n===s?n.call(e,{name:"name",hash:{},data:a}):n))+"! I'm a template. \r\n    </div>\r\n</div>\r\n"},useData:!0});