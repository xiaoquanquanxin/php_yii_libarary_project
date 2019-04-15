//  首页controller
class IndexController {
	constructor() {
	}

	actionIndex() {
		return async (ctx, next) => {
			ctx.body = await ctx.render('index', {
				message: '我的图书馆',
			});
		}
	}

	actionAdd() {
		return async (ctx, next) => {
			ctx.body = await  ctx.render('addbook', {
				message: '图书馆添加',
			});
		}
	}
}

module.exports = IndexController;