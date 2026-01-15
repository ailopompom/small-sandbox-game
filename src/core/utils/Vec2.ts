export default class Vec2
{
    public x: number = 0;
    public y: number = 0;

    constructor(x: number, y: number);
    constructor(value: number);
    constructor();

    /**
     * @param x: If null (no arguments given), both x and y will be set to 0
     * @param y: If null (but x has a value), both x and y will have the same value
     */
    constructor(x?: number, y?: number)
    {
        if(x == null) return;
        this.x = x;
        this.y = y == null ? x : 0;
    }

    // BASIC FUNCTIONS

    public copy(): Vec2
    {
        return new Vec2(this.x, this.y);
    }

    public toString(): string
    {
        return `(${this.x}, ${this.y})`;
    }

    public equals(vec: Vec2): boolean
    {
        return this.x == vec.x && this.y == vec.y;
    }

    // GETTER SETTERS

    public set(x: number, y: number): void;
    public set(value: number): void;
    
    public set(x: number, y?: number): void
    {
        this.x = x;
        this.y = y ?? x;
    }

    public setFromVec(vec: Vec2): void
    {
        this.x = vec.x;
        this.y = vec.y;
    }

    /**
     * Returns false if the setting operation fails, otherwise false
     * @param value: String in the format of:
     * (number, number), (number),
     * [number, number], [number],
     * {number, number}, {number}
     */
    public setFromString(value: string): boolean
    {
        value = value.replace("()[]{}", "");
        const split_values: string[] = value.split(',');
        if(split_values.length == 0 || split_values.length > 2) return false;

        const newX: number = Number(split_values[0]);
        const newY: number = Number(split_values[split_values.length == 1 ? 0 : 1]);
        if(Number.isNaN(newX) || Number.isNaN(newY)) return false;

        this.x = newX;
        this.y = newY;

        return true;
    }

    // MATH OPERATIONS (non-modifying, use set() to apply operation changes)

    public add(vec: Vec2): Vec2
    {
        return new Vec2(this.x + vec.x, this.y + vec.y);
    }

    public subtr(vec: Vec2): Vec2
    {
        return new Vec2(this.x - vec.x, this.y - vec.y);
    }

    public dotMul(vec: Vec2): Vec2;
    public dotMul(scalar: number): Vec2;

    public dotMul(value: Vec2 | number): Vec2
    {
        if(typeof value === 'number') return new Vec2(this.x * value, this.y * value);
        return new Vec2(this.x * value.x, this.y * value.y);
    }

    public invert(): Vec2
    {
        return new Vec2(this.x * -1, this.y * -1);
    }

    // OTHER COMPARATIVE OPERATIONS

    /**
     * @param vec Vector to compare distance to
     * @returns the sum of squares of the difference in x and y axes of this and the given vector
     */
    public distSqr(vec: Vec2): number
    {
        const deltaX = this.x - vec.x;
        const deltaY = this.y - vec.y;
        return deltaX * deltaX + deltaY * deltaY;
    }

    // STATICS

    public static zero(): Vec2
    {
        return new Vec2(0);
    }

    public static left(): Vec2
    {
        return new Vec2(1, 0);
    }

    public static top(): Vec2
    {
        return new Vec2(0, 1);
    }

    public static isVec2(obj: any): boolean
    {
        return typeof this == typeof obj;
    }
}