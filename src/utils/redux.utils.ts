import {compose, applyMiddleware, StoreEnhancerStoreCreator, Func1} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loggerMiddleware, thunkMiddleware} from '@/redux/middleware';

export const createEnhancers = (): Func1<
  StoreEnhancerStoreCreator<{}, {}>,
  StoreEnhancerStoreCreator<{dispatch: {}}, {}>
> =>
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware))
    : compose(applyMiddleware(thunkMiddleware));
