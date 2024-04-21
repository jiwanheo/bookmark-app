FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./bookmark-app.conf /etc/nginx/conf.d/bookmark-app.conf

RUN echo "This message indicates that this step has run successfully!"