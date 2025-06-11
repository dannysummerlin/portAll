({
	init: function(c,e,h) {
        let content = '<details '+ (c.get('v.hide') ? '' : 'open="true"') +">\n"
        content += '<summary>' + c.get('v.title') + '</summary>'
		if(c.get('v.iframe')) {
            content += '<iframe src="' + c.get('v.url') + '" width="100%" frameborder="0" height="' + (c.get('v.height') ? c.get('v.height') : '200')  + '"></iframe>'
        } else {
			try {
				const url = c.get('v.url')
				fetch(url).then((c)=>{
					// space for more processing here
					c.set('v.rawContent', c.html())
				})
			} catch(e) { console.log(e) }
 		}
        c.set('v.rawContent', content + '</details>')
	}
})
