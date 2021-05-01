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
    private DataSource dataSource1;
    @Autowired
    private DataSource dataSource2;

    @RequestMapping("/popularVideo")
    @ResponseBody
    List<String> getAllPopularVideos(){
        System.out.println(dataSource1);
        return PopularResourceManager.getPopularResource();
    }
}
