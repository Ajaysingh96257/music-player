package com.example1.demo2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class controller {
    
   
    @RequestMapping(value="/hello", method=RequestMethod.GET)
    public String hello() {
        System.out.println("program executed successfully");
        return "index.html";
    }
}
