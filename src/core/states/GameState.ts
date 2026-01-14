import CoreState from "./CoreState";

export default class GameState extends CoreState
{
    constructor()
    {
        super("Game State");
    }

    public onCreate(): void {
        console.log("I am alive");
    }
    
    public onDestroy(): void {
        console.log("I am dead");
    }

    public onUpdate(): void {
    }

    public onRender(): void {
    }
}