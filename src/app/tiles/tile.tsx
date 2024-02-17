import Link from 'next/link';

function TileComponent({ id, colour }: { id: string, colour: string }) { 
  return (
    <div className={`flasherr-tile flasherr-${colour}`}>
      <Link href={`/tiles/${id}/realtime`}>Goto realtime mode!</Link>
    </div>
  );
}

function TileComponentSmall({ id, colour }: { id: string, colour: string }) { 
  return (
    <div className={`flasherr-tile-small flasherr-${colour}`}>
      <Link href={`/tiles/${id}`}>I am Small Tile!</Link>
    </div>
  );
}

export { TileComponent, TileComponentSmall }
