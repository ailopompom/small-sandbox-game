export default class CoreState
{
    public readonly name: string;

    constructor(name: string) 
    {
        this.name = name;
    }

    public onCreate(): void {}  // Called once per state activation
    public onDestroy(): void {} // Called once on state deletion
    public onUpdate(): void {}  // Called once per game tick
    public onRender(): void {}  // Called after every update for rendering purposes
}