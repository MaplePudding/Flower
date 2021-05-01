package com.maple.home.userInfo;

import com.maple.home.auth.AuthEnty;
import com.maple.home.secret.SecretManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class UserInfoService {
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/userInfo")
    @ResponseBody
    public String getUserInfo(String code, String appid){
        System.out.println(code);
        System.out.println(appid);
        String appSecret = SecretManager.getAppSecret();
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid +
                "&secret=" + appSecret + "&js_code=" + code +
                "&grant_type=authorization_code";
        AuthEnty authEnty = restTemplate.getForObject(url, AuthEnty.class);
        return authEnty.openid;
    }

}
