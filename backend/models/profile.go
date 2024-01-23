package models

type Profile struct {
	ID   uint   `json:"id" gorm:"primary_key"`
	Name string ``
}
