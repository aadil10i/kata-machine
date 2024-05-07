export default function two_crystal_balls(breaks: boolean[]): number {
    const Jump = Math.floor(Math.sqrt(breaks.length));
    let i = Jump;
    for (i < breaks.length; (i += Jump); ) {
        if (breaks[i]) {
            break;
        }
    }

    i -= Jump;
    for (let j = 0; j < Jump && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
