import type { Middleware } from 'redux'

import type { RootState } from './store'

export const userMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = storeApi => next => action => {
  const state = storeApi.getState() // correctly typed as RootState
}
