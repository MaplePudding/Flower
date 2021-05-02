package com.maple.home.rsparser;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class ResultSetParser {
    public static String resultSetToJson(ResultSet rs){
        JSONArray array = new JSONArray();
        try {

            // 获取列数
            ResultSetMetaData metaData = rs.getMetaData();
            int columnCount = metaData.getColumnCount();

            // 遍历ResultSet中的每条数据
            while (rs.next()) {
                JSONObject jsonObj = new JSONObject();

                // 遍历每一列
                for (int i = 1; i <= columnCount; i++) {
                    String columnName =metaData.getColumnLabel(i);
                    String value = rs.getString(columnName);
                    jsonObj.put(columnName, value);
                }
                array.put(jsonObj);
            }
        }catch (SQLException | JSONException throwables){
            System.out.println("resultset parse error");
        }

        return array.toString();

    }
}
