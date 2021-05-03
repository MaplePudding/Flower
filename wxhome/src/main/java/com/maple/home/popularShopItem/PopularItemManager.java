package com.maple.home.popularShopItem;

import com.maple.home.rsparser.ResultSetParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Component
public class PopularItemManager {
    @Autowired
    DataSource dataSource;

    public String getPopularItems() {
        try {
            Connection conn = dataSource.getConnection();
            Statement statement = conn.createStatement();
            String sql = "select * from popular_item";
            ResultSet rs = statement.executeQuery(sql);
            String jsonStr = ResultSetParser.resultSetToJson(rs);
            conn.close();
            return jsonStr;
        } catch (SQLException throwables) {
            System.out.println("get popularItem error");
        }
        return "[]";
    }
}
