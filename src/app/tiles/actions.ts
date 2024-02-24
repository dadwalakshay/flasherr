'use server';

import { updateTile } from "./db";

async function updateTileColour(id: string, colour: number) {
    await updateTile(id, colour);

    return colour
}

async function updateTileRandomColour(id: string) {
    const randomColour = [0, 1, 2, 3, 4, 5, 6][Math.random() * 6 | 0]

    await updateTile(id, randomColour);

    return randomColour
}

export { updateTileColour, updateTileRandomColour }
