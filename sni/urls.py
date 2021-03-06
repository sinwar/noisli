from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from django.conf.urls.static import static


from .views import SignupView, ProView, homeView, addThingCreate, validate_username


urlpatterns = [
    url(r"^admin/", include(admin.site.urls)),
    url(r"^$", homeView, name = "home"),
    url(r"^account/pro/(?P<pk>[a-zA-Z0-9_-]+)/$",ProView, name = "account_pro"),
    url(r"^addthing/$",addThingCreate.as_view(), name="add_item"),
    url(r"^addthing/added/$",TemplateView.as_view(template_name = "sni/added.html"), name="added"),
    #url(r"^account/profile/(?P<pk>\d+)/$",ProfileView.as_view(), name = "account_profile"),
    url(r"^account/signup/", SignupView.as_view(), name = "account_signup"),
    url(r'^ajax/validate_username/$', validate_username, name='validate_username'),
    url(r"^account/", include("account.urls")),
]


urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

