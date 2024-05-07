export default function bs_list(haystack: number[], needle: number): boolean {
    // let lo = 0;
    // let hi = haystack.length - 1;

    // while (lo <= hi) {
    //     const m = Math.floor((lo + hi) / 2);
    //     const v = haystack[m];

    //     if (v === needle) {
    //         return true;
    //     } else if (v > needle) {
    //         hi = m - 1;
    //     } else {
    //         lo = m + 1;
    //     }
    // }
    // return false;

    let high = haystack.length - 1;
    let low = haystack[0];

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const v = haystack[mid];

        if (v === needle) {
            return true;
        } else if (v < needle) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
