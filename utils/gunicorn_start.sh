#!/bin/bash
NAME="ecommerce-cms"                                                              # Name of the application
ENVNAME=env                                                             # Name of virtualenvi
DJANGODIR=/webapps/ecommerce/$NAME/server/                                      # Django project directory
SOCKFILE=/webapps/ecommerce/$NAME/run/gunicorn.sock                     # we will communicte using this unix socket
USER=ecommerce                                                                # the user to run as
GROUP=webapps                                                                   # the group to run as
NUM_WORKERS=2                                                                   # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=erp_cms.settings                          # which settings file should Django use
DJANGO_WSGI_MODULE=erp_cms.wsgi                                             # WSGI module name
    
# Activate the virtual environment
cd $DJANGODIR
source ../../$ENVNAME/bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH
    
# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR
    
# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  --user=$USER --group=$GROUP \
  --bind=unix:$SOCKFILE \
  --log-level=debug \
  --log-file=-
