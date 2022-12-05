# today-song-statsfm

## Getting Started

### Environment Variables
以下の環境変数が必要です
```env
# last.fm
STATSFM_ID=
STATSFM_TOKEN=

# Twitter
TWITTER_CK=
TWITTER_CS=
TWITTER_AT=
TWITTER_ATS=
```

### Deployment
```sh
flyctl launch
flyctl deploy
flyctl secrets set STATSFM_ID= STATSFM_TOKEN= TWITTER_CK= TWITTER_CS= TWITTER_AT= TWITTER_ATS=
```

## LICENSE
[MIT License](./LICENSE) (© 2022 iamtakagi)