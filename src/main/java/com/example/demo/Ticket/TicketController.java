package com.example.demo.Ticket;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.EventNotFoundException;
import com.example.demo.EventRepository;

@RestController
public class TicketController {
    private EventRepository events;
    private TicketRepository tickets;

    public TicketController(TicketRepository tickets, EventRepository events){
        this.tickets = tickets;
        this.events = events;
    }

    @GetMapping("/events/{eventId}/tickets")
    public List<Tickets> getAllTicketsByEventId(@PathVariable (value = "eventId") Long eventId) {
        if(!events.existsById(eventId)) {
            throw new EventNotFoundException(eventId);
        }
        return tickets.findByEventId(eventId);
    }

    @PostMapping("/events/{eventId}/tickets")
    public Ticket addTicket(@PathVariable (value = "eventId") Long eventId, @Valid @RequestBody Ticket tickets) {
        // using "map" to handle the returned Optional object from "findById(eventId)"
        return tickets.findById(eventId).map(event ->{
            ticket.setEvent(event);
            return tickets.save(ticket);
        }).orElseThrow(() -> new EventNotFoundException(eventId));
    }

    @PutMapping("/events/{eventId}/tickets/{ticketId}")
    public Ticket updateTicket(@PathVariable (value = "ticketId") Long eventId,
                                 @PathVariable (value = "ticketId") Long ticketId,
                                 @Valid @RequestBody Ticket newTicket) {
        if(!events.existsById(eventId)) {
            throw new EventNotFoundException(eventId);
        }
        return tickets.findByIdAndEventId(ticketId, eventId).map(ticket -> {
            ticket.setTicket(newTicket.getTicket());
            return tickets.save(ticket);
        }).orElseThrow(() -> new TicketNotFoundException(ticketId));
    }

    @DeleteMapping("/events/{eventId}/tickets/{ticketId}")
    public ResponseEntity<?> deleteTicket(@PathVariable (value = "eventId") Long eventId,
                              @PathVariable (value = "ticketId") Long ticketId) {
        
        if(!events.existsById(eventId)) {
            throw new EventNotFoundException(eventId);
        }

        return tickets.findByIdAndEventId(ticketId, eventId).map(ticket -> {
            tickets.delete(ticket);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new TicketNotFoundException(ticketId));
    }
}
