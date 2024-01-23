package models

import "time"

type Customer struct {
	ID        uint      `json:"id"`
	Document  string    `json:"document"`
	Address   string    `json:"address"`
	UserId    int       `json:"userId"`
	User      User      `gorm:"foreignKey:UserId;references:ID"`
	CreatedAt time.Time `gorm:"autoCreateTime:true"`
	UpdatedAt time.Time `gorm:"autoUpdateTime:true"`
}
