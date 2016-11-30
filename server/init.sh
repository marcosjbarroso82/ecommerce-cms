#!/usr/bin/env bash
sleep 5

apt-get -y install libpq-dev python3-dev

#echo "[run] make migrations"
#python manage.py makemigrations

echo "[run] Migrate DB"
python3 manage.py migrate || exit 1

#echo "[run] Collect static files"
#python manage.py collectstatic --noinput

echo "[run] Create site config"
echo "
from django.contrib.sites.models import Site
from apps.custom_site.models import CustomSite
from apps.custom_theme.models import ThemeConfig

cs = CustomSite()
cs.site= Site.objects.first()
cs.save()

ct = ThemeConfig()
ct.custom_site= cs
ct.save()
" | python3 manage.py shell || exit 1

echo "[run] Create superuser"
echo "from django.contrib.auth.models import User
if not User.objects.filter(username='admin').count():
    User.objects.create_superuser('admin', 'contextinformatic@gmail.com', 'qwerty123')
" | python3 manage.py shell || exit 1


#echo "[run] runserver"
#/usr/local/bin/gunicorn config.wsgi:application -w 2 -b :8000 --reload
