package com.product.salescrm.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.product.salescrm.entity.Mobile;
import com.product.salescrm.service.MobileService;

@RestController
@RequestMapping("/api/v1/mobiles")

public class MobileController {

    @Autowired
    private MobileService mobileService;

    @PostMapping("")
    public Mobile addMobile(@RequestBody Mobile mobile){
        return mobileService.addMobile(mobile);
    }

    @GetMapping("")
    public List<Mobile> getAllMobiles(){
        return mobileService.getAllMobiles();
    }

    @GetMapping("/{price}")
    public List<Mobile> getMobileByPrice(@PathVariable int price){
        return mobileService.getPriceMobile(price);
    }

    @GetMapping("/group-by-brand")
    public Map<String, List<Mobile>> getMobilesGroupedByBrand(@PathVariable String brand) {
        return mobileService.getByBrand(brand);
    }
    
    @GetMapping("/get-by-ram")
    public Map<Integer, List<Mobile>> getMobileByRam(@PathVariable int ramSize){
        return mobileService.getByRam(ramSize);
    }

    @GetMapping("/latest-mobiles")
    public List<Mobile> getLatestMobiles(@RequestParam String tillDate) {
        LocalDate date = LocalDate.parse(tillDate); 
        return mobileService.getLatest(date);
    }

}
