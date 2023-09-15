package com.example.demo.Event;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class EventController {
    @GetMapping
    public ResponseEntity<String> allEvents() {
        return new ResponseEntity<String>("All Events", HttpStatus.OK);
    }
}