package com.maple.home.popularShopItem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PopularItemController {
    @Autowired
    PopularItemManager popularItemManager;

    @RequestMapping("/popularItem")
    @ResponseBody
    public String getAllPopularItems(){
        return popularItemManager.getPopularItems();
    }
}
