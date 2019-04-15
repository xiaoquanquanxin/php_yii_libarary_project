const router = require('koa-simple-router');
const indexController = require('./indexController');
indexController.livingExample = new indexController();
module.exports = router(_ => {
	_.get('/', indexController.livingExample.actionIndex());
	_.get('/addbook', indexController.livingExample.actionAdd());
	_.get('/500', (ctx, next) => {
		aaaa;
		ctx.body = 'hello'
	});
	_.post('/name/:id', (ctx, next) => {
		// ...
	})
});



