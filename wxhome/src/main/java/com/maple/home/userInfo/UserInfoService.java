package com.maple.home.userInfo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserInfoService {
    @RequestMapping("/userInfo")
    @ResponseBody
    public void getUserInfo(String code){

    }

}
