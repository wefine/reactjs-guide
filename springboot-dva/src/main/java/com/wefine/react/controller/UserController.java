package com.wefine.react.controller;

import com.alibaba.fastjson.JSON;
import com.wefine.react.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

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
    public ResponseEntity<List<User>> findByPaging(
            @RequestParam(value = "_page", defaultValue = "1") int page,
            @RequestParam(value = "_limit", defaultValue = "10") int limit) {
        log.info("findByPaging...page=" + page + "; limit=" + limit);
        try {
            Thread.sleep(2000L);
        } catch (InterruptedException ignored) {
        }

        log.info("size = " + userList.size());

        HttpHeaders headers = new HttpHeaders();
        headers.add("x-total-count", "" + userList.size());

        int start = (page - 1) * limit;
        int end = page * limit;
        if (end > userList.size()) {
            end = userList.size();
        }

        return new ResponseEntity<>(userList.subList(start, end), headers, HttpStatus.OK);
    }

    @DeleteMapping(path = "{id}")
    public void deleteUser(@PathVariable(name = "id") Long id) {
        log.info("deleteUser...id=" + id);
        for (User user : userList) {
            if (Objects.equals(user.getId(), id)) {
                userList.remove(user);
                break;
            }
        }
    }
}
