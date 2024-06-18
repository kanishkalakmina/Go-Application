package model

type budget struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Title string `json:"title" gorm:"not null;column:title;size:255"`
}
