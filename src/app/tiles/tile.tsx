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
      <Link href={`/tiles/${id}`}>
        <div className={`flasherr-tile-small flasherr-${colour}`}>
          <p>I am a small Tile!</p>
        </div>
      </Link>
  );
}

export { TileComponent, TileComponentSmall }
