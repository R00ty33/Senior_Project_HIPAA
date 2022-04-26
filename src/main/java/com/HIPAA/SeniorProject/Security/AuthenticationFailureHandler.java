package com.HIPAA.SeniorProject.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Autowired
    private MessageSource messages;

    @Override
    public void onAuthenticationFailure(...) {
        ...

        String errorMessage = messages.getMessage("message.badCredentials", null, locale);
        if (exception.getMessage().equalsIgnoreCase("blocked")) {
            errorMessage = messages.getMessage("auth.message.blocked", null, locale);
        }

        ...
    }
}