# today-song

## Getting Started

### Environment Variables
以下の環境変数が必要です
```env
# last.fm
LASTFM_USER_ID=
LASTFM_API_KEY=

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
flyctl secrets set LASTFM_USER_ID= LASTFM_API_KEY= TWITTER_CK= TWITTER_CS= TWITTER_AT= TWITTER_ATS=
```

## LICENSE
[MIT License](./LICENSE) (© 2022 iamtakagi)