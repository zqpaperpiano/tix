package venue;

import java.util.List;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VenueController {
    private VenueService venueService;

    public VenueController(VenueService vs){
        this.VenueService = vs;
    }

    
    @GetMapping("/venues")
    public List<Ticket> getTickets(){
        return VenueService.listTickets();
    }

    
    @GetMapping("/venues/{id}")
    public Venue getVenue(@PathVariable Long id){
        Venue venue = VenueService.getVenue(id);

        
        if(venue == null) throw new VenueNotFoundException(id);
        return VenueService.getVenue(id);

    }
    
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/venues")
    public Venue addVenue(@RequestBody Venue venue){
        return VenueService.addVenue(venue);
    }

    /**
     * If there is no venue with the given "id", throw a VenueNotFoundException
     * @param id
     * @param newVenueInfo
     * @return the updated, or newly added venue
     */
    @PutMapping("/venues/{id}")
    public Venue updateVenue(@PathVariable Long id, @RequestBody Venue newVenueInfo){
        Venue venue = VenueService.updateVenue(id, newVenueInfo);
        if(venue == null) throw new VenueNotFoundException(id);
        
        return venue;
    }

    /**
     * Remove a venue with the DELETE request to "/venues/{id}"
     * If there is no venue with the given "id", throw a VenueNotFoundException
     * @param id
     */
    @DeleteMapping("/venues/{id}")
    public void deleteVenue(@PathVariable Long id){
        try{
            VenueService.deleteVenue(id);
         }catch(EmptyResultDataAccessException e) {
            throw new VenueNotFoundException(id);
         }
    }
}