package com.product.salescrm.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.product.salescrm.entity.Mobile;
import com.product.salescrm.repo.MobileRepo;
import com.speedment.jpastreamer.application.JPAStreamer;

@Service
public class MobileService {

    private final JPAStreamer jpaStreamer;
    private final MobileRepo mobileRepo;

    public MobileService(JPAStreamer jpaStreamer, MobileRepo mobileRepo) {
        this.jpaStreamer = jpaStreamer;
        this.mobileRepo = mobileRepo;
    }

    //add the mobiles
    public Mobile addMobile(Mobile mobile){
        return mobileRepo.save(mobile);
    }

    // Get all mobiles
    public List<Mobile> getAllMobiles() {
        return jpaStreamer.stream(Mobile.class).toList();
    }

    // Get mobiles priced above a specific budget
    public List<Mobile> getPriceMobile(int budget) {
        return jpaStreamer.stream(Mobile.class)
                .filter(e -> e.getPrice() > budget)
                .toList();
    }

    // Group mobiles by brand
    public Map<String, List<Mobile>> getByBrand(String brand) {
        return jpaStreamer.stream(Mobile.class)
                .collect(Collectors.groupingBy(Mobile::getBrand));
    }

   public Map<Integer, List<Mobile>> getByRam(int ramSize){
        return jpaStreamer.stream(Mobile.class)
        .collect(Collectors.groupingBy(Mobile::getRamSize));
    }

    // Get mobiles released after the given date
    public List<Mobile> getLatest(LocalDate tillDate) {
        return jpaStreamer.stream(Mobile.class)
                .filter(e -> e.getReleaseDate().isAfter(tillDate))
                .toList();
    }

}
