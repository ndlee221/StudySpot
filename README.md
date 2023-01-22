# studyspot
find and rate study spots at ubc



"name": "Institute of Computing, Information and Cognitive Systems (ICICS)",
"hours": ["07:30-18:30", "07:30-18:30", "07:30-18:30", "07:30-18:30", "07:30-18:30", "closed", "closed"],
"address": "2366 Main Mall" ,
"busy": 4,
"last updated": "14:00 02/01/23",
"reviews": [
    {
        "date": "02/01/23",
        "message": "very nice.",
        "rating": 4
    },
    {
        "date": "05/12/22",
        "message": "cool study spot.",
        "rating" : 4
    }
    ]



"name": "Centre for Interactive Research on Sustainability (CIRS)",
"hours": ["07:30-17:00", "07:30-17:00", "07:30-17:00", "07:30-17:00", "07:30-17:00", "closed", "closed"], 
"address": "2260 West Mall",
"busy": 2,
"last updated": "12:00 02/02/22",
"reviews": [
    {
        "date": "01/20/23",
        "message": "quite busy.",
        "rating": 2
    },
    {
        "date": "06/11/22",
        "message": "was very busy."
        "rating": 3
    }
    ]

"name": "Irving K. Barber Learning Centre (IKB)",
"hours": ["06:00-24:00", "06:00-24:00", "06:00-24:00", "06:00-24:00", "06:00-24:00", "06:00-22:00", "06:00-24:00"], 
"address": "1961 E Mall",
"busy": 5,
"last updated": "12:00 14/12/22",
"reviews": [
    {
        "date": "01/20/23",
        "message": "quite busy.",
        "rating": 4
    },
    {
        "date": "06/11/22",
        "message": "was very busy."
        "rating": 3
    }
    ]

"name": "AMS Student Nest",
"hours": ["07:00-23:00", "07:00-23:00", "07:00-23:00", "07:00-23:00", "07:00-23:00", "08:00-21:00", "08:00-21:00",], 
"address": "6133 University Blvd",
"busy": 3,
"last updated": "12:00 02/02/22",
"reviews": [
    {
        "date": "01/20/23",
        "message": "quite busy.",
        "rating": 2
    },
    {
        "date": "06/11/22",
        "message": "was very busy."
        "rating": 3
    }
    ]


"name": "Life Building",
"hours": ["07:00-22:00", "07:00-22:00", "07:00-22:00", "07:00-22:00", "07:00-22:00", "08:00-16:00", "08:00-16:00"], 
"address": "6138 Student Union Blvd",
"busy": 4,
"last updated": "12:00 02/02/22",
"reviews": [
    {
        "date": "01/20/23",
        "message": "quite busy.",
        "rating": 2
    },
    {
        "date": "06/11/22",
        "message": "was very busy."
        "rating": 3
    }
    ]




"name": "Hugh Dempster Pavilion (DMP)",
"hours": ["07:30-20:00", "07:30-20:00, "07:30-20:00", "07:30-20:00", "07:30-20:00", "closed", "closed"], 
"address": "6245 Agronomy Rd",
"busy": 1,
"last updated": "13:00 06/05/22",
"reviews": [
    {
        "date": "01/20/23",
        "message": "quite busy.",
        "rating": 2
    },
    {
        "date": "06/11/22",
        "message": "was very busy."
        "rating": 3
    }
    ]


    {"name": "Institute for Computing, Information and Cognitive Systems (ICICS)"},
    {"name": "Centre for Interactive Research on Sustainability (CIRS)"},
    {"name": "Irving K. Barber Learning Centre (IKB)"},
    {"name": "AMS Student Nest"},
    {"name": "Earth Sciences Building (ESB)"},
    {"name": "Life Building"},
    {"name": "Hugh Dempster Pavilion (DMP)"}





cursor = studyspot.building.aggregate([
    { $unwind: "$reviews" },
    { $group : { "$name", avgRating : { $avg : "$reviews.rating" } } }
]})
