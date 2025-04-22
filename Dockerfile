FROM python:3.10-slim as builder

RUN mkdir /home/app
WORKDIR /home/app

COPY . .
RUN pip install -r ./requirements.txt
RUN python3 ./src/render_html.py

FROM nginx:stable-alpine-slim

# install python3 and pip
COPY --from=builder /home/app/index.html /usr/share/nginx/html/index.html
COPY --from=builder /home/app/static /usr/share/nginx/html/static

EXPOSE 9080
CMD ["nginx", "-g", "daemon off;"]
