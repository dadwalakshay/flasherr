import PocketBase from 'pocketbase';
import { TypedPocketBase } from './db';
import { TileComponentSmall } from './tile';

export default async function Tiles() {
    const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

    const tiles = await pb.collection('tiles').getList();

    return (
        <ul>
            {
                tiles.items.map((tile) => (
                    <li key={tile.id}>
                        <TileComponentSmall id={tile.id} colour={tile.colour}></TileComponentSmall>
                    </li>
                ))
            }
        </ul>
    )
}