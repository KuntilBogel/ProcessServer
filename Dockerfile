FROM node:latest

RUN sudo mkdir -p --mode=0755 /usr/share/keyrings && curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

RUN echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y && apt-get install ffmpeg -y && apt-get install cloudflared -y && rm -rf /var/lib/apt/lists/* 

WORKDIR /app

COPY package.json .

RUN npm i 

COPY . .

EXPOSE 7860

CMD ["node", "--max-old-space-size=8192", "index.js"]