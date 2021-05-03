package com.maple.home.popularVideo;


import com.maple.home.rsparser.ResultSetParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import javax.xml.crypto.Data;
import java.io.File;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

@Component
public class PopularResourceManager {

    @Autowired
    DataSource dataSource;
    public String getPopularResource() {
        try {
            Connection conn = dataSource.getConnection();
            Statement statement = conn.createStatement();
            String sql = "select * from popular_video";
            ResultSet rs = statement.executeQuery(sql);
            String jsonStr = ResultSetParser.resultSetToJson(rs);
            conn.close();
            return jsonStr;
        } catch (SQLException throwables) {
            System.out.println("get video error");
        }
        return "[]";
    }
}
