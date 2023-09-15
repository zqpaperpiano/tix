package com.example.demo.Ticket;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.annotation.Id;

import com.example.demo.Event.event;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Ticket {
    int seat_num; //1 - 400
    private  @Id Long id;
    private Event event;

}
