from __future__ import unicode_literals

import os
import ast

gettext = lambda s: s
DATA_DIR = os.path.dirname(os.path.dirname(__file__))

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

#SECRET_KEY = 'k#(o(9(km9&t(+862$g!5!=@6%8alx%!m%gl=yoiur^-b%#ojv'
SECRET_KEY = os.environ.get('SECRET_KEY', 'k#(o(9(km9&t(+862$g!5!=@6%8alx%!m%gl=yoiur^-b%#ojv')

DEBUG = ast.literal_eval(os.environ.get('DEBUG', 'True'))

ALLOWED_HOSTS = []

ROOT_URLCONF = 'erp_cms.urls'

WSGI_APPLICATION = 'erp_cms.wsgi.application'

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Argentina/Cordoba'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(DATA_DIR, 'media')
STATIC_ROOT = os.path.join(DATA_DIR, 'static')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, '../', 'static'),
)

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    ]

SITE_ID = 1




TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'erp_cms', 'templates'),
        ],
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.core.context_processors.i18n',
                'django.core.context_processors.debug',
                'django.core.context_processors.request',
                'django.core.context_processors.media',
                'django.core.context_processors.csrf',
                'django.core.context_processors.tz',

                'django.core.context_processors.static',

                'apps.custom_site.context_processors.custom_site_preprocessor',
                'apps.custom_theme.context_processors.custom_theme_preprocessor',
                'sekizai.context_processors.sekizai',
                'cms.context_processors.cms_settings',

                'django_admin_dialog.context_processors.django_admin_dialog',
                ],
            'loaders': [
                'apps.custom_theme.loaders.directories_theme.Loader',
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
                'django.template.loaders.eggs.Loader'
            ],
            },
        },
    ]


MIDDLEWARE_CLASSES = (
    'corsheaders.middleware.CorsMiddleware',
    'cms.middleware.utils.ApphookReloadMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    #'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
    'cms.middleware.language.LanguageCookieMiddleware',
)


ERP_APPS = (
    'erp_apps.account_balance',
    'erp_apps.client',
    'erp_apps.core',
    'erp_apps.delivery',
    'erp_apps.employee',
    'erp_apps.order',
    'erp_apps.payment',
    'erp_apps.product',
    'erp_apps.provider',
    'erp_apps.stock',
    'erp_apps.address',
    'erp_apps.item_resource',
    'erp_apps.expense',

)

MY_APPS = (
    'apps.rating',
    'apps.favorite',
    'apps.products',
    'apps.custom_theme',
    'apps.custom_site',
    'apps.profile',
    'apps.cart',
    'apps.pluggin_button_social'
)


INSTALLED_APPS = (
     #'test_without_migrations',
     'djangocms_admin_style',
     'django.contrib.auth',
     'django.contrib.contenttypes',
     'django.contrib.sessions',
     'django.contrib.admin',
     'django.contrib.sites',
     'django.contrib.sitemaps',
     'django.contrib.staticfiles',
     'django.contrib.messages',
     'django_extensions',
     'cms',
     'menus',
     'sekizai',
     'treebeard',
     'djangocms_text_ckeditor',
     'filer',
     'easy_thumbnails',
     #'djangocms_link',
     'cmsplugin_filer_file',
     'cmsplugin_filer_folder',
     'cmsplugin_filer_image',
     'cmsplugin_filer_utils',
     'djangocms_style',
     'djangocms_snippet',
     'djangocms_googlemap',
     'djangocms_video',
     'aldryn_bootstrap3',
     'djangocms_forms',
     'allauth',
     'allauth.account',
     'allauth.socialaccount',

     'rest_framework',
     'rest_framework.authtoken',
     'rest_auth',
     'rest_auth.registration',
     'corsheaders',
     #'storages',

     'django_admin_dialog',
     'jsonify',
     'bootstrap3',

     'erp_cms',
 ) + ERP_APPS + MY_APPS



LANGUAGES = (
    ('es', gettext('es')),
    #('en', gettext('en')),
)

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

CMS_LANGUAGES = {
    ## Customize this
    1: [
        {
            'code': 'es',
            'public': True,
            'hide_untranslated': False,
            'name': gettext('es'),
            'redirect_on_fallback': True,
            },
        # {
        #     'redirect_on_fallback': True,
        #     'name': gettext('en'),
        #     'public': True,
        #     'hide_untranslated': False,
        #     'code': 'en',
        # },
    ],
    'default': {
        'redirect_on_fallback': True,
        'public': True,
        'hide_untranslated': False,
        },
}

CMS_TEMPLATES = (
    ## Customize this
    ('cms_type_pages/page.html', 'Page'),
    ('cms_type_pages/page_with_feature.html', 'Page with Feature'),
    ('cms_type_pages/page_sidebar_left.html', 'Page Sidebar Left'),
    ('cms_type_pages/page_sidebar_right.html', 'Page Sidebar Right'),
    ('cms_type_pages/placeholders_product_app.html', 'Page for App')
)

CMS_PERMISSION = True

CMS_PLACEHOLDER_CONF = {
    'Footer-social': {
        'plugins': ['CMSButtonSocialtPlugin'],
        },
}


import dj_database_url
SQLITE_DB_URL = 'sqlite:///' + os.path.join(DATA_DIR, 'project.db')
DATABASES = {'default': dj_database_url.config(default=SQLITE_DB_URL)}

# DATABASES = {
#     'default': {
#         # Docker Postgres Database.
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'NAME': 'postgres',
#         'USER': 'postgres',
#         #'NAME': 'db_erp',
#         #'USER': 'erp',
#         #'PASSWORD': 'erp123',
#         'HOST': 'db',
#         'PORT': 5432,
#     }
# }


MIGRATION_MODULES = {
    #'cmsplugin_filer_file': 'cmsplugin_filer_file.migrations_django',
}

THUMBNAIL_PROCESSORS = (
    'easy_thumbnails.processors.colorspace',
    'easy_thumbnails.processors.autocrop',
    'filer.thumbnail_processors.scale_and_crop_with_subject_location',
    'easy_thumbnails.processors.filters'
)

THUMBNAIL_ALIASES = {
    '': {
        '150': {'size': (150, 150), 'scale': True , 'crop': True},
        '500': {'size': (500, 500), 'scale': True , 'crop': True},
        '800': {'size': (800, 800), 'scale': True , 'crop': True},
    },
}


DJANGO_ADMIN_DIALOG_SHOW_IDS = True

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.AdminRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer'
    ],
    'DEFAULT_PAGINATION_CLASS': 'erp_cms.pagination.CustomPagination'
}

APPEND_SLASH = False
import datetime
JWT_AUTH = {
    'JWT_EXPIRATION_DELTA': datetime.timedelta(hours=300),
    'JWT_ALLOW_REFRESH': True
}


CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_HEADERS = (
    'x-requested-with',
    'content-type',
    'accept',
    'origin',
    'authorization',
    'Authorization',
    'x-csrftoken'
)


AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',
)

LOGIN_REDIRECT_URL = '/'

# Config to manager static files on AWS
# DEFAULT_FILE_STORAGE = 'storages.backends.s3boto.S3BotoStorage'
#
# AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY', 'AKIAIYERTNTJTCBC7DCA')
# AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_KEY', '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')
#
#
# AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
# AWS_MEDIA_BUCKET_NAME = os.environ.get('AWS_MEDIA_BUCKET_NAME', 'zappa-e5he50k3o')
# AWS_QUERYSTRING_AUTH = False
#
# if AWS_STORAGE_BUCKET_NAME:
#     STATICFILES_STORAGE = 'storages.backends.s3boto.S3BotoStorage'
#
# if AWS_MEDIA_BUCKET_NAME:
#     DEFAULT_FILE_STORAGE = 'erp_apps.core.storages.S3MediaStorage'
#     THUMBNAIL_DEFAULT_STORAGE = DEFAULT_FILE_STORAGE


###### EMAIL CONFIG

DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL', 'testnubiquo@gmail.com')

#EMAIL_BACKEND="djmail.backends.async.EmailBackend"
#DJMAIL_REAL_BACKEND="django.core.mail.backends.smtp.EmailBackend"

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = DEFAULT_FROM_EMAIL
EMAIL_HOST_PASSWORD = 'nubiquo1234567890'
EMAIL_USE_TLS = True


from .theme_configs import CONFIGS

CUSTOM_SITE_THEMES_CONFIG = CONFIGS

SITE_DEFAULT_DATA = {
    "logo": "/static/image/logo-default.png",
    "name": "TiendaNet",
    "display_name": "TiendaNet",
    "site_url": "http://localhost",
    "slogan": "Una Tienda Online para Negocios como el tuyo",
    "contact_email": "contacto@context.com.ar",
    "skype": "",
    "phones": ["+54 9 351 6222930",],
    "emails": ["contacto@context.com.ar",]
}

#TEST_WITHOUT_MIGRATIONS_COMMAND = 'django_nose.management.commands.test.Command'


DJANGOCMS_FORMS_TEMPLATES = (
    ('djangocms_forms/form_template/default.html', 'Default'),
    ('djangocms_forms/form_template/default_btn_block.html', 'Default width button block'),
    ('djangocms_forms/form_template/form_inline.html', 'Form inline'),
)

DJANGOCMS_FORMS_WIDGET_CSS_CLASSES = {'__all__': ('form-control', ) }

FACEBOOK_APP_ID = '527891700709765'
FACEBOOK_SECRET = 'a63ca2cc560bf46770183b39368b4b68'