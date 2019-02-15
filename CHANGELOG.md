# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2019-02-14

### Changed

- now searches only hashtag'd keywords (ex. #Telsa #Sweden #Entertainment) rather than keywords
- date / time shown in logs (console and file)
- implemented latest version of fir

### Added

- ability to specify keyword search prior to running
- ability to change formatting colors
- now checks for previously existing 'logs' folder. If there is none, will create one automatically
- simple an modern log format thanks to https://github.com/117/fir

### TODO

- add an setup 117's parse package
- add option to post tweets, search keywords etc..
- add `link to tweet` option
- create tweety command + subcommand with options
- hook up to discord bot
- load messages from json

##[1.1.0] - 2019-02-13

### Changed

- _No longer using 117's log package, now using 117's fir package_
- now logs to file + console

### Added

- 117's fir package

### TODO

- implement simple an modern logging format
- change keyword search to hastag(#) only searching. Replies with more accurate results when LIVE
- integrate local date / time to log

##[1.0.0] - 2019-02-12

### Added

- Tweety's main application file
- Twitter login API integrated
- Simple log formatting thanks to @117's log package
- Keyword searching
- colored levels
