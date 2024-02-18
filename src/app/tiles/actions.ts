'use server';

import { updateTile } from "./db";

export default async function updateTileColour(id: string) {
    const randomColour = ['red', 'green', 'blue', 'yellow', 'pink', 'cyan'][Math.random() * 6 | 0]

    await updateTile(id, randomColour);

    return randomColour
}
