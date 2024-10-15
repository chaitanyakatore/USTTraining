package com.product.salescrm.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data

@Entity
public class Mobile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mobileId;
    private String mobileName;
    private String brand;
    private String modelNumber;
    private int price;
    private String operatingSystem;
    private int ramSize;           // in GB
    private int storageCapacity;   // in GB
    private double screenSize;     // in inches
    private String processor;
    private int batteryCapacity;   // in mAh
    private int cameraResolution;  // in megapixels
    private String color;
    private double weight;         // in grams
    private LocalDate releaseDate;    // e.g., "2024-10-14"
    private String warrantyPeriod; // e.g., "1 Year"
}
