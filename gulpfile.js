const PSKWEBCOMPONENTS_GITHUB_URL = "https://github.com/PrivateSky/pskwebcomponents"
const CARDINAL_GITHUB_URL = "https://github.com/PrivateSky/cardinal"

const gulp = require('gulp');
const run = require("gulp-run-command").default;
const git = require('gulp-git');
const include = require('gulp-include');
const del = require('del');
const fs = require('fs');
const { series } = require('gulp');
let PSKWEBCOMPONENTS_PATH;
let CARDINAL_PATH;

function init(cb) {
    CARDINAL_PATH = CARDINAL_GITHUB_URL.split('/')[CARDINAL_GITHUB_URL.split('/').length - 1]
    PSKWEBCOMPONENTS_PATH = PSKWEBCOMPONENTS_GITHUB_URL.split('/')[PSKWEBCOMPONENTS_GITHUB_URL.split('/').length - 1]
    cb();
}

function getWebComponents(cb) {
    if (fs.existsSync('../' + PSKWEBCOMPONENTS_PATH)) {
        cb();
    } else {
        return git.clone(PSKWEBCOMPONENTS_GITHUB_URL, { args: '../' + PSKWEBCOMPONENTS_PATH }, function (err) {
            if (err) console.log(err);
        });
    }
}

function installComponents(cb) {
    let currentDir = process.cwd();
    process.chdir('../' + PSKWEBCOMPONENTS_PATH);
    run('npm install')().then(function () {
        process.chdir(currentDir);
        cb();
    });
}

function getCardinal(cb) {
    if (fs.existsSync('../' + CARDINAL_PATH)) {
        cb();
    } else {
        return git.clone(CARDINAL_GITHUB_URL, { args: '../' + CARDINAL_PATH }, function (err) {
            if (err) console.log(err);
        });
    }
};

function installCardinal(cb) {
    let currentDir = process.cwd();
    process.chdir('../' + CARDINAL_PATH);
    run('npm install')().then(function () {
        process.chdir(currentDir);
        cb();
    });
}

async function updateCardinal(cb) {

    const currentDir = process.cwd();
    process.chdir('../' + CARDINAL_PATH);
    await run('gulp build')().then(function () {
        process.chdir(currentDir);
        cb();
    });
}
async function deleteFiles(cb) {
    await del(['./cardinal.js', './cardinal/**', './themes/default/**']);
    const currentDir = process.cwd();
    process.chdir('../' + CARDINAL_PATH )
    await del('./release/cardinal/**');
    process.chdir(currentDir)
    cb();
}
function copyBuild(cb) {
    gulp.src('../' + CARDINAL_PATH + '/release/cardinal.js')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./'));

    gulp.src('../' + CARDINAL_PATH + '/release/cardinal/**/*')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./cardinal'));
    gulp.src('../' + CARDINAL_PATH + '/release/themes/default/**')
        .pipe(include({
            separateInputs: true,
        }))
        .pipe(gulp.dest('./themes/default/'));
    cb();
}

exports.build = series(init, getWebComponents, installComponents, getCardinal, installCardinal, deleteFiles, updateCardinal, copyBuild);