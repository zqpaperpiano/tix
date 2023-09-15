package ticket;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long>{
    List<Ticket> findByVenueId(Long venueId);
    Optional<Ticket> findByIdAndVenueId(Long id, Long venueId);
}