package com.wefine.react.controller;

import com.alibaba.fastjson.JSON;
import com.wefine.react.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/users")
public class UserController {
    private List<User> userList;

    public UserController() {
        ClassPathResource resource = new ClassPathResource("users.json");
        try {
            String users = IOUtils.toString(resource.getInputStream(), "UTF-8");
            userList = JSON.parseArray(users, User.class);
        } catch (Exception e) {
            log.error("Failed to parse data!", e);
        }
    }

    @GetMapping
    public List<User> findAll() {
        log.info("findAll...finding");
        try {
            Thread.sleep(2000L);
        } catch (InterruptedException ignored) {
        }
        return userList;
    }
}
