import PocketBase from 'pocketbase';
import { TypedPocketBase } from './tiles/db';
import { RandomTileComponent } from './tiles/[id]/realtime/tile';

export default async function Home() {
  const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

  const tiles = await pb.collection('tiles').getList();

  return (
    <div>
        <p>Welcom to flasherr!</p>
        <ul>
            {
                tiles.items.map((tile) => (
                    <li key={tile.id}>
                      <RandomTileComponent id={tile.id} colour={tile.colour}></RandomTileComponent>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}
