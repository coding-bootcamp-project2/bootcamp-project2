-- User Table
CREATE TABLE User (
    User_ID INT PRIMARY KEY AUTO_INCREMENT,
    User_Name VARCHAR(255) NOT NULL,
    Date_Created TIMESTAMP NOT NULL
);
-- Character Table
CREATE TABLE Character (
    Character_ID INT PRIMARY KEY AUTO_INCREMENT,
    User_ID INT NOT NULL, 
    Character_Name VARCHAR(255) NOT NULL, 
    Character_Class_ID INT NOT NULL, 
    Character_Race_ID INT NULL NOT, 
    Character_Level INT NOT NULL, 
    Hit_Points INT, 
    Spell1 INT,
    Spell2 INT,
    Spell3 INT,
    Spell4 INT,
    Strength INT, 
    Dexterity INT, 
    Constitution INT, 
    Intelligence INT, 
    Wisdom INT, 
    Charisma INT, 
    Armor_Class INT, 
    Initiative INT, 
    Skills INT,
    Weapon INT, 
    Armor INT,
    Date_Created TIMESTAMP NOT NULL
    Inventory INT,
    Gold INT, 
);


-- Weapons Table
CREATE TABLE Weapons (
    Weapon_ID INT PRIMARY KEY AUTO_INCREMENT,
    Weapon_Name VARCHAR(255) NOT NULL, -- Name of Weapon
    Description TEXT -- Weapon description
    Bonus INT -- Add a bonus field to store weapon bonuses or modifiers
);

CREATE TABLE Race (
    Race_ID INT PRIMARY KEY AUTO_INCREMENT,
    Race_Name VARCHAR(50) NOT NULL, -- Name of the race
    Description TEXT, -- Race description
);

CREATE TABLE Class (
    Class_ID INT PRIMARY KEY AUTO_INCREMENT,
    Class_Name VARCHAR(50) NOT NULL, -- Name of the class
    Description TEXT, -- Class description
);

CREATE TABLE Alignment(
    Alignment_ID INT PRIMARY KEY AUTO_INCREMENT
    Alignment_Name VARCHAR(50) NOT NULL, -- Name of Alignment
    Description TEXT, -- Alignment description
)
CREATE TABLE Spell (
    Spell_ID INT PRIMARY KEY AUTO_INCREMENT,
    Spell_Name VARCHAR(255) NOT NULL, -- Name of the spell
    Description TEXT, -- Spell description
);

CREATE TABLE Skills (
    Skill_ID INT PRIMARY KEY AUTO_INCREMENT,
    Skill_Name VARCHAR(50) NOT NULL, -- Name of the skill
    Description TEXT, -- Skill description
);

CREATE TABLE Armor (
    ArmorID INT Primary KEY,
    ArmorName VARCHAR(255), -- Name of Armor
    Description TEXT, --Armor description
)

