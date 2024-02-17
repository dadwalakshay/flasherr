'use server';

import PocketBase from 'pocketbase';
import { TypedPocketBase } from './tiles/db';

export default async function updateTileColour(id: string) {
    const randomColour = ['red', 'green', 'blue'][Math.random() * 3 | 0]

    const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

    await pb.collection('tiles').update(id, {'colour': randomColour})

    return randomColour
}
