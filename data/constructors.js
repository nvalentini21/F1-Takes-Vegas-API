const constructors = [
 {
   "id": 23,
   "name": "Ferrari",
   "full_name": "Scuderia Ferrari",
   "base": "Maranello, Italy",
   "team_chief": "Mattia Binotto",
   "entry_year": 1950,
   "world_championships": "16",
   "rank": 1,
   "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Ferrari-Logo.svg/1024px-Ferrari-Logo.svg.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Charles_Leclerc%2C_2019_Chinese_GP.jpg/2560px-Charles_Leclerc%2C_2019_Chinese_GP.jpg",
   "driver1": "Charles Leclerc",
   "driver2": "Carlos Sainz"
 },
 {
   "id": 24,
   "name": "Mercedes",
   "full_name": "Mercedes-AMG Petronas F1 Team",
   "base": "Brackley, United Kingdom",
   "team_chief": "Toto Wolff",
   "entry_year": 1970,
   "world_championships": "8",
   "rank": 2,
   "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/2560px-Mercedes-Benz_in_Formula_One_logo.svg.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nico_Rosberg_2010_Malaysia_race.jpg",
   "driver1": "Lewis Hamilton",
   "driver2": "George Russell"
 },
 {
   "id": 25,
   "name": "Red Bull",
   "full_name": "Red Bull Racing",
   "base": "Milton Keynes, United Kingdom",
   "team_chief": "Christian Horner",
   "entry_year": 1997,
   "world_championships": "4",
   "rank": 3,
   "icon": "https://upload.wikimedia.org/wikipedia/en/f/ff/Oracle_Red_Bull_Racing_logo.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/FIA_F1_Austria_2021_Nr._11_Perez.jpg/1920px-FIA_F1_Austria_2021_Nr._11_Perez.jpg",
   "driver1": "Max Verstappen",
   "driver2": "Sergio Perez"
 },
 {
   "id": 26,
   "name": "McLaren",
   "full_name": "McLaren F1 Team",
   "base": "Woking, United Kingdon",
   "team_chief": "Andreas Seidl",
   "entry_year": 1966,
   "world_championships": "8",
   "rank": 4,
   "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_Racing_logo.svg/1920px-McLaren_Racing_logo.svg.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Chinese_Grand_Prix_FP3_Fernando_Alonso_%2840970600574%29_%28cropped%29.jpg/1920px-2018_Chinese_Grand_Prix_FP3_Fernando_Alonso_%2840970600574%29_%28cropped%29.jpg",
   "driver1": "Daniel Ricciardo",
   "driver2": "Landon Norris"
 },
 {
   "id": 27,
   "name": "Alpine",
   "full_name": "BWT Alpine F1 Team",
   "base": "Enstone, United Kingdom",
   "team_chief": "Otmar Szafnauer",
   "entry_year": 1986,
   "world_championships": "2",
   "rank": 5,
   "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Alpine_F1_Team_Logo.svg/1920px-Alpine_F1_Team_Logo.svg.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mazepin_Force_India_VJM11_Testing_Barcelona.jpg/1920px-Mazepin_Force_India_VJM11_Testing_Barcelona.jpg",
   "driver1": "Fernando Alonso",
   "driver2": "Esteban Ocon"
 },
 {
   "id": 28,
   "name": "Alfa Romeo",
   "full_name": "Alfa Romeo F1 Team ORLEN",
   "base": "Hinwil, Switzerland",
   "team_chief": "Frédéric Vasseur",
   "entry_year": 1993,
   "world_championships": "none",
   "rank": 6,
   "icon": "https://upload.wikimedia.org/wikipedia/en/2/2a/Alfa_Romeo_logo.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/FIA_F1_Austria_2018_Nr._16_Leclerc.jpg/1920px-FIA_F1_Austria_2018_Nr._16_Leclerc.jpg",
   "driver1": "Valtteri Botas",
   "driver2": "Zhou Guanyu"
 },
 {
   "id": 29,
   "name": "Haas",
   "full_name": "\tHaas F1 Team",
   "base": "Kannapolis, United States",
   "team_chief": "\tGuenther Steiner",
   "entry_year": 2016,
   "world_championships": "none",
   "rank": 7,
   "icon": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Haas_F1_Team_logo.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/FIA_F1_Austria_2021_Nr._47_Schumacher_%28side%29.jpg/1920px-FIA_F1_Austria_2021_Nr._47_Schumacher_%28side%29.jpg",
   "driver1": "Mick Schumacher",
   "driver2": "Kevin Magnussen"
 },
 {
   "id": 30,
   "name": "Alpha Tauri",
   "full_name": "Scuderia AlphaTauri",
   "base": "Faenza, Italy",
   "team_chief": "Franz Tost",
   "entry_year": 1985,
   "world_championships": "none",
   "rank": 8,
   "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Scuderia_Alpha-Tauri.svg/1920px-Scuderia_Alpha-Tauri.svg.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2020_Formula_One_tests_Barcelona%2C_AlphaTauri_AT01%2C_Pierre_Gasly.jpg/1920px-2020_Formula_One_tests_Barcelona%2C_AlphaTauri_AT01%2C_Pierre_Gasly.jpg",
   "driver1": "Pierre Gasly",
   "driver2": "Yuki Tsunoda"
 },
 {
   "id": 31,
   "name": "Williams",
   "full_name": "Williams Racing",
   "base": "Grove, United Kingdom",
   "team_chief": "Jost Capito",
   "entry_year": 1978,
   "world_championships": "9",
   "rank": 9,
   "icon": "https://upload.wikimedia.org/wikipedia/en/e/e8/Williams_Racing_2020_logo.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/FIA_F1_Austria_2021_Nr._6_Latifi.jpg/1920px-FIA_F1_Austria_2021_Nr._6_Latifi.jpg",
   "driver1": "Nicholas Latifi",
   "driver2": "Alexander Albon"
 },
 {
   "id": 32,
   "name": "Aston Martin",
   "full_name": "Aston Martin Aramco Cognizant F1 Team",
   "base": "Silverstone, United Kingdom",
   "team_chief": "Mike Krack",
   "entry_year": 2018,
   "world_championships": "none",
   "rank": 10,
   "icon": "https://upload.wikimedia.org/wikipedia/en/8/8a/Aston_Martin_Racing_logo.png",
   "car_img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sebastian_Vettel%2C_F1_British_Grand_Prix_2021.jpg/1920px-Sebastian_Vettel%2C_F1_British_Grand_Prix_2021.jpg",
   "driver1": "Sebastian Vettel",
   "driver2": "Lance Stroll"
 }
]

module.exports = constructors;
