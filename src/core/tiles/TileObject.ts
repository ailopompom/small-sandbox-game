import Vec2 from "../utils/Vec2";

import TileTemplate from "./TileTemplate";

export default class TileObject
{
    public pos: Vec2 = Vec2.zero();

    public template?: TileTemplate;
}