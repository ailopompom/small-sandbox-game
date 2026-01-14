import State from './State'

export default class StateManager
{
    private states: Array<State> = [];

    public appendState (state: State): void
    {
        this.states.push(state);
    }
}