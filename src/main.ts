import GameCore from "./core/GameCore";
import GameState from "./core/states/GameState";

/**
 * Main.ts
 * Program's starting point
 */

function main()
{
  const core: GameCore = new GameCore();
  core.stateManager.setState(new GameState());
}

main();