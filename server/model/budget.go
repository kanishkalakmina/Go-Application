package model

type Budget struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Title string `json:"title" gorm:"not null;column:title;size:255"`
	Image string `json:"image" gorm:"null;column:image;size:255"`
}
