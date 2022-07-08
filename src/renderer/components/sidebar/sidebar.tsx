import { useContext } from 'react';
import AppState from 'renderer/util/appState';
import 'tailwindcss/tailwind.css';
import SidebarButton from './sidebarButton';
import SidebarSection from './sidebarSection';

function Sidebar() {
  const { appState, updateAppState } = useContext(AppState);

  const updateCurrPageIdx = (newIdx: number) => {
    updateAppState({ ...appState, currPageIdx: newIdx });
  };

  return (
    <div className="h-full | w-20 md:w-48 | flex flex-col flex-shrink-0 | bg-primary dark:bg-dark-primary | transition-all select-none">
      <div className="flex-grow" />
      <div className="flex-grow flex flex-col justify-center items-center text-4xl font-thin italic">
        <h1 className="hidden md:inline">photofs</h1>
        <h1 className="inline md:hidden">pfs</h1>
        <p className="text-xs opacity-70">alpha</p>
      </div>
      <div className="flex-grow" />
      <SidebarSection>
        <SidebarButton
          title="Home"
          icon="🏠"
          onClick={() => updateCurrPageIdx(0)}
          selected={appState.currPageIdx === 0}
        />
        <SidebarButton
          title="My Albums"
          icon="📚"
          onClick={() => updateCurrPageIdx(6)}
          selected={appState.currPageIdx === 6}
        />
      </SidebarSection>
      <SidebarSection disabled={!appState.albumSelected} title="Album">
        <SidebarButton
          title="Album Info"
          icon="📔"
          onClick={() => updateCurrPageIdx(1)}
          selected={appState.currPageIdx === 1}
        />
        <SidebarButton
          title="Album Tags"
          icon="🗂"
          onClick={() => updateCurrPageIdx(2)}
          selected={appState.currPageIdx === 2}
        />
      </SidebarSection>

      <SidebarSection disabled={!appState.albumSelected} title="Photos">
        <SidebarButton
          title="Gallery"
          icon="🖼"
          onClick={() => updateCurrPageIdx(3)}
          selected={appState.currPageIdx === 3}
        />
        <SidebarButton
          title="Inspector"
          icon="🔍"
          onClick={() => updateCurrPageIdx(4)}
          selected={appState.currPageIdx === 4}
        />
      </SidebarSection>
      <SidebarSection title="Misc.">
        <SidebarButton
          title="App Settings"
          icon="🛠"
          onClick={() => updateCurrPageIdx(5)}
          selected={appState.currPageIdx === 5}
        />
      </SidebarSection>
      <div className="flex-grow" />
    </div>
  );
}

export default Sidebar;
