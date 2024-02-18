'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPocketbaseClient, Tile } from '../../db';
import RandomColorButton from '../random-button';

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

  }, [tiles])

  return (
    <div>
      <ul>
        {
          tiles.map((tile) => (
            <Link href={`/tiles/${tile.id}/realtime`}>
              <div className={`flasherr-tile-small flasherr-${tile.colour}`}>
                <h1>I am a small Tile, running in realtime mode!</h1>
              </div>
            </Link>
          ))
        }
      </ul>
    </div>
  );
}

function TileComponentRealtime({ id }: { id: string }) {
    const [tileColour, setTileColour] = useState('');
  
    useEffect(() => {
      const pb = getPocketbaseClient();

      pb.collection('tiles').getOne(id).then((record) => setTileColour(record.colour));
  
      pb.collection('tiles').subscribe(id, (response) => { setTileColour(response.record.colour) });
    });
  
    return (
      <div className={`flasherr-tile flasherr-${tileColour}`}>
        <h1>I am running in realtime mode!</h1>

        <RandomColorButton id={id} setTileColour={setTileColour}></RandomColorButton>
      </div>
    );
  }

export { TilesComponentRealtime, TileComponentRealtime }
