'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tile, getPocketbaseClient } from "../db";
import { ColourPaletteModal } from "./modal";
import updateTileColour from "../actions";

function TilesListComponent() {
    const [tiles, setTiles] = useState(Array<Tile>);

    return (
        <ul>
            {
                tiles.map((tile) => (
                    <TileComponent tile={tile} key={tile.id}></TileComponent>
                ))
            }

            <TilesListenerComponent tiles={tiles} setTiles={setTiles}></TilesListenerComponent>
        </ul>

    );
}

function TileComponent({ tile }: {tile: Tile }) {
    const [showPalette, setShowPalette] = useState(false);

    function handleClose(e: any) {
        e.stopPropagation();

        setShowPalette(false);
    }

    function handleSubmit(e: any, colour: number) {
        e.stopPropagation();

        updateTileColour(tile.id, colour);

        setShowPalette(false);
    }

    return (
        <div onClick={() => setShowPalette(true)}>
            <div className={`flasherr-tile flasherr-${tile.colour}`}>
                {showPalette && <ColourPaletteModal onConfirm={handleSubmit} onClose={handleClose}></ColourPaletteModal>}
            </div>
        </div>
    );

}

function TilesListenerComponent({ tiles, setTiles }: { tiles: Array<Tile>, setTiles: Dispatch<SetStateAction<Tile[]>> }) {
    useEffect(() => {
        const pb = getPocketbaseClient();

        if(tiles.length == 0) {
            pb.collection('tiles').getFullList().then((records) => setTiles(records));
        }

        pb.collection('tiles').subscribe('*', (_) => {
            pb.collection('tiles').getFullList().then((records) => setTiles(records));
        })
    }, [])

    return (<p className='hidden'>listener...</p>);
}

export { TilesListComponent }
