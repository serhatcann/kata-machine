export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        let mid = Math.floor((high + low) / 2);
        let val = haystack[mid];

        if (val === needle) {
            return true;
        } else if (val > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return false;
}
