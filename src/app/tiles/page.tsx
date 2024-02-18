import { getTiles } from './db';
import { TileComponentSmall } from './tile';

export default async function Tiles() {
    const tiles = await getTiles();

    return (
        <div>
            <ul>
                {
                    tiles.items.map((tile) => (
                        <li key={tile.id}>
                            <TileComponentSmall id={tile.id} colour={tile.colour}></TileComponentSmall>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}