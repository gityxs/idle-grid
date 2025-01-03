import React from "react";
import "./App.css";
import { GameProvider } from "./contexts/GameContext";
import { ResourceProvider } from "./contexts/ResourceContext";
import { BuildingProvider } from "./contexts/BuildingContext";
import { GameContainer } from "./components/game/GameContainer";
import { ResourceBar } from "./components/ui/ResourceBar";
import { BuildingInfo } from "./components/ui/BuildingInfo";
import { SelectedBuildingInfo } from "./components/ui/SelectedBuildingInfo";
import { BuildingPopup } from "./components/buildings/BuildingPopup";
import { SaveIndicator } from "./components/ui/SaveIndicator";
import { StatsPanel } from "./components/ui/StatsPanel";
import { ToastProvider } from "./contexts/ToastContext";
import { StartScreen } from "./components/ui/StartScreen";
import { useGame } from "./contexts/GameContext";

function AppContent() {
  const { gameStarted } = useGame();

  if (!gameStarted) {
    return <StartScreen />;
  }

  return (
    <div className="app-container">
      <ResourceBar />
      <StatsPanel />
      <BuildingInfo />
      <SelectedBuildingInfo />
      <GameContainer />
      <BuildingPopup />
      <SaveIndicator />
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <GameProvider>
        <ResourceProvider>
          <BuildingProvider>
            <AppContent />
          </BuildingProvider>
        </ResourceProvider>
      </GameProvider>
    </ToastProvider>
  );
}

export default App;
