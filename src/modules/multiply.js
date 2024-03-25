export default (a, b) => {
    const result = a * b;
    if (result > 10) {
        return 10;
    } else if (result < 1) {
        return 1;
    } else {
        return result;
    }
}
