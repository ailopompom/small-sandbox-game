/**
 * TileMap.ts:
 * Handles all the tile objects in the gamespace
 */

import TileObject from "./TileObject";
import TileTemplate from "./TileTemplate";

import Vec2 from "../utils/Vec2";

export default class TileMap
{
    private readonly size: number;
    private readonly grid_size: number;

    private tiles: Array<TileObject>;
    private templates: Map<string, TileTemplate>;

    constructor(size: number, grid_size: number)
    {
        this.size = size;
        this.grid_size = grid_size;
        this.tiles = new Array(size * size);
        this.templates = new Map();
    }

    public populateMap(): void
    {
        for(let y = 0; y < this.size; y++)
        {
            for(let x = 0; x < this.size; x++)
            {
                const tile: TileObject = new TileObject();
                tile.pos = new Vec2(x, y).dotMul(this.grid_size); // Transform grid coords to world coords
            }
        }
    }

    public getTile(x: number, y: number): TileObject | undefined
    {
        return this.tiles[this.getIndex(x, y)];
    }

    // MANIP FUNCTIONS

    public setTemplate(tile: TileObject, template_key: string): void
    {
        tile.template = this.templates.get(template_key);
    }

    // UTIL FUNCTIONS

    public getIndex(x: number, y: number): number
    {
        return x + y * this.size;
    }

    public getWorldToGridsCoords(x: number, y: number): Vec2
    {
        return new Vec2(Math.round(x / this.grid_size) * this.grid_size, Math.round(y / this.grid_size) * this.grid_size);
    }

    public getGridToWorldCoords(x: number, y: number): Vec2
    {
        return new Vec2(x * this.grid_size, y * this.grid_size);
    }
}