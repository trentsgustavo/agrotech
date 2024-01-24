package models

import "time"

type OrderProduct struct {
	ID          uint    `json:"id"`
	OrderId     int     `json:"orderId" gorm:"foreignKey:OrderId;references:ID"`
	ProductId   int     `json:"productId" gorm:"foreignKey:ProductId;references:ID"`
	Price       float64 `json:"price"`
	Quantity    int     `json:"quantity"`
	Order       Order
	Product     Product
	CreatedBy   int       `json:"createdBy"`
	UpdatedBy   int       `json:"updatedBy"`
	CreatedUser User      `gorm:"foreignKey:CreatedBy;references:ID"`
	UpdatedUser User      `gorm:"foreignKey:UpdatedBy;references:ID"`
	CreatedAt   time.Time `gorm:"autoCreateTime:true"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime:true"`
}
