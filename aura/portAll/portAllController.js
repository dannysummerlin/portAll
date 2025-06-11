({
	init: function(c,e,h) {
		if(c.get('v.raw') {
			try {
				const url = c.get('v.url')
				fetch(url).then((c)=>{
					// space for more processing here
					c.set('rawContent', c.html())
				})
			} catch(e) { console.log(e) }
		}
	}
})
