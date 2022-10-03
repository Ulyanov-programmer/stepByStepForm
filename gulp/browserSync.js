import { browsersync, paths, } from './importSources.js'

export default function browserSyncFunc() {
	browsersync.init({
		server: {
			baseDir: paths.build.html,
		},
		port: 3000,
		notify: false,
	})
}