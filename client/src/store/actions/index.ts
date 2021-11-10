import { App } from '../../interfaces';

import { SetThemeAction } from './theme';

import {
  AddQueryAction,
  DeleteQueryAction,
  FetchQueriesAction,
  GetConfigAction,
  UpdateConfigAction,
  UpdateQueryAction,
} from './config';

import {
  ClearNotificationAction,
  CreateNotificationAction,
} from './notification';

import {
  GetAppsAction,
  PinAppAction,
  AddAppAction,
  DeleteAppAction,
  UpdateAppAction,
  ReorderAppsAction,
  SortAppsAction,
} from './app';

import {
  GetCategoriesAction,
  AddCategoryAction,
  PinCategoryAction,
  DeleteCategoryAction,
  UpdateCategoryAction,
  SortCategoriesAction,
  ReorderCategoriesAction,
  AddBookmarkAction,
  DeleteBookmarkAction,
  UpdateBookmarkAction,
} from './bookmark';

import { LoginAction, LogoutAction } from './auth';

export type Action =
  // Theme
  | SetThemeAction
  // Config
  | GetConfigAction
  | UpdateConfigAction
  | AddQueryAction
  | DeleteQueryAction
  | FetchQueriesAction
  | UpdateQueryAction
  // Notifications
  | CreateNotificationAction
  | ClearNotificationAction
  // Apps
  | GetAppsAction<undefined | App[]>
  | PinAppAction
  | AddAppAction
  | DeleteAppAction
  | UpdateAppAction
  | ReorderAppsAction
  | SortAppsAction
  // Categories
  | GetCategoriesAction<any>
  | AddCategoryAction
  | PinCategoryAction
  | DeleteCategoryAction
  | UpdateCategoryAction
  | SortCategoriesAction
  | ReorderCategoriesAction
  // Bookmarks
  | AddBookmarkAction
  | DeleteBookmarkAction
  | UpdateBookmarkAction
  // Auth
  | LoginAction
  | LogoutAction;
