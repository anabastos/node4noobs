import logger from 'node-color-log';

function logAccess (req, res, next) {
    const { hostname, method, url } = req;

    logger.info(`[LOG] hostname = ${hostname}`);
    logger.info(`[LOG] method = ${method}`);
    logger.info(`[LOG] endpoint = ${url}`);
    logger.info("\n");

    next();
}

export default logAccess;