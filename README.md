# domain blacklist

We use this blacklist to block some sites in Google Search.

[English](README.md) - [中文](README.zh-Hans.md)

By block some sites, we may spend less time on useless websites.

## Usage

We use iorate's uBlacklist.

[Chrome Web Store](https://chrome.google.com/webstore/detail/ublacklist/pncfbmialoiaghdehhbnbhkkgmjanfhe) -
[GitHub Repo](https://github.com/iorate/uBlacklist) -
[GitHub Releases](https://github.com/iorate/uBlacklist/releases)

Folk the repo, and update to fit your needs.

### update blacklist

`blacklist.txt` is the blacklist file, it contains url patterns or regular expresses.

To learn more about Rule pattens and Regular Expressons, please see:

- MDN: [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- MDN: [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### sort and unique

```
npm run format
```

### Subscribe url

```
https://raw.githubusercontent.com/codinggirl/website-blacklist/master/blacklist.txt
```

## Contribution

As of this repo is for my persional use, PRs are not accept, but feel free to fork, modify for your needs.

## License

The script is licensed under [The MIT License](LICENSE), and the blacklist self is licensed under Public Domain.
