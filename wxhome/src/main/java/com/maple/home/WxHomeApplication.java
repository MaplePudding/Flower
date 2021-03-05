package com.maple.home;

import com.maple.home.provider.ApplicationContextProvider;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WxHomeApplication {

    public static void main(String[] args) {
        ApplicationContextProvider.setApplicationContext(SpringApplication.run(WxHomeApplication.class, args));
    }

}
