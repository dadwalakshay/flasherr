import PocketBase from 'pocketbase';
import { Tile, TypedPocketBase } from '../db';
import { TileComponent } from '../tile';

export default async function Tile({ params: { id } }: { params: { id: string } }) {
    const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

    const tileObj = await pb.collection('tiles').getOne(id);

    return (
        <TileComponent id={id} colour={tileObj.colour}></TileComponent>
    );
}
