package com.maple.home.userInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

@Component
public class CheckUser {
    @Autowired
    private DataSource dataSource;

    @Autowired
    private CreateUser createUser;

    public void checkUserInfo(String openid){
        try {
            Connection conn = dataSource.getConnection();
            Statement statement = conn.createStatement();
            String sql = "select * from user where open_id = " + "'" + openid + "'" ;
            ResultSet rs = statement.executeQuery(sql);
            if(!rs.next()){
                createUser.createUserEnty(openid);
            };
            conn.close();
        } catch (SQLException throwables) {
            System.out.println(throwables);
            System.out.println("check user error");
        }

    }
}
