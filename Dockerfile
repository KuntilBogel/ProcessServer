FROM node:latest

RUN mkdir -p --mode=0755 /usr/share/keyrings && curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y lsb-release && apt-get install -y && apt-get install ffmpeg -y

RUN echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/cloudflared.list

RUN apt-get update && apt-get install cloudflared -y 

RUN rm -rf /var/lib/apt/lists/* 

RUN cd /run/secrtets && ls

RUN cloudflared service install $(cat /run/secrets/cloudflared_key)

WORKDIR /app

COPY package.json .

RUN npm i 

COPY . .

EXPOSE 7860

CMD ["node", "--max-old-space-size=8192", "index.js"]