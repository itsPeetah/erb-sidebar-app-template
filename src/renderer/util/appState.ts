import React from 'react';

export interface AppStateInterface {
  currPageIdx: number;
  albumSelected: boolean;
}

interface AppStateContext {
  appState: AppStateInterface;
  updateAppState: (appState: AppStateInterface) => void;
}

const AppState = React.createContext<AppStateContext>({
  appState: {
    currPageIdx: 0,
    albumSelected: false,
  },
  updateAppState: () => {},
});

export default AppState;
