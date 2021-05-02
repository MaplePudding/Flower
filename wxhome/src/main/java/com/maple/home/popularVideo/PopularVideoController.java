package com.maple.home.popularVideo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.sql.DataSource;
import javax.xml.crypto.Data;
import java.util.List;

@Controller
public class PopularVideoController {

    @Autowired
    PopularResourceManager popularResourceManager;

    @RequestMapping("/popularVideo")
    @ResponseBody
    public String getAllPopularVideos(){
        return popularResourceManager.getPopularResource();
    }
}
