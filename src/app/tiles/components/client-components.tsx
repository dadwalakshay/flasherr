'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tile, getPocketbaseClient } from "../db";


function TilesWithListenerComponent() {
    const [tiles, setTiles] = useState(Array<Tile>);

    return (
        <ul>
            {
                tiles.map((tile) => (
                    <div className={`flasherr-tile flasherr-${tile.colour}`} key={tile.id}></div>
                ))
            }

            <TilesComponent setTiles={setTiles} tiles={tiles}></TilesComponent>
        </ul>

    );
}

function TilesComponent({ tiles, setTiles }: { tiles: Array<Tile>, setTiles: Dispatch<SetStateAction<Tile[]>> }) {
    useEffect(() => {
        const pb = getPocketbaseClient();

        if(tiles.length == 0) {
            pb.collection('tiles').getFullList().then((records) => setTiles(records));
        }

        pb.collection('tiles').subscribe('*', (response) => {
            pb.collection('tiles').getFullList().then((records) => setTiles(records));
        })
    }, [])

    return (<p className='hidden'>hidden listener...</p>)
}

export { TilesWithListenerComponent }
