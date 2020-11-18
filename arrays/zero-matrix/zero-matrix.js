const zeroMatrix = m => {
    let rows = new Array(m.length).fill(0);
    let cols = new Array(m[0].length).fill(0);

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if(!m[i][j]) {
                rows[i] = 1;
                cols[j] = 1;
            }
        }
    }

    for (let ri = 0; ri < m.length; ri++) {
        if (rows[ri]) {
            m[ri].fill(0, 0)
        } else {
            for (let ci = 0; ci < m[ri].length; ci++) {
                if (cols[ci]) m[ri][ci] = 0;
            }
        }
    }

    return m;
}

module.exports = zeroMatrix;