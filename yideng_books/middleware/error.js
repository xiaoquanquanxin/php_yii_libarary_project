module.exports = function (app, logger) {
	app.use(async (ctx, next) => {
		try {
			await next()
		} catch (err) {
			logger.error(err);
			ctx.status = 200;
			ctx.body = await ctx.render('error', {
				error: '我的图书馆出错了 500',
			});
		}
	});

	app.use(async (ctx, next) => {
		await next();
		if (404 !== ctx.status) {
			return;
		}
		logger.error(ctx.status);
		ctx.status = 200;
		ctx.body = await ctx.render('error', {
			error: '我的图书馆出错了 404 not found',
		});
	});
};