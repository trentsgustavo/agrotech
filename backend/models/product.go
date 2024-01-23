package models

import (
	"time"
)

type Product struct {
	ID         uint      `json:"id"`
	Name       string    `json:"name"`
	PriceBuy   float64   `json:"priceBuy"`
	PriceSale  float64   `json:"priceSale"`
	Stock      int       `json:"stock"`
	BrandId    int       `json:"brandId"`
	CategoryId int       `json:"categoryId"`
	Brand      Brand     `gorm:"foreignKey:BrandId;references:ID"`
	Category   Category  `gorm:"foreignKey:CategoryId;references:ID"`
	CreatedAt  time.Time `gorm:"autoCreateTime:true"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime:true"`
}
