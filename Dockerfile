FROM oven/bun:latest
WORKDIR /app
EXPOSE 3000

COPY . .
RUN bun install
CMD ["bun", "start"]