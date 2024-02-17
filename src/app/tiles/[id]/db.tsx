import PocketBase, { RecordService } from 'pocketbase';

interface Tile {
    id:     string;
    colour: string;
}

interface TypedPocketBase extends PocketBase {
    collection(name: string): RecordService;
    collection(name: 'tiles'): RecordService<Tile>;
}

export type { Tile, TypedPocketBase };
