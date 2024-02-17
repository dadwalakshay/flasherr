export default function TileBox({ colour }: { colour: string }) { 
  const colourClassName = `flasherr-box flasherr-${colour}`;

  return (
    <div className={colourClassName}>I am Tile Box!</div>
  );
}
