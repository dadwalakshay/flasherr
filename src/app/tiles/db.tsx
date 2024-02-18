import PocketBase, { RecordService } from 'pocketbase';

interface Tile {
    id:     string;
    colour: string;
}

interface TypedPocketBase extends PocketBase {
    collection(name: string): RecordService;
    collection(name: 'tiles'): RecordService<Tile>;
}

function getPocketbaseClient() {
    return new PocketBase(process.env.pocketbaseBaseURL) as TypedPocketBase;
}

function getTileSubscriptions(callback: any) {
    const pb = getPocketbaseClient();

    return pb.collection('tiles').subscribe('*', callback)
}

function getTileSubscription(id: string, callback: any) {
    const pb = getPocketbaseClient();

    return pb.collection('tiles').subscribe(id, callback)
}

async function getTiles() {
    const pb = getPocketbaseClient();

    const tiles = await pb.collection('tiles').getList();

    return tiles
}

async function getTile(id: string) {
    const pb = getPocketbaseClient();

    const tile = await pb.collection('tiles').getOne(id);

    return tile
}

async function updateTile(id: string, colour: string) {
    const pb = getPocketbaseClient();

    const tile = await pb.collection('tiles').update(id, {'colour': colour});

    return tile
}

export type { Tile }

export { getPocketbaseClient, getTileSubscriptions, getTileSubscription, getTiles, getTile, updateTile }
