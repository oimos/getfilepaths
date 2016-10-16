var fs = require('fs');
var client = require('cheerio-httpcli');

// import url list to crawl
var urlList = require('./urllist');

// loop scraing function with loop
urlList.forEach(function(val, idx){
	// take url parameter from urlList
	var url = val;
	var param = {};

	var imageSrcRelativePathNum = 0;
	var scriptSrcRelativePathNum = 0;
	var cssSrcRelativePathNum = 0;

	var imageRelativePath = [];
	var scriptRelativePath = [];
	var cssRelativePath = [];

	var getPCpage = function(title){
		// User Agent: 8.4.1 PC (Mac Chrome 53)
		client.headers['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36';
		client.fetch(
			url,
			param,
			function(err, $, res){
				if(err){ console.log("Error:", err); return; }
				$('img').each(function(idx){
					// get image path
					var imageSrc = $(this).attr('src');
					// skip when its not existes nor case in absolute path
					if(!imageSrc){
						return;
					}else if(imageSrc.match(/^http/) || imageSrc.match(/^https/) || imageSrc.match(/^\/\//)){
						return;
					}
					imageSrcRelativePathNum++
					imageRelativePath.push(imageSrc);
				});
				$('script').each(function(idx){
					// get script path
					var scriptSrc = $(this).attr('src');
					// skip when its not existes nor case in absolute path
					if(!scriptSrc){
						return;
					}else if(scriptSrc.match(/^http/) || scriptSrc.match(/^https/) || scriptSrc.match(/^\/\//)){
						return;
					}
					scriptSrcRelativePathNum++;
					scriptRelativePath.push(scriptSrc);
				});
				$('link').each(function(idx){
					// get css path
					var cssSrc = $(this).attr('href');
					// skip when its not existes nor case in absolute path
					if(!cssSrc){
						return;
					}else if(cssSrc.match(/^http/) || cssSrc.match(/^https/) || cssSrc.match(/^\/\//)){
						return;
					}
					cssSrcRelativePathNum++;
					cssRelativePath.push(cssSrc);
				});
				console.log(title);
				/**
				 * Output relative files paths number: image, script, css
				**/
				console.log('>>> Image relative path number: ' + imageSrcRelativePathNum);
				console.log('>>> Script relative path number: ' + scriptSrcRelativePathNum);
				console.log('>>> CSS relative path number: ' + cssSrcRelativePathNum);

				// console.log('\n');

				/**
				 * Output relative file paths: image, script, css
				**/
				console.log('\n>>> Image relative path');
				if(imageRelativePath){
					imageRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(imageRelativePath.length <= 0){
					console.log('NONE');
				}

				// console.log('\n');

				console.log('\n>>> Script relative path');
				if(scriptRelativePath){
					scriptRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(scriptRelativePath.length <= 0){
					console.log('NONE');
				}

				// console.log('\n');
				console.log('\n>>> CSS relative path');
				if(cssRelativePath){
					cssRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(cssRelativePath.length <= 0){
					console.log('NONE');
				}

			}
		)
	};


	var getSPpage = function(title){
		// User Agent: SP (iOS 8.4.1)
		client.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4';
		client.fetch(
			url,
			param,
			function(err, $, res){
				if(err){ console.log("Error:", err); return; }
				$('img').each(function(idx){
					// get image path
					var imageSrc = $(this).attr('src');
					// skip when its not existes nor case in absolute path
					if(!imageSrc){
						return;
					}else if(imageSrc.match(/^http/) || imageSrc.match(/^https/) || imageSrc.match(/^\/\//)){
						return;
					}
					imageSrcRelativePathNum++
					imageRelativePath.push(imageSrc);
				});
				$('script').each(function(idx){
					// get script path
					var scriptSrc = $(this).attr('src');
					// skip when its not existes nor case in absolute path
					if(!scriptSrc){
						return;
					}else if(scriptSrc.match(/^http/) || scriptSrc.match(/^https/) || scriptSrc.match(/^\/\//)){
						return;
					}
					scriptSrcRelativePathNum++;
					scriptRelativePath.push(scriptSrc);
				});
				$('link').each(function(idx){
					// get css path
					var cssSrc = $(this).attr('href');
					// skip when its not existes nor case in absolute path
					if(!cssSrc){
						return;
					}else if(cssSrc.match(/^http/) || cssSrc.match(/^https/) || cssSrc.match(/^\/\//)){
						return;
					}
					cssSrcRelativePathNum++;
					cssRelativePath.push(cssSrc);
				});
				console.log(title);
				/**
				 * Output relative files paths number: image, script, css
				**/
				console.log('>>> Image relative path number: ' + imageSrcRelativePathNum);
				console.log('>>> Script relative path number: ' + scriptSrcRelativePathNum);
				console.log('>>> CSS relative path number: ' + cssSrcRelativePathNum);

				// console.log('\n');

				/**
				 * Output relative file paths: image, script, css
				**/
				console.log('\n>>> Image relative path');
				if(imageRelativePath){
					imageRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(imageRelativePath.length <= 0){
					console.log('NONE');
				}

				// console.log('\n');

				console.log('\n>>> Script relative path');
				if(scriptRelativePath){
					scriptRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(scriptRelativePath.length <= 0){
					console.log('NONE');
				}

				// console.log('\n');
				console.log('\n>>> CSS relative path');
				if(cssRelativePath){
					cssRelativePath.forEach(function(val, idx){
						console.log( (idx + 1 ) + ': ' + val);
					});
				}else if(cssRelativePath.length <= 0){
					console.log('NONE');
				}
			}
		)
	};
	getPCpage('\n\n****************************\n' + 'PC: '+ url + '\n****************************');
	// getSPpage('\n\n****************************\n' + 'SP: '+ url + '\n****************************');

});
