package com.maple.home.secret;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SecretService {

    @RequestMapping("/secret")
    @ResponseBody
    public String getSecret(){
        return "3379f7679d5494e50e8cc86b007e75fb";
    }

}
