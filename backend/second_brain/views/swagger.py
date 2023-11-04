from django.middleware.csrf import get_token
from drf_spectacular.views import SpectacularSwaggerView

class CustomSpectacularSwaggerView(SpectacularSwaggerView):
    def get(self, request, *args, **kwargs):
        # Get the CSRF token for the current session
        csrf_token = get_token(request)

        # Set the custom configuration to include the CSRF token in headers
        self.config = {
            'requestInterceptor': f'''
                (request) => {{
                    request.headers['X-CSRFToken'] = '{csrf_token}';
                    return request;
                }}
            '''
        }
        return super().get(request, *args, **kwargs)
