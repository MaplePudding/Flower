package com.maple.home.video;

import com.maple.home.rsparser.ResultSetParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@Component
public class VideoService {
    @Autowired
    private DataSource dataSource;

    public String getAllVideos(){
        try {
            Connection conn = dataSource.getConnection();
            Statement statement = conn.createStatement();
            String sql = "select * from video";
            ResultSet rs = statement.executeQuery(sql);
            String jsonStr = ResultSetParser.resultSetToJson(rs);
            conn.close();
            return jsonStr;
        } catch (SQLException throwables) {
            System.out.println("get simple video error");
        }
        return "[]";
    }
}
