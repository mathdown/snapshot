import snapshot from '../snapshot.mjs'

import mtest from 'm.test'
import { strict } from 'assert'

import path from 'path';
import url from 'url';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

mtest.test('checks snapshot', () => {
	strict.doesNotThrow(() => {
		snapshot('A\nB\nC', 'test1', { dirname })
		snapshot('A\nB\nC', 'test1', { dirname })
	}, strict.AssertionError)
})

mtest.test('throws error', () => {
	strict.throws(() => {
		snapshot('A\nB\nC', 'test2', { dirname })
		snapshot('B\nC\nD', 'test2', { dirname })
	}, strict.AssertionError)
})
