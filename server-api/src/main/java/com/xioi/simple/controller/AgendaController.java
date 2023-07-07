package com.xioi.simple.controller;

import cn.hutool.log.Log;
import cn.hutool.log.LogFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 功能描述：
 *
 * @Author: xdm
 * @Date: 2023/7/7 13:18
 */
@RestController
@RequestMapping(value = "/api")
public class AgendaController {

    public static final String MODULE_PATH = "/agenda";

    Log log = LogFactory.get();

    @GetMapping(value = MODULE_PATH + "/getData")
    public String getPage() {
        log.info("测试！");
        return "测试";
    }

}
