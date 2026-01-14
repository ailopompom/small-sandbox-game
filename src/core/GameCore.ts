/**
 * GameCore.ts
 * Handles the processes of the game, from initialization to termination
 */

import CoreStateManager from "./states/CoreStateManager";

export default class GameCore
{
    public stateManager: CoreStateManager;

    constructor()
    {
        this.stateManager = new CoreStateManager();
    }
}