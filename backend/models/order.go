package models

import (
	"time"
)

type Order struct {
	ID           uint      `json:"id"`
	CustomerId   int       `json:"customerId"`
	Paid         bool      `json:"paid"`
	Total        float64   `json:"total"`
	Quantity     float64   `json:"quantity"`
	Deliver      bool      `json:"deliver"`
	DeliveryDate time.Time `json:"deliveryDate"`
	Customer     Customer  `gorm:"foreignKey:CustomerId;references:ID"`
	CreatedAt    time.Time `gorm:"autoCreateTime:true"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime:true"`
}
