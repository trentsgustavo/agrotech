package models

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	dsn := "host=localhost user=postgres password=postgres dbname=agrotech port=5432 sslmode=disable"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database")
	}

	err = database.AutoMigrate(
		&Profile{},
		&Brand{},
		&Category{},
		&User{},
		&Customer{},
		&Product{},
		&Order{},
		&OrderProduct{},
	)

	if err != nil {
		return
	}

	DB = database
}
