'use client';

import { useEffect, useState } from "react";
import { Tile, getPocketbaseClient } from "../db";

function TilesComponentRealtime() {
    const [tiles, setTiles] = useState(Array<Tile>);

    useEffect(() => {
        const pb = getPocketbaseClient();

        pb.collection('tiles').getFullList().then((records) => setTiles(records));

        pb.collection('tiles').subscribe('*', (response) => {
            const tileRecord: Tile = response.record;

            tiles.forEach((tile) => {
                if (tile.id === tileRecord.id) {
                    tile.colour = tileRecord.colour;

                    setTiles(tiles);
                }
            })
        })
    }, [])

    return (
        <ul>
            {
                tiles.map((tile) => (
                    <div className={`flasherr-tile flasherr-${tile.colour}`} key={tile.id}></div>
                ))
            }
        </ul>
    );
}

export { TilesComponentRealtime }
