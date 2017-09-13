# assignment_djello
Project management with that great wobbly taste.

Backend architecture:

Models:

User:
	Username: String
	Password: String
	Profile: { Image: String, Bio: String }
	PersonalBoards: Array of Board
	Teams: Array of Team

Team:
	Name: String
	Profile: { Image: String, Description: String }
	Members: Array of User
	Boards: Array of Board

Board:
	Name: String
	Author: User
	Lists: Array of List
	Users: Array of User

List:
	Author: User
	Name: String
	Cards: Array

// If no description, card is slim - otherwise, card has an icon of some sort 
Card:
	Author: User
	Name: String,

