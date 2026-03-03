const fs = require('fs');
const path = require('path');
const login = require('./login');

const filePath = path.join(__dirname, 'testCases.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

const testCases = lines
    .slice(1)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map((line) => {
        const parts = line.split(',');
        const tc       = parts[0];
        const username = parts[1];
        const password = parts[2];
        const expected = parts.slice(3).join(',');
        return { tc, username, password, expected };
    });

testCases.forEach(({ tc, username, password, expected }) => {
    const label = `${tc}: username="${username}" | password="${password}" | expected="${expected}"`;
    test(label, () => {
        expect(login(username, password)).toBe(expected);
    });
});
