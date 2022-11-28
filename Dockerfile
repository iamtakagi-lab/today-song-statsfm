FROM node:16-alpine as base

# Install tzdata
RUN apk add --no-cache tzdata

ENV TZ Asia/Tokyo

# Build App
ENV NODE_ENV production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --immutable
COPY tsconfig.json ./
COPY src ./src

FROM base as builder

RUN yarn global add typescript
RUN yarn add -D @types/node
RUN yarn build

FROM base

COPY --from=builder /app/dist ./dist

# Add Crontab
ADD crontab /var/spool/crontab/root
RUN crontab /var/spool/crontab/root

ENTRYPOINT ["crond", "-f"]