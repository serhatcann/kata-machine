export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (!head) return false;
    if (head.value === needle) return true;
    if (head.left && head.value >= needle) {
        return dfs(head.left, needle);
    } else if (head.right && head.value <= needle) {
        return dfs(head.right, needle);
    }

    return false;
}

// iterative
// export default function dfs(
//     head: BinaryNode<number> | null,
//     needle: number,
// ): boolean {
//     if (!head) return false;

//     while (head !== null) {
//         if (head.value === needle) {
//             return true;
//         }
//         if (head.value >= needle) {
//             head = head.left;
//         } else {
//             head = head.right;
//         }
//     }

//     return false;
// }
