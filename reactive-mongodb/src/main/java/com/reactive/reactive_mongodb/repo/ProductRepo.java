package com.reactive.reactive_mongodb.repo;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import com.reactive.reactive_mongodb.entity.Product;

@Repository
public interface ProductRepo extends ReactiveMongoRepository<Product, String>{

}
