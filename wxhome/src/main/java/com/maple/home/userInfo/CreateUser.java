package com.maple.home.userInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

@Component
public class CreateUser {
    @Autowired
    private DataSource dataSource;

    public void createUserEnty(String openid){
        try {
            Connection conn = dataSource.getConnection();
            Statement statement = conn.createStatement();
            String sql = "insert into user (open_id) value(" + "'" + openid + "'" + ")";
            statement.execute(sql);
            conn.close();
        } catch (SQLException throwables) {
            System.out.println("create userEnty error");
        }
    }
}
