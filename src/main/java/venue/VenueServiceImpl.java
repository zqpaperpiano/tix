package venue;

import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class VenueServiceImpl implements VenueService {
   
    private VenueRepository venues;
    

    public VenueServiceImpl(VenueRepository venues){
        this.venues = venues;
    }

    @Override
    public List<Venue> listVenues() {
        return venues.findAll();
    }

    
    @Override
    public Venue getVenue(Long id){
        
        return venues.findById(id).map(venue -> {
            return venue;
        }).orElse(null);
    }
    
    @Override
    public Venue addVenue(Venue venue) {
        return venues.save(venue);
    }
    
    @Override
    public Venue updateVenue(Long id, Venue newVenueInfo){
        return venues.findById(id).map(venue -> {venue.setVenue_name(newVenueInfo.getVenue_name());
            return venues.save(venue);
        }).orElse(null);

        
    }

    @Override
    public void deleteVenue(Long id){
        venues.deleteById(id);
    }
}