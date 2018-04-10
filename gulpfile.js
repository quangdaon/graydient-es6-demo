const gulp = require('gulp');
const rename = require('gulp-rename');

const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

const rollup = require('gulp-better-rollup');
const uglify = require('gulp-uglify');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const json = require('rollup-plugin-json');
const async = require('rollup-plugin-async');

const debug = process.env.NODE_ENV !== 'production';

const browserSync = require('browser-sync');

gulp.task('scripts', function () {
	const replacements = {
		ENV: process.env.NODE_ENV
	};

	const gulpScripts = gulp.src('src/js/entry.js')
		.pipe(rollup({
			plugins: [
				replace(Object.assign({
					delimiters: ['|', '|']
				}, replacements)),
				resolve({ browser: true }),
				commonjs(),
				json(),
				babel({
					exclude: 'node_modules/**',
					babelrc: false,
					presets: ['es2015-rollup']
				})
			]
		}, 'cjs'))
		.pipe(rename('main.js'));

	if (!debug) {
		gulpScripts.pipe(uglify())
			.pipe(rename({
				suffix: '.min'
			}));
	}

	gulpScripts.pipe(gulp.dest('dist/js'));

	//if (debug) {
	//	gulpScripts.pipe(browserSync.reload());
	//} // Getting error :/

	return gulpScripts;
});

gulp.task('styles', function () {
	const gulpStyles = gulp.src('src/sass/**/**/*.scss')
		.pipe(sass({
			outputStyle: debug ? 'expanded' : 'compressed'
		}).on('error', sass.logError))
		.pipe(prefix());

	if (!debug) {
		gulpStyles
			.pipe(rename({
				suffix: '.min'
			}));
	}

	gulpStyles.pipe(gulp.dest('dist/css'));

	if (debug) {
		gulpStyles.pipe(browserSync.reload({
			stream: true
		}));
	}

	return gulpStyles;
});

// Gulp BrowserSync
gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'demo',
			index: 'index.html',
			routes: {
				'/dist': 'dist'
			}
		},
		ghostMode: false,
		notify: false
	});
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch('src/sass/**/**/*.scss', ['styles']);
	gulp.watch('src/js/**/**/*.js', ['scripts']);

	gulp.watch('dist/js/**/**/*.js', browserSync.reload);
});

gulp.task('compile', ['styles', 'scripts']);
gulp.task('default', ['compile', 'watch']);