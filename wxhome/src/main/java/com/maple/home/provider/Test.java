package com.maple.home.provider;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class Test {

    @Autowired
    HikariDataSource hikariDataSource;

    @RequestMapping("/test")
    @ResponseBody
    public String test() throws SQLException {
        Statement stt = hikariDataSource.getConnection().createStatement();
        stt.execute("SELECT * FROM city");
        System.out.println();
        return "success";
    }
}
