# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2020-10-15)


### ⚠ BREAKING CHANGES

* **package:** removal of Node 8 support

### Features

* add overload protection to the readiness and liveness endpoints ([cc7693d](https://www.github.com/lholmquist/kube-probe/commit/cc7693d070a798081ece788003d8e66b4c35ab63))
* Option to bypass overload protection when needed ([#93](https://www.github.com/lholmquist/kube-probe/issues/93)) ([93ee8e5](https://www.github.com/lholmquist/kube-probe/commit/93ee8e55724d1987f873fcf93022d5eabc520369)), closes [#89](https://www.github.com/lholmquist/kube-probe/issues/89)
* use the connect.js API instead of express.js API ([4da9825](https://www.github.com/lholmquist/kube-probe/commit/4da9825c018721869325360ee48050193610a305))


### Bug Fixes

* [Snyk] Upgrade xo from 0.28.1 to 0.28.2 ([#96](https://www.github.com/lholmquist/kube-probe/issues/96)) ([58b97a0](https://www.github.com/lholmquist/kube-probe/commit/58b97a0370fc02ca61faa785d40eeb203488c757))
* response should include content type header ([#31](https://www.github.com/lholmquist/kube-probe/issues/31)) ([d0dce9d](https://www.github.com/lholmquist/kube-probe/commit/d0dce9db294007a6f536bda3d10628a70a64c664))
* upgrade standard-version from 8.0.1 to 8.0.2 ([#117](https://www.github.com/lholmquist/kube-probe/issues/117)) ([39a1d98](https://www.github.com/lholmquist/kube-probe/commit/39a1d989bfa5138347dfa01b5ab59e79ad82d1b7))
* upgrade xo from 0.28.0 to 0.28.1 ([#92](https://www.github.com/lholmquist/kube-probe/issues/92)) ([c5f663d](https://www.github.com/lholmquist/kube-probe/commit/c5f663d115feff636d8a275fa33dba5400d1b317))
* upgrade xo from 0.32.1 to 0.33.0 ([#119](https://www.github.com/lholmquist/kube-probe/issues/119)) ([2d6352b](https://www.github.com/lholmquist/kube-probe/commit/2d6352b70b140818694bc77dac9f7fa42891f139))
* upgrade xo from 0.33.0 to 0.33.1 ([#122](https://www.github.com/lholmquist/kube-probe/issues/122)) ([1fbd76e](https://www.github.com/lholmquist/kube-probe/commit/1fbd76ebcf806b34c1c90ad4fb622ce8c9e9a03c))
* **license:** wrong license text ([36c59b1](https://www.github.com/lholmquist/kube-probe/commit/36c59b1a08c7bd6b38dfdeaad695b43b69b0d90c))
* **pacakge.json:** need a version ([ba32083](https://www.github.com/lholmquist/kube-probe/commit/ba32083e642ca375da97a8cf8bc1753494fb0cfb))
* **package:** update overload-protection to version 1.2.0 ([c99b658](https://www.github.com/lholmquist/kube-probe/commit/c99b658f1362150257db7ceef6db436d5b6b2f2b))


### Miscellaneous Chores

* **package:** Engine parameter targets node 10+ ([#83](https://www.github.com/lholmquist/kube-probe/issues/83)) ([04175c2](https://www.github.com/lholmquist/kube-probe/commit/04175c282ee94d4f7ef29e234d6b68393c466ccc))

### [1.0.1](https://www.github.com/nodeshift/kube-probe/compare/v1.0.0...v1.0.1) (2020-10-14)


### Bug Fixes

* upgrade xo from 0.33.0 to 0.33.1 ([#122](https://www.github.com/nodeshift/kube-probe/issues/122)) ([1fbd76e](https://www.github.com/nodeshift/kube-probe/commit/1fbd76ebcf806b34c1c90ad4fb622ce8c9e9a03c))

## [1.0.0](https://github.com/nodeshift/kube-probe/compare/v0.5.0...v1.0.0) (2020-09-10)


### Bug Fixes

* [Snyk] Upgrade xo from 0.28.1 to 0.28.2 ([#96](https://github.com/nodeshift/kube-probe/issues/96)) ([58b97a0](https://github.com/nodeshift/kube-probe/commit/58b97a0370fc02ca61faa785d40eeb203488c757))
* upgrade standard-version from 8.0.1 to 8.0.2 ([#117](https://github.com/nodeshift/kube-probe/issues/117)) ([39a1d98](https://github.com/nodeshift/kube-probe/commit/39a1d989bfa5138347dfa01b5ab59e79ad82d1b7))
* upgrade xo from 0.32.1 to 0.33.0 ([#119](https://github.com/nodeshift/kube-probe/issues/119)) ([2d6352b](https://github.com/nodeshift/kube-probe/commit/2d6352b70b140818694bc77dac9f7fa42891f139))

## [0.5.0](https://github.com/nodeshift/kube-probe/compare/v0.4.0...v0.5.0) (2020-04-23)


### Features

* Option to bypass overload protection when needed ([#93](https://github.com/nodeshift/kube-probe/issues/93)) ([93ee8e5](https://github.com/nodeshift/kube-probe/commit/93ee8e55724d1987f873fcf93022d5eabc520369)), closes [#89](https://github.com/nodeshift/kube-probe/issues/89)


### Bug Fixes

* upgrade xo from 0.28.0 to 0.28.1 ([#92](https://github.com/nodeshift/kube-probe/issues/92)) ([c5f663d](https://github.com/nodeshift/kube-probe/commit/c5f663d115feff636d8a275fa33dba5400d1b317))

## [0.4.0](https://github.com/nodeshift/kube-probe/compare/v0.3.3...v0.4.0) (2020-02-07)


### chore

* **package:** Engine parameter targets node 10+ ([#83](https://github.com/nodeshift/kube-probe/issues/83)) ([04175c2](https://github.com/nodeshift/kube-probe/commit/04175c2))


### BREAKING CHANGES

* **package:** removal of Node 8 support



### [0.3.3](https://github.com/nodeshift/kube-probe/compare/v0.3.2...v0.3.3) (2020-01-23)


### Bug Fixes

* **package:** update overload-protection to version 1.2.0 ([c99b658](https://github.com/nodeshift/kube-probe/commit/c99b658))


### Build System

* using LTS and 10x also cleaning up the config ([58026c1](https://github.com/nodeshift/kube-probe/commit/58026c1))



## [0.3.2](https://github.com/nodeshift/kube-probe/compare/v0.3.1...v0.3.2) (2019-02-25)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/nodeshift/kube-probe/compare/v0.3.0...v0.3.1) (2018-02-12)


### Bug Fixes

* response should include content type header ([#31](https://github.com/nodeshift/kube-probe/issues/31)) ([d0dce9d](https://github.com/nodeshift/kube-probe/commit/d0dce9d))
