import fs from 'fs'
import path from 'path'

import { strict } from 'assert'

export default (value, name, opts = {}) => {
	opts = {
		testdata: 'testdata',
		dirname: undefined,
		...opts,
	}
	const dirpath = path.join(opts.dirname, opts.testdata)
	const filepath = path.join(dirpath, name)
	if (!fs.existsSync(filepath)) {
		if (!fs.existsSync(dirpath)) {
			fs.mkdirSync(dirpath, { recursive: true })
		}
		fs.writeFileSync(filepath, value)
		return
	}
	const file = fs.readFileSync(filepath).toString()
	strict.equal(file, value)
}
