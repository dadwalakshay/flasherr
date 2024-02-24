'use server';

import { updateTile } from "./db";

export default async function updateTileColour(id: string, colour: number) {
    await updateTile(id, colour);

    return colour
}
