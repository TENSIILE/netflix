import {Middleware} from 'redux';

export const loggerMiddleware: Middleware = store => next => action => {
  console.group('Store');
  console.log('Action:', action);
  console.log('State:', store.getState());
  console.groupEnd();

  return action && next(action);
};

export const thunkMiddleware: Middleware = store => next => async action => {
  if (action instanceof Function) {
    const act = await action(store.dispatch);

    return act && next(act);
  }

  return next(action);
};
