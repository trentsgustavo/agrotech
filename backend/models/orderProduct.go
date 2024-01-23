package models

import "time"

type OrderProduct struct {
	ID          uint `json:"id"`
	OrderId     int  `json:"orderId"`
	ProductId   int  `json:"productId"`
	Order       Order
	Product     Product
	CreatedBy   int       `json:"createdBy"`
	UpdatedBy   int       `json:"updatedBy"`
	CreatedUser User      `gorm:"foreignKey:CreatedBy;references:ID"`
	UpdatedUser User      `gorm:"foreignKey:UpdatedBy;references:ID"`
	CreatedAt   time.Time `gorm:"autoCreateTime:true"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime:true"`
}
