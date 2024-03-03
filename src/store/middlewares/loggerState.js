const loggerStateMiddleware = store => next => action => {
  console.log('自定义middleWare2-logger-state', store.getState());
  return next(action);
};

export default loggerStateMiddleware;