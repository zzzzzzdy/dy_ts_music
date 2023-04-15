// import Discover from '@/views/discover';
// import Download from '@/views/download';
// import Focus from '@/views/focus';
// import Mine from '@/views/mine';

import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Discover = lazy(() => {
  return import('@/views/discover');
});
const Recommend = lazy(() => {
  return import('@/views/discover/c-views/recommend');
});
const Ranking = lazy(() => {
  return import('@/views/discover/c-views/ranking');
});
const Songs = lazy(() => {
  return import('@/views/discover/c-views/songs');
});
const Djradio = lazy(() => {
  return import('@/views/discover/c-views/djradio');
});
const Artist = lazy(() => {
  return import('@/views/discover/c-views/artist');
});
const Album = lazy(() => {
  return import('@/views/discover/c-views/album');
});

const Focus = lazy(() => {
  return import('@/views/focus');
});
const Mine = lazy(() => {
  return import('@/views/mine');
});
const Download = lazy(() => {
  return import('@/views/download');
});

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/discover'}></Navigate>
  },
  {
    path: '/discover',
    element: <Discover></Discover>,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'}></Navigate>
      },
      {
        path: '/discover/recommend',
        element: <Recommend></Recommend>
      },
      {
        path: '/discover/ranking',
        element: <Ranking></Ranking>
      },
      {
        path: 'discover/songs',
        element: <Songs></Songs>
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/download',
    element: <Download></Download>
  },
  {
    path: '/focus',
    element: <Focus></Focus>
  },
  {
    path: 'mine',
    element: <Mine></Mine>
  }
];

export default routes;
