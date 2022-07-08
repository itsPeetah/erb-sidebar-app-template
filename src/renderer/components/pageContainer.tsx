import { useContext } from 'react';
import GetStarted from 'renderer/pages/getStarted';
import AppState from 'renderer/util/appState';

function PageContainer() {
  const { appState } = useContext(AppState);

  return (
    <div className="flex-grow overflow-scroll">
      {appState.currPageIdx === 0 && <GetStarted />}
      {appState.currPageIdx === 1 && <h1>Album Info</h1>}
      {appState.currPageIdx === 2 && <h1>Album Tags</h1>}
      {appState.currPageIdx === 3 && <h1>Get Started</h1>}
    </div>
  );
}

export default PageContainer;
