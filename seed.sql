CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    tech_level INTEGER,
    damage_type VARCHAR(255),
    is_stealth BOOLEAN
);

INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Tiberium Harvester', 1, 'N/A', true);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Attack Bike', 1, 'Rocket', false);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Raider Buggy', 1, 'Machine Gun', false);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Scorpion Tank', 1, 'Cannon', false);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Beam Cannon', 2, 'Laser', false);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Flame Tank', 2, 'Thermal', false);
INSERT INTO vehicles (name, tech_level, damage_type, is_stealth) VALUES ('Mantis Drone', 2, 'Rocket', false);

SELECT * FROM vehicles;