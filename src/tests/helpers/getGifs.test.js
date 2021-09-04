import { getGifs } from '../../helpers/getGifs';

describe('getGifs fetch tests', () => {
    
    test('should return 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('should not throw an error when no category is passed', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});
