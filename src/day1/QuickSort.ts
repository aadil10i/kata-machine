function qs(arr: number[], lo: number, hi: number): void {
    // Means array is empty (base case(empty array) (stops recursion))
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, hi, lo);

    // recurse left side (less than pivot (without including pivot))
    // recurse right side (greater than pivot (without including pivot))
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

// create a pivot within arr
// create index for loop
// where index < = pivot, sort to left
// where index > pivot sort to right

function partition(arr: number[], lo: number, hi: number): number {
    const piv = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= piv) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    const tmp2 = arr[hi];
    arr[hi] = arr[idx];
    arr[idx] = tmp2;

    return idx;
}

export default function quick_sort(arr: number[]): void {}
