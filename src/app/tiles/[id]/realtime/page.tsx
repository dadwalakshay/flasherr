import PocketBase from 'pocketbase';
import { Tile, TypedPocketBase } from '../../db';
import { TileComponentRealtime } from './tile';


export default async function Tile({ params: { id } }: { params: { id: string } }) {
    const pb = new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;

    const tileObj = await pb.collection('tiles').getOne(id);

    return (
        <TileComponentRealtime id={id} colour={tileObj.colour}></TileComponentRealtime>
    )
}
