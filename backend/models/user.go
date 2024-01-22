package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID        uint   `json:"id" gorm:"primary_key"`
	Username  string `json:"username"`
	Password  []byte `json:"password"`
	Name      string `json:"name"`
	Phone     string `json:"phone"`
	ProfileId int    `json:"profileId"`
	profile   Profile
}
