# Changelog

## [9.9.0](https://github.com/biosimulations/biosimulations/compare/v9.8.1...v9.9.0) (2022-02-23)


### Features

* **dispatch-service:** organized Slurm scripts and logs for refreshing images ([8248642](https://github.com/biosimulations/biosimulations/commit/8248642793a615bc98487d10af724ed9b71790fc))

## [9.8.1](https://github.com/biosimulations/biosimulations/compare/v9.8.0...v9.8.1) (2022-02-23)


### Bug Fixes

* **api:** fixed path to output archives ([155076b](https://github.com/biosimulations/biosimulations/commit/155076b0fd989ac0c60a7419ed06b1e6718349aa))
* **dispatch-service:** corrected error tracking of S3 uploads, always trying to upload results to S3 ([ab40b15](https://github.com/biosimulations/biosimulations/commit/ab40b1555c1a5ca7b3b63a4a4a6678622824f933))
* **dispatch-service:** fix temporary directories for containers ([190824c](https://github.com/biosimulations/biosimulations/commit/190824c1f20952a60872e1b77f809149b10e3691))

## [9.8.0](https://github.com/biosimulations/biosimulations/compare/v9.7.4...v9.8.0) (2022-02-22)


### Bug Fixes

* **combine-api:** fixed JSON serialization for Swagger app ([6d59f90](https://github.com/biosimulations/biosimulations/commit/6d59f901844d8bbfd69d50fe3fda09de19a77d92))
* **combine-api:** fixed JSON serialization for Swagger app by replacing ujson with orjson ([e10c291](https://github.com/biosimulations/biosimulations/commit/e10c2911d94ad5dee1cfb0ea6f27ac4d7f059fa6))


### Features

* **combine-api:** upgraded Brian2, pyNeuroML, NEURON ([329e07a](https://github.com/biosimulations/biosimulations/commit/329e07aae60292b02321ececee7d6768d26e87df))


### Performance Improvements

* **combine-api:** decreasing number of requests in between restarting ([438c6fb](https://github.com/biosimulations/biosimulations/commit/438c6fb14bf25b51a74ea1f3dd28e76a945548a1))

## [9.7.4](https://github.com/biosimulations/biosimulations/compare/v9.7.3...v9.7.4) (2022-02-19)


### Performance Improvements

* **combine-api:** sped up JSON encoding ([44fe6c1](https://github.com/biosimulations/biosimulations/commit/44fe6c13f8c2fd4e621ec12bb5b3f4a99ee87ddf))

## [9.7.3](https://github.com/biosimulations/biosimulations/compare/v9.7.2...v9.7.3) (2022-02-19)


### Bug Fixes

* **dispatch-service:** corrected capitalization of SED-ML, COMBINE ([e267376](https://github.com/biosimulations/biosimulations/commit/e267376e9c56d5ad59537b2f1d4378ebdf4138cf))


### Performance Improvements

* **combine-api:** added ability to directly parse OMEX manifest files ([a43a50e](https://github.com/biosimulations/biosimulations/commit/a43a50ebb5738bb97bf8483148af1c9ca04bcbf0))
* **dispatch-service:** switched to directly parsing manifests ([b86f48c](https://github.com/biosimulations/biosimulations/commit/b86f48c017106d79bd63ac0f53e8b5207db18bfd))

## [9.7.2](https://github.com/biosimulations/biosimulations/compare/v9.7.1...v9.7.2) (2022-02-19)


### Bug Fixes

* **api:** handled older simulation specifications that lack styles ([01d7829](https://github.com/biosimulations/biosimulations/commit/01d78290d1f6c5710c47b7005531e5b483371101))

## [9.7.1](https://github.com/biosimulations/biosimulations/compare/v9.7.0...v9.7.1) (2022-02-18)


### Bug Fixes

* **api:** set minimum file size to 0 ([6daf637](https://github.com/biosimulations/biosimulations/commit/6daf637ecbe765cd0eeb2e7923ca701e865f88c1))
* **dispatch,platform:** fixed default plot stroke width ([637a59c](https://github.com/biosimulations/biosimulations/commit/637a59c6e862d2b6ee7f39b37d0bc8fdf5622c4f))

## [9.7.0](https://github.com/biosimulations/biosimulations/compare/v9.6.4...v9.7.0) (2022-02-18)


### Features

* **dispatch,platform:** disabled 2d plots for 1d data ([3dcbe8a](https://github.com/biosimulations/biosimulations/commit/3dcbe8a85a4a886dd1c73a8a300d3962c4c40403))

## [9.6.4](https://github.com/biosimulations/biosimulations/compare/v9.6.3...v9.6.4) (2022-02-18)


### Performance Improvements

* **dispatch-service:** clear out the old jobs from queue immediately after completion ([3732d84](https://github.com/biosimulations/biosimulations/commit/3732d84c60ed399c8a70a872d6c84e315bb31b60)), closes [#4236](https://github.com/biosimulations/biosimulations/issues/4236)

## [9.6.3](https://github.com/biosimulations/biosimulations/compare/v9.6.2...v9.6.3) (2022-02-17)


### Bug Fixes

* **deps:** update nestjs ([418fc1a](https://github.com/biosimulations/biosimulations/commit/418fc1a3c83d6a328fc58ae854c0d554527913f0))
* update nx ([f04edac](https://github.com/biosimulations/biosimulations/commit/f04edac173a9b3969312000e95261320cd9bcd60))

## [9.6.2](https://github.com/biosimulations/biosimulations/compare/v9.6.1...v9.6.2) (2022-02-17)


### Performance Improvements

* **dispatch-service:** tweak stall settings for cpu intensive jobs ([b3e651c](https://github.com/biosimulations/biosimulations/commit/b3e651cb475d7d8fc579fe8c87e717034e299c51))

## [9.6.1](https://github.com/biosimulations/biosimulations/compare/v9.6.0...v9.6.1) (2022-02-16)


### Bug Fixes

* **dispatch,platform:** align rendering of styles with SED-ML L1V4 ([8e9b50d](https://github.com/biosimulations/biosimulations/commit/8e9b50db8777dcba33acb4227bd1f7f9145ee813))

## [9.6.0](https://github.com/biosimulations/biosimulations/compare/v9.5.2...v9.6.0) (2022-02-15)


### Features

* **combine-api,api,dispatch,platform:** added support for SED-ML L1V4 styles ([1144336](https://github.com/biosimulations/biosimulations/commit/11443365d47d42fc470a7f20f98684908e06df72))

## [9.5.2](https://github.com/biosimulations/biosimulations/compare/v9.5.1...v9.5.2) (2022-02-14)


### Bug Fixes

* **dispatch:** restore /simulations links ([e86f8f6](https://github.com/biosimulations/biosimulations/commit/e86f8f6642cb0d2d1b97cdd4858595713a99d6bf))

## [9.5.1](https://github.com/biosimulations/biosimulations/compare/v9.5.0...v9.5.1) (2022-02-14)


### Performance Improvements

* **api,dispatch-service:** move downloading COMBINE archive and uploading to S3 to dispatch service ([c325b7b](https://github.com/biosimulations/biosimulations/commit/c325b7b283f44773f3d0889fa9f7cb4ac6c008c9))

## [9.5.0](https://github.com/biosimulations/biosimulations/compare/v9.4.0...v9.5.0) (2022-02-13)


### Features

* **combine-api:** upgraded to flask 2, connexion 2.11, openapi-schema-validator 0.2 ([9242e7d](https://github.com/biosimulations/biosimulations/commit/9242e7dec413d6e3601e050d60f65eb865ddc137))

## [9.4.0](https://github.com/biosimulations/biosimulations/compare/v9.3.0...v9.4.0) (2022-02-13)


### Features

* **combine-api:** added endpoint for modifying COMBINE/OMEX archives ([01acfaa](https://github.com/biosimulations/biosimulations/commit/01acfaa6556e25626eb80d09e548215c7177f688))

## [9.3.0](https://github.com/biosimulations/biosimulations/compare/v9.2.4...v9.3.0) (2022-02-12)


### Bug Fixes

* **platform:** displayed model formats for projects; closes [#4098](https://github.com/biosimulations/biosimulations/issues/4098) ([624b03c](https://github.com/biosimulations/biosimulations/commit/624b03ce8ea6b147c2f06a5b39c3dad97b286005))


### Features

* improved terminology ([75c41a6](https://github.com/biosimulations/biosimulations/commit/75c41a6a067b44bee5567bda7d1e72b182124105))

## [9.2.4](https://github.com/biosimulations/biosimulations/compare/v9.2.3...v9.2.4) (2022-02-12)


### Bug Fixes

* **platform:** truncated JSON-LD descriptions ([5fbb023](https://github.com/biosimulations/biosimulations/commit/5fbb0234b26c20c67189b48f717d7c23fc805507))

## [9.2.3](https://github.com/biosimulations/biosimulations/compare/v9.2.2...v9.2.3) (2022-02-11)


### Bug Fixes

* **dispatch-service:** remove http retries on combine wrapper service ([8239f3d](https://github.com/biosimulations/biosimulations/commit/8239f3d162bfb35c5b1797a5f7ea64d475d14fce)), closes [#4032](https://github.com/biosimulations/biosimulations/issues/4032)

## [9.2.2](https://github.com/biosimulations/biosimulations/compare/v9.2.1...v9.2.2) (2022-02-08)


### Bug Fixes

* **dispatch:** make type of citation in JSON-LD data compatible with Google ([fa1b5b3](https://github.com/biosimulations/biosimulations/commit/fa1b5b3aee7aca8d2bd68e496111752e4cb4b513))
* **platform,dispatch:** modify citation in schema.org metadata for compatibility with Google ([0f2bfc3](https://github.com/biosimulations/biosimulations/commit/0f2bfc3fe6439bb03276e06db2a220f61294401a)), closes [#4179](https://github.com/biosimulations/biosimulations/issues/4179)

## [9.2.1](https://github.com/biosimulations/biosimulations/compare/v9.2.0...v9.2.1) (2022-02-08)


### Bug Fixes

* **deps:** update nest ([#4140](https://github.com/biosimulations/biosimulations/issues/4140)) ([e20adc2](https://github.com/biosimulations/biosimulations/commit/e20adc27c08f2965628546f5c19cdb619a94c754))

## [9.2.0](https://github.com/biosimulations/biosimulations/compare/v9.1.2...v9.2.0) (2022-02-07)


### Features

* add shared rxjs-backoff library ([e27269e](https://github.com/biosimulations/biosimulations/commit/e27269e0b1e2c73d14e64c860cb1387e42aeac16))

## [9.1.2](https://github.com/biosimulations/biosimulations/compare/v9.1.1...v9.1.2) (2022-02-07)


### Bug Fixes

* fix height for consent screen on mobile ([30efa91](https://github.com/biosimulations/biosimulations/commit/30efa91742c46a66c4ed2f1c90db8b3097aa5d4f)), closes [#4143](https://github.com/biosimulations/biosimulations/issues/4143)

## [9.1.1](https://github.com/biosimulations/biosimulations/compare/v9.1.0...v9.1.1) (2022-02-07)


### Bug Fixes

* **dispatch-service:** bind the /tmp directory to /local on HPC ([3d05da1](https://github.com/biosimulations/biosimulations/commit/3d05da1073e39f7ec127a022c8163a39d02f5cd6)), closes [#4135](https://github.com/biosimulations/biosimulations/issues/4135)

## [9.1.0](https://github.com/biosimulations/biosimulations/compare/v9.0.5...v9.1.0) (2022-02-07)


### Features

* add version to environment ([0bca178](https://github.com/biosimulations/biosimulations/commit/0bca1785ed8ff3250ae5bcb41cd588f936557466))

## [9.0.5](https://github.com/biosimulations/biosimulations/compare/v9.0.4...v9.0.5) (2022-02-07)


### Bug Fixes

* **api,dispatch-service:** remove completed and failed jobs from queue ([bbf3301](https://github.com/biosimulations/biosimulations/commit/bbf330132da222303a4fb812a82863a19c95427f)), closes [#4176](https://github.com/biosimulations/biosimulations/issues/4176)
* **dispatch-service:** correct ordering of processing steps in job, clean up log ([61115d2](https://github.com/biosimulations/biosimulations/commit/61115d2ad3b8f53cfc7c22ee29b26ae5283a276b)), closes [#4113](https://github.com/biosimulations/biosimulations/issues/4113)

## [9.0.4](https://github.com/biosimulations/biosimulations/compare/v9.0.3...v9.0.4) (2022-02-06)


### Bug Fixes

* **platform:** fix display of thumnails in browse ([34cc39f](https://github.com/biosimulations/biosimulations/commit/34cc39f2d6687f6f5d10a64a3b9b6f1586b88d96))

## [9.0.3](https://github.com/biosimulations/biosimulations/compare/v9.0.2...v9.0.3) (2022-02-05)


### Bug Fixes

* use custom version of nestjs/bullmq ([9161dbd](https://github.com/biosimulations/biosimulations/commit/9161dbd75f82e6646a9f8ff78e5a9a36911924f8))

## [9.0.2](https://github.com/biosimulations/biosimulations/compare/v9.0.1...v9.0.2) (2022-02-05)


### Bug Fixes

* **deps:** security updates ([1e91f8a](https://github.com/biosimulations/biosimulations/commit/1e91f8ab989d3ee435287e9363bba1e31077f9dc))

## [9.0.1](https://github.com/biosimulations/biosimulations/compare/v9.0.0...v9.0.1) (2022-02-04)


### Bug Fixes

* **api:** fix health indicator queue connection ([d39463e](https://github.com/biosimulations/biosimulations/commit/d39463eefa708787abe41c496badf8f01bb406a3))
* **deps:** update nrwl and angular ([f6188be](https://github.com/biosimulations/biosimulations/commit/f6188be939e867ba9d275e1cece1f12367db225d))
* **dispatch-service:** fix flow processor connection options to queue ([0150b1e](https://github.com/biosimulations/biosimulations/commit/0150b1e124b1b8dd4b811356379aaa04847b439d))
* **dispatch-service:** fix queue connection for dashboard ([3971d9f](https://github.com/biosimulations/biosimulations/commit/3971d9f86eaad3d39b464691d2845d8f071e736a))
* fix connection options for queues ([26a67f2](https://github.com/biosimulations/biosimulations/commit/26a67f2cb8abcec502edd3d0ecdb5965c2769d18))

## [9.0.0](https://github.com/biosimulations/biosimulations/compare/v8.8.0...v9.0.0) (2022-02-03)


### Bug Fixes

* **api:** fix bull health check ([d953e60](https://github.com/biosimulations/biosimulations/commit/d953e60c8b480e71c6309e91e79dc1d283a5d6b5))
* **api:** handle case when metadata is missing ([48dd040](https://github.com/biosimulations/biosimulations/commit/48dd040386a7a37e39a3ccd7a5cd1c3e418c18e4))
* **api:** handle case when thumnails urls are not defined ([e0e7816](https://github.com/biosimulations/biosimulations/commit/e0e78166b4fc95506081105d3a37ea8387baa735))
* **api:** prevent process crash for missing results and improve error handling ([50f62ff](https://github.com/biosimulations/biosimulations/commit/50f62ff76608ccf1b0c262634656c1903118c2bf)), closes [#4007](https://github.com/biosimulations/biosimulations/issues/4007)
* **combine-api:** fixed configuration of Gunicorn deployment ([9acd09f](https://github.com/biosimulations/biosimulations/commit/9acd09faf6d280b95608f421e61fb1bc2c56be0f))
* **combine-api:** reset timeout to 30 s ([ee162ee](https://github.com/biosimulations/biosimulations/commit/ee162eeccb0ae848587a08976cd40e97dfe487e2))
* **config:** fixed value of platformApp in endpointsTemplate ([61d2d5f](https://github.com/biosimulations/biosimulations/commit/61d2d5fed604fdde728927b21bafc0f6222307d8))
* **dispatch-service:** add retrying for job submission to hpc ([8161089](https://github.com/biosimulations/biosimulations/commit/81610890aaebb86864d0d0d89395ce554909aa70)), closes [#4099](https://github.com/biosimulations/biosimulations/issues/4099)
* **dispatch-service:** fix ssh connection for stale connections ([ef44d57](https://github.com/biosimulations/biosimulations/commit/ef44d573ad027082ce2912f95d94071aecb73818)), closes [#4099](https://github.com/biosimulations/biosimulations/issues/4099)
* **dispatch-service:** handle dependency between archive extraction and thumbnail generation ([9f94cee](https://github.com/biosimulations/biosimulations/commit/9f94cee2b2e9b8094a22f608a089019542beaf0e)), closes [#4063](https://github.com/biosimulations/biosimulations/issues/4063)
* **dispatch-service:** modify sbatch script to get correct content tyes ([85259ab](https://github.com/biosimulations/biosimulations/commit/85259abbabbae369eae56a77550446706449ddf0)), closes [#4106](https://github.com/biosimulations/biosimulations/issues/4106)
* **ui:** fixed updating of table ([43d87b9](https://github.com/biosimulations/biosimulations/commit/43d87b9de60169977a9fa6db33fde174864e2c93))
* update angular and nrwl dependencies ([f5edd62](https://github.com/biosimulations/biosimulations/commit/f5edd62003ddf11d37fbd65911b7cb814f0e59e4))


### Code Refactoring

* **api:** remove statusReason field from SimulationRun ([3c2e670](https://github.com/biosimulations/biosimulations/commit/3c2e670a124f80992a5d7af889c149a365bc9c29)), closes [#4111](https://github.com/biosimulations/biosimulations/issues/4111)


### Features

* add cors and lifecycle config for storage buckets ([fe3e622](https://github.com/biosimulations/biosimulations/commit/fe3e6223a07f9eb6e16b8d96c429469ab14be03f)), closes [#3994](https://github.com/biosimulations/biosimulations/issues/3994)
* **api,simulators-api:** support additional variants of true for query arguments ([116d6c2](https://github.com/biosimulations/biosimulations/commit/116d6c2e307a0a76018c9861031ce76a93a5bb2f))
* **api:** add endpoint for putting endpoints of files. ([6aecd5b](https://github.com/biosimulations/biosimulations/commit/6aecd5b574d33232278344e962cf46e8f028b29f))
* **api:** add endpoint to download files and thumbnails ([2b41eba](https://github.com/biosimulations/biosimulations/commit/2b41ebabce2c09804671c2ebe5d97e21c120bb9f)), closes [#3981](https://github.com/biosimulations/biosimulations/issues/3981)
* **api:** standardized error messages ([3264f1e](https://github.com/biosimulations/biosimulations/commit/3264f1e5ba0e4dd7723b3df3b7b27e3af2a45265))
* **api:** standardized titles of errors ([92c2e0b](https://github.com/biosimulations/biosimulations/commit/92c2e0b4788ac01f7dc5b320cf9fa078f8a368ae))
* **combine-api:** update to BioNetGen 2.7.0 ([f2b53a1](https://github.com/biosimulations/biosimulations/commit/f2b53a1aed1bea76955866546d155c1631a4b2ed))
* **combine-api:** updated dependencies ([9f0e1a2](https://github.com/biosimulations/biosimulations/commit/9f0e1a2867ed4de88db666a0ed9da4cd3b087e04))
* **combine-api:** updated to assimulo 3.2.9 ([f323461](https://github.com/biosimulations/biosimulations/commit/f323461f8ec33bc7762f370361389b028d335c6c))
* **combine-api:** updated to biosimulators-utils 0.1.157 ([0df1218](https://github.com/biosimulations/biosimulations/commit/0df12185461308050a67c24241a62120a9125bae))
* **combine-api:** updated to biosimulators-utils 0.1.159 ([469461e](https://github.com/biosimulations/biosimulations/commit/469461e4a7c2aafbee67daf84c518ab043cd5db8))
* **dispatch-service:** add final processing step for simulation runs ([d994867](https://github.com/biosimulations/biosimulations/commit/d9948678ab7250505e338d1444783b635410ae84))
* **dispatch-service:** add processors for each step of simulation run workflow ([79aaa35](https://github.com/biosimulations/biosimulations/commit/79aaa35dbab72b9a1e626139aa4b58083bb47c41))
* **dispatch-service:** add retries to ssh commands that fail to submit ([f7d6a05](https://github.com/biosimulations/biosimulations/commit/f7d6a05a6c2f2951147a6e17c14d5e26e434d5d4))
* **dispatch-service:** add ui to monitor queues ([a9fc321](https://github.com/biosimulations/biosimulations/commit/a9fc32160ec9161c3c73716421da9de430c7c91f))
* **dispatch-service:** define queues and jobs for simulation workflow ([cb4fac1](https://github.com/biosimulations/biosimulations/commit/cb4fac1d0e0e438ddf1838db903b988997d24000))
* **dispatch-service:** improve logging of post-processing steps failures ([a09c4c4](https://github.com/biosimulations/biosimulations/commit/a09c4c406ea3020c0e844d77b806943b5e05f56f))
* **dispatch,platform,ui:** added ability to render URIs such as for emails and telephones ([83a7f56](https://github.com/biosimulations/biosimulations/commit/83a7f56b88fbfd792dc78464c65634927b2dd749))
* **ontology:** added formats used with ModelDB ([da23b89](https://github.com/biosimulations/biosimulations/commit/da23b897225f25b5344f89ce502404a27c3bd1c1))
* relaxed license requirement for projects ([87cf473](https://github.com/biosimulations/biosimulations/commit/87cf4731e5cad1a93e53889d30d9aecdb1f174ae))
* **storage:** add datamodel and methods for getting output files ([9cd4b19](https://github.com/biosimulations/biosimulations/commit/9cd4b19e76382d7ca44e38151feefc0ad07e39bc))
* update maximum upload sizes and documentation ([14b0b5d](https://github.com/biosimulations/biosimulations/commit/14b0b5d1eb08e09cfdc61791e730ce5499466e72))


### Performance Improvements

* **api,dispatch-service:** change storage backend to Google Cloud ([9c26643](https://github.com/biosimulations/biosimulations/commit/9c266430e6361ceb62a62363ea974881c53a0cdf)), closes [#4039](https://github.com/biosimulations/biosimulations/issues/4039)
* **api,dispatch-service:** update from Bull to BullMQ ([21717ff](https://github.com/biosimulations/biosimulations/commit/21717ff6a8268de2d60d60eb6b2ce90f8a6c7ef6))
* **api:** improve specs and files reliability ([b335f4b](https://github.com/biosimulations/biosimulations/commit/b335f4b30da8e980db32cf050a6591b0a31ccf7b))
* **combine-api:** improve production runner for combine-api ([c50c48b](https://github.com/biosimulations/biosimulations/commit/c50c48b1d7cba21b84c54d5663241ee62c107300))
* **combine-api:** tweak deployment settings ([84693eb](https://github.com/biosimulations/biosimulations/commit/84693eba3195e8c0de4c93e5cf633e951772c49f))
* **dispatch-service:** increase concurrency for monitoring jobs ([2865213](https://github.com/biosimulations/biosimulations/commit/2865213e54ec4220654eefdbc65c3c3d03c7d83c))
* **dispatch-service:** increase concurrency of proccessing steps ([0a8f769](https://github.com/biosimulations/biosimulations/commit/0a8f7697c013c8ab07069edd4cffaf1b3b06c3e4)), closes [#4047](https://github.com/biosimulations/biosimulations/issues/4047)
* **dispatch-service:** increase processor concurrency to 10 ([388154d](https://github.com/biosimulations/biosimulations/commit/388154d630256e780bac7cd3b28db58b508dbb85))
* **dispatch-service:** maintain persistent ssh connections ([acccba7](https://github.com/biosimulations/biosimulations/commit/acccba7b2df44d66551e2d94782bdeedd75324dc))
* **dispatch-service:** update archiver servcie to use s3 instead of ssh ([214918d](https://github.com/biosimulations/biosimulations/commit/214918d7d92df959cad3f67eeb5a02dba25ccfb1))
* **dispatch-service:** use s3 to get logs, simplify workflow ([8fafd09](https://github.com/biosimulations/biosimulations/commit/8fafd09ed8d94358def3aa47f4edc0b0564b7770))
* **storage:** switched to streaming downloaded files to S3 ([8caed80](https://github.com/biosimulations/biosimulations/commit/8caed80d9923e5f313d838251157261844d53e42))


### Reverts

*  "[CodeFactor] Apply fixes to commit ede3534" ([234107f](https://github.com/biosimulations/biosimulations/commit/234107fc210ff1ad10644b84dfa74f99e1ea8772))
*  "refactor(dispatch-service): moved hsload to complete processor" ([13f9f82](https://github.com/biosimulations/biosimulations/commit/13f9f82db397a844d4ff6e499e65fb8fdf1417eb))
* "refactor(dispatch-service): moved archive uploading to dispatch processor" ([5db7ea1](https://github.com/biosimulations/biosimulations/commit/5db7ea1b81b2d8faf6258c8f639b3cfc4fd3ac88))
* revert "chore: format files. [skip ci]" ([d9457ca](https://github.com/biosimulations/biosimulations/commit/d9457ca9b1d18abba41f60ac2562f6e912a39cd9))


### BREAKING CHANGES

* **api:** the statusReason field has been removed from the api response

## [8.8.0](https://github.com/biosimulations/biosimulations/compare/v8.7.1...v8.8.0) (2022-01-08)


### Features

* added workflow to delete temporary COMBINE archives ([0d722e9](https://github.com/biosimulations/biosimulations/commit/0d722e939b19726c0f91c310d8a0a6a31217aed8))
* **api,combine-api,dispatch,platform:** added support for references for projects ([a544969](https://github.com/biosimulations/biosimulations/commit/a5449691805801726b643285a018dbff77e06a00))

## [8.7.1](https://github.com/biosimulations/biosimulations/compare/v8.7.0...v8.7.1) (2022-01-06)


### Bug Fixes

* add script ignore false to sharp install ([9b90d9b](https://github.com/biosimulations/biosimulations/commit/9b90d9bfeefe1e8b1044e9e2685e5de15bb3b2e4))
* **dispatch-service:** added dependency for sharp to Dockerfile ([ba344c7](https://github.com/biosimulations/biosimulations/commit/ba344c7649c97b842b9794e3f58bd8af3cbe2712))
* **dispatch,platform:** fixed name and URL for log format in files tab ([f13647f](https://github.com/biosimulations/biosimulations/commit/f13647fcaac05b5abdfb5ad4a754c3f4c18586ac))

## [8.7.0](https://github.com/biosimulations/biosimulations/compare/v8.6.0...v8.7.0) (2022-01-06)


### Bug Fixes

* **dispatch-service:** separated input and output files for simulation runs ([dc98a46](https://github.com/biosimulations/biosimulations/commit/dc98a4604add2541e1214afa4701eb829c634a3f))
* **dispatch,platform,ui:** corrected layout of metadata columns ([8044bc6](https://github.com/biosimulations/biosimulations/commit/8044bc62d06057696b1a12d22d61a9287d1dbd7f))
* **dispatch,platform:** added modeling methods to metadata ([6da720e](https://github.com/biosimulations/biosimulations/commit/6da720ef4504515f9d9eafdb11e8a76d56a448cc))
* **dispatch:** add rel noopenor for external links ([9efa059](https://github.com/biosimulations/biosimulations/commit/9efa059a50435583859f17ff05476694a84a5e59))
* **ui:** fixed setting of open control panel in table controls ([ca529a3](https://github.com/biosimulations/biosimulations/commit/ca529a3be58ca72ab4791732de69ff0efa8383fa))


### Features

* **combine-api:** added utility methods for reading S3 files ([4e3df4f](https://github.com/biosimulations/biosimulations/commit/4e3df4fee4247f1d4ae371f634cb6af8084b93ee))
* **dispatch-service:** added support for SLURM constraints ([df2acba](https://github.com/biosimulations/biosimulations/commit/df2acba2839c4def3139dc0a889af4242889fbde))
* **dispatch,platform,ui:** added markdown rendering for project descriptions ([818d267](https://github.com/biosimulations/biosimulations/commit/818d2673f20c1a87f235618cae242c129b49630f))
* **dispatch,platform,ui:** interleaved metadata about files into files tab ([9807406](https://github.com/biosimulations/biosimulations/commit/9807406cbcfc1c78b793d2068a98b4693725741e))
* **dispatch:** made it easier to get errors with simulation projects ([4c7635f](https://github.com/biosimulations/biosimulations/commit/4c7635fb9997d8cb33f4c2051bb6ffeb9958c42e))
* **ontology:** added additional formats used by Physiome ([3e951d0](https://github.com/biosimulations/biosimulations/commit/3e951d02cd6633aca35d444ce60dd076dbcb1dc8))


### Performance Improvements

* **api:** added caching for getting properties of ontology terms ([c273e88](https://github.com/biosimulations/biosimulations/commit/c273e88cb31efeaf7872aa48ad1aa38a05524b80))
* **dispatch,platform:** reduced thumbnail image sizes ([049af36](https://github.com/biosimulations/biosimulations/commit/049af36affaf05b56a35834c0c342803d74ba46c))

## [8.6.0](https://github.com/biosimulations/biosimulations/compare/v8.5.6...v8.6.0) (2021-12-31)


### Features

* **ontology:** added formats used by Physiome model repository ([b407218](https://github.com/biosimulations/biosimulations/commit/b40721893c8592e1418f21fe78462d1978270056))

## [8.5.6](https://github.com/biosimulations/biosimulations/compare/v8.5.5...v8.5.6) (2021-12-27)


### Bug Fixes

* update package lock version ([b91c669](https://github.com/biosimulations/biosimulations/commit/b91c669745abee0599cfd002fd18f557acd8e155))

## [8.5.5](https://github.com/biosimulations/biosimulations/compare/v8.5.4...v8.5.5) (2021-12-23)


### Bug Fixes

* **api:** tried to correct logging for errors in uploading archives ([b492f02](https://github.com/biosimulations/biosimulations/commit/b492f02c04da3bc6bf1bdd7ec022ce85187ddfa1))

## [8.5.4](https://github.com/biosimulations/biosimulations/compare/v8.5.3...v8.5.4) (2021-12-23)


### Bug Fixes

* improved error logging, increasing AWS timeout ([cccf802](https://github.com/biosimulations/biosimulations/commit/cccf802c76f154ed09dc53a7b1a41df286d935a8))

## [8.5.3](https://github.com/biosimulations/biosimulations/compare/v8.5.2...v8.5.3) (2021-12-23)


### Bug Fixes

* **dispatch-service:** fixed retrying of files and specs to avoid conflicts on incomplete posts ([620f0eb](https://github.com/biosimulations/biosimulations/commit/620f0eb59a1f347ea9bbbaaf0b3d0276654d8611))

## [8.5.2](https://github.com/biosimulations/biosimulations/compare/v8.5.1...v8.5.2) (2021-12-23)


### Bug Fixes

* **api,dispatch-service:** fixed logging for complete processor failures ([f2119d4](https://github.com/biosimulations/biosimulations/commit/f2119d46741eb85f89a91d84eeee93903900acc8))

## [8.5.1](https://github.com/biosimulations/biosimulations/compare/v8.5.0...v8.5.1) (2021-12-23)


### Bug Fixes

* **dispatch-service:** retry project publication after run completion ([e686664](https://github.com/biosimulations/biosimulations/commit/e68666451fc61bd27dd25e3775a4477fca5385e1))

## [8.5.0](https://github.com/biosimulations/biosimulations/compare/v8.4.1...v8.5.0) (2021-12-22)


### Bug Fixes

* **simulators-api:** fixed updating of updated timestamp; addresses [#3878](https://github.com/biosimulations/biosimulations/issues/3878) ([13ee425](https://github.com/biosimulations/biosimulations/commit/13ee42542af3f15c13954e7873313581cd76647c))
* **ui,dispatch:** fixed unselecting files; closes [#3875](https://github.com/biosimulations/biosimulations/issues/3875) ([2f84e18](https://github.com/biosimulations/biosimulations/commit/2f84e187ee1ea2c865925d486b5235682814e0da))


### Features

* **ui:** added instructions to refresh on failures ([0181c3b](https://github.com/biosimulations/biosimulations/commit/0181c3be83cfe5602d258ca8276599348c123f9e))

## [8.4.1](https://github.com/biosimulations/biosimulations/compare/v8.4.0...v8.4.1) (2021-12-22)


### Bug Fixes

* **combine-api:** fixed reading shared configuration ([5a83e6e](https://github.com/biosimulations/biosimulations/commit/5a83e6e0f4802eed023781dac8881f4c8e251a2e))

## [8.4.0](https://github.com/biosimulations/biosimulations/compare/v8.3.0...v8.4.0) (2021-12-22)


### Bug Fixes

* added project id, owner to CompleteJob for failures ([0a8d834](https://github.com/biosimulations/biosimulations/commit/0a8d834e100fc396da08403e5cef6e8c703c133c))
* **api,dispatch:** fixed data model for simulation results ([7cd2b5e](https://github.com/biosimulations/biosimulations/commit/7cd2b5e2a3d37e7544c16b383ee6594b65afdf69))
* **api,dispatch:** fixed data type for simulation results ([610cbc9](https://github.com/biosimulations/biosimulations/commit/610cbc97530b8b9965a98a356beb23e27fbf3cdc))
* **api:** changed file URL validation to allow un-encoded URLs ([f78bc43](https://github.com/biosimulations/biosimulations/commit/f78bc43fd89bb990841786eacb5118b5645628c4))
* fixed external simulators API endpoint ([25b3a3c](https://github.com/biosimulations/biosimulations/commit/25b3a3c0aabbf14949cf5386438b4bee87c95a03))
* fixed spinner for loading table data ([e2e1314](https://github.com/biosimulations/biosimulations/commit/e2e13149988f7cd74f95849f9c473c914d44f5ee))


### Features

* added checks that S3 files were deleted ([390300c](https://github.com/biosimulations/biosimulations/commit/390300c6039cede0176f7a5824b01687dbae5a94))
* **api:** added cache for project summaries ([6fc5bb7](https://github.com/biosimulations/biosimulations/commit/6fc5bb705a3cadb3ee2379145b3a362f8abac354))
* **api:** added checks that S3 files were deleted ([5d3ccb9](https://github.com/biosimulations/biosimulations/commit/5d3ccb91f964b11e9ffca1db1cb5f51d2c1d4389))
* **api:** added handled for NaN and Inf from HSDS ([7802310](https://github.com/biosimulations/biosimulations/commit/78023109c8a0b3c1c6d4e80ec65aec680b8a6172))
* **combine-api:** relaxed required metadata for simulation projects ([2be28f1](https://github.com/biosimulations/biosimulations/commit/2be28f1a896256e29ea7f9387e66f6283538e094))
* directed href targets ([d609f80](https://github.com/biosimulations/biosimulations/commit/d609f80c71549213eaac6b9b1fd8a43b7d2c038c))

## [8.3.0](https://github.com/biosimulations/biosimulations/compare/v8.2.1...v8.3.0) (2021-12-20)


### Bug Fixes

* **dispatch-service:** fix dispatch service post limit ([95653f8](https://github.com/biosimulations/biosimulations/commit/95653f88710f37babc19ccfa85b7c7caabc9fec3)), closes [#3828](https://github.com/biosimulations/biosimulations/issues/3828)
* **dispatch:** correct security issue with untrusted html input ([8b464b6](https://github.com/biosimulations/biosimulations/commit/8b464b64ecc1992031e49b76a4765ce68a70b7f4))
* **ui:** fixed spinner exit for table component ([f26802c](https://github.com/biosimulations/biosimulations/commit/f26802cf284df664509f2052a5f29a4443ee9a36))


### Features

* **api:** added project summary caching at creation and updating ([20d99f2](https://github.com/biosimulations/biosimulations/commit/20d99f2bcccba153a4aae10b9872c212935563f6))
* **dispatch:** added example simulation runs for Brian 2 ([710df68](https://github.com/biosimulations/biosimulations/commit/710df689dc79f3ac837ddda2034398371eb5f084))

## [8.2.1](https://github.com/biosimulations/biosimulations/compare/v8.2.0...v8.2.1) (2021-12-16)


### Bug Fixes

* add gtag snippet to dispatch and simulators ([f1b6332](https://github.com/biosimulations/biosimulations/commit/f1b633298b064a3a9d6ce8bdc404fd815ead5a5c))
* **config:** add default server limit to config ([496b430](https://github.com/biosimulations/biosimulations/commit/496b430efd96e7d2b13b102ea8f7ef9d25b8e35a)), closes [#3828](https://github.com/biosimulations/biosimulations/issues/3828)

## [8.2.0](https://github.com/biosimulations/biosimulations/compare/v8.1.0...v8.2.0) (2021-12-16)


### Bug Fixes

* fixed log validation ([86fc30d](https://github.com/biosimulations/biosimulations/commit/86fc30d388cf1ee170952be7efabdbd5bc5faca7))


### Features

* add angular analytics package ([3363f7b](https://github.com/biosimulations/biosimulations/commit/3363f7bcae10fcc07383e36c617bb960b054f380))
* added implementation of analytics and user consent ([2d87bb1](https://github.com/biosimulations/biosimulations/commit/2d87bb16abe21c9af02f402e3cfdb9265b3605e6))
* **dispatch,platform,simulators:** add cookie consent and privacy settings to frontend apps ([e84cdea](https://github.com/biosimulations/biosimulations/commit/e84cdeaa8a230a068afbb490dc33a796a441cc59))

## [8.1.0](https://github.com/biosimulations/biosimulations/compare/v8.0.0...v8.1.0) (2021-12-16)


### Bug Fixes

* fixed display of files in subdirectories ([ee62bbe](https://github.com/biosimulations/biosimulations/commit/ee62bbebf4cdeafcc3ec24f20a16bbc1178a0a82))
* fixed file size extraction for empty files ([b3dce39](https://github.com/biosimulations/biosimulations/commit/b3dce39fc83d9d846d1e1a87e5435e9cdc5078b2))
* fixed simulators view endpoint method ([e40f4cd](https://github.com/biosimulations/biosimulations/commit/e40f4cd29497f096d7341fd3c7b9c589b27f0093))
* set minimum time step to 1 ([e92ffa5](https://github.com/biosimulations/biosimulations/commit/e92ffa5de8a163b7e844a8f47cdd55e02b2b3155))


### Features

* **combine-api:** added error messages for invalid S3 bucket configuration ([626a2f2](https://github.com/biosimulations/biosimulations/commit/626a2f2a6deadaaa71517a09c19451f975316ad0))

## [8.0.0](https://github.com/biosimulations/biosimulations/compare/v7.0.0...v8.0.0) (2021-12-15)


### Bug Fixes

* **config:** change name of env variable to avoid clash ([caf69f4](https://github.com/biosimulations/biosimulations/commit/caf69f4ef11439ad6b6269ee41e904283219225c))
* **config:** correct endpoints for s3 contents path. Add some testing ([73f6034](https://github.com/biosimulations/biosimulations/commit/73f6034561fd88690a89f45d76dde9ed681b55ee)), closes [#3755](https://github.com/biosimulations/biosimulations/issues/3755)
* **config:** fix endpoints for ontology url ([f7ba9c5](https://github.com/biosimulations/biosimulations/commit/f7ba9c5f55048092280a0eeef0740bccc84d4c4e)), closes [#3771](https://github.com/biosimulations/biosimulations/issues/3771)
* **config:** fix prod file url ([5211afd](https://github.com/biosimulations/biosimulations/commit/5211afd21258dedd1483b7509270accfdc6f8dc8))
* **config:** fix storage health endpoint ([14d303c](https://github.com/biosimulations/biosimulations/commit/14d303c8c304468238b446acb1cbb7a4023e29b3))
* **dispatch-service:** corrected storage endpoint in sbatch sevice to external ([8eb34d4](https://github.com/biosimulations/biosimulations/commit/8eb34d4091e010b8c7b4ada5d29ceb1bf5c5a4d5))
* fixed broken links in documentation ([fe96ded](https://github.com/biosimulations/biosimulations/commit/fe96dedddd943974a5768a0f4439095f6bea8958))
* fixed broken links in documentation ([8de8a6f](https://github.com/biosimulations/biosimulations/commit/8de8a6f40ae046a95d5557d7d453220037eb9e27))
* removed invalid and unecessary workflow_call secret inputs ([b925dfe](https://github.com/biosimulations/biosimulations/commit/b925dfed75d24546ac5a01c6ac43fbf378b594b7))
* **simulators-api:** fix permissions for deletion of all simulation runs ([24aef29](https://github.com/biosimulations/biosimulations/commit/24aef2972670e4046707fb98072b0834f8435472)), closes [#3767](https://github.com/biosimulations/biosimulations/issues/3767)


### Code Refactoring

* **api:** simplify management of files ([e16c35f](https://github.com/biosimulations/biosimulations/commit/e16c35f374f5cbf0acda5f26288a1ed5c1ce04ec))


### Features

* **api,dispatch-service,dispatch:** expanded to full SED-ML data model ([2550def](https://github.com/biosimulations/biosimulations/commit/2550defc9918ae44dd2d5df53b6e2035ebcb7a00))
* **api:** improved error logging ([4d75193](https://github.com/biosimulations/biosimulations/commit/4d75193c68578f4dd48740795dfe9a630109366e))
* **auth:** add scope for deleting all simulation runs ([77a859c](https://github.com/biosimulations/biosimulations/commit/77a859caec20639adf77e6b0ac6d5ad00ecbb1ca))
* **combine-api:** expanded to full Python SED-ML data model ([912f8d5](https://github.com/biosimulations/biosimulations/commit/912f8d57bf205c76f7a12b4147dbf63e7bed0e89))
* **combine-api:** updated dependencies ([a7bf6e9](https://github.com/biosimulations/biosimulations/commit/a7bf6e9e4060658f62837e74172169abeb217f80))
* **config:** load endpoints dynamically if not in browser ([90ddc18](https://github.com/biosimulations/biosimulations/commit/90ddc1895fb71d04663c86965bf8fa3a6d1ec785)), closes [#3585](https://github.com/biosimulations/biosimulations/issues/3585)
* **dispatch-service:** added env variables to enable simulators to get number of CPUs ([fbdf8fa](https://github.com/biosimulations/biosimulations/commit/fbdf8fa354a6b06339d9831385c649a0e4d02e24))
* **dispatch,dispatch-service:** added support for multidimensional plots ([6681d25](https://github.com/biosimulations/biosimulations/commit/6681d25aed91b2bc51f5442ab929390765c9ed63))
* **dispatch,platform,api:** added filter and display of SED-ML file provenance ([d2a6c29](https://github.com/biosimulations/biosimulations/commit/d2a6c29a77ea1fc10289e576f10a6ef3bbb467b9))
* **dispatch:** extend vega export to multidimensional data ([4474f0c](https://github.com/biosimulations/biosimulations/commit/4474f0cf3cc7711b5e7b5dd9062e8d8e1c2585d9))
* expanded COMBINE archive creation to all types of model changes ([f65ffc5](https://github.com/biosimulations/biosimulations/commit/f65ffc5e6dde5a1edbbebbee83a20a73b1305479))


### Performance Improvements

* **api:** extract the combine archive directly on s3 via streams ([b5a0f08](https://github.com/biosimulations/biosimulations/commit/b5a0f0869610dc73e5119ecf44054e35f8354e15)), closes [#3094](https://github.com/biosimulations/biosimulations/issues/3094)


### Reverts

* "chore(deps): update dependency typescript to v4.5.4" ([f40932e](https://github.com/biosimulations/biosimulations/commit/f40932e6a41f56d94343ccad0af54d7368012572))
* "chore(deps): update typescript-eslint monorepo to v5.7.0" ([dee846f](https://github.com/biosimulations/biosimulations/commit/dee846f58f5989ef2f40733d97cbbff2b5f0722c))
* "chore(deps): update typescript-eslint monorepo to v5.7.0" ([16bcd80](https://github.com/biosimulations/biosimulations/commit/16bcd80c16b51ca2b3471b62f3fe10e0e2b448c7))


### BREAKING CHANGES

* **api:** the download project endpoint will fail for all previously submitted simulation
runs. Runs submitted prior to this change will not be retrievable by the api or applications

## [7.0.0](https://github.com/biosimulations/biosimulations/compare/v6.1.0...v7.0.0) (2021-12-02)


### Bug Fixes

* **api,dispatch-service,hsds:** fixed retrying in APIs ([b3109a1](https://github.com/biosimulations/biosimulations/commit/b3109a1fa5d37d0a65134adde6d9aaef90b19ac0))
* **config:** reverted changes to localhost ([04f2c42](https://github.com/biosimulations/biosimulations/commit/04f2c42263b8b98facda48a712bfb9f7e2d2e50d))
* corrected BioSimulators auth audience ([5c8b18d](https://github.com/biosimulations/biosimulations/commit/5c8b18d0d973bb39c8ba34375a9ba33219a76b44))
* corrected BioSimulators auth audience ([fce4347](https://github.com/biosimulations/biosimulations/commit/fce434727d36d28f048ea3b2d852ab56574a6768))
* corrected filtering for numerical columns ([d4bf35f](https://github.com/biosimulations/biosimulations/commit/d4bf35f09605fe5210c5b3ae953e0f6156624bec))
* **dispatch:** fix displaying of data in cases where simulation fails and metadata is not present ([da18704](https://github.com/biosimulations/biosimulations/commit/da18704a8b8fef837b9a835d12e95c6f6644d237)), closes [#3705](https://github.com/biosimulations/biosimulations/issues/3705)
* **dispatch:** fix file uploading ([30f9cb9](https://github.com/biosimulations/biosimulations/commit/30f9cb93e6ed9c52b08a62655de5693bd9552325)), closes [#3719](https://github.com/biosimulations/biosimulations/issues/3719)
* **dispatch:** fix uploading of files ([f597e90](https://github.com/biosimulations/biosimulations/commit/f597e9050b7385b8e17b7179476512d15cb3d723)), closes [#3719](https://github.com/biosimulations/biosimulations/issues/3719)
* fixed validation by upgrading from broken version of class-transformer ([ca20307](https://github.com/biosimulations/biosimulations/commit/ca203077941683837fb5426d1a7eb619d49d6b4c))
* **platform,ui:** fixed project browse for mobile ([fcfb552](https://github.com/biosimulations/biosimulations/commit/fcfb552a52b641d9f616f1e0785929d1b4bf413e))
* **platform:** fixed position of seach/filter button ([133f08c](https://github.com/biosimulations/biosimulations/commit/133f08c99c691b4cb62ba5c548abb2d7a41a7013))
* **ui:** fixed autocomplete filter ([cb26564](https://github.com/biosimulations/biosimulations/commit/cb26564c503e9d10f4423c21e27993e7c77e1802))


### Features

* added ability to filter and search projects ([21c14b4](https://github.com/biosimulations/biosimulations/commit/21c14b4fec4c1a0e56773b16e7b9e9e46c306636))
* added new component to enable components for routes to push buttons into the breadcrumbs area ([7918db1](https://github.com/biosimulations/biosimulations/commit/7918db1fccba56f3b9127bccdf042ddb7e7d83c4))
* **api,dispatch,dispatch-service:** expanded support for failed simulation runs ([9e7e71c](https://github.com/biosimulations/biosimulations/commit/9e7e71c80a0a81de3195648304456dfcf293b00c))
* **api,platform:** added owners, organizations to project view with hyperlinks ([63d9457](https://github.com/biosimulations/biosimulations/commit/63d9457a5244212523b727c3f7a01117b7253711))
* **api,platform:** started to display ownership of projects ([6f8378a](https://github.com/biosimulations/biosimulations/commit/6f8378a14d2f3d3291b36d11ada2581d1e6bd2be))
* **api:** add check for data service to status check ([d8fbbc5](https://github.com/biosimulations/biosimulations/commit/d8fbbc5308915d23e23dcd9b5962c869236f8988)), closes [#3649](https://github.com/biosimulations/biosimulations/issues/3649)
* **api:** added new scope for externally validating simulation runs ([e3bd698](https://github.com/biosimulations/biosimulations/commit/e3bd698c989c48cda49e242d2677859d928b9324))
* **api:** added URLs to accounts, organizations ([c6926b9](https://github.com/biosimulations/biosimulations/commit/c6926b95abbd8873bc4b56fbe77038b2cc2a76be))
* **api:** began to limit publication requests to model repositories ([e830002](https://github.com/biosimulations/biosimulations/commit/e8300028c8f8e22a2ef59938b7c83880167df5a7))
* **api:** working on restricting requests for publication with simulation run requests ([af7b6a0](https://github.com/biosimulations/biosimulations/commit/af7b6a0d46cedff4741d07502ccf8ef07fbbaa89))
* **dispatch:** clarified units of columns of simulation runs table ([3ae498e](https://github.com/biosimulations/biosimulations/commit/3ae498ecc1902c6fd688889427b0fdf28ad25b2e))
* improved table searching for data with accents ([d33617b](https://github.com/biosimulations/biosimulations/commit/d33617b73d1968f74cacaeae0bdd92e2a3aa3339))
* **platform:** added filter for publication status ([509eaa4](https://github.com/biosimulations/biosimulations/commit/509eaa4a431eb481cde071edc666ee7bdbe3961f))
* **platform:** scroll to top on opening projects search/filter ([26de2b6](https://github.com/biosimulations/biosimulations/commit/26de2b6f1470cc9fbb661447ac0542c2c7ea3483))
* **platform:** started to add filtering and searching for projects ([2505d7f](https://github.com/biosimulations/biosimulations/commit/2505d7f2bdca62c3b24d4b7252cb2513a9b5aa1b))
* **simulators:** expanded simulators filters ([1a76b7e](https://github.com/biosimulations/biosimulations/commit/1a76b7e5934c30793673ac8b2250c5b370ba2fa9))
* **ui,platform:** added autocomplete filter for attributes with many values ([049869f](https://github.com/biosimulations/biosimulations/commit/049869f919dcf9b714fc2d27389d1b1b6ce21971))
* **ui:** add custom caruousel component ([9a61d4f](https://github.com/biosimulations/biosimulations/commit/9a61d4f45592aa0b4c6d7205171a7b3a87b0330f))
* **ui:** replace npn-slider with custom component ([1cc79d5](https://github.com/biosimulations/biosimulations/commit/1cc79d54bc20114247ee6af36e2d3ade44c2f64d)), closes [#3706](https://github.com/biosimulations/biosimulations/issues/3706)


### Performance Improvements

* **api,dispatch,dispatch-service,simulators-api:** removed unnecessary return of new resources ([5fce07f](https://github.com/biosimulations/biosimulations/commit/5fce07f6b52385ab5d04c276b635f78aa06e2eea))
* **api:** don't return the log after creating ([5e37c6e](https://github.com/biosimulations/biosimulations/commit/5e37c6eca3aea9420467884f75f05558b6d30c0b)), closes [#3609](https://github.com/biosimulations/biosimulations/issues/3609)


### Reverts

* Revert "refactor(auth): removed auth/open endpoint" ([f983628](https://github.com/biosimulations/biosimulations/commit/f983628bd2b048b2a9e2b3875c4508f7a7b62746))
* "refactor: cleaned up building Angular apps" ([d21b2ed](https://github.com/biosimulations/biosimulations/commit/d21b2edc4530ff644d92ac6f71385dc83052fa3d))
* revert "refactor: organized endpoints configuration" ([a5e93c3](https://github.com/biosimulations/biosimulations/commit/a5e93c38a268995474525dc71e1fb72ef8fdf968)), closes [#3625](https://github.com/biosimulations/biosimulations/issues/3625)
* revert change to build front end apps ([5870fbf](https://github.com/biosimulations/biosimulations/commit/5870fbf953b95bd55d6def44aac7a5628c0a7265))


### BREAKING CHANGES

* **api:** The logs post endpoint no longer returns the log that was created. For that, use a
GET request after posting the log.

## [6.1.0](https://github.com/biosimulations/biosimulations/compare/v6.0.2...v6.1.0) (2021-11-14)


### Bug Fixes

* **auth:** fix import ([a7ba6b8](https://github.com/biosimulations/biosimulations/commit/a7ba6b87404b621d22c90c9fb37164b836d39f85))
* **auth:** handle case of no custom permissions ([1c3d760](https://github.com/biosimulations/biosimulations/commit/1c3d760f42ea23bdb3c26a42dce81b09189f7f92))
* corrected capitalization of BioSimulations ([3d981ee](https://github.com/biosimulations/biosimulations/commit/3d981ee737b852488dfd7ff8aba1317c11b7f236))
* debugged testing COMBINE API ([35672ce](https://github.com/biosimulations/biosimulations/commit/35672ceb0ce44474f8644c1bef71584208d778c7))
* debugged testing COMBINE API ([d18cb86](https://github.com/biosimulations/biosimulations/commit/d18cb864f29500229fa24666d9525bc228324476))
* debugged testing COMBINE API ([2a1e6b3](https://github.com/biosimulations/biosimulations/commit/2a1e6b3fc24fcdba88f7cc839d3655d6b4be80ce))
* debugged testing COMBINE API ([c7e1cb9](https://github.com/biosimulations/biosimulations/commit/c7e1cb9efc3daacaa6eddc1fd48806d25ec9927b))
* **dispatch:** corrected run URLs in check simulation run tool ([a1894fa](https://github.com/biosimulations/biosimulations/commit/a1894fae9b406a62fb4d10a30d01c9988d76a95a))
* **dispatch:** fixed dispatch simulation run view; closes [#3088](https://github.com/biosimulations/biosimulations/issues/3088) ([26a8d5a](https://github.com/biosimulations/biosimulations/commit/26a8d5a49b577c89eb04cd4b58314122f2d844c1))
* **dispatch:** fixed highlight.js import for log formatting ([0320cc2](https://github.com/biosimulations/biosimulations/commit/0320cc201838549a4d786c117571db132ddad600))
* fixed links, warnings ([ecb68fe](https://github.com/biosimulations/biosimulations/commit/ecb68febccdb4f17308aa62f0172adfcc7c68554))
* fixed python code highlighting ([ef88e12](https://github.com/biosimulations/biosimulations/commit/ef88e1248bbf2f9c8493c6f9a94a7c359d4497d0))
* fixed typos, added spelling exceptions ([7c77dc2](https://github.com/biosimulations/biosimulations/commit/7c77dc2db2b38563fea78118b1b65adca0510198))
* removed example with COMBINE archive that intentionally fails ([04b4c6e](https://github.com/biosimulations/biosimulations/commit/04b4c6ed1923ad2fa8ec1ae1f963e638cbe95807))


### Features

* **api,dispatch-service:** improved error messages and retrying ([a6b2693](https://github.com/biosimulations/biosimulations/commit/a6b26935a12e66a5bc3ab0b00713d8613c7a3f5d))
* **api:** improved reporting of errors with inconsistent data ([1c6c223](https://github.com/biosimulations/biosimulations/commit/1c6c2233c353f534efa0503f63b314adb9b97738))
* **dispatch-service:** add logging to processing posts to api ([1ca1900](https://github.com/biosimulations/biosimulations/commit/1ca19009cd33f6fbbb79ba9fb15779e09e20c1c8))
* **dispatch-service:** add retries for posting processing results ([fe9cddc](https://github.com/biosimulations/biosimulations/commit/fe9cddce4c846f15fdfd002bb8465e0e48bb3bd8)), closes [#3531](https://github.com/biosimulations/biosimulations/issues/3531)
* improved docs ([ab6722b](https://github.com/biosimulations/biosimulations/commit/ab6722b558a0b4e0d5aca265c84a1d0afd9f2558))
* improved docs ([209a421](https://github.com/biosimulations/biosimulations/commit/209a421c5c177600dd3e88c9469020db3c2fa51c))

## [6.0.2](https://github.com/biosimulations/biosimulations/compare/v6.0.1...v6.0.2) (2021-11-10)


### Bug Fixes

* **hsds:** update the hsds client ([419bfe9](https://github.com/biosimulations/biosimulations/commit/419bfe9a7ef4b81eea9400e2a4aa7587d734b4bf)), closes [#3317](https://github.com/biosimulations/biosimulations/issues/3317)

## [6.0.1](https://github.com/biosimulations/biosimulations/compare/v6.0.0...v6.0.1) (2021-11-10)


### Bug Fixes

* **api:** fixed IsImageDigest validator for non-strings ([53501b1](https://github.com/biosimulations/biosimulations/commit/53501b1eb3f323658aa23ae9007d625f212f6c6f))

## [6.0.0](https://github.com/biosimulations/biosimulations/compare/v5.9.0...v6.0.0) (2021-11-04)


### Bug Fixes

* **api:** build fix for new axios types ([e7ea984](https://github.com/biosimulations/biosimulations/commit/e7ea9849f72eefb1a051c316601e9463c3f74b1b))
* **dispatch-service:** add a temporary check for mistructured logs ([a67bfa1](https://github.com/biosimulations/biosimulations/commit/a67bfa1347b827cc2162080b0167412e33afa12f)), closes [#3482](https://github.com/biosimulations/biosimulations/issues/3482) [#3482](https://github.com/biosimulations/biosimulations/issues/3482)
* **dispatch-service:** remove ssl skip when downloading archive ([b4bd2c0](https://github.com/biosimulations/biosimulations/commit/b4bd2c0553bfa253002efb4063f3be30b321c15c)), closes [#3092](https://github.com/biosimulations/biosimulations/issues/3092)
* **dispatch,api,dispatch-service:** fixed data model for exceptions in simulation run logs ([191f1d3](https://github.com/biosimulations/biosimulations/commit/191f1d36ffc8824eb900b4571b937f0c9191b258))
* fix imports ([a076005](https://github.com/biosimulations/biosimulations/commit/a076005a50f89fa1f5cc76d66ededc44d72633ae))
* **simulators:** fixed text overflow of simulator test results ([7a8b11a](https://github.com/biosimulations/biosimulations/commit/7a8b11a85fd8a5975e39763cfb9247801ac8f5d6))


### Code Refactoring

* **api:** cleaned up simulation run files ([0213fb5](https://github.com/biosimulations/biosimulations/commit/0213fb508b66665b98c64c713ab146505695e2b9))


### Features

* added endpoints for getting summaries of projects ([2e9a54e](https://github.com/biosimulations/biosimulations/commit/2e9a54ebba20f9883bbf2c3dd6297db906da1285))
* **api:** added database model and validation for logs ([6a3a344](https://github.com/biosimulations/biosimulations/commit/6a3a344aa14fbd4952758f676160a9ba472b071e))
* **api:** added endpoints for getting individual SED elements; closes [#3439](https://github.com/biosimulations/biosimulations/issues/3439) ([8aa64fc](https://github.com/biosimulations/biosimulations/commit/8aa64fc205494d27c4f444c9d669031dd3ab49cc))
* **combine-api:** add dynamic module for combine api-client ([e7c2448](https://github.com/biosimulations/biosimulations/commit/e7c24486db6f7bf5b4cbc2b9e9c2c6a67a34bc1b)), closes [#3180](https://github.com/biosimulations/biosimulations/issues/3180)
* **datamodel:** add validation for image digests ([6106e54](https://github.com/biosimulations/biosimulations/commit/6106e54f5d54792b24fc5994a7ac1a42bed0c790))
* **dispatch-service:** enhanced tracking of processing results ([b4f01e3](https://github.com/biosimulations/biosimulations/commit/b4f01e3f4428b64ddb8aa3671fe738ff024515cc))
* **dispatch:** updated publication form, finished switching to Endpoints ([a5bef72](https://github.com/biosimulations/biosimulations/commit/a5bef7248174dec74154087b92bcc6005fa87726))
* **exceptions:** improve error handling ([4a3e8c7](https://github.com/biosimulations/biosimulations/commit/4a3e8c78dcb35756172da30ef803d2954f264bc6))
* **hsds:** handle transient hsds query failures ([f4a19f5](https://github.com/biosimulations/biosimulations/commit/f4a19f531c80ec50d324dec009132450dd74edb2)), closes [#3413](https://github.com/biosimulations/biosimulations/issues/3413)
* **ontology:** added parent/child relationships to ontology terms ([4107f1d](https://github.com/biosimulations/biosimulations/commit/4107f1d3d1f17a7509262caae998fd0222ebf0c3))
* **simulators-api:** add validation for api models ([ce2c5bb](https://github.com/biosimulations/biosimulations/commit/ce2c5bb0616600289e94dc16a7dcc17cfcb27dc4))
* **simulators,dispatch,platform:** added status bar to bottom of apps; closes [#3210](https://github.com/biosimulations/biosimulations/issues/3210) ([3630c23](https://github.com/biosimulations/biosimulations/commit/3630c23ef11325b4bb47012e4ca58ec7fefb6b7c))


### Reverts

* **dispatch-service:** revert using new config service to provide basepath ([e479d2e](https://github.com/biosimulations/biosimulations/commit/e479d2e531383e55ed64823b98b41d7be9130f7f))


### BREAKING CHANGES

* **api:** moves simulation run file information from 'Simulation Files' collection

## [5.9.0](https://github.com/biosimulations/biosimulations/compare/v5.8.0...v5.9.0) (2021-10-24)


### Bug Fixes

* **deps:** update to nx v13 ([48dbf7c](https://github.com/biosimulations/biosimulations/commit/48dbf7cfe4002aed9fcc06237f9bc995539573c2))
* **exceptions:** handle cases of payload too large errors ([522cec8](https://github.com/biosimulations/biosimulations/commit/522cec85bce117adbd24240ba026f705e782d185)), closes [nestjs/nest#5990](https://github.com/nestjs/nest/issues/5990) [#3349](https://github.com/biosimulations/biosimulations/issues/3349)
* **exceptions:** improve error handling ([083091e](https://github.com/biosimulations/biosimulations/commit/083091e8103340d6fd80534ec05cbc0d815e81cf))


### Features

* **api:** add caching to results and ontology endpoints ([bb2a991](https://github.com/biosimulations/biosimulations/commit/bb2a991c77ee32bb43ae9edb02938ca345700544))
* **api:** add caching to results endpoints ([ed54363](https://github.com/biosimulations/biosimulations/commit/ed5436370f4a9be2ed253d69417144d0db10e89b))
* **api:** add health check for job queue ([a05556e](https://github.com/biosimulations/biosimulations/commit/a05556ef33817253b32e52e8519806599e966723))
* **api:** add health module and endpoints ([da036f5](https://github.com/biosimulations/biosimulations/commit/da036f59d5f2479790a5d4827a2b830432ea35af))
* **api:** add various health checks and endpoints ([d30c7d2](https://github.com/biosimulations/biosimulations/commit/d30c7d25d62268f675cff1804b38309747c68e0b))
* **api:** setup results cache with REDIS ([3e40fde](https://github.com/biosimulations/biosimulations/commit/3e40fdebe38ca3e3765823bf7f98fd33895a7c9f))
* **dispatch-service:** add limit for retries of status for jobs ([f187b03](https://github.com/biosimulations/biosimulations/commit/f187b03024215b0cb2d53858085197b9d45736b9))
* **dispatch,platform:** added structured data for projects, simulation runs: ([7135ed0](https://github.com/biosimulations/biosimulations/commit/7135ed01f3107407906b81ad5b9ac94846f36f82))
* **dispatch,simulators:** added structured data tutorials ([5c23e8d](https://github.com/biosimulations/biosimulations/commit/5c23e8da1bcc2e12163f82aebf98c3a90c14bab8))
* **dispatch,simulators:** encoded FAQs into Schema.org ([936fb44](https://github.com/biosimulations/biosimulations/commit/936fb4499a2b132945b39fc2148428d26a268189))
* **exceptions:** dont process health check http exceptions ([b75747e](https://github.com/biosimulations/biosimulations/commit/b75747e6e04c511899037322e4829ae12433f3ab))
* **simulators-api,api:** added clearer payload too large messages ([98fb49d](https://github.com/biosimulations/biosimulations/commit/98fb49d651c01d621d175051cb030621b273034a))
* **simulators-api:** add health checks for simulators-api ([26d3b63](https://github.com/biosimulations/biosimulations/commit/26d3b63d37b1f271c0fc327b4a8e2c4981565651))
* **simulators:** added structured data for simulators as software applications ([7618db3](https://github.com/biosimulations/biosimulations/commit/7618db3ee539c31be2167a8d717cb4a5fac2c798))


### Reverts

* **simulators-api,api:** revert partially the changes in 98fb49d651c01d621d175051cb030621b273034a ([d88fcea](https://github.com/biosimulations/biosimulations/commit/d88fcead0eebe59f6394c9befca9e6ac7e132c83))

## [5.8.0](https://github.com/biosimulations/biosimulations/compare/v5.7.3...v5.8.0) (2021-10-20)


### Features

* **api:** enabling simulation run requests with latest version of a simulator ([2b7c2d9](https://github.com/biosimulations/biosimulations/commit/2b7c2d92ed10825bfce1a6c35a5a1b4908ceeebe))
* **config:** added endpoint for latest versions of simulators ([2a582ee](https://github.com/biosimulations/biosimulations/commit/2a582ee364a6308f42ae632b2487edd050964c87))
* **dispatch:** recorded simulator versions and digests for simulation runs ([f2abb39](https://github.com/biosimulations/biosimulations/commit/f2abb39790aa24c582c42521aca38f3dfbecaa56))
* **simulators:** added validation that version isn't reserved word 'latest' ([47843a8](https://github.com/biosimulations/biosimulations/commit/47843a8b687ff2ad001de286a07aa813735ca0c2))

## [5.7.3](https://github.com/biosimulations/biosimulations/compare/v5.7.2...v5.7.3) (2021-10-19)


### Bug Fixes

* **api:** correct field name to get values from dataservice ([53a6bbc](https://github.com/biosimulations/biosimulations/commit/53a6bbc5d2ccab9ea086f405656bf26d0cb2bacb)), closes [#3313](https://github.com/biosimulations/biosimulations/issues/3313)
* **api:** fix typo with checks ([caada0a](https://github.com/biosimulations/biosimulations/commit/caada0ab6e0f806508ee4d29966e5bcb0ca85109))

## [5.7.2](https://github.com/biosimulations/biosimulations/compare/v5.7.1...v5.7.2) (2021-10-19)


### Bug Fixes

* **api:** aligned parameter name in documentation ([0100a27](https://github.com/biosimulations/biosimulations/commit/0100a274725e22654ce4cc4534e5b0ff64a42de1))
* **simulators-api:** corrected put method; closes [#3305](https://github.com/biosimulations/biosimulations/issues/3305) ([57c34be](https://github.com/biosimulations/biosimulations/commit/57c34bef1f1370fdcd0a235020e4e7b5f20f5d54))

## [5.7.1](https://github.com/biosimulations/biosimulations/compare/v5.7.0...v5.7.1) (2021-10-18)


### Bug Fixes

* **account-api:** fixed route parameter names ([c7d8712](https://github.com/biosimulations/biosimulations/commit/c7d8712b0614d325bc1bf7fcc9145effcb6f2e60))
* **api:** fixed route parameter names ([1496f0f](https://github.com/biosimulations/biosimulations/commit/1496f0fc1c9ca0d63a620f73c216d9ab0752cce2))

## [5.7.0](https://github.com/biosimulations/biosimulations/compare/v5.6.2...v5.7.0) (2021-10-18)


### Bug Fixes

* **api:** fix docs and typing of open api definition ([#3307](https://github.com/biosimulations/biosimulations/issues/3307)) ([0640c6a](https://github.com/biosimulations/biosimulations/commit/0640c6aff0dd6a2d558d44be620d042b6e7ba49d)), closes [#3304](https://github.com/biosimulations/biosimulations/issues/3304)
* **api:** fix param name parsing for projectId ([af3c406](https://github.com/biosimulations/biosimulations/commit/af3c4069f352839a33696e3cf7c5dbb45d20c210))
* **combine-service:** added missing Swagger templates to Docker image ([f27b8c8](https://github.com/biosimulations/biosimulations/commit/f27b8c8831b11fffedd3355bc9668f78ad2e080c))


### Features

* **combine-service:** added health endpoint ([0d356d3](https://github.com/biosimulations/biosimulations/commit/0d356d347f11c3377f14ddbb66af8823198eaa30))
* **combine-service:** increased file upload limit, clarified error message ([5dfa25c](https://github.com/biosimulations/biosimulations/commit/5dfa25cca9fe73e2ef4b1af881f646bf9b022d5e))

## [5.6.2](https://github.com/biosimulations/biosimulations/compare/v5.6.1...v5.6.2) (2021-10-18)


### Bug Fixes

* **api:** fix module import ([d47c376](https://github.com/biosimulations/biosimulations/commit/d47c376915713fbc2ae97b296318061374b4bc10))
* **dispatch:** corrected file types for validate OMEX metadata form ([98794cd](https://github.com/biosimulations/biosimulations/commit/98794cd1397cb1ee921fad02b09d83ca82e7bd3f))

## [5.6.1](https://github.com/biosimulations/biosimulations/compare/v5.6.0...v5.6.1) (2021-10-18)


### Bug Fixes

* **api:** fix permissions for endpoints ([f00f6d1](https://github.com/biosimulations/biosimulations/commit/f00f6d116cc64525656f4b36030ee0109f9ff3b0)), closes [#3242](https://github.com/biosimulations/biosimulations/issues/3242)
* update client ids for api docs ([1ec36bb](https://github.com/biosimulations/biosimulations/commit/1ec36bb377ab939062da27455d199dbc3e4ada25))
## [5.6.0](https://github.com/biosimulations/biosimulations/compare/v5.5.0...v5.6.0) (2021-10-17)


### Bug Fixes

* **api:** update api to use updated hsds client ([e7832aa](https://github.com/biosimulations/biosimulations/commit/e7832aaf2c6d34c78903227dfc7e7db254b5b73d))
* **dispatch:** add flag to skip downloading test results to simulators service ([cbd63cc](https://github.com/biosimulations/biosimulations/commit/cbd63ccc6ecf757dec0da6cf000c200f2e8ebc4c)), closes [#3197](https://github.com/biosimulations/biosimulations/issues/3197)
* **dispatch:** fix alg list to empty list to prevent crashing ([338be99](https://github.com/biosimulations/biosimulations/commit/338be997320e053b054137a44546a82a21c13e34))
* make changes to update mongoose ([4653155](https://github.com/biosimulations/biosimulations/commit/46531556323e5d84cc96afbd87f4a58aa335be23))
* **platform,dispatch:** corrected link to simulation results in files tab ([00aa363](https://github.com/biosimulations/biosimulations/commit/00aa363a059fc9b0f0f95d316c1313efadb890b7))
* **platform:** redirect to 404 for non-existent projects; closes [#3234](https://github.com/biosimulations/biosimulations/issues/3234) ([173439a](https://github.com/biosimulations/biosimulations/commit/173439a2c322d933dc2ad4f5f1b3bcbeee666e80))
* **simulators:** fix json-ld metadata on index.html ([95b3d98](https://github.com/biosimulations/biosimulations/commit/95b3d983c1be2ddf633570214f8d35a920d98f1e))


### Features

* **api:** add custom styling to swagger ui ([90830c0](https://github.com/biosimulations/biosimulations/commit/90830c02f53df0fc9f86c7211b2fa3359a1b8807))
* **hsds:** update client library ([5746832](https://github.com/biosimulations/biosimulations/commit/574683246e7abb8a338d35d2a7a98ba25ce96d41))
* **simulators:** added repository digest to image model; closes [#3194](https://github.com/biosimulations/biosimulations/issues/3194) ([1293410](https://github.com/biosimulations/biosimulations/commit/129341077889888b41397cf471389d8921c8c2f8))
* **simulators:** expanded full text search; closes [#3209](https://github.com/biosimulations/biosimulations/issues/3209) ([c877189](https://github.com/biosimulations/biosimulations/commit/c877189fc5ece4943f3577602ff770660cdf01c0))


### Reverts

* **deps:** revert update dependency eslint to v8 ([0fdb3d8](https://github.com/biosimulations/biosimulations/commit/0fdb3d81a59710e4667974ecf0e42c8ec65ffd34))

## [5.5.0](https://github.com/biosimulations/biosimulations/compare/v5.4.0...v5.5.0) (2021-10-09)


### Bug Fixes

* **simulators-api:** add biosimulations.org to cors ([c2eea89](https://github.com/biosimulations/biosimulations/commit/c2eea89c81f266a00235bd1338102bbee7274dae))


### Features

* **api:** add case-insenstive unique index for project ids ([5f96f91](https://github.com/biosimulations/biosimulations/commit/5f96f91d83ae8835a313d6273eafab5e544f4e77)), closes [#3160](https://github.com/biosimulations/biosimulations/issues/3160)
* **api:** add controller level validation for project ids ([cdba9ce](https://github.com/biosimulations/biosimulations/commit/cdba9ce007fa92515f64147527824ca3df225808))
* **dispatch:** added check that simulation run was successful ([b4ade32](https://github.com/biosimulations/biosimulations/commit/b4ade32f2c3443d182f92ced5d12bf80341a260a))
* **platform:** added validation for project ids; closes [#3183](https://github.com/biosimulations/biosimulations/issues/3183) ([01b6178](https://github.com/biosimulations/biosimulations/commit/01b61788565e3c42c1b11acf1e2f02b349321cfc))

## [5.4.0](https://github.com/biosimulations/biosimulations/compare/v5.3.0...v5.4.0) (2021-10-08)


### Bug Fixes

* **combine-service:** update combine-service client to latest api changes ([74a70d8](https://github.com/biosimulations/biosimulations/commit/74a70d8fa73086277318b363dc58d1ebfa7d1970))
* **dispatch,platform:** fixed visualization rendering when groups of datasets are selected ([f205ab4](https://github.com/biosimulations/biosimulations/commit/f205ab457eab7712133d859e6ae4cfeb8dd16d63))
* **dispatch:** handle cases when metadata is empty without throwing error ([57a16c5](https://github.com/biosimulations/biosimulations/commit/57a16c54e496929a482fc69edc9bf1b2ca165e9d))


### Features

* **combine-service:** added endpoints for validation ([f602e65](https://github.com/biosimulations/biosimulations/commit/f602e651107f7efd195bb05ef41650bfe64009cd))
* **combine-service:** updated to biosimulators-utils 0.1.130 ([e46d13e](https://github.com/biosimulations/biosimulations/commit/e46d13ecc28e0e86ff2377068f8e11872276d327))
* **dispatch:** add some error handling ([6cc7f62](https://github.com/biosimulations/biosimulations/commit/6cc7f625451306c04e53884ab675d33ffd1fd5b8)), closes [#3088](https://github.com/biosimulations/biosimulations/issues/3088)
* **dispatch:** added forms for validating models, simulations and metadata ([d7991ed](https://github.com/biosimulations/biosimulations/commit/d7991ed6ce4d5cc14e35fbd70143ebb1d21705ca))
* **dispatch:** added options to project validation ([eebd16f](https://github.com/biosimulations/biosimulations/commit/eebd16fb26a66515952708e1f8e11638f234e93e))


### Reverts

* **combine-service:** reverted URL for COMBINE API ([d1dd8b5](https://github.com/biosimulations/biosimulations/commit/d1dd8b595ae1777c4e73b1e90d83f6a33603730c))

## [5.3.0](https://github.com/biosimulations/biosimulations/compare/v5.2.0...v5.3.0) (2021-10-07)


### Bug Fixes

* added 'master' attribute to file object ([5f4f722](https://github.com/biosimulations/biosimulations/commit/5f4f722d848e1e0a37802119b860b945677417a6))
* **api,mail-service:** update api client to return observable ([d26ce89](https://github.com/biosimulations/biosimulations/commit/d26ce8906de9275f40790ea4afbe6a97e404dd0d)), closes [#3102](https://github.com/biosimulations/biosimulations/issues/3102)
* **api:** add permissions to get all specs ([dbce421](https://github.com/biosimulations/biosimulations/commit/dbce4210625bc6ed6bb64eb7e3a170e385c88e55)), closes [#3136](https://github.com/biosimulations/biosimulations/issues/3136)
* **deps:** update dependency rxjs to v7.3.1 ([8cb2d32](https://github.com/biosimulations/biosimulations/commit/8cb2d3209fbcdc58771c4d5517aa5095376e87b5))
* **deps:** update nest ([f7a97e6](https://github.com/biosimulations/biosimulations/commit/f7a97e60127d9e66103dd331ce51038431398433))
* **dispatch:** fixed lint issue ([660bcb8](https://github.com/biosimulations/biosimulations/commit/660bcb8dcb6957bdcfc0d7469fcafb21f29f84c9))
* fixed lint issue ([e82e6fc](https://github.com/biosimulations/biosimulations/commit/e82e6fc06df38cc330dd7539e0cc7e18c45caab1))
* **platform,dispatch:** fixed plotly tests ([f2d8353](https://github.com/biosimulations/biosimulations/commit/f2d83535195d6d1716f2c3e9c3dc5d74aa310852))
* **simulators-api:** allow cors for biosimulatiors.dev ([1d93452](https://github.com/biosimulations/biosimulations/commit/1d93452b12174b444c5d53417521660dde72be56))
* **ui:** fixed display of errors with Vega visualizations ([1270955](https://github.com/biosimulations/biosimulations/commit/12709555792627db191d6794477f72ca6d81c7c4))
* **ui:** fixed Vega export for 1-d heatmaps ([cd5713d](https://github.com/biosimulations/biosimulations/commit/cd5713d73f14cddac1febaeb977ebb77a5fa0dff))


### Features

* **api:** create project endpoints ([d1b9fe7](https://github.com/biosimulations/biosimulations/commit/d1b9fe73c719358ace007c9d67a43c4a1d1c6810)), closes [#3067](https://github.com/biosimulations/biosimulations/issues/3067)
* **combine-service:** added options for validation of COMBINE archives ([42febbe](https://github.com/biosimulations/biosimulations/commit/42febbedc289d76f41bd1655014e1c9a172ff643))
* **combine-service:** added options to control COMBINE archive validation ([b4c0c12](https://github.com/biosimulations/biosimulations/commit/b4c0c123ea6ac776cc912e4eed964f773477d403))
* **combine-service:** added timeout for simulation execution ([8eb8deb](https://github.com/biosimulations/biosimulations/commit/8eb8debcab97b215260b9e6646751850b1a47593))
* **combine-service:** update combine-api client ([77c2f6d](https://github.com/biosimulations/biosimulations/commit/77c2f6df36cc59be74d4271938c34b5f074608a1))
* **datamodel:** add project datamodel ([57cf45c](https://github.com/biosimulations/biosimulations/commit/57cf45ceda0ba7d32f909e5d07fb7200e8dbbdee))
* **dispatch,platform,simulators:** improve recognition of Vega files by media type ([5f0051b](https://github.com/biosimulations/biosimulations/commit/5f0051bbfbd4e2ab6cd51d98a4352487ea94d640))
* **dispatch:** added options for validating COMBINE archives ([7d0a815](https://github.com/biosimulations/biosimulations/commit/7d0a8159798132fd65d93d7c91881a834b389c83))
* **platform:** added export of visualizations to Vega and COMBINE archives ([fce6731](https://github.com/biosimulations/biosimulations/commit/fce67312fa9432ed33ee0714a30d81d1496de111))
* **platform:** added heatmap, line plots ([84898db](https://github.com/biosimulations/biosimulations/commit/84898db3682a5b9321132a8a3058a6663c56113a))
* **platform:** added histogram visualization ([7a6abfa](https://github.com/biosimulations/biosimulations/commit/7a6abfafe6fad3dcebccff2977fec994839cdcbc))
* **platform:** added SED-ML visualizations ([2ac40b3](https://github.com/biosimulations/biosimulations/commit/2ac40b37cf40c713fd798c92fa761aa080586077))
* **platform:** added simulation types and algorithms to simulaton overview ([4c768e5](https://github.com/biosimulations/biosimulations/commit/4c768e594caee33d7cee79f157eaa70ba6703a3c))
* **platform:** added vega export for heatmaps and line plots ([a8c9ad4](https://github.com/biosimulations/biosimulations/commit/a8c9ad418407d7ec7d7f42e21ddf6a0d0dd5d966))
* **platform:** front end displays projects from api ([9ecfa80](https://github.com/biosimulations/biosimulations/commit/9ecfa80ce7f70a45762563b88c82c0bf0e0cf3a0)), closes [#3149](https://github.com/biosimulations/biosimulations/issues/3149)
* **ui:** added ability to attach hyperlinks to menu items ([7ca3d10](https://github.com/biosimulations/biosimulations/commit/7ca3d10209fa04d77cbc220664f0d1870c542c12))


### Reverts

* **deps:** revert 235c9db3e9649cdb8b42e6575517aa651f9e1c2d ([05cb6f3](https://github.com/biosimulations/biosimulations/commit/05cb6f39142d576e4d9c866a6ee2177589aadbd3))

## [5.2.0](https://github.com/biosimulations/biosimulations/compare/v5.1.1...v5.2.0) (2021-10-04)


### Bug Fixes

* **api:** add authentication to post metadata ([999e2b9](https://github.com/biosimulations/biosimulations/commit/999e2b9e11ddaa26e001d89ccbbeb26541cc3f5a)), closes [#2865](https://github.com/biosimulations/biosimulations/issues/2865)
* **deps:** update dependency @sendgrid/mail to v7.4.7 ([bae8e96](https://github.com/biosimulations/biosimulations/commit/bae8e968c0062da5f477ca514e3ed3c08e6686e3))
* **dispatch-service:** fix processing of environment variables ([cb0aa04](https://github.com/biosimulations/biosimulations/commit/cb0aa04cbdc7bd8f2a3e7cf818c541470d7c4519))
* **dispatch-service:** process metadata with other processing ([7f8f44a](https://github.com/biosimulations/biosimulations/commit/7f8f44aecc741dcd746e0de71489bcd5a9c68319)), closes [#3046](https://github.com/biosimulations/biosimulations/issues/3046)


### Features

* **api:** add endpoints to get particular specifications for simulation runs ([87eede1](https://github.com/biosimulations/biosimulations/commit/87eede1c0283bdc3a4a5b6614dba06354a96ddf6))
* **api:** add file object ([39f25f3](https://github.com/biosimulations/biosimulations/commit/39f25f3668d7e249ae1b9834b6ef66cb58350208)), closes [#2914](https://github.com/biosimulations/biosimulations/issues/2914)
* **api:** create specifications object and endpoints ([aca4786](https://github.com/biosimulations/biosimulations/commit/aca4786282526813eab3280c87d495617c7a2ef8))
* **dispatch-service:** process files and sedml specs ([fb37624](https://github.com/biosimulations/biosimulations/commit/fb376243c33043d4945a2849d0df50a54332fcda))
* **dispatch-service:** send sedml specifications to the api ([7d6a8c7](https://github.com/biosimulations/biosimulations/commit/7d6a8c7baec360f985459534f9fd5d67e4342260))

## [5.1.1](https://github.com/biosimulations/biosimulations/compare/v5.1.0...v5.1.1) (2021-10-01)


### Bug Fixes

* **platform:** corrected handling of software license keys for simulation ([84bef20](https://github.com/biosimulations/biosimulations/commit/84bef20d9c035168d7d74fcffdeafae97091af8f))
* **platform:** corrected handling of software license keys for simulation ([aba13fe](https://github.com/biosimulations/biosimulations/commit/aba13fe9c30c2355d6d63a9a3546fa78062b82d6))

## [5.1.0](https://github.com/biosimulations/biosimulations/compare/v5.0.0...v5.1.0) (2021-09-29)


### Bug Fixes

* **deps:** update dependency auth0 to v2.36.2 ([#3076](https://github.com/biosimulations/biosimulations/issues/3076)) [skip ci] ([a696fbc](https://github.com/biosimulations/biosimulations/commit/a696fbcc9f495fef5b20fba7235a8fb7d590b4d9))
* **dispatch-api:** fix cors for biosimulators ([22439d2](https://github.com/biosimulations/biosimulations/commit/22439d2d6d2c16ce71dc652e5353a9f902a29c6a))


### Features

* **dispatch:** require configuration of academic use for commercial solvers ([6c5307c](https://github.com/biosimulations/biosimulations/commit/6c5307c31dad3f59b2e7c01b07ea1b83218a7ff0))

## [5.0.0](https://github.com/biosimulations/biosimulations/compare/v4.6.0...v5.0.0) (2021-09-28)


### Bug Fixes

* **dispatch-service:** fix type error when processing metadata ([a646c98](https://github.com/biosimulations/biosimulations/commit/a646c98ef2433b5b20b754fd637f326513aa57e1))
* make datamodel consistent for license ([4b95e4d](https://github.com/biosimulations/biosimulations/commit/4b95e4d89af83b69334602f53ffacaa0744e5aff)), closes [#3050](https://github.com/biosimulations/biosimulations/issues/3050)
* **dispatch-api:** remove extra slash for metadata uris ([b627e74](https://github.com/biosimulations/biosimulations/commit/b627e7491995ae1c1e70feea93b1e7f4cc53902a)), closes [#3052](https://github.com/biosimulations/biosimulations/issues/3052)
* ensure external url is used for combine api ([2d98aba](https://github.com/biosimulations/biosimulations/commit/2d98aba10be03163e9b43aa67da69a95910eb763))
* **dispatch:** corrected when metadata about simulation projects is retrieved ([1682d83](https://github.com/biosimulations/biosimulations/commit/1682d83d6870e4bcfa1d4b895d3a88d2cee60285))


### Code Refactoring

* consolidate backend apis ([b27bd0e](https://github.com/biosimulations/biosimulations/commit/b27bd0e260336df3553b1b3a7e3447c0e26ac716)), closes [#2724](https://github.com/biosimulations/biosimulations/issues/2724)


### Features

* **dispatch-api:** ensure only public models are shown for platform ([#3045](https://github.com/biosimulations/biosimulations/issues/3045)) ([5619c03](https://github.com/biosimulations/biosimulations/commit/5619c03d7fc088d0b3be33136935c80e7cb9c862)), closes [#3044](https://github.com/biosimulations/biosimulations/issues/3044)
* **dispatch-api:** extract files to s3 and replace combine archive file extraction endpoint ([56f8413](https://github.com/biosimulations/biosimulations/commit/56f84133b193c4d54f77c33ba2c01105df6162e3)), closes [#2945](https://github.com/biosimulations/biosimulations/issues/2945)
* **dispatch-api:** upload omex files to s3 from url ([4d8f780](https://github.com/biosimulations/biosimulations/commit/4d8f78058d3ea7050d913ad651c907c0a631a3f4))


### Reverts

* **dispatch-api:** revert permissions change in 3175c6378160f34e8389b6e501ea2534eb9d4c12 ([5ab7d08](https://github.com/biosimulations/biosimulations/commit/5ab7d08cc922778436646dca0331aad7bafef0d3))


### BREAKING CHANGES

* The ontology, dispatch, and platform apis are consolidated into one main backend
api for biosimulations. There is a seperate api for biosimulators. The combine-service also provides a rest api that is mostly intended for internal use.

## [4.6.0](https://github.com/biosimulations/biosimulations/compare/v4.5.0...v4.6.0) (2021-09-27)


### Bug Fixes

* **deps:** update dependency aws-sdk to v2.995.0 ([19b509a](https://github.com/biosimulations/biosimulations/commit/19b509a7100e59dbcdf3c2674262ec2bf4333f77))
* **dispatch:** improved handling of undefined simulations in simulations browse view; closes [#2999](https://github.com/biosimulations/biosimulations/issues/2999) ([bf47994](https://github.com/biosimulations/biosimulations/commit/bf4799404320d07437797804973e933d7f147c7e))
* **platform:** handle cases when metadata is missing ([f738a74](https://github.com/biosimulations/biosimulations/commit/f738a741caba0da783e522c8d74e86c04b9e4aa8))


### Features

* **simulators:** improved specification of simulator CLIs; closes [#3015](https://github.com/biosimulations/biosimulations/issues/3015) ([c396bfa](https://github.com/biosimulations/biosimulations/commit/c396bfa79a7f9abbc0a3e6b374f96d726fe5eaa7))
* create alternate vega view component ([453a109](https://github.com/biosimulations/biosimulations/commit/453a1094677a18ccc2019bd953d618e4e81c6e2f))
* **dispatch:** added license confirmation to publish run form ([1889e1e](https://github.com/biosimulations/biosimulations/commit/1889e1ec4f50579c51838494f7d693fdb5a87415))
* **dispatch,platform:** updated terms about granting BioSimulations to distribute projects ([6ee2bb1](https://github.com/biosimulations/biosimulations/commit/6ee2bb1779e3f02df9dee82bde75e11fa5dc5f9d))
* **platform:** add code to get metadata and specs of visualiazations ([0cdc472](https://github.com/biosimulations/biosimulations/commit/0cdc4727b201858adec4cb40565bb643c01c2905))
* **platform:** add support for showing vega figures ([f011480](https://github.com/biosimulations/biosimulations/commit/f011480096ee29f42e8aab833dbaec89a1bc1596))
* **ui:** allow for conditional loading of tabs ([1b4779f](https://github.com/biosimulations/biosimulations/commit/1b4779f177748922805e8aaad196d0ef412a5239))
* updated biosimulators-utils, biosimulators-bionetgen ([ce75ea6](https://github.com/biosimulations/biosimulations/commit/ce75ea6a46e880b1c021a336992d7acc311f200d))


### Performance Improvements

* **platform:** fix tests ([a8f6d0e](https://github.com/biosimulations/biosimulations/commit/a8f6d0ed968a9ccccd45249db4b71313ef7a5f5b))

## [4.5.0](https://github.com/biosimulations/biosimulations/compare/v4.4.2...v4.5.0) (2021-09-26)


### Features

* **simulators:** improved simulator usage examples; closes [#3016](https://github.com/biosimulations/biosimulations/issues/3016) ([a56dea2](https://github.com/biosimulations/biosimulations/commit/a56dea24e33e33b7db215a0cc1f62f4bc94dac7d))

## [4.4.2](https://github.com/biosimulations/biosimulations/compare/v4.4.1...v4.4.2) (2021-09-23)


### Bug Fixes

* **simulators-api:** fixed sorting of simulator versions with > 4 points ([020073a](https://github.com/biosimulations/biosimulations/commit/020073ab0a9e8eb0344d7ab4ffee287a323caaed)), closes [#3008](https://github.com/biosimulations/biosimulations/issues/3008)


### Reverts

* **simulators-api:** revert [#3009](https://github.com/biosimulations/biosimulations/issues/3009) to prevent container crashing ([c7ff2cc](https://github.com/biosimulations/biosimulations/commit/c7ff2cc018e28dad55f771c6e778193082e9c2ff)), closes [#3008](https://github.com/biosimulations/biosimulations/issues/3008)

## [4.4.1](https://github.com/biosimulations/biosimulations/compare/v4.4.0...v4.4.1) (2021-09-22)


### Bug Fixes

* fixed sorting of simulator versions with > 4 points ([e0b60ce](https://github.com/biosimulations/biosimulations/commit/e0b60ce7e857a949d73f4daed4cf51e9e2b0ca91))

## [4.4.0](https://github.com/biosimulations/biosimulations/compare/v4.3.0...v4.4.0) (2021-09-22)


### Features

* **ontology:** updated to KiSAO 2.29 ([31e7d7b](https://github.com/biosimulations/biosimulations/commit/31e7d7ba7115c9f381b636113221edca9010397b))
* **platform:** improve styling of platform browse ([28e8e1d](https://github.com/biosimulations/biosimulations/commit/28e8e1d6858363325ae29ae3d71e1dea2a1b19c9))


### Reverts

* remove ui commit scope [skip ci] ([5051250](https://github.com/biosimulations/biosimulations/commit/50512504bd98cf55f2111ad0bf074ae5837260ea))

## [4.3.0](https://github.com/biosimulations/biosimulations/compare/v4.2.0...v4.3.0) (2021-09-15)


### Bug Fixes

* **deps:** update dependency @stoplight/json-ref-resolver to v3.1.3 ([#2986](https://github.com/biosimulations/biosimulations/issues/2986)) ([fe9c5f3](https://github.com/biosimulations/biosimulations/commit/fe9c5f372c69c2f8a11d0d401a312ecdb7bf3338))
* **deps:** update dependency bull to v3.29.2 ([#2987](https://github.com/biosimulations/biosimulations/issues/2987)) ([98cbebf](https://github.com/biosimulations/biosimulations/commit/98cbebf7752e6fd6b034e0a459b6abc9de106247))
* **dispatch:** proceed if metadata is missing ([#2998](https://github.com/biosimulations/biosimulations/issues/2998)) ([f09c633](https://github.com/biosimulations/biosimulations/commit/f09c633a4b69b096c5bd07a1377c451ea3ae3aa1)), closes [#2994](https://github.com/biosimulations/biosimulations/issues/2994)


### Features

* **simulators:** expanded specs for simulators ([32b100b](https://github.com/biosimulations/biosimulations/commit/32b100be3f5856bc8131427155031dc5abe1013a))
* expanded simulator specs ([f281cd3](https://github.com/biosimulations/biosimulations/commit/f281cd31b7c3c7c08dfc47162944dcfdbb7c4761))

## [4.2.0](https://github.com/biosimulations/biosimulations/compare/v4.1.0...v4.2.0) (2021-09-11)


### Bug Fixes

* **deps:** update dependency axios to v0.21.4 ([#2952](https://github.com/biosimulations/biosimulations/issues/2952)) ([c24c0e2](https://github.com/biosimulations/biosimulations/commit/c24c0e2eb96d6ff5c1a77f9408dee9c80e02c0f1))
* **deps:** update dependency ssh2 to v1.4.0 ([#2953](https://github.com/biosimulations/biosimulations/issues/2953)) ([a3afb2b](https://github.com/biosimulations/biosimulations/commit/a3afb2b7c862b7cf4bb86a451dce7380a64afa39))
* specify global setTimeout instead of window ([432b90a](https://github.com/biosimulations/biosimulations/commit/432b90a00f34c604bc5f2fd7038a925c52ea4fec))
* **dispatch-service:** restore check for empty env variables ([3f714ba](https://github.com/biosimulations/biosimulations/commit/3f714baf82ab04673fb33a28cc9f7daa9899c39b))
* restore mkdocs file location ([41a269e](https://github.com/biosimulations/biosimulations/commit/41a269e37f9c3e704baa614b4ab8de30d8ed6546))


### Features

* **account-api:** replace typegoose with mongoose ([69911a3](https://github.com/biosimulations/biosimulations/commit/69911a35ab0ca6c324ba53a097c814d53730d491))
* **dispatch-api:** handle errors and timeouts on uploa> ([dad35ea](https://github.com/biosimulations/biosimulations/commit/dad35ea5718abac450c682970e332ee4292890f3)), closes [#2860](https://github.com/biosimulations/biosimulations/issues/2860)
* **dispatch-service:** added passing software licenses from deployment secrets to Singularity run ([cc19999](https://github.com/biosimulations/biosimulations/commit/cc199990c6255b6b70bc436a9d16051602c4d0c5))
* **storage:** add simulation storage service and timeout for s3 uploads ([0c24173](https://github.com/biosimulations/biosimulations/commit/0c241737989289f79b13ebc8efa265cc7c6fc91f))

## [4.1.0](https://github.com/biosimulations/biosimulations/compare/v4.0.1...v4.1.0) (2021-09-06)


### Features

* **simulators:** added attribute to track installation instructions for Python APIs ([cb2b415](https://github.com/biosimulations/biosimulations/commit/cb2b415b4513170bbb09140e6cd9bff4b970d3ed))

## [4.0.1](https://github.com/biosimulations/biosimulations/compare/v4.0.0...v4.0.1) (2021-09-06)


### Bug Fixes

* **dispatch:** simulation results URLs for data visualizations ([9b7b879](https://github.com/biosimulations/biosimulations/commit/9b7b8795ac2b524b9089fad5a2c7916e3d1214f4))


### Reverts

* 39a60b17d640b62639f6594024f4ba4c66baedc5 ([f804cce](https://github.com/biosimulations/biosimulations/commit/f804cce9e3b3787a11b2989743e86407a4c014dd)), closes [#2959](https://github.com/biosimulations/biosimulations/issues/2959)

## [4.0.0](https://github.com/biosimulations/biosimulations/compare/v3.20.0...v4.0.0) (2021-09-04)


### Bug Fixes

* **dispatch:** properly encode uri to allow for fetching results ([dcbf044](https://github.com/biosimulations/biosimulations/commit/dcbf04433f7e105a01f501f3aa7172c82807ea41))


### Features

* update example simulation runs ([395f513](https://github.com/biosimulations/biosimulations/commit/395f513657c662d2b26b3d3b0de95cdd860ea326)), closes [#2951](https://github.com/biosimulations/biosimulations/issues/2951)


### BREAKING CHANGES

* simulation runs sumbitted prior to the update will not display on the dispatch app

## [3.20.0](https://github.com/biosimulations/biosimulations/compare/v3.19.0...v3.20.0) (2021-09-04)


### Bug Fixes

* **deps:** update dependency aws-sdk to v2.983.0 ([#2947](https://github.com/biosimulations/biosimulations/issues/2947)) ([39a60b1](https://github.com/biosimulations/biosimulations/commit/39a60b17d640b62639f6594024f4ba4c66baedc5))
* **dispatch-service:** correct the determination of the environment ([ce46d3b](https://github.com/biosimulations/biosimulations/commit/ce46d3bddb05195dd29408d05c00de53186336ae))
* fix default environment to dev ([c970ccd](https://github.com/biosimulations/biosimulations/commit/c970ccde7a533bb0db3f0ec8334308d3a1ee237d))
* new endpoint implementation ([ed42b6b](https://github.com/biosimulations/biosimulations/commit/ed42b6b27fbba4a97b8a931d6d9771b1563eddb9)), closes [#2943](https://github.com/biosimulations/biosimulations/issues/2943) [#2861](https://github.com/biosimulations/biosimulations/issues/2861) [#2859](https://github.com/biosimulations/biosimulations/issues/2859)


### Features

* **dispatch,dispatch-api:** move thumbnail processing to backend ([4495d6d](https://github.com/biosimulations/biosimulations/commit/4495d6d70e8fcb168fd5b4a38f70850171908d7b))
* **platform:** add page to view projects on platform ([e568d0c](https://github.com/biosimulations/biosimulations/commit/e568d0c16a5e67198e921d8705e45f137c680df2))


### Reverts

* revert commit 5dad745d1df0ffc3fb2fba8fc3b99b21b69b0521 ([f8cdd5b](https://github.com/biosimulations/biosimulations/commit/f8cdd5b338ec3fd7f8b7faf607ce893a9d343075))

## [3.19.0](https://github.com/biosimulations/biosimulations/compare/v3.18.0...v3.19.0) (2021-09-02)


### Features

* **combine-service:** updated to biosimulators-utils 0.1.115, biosimulators-amici 0.1.18 ([9ad2945](https://github.com/biosimulations/biosimulations/commit/9ad29450a51b8ff181a00fe57c70b660dc917a60))

## [3.18.0](https://github.com/biosimulations/biosimulations/compare/v3.17.0...v3.18.0) (2021-09-01)


### Bug Fixes

* **deps:** update dependency form-data to v4 ([#2925](https://github.com/biosimulations/biosimulations/issues/2925)) ([36a79ba](https://github.com/biosimulations/biosimulations/commit/36a79baccabb13e181e9ca5ee0cd2d0bff629697))
* **deps:** update dependency jwks-rsa to v2 ([#2928](https://github.com/biosimulations/biosimulations/issues/2928)) ([f4a3f10](https://github.com/biosimulations/biosimulations/commit/f4a3f107f5e43831e4cf72ffc63fcaf67a0026e3))
* **deps:** update dependency ssh2 to v1 ([#2930](https://github.com/biosimulations/biosimulations/issues/2930)) ([11111c7](https://github.com/biosimulations/biosimulations/commit/11111c76a5c943741397d3110189ac0d5ee53a86))


### Features

* **combine-service:** fixed error handling for run sim, simplified run sim options ([5e63d49](https://github.com/biosimulations/biosimulations/commit/5e63d49eb5a1ad5c27ac09dc970093f04ff79980))
* **dispatch:** added support for new SBO modeling framework terms ([80ee759](https://github.com/biosimulations/biosimulations/commit/80ee759d6be92545b01f999c1a7c0630fa43f43d))

## [3.17.0](https://github.com/biosimulations/Biosimulations/compare/v3.16.0...v3.17.0) (2021-09-01)


### Bug Fixes

* **deps:** update dependency aws-sdk to v2.980.0 ([#2906](https://github.com/biosimulations/Biosimulations/issues/2906)) ([163191d](https://github.com/biosimulations/Biosimulations/commit/163191d5cc1e24dbeb0440681761e175b633a759))


### Features

* add shared config file support ([976e578](https://github.com/biosimulations/Biosimulations/commit/976e57846a8c43fa10f8be4e70a8a1989bde683c))
* **dispatch:** call the metadata endpoint to get simulation metadata ([ae1054f](https://github.com/biosimulations/Biosimulations/commit/ae1054f6f101b170cb1408d13ffdcbb39f0b25a1)), closes [#2866](https://github.com/biosimulations/Biosimulations/issues/2866)

## [3.16.0](https://github.com/biosimulations/Biosimulations/compare/v3.15.0...v3.16.0) (2021-08-31)


### Bug Fixes

* **deps:** update dependency class-validator to v0.13.1 ([#2894](https://github.com/biosimulations/Biosimulations/issues/2894)) ([3676e59](https://github.com/biosimulations/Biosimulations/commit/3676e59d26a91d81bd7b12cd0287d619fa8e89ab))
* **deps:** update dependency nats to v2.2.0 ([#2886](https://github.com/biosimulations/Biosimulations/issues/2886)) ([7097edc](https://github.com/biosimulations/Biosimulations/commit/7097edc10eef06edc70ede51b1c2c4dc9eec5810))
* **deps:** update dependency rxjs to v7.3.0 ([#2895](https://github.com/biosimulations/Biosimulations/issues/2895)) ([c01604b](https://github.com/biosimulations/Biosimulations/commit/c01604bfcf4df5516158b442435f63002ef9720c))
* **deps:** update dependency stackdriver-errors-js to v0.10.0 ([43451aa](https://github.com/biosimulations/Biosimulations/commit/43451aa19accdc7c670a17cd6fec1aa660934234))
* **deps:** update dependency tslib to v2.3.1 ([#2888](https://github.com/biosimulations/Biosimulations/issues/2888)) ([fc78756](https://github.com/biosimulations/Biosimulations/commit/fc787565990a70489c6ee0a6b9450af7e92eb118))


### Features

* **dispatch:** added dry run option to example simulation submission ([1487880](https://github.com/biosimulations/Biosimulations/commit/1487880a87f82f48e29dafcfe9741bf9ff862cb7))
* **dispatch:** added example simulation run for RBApy ([277772e](https://github.com/biosimulations/Biosimulations/commit/277772e9d062f4a82fab455efbc2c67d088770ad))
* **dispatch-api:** set uris for metadata elements ([96e94fe](https://github.com/biosimulations/Biosimulations/commit/96e94fef4ea1a25ad95cba100c9b635618d29e7e))
* **simulators:** added ability to capture Python APIs in simulator specs ([5ed44cb](https://github.com/biosimulations/Biosimulations/commit/5ed44cb904349e4f91eb6b8cf62f264eb6eeebdd))

## [3.15.0](https://github.com/biosimulations/Biosimulations/compare/v3.14.0...v3.15.0) (2021-08-29)


### Bug Fixes

* **deps:** update dependency aws-sdk to v2.978.0 ([#2883](https://github.com/biosimulations/Biosimulations/issues/2883)) ([ca487aa](https://github.com/biosimulations/Biosimulations/commit/ca487aab71671f9a4a71668e253800fdc7e98708))
* **deps:** update dependency bull to v3.29.1 ([#2884](https://github.com/biosimulations/Biosimulations/issues/2884)) ([e6589e7](https://github.com/biosimulations/Biosimulations/commit/e6589e7d70baa6c9d6797d4fde95687d4798c19b))
* **deps:** update nest ([#2835](https://github.com/biosimulations/Biosimulations/issues/2835)) ([0e65b60](https://github.com/biosimulations/Biosimulations/commit/0e65b6084e75aae31ff8d089e6321f581fd8742d))


### Features

* **combine-service:** updated to Biosimulators-utils with support for RBA models ([610225b](https://github.com/biosimulations/Biosimulations/commit/610225b46f8bd9ed26c1ca632f01c051d5765dc8))
* updated biosimulators documentation links to docs.biosimulatos.org ([bfa49bb](https://github.com/biosimulations/Biosimulations/commit/bfa49bb7530cb656689eb8632b365110fb6b5aca))
* updated SBO for term for RBA ([fc64418](https://github.com/biosimulations/Biosimulations/commit/fc64418993cb06a162884461646b586801b7f37e))

## [3.14.0](https://github.com/biosimulations/Biosimulations/compare/v3.13.0...v3.14.0) (2021-08-27)


### Bug Fixes

* **combine-service:** dont change field "abstract" to "_abstract" ([591b0db](https://github.com/biosimulations/Biosimulations/commit/591b0db5bef0c4a260fb6f0583ed82b0eaf77481))
* **combine-service:** fix api client implementation ([d313f1c](https://github.com/biosimulations/Biosimulations/commit/d313f1cae8f64d1e93a0741bab2545d9b14d1109))
* **dispatch-service:** dont log error if job is not yet present ([b80db71](https://github.com/biosimulations/Biosimulations/commit/b80db71ed633cbf9c6cb2103a513d7dd1fc397cd))
* **dispatch-service:** fix url for posting metadata ([a5926e7](https://github.com/biosimulations/Biosimulations/commit/a5926e70d24985d0d50adfc65acdd4d6bbb8ca7d))
* **platform:** correct url for metadata ([c2a7a63](https://github.com/biosimulations/Biosimulations/commit/c2a7a63f57072598f9890905697edcfb461742f4))
* **platform:** fix unterminated string literal ([fe0343d](https://github.com/biosimulations/Biosimulations/commit/fe0343dc6fe808023c822b3ffeb004c094be96a2))


### Features

* **combine-service:** isolating simulation execution into separate processes ([9d23a5d](https://github.com/biosimulations/Biosimulations/commit/9d23a5d12571708ecf7b44bc83675cb5b5802a98))
* **combine-service:** update combine api client ([c1bb566](https://github.com/biosimulations/Biosimulations/commit/c1bb56636207d966bbd41f2dcf697008c43a27cf))
* **dispatch-service:** create handler to extract metadata ([16b469a](https://github.com/biosimulations/Biosimulations/commit/16b469a479061d643ffa8541a5db55e95f687404))
* **dispatch-service:** process and create metadata for simulation runs ([99df19d](https://github.com/biosimulations/Biosimulations/commit/99df19d50c786992aad6d35da1443fa3b8126c98))
* **exceptions:** change database errors to return 500 errors instead of 400 ([7390b7f](https://github.com/biosimulations/Biosimulations/commit/7390b7f3e35c6c1f0d1dfb8f145cf4ad8e5545c9))

## [3.13.0](https://github.com/biosimulations/Biosimulations/compare/v3.12.0...v3.13.0) (2021-08-24)


### Features

* **ontology:** updated to KiSAO 2.27 ([09ede72](https://github.com/biosimulations/Biosimulations/commit/09ede7208ce04542e5243ec96b4480471e98f8eb))

## [3.12.0](https://github.com/biosimulations/Biosimulations/compare/v3.11.0...v3.12.0) (2021-08-23)


### Bug Fixes

* **dispatch-api:** fields paramter is optional ([c3863e3](https://github.com/biosimulations/Biosimulations/commit/c3863e3c92709fb094ea6a9712aacbe59cdd412b))


### Features

* **dispatch-api:** implement metadata endpoints ([9d067e9](https://github.com/biosimulations/Biosimulations/commit/9d067e983cd625a8d706bc1cb3cfa2033bdabf62))

## [3.11.0](https://github.com/biosimulations/Biosimulations/compare/v3.10.0...v3.11.0) (2021-08-22)


### Features

* **combine-service:** enabled NEURON, NetPyNe for simulation ([19661df](https://github.com/biosimulations/Biosimulations/commit/19661df2b96697934d2f9ca3b9949cac1570554e))

## [3.10.0](https://github.com/biosimulations/Biosimulations/compare/v3.9.0...v3.10.0) (2021-08-21)


### Features

* **combine-service:** added endpoint for low latency simulation ([b44f5e3](https://github.com/biosimulations/Biosimulations/commit/b44f5e30df6b0e23b40ed302fa6a7a61a6969c09))
* **combine-service:** added endpoint for low-latency simulations ([931f3c7](https://github.com/biosimulations/Biosimulations/commit/931f3c7d25b329f55578cb0e7ba5e59ce7c91858))
* **combine-service:** added options to export simulation results in HDF5, zip formats ([c0cd699](https://github.com/biosimulations/Biosimulations/commit/c0cd6998dc850c5afbcee00fa2afec7390ffd235))
* **combine-service:** added simulator name to get simulaton tools endpoint ([1f708dd](https://github.com/biosimulations/Biosimulations/commit/1f708dd70e138a2c7d662b8689ef73566180e3ba))
* **combine-service:** added test to verify simulator APIs ([0bcaff3](https://github.com/biosimulations/Biosimulations/commit/0bcaff3f11fbc9e85285ef709432219d80fb1ef1))
* **combine-service:** pre-compiled Python code for faster initial calls ([f368de9](https://github.com/biosimulations/Biosimulations/commit/f368de9d973274c0e218e24075665a255d698e7f))
* **combine-service:** updated AMICI, GillesPy2, libSBMLSim ([fe8df2a](https://github.com/biosimulations/Biosimulations/commit/fe8df2a7b1da8c955210be78432565f60080d5bd))
* **combine-service:** updated to KiSAO 2.26, BioSimalators-utils 0.1.105 ([05b9dc5](https://github.com/biosimulations/Biosimulations/commit/05b9dc5ebe393c1e4c4143a0125867a3a79a58ea))
* **combine-service:** updated to KiSAO 2.26, BioSimulators-utils 0.1.105 ([74d0b36](https://github.com/biosimulations/Biosimulations/commit/74d0b369a933ec4b3f7b46c4028addfb794ef90d))
* **dispatch:** added simulator names to simulation tools menu in run form ([5170810](https://github.com/biosimulations/Biosimulations/commit/51708108ce772851690a4a3edff556513feb9368))
* **ontology:** updated to KiSAO 2.26 ([f25f243](https://github.com/biosimulations/Biosimulations/commit/f25f243bf85af086902badfd22b25547d974b9fb))
* **simulators:** added documentation for Python API conventions ([60669be](https://github.com/biosimulations/Biosimulations/commit/60669be5f166ac30a1af137240fbc049c13db331))

## [3.9.0](https://github.com/biosimulations/Biosimulations/compare/v3.8.0...v3.9.0) (2021-08-19)


### Features

* **dispatch:** added example run for MASSpy ([a589891](https://github.com/biosimulations/Biosimulations/commit/a589891a9367b58be7317f6b8f8da8545c2c44a7))
* **dispatch,ontology:** started to add MASS, RBA formats ([43a6153](https://github.com/biosimulations/Biosimulations/commit/43a615325f9695700ac2c9b68b2e124b0b03e3f9))
* **ontology:** updated to KiSAO 2.25 ([3fb5c54](https://github.com/biosimulations/Biosimulations/commit/3fb5c54af97d5631228c0e6456390377a867de5b))

## [3.8.0](https://github.com/biosimulations/Biosimulations/compare/v3.7.0...v3.8.0) (2021-08-18)


### Features

* **ontology:** updated to kisao 2.26 ([0f1f31a](https://github.com/biosimulations/Biosimulations/commit/0f1f31ae0383af38f9e7cd06aa28f022b7d6df07))

## [3.7.0](https://github.com/biosimulations/Biosimulations/compare/v3.6.0...v3.7.0) (2021-08-18)


### Bug Fixes

* update angular/cdk ([c7a18c1](https://github.com/biosimulations/Biosimulations/commit/c7a18c16f0c71fb0057a8cd331bbdd28abddb74b))
* **deps:** update dependency @openapi-contrib/openapi-schema-to-json-schema to v3.1.1 ([#2799](https://github.com/biosimulations/Biosimulations/issues/2799)) ([5d6453f](https://github.com/biosimulations/Biosimulations/commit/5d6453f1fc211b61ba7a0b40c9e18e7877bb874d))
* **deps:** update dependency @sendgrid/mail to v7.4.6 ([#2800](https://github.com/biosimulations/Biosimulations/issues/2800)) ([1e83398](https://github.com/biosimulations/Biosimulations/commit/1e83398a2b75f5af5b44506603f906f3c6e00b9d))
* **deps:** update dependency @typegoose/typegoose to v7.6.3 ([#2803](https://github.com/biosimulations/Biosimulations/issues/2803)) ([1a02d14](https://github.com/biosimulations/Biosimulations/commit/1a02d14610ec792e967f71cd4eec35c83af31d74))
* **deps:** update dependency auth0 to v2.36.1 ([#2823](https://github.com/biosimulations/Biosimulations/issues/2823)) ([fa11231](https://github.com/biosimulations/Biosimulations/commit/fa11231f161bb778e67f52287d707756b5315f20))
* **deps:** update dependency cache-manager to v3.4.4 ([#2804](https://github.com/biosimulations/Biosimulations/issues/2804)) ([3c62abb](https://github.com/biosimulations/Biosimulations/commit/3c62abb0576ede01ba5d9eec1ca0daf56a8b5a4e))
* **deps:** update nest ([#2807](https://github.com/biosimulations/Biosimulations/issues/2807)) ([875673f](https://github.com/biosimulations/Biosimulations/commit/875673f37fe2e4d0cc3f33497043f27899d03fd9))
* **dispatch-service:** added handling for case when no environment variables need to be set ([b51418d](https://github.com/biosimulations/Biosimulations/commit/b51418db31f38c534e774603070943d2abd0901e))
* **platform:** fix import of simulationrun metadata ([fb85650](https://github.com/biosimulations/Biosimulations/commit/fb85650554373a20e48be805d1068f0885bee7c0))


### Features

* **datamodel:** add common api query parameters ([c8bace5](https://github.com/biosimulations/Biosimulations/commit/c8bace5a78d6e991f0590a403927ab28757895f9))
* **dispatch:** added support for passing environment variables to simulators ([107221a](https://github.com/biosimulations/Biosimulations/commit/107221acfef0d611dba986f1da1e1782c1472d91))
* **dispatch-api:** add ability to get sparse simulationRuns ([5570ebb](https://github.com/biosimulations/Biosimulations/commit/5570ebb053df9d19c1fcb8f838564b1107d4c33f))
* **dispatch-api:** add endpoint for metadata ([24ffa40](https://github.com/biosimulations/Biosimulations/commit/24ffa40e96f42054ae4cee1f3eb62c6544ff08fe))
* **dispatch-api:** add tags, add ontology endpoint ([d056b4a](https://github.com/biosimulations/Biosimulations/commit/d056b4a74f0d19454e0eff0c515aea2eba5a0cd5))
* **dispatch-api:** create api model for metadata ([#2815](https://github.com/biosimulations/Biosimulations/issues/2815)) ([d55f7a5](https://github.com/biosimulations/Biosimulations/commit/d55f7a5d29e1f3cbb23ab472f84a2d8b961af843))
* **exceptions:** add better handling of validation errors ([e4e1986](https://github.com/biosimulations/Biosimulations/commit/e4e198623ae0d3f86460da18040faf9f28c9ee9a))

## [3.6.0](https://github.com/biosimulations/Biosimulations/compare/v3.5.0...v3.6.0) (2021-08-11)


### Bug Fixes

* **dispatch:** add logging when catching error ([85fab6c](https://github.com/biosimulations/Biosimulations/commit/85fab6cd89789cbf7357569194404e824bb60865))


### Features

* **dispatch:** added example runs for represillator model with SBML ([3400fa1](https://github.com/biosimulations/Biosimulations/commit/3400fa13eed1178ba74f76111b8ec83c995580f9))
* **dispatch:** added example simulation run for represillator model with OpenCOR ([ebffbae](https://github.com/biosimulations/Biosimulations/commit/ebffbae270595afd8d479d0a5ab6e90623b2323a))
* **dispatch:** added example simulation runs with visuaulizations using SBGN PD maps ([3c371e0](https://github.com/biosimulations/Biosimulations/commit/3c371e00758ab7a56b54afb5997da485fa3d071c))

## [3.5.0](https://github.com/biosimulations/Biosimulations/compare/v3.4.1...v3.5.0) (2021-08-09)


### Bug Fixes

* **deps:** pin dependency zone.js to 0.11.4 ([51bd9c7](https://github.com/biosimulations/Biosimulations/commit/51bd9c77245528ba8903d1644ddf5985899aa803))
* **dispatch:** added timeout for loading similar algorithms ([8c7a725](https://github.com/biosimulations/Biosimulations/commit/8c7a7256e13c9d6fd6c88fd4b5c89553d14906ef))
* **dispatch:** corrected display metadata loading indicator ([346aaeb](https://github.com/biosimulations/Biosimulations/commit/346aaeb809007d25b27e9a970f22eb7a3a715069))
* **dispatch:** fixed display of visualization loading indicator ([59fcd98](https://github.com/biosimulations/Biosimulations/commit/59fcd98686da9f8c6d22af7048b178d1b3362611))


### Features

* **dispatch:** added buttons to publish projects ([33c199a](https://github.com/biosimulations/Biosimulations/commit/33c199ae9e9ccdcc3ef41778f83c7caa7290d65e))
* **dispatch:** added display of errors with metadata of COMBINE archives ([41a0146](https://github.com/biosimulations/Biosimulations/commit/41a0146c8ac7421f13f0a9fe8aa61d2018f38ff0))
* **dispatch:** added support for XPP ([3d108ad](https://github.com/biosimulations/Biosimulations/commit/3d108adb5e468d408b4fbad061eab48f84861ea0))
* **dispatch:** improving capabilities when COMBINE service is down ([dc9ca09](https://github.com/biosimulations/Biosimulations/commit/dc9ca095ff96405e46a13d5f7ce56b95645308e7))
* **dispatch:** simplified designing 2D line/scatter plots with multiple curves ([beab68e](https://github.com/biosimulations/Biosimulations/commit/beab68e194e637940c57637520f292d0262fa328))

## [3.4.1](https://github.com/biosimulations/Biosimulations/compare/v3.4.0...v3.4.1) (2021-07-30)


### Bug Fixes

* **deps:** pin dependency @ngbmodule/material-carousel to 0.7.1 ([0d1acde](https://github.com/biosimulations/Biosimulations/commit/0d1acde594b0bc455c50209603684b8da7f66a02))
* **dispatch-api:** send correct message when simulation status changes ([a3c9c62](https://github.com/biosimulations/Biosimulations/commit/a3c9c6235102a33dafbc8414d0d5535c1a641f2f)), closes [#2739](https://github.com/biosimulations/Biosimulations/issues/2739)

## [3.4.0](https://github.com/biosimulations/Biosimulations/compare/v3.3.0...v3.4.0) (2021-07-29)


### Bug Fixes

* **dispatch:** corrected processing of metadata while status is pinging ([e29fb0e](https://github.com/biosimulations/Biosimulations/commit/e29fb0e54343da3c43db5f949dc48e83842845ca))


### Features

* **dispatch:** added example simulation run for activity flow diagram ([f534c33](https://github.com/biosimulations/Biosimulations/commit/f534c33835274eb113c9f62209d13810cb55f778))
* **dispatch:** expanded support for connecting SED-ML to Vega ([439bbeb](https://github.com/biosimulations/Biosimulations/commit/439bbebcfcc562304018711b9e0e485cba099eb1))
* **ontology:** updated SBO for additional framework terms ([5eaa097](https://github.com/biosimulations/Biosimulations/commit/5eaa097753353e9134a81b92554f3ca7efd8335e))

## [3.3.0](https://github.com/biosimulations/Biosimulations/compare/v3.2.0...v3.3.0) (2021-07-23)


### Bug Fixes

* **dispatch:** hiding figures/tables section when there are no figures/tables ([056caf8](https://github.com/biosimulations/Biosimulations/commit/056caf8d6f7ec6c7b0f6ad2116588e8f6dea751d))


### Features

* **dispatch,simulators:** added documentation about generating data visualizations ([0066522](https://github.com/biosimulations/Biosimulations/commit/00665225875e75a62a93dd93fd545f8e823f9ecc))
* making creation data metadata optional ([7812d65](https://github.com/biosimulations/Biosimulations/commit/7812d654f1ddfed9f9c2ea00b63ae31c3a537942))

## [3.2.0](https://github.com/biosimulations/Biosimulations/compare/v3.1.0...v3.2.0) (2021-07-22)


### Bug Fixes

* **dispatch-api:** change path from 'run' to 'runs' ([ead8d80](https://github.com/biosimulations/Biosimulations/commit/ead8d807ffe48a2cb50e54d88a65e880d00b6a70))


### Features

* **dispatch:** improved Vega error handling ([56a1e0c](https://github.com/biosimulations/Biosimulations/commit/56a1e0ce1f7147130bd18651dcac9d0b6953bb09))
* **dispatch:** updated example runs for new vis and metadata ([1683451](https://github.com/biosimulations/Biosimulations/commit/168345199fb240e098f168211609973076251a0b))
* **platform,platform-api:** platform gets projects from api ([f0b010d](https://github.com/biosimulations/Biosimulations/commit/f0b010d68b592765acb172c27a1b527ca4d9d157))
* **simulators:** added documentation about recommendation to use Identifiers.org URIs ([5445b08](https://github.com/biosimulations/Biosimulations/commit/5445b08a46678b4f73ea25fec53b38c9fdc6de4d))

## [3.1.0](https://github.com/biosimulations/Biosimulations/compare/v3.0.2...v3.1.0) (2021-07-19)


### Bug Fixes

* **deps:** pin dependencies ([5c762b6](https://github.com/biosimulations/Biosimulations/commit/5c762b64117e22863f8edf96c0d358256536b765))
* **deps:** update nest monorepo ([790aa52](https://github.com/biosimulations/Biosimulations/commit/790aa52b225b7d1eca6312da65fa0ff6b3d6fb9c))
* **dispatch:** fixed handling of query arguments to run simulation route ([546c49b](https://github.com/biosimulations/Biosimulations/commit/546c49bc344dfade3fd677998a665066e35ea2ce))
* **simulators:** reenabling display of simulator validation test results ([902bc93](https://github.com/biosimulations/Biosimulations/commit/902bc9374875572f4072ffde72d369a60f6f31c1)), closes [#2696](https://github.com/biosimulations/Biosimulations/issues/2696)


### Features

* **dispatch:** added 1D histogram plot ([379e0a7](https://github.com/biosimulations/Biosimulations/commit/379e0a7d74ad74b1cdc35e7babba9be7b1155c01))
* **dispatch:** added 2D heatmap data visualization ([147b6ad](https://github.com/biosimulations/Biosimulations/commit/147b6ad4ae52e77b4c02eac6cfc5b17dacf8a5c1))
* **dispatch:** added ability to add files to COMBINE archives ([c05631e](https://github.com/biosimulations/Biosimulations/commit/c05631e52fbcba6c72ccb24380b2d66167790218))
* **dispatch:** added exporting user-configured histogram viz to Vega ([6342e44](https://github.com/biosimulations/Biosimulations/commit/6342e448059fcc100d37b7246206cfb01b1bd8e8))
* **dispatch:** added Vega export for 2D heatmap, improved visualization form validation ([784917f](https://github.com/biosimulations/Biosimulations/commit/784917f3172e2416fe3e959218ec27e452fe4a79))
* **dispatch:** added Vega export for 2d line/scatter plot ([8f2cff0](https://github.com/biosimulations/Biosimulations/commit/8f2cff046bc3db7fdab6a8690a780da1d3ae7867))
* **dispatch:** improved plotting ([852545b](https://github.com/biosimulations/Biosimulations/commit/852545b75fb4dd1bca2b0594ca519f1cab9a111d))
* **dispatch:** linked Vega signals to attributes of SED-ML simulations ([88a68c3](https://github.com/biosimulations/Biosimulations/commit/88a68c332c9f630bc9c5cffa02b9c9e2e3f0058a))
* **dispatch:** linking published figures/tables to displayed visualizations ([44c810a](https://github.com/biosimulations/Biosimulations/commit/44c810acdc8ed31173387bd5521dbc03c093008a))
* **platform:** implement viewing a project ([0ad9af3](https://github.com/biosimulations/Biosimulations/commit/0ad9af33635272cfc29e4cd9b3d2d71cdb03dbe4))
* **platform-api:** add skeleton implementation ([0758052](https://github.com/biosimulations/Biosimulations/commit/0758052e88b185d72e3cedc46256377a8e3d9753))

## [3.0.2](https://github.com/biosimulations/Biosimulations/compare/v3.0.1...v3.0.2) (2021-07-13)


### Bug Fixes

* **mail-service,dispatch-service:** fix nats-server connection ([9143d0c](https://github.com/biosimulations/Biosimulations/commit/9143d0cabba6a22d44398cd4eec1cb1a5033e2f9))

## [3.0.1](https://github.com/biosimulations/Biosimulations/compare/v3.0.0...v3.0.1) (2021-07-13)


### Bug Fixes

* try new server options ([1851742](https://github.com/biosimulations/Biosimulations/commit/1851742fdb222a6330a6b2f52b814ee7d3273c5a))

## [3.0.0](https://github.com/biosimulations/Biosimulations/compare/v2.5.2...v3.0.0) (2021-07-13)


### Bug Fixes

* **mail-service,dispatch-service:** fix import of http module ([805e48f](https://github.com/biosimulations/Biosimulations/commit/805e48f34dec1b50308c20affa786fac1ae646f5))


### Features

* **simulators-api:** add a query argument to include the results of the validation ([710be08](https://github.com/biosimulations/Biosimulations/commit/710be085ec732d851aa89e78773c4ba12e7e682e)), closes [#2668](https://github.com/biosimulations/Biosimulations/issues/2668)


### BREAKING CHANGES

* **simulators-api:** validation data is no longer returned by default. A Query argument is needed to include the validation information

## [2.5.2](https://github.com/biosimulations/Biosimulations/compare/v2.5.1...v2.5.2) (2021-07-13)


### Bug Fixes

* type and build fixes ([6812bd0](https://github.com/biosimulations/Biosimulations/commit/6812bd0de12c3716ac8928154ed73aa92953dc40))
* **dispatch-api:** fix error with parsing outputIds ([9fac99f](https://github.com/biosimulations/Biosimulations/commit/9fac99f68094919de23d632795bf131b9fb8a1ef)), closes [#2683](https://github.com/biosimulations/Biosimulations/issues/2683)

## [2.5.1](https://github.com/biosimulations/Biosimulations/compare/v2.5.0...v2.5.1) (2021-07-09)


### Bug Fixes

* **simulators-api:** Allow for date based versions ([0c8fb8d](https://github.com/biosimulations/Biosimulations/commit/0c8fb8d00a36675f652a665d9c279709e798c212)), closes [#2681](https://github.com/biosimulations/Biosimulations/issues/2681)

## [2.5.0](https://github.com/biosimulations/Biosimulations/compare/v2.4.0...v2.5.0) (2021-07-09)


### Bug Fixes

* **dispatch:** downloading created COMBINE/OMEX archives ([03895bf](https://github.com/biosimulations/Biosimulations/commit/03895bf82abfa0b6d9c7c7db186a31d29e726b49))
* correcting size of form fields ([ae69630](https://github.com/biosimulations/Biosimulations/commit/ae69630cf3e45abfbcaaec17787956e7189e5e53))
* **shared-exceptions:** include error metadata in the "meta" output ([2be0178](https://github.com/biosimulations/Biosimulations/commit/2be0178af9003156ad25fa22e8c7fe51457c9556))


### Features

* **combine-service:** adding support for creating steady-state analyses of logical models ([a9e6667](https://github.com/biosimulations/Biosimulations/commit/a9e6667034c2b35d4379dff72a2d7cefe4d4f4d8))
* **combine-service:** updating to biosimulators-utils 0.1.93 ([ca0a21e](https://github.com/biosimulations/Biosimulations/commit/ca0a21e33d7c2a54f8bd6d9aa9d8c6943da955b2))
* **shared-exceptions:** add validation pipe error factory ([35edb4d](https://github.com/biosimulations/Biosimulations/commit/35edb4d4f73d82e4bbb17bbd701d13fc580093af))

## [2.4.0](https://github.com/biosimulations/Biosimulations/compare/v2.3.0...v2.4.0) (2021-07-08)


### Bug Fixes

* **combine-service:** add protocol to server in API spec ([bcf4119](https://github.com/biosimulations/Biosimulations/commit/bcf41192f15894f7993239f16b14f415c1a85910))
* **combine-service:** debugged specifications ([f8b9420](https://github.com/biosimulations/Biosimulations/commit/f8b9420fadbcf10c367f26c6b77bf736dc5463f3))
* **combine-service:** fix api spec ([ebab457](https://github.com/biosimulations/Biosimulations/commit/ebab457a262b594744e81cfdfe4bfdd9af45a4c2))
* **platform:** enable strict template checking, fix type errors ([9facdb1](https://github.com/biosimulations/Biosimulations/commit/9facdb19c1cacae3d22d4bd952c0f1f0cbaf8035)), closes [#2185](https://github.com/biosimulations/Biosimulations/issues/2185)


### Features

* **combine-service:** add combine-service api client library ([bfa25b8](https://github.com/biosimulations/Biosimulations/commit/bfa25b8f0319de62d3c6a5902597d51c68b8eb96))
* **dispatch:** added example simulation run for GINsim ([3e639b3](https://github.com/biosimulations/Biosimulations/commit/3e639b30c49e3149d966518d5a82908a3905e831))
* **dispatch:** added example simulation runs for GINsim, LibSBMLSim ([06ad0a4](https://github.com/biosimulations/Biosimulations/commit/06ad0a4be78dc595305492e975ba856722d27b27))
* **dispatch:** adding support for GINML, ZGINML to COMBINE archive creation and execution ([9f949e5](https://github.com/biosimulations/Biosimulations/commit/9f949e561256288f2851468a83c96160cc14f7fe))
* **dispatch,ontology:** add terms for GINsim format ([22d8a7b](https://github.com/biosimulations/Biosimulations/commit/22d8a7b2daec93c086bacc3c61a279dc85481cfd))
* **ontology:** updating to KiSAO 2.19 with terms for logical modeling ([c47e63b](https://github.com/biosimulations/Biosimulations/commit/c47e63b7767eecde90c033d8c11ef55b89678d4a))
* **ontology,combine-service:** update to KiSAO 2.20 ([fadf3da](https://github.com/biosimulations/Biosimulations/commit/fadf3da7c0e714267a89ac903acf516be5f00533))

## [2.3.0](https://github.com/biosimulations/Biosimulations/compare/v2.2.1...v2.3.0) (2021-07-02)

### Features

- **dispatch:** Added tab to simulation run page to display metadata about the simulation project ([#2667](https://github.com/biosimulations/Biosimulations/issues/2667)) ([dde87fa](https://github.com/biosimulations/Biosimulations/commit/dde87faae5e558c3bbe86f6f17467ae747da55d8)), closes [#2661](https://github.com/biosimulations/Biosimulations/issues/2661)

## [2.2.1](https://github.com/biosimulations/Biosimulations/compare/v2.2.0...v2.2.1) (2021-07-01)

### Bug Fixes

- **dispatch:** fix example simulation runs ([60d91c1](https://github.com/biosimulations/Biosimulations/commit/60d91c1bb70e6ae08274a9380143baa19fa51043)), closes [#2653](https://github.com/biosimulations/Biosimulations/issues/2653)
- **simulators-api:** fix getting latest version ([4594c96](https://github.com/biosimulations/Biosimulations/commit/4594c96b53859e03960458cd001cf8614d64f64c)), closes [#2664](https://github.com/biosimulations/Biosimulations/issues/2664)

## [2.2.0](https://github.com/biosimulations/Biosimulations/compare/v2.1.0...v2.2.0) (2021-06-30)

### Bug Fixes

- **dispatch:** correct integration between simulation results and SED plots ([0bab60f](https://github.com/biosimulations/Biosimulations/commit/0bab60fe06cc52d55a670d8957e385dc7f247854))
- **dispatch:** download file instead of redirect ([cd2840d](https://github.com/biosimulations/Biosimulations/commit/cd2840d98d84f13eab34cea479a09da23187fe14)), closes [#2435](https://github.com/biosimulations/Biosimulations/issues/2435)
- **dispatch:** use correct api to get simulator info ([1e66f1f](https://github.com/biosimulations/Biosimulations/commit/1e66f1f85f4436987ca034c3cdafad9536c12b9e))

### Features

- add some shared endpoints ([567e4c2](https://github.com/biosimulations/Biosimulations/commit/567e4c27de05655d3b78b441e84231977afd234b))
- **auth-client:** Cache tokens locally ([f53c9f8](https://github.com/biosimulations/Biosimulations/commit/f53c9f8d4c9c3e2bed497ec85c4c53d774af9fb1)), closes [#2503](https://github.com/biosimulations/Biosimulations/issues/2503)
- **auth-common:** add util functions ([e0ac842](https://github.com/biosimulations/Biosimulations/commit/e0ac842518af8e6909493cb1b2b774a56faf6b17))

### Performance Improvements

- **dispatch-service:** use /local as the singularity cache/working directory ([c63b58c](https://github.com/biosimulations/Biosimulations/commit/c63b58c35a0c3da71910523a3baf0f445f5e493a))

## [2.1.0](https://github.com/biosimulations/Biosimulations/compare/v2.0.0...v2.1.0) (2021-06-18)

### Bug Fixes

- **dispatch-service:** remove check for process flag ([f7f88cc](https://github.com/biosimulations/Biosimulations/commit/f7f88cce2fbc54df13e34ef5212f1491036ec8b5)), closes [#2577](https://github.com/biosimulations/Biosimulations/issues/2577)

### Features

- **dispatch-api, dispatch-service:** add status reason to datamodel ([ca9bcb6](https://github.com/biosimulations/Biosimulations/commit/ca9bcb6c7d7ffcb0328ef679d5a82801995add45)), closes [#2441](https://github.com/biosimulations/Biosimulations/issues/2441)

## [2.0.0](https://github.com/biosimulations/Biosimulations/compare/v1.0.0...v2.0.0) (2021-06-17)

### Bug Fixes

- **dispatch-api:** bind class to this variable in map ([b4bb3ca](https://github.com/biosimulations/Biosimulations/commit/b4bb3ca27cd52d27abe68dcaa524a158a1a73507))
- dispatch frontend uses the updated api parameter ([#2636](https://github.com/biosimulations/Biosimulations/issues/2636)) ([a13779c](https://github.com/biosimulations/Biosimulations/commit/a13779cdc320d58c595f85399ca4d7747d603657)), closes [#2635](https://github.com/biosimulations/Biosimulations/issues/2635)

### Features

- **dispatch-api, dispatch-service:** Use HSDS to get simulation run data ([33b8030](https://github.com/biosimulations/Biosimulations/commit/33b8030e60fcbd2eb693e2a962620cf42855b4e4)), closes [#2533](https://github.com/biosimulations/Biosimulations/issues/2533) [#2442](https://github.com/biosimulations/Biosimulations/issues/2442) [#2440](https://github.com/biosimulations/Biosimulations/issues/2440) [#2369](https://github.com/biosimulations/Biosimulations/issues/2369) [#2069](https://github.com/biosimulations/Biosimulations/issues/2069)

### BREAKING CHANGES

- **dispatch-api, dispatch-service:** Dispatch API no longer has endpoints for creating or updating "Result" objects.
  The output of the results endpoints are updated to include information about type and shape of the data.
  The parameter "sparse" has been changed to "includeData".
  The datamodel for results has been adjusted to include all outputs, not just reports. "reports" has been renamed to "outputs"

# 1.0.0 (2021-06-16)

This is an arbitrary starting point for tracking changes and versioning. It should not be considered as the "first release".

### Bug Fixes

- bash script ([866b58a](https://github.com/biosimulations/Biosimulations/commit/866b58a244d3483fa6afa2ae0e8383e234920ba6))
- add check for large files downloading ([ca10aa5](https://github.com/biosimulations/Biosimulations/commit/ca10aa5f2c44fafcff8471c0da0bbd9db2a655ed)), closes [#2536](https://github.com/biosimulations/Biosimulations/issues/2536)
- bring inline with datamodel ([af53a54](https://github.com/biosimulations/Biosimulations/commit/af53a54a5e5bc91835e114e67e10fc69883c7f9b))
- change url to download results ([3d264d4](https://github.com/biosimulations/Biosimulations/commit/3d264d4abfdb85aa4cae99e1477cbf4666b8ba36)), closes [#2561](https://github.com/biosimulations/Biosimulations/issues/2561)
- check job status after completion ([c16649c](https://github.com/biosimulations/Biosimulations/commit/c16649c507c35f1e086d41fb496a573549f925ba))
- cleanup logs ([fbd330f](https://github.com/biosimulations/Biosimulations/commit/fbd330f2762f6192b7e269ffcd2e8ede93c5ad14))
- correct value for constant ([e2d3a68](https://github.com/biosimulations/Biosimulations/commit/e2d3a68a39f5e6ad3216daf109087a2b1c43f26b))
- fix error in reading port ([e1f6fb9](https://github.com/biosimulations/Biosimulations/commit/e1f6fb923a42283d1b42765b4d0376a146f406ef))
- fix logs and context buttons ([777e8e8](https://github.com/biosimulations/Biosimulations/commit/777e8e8f79f829b3762c7aa189a9d6184f4b24a1)), closes [#2543](https://github.com/biosimulations/Biosimulations/issues/2543) [#2540](https://github.com/biosimulations/Biosimulations/issues/2540)
- fix redis queue and port ([5f33a19](https://github.com/biosimulations/Biosimulations/commit/5f33a192203323e30d6badd4b6500cc056b3ef34))
- fix s3 key for downloading outputs ([f585a9a](https://github.com/biosimulations/Biosimulations/commit/f585a9a6295cbbf60e73c05d5ae908713d1ef5ee)), closes [#2622](https://github.com/biosimulations/Biosimulations/issues/2622)
- fix spelling of library ([a471e95](https://github.com/biosimulations/Biosimulations/commit/a471e95e6684ee093d036f343efbba50df327563))
- fix test ([6f236df](https://github.com/biosimulations/Biosimulations/commit/6f236df6b5186e44ccf9c459faa83698cf22d7ae))
- fix test ([6af0ca8](https://github.com/biosimulations/Biosimulations/commit/6af0ca8a0b9f2d557a0fd416475151261a46fb88))
- lint fix ([a26c24b](https://github.com/biosimulations/Biosimulations/commit/a26c24b17e9d1f72bdb53860b7f27b300030ec68))
- order of operations for creating results ([eac31e0](https://github.com/biosimulations/Biosimulations/commit/eac31e01bde327b1d3ff89f6a7cf7480e5d0c96d))
- propely set name and filetype of outputs ([951c239](https://github.com/biosimulations/Biosimulations/commit/951c239983ea93009565287a8ac9bfd3deae8052))
- Remove bad library import ([ecc86fa](https://github.com/biosimulations/Biosimulations/commit/ecc86fa6d9abf59b466ea02d25d62c1119d07de8)), closes [#2420](https://github.com/biosimulations/Biosimulations/issues/2420)
- remove xdg runtime directory ([f5ec15b](https://github.com/biosimulations/Biosimulations/commit/f5ec15bd726ab4afa01b0c2be4688217d4d89198))
- resolve build errors ([6691ebe](https://github.com/biosimulations/Biosimulations/commit/6691ebedbda107862cbf731cb891044c426e5fc9))
- typo in return statement ([1f6c4fc](https://github.com/biosimulations/Biosimulations/commit/1f6c4fc0bda0780170530789e27e4fab4233d2e3))
- update default stoage URL ([f9b0d75](https://github.com/biosimulations/Biosimulations/commit/f9b0d75b3c4370653d1c0596157cc381fa6573f0))
- update logs ([818a0c3](https://github.com/biosimulations/Biosimulations/commit/818a0c347529c42d697ac972c15e17c09b5e0372))
- update sbatch memoy amount ([b9026f9](https://github.com/biosimulations/Biosimulations/commit/b9026f96ff2e5b4876559b1b116c1d5cdebbfb8d))
- update sbatch script to use custom module ([0ef1c52](https://github.com/biosimulations/Biosimulations/commit/0ef1c52de4d6703032decaff9b2c8941175c70fb))
- use job status to determine completion ([adb12a0](https://github.com/biosimulations/Biosimulations/commit/adb12a0efbe07e82346ddada18ad93342d1cede5))
- **apps/frontend:** relative import ([3854f27](https://github.com/biosimulations/Biosimulations/commit/3854f272fdd21847e522cb03f25353b06a3c3028))
- **auth:** check for logged in before intercepting ([7c22a19](https://github.com/biosimulations/Biosimulations/commit/7c22a19a2a33cff63067d30dd19ff8bfe091a189))
- **auth:** Check for username correctly ([05996b3](https://github.com/biosimulations/Biosimulations/commit/05996b376ed7b08a4de974cf39029cb9956c1070))
- **disatch:** Fix open api schema ([ff15503](https://github.com/biosimulations/Biosimulations/commit/ff15503862e62412418f3144353e76a8cd877f7b))
- **dispatch:** Fix observable piping ([34e7086](https://github.com/biosimulations/Biosimulations/commit/34e7086261b20ffdf42b6edcf3112f972432ea79))
- **dispatch:** parsing results accounts for quotes ([d055a7b](https://github.com/biosimulations/Biosimulations/commit/d055a7ba328e1e4d4d5f8094a661377a8e5294f9)), closes [#2459](https://github.com/biosimulations/Biosimulations/issues/2459)
- **dispatch:** patch error handling ([d2d98e5](https://github.com/biosimulations/Biosimulations/commit/d2d98e57bd1632d8f289e2d9fd017443a653c8db))
- **dispatch:** remove bad environment variables ([3c31b7d](https://github.com/biosimulations/Biosimulations/commit/3c31b7de39d05b5bfaf640a1553a204267247eab)), closes [#2476](https://github.com/biosimulations/Biosimulations/issues/2476)
- **dispatch:** Simulation results not saved for some simulations and overall status doesn't reflect such errors ([#2428](https://github.com/biosimulations/Biosimulations/issues/2428)) ([acd2dff](https://github.com/biosimulations/Biosimulations/commit/acd2dff837834e6732f4b5074c433f90a9523d06)), closes [#2416](https://github.com/biosimulations/Biosimulations/issues/2416)
- use https for auth0 image ([19a4dcc](https://github.com/biosimulations/Biosimulations/commit/19a4dcc53d6572be6b60a9bb8a4d9db4bd89afc6))
- **forms:** connect taxon form properly ([a4088f7](https://github.com/biosimulations/Biosimulations/commit/a4088f79bf3a6c06cfc0dfbb48936d820428c378))
- **forms:** fix reference form implementation ([5b3eba4](https://github.com/biosimulations/Biosimulations/commit/5b3eba498a464fe77f7bbad3ae3365db8bb3e6bc))
- **forms:** fix some taxon form details ([8802ced](https://github.com/biosimulations/Biosimulations/commit/8802cedb84fc7c1afdc2b5cea244bc11c5a67399))
- **forms:** fix tags form ([b60b99c](https://github.com/biosimulations/Biosimulations/commit/b60b99cc6c8526a7403c585f8f79315c757972a5))
- **forms:** fix validation error with taxon form ([6cb2d43](https://github.com/biosimulations/Biosimulations/commit/6cb2d43e7edda5edff8310cc5bcffc5a95cedec8))
- **forms:** Form does not scroll over topbar ([70f3275](https://github.com/biosimulations/Biosimulations/commit/70f327598c2cacd278625dd78c16e93761974d54))
- **forms:** set file form disable properly ([c523d0e](https://github.com/biosimulations/Biosimulations/commit/c523d0e8230c14c3c64a0266107b7777851ae114))
- **gaurds:** Gaurd loads underconstruction pages by default ([9f7a810](https://github.com/biosimulations/Biosimulations/commit/9f7a810bd6aa000039fb7dd3e3e5b421f63118e3))
- **grid:** grid work with async resources ([d621cd3](https://github.com/biosimulations/Biosimulations/commit/d621cd3d11402aca909a005e376d214160f117b2))
- **interceptor:** API token, error handling ([78be137](https://github.com/biosimulations/Biosimulations/commit/78be1377afbf3877885744074fe8dccd0ffe1ca6))
- **interceptor:** Fixed a bug in the error handling of the interceptor ([1397c96](https://github.com/biosimulations/Biosimulations/commit/1397c966e4a83fd1e0b660daeef092617cecc106))
- **models:** Edit component calls subscribe ([50f15ac](https://github.com/biosimulations/Biosimulations/commit/50f15accb120fcdb136262541e386bacee630cb3))
- **navigation:** get username via async ([7415eba](https://github.com/biosimulations/Biosimulations/commit/7415ebae27841b6147931820869b8ef06a55cc89))
- **navigation:** have navigation work with async ([0da33ea](https://github.com/biosimulations/Biosimulations/commit/0da33eaf426d907115ba07636674261611e73a7c))
- **polyfill:** add back polyfill ([30e9c1d](https://github.com/biosimulations/Biosimulations/commit/30e9c1de6204f3bba371be0ad53c89b8a8939f1f))
- **resource service:** add query params to read ([d1d7d38](https://github.com/biosimulations/Biosimulations/commit/d1d7d38610582ed45769b5f3d404f9222cbd08cc))
- **resources:** Move more functionality into abstract class ([5e94323](https://github.com/biosimulations/Biosimulations/commit/5e94323cdf7405de6d80b69bb18a7217d02e9922))
- **serializer:** fix private public being flipped ([035241f](https://github.com/biosimulations/Biosimulations/commit/035241f949d25c38bf9767a85ee805df958d0395))
- **serializers:** improve serializers ([0d3f004](https://github.com/biosimulations/Biosimulations/commit/0d3f004175ece11a48c668959d9b5b3e217994ae))
- **serializers:** user serializer returns none for '' ([221ce41](https://github.com/biosimulations/Biosimulations/commit/221ce413570b04671da1e77581d441a423eb4647))
- **services:** Dont cast http reponse to resource ([b20e69d](https://github.com/biosimulations/Biosimulations/commit/b20e69d45dcdcaf69dedc41cc157dc9cfee14005))
- **simulations:** fix async view ([d2cad0f](https://github.com/biosimulations/Biosimulations/commit/d2cad0fd3230714bae9be8858389456bcb6ac9ca))
- **tests:** fix common test issues ([61c7621](https://github.com/biosimulations/Biosimulations/commit/61c76219e91b7b43675014ea7293dd20e3dc1cf2))
- **tests:** fix common test issues ([0c4e5f3](https://github.com/biosimulations/Biosimulations/commit/0c4e5f3f9fa58cc600a45b401a5a4ab3ee23c315))
- **user:** profile edit component properly creates user ([0bed682](https://github.com/biosimulations/Biosimulations/commit/0bed68288d6fcb1c885138ec83e0c7309f3415d3))
- **visualizations:** fix licence view ([f5d9973](https://github.com/biosimulations/Biosimulations/commit/f5d997394786baf2fac0fe4a0b6ea11c402b9881))

### Features

- add client library ([820647b](https://github.com/biosimulations/Biosimulations/commit/820647b4c13ddae30174232c1da0cd5f88990dc6))
- add config for queue ([c7ec4a1](https://github.com/biosimulations/Biosimulations/commit/c7ec4a1ed6b840e11968597f5c530bf6d0a15566))
- add hsds client module ([1730521](https://github.com/biosimulations/Biosimulations/commit/17305212950d8f27e3d577660de00828b90a5f2d))
- use org for getting latest simulator ([2f7c503](https://github.com/biosimulations/Biosimulations/commit/2f7c503b30f921f8e21919934774c13dec4113d8))
- **api:** add config to api ([931dcf5](https://github.com/biosimulations/Biosimulations/commit/931dcf518c7d57adaeb767bdc18e7fcee151be1a))
- **api:** add crud skeleton for routes ([64fce18](https://github.com/biosimulations/Biosimulations/commit/64fce18062fa43ea5c3063fe29a569d8b97f1d09))
- **api:** add open api spec generation ([659f8b4](https://github.com/biosimulations/Biosimulations/commit/659f8b4a51cfb201aea00fc7d5b2bfac6c7a9c14))
- **author form:** build out author form ([afe666a](https://github.com/biosimulations/Biosimulations/commit/afe666ae014b6463d53349913488d894f64f5aa6))
- **datamodel:** add gaurds ([2ffdf04](https://github.com/biosimulations/Biosimulations/commit/2ffdf04605f2ecb9dd41d7c7c681e5843ece23c2))
- **datamodel:** add more of the core datamodel ([9b28f83](https://github.com/biosimulations/Biosimulations/commit/9b28f834cc0a671e1628617d97acc6bae9068412))
- **datamodel:** add properties to format ([67b024c](https://github.com/biosimulations/Biosimulations/commit/67b024ccb1620937a711da7486bc328f9f698328)), closes [#462](https://github.com/biosimulations/Biosimulations/issues/462)
- **datamodel:** add url to ontology ([3c8a169](https://github.com/biosimulations/Biosimulations/commit/3c8a1699b279acd687b1fcd80a420bb509cd09fe))
- **datamodel:** redefine core objects as set of attriutes ([95ea0a7](https://github.com/biosimulations/Biosimulations/commit/95ea0a78c2c23617b8ed103de55e41fdf2059122))
- **datamodel:** redfine core resources as primary and secondary ([dd2fec4](https://github.com/biosimulations/Biosimulations/commit/dd2fec4ac6d0f8fce9bfa3d1232e95b1dd528986))
- **dispatch:** add a dispatch service ([152b3b0](https://github.com/biosimulations/Biosimulations/commit/152b3b06536428850af601187eaf7f243f45b4d6))
- **errors:** add default errors component ([a10b927](https://github.com/biosimulations/Biosimulations/commit/a10b92773d263c289e59bab261381fb49bf3f953))
- **errors:** Create 404 component ([e1c7d33](https://github.com/biosimulations/Biosimulations/commit/e1c7d334ccde6684284ba1cab0ce38b2f109c3e9))
- **errors:** Create errors module ([7e3cac4](https://github.com/biosimulations/Biosimulations/commit/7e3cac4e27b4104595f94ef269e478916336b168))
- **errors:** Create under construction component ([5d2fbe1](https://github.com/biosimulations/Biosimulations/commit/5d2fbe1405117f8acc52b7ae5cbc9c5b7d4f5974))
- **errors:** slight changes to underConstruction ([bb06012](https://github.com/biosimulations/Biosimulations/commit/bb06012172c2a86c014ad1176832fe68a3439428))
- **forms:** add a component for file inputs ([e843f87](https://github.com/biosimulations/Biosimulations/commit/e843f873114fde51c917d01f48f6ce3f3fe306ff))
- **forms:** add abstract array subform ([1d70e47](https://github.com/biosimulations/Biosimulations/commit/1d70e479618af355416e287f973b5b8bbdc3db67))
- **forms:** add authors and identifiers components ([d2e35e8](https://github.com/biosimulations/Biosimulations/commit/d2e35e8bca295aa5a536eea3fbabc02c9119c13a))
- **forms:** Add identifier form control ([dd80d37](https://github.com/biosimulations/Biosimulations/commit/dd80d37d640c5eae612d216f26e3472ab5607cd8))
- **forms:** add name form control ([8557559](https://github.com/biosimulations/Biosimulations/commit/8557559e2e2d85e0409e31aa9cb2faaff39165a3))
- **forms:** add required validator to fields ([ceaacb5](https://github.com/biosimulations/Biosimulations/commit/ceaacb53174505e27ab2e98da1d80db4d346a6bf))
- **forms:** add resource form skeleton ([e7a56d5](https://github.com/biosimulations/Biosimulations/commit/e7a56d5892c80205fba48809e1f89dc347f3abff))
- **forms:** add taxon form ([48a2e86](https://github.com/biosimulations/Biosimulations/commit/48a2e8605a3de64f75368fd8a4bd0bcd8b6d6785))
- **forms:** add to resource form implementation ([dc0b9ed](https://github.com/biosimulations/Biosimulations/commit/dc0b9ed74e1ec8435e6422d8623c0b5aa75344b4))
- **forms:** add username form ([7ba4e81](https://github.com/biosimulations/Biosimulations/commit/7ba4e814ca1b5155bd5ae067c9385dbe3e84a30c))
- **forms:** create a model form ([353d2ab](https://github.com/biosimulations/Biosimulations/commit/353d2ab55ca5c4d6d7a3539a55e09604888bc5ef))
- **forms:** Create descriptions form control ([87b0fdd](https://github.com/biosimulations/Biosimulations/commit/87b0fdd95967957dbcc2033e858df9f975d838cb))
- **forms:** Create edit-preview component ([5177f05](https://github.com/biosimulations/Biosimulations/commit/5177f05ee5d86c6f19ee735b9c181f939971150d))
- **forms:** create model format form ([af0ad55](https://github.com/biosimulations/Biosimulations/commit/af0ad55b1972146aa6313e89dd8359a7d5d6d604))
- **forms:** enable access form component ([741afa3](https://github.com/biosimulations/Biosimulations/commit/741afa323769ffc6209e1b7cd6056311e3625a65))
- **forms:** Enable Drag/Drop ([799147b](https://github.com/biosimulations/Biosimulations/commit/799147b2277a7cc06191a50eb3cd6f66cc589f13))
- **forms:** Finalize author form ([3f4f86c](https://github.com/biosimulations/Biosimulations/commit/3f4f86cfb56c7d3785362f384a1a3378310a9cfd))
- **forms:** Generalize single field controls ([0da8122](https://github.com/biosimulations/Biosimulations/commit/0da8122c33d69a36a0a8db810e60a40a9340404d))
- **forms:** implement licence form ([2d2d9b1](https://github.com/biosimulations/Biosimulations/commit/2d2d9b1340e30867321ce8fbcef86c1e7e3be8e4))
- **forms:** implement refrences form ([122fa33](https://github.com/biosimulations/Biosimulations/commit/122fa33703cbafcaef32a4665ad130ee8599cd29))
- **forms:** implement resource form ([85e89ea](https://github.com/biosimulations/Biosimulations/commit/85e89ea97e8990e23b9b9477e9017b3f289854a1))
- **forms:** implement tags form ([0b1e480](https://github.com/biosimulations/Biosimulations/commit/0b1e48018e8cc1f22620e775cbd836fb63e315bb))
- **forms:** improve disable handling ([88cace8](https://github.com/biosimulations/Biosimulations/commit/88cace866e81e97def3dbbbedeacaf4daf24f435))
- **forms:** styling ([32044ef](https://github.com/biosimulations/Biosimulations/commit/32044ef922ae05010aebe1c9e83016007e7b069d))
- **home:** Add sponsors section ([8f84a67](https://github.com/biosimulations/Biosimulations/commit/8f84a677f550655b17d425dc6c961276a9fcaca5))
- **logging:** Added logging ([18476ca](https://github.com/biosimulations/Biosimulations/commit/18476ca216a6f0ddd5274d51073e7733c2be0c15))
- **login:** add styling ([642a71c](https://github.com/biosimulations/Biosimulations/commit/642a71cb269498b8272dd0a0b0e85c2f395fa170))
- **login:** redirect works ([eb05030](https://github.com/biosimulations/Biosimulations/commit/eb05030d658ff4570eac67c4fb08a91e38d70950))
- **mateiral:** add a material topbar ([4325dcc](https://github.com/biosimulations/Biosimulations/commit/4325dcc4fcb05cfd46a900b2df88bd33ce0ec32f))
- **models:** add query-options model definition ([d628289](https://github.com/biosimulations/Biosimulations/commit/d6282893f47393846af613e1cc4173c0f3b550ef))
- **projects:** add view project ([dab3c59](https://github.com/biosimulations/Biosimulations/commit/dab3c5917c4905c617e1fed78a50854aabc80d37))
- **pwa:** Add pwa capabilities ([27b9050](https://github.com/biosimulations/Biosimulations/commit/27b90508a31e840acc16fbccae809b2b288fde3b))
- **resources:** Resources now have owner embedded ([f03c30b](https://github.com/biosimulations/Biosimulations/commit/f03c30bf7ef7ad5096b27aaf431730c0e402c6ac))
- **serializers:** serializers read files properly ([c0eb5c1](https://github.com/biosimulations/Biosimulations/commit/c0eb5c15dae85aa9e164643e04c957359afca6fa))
- **service:** Breadcrumb service generates breadcrums ([68efc1a](https://github.com/biosimulations/Biosimulations/commit/68efc1a43e0ff52250b16edc73b4351c0b6f647c))
- **services:** add config service ([98ed473](https://github.com/biosimulations/Biosimulations/commit/98ed473bfa04ba40358ef53b376932a660abc286))
- **services:** add file service ([0538686](https://github.com/biosimulations/Biosimulations/commit/053868605725bc0e5fad0944c53502737e46b950))
- **services:** add test organism to metadataservice ([91f2503](https://github.com/biosimulations/Biosimulations/commit/91f25039a9b8d39781bd7b7a2137362de18c7358))
- **services:** Resource services return new model ([0c32ba5](https://github.com/biosimulations/Biosimulations/commit/0c32ba582802824e1dd4e9f64f332e145ead1bee))
- **shared:** add an authentication library ([904cd59](https://github.com/biosimulations/Biosimulations/commit/904cd59b320a33ec8447980e79c12bbcb3121a29))
- **shared:** add fields to remote file ([b85ff9d](https://github.com/biosimulations/Biosimulations/commit/b85ff9d7061a1e62d191b017078e680d5429c7b9))
- **shared:** add more model serializing ([b06129d](https://github.com/biosimulations/Biosimulations/commit/b06129d1b0b7e2b4499c94fb34490b38a15345a3))
- **visualization:** More flexible 2D visualization to better match needs of SED-ML L1V3 and BioModels ([31c96de](https://github.com/biosimulations/Biosimulations/commit/31c96de50f6c1323b574e00f400e5e13ade93060))
- add construction gaurd in prodction mode ([84708a2](https://github.com/biosimulations/Biosimulations/commit/84708a21f656318260e6162518fef84997051916))
- create a debugger component ([fd47c37](https://github.com/biosimulations/Biosimulations/commit/fd47c374f70d4dc28646cec31f995075c778d7a3))
- **shared:** add under constrcution gaurd ([d931f6d](https://github.com/biosimulations/Biosimulations/commit/d931f6de41fc1adfa558355664b651ce4a160c6d))
- **shared:** Remote file has a method to create from File ([f3360cf](https://github.com/biosimulations/Biosimulations/commit/f3360cfb6cfbb733d46501327986e7c9aec565d2))
- **simulations:** Simulations now have embedded models ([4dd512b](https://github.com/biosimulations/Biosimulations/commit/4dd512bc1944a6a2b2e8b00a8d5f48bd61939e9f))
- **users:** Add different snackbars ([056ffe2](https://github.com/biosimulations/Biosimulations/commit/056ffe2e4f26b4f43835a9cb7978e1baa548cf01))
- **visualizations:** add view async capapbility ([d2eb414](https://github.com/biosimulations/Biosimulations/commit/d2eb414a45e9d4eee2caf0edcf87e29c1b066add))

### Reverts

- "Formatted Files. [skip ci]" ([0414aca](https://github.com/biosimulations/Biosimulations/commit/0414aca53ff1c5ee5de9920fdb3e7e5810582a1b))
- Revert "debug redis host" ([7264f87](https://github.com/biosimulations/Biosimulations/commit/7264f87a60c994a655fd80536c33eb234efb5d2b))
- Revert "Feat(Combine-serive): Update API Specification" ([7ada4ce](https://github.com/biosimulations/Biosimulations/commit/7ada4ce33538e4bcd3bae9ee798ea46e417cee99))
- Revert "Updated Ontologies" ([aab6f70](https://github.com/biosimulations/Biosimulations/commit/aab6f708ab3f2d6e39f780bcb4bff1a188376748))
- Revert "Bump @sendgrid/mail from 7.4.1 to 7.4.2 in /biosimulations (#1975)" (#1979) ([a96e0ea](https://github.com/biosimulations/Biosimulations/commit/a96e0ea8f68b97fc2722d464614ee002bcd479c5)), closes [#1975](https://github.com/biosimulations/Biosimulations/issues/1975) [#1979](https://github.com/biosimulations/Biosimulations/issues/1979)
- Revert "Bump @nrwl/cli from 10.4.1 to 11.0.20 in /biosimulations (#1855)" (#1860) ([b7d637e](https://github.com/biosimulations/Biosimulations/commit/b7d637ec1decf056c1642608d821c7b53422b46d)), closes [#1855](https://github.com/biosimulations/Biosimulations/issues/1855) [#1860](https://github.com/biosimulations/Biosimulations/issues/1860)
- Revert "merging enumerations of simulation status; aligning names of properties 'resultsSize' and 'resultSize'" ([08e96f2](https://github.com/biosimulations/Biosimulations/commit/08e96f2fe8c7e88c7fbb2a6653416182fc438700))
- Revert "Revert "styling nested lists and lists after paragraphs"" ([16a2d5b](https://github.com/biosimulations/Biosimulations/commit/16a2d5ba5e39a79c64bca5af77c1382c76dfb2c5))
- Revert "Revert "adding management for app-specific configuration (e.g,, appName, logo, etc."" ([1c6190a](https://github.com/biosimulations/Biosimulations/commit/1c6190ab50c95359233e04befc2c778fa1dbd5c1))
- Revert "Revert "adding documentation"" ([f71cfcd](https://github.com/biosimulations/Biosimulations/commit/f71cfcddcf15006f3f84660517c7fdf52ada0dbe))
- Revert "Revert "editing help"" ([4aea612](https://github.com/biosimulations/Biosimulations/commit/4aea6128b0f4fbb2d881efbcc5eb2416527f05c9))
- Revert "Revert "adding documentation of supported SED-ML features"" ([32beb34](https://github.com/biosimulations/Biosimulations/commit/32beb34d5a823e3975d6115d8f225044fe6297a5))
- Revert "changing completed to updated" ([d9fe18e](https://github.com/biosimulations/Biosimulations/commit/d9fe18edbbf4a1d0307caecdeb7a6927b0338abf))
- Revert "update to angular 10" ([e1b9fcf](https://github.com/biosimulations/Biosimulations/commit/e1b9fcfae21f5bd8b19e4cee23a8df2b82c1df02))
- Revert "Bump husky from 4.0.1 to 4.0.5 in /CRBM-Viz (#290)" ([4dd2cc3](https://github.com/biosimulations/Biosimulations/commit/4dd2cc3eee2fcf33bb24ca8ef999162823e875a7)), closes [#290](https://github.com/biosimulations/Biosimulations/issues/290)

- feat (dispatch-api): remove download endpoint ([785ad27](https://github.com/biosimulations/Biosimulations/commit/785ad27f1477ac6122c2a735cb46201928a0f754))
- feat (dispatch) : Change datamodel of returned results ([ba42dcc](https://github.com/biosimulations/Biosimulations/commit/ba42dcc8b74068a280c6dc2f7d915c8c27a55f45))

### BREAKING CHANGES

- The /download endpoint has been removed. Should be replaced by /results/download
- The results are now returned as an array of objects (AOS) rather than an object of arrays (SOA)
