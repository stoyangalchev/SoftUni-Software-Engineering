function sunglasses([arg1]) {
    let n = Number(arg1);
    let frame = '';
    let frame1 = '|';

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));

    for (let row = 1; row <= n - 2; row++) {
        if (n % 2 == 1 && row == (n - 1) / 2) {
            frame = frame1.repeat(n);
        } else if (n % 2 == 0 && row == n / 2 - 1) {
            frame = frame1.repeat(n);
        } else {
            frame = ' '.repeat(n);
        }
        console.log(
            `*${'/'.repeat(2 * n - 2)}*${frame}*${'/'.repeat(2 * n - 2)}*`
        );
    }

    console.log('*'.repeat(2 * n) + ' '.repeat(n) + '*'.repeat(2 * n));
}
sunglasses([10]);
