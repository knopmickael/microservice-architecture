FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY services-proxy.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]