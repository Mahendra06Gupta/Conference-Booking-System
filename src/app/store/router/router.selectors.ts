import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppRouterReducerState, RouterState } from './router.reducer';

const getRouterState = createFeatureSelector<AppRouterReducerState<RouterState>>('router');

export const getActiveUrl = createSelector(
    getRouterState,
    router => router && router.state && router.state.url
);
