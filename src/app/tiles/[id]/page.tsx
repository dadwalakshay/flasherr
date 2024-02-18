import { getTile } from '../db';
import { TileComponent } from '../tile';

export default async function Tile({ params: { id } }: { params: { id: string } }) {
    const tile = await getTile(id);

    return (
        <TileComponent id={id} colour={tile.colour}></TileComponent>
    );
}
