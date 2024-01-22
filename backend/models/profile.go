package models

import "gorm.io/gorm"

type Profile struct {
	gorm.Model
	ID   uint   `json:"id" gorm:"primary_key"`
	Name string ``
}
