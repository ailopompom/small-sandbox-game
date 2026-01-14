import State from './CoreState'

export default class CoreStateManager
{
    private state?: State;

    public setState(state: State): void
    {
        if(this.state != null) this.state!.onDestroy();
        this.state = state;
        state.onCreate();
    }

    public getState(): State | null
    {
        return this.state ?? null;
    }
}