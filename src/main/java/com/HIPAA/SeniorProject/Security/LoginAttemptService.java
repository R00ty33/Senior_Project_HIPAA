package com.HIPAA.SeniorProject.Security;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import org.springframework.cglib.core.internal.LoadingCache;
import org.springframework.stereotype.Service;

@Service
public class LoginAttemptService {

    private final int MAX_ATTEMPT = 6;                                                          // Max 6 attempts to login
    private LoadingCache<String, Integer> attemptsCache;

    public LoginAttemptService() {
        super();
        attemptsCache = CacheBuilder.newBuilder().
          expireAfterWrite(30, TimeUnit.MINUTES).build(new CacheLoader<String, Integer>() {     // 30 minute timeout if unsuccessful
            public Integer load(String key) {
                return 0;
            }
        });
    }

    public void loginSucceeded(String key) {
        attemptsCache.invalidate(key);
    }

    public void loginFailed(String key) {
        int attempts = 0;
        try {
            attempts = attemptsCache.get(key);
        } catch (ExecutionException e) {
            attempts = 0;
        }
        attempts++;
        attemptsCache.put(key, attempts);
    }

    public boolean isBlocked(String key) {
        try {
            return attemptsCache.get(key) >= MAX_ATTEMPT;
        } catch (ExecutionException e) {
            return false;
        }
    }
}