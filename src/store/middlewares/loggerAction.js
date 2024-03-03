const loggerActionMiddleware = store => next => action => {
  console.log('自定义middleWare1-logger-action', action);
  return next(action);
};

export default loggerActionMiddleware;