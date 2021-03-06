import { Mongo } from 'meteor/mongo';

//Creates new MongoDB collection called 'students'
Students = new Mongo.Collection('students');

//All below is schema for Mongodb, Collection Students
StudentSchema = new SimpleSchema({
    Name: {
        type: String,
        max: 50,
        label: 'Name *',
        autoform:
        {
            placeholder: "First and last name"
        }
    },

    //schema attribute for phone numbers, regEx checks to make sure students are entering phone numbers with valid area codes
    PhoneNumber: {
        type: String,
        unique: true,
        regEx: /^(205|251|256|334|938|907|684|480|520|602|623|928|479|501|870|209|213|310|323|408|415|424|442|510|530|559|562|619|626|650|657|661|669|707|714|747|760|805|818|831|858|909|916|925|949|951|303|719|720|970|203|475|860|302|239|305|321|352|386|407|561|727|754|772|786|813|850|863|904|941|954|229|404|470|478|678|706|762|770|912|671|808|208|217|224|309|312|331|618|630|708|773|779|815|847|872|219|260|317|574|765|812|319|515|563|641|712|316|515|563|641|712|316|620|785|913|270|502|606|859|225|318|337|504|985|207|240|301|410|443|667|339|351|413|508|617|774|781|857|978|231|248|269|313|517|586|616|734|810|906|947|989|218|320|507|612|651|763|952|228|601|662|769|314|417|573|636|660|816|406|308|402|531|702|725|775|603|201|551|609|732|848|856|862|908|973|505|575|212|315|347|516|518|585|607|631|646|716|718|845|914|917|929|252|336|704|828|910|919|980|984|701|670|216|234|330|419|440|513|567|614|740|937|405|539|580|918|458|503|541|971|215|267|272|412|484|570|610|717|724|814|878|787|939|401|803|843|864|605|423|615|731|865|901|931|210|214|254|281|325|346|361|409|430|432|469|512|682|713|737|806|817|830|832|903|915|936|940|956|972|979|385|435|801|802|340|276|434|540|571|703|757|804|206|253|360|425|509|202|304|681|262|414|534|608|715|920|307)([^a-z]*)$/,
        min: 10,
        max: 10,
        label: 'Phone Number *',
        autoform:{
            placeholder: "Numbers Only ex. 8031182938"
        }
    },

    USCID: {
        type: String,
        min: 9,
        max: 9,
        label: 'USC ID *',
        autoform:
        {
            placeholder: "Located on the back of your Carolina Card"
        }
    },

    ReasonForVisit: {
        type: String,
        allowedValues: ["Change Major", "Add Major/Minor", "Other"],
        autoform: {
            afFieldInput: {
                firstOption: "(Select a Reason)"
            }
        },
        label: 'Reason for Visit *'
    },

    //schema attribute that contains most majors/minors offered at USC
    CurrentMajor: {
        type: String,
        max: 100,
        label: 'Current Major *',
        regEx:/^([^0-9]*)$/,
        autoform: {
            type: "typeahead",
                options: function () {
                    return [
                        {label: "Accounting", value: "Accounting"},	 	
                        {label: "Advertising", value: "Advertising"},		 	 	 
                        {label: "African American Studies", value: "African American Studies"},		 	 	 
                        {label: "Anthropology", value: "Anthropology"},				
                        {label: "Art Education", value: "Art Education"},			 	 
                        {label: "Art History", value: "Art History"},			 	 
                        {label: "Art Studio", value: "Art Studio"},			 	 
                        {label: "Athletic Training", value: "Athletic Training"},			 	 
                        {label: "Biochemistry and Molecular Biology", value: "Biochemistry and Molecular Biology"},	 	 
                        {label: "Biological Sciences", value: "Biological Sciences"},
                        {label: "Biomedical Sciences", value: "Biomedical Sciences"},	 			 
                        {label: "Biostatistics", value: "Biostatistics"},	 			 
                        {label: "Business Administration", value: "Business Administration"}, 			 
                        {label: "Cardiovascular Technology", value: "Cardiovascular Technology"},		 	 	 
                        {label: "Chemistry", value: "Chemistry"},				 
                        {label: "Chinese Studies", value: "Chinese Studies"},	 	 	 
                        {label: "Classics", value: "Classics"},	 	 	 
                        {label: "Communication Sciences and Disorders", value: "Communication Sciences and Disorders"},	 
                        {label: "Comparative Literature", value: "Comparative Literature"},
                        {label: "Computer Science / Computer Engineering", value: "Computer Science / Computer Engineering"},	
                        {label: "Counseling / Counselor Education", value: "Counseling / Counselor Education"},
                        {label: "Creative Writing	", value: "Creative Writing"},
                        {label: "Criminology and Criminal Justice", value: "Criminology and Criminal Justice"},			
                        {label: "Dance", value: "Dance"},
                        {label: "Economics", value: "Economics"},				
                        {label: "Education: Curriculum and Instruction", value: "Education: Curriculum and Instruction"}, 	 	 
                        {label: "Education: Early Childhood Education", value: "Education: Early Childhood Education"},
                        {label: "Education: Elementary Education", value: "Education: Elementary Education"},			 
                        {label: "Education: Language and Literacy", value: "Education: Language and Literacy"},		 
                        {label: "Education: Middle Level Education", value: "Education: Middle Level Education"},	 	 
                        {label: "Education: Physical Education", value: "Education: Physical Education"},		 
                        {label: "Education: Secondary Education", value: "Education: Secondary Education"},	 	 
                        {label: "Education: Special Education", value: "Education: Special Education"},	 			 
                        {label: "Education: Teacher Education", value: "Education: Teacher Education"},	 			
                        {label: "Educational Administration and Higher Education", value: "Educational Administration and Higher Education"},	 			 
                        {label: "Educational Psychology and Research", value: "Educational Psychology and Research"},	 
                        {label: "Educational Technology", value: "Educational Technology"}, 		 	 
                        {label: "Engineering: Aerospace Engineering", value: "Engineering: Aerospace Engineering"},	 	 
                        {label: "Engineering: Biomedical Engineering", value: "Engineering: Biomedical Engineering"},		
                        {label: "Engineering: Chemical Engineering", value: "Engineering: Chemical Engineering"},			
                        {label: "Engineering: Civil Engineering", value: "Engineering: Civil Engineering"},			
                        {label: "Engineering: Electrical Engineering", value: "Engineering: Electrical Engineering"},			
                        {label: "Engineering: Engineering Management", value: "Engineering: Engineering Management"},	 	
                        {label: "Engineering: Mechanical Engineering", value: "Engineering: Mechanical Engineering"},		
                        {label: "Engineering: Nuclear Engineering", value: "Engineering: Nuclear Engineering"},	 		
                        {label: "Engineering: System Design", value: "Engineering: System Design"},	 	 
                        {label: "English", value: "English"},			 
                        {label: "Environmental Health Sciences", value: "Environmental Health Sciences"},			
                        {label: "Environmental Science / Environmental Studies", value: "Environmental Science / Environmental Studies"},	 	 
                        {label: "Epidemiology", value: "Epidemiology"},			
                        {label: "European Studies", value: "European Studies"},		 	 	 
                        {label: "Exercise Science", value: "Exercise Science"},			 
                        {label: "Film and Media Studies", value: "Film and Media Studies"},		 	 	 
                        {label: "Finance", value: "Finance"},	 	 	 
                        {label: "Foreign Language", value: "Foreign Language"},	 		 	 
                        {label: "French", value: "French"},
                        {label: "Geography", value: "Geography"},			 
                        {label: "Geological Sciences", value: "Geological Sciences"},			 
                        {label: "Geophysics", value: "Geophysics"}, 
                        {label: "German	", value: "German"}, 	 
                        {label: "Gerontology", value: "Gerontology"},	 	 	
                        {label: "Global Studies", value: "Global Studies"},	 	 	 
                        {label: "Health Communication", value: "Health Communication"}, 	 	
                        {label: "Health Information Technology", value: "Health Information Technology"}, 	  
                        {label: "Health Promotion, Education and Behavior", value: "Health Promotion, Education and Behavior"},	  
                        {label: "Health Services Policy and Management", value:	"Health Services Policy and Management"},
                        {label: "History", value: "History"},
                        {label: "Hospitality Management", value: "Hospitality Management"},				 
                        {label: "Human Resources", value: "Human Resources"},
                        {label: "Information Science", value: "Information Science"},	 	 
                        {label: "Integrated Information Technology", value: "Integrated Information Technology"},		 	 
                        {label: "Interdisciplinary Studies", value: "Interdisciplinary Studies"},
                        {label: "International Business", value: "International Business"},
                        {label: "International Studies", value: "International Studies"},
                        {label: "Journalism", value: "Journalism"},
                        {label: "Latin American Studies", value: "Latin American Studies"},		 	 	 
                        {label: "Law", value: "Law"},
                        {label: "Liberal Studies", value: "Liberal Studies"},		 	 	 
                        {label: "Library and Information Science", value: "Library and Information Science"},	 		
                        {label: "Linguistics", value: "Linguistics"},
                        {label: "Management", value: "Management"}, 	 	 
                        {label: "Marine Science", value: "Marine Science"},		 
                        {label: "Marketing", value: "Marketing"},	 
                        {label: "Mathematics", value: "Mathematics"},		 
                        {label: "Media Arts", value: "Media Arts"},	 	 
                        {label: "Medicine", value: "Medicine"}, 		 
                        {label: "Music", value: "Music"},	 	 
                        {label: "Music: Conducting", value: "Music: Conducting"},	 			 
                        {label: "Music: Jazz Studies", value: "Music: Jazz Studies"}, 	 
                        {label: "Music: Music Composition", value: "Music: Music Composition"},		 
                        {label: "Music: Music Education", value: "Music: Music Education"},			 
                        {label: "Music: Music History", value: "Music: Music History"}, 
                        {label: "Music: Music Pedagogy", value: "Music: Music Pedagogy"},	 
                        {label: "Music: Music Performance", value: "Music: Music Performance"},	
                        {label: "Music: Music Theory", value: "Music: Music Theory"},
                        {label: "Music: Opera Theatre", value: "Music: Opera Theatre"},	 
                        {label: "Nursing", value: "Nursing"},
                        {label: "Organizational Leadership", value: "Organizational Leadership"}, 	 	 
                        {label: "Pharmacy", value: "Pharmacy"},
                        {label: "Philosophy", value: "Philosophy"},		 
                        {label: "Physics", value: "Physics"}, 
                        {label: "Political Science", value: "Political Science"},		 		 
                        {label: "Professional Science Master", value: "Professional Science Master"}, 		 	 
                        {label: "Psychology", value: "Psychology"},
                        {label: "Public Administration", value: "Public Administration"},	 		 	 
                        {label: "Public Health", value: "Public Health"},
                        {label: "Public Relations", value: "Public Relations"},	 	 
                        {label: "Real Estate", value: "Real Estate"}, 	 
                        {label: "Religious Studies", value: "Religious Studies"},	 	 	 
                        {label: "Retailing", value: "Retailing"},	 
                        {label: "Risk Management and Insurance", value: "Risk Management and Insurance"},
                        {label: "Russian", value: "Russian"},
                        {label: "Social Work", value: "Social Work"},		  
                        {label: "Sociology", value: "Sociology"},		 
                        {label: "Spanish", value: "Spanish"}, 
                        {label: "Speech / Language Pathology", value: "Speech / Language Pathology"}, 		 	 
                        {label: "Sport and Entertainment Management", value: "Sport and Entertainment Management"},	 
                        {label: "Statistics", value: "Statistics"},
                        {label: "Theatre", value: "Theatre"}, 	 
                        {label: "Tourism Management", value: "Tourism Management"},		
                        {label: "Undeclared", value: "Undeclared"}, 	 	 
                        {label: "Visual Communications", value: "Visual Communications"}, 
                        {label: "Women' and Gender Studies", value: "Women’ and Gender Studies"}
                    ];
                }
        }
    },

    IntendedMajor: {
        type: String,
        optional: true,
        max: 100,
        label: 'Intended Major/Minor',
        autoform: {
            type: "typeahead",
                options: function () {
                    return [
                        {label: "Accounting", value: "Accounting"},	 	
                        {label: "Advertising", value: "Advertising"},		 	 	 
                        {label: "African American Studies", value: "African American Studies"},		 	 	 
                        {label: "Anthropology", value: "Anthropology"},				
                        {label: "Art Education", value: "Art Education"},			 	 
                        {label: "Art History", value: "Art History"},			 	 
                        {label: "Art Studio", value: "Art Studio"},			 	 
                        {label: "Athletic Training", value: "Athletic Training"},			 	 
                        {label: "Biochemistry and Molecular Biology", value: "Biochemistry and Molecular Biology"},	 	 
                        {label: "Biological Sciences", value: "Biological Sciences"},
                        {label: "Biomedical Sciences", value: "Biomedical Sciences"},	 			 
                        {label: "Biostatistics", value: "Biostatistics"},	 			 
                        {label: "Business Administration", value: "Business Administration"}, 			 
                        {label: "Cardiovascular Technology", value: "Cardiovascular Technology"},		 	 	 
                        {label: "Chemistry", value: "Chemistry"},				 
                        {label: "Chinese Studies", value: "Chinese Studies"},	 	 	 
                        {label: "Classics", value: "Classics"},	 	 	 
                        {label: "Communication Sciences and Disorders", value: "Communication Sciences and Disorders"},	 
                        {label: "Comparative Literature", value: "Comparative Literature"},
                        {label: "Computer Science / Computer Engineering", value: "Computer Science / Computer Engineering"},	
                        {label: "Counseling / Counselor Education", value: "Counseling / Counselor Education"},
                        {label: "Creative Writing	", value: "Creative Writing"},
                        {label: "Criminology and Criminal Justice", value: "Criminology and Criminal Justice"},			
                        {label: "Dance", value: "Dance"},
                        {label: "Economics", value: "Economics"},				
                        {label: "Education: Curriculum and Instruction", value: "Education: Curriculum and Instruction"}, 	 	 
                        {label: "Education: Early Childhood Education", value: "Education: Early Childhood Education"},
                        {label: "Education: Elementary Education", value: "Education: Elementary Education"},			 
                        {label: "Education: Language and Literacy", value: "Education: Language and Literacy"},		 
                        {label: "Education: Middle Level Education", value: "Education: Middle Level Education"},	 	 
                        {label: "Education: Physical Education", value: "Education: Physical Education"},		 
                        {label: "Education: Secondary Education", value: "Education: Secondary Education"},	 	 
                        {label: "Education: Special Education", value: "Education: Special Education"},	 			 
                        {label: "Education: Teacher Education", value: "Education: Teacher Education"},	 			
                        {label: "Educational Administration and Higher Education", value: "Educational Administration and Higher Education"},	 			 
                        {label: "Educational Psychology and Research", value: "Educational Psychology and Research"},	 
                        {label: "Educational Technology", value: "Educational Technology"}, 		 	 
                        {label: "Engineering: Aerospace Engineering", value: "Engineering: Aerospace Engineering"},	 	 
                        {label: "Engineering: Biomedical Engineering", value: "Engineering: Biomedical Engineering"},		
                        {label: "Engineering: Chemical Engineering", value: "Engineering: Chemical Engineering"},			
                        {label: "Engineering: Civil Engineering", value: "Engineering: Civil Engineering"},			
                        {label: "Engineering: Electrical Engineering", value: "Engineering: Electrical Engineering"},			
                        {label: "Engineering: Engineering Management", value: "Engineering: Engineering Management"},	 	
                        {label: "Engineering: Mechanical Engineering", value: "Engineering: Mechanical Engineering"},		
                        {label: "Engineering: Nuclear Engineering", value: "Engineering: Nuclear Engineering"},	 		
                        {label: "Engineering: System Design", value: "Engineering: System Design"},	 	 
                        {label: "English", value: "English"},			 
                        {label: "Environmental Health Sciences", value: "Environmental Health Sciences"},			
                        {label: "Environmental Science / Environmental Studies", value: "Environmental Science / Environmental Studies"},	 	 
                        {label: "Epidemiology", value: "Epidemiology"},			
                        {label: "European Studies", value: "European Studies"},		 	 	 
                        {label: "Exercise Science", value: "Exercise Science"},			 
                        {label: "Film and Media Studies", value: "Film and Media Studies"},		 	 	 
                        {label: "Finance", value: "Finance"},	 	 	 
                        {label: "Foreign Language", value: "Foreign Language"},	 		 	 
                        {label: "French", value: "French"},
                        {label: "Geography", value: "Geography"},			 
                        {label: "Geological Sciences", value: "Geological Sciences"},			 
                        {label: "Geophysics", value: "Geophysics"}, 
                        {label: "German	", value: "German"}, 	 
                        {label: "Gerontology", value: "Gerontology"},	 	 	
                        {label: "Global Studies", value: "Global Studies"},	 	 	 
                        {label: "Health Communication", value: "Health Communication"}, 	 	
                        {label: "Health Information Technology", value: "Health Information Technology"}, 	  
                        {label: "Health Promotion, Education and Behavior", value: "Health Promotion, Education and Behavior"},	  
                        {label: "Health Services Policy and Management", value:	"Health Services Policy and Management"},
                        {label: "History", value: "History"},
                        {label: "Hospitality Management", value: "Hospitality Management"},				 
                        {label: "Human Resources", value: "Human Resources"},
                        {label: "Information Science", value: "Information Science"},	 	 
                        {label: "Integrated Information Technology", value: "Integrated Information Technology"},		 	 
                        {label: "Interdisciplinary Studies", value: "Interdisciplinary Studies"},
                        {label: "International Business", value: "International Business"},
                        {label: "International Studies", value: "International Studies"},
                        {label: "Journalism", value: "Journalism"},
                        {label: "Latin American Studies", value: "Latin American Studies"},		 	 	 
                        {label: "Law", value: "Law"},
                        {label: "Liberal Studies", value: "Liberal Studies"},		 	 	 
                        {label: "Library and Information Science", value: "Library and Information Science"},	 		
                        {label: "Linguistics", value: "Linguistics"},
                        {label: "Management", value: "Management"}, 	 	 
                        {label: "Marine Science", value: "Marine Science"},		 
                        {label: "Marketing", value: "Marketing"},	 
                        {label: "Mathematics", value: "Mathematics"},		 
                        {label: "Media Arts", value: "Media Arts"},	 	 
                        {label: "Medicine", value: "Medicine"}, 		 
                        {label: "Music", value: "Music"},	 	 
                        {label: "Music: Conducting", value: "Music: Conducting"},	 			 
                        {label: "Music: Jazz Studies", value: "Music: Jazz Studies"}, 	 
                        {label: "Music: Music Composition", value: "Music: Music Composition"},		 
                        {label: "Music: Music Education", value: "Music: Music Education"},			 
                        {label: "Music: Music History", value: "Music: Music History"}, 
                        {label: "Music: Music Pedagogy", value: "Music: Music Pedagogy"},	 
                        {label: "Music: Music Performance", value: "Music: Music Performance"},	
                        {label: "Music: Music Theory", value: "Music: Music Theory"},
                        {label: "Music: Opera Theatre", value: "Music: Opera Theatre"},	 
                        {label: "Nursing", value: "Nursing"},
                        {label: "Organizational Leadership", value: "Organizational Leadership"}, 	 	 
                        {label: "Pharmacy", value: "Pharmacy"},
                        {label: "Philosophy", value: "Philosophy"},		 
                        {label: "Physics", value: "Physics"}, 
                        {label: "Political Science", value: "Political Science"},		 		 
                        {label: "Professional Science Master", value: "Professional Science Master"}, 		 	 
                        {label: "Psychology", value: "Psychology"},
                        {label: "Public Administration", value: "Public Administration"},	 		 	 
                        {label: "Public Health", value: "Public Health"},
                        {label: "Public Relations", value: "Public Relations"},	 	 
                        {label: "Real Estate", value: "Real Estate"}, 	 
                        {label: "Religious Studies", value: "Religious Studies"},	 	 	 
                        {label: "Retailing", value: "Retailing"},	 
                        {label: "Risk Management and Insurance", value: "Risk Management and Insurance"},
                        {label: "Russian", value: "Russian"},
                        {label: "Social Work", value: "Social Work"},		  
                        {label: "Sociology", value: "Sociology"},		 
                        {label: "Spanish", value: "Spanish"}, 
                        {label: "Speech / Language Pathology", value: "Speech / Language Pathology"}, 		 	 
                        {label: "Sport and Entertainment Management", value: "Sport and Entertainment Management"},	 
                        {label: "Statistics", value: "Statistics"},
                        {label: "Theatre", value: "Theatre"}, 	 
                        {label: "Tourism Management", value: "Tourism Management"},		
                        {label: "Undeclared", value: "Undeclared"}, 	 	 
                        {label: "Visual Communications", value: "Visual Communications"}, 
                        {label: "Women' and Gender Studies", value: "Women’ and Gender Studies"}
                    ];
                }
        }
    },

    Comments: {
        type: String,
        max: 300, 
        optional: true,
        label: 'Comments',
        //regEx: /^{1,10}\b/,
        autoform: {
            rows: 3
        }
    },

    //text service check box
    Disclaimer: {
        type: Boolean,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "boolean-checkbox",
            }
        },
        label: "Opt in for text service *standard text rates may apply"
    },
   
    //used to create time stamp for when students are added to the waitlist
    createdAt: {
        type: Date,
            autoform: {
                type: "hidden",
                label: false
            },
            autoValue: function() {
                if (this.isInsert) {
                    return new Date();
                } else if (this.isUpsert) {
                    return {$setOnInsert: new Date()};
                } 
            }
    },
  
    //used for finding updated time stamp after student moved positions on waitlist
    updatedAt: {
        type: Date,
            autoform: {
                type: "hidden",
                label: false
            },
            autoValue: function() {
                if (this.isUpdate) {
                    return new Date();
                }
            },
            denyInsert: true,
            optional: true
    },
   /* monthCreated: {
        type: number,
        autoform:{
            type: "hidden",
            label: false
        },
        autoValue: function(){
            var date = new Date();
            var dateMonth = date.getMonth()+1;
            return dateMonth;
        },
    },
    dayCreated: {
        type: number,
        autoform:{
            type: "hidden",
            label: false
        },
        autoValue: function(){
            var date = new Date();
            var dateDay = date.getDate();
            return dateDay;
        },
    },*/
    currentStatus: {
        type: String,
            autoform: {
                type: "hidden",
                label: false
            },
            autoValue: function() {
                if (this.isInsert) {
                    return "Waiting"
                }
            }
    },

    //used for keeping track of overall wait time on the main sign-in page
    waitTime: {
        type: Number,
        autoform: {
            type: "hidden",
            label: false
        },
        autoValue: function() {    
            if(this.isInsert) {
                return 15*(Students.find({currentStatus: "Waiting"}).count());          
            }   
      }
    }
});

//messages that appear if students fail to enter in correct information on the sign-in page
SimpleSchema.messages({
    required: "This field is required",
    "minString PhoneNumber": "Phone number must be 10 digits, please include area code.",
    "maxString PhoneNumber": "Phone number cannot exceed 10 digits.",
    "notUnique PhoneNumber": "This phone number already seems to be in our list. Make sure you are not already signed up for an appointment.",
    "minString USCID": "USC ID must be [min] characters",
    expectedString: "- is not allowed",
    "regEx PhoneNumber":
    [
        {
            msg: "It appears that the area code entered is not valid. Please enter a valid area code."
        }
    ],
    "regEx CurrentMajor":[
        { 
            msg: "Numbers are not allowed in this field"
        }
    ],
    "regEx IntendedMajor":[
        {
            msg: "Numbers are not allowed in this field"
        }
    ]
});

//attaches the schema to the collection created above
Students.attachSchema(StudentSchema);
