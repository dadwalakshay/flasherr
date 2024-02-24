'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Tile, getPocketbaseClient } from "../db";
import { ColourPaletteModal } from "./modal";
import { updateTileColour, updateTileRandomColour } from "../actions";

function TilesListComponent() {
    const [tiles, setTiles] = useState(Array<Tile>);
    const [isRandomMode, setIsRandomMode] = useState(false);

    function handleToggle() {
        setIsRandomMode(!isRandomMode);
    }

    return (
        <div>
            <label className="inline-flex items-right cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={handleToggle}></input>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Random mode</span>
            </label>

            <ul>
                {
                    tiles.map((tile) => (
                        <TileComponent tile={tile} isRandom={isRandomMode} key={tile.id}></TileComponent>
                    ))
                }

                <TilesListenerComponent tiles={tiles} setTiles={setTiles}></TilesListenerComponent>
            </ul>
        </div>

    );
}

function TileComponent({ tile, isRandom }: { tile: Tile, isRandom: boolean }) {
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

    function handleRandomSubmit() {
        updateTileRandomColour(tile.id);
    }

    return (
        <div onClick={() => isRandom ? handleRandomSubmit() : setShowPalette(true)}>
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
