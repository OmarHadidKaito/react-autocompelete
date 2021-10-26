
import wait from '../utils/wait';
interface IMoives {
    name: string;
    id: number;
}

export const getMoives = async (query: string): Promise<IMoives[]> => {
    const Moives: IMoives[] = [
        { name: 'The Shawshank Redemption', id: 1 },
        { name: 'The Godfather', id: 2 },
        { name: 'The Godfather: Part II', id: 3 },
        { name: 'The Dark Knight', id: 4 },
        { name: '12 Angry Men', id: 5 },
        { name: 'Schindler\'s List', id: 6 },
        { name: 'Pulp Fiction', id: 7 },
        { name: 'The Lord of the Rings', id: 8 },
        { name: 'The Good, the Bad and the Ugly', id: 9 },
        { name: 'Fight Club', id: 10 },
        { name: 'The Fellowship of the Ring', id: 11 },
        { name: 'Star Back', id: 12 },
        { name: 'Forrest Gump', id: 13 },
        { name: 'Inception', id: 14 },
        { name: 'The Two Towers', id: 15 },
        { name: 'One Flew Over the Cuckoo\'s Nest', id: 16 },
        { name: 'Goodfellas', id: 17 },
        { name: 'The Matrix', id: 18 },
        { name: 'Seven Samurai', id: 19 },
    ];
    await wait(1000);
    const result = Moives.filter((move) => move.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
    return Promise.resolve(result);
}


