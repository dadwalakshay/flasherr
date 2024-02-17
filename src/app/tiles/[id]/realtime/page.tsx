'use client';

import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { Tile, TypedPocketBase } from '../db';
import TileBox from '../tile-box';


export default function Tile({ params: { id } }: { params: { id: string } }) {
    const [tileColour, setTileColour] = useState('');

    useEffect(() => {
        const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

        if (tileColour === '') {
            pb.collection('tiles').getOne(id).then(record => { setTileColour(record.colour)});
        }

        pb.collection('tiles').subscribe(id, response => { setTileColour(response.record.colour) });
    });

    return (
        <TileBox colour={tileColour}></TileBox>
    )
}
