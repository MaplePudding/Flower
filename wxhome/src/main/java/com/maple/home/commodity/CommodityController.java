package com.maple.home.commodity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommodityController {
    @Autowired
    CommodityService commodityService;

    @RequestMapping("/commodity")
    @ResponseBody
    public String getAllCommodities(){
        return commodityService.getAllCommodities();
    }
}
