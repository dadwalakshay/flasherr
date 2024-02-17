'use client';

import { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { TypedPocketBase } from '../../db';
import updateTileColour from '@/app/actions';

function TileComponentRealtime({ id, colour }: { id: string, colour: string }) {
    const [tileColour, setTileColour] = useState(colour);
  
    useEffect(() => {
        const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;
  
        pb.collection('tiles').subscribe(id, response => { setTileColour(response.record.colour) });
    });
  
    return (
      <div className={`flasherr-tile flasherr-${tileColour}`}>
        <h1>I am in realtime mode!</h1>
      </div>
    );
  }

function RandomTileComponent({ id, colour }: { id: string, colour: string }) {
    const [tileColour, setTileColour] = useState(colour);

    // useEffect(() => {
    //     const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;
  
    //     pb.collection('tiles').subscribe(id, response => { setTileColour(response.record.colour) });
    // });

    return (
        <div className={`flasherr-tile-small flasherr-${tileColour}`}>
            <button onClick={async () => {
                const randomColour = await updateTileColour(id);

                setTileColour(randomColour);
            }} className='random-button'>Random</button>
        </div>
    );
}

export { TileComponentRealtime, RandomTileComponent }
