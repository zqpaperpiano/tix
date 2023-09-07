package venue;

import java.util.List;

public interface VenueService {
    List<Venue> listVenues();
    Venue getVenue(Long id);
    Venue addVenue(Venue venue);
    Venue updateVenue(Long id, Venue venue);

    /**
     * Change method's signature: do not return a value for delete operation
     * @param id
     */
    void deleteVenue(Long id);
}