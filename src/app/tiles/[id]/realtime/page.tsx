import { TileComponentRealtime } from './tile';


export default async function Tile({ params: { id } }: { params: { id: string } }) {
    return (
        <TileComponentRealtime id={id}></TileComponentRealtime>
    )
}
