FROM python:3.4

MAINTAINER ContextInformatic <contextinformatic@gmail.com>

ENV PYTHONUNBUFFERED 1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/ /usr/src/app
COPY theme_configs.py /usr/src/app/erp_cms/theme_configs.py
COPY templates/ /usr/src/templates
COPY static/ /usr/src/static

RUN pip3 install -r /usr/src/app/requirements.txt --no-cache-dir
# RUN apt-get update -y

RUN chmod 777 /usr/src/app/init.sh
RUN chmod +x /usr/src/app/init.sh
RUN sh /usr/src/app/init.sh

VOLUME ['server:/usr/src/app', 'static:/usr/src/static', 'templates:/usr/src/templates', 'theme_configs.py:/usr/src/app/erp_cms/theme_configs.py']

CMD python3 manage.py runserver 0.0.0.0:8000

