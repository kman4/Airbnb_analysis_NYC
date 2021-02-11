-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/w3VzCp
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "listing_master" (
    "id" INT   NOT NULL,
    "listing_url" VARCHAR   NOT NULL,
    "name" VARCHAR   NOT NULL,
    "description" VARCHAR   NOT NULL,
    "picture_url" VARCHAR   NOT NULL,
    "host_id" INT   NOT NULL,
    "host_since" INT   NOT NULL,
    "host_response_time" VARCHAR   NOT NULL,
    "host_response_rate" FLOAT   NOT NULL,
    "host_acceptance_rate" FLOAT   NOT NULL,
    "superhost" BOOLEAN   NOT NULL,
    "host_listings_count" INT   NOT NULL,
    "host_identity_verified" BOOLEAN   NOT NULL,
    "neighbourhood_id" INT   NOT NULL,
    "borough_id" INT   NOT NULL,
    "latitude" FLOAT   NOT NULL,
    "longitude" FLOAT   NOT NULL,
    "room_type_id" INT   NOT NULL,
    "accommodates" INT   NOT NULL,
    "bathrooms_text" VARCHAR   NOT NULL,
    "bedrooms" INT   NOT NULL,
    "beds" INT   NOT NULL,
    "amenities" VARCHAR   NOT NULL,
    "price" FLOAT   NOT NULL,
    "minimum_nights" INT   NOT NULL,
    "maximum_nights" INT   NOT NULL,
    "has_availability" INT   NOT NULL,
    "availability_30" INT   NOT NULL,
    "availability_60" INT   NOT NULL,
    "availability_90" INT   NOT NULL,
    "availability_365" INT   NOT NULL,
    "number_of_reviews" INT   NOT NULL,
    "review_scores_rating" INT   NOT NULL,
    "review_scores_accuracy" INT   NOT NULL,
    "review_scores_cleanliness" INT   NOT NULL,
    "review_scores_communication" INT   NOT NULL,
    "review_scores_location" INT   NOT NULL,
    "review_scores_value" INT   NOT NULL,
    "instant_bookable" BOOLEAN   NOT NULL,
    "reviews_per_month" FLOAT   NOT NULL,
    CONSTRAINT "pk_listing_master" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "boroughs_Id" (
    "borough_id" INT   NOT NULL,
    "borough" VARCHAR   NOT NULL,
    CONSTRAINT "pk_boroughs_Id" PRIMARY KEY (
        "borough_id"
     )
);

CREATE TABLE "neighbourhood_id" (
    "neighbourhood_id" INT   NOT NULL,
    "neighbourhood" VARCHAR   NOT NULL,
    CONSTRAINT "pk_neighbourhood_id" PRIMARY KEY (
        "neighbourhood_id"
     )
);

CREATE TABLE "room_type_id" (
    "room_type_id" INT   NOT NULL,
    "room_type" VARCHAR   NOT NULL,
    CONSTRAINT "pk_room_type_id" PRIMARY KEY (
        "room_type_id"
     )
);

CREATE TABLE "rates_yearly" (
    "rates_id" INT   NOT NULL,
    "borough_id" INT   NOT NULL,
    "year" INT   NOT NULL,
    "price" INT   NOT NULL,
    CONSTRAINT "pk_rates_yearly" PRIMARY KEY (
        "rates_id"
     )
);

ALTER TABLE "listing_master" ADD CONSTRAINT "fk_listing_master_neighbourhood_id" FOREIGN KEY("neighbourhood_id")
REFERENCES "neighbourhood_id" ("neighbourhood_id");

ALTER TABLE "listing_master" ADD CONSTRAINT "fk_listing_master_borough_id" FOREIGN KEY("borough_id")
REFERENCES "boroughs_Id" ("borough_id");

ALTER TABLE "listing_master" ADD CONSTRAINT "fk_listing_master_room_type_id" FOREIGN KEY("room_type_id")
REFERENCES "room_type_id" ("room_type_id");

ALTER TABLE "rates_yearly" ADD CONSTRAINT "fk_rates_yearly_borough_id" FOREIGN KEY("borough_id")
REFERENCES "boroughs_Id" ("borough_id");

