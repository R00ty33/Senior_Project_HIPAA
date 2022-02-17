package com.HIPAA.SeniorProject.Security;

public class StrictHttpFirewall implements HttpFirewall {
    private Set<String> allowedHttpMethods = createDefaultAllowedHttpMethods();
    private static Set<String> createDefaultAllowedHttpMethods() {
        Set<String> result = new HashSet<>();
        result.add(HttpMethod.DELETE.name());
        result.add(HttpMethod.GET.name());
        result.add(HttpMethod.HEAD.name());
        result.add(HttpMethod.OPTIONS.name());
        result.add(HttpMethod.PATCH.name());
        result.add(HttpMethod.POST.name());
        result.add(HttpMethod.PUT.name());
        return result;
    }
    private void rejectForbiddenHttpMethod(HttpServletRequest request) {
        if (this.allowedHttpMethods == ALLOW_ANY_HTTP_METHOD) {
            return;
        }
        if (!this.allowedHttpMethods.contains(request.getMethod())) {
            throw new RequestRejectedException("The request was rejected because the HTTP method \"" +
                    request.getMethod() +
                    "\" was not included within the whitelist " +
                    this.allowedHttpMethods);
        }
    }
}
@Bean
HttpFirewall httpFirewall() {                                               //Allows URL to contain a semicolon 
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowSemicolon(true);
    return firewall;
}

@Bean
HttpFirewall httpFirewall() {
    StrictHttpFirewall firewall = new StrictHttpFirewall();                 //Allows URL to contain forward slashes; prevents back slashes
    firewall.setAllowBackSlash(false);
    firewall.setAllowUrlEncodedSlash(true);
    return firewall;
}

@Bean                                                                       //Prevents request address from having a . after character encoding
HttpFirewall httpFirewall() {                  
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowUrlEncodedPeriod(false);
    return firewall;

}

private static boolean isNormalized(HttpServletRequest request) {           //Must be a standarized URL 
    if (!isNormalized(request.getRequestURI())) {
        return false;
    }
    if (!isNormalized(request.getContextPath())) {
        return false;
    }
    if (!isNormalized(request.getServletPath())) {
        return false;
    }
    if (!isNormalized(request.getPathInfo())) {
        return false;
    }
    return true;
}

private static boolean containsOnlyPrintableAsciiCharacters(String uri) {   //Prevents non printable ASCII characters
    int length = uri.length();
    for (int i = 0; i < length; i++) {
        char c = uri.charAt(i);
        if (c < '\u0020' || c > '\u007e') {
            return false;
        }
    }
    return true;
}