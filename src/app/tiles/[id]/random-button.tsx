import updateTileColour from '@/app/actions';

export default function RandomColorButton({ id, setTileColour }: { id: string, setTileColour: any}) {
    return (
    <button onClick={async () => {
        const randomColour = updateTileColour(id);

        setTileColour(randomColour);
    }} className='random-button'>????</button>
    );
}