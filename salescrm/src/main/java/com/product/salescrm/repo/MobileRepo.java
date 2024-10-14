package com.product.salescrm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.salescrm.entity.Mobile;

@Repository
public interface MobileRepo extends JpaRepository<Mobile, Integer>{

}
