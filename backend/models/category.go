package models

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	ID      uint   `json:"id" gorm:"primary_key"`
	Name    string `json:"name"`
	Measure string `json:"measure"`
}
