package ticket;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import venue.VenueNotFoundException;
import venue.VenueRepository;

@RestController
public class TicketController {
    private TicketRepository tickets;
    private VenueRepository venues;

    public TicketController(TicketRepository tickets, VenueRepository venues){
        this.tickets = tickets;
        this.venues = venues;
    }

    @GetMapping("/venues/{venueId}/tickets")
    public List<Ticket> getAllTicketsByBookId(@PathVariable (value = "venueId") Long venueId) {
        if(!venue.existsById(venueId)) {
            throw new VenueNotFoundException(venueId);
        }
        return tickets.findByVenueId(venueId);
    }

    @PostMapping("/venues/{venueId}/tickets")
    public Ticket addTicket(@PathVariable (value = "venueId") Long venueId, @RequestBody Ticket ticket) {
        return venues.findById(venueId).map(venue -> {
            ticket.setVenue(venue);
            return tickets.save(ticket);
        }).orElseThrow(() -> new VenueNotFoundException(venueId));
    }

    @param venueId
    @param ticketId
    @param newTicket
    @return
    
    @PutMapping("/venues/{venueId}/ticket/{ticketId}")
    public Ticket updateTicket(@PathVariable (value = "venueId") Long venueId,
                                 @PathVariable (value = "ticketId") Long ticketId,
                                 @RequestBody Ticket newTicket) {
        if(!venues.existsById(venueId)) {
            throw new VenueNotFoundException(venueId);
        }
        return tickets.findByIdAndVenueId(ticketId, venueId).map(ticket -> {
            ticket.setTicket(newTicket.getTicket());
            return tickets.save(ticket);
        }).orElseThrow(() -> new TicketNotFoundException(ticketId));
    }

    @DeleteMapping("/venues/{venueId}/tickets/{ticketId}")
    public ResponseEntity<?> deleteTicket(@PathVariable (value = "venueId") Long venueId,
                              @PathVariable (value = "ticketId") Long ticketId) {
        
        if(!venues.existsById(venueId)) {
            throw new VenueNotFoundException(venueId);
        }

        return tickets.findByIdAndVenueId(ticketId, venueId).map(ticket -> {
            tickets.delete(ticket);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new TicketNotFoundException(ticketId));
    }
}