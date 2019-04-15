const Koa = require('koa');
const {join} = require('path');
const render = require('koa-swig');
const co = require('co');
const serve = require('koa-static');
const errorHandler = require('./middleware/error');
const routers = require('./controllers');
const app = new Koa();
//  日志
const logger = require('./logs/index');
//  错误处理,在前面
errorHandler(app, logger);
//  路由
app.use(routers);
//  静态资源
app.use(serve(__dirname + '/assets/'));
//  模板
app.context.render = render({
	root: join(__dirname, 'views'),
	autoescape: true,
	// cache: 'memory', // disable, set to false
	cache: false, // disable, set to false
	ext: 'html',
	writeBody: false,
	varControls: ['[[', ']]']
});

app.context.render = co.wrap(render({
	writeBody: false
}));


app.listen(3000, () => {
	console.log('服务启动成功');
});