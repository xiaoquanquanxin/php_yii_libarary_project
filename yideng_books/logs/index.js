const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

log4js.configure({
	appenders: { cheese: { type: 'file', filename: './logs/index.log' } },
	categories: { default: { appenders: ['cheese'], level: 'error' } }
});

//
// const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
// logger.fatal('Cheese was breeding ground for listeria.');
//

module.exports = logger;
