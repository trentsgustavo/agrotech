package models

type Order struct {
	ID   uint `json:"id"`
	Paid bool `json:"paid"`
}
