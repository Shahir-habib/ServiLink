const mongoose = require("mongoose");

const Services = require("./models/Product");

const MONGO_URI = "mongodb+srv://shahirhabib4:Shahir%4004@cluster0.j0yx5os.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const services = [
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png',
        title: 'QuickFix Plumbing Services',
        description: 'Expert plumbing solutions for residential and commercial needs.',
        category: 'plumbing',
        brand: 'Delhi',
        price: 500,
        salePrice: 450,
        totalStock: 5,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png',
        title: 'AquaFlow Plumbers',
        description: 'Reliable and affordable plumbing repairs and installations.',
        category: 'plumbing',
        brand: 'Mumbai',
        price: 600,
        salePrice: 550,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png',
        title: 'PipeMasters',
        description: 'Professional plumbing services with quick turnaround.',
        category: 'plumbing',
        brand: 'Chennai',
        price: 550,
        salePrice: 500,
        totalStock: 6,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png',
        title: 'Drainage Experts',
        description: 'Specialized in drainage and sewer line services.',
        category: 'plumbing',
        brand: 'Kolkata',
        price: 700,
        salePrice: 650,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2780/2780137.png',
        title: 'LeakFix Solutions',
        description: 'Expert leak detection and repair services.',
        category: 'plumbing',
        brand: 'Bangalore',
        price: 800,
        salePrice: 750,
        totalStock: 2,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
        title: 'Spark Electricians',
        description: 'Certified electricians for all your electrical needs.',
        category: 'electrical',
        brand: 'Kolkata',
        price: 700,
        salePrice: 650,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
        title: 'VoltFix Services',
        description: 'Expert electrical installations and repairs.',
        category: 'electrical',
        brand: 'Bengaluru',
        price: 750,
        salePrice: 700,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
        title: 'CurrentCare',
        description: 'Reliable electricians for residential projects.',
        category: 'electrical',
        brand: 'Delhi',
        price: 680,
        salePrice: 630,
        totalStock: 5,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
        title: 'PowerPro Electricians',
        description: 'Experienced electricians for commercial projects.',
        category: 'electrical',
        brand: 'Mumbai',
        price: 800,
        salePrice: 750,
        totalStock: 2,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
        title: 'WattWise Solutions',
        description: 'Energy-efficient electrical solutions for homes.',
        category: 'electrical',
        brand: 'Chennai',
        price: 720,
        salePrice: 670,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        title: 'Bright Minds Tutoring',
        description: 'Personalized tutoring for school and college students.',
        category: 'tutoring',
        brand: 'Mumbai',
        price: 400,
        salePrice: 350,
        totalStock: 10,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        title: 'LearnHub Tutors',
        description: 'Experienced tutors for various subjects and levels.',
        category: 'tutoring',
        brand: 'Chennai',
        price: 450,
        salePrice: 400,
        totalStock: 8,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        title: 'EduPro Coaching',
        description: 'Comprehensive tutoring services for competitive exams.',
        category: 'tutoring',
        brand: 'Kolkata',
        price: 500,
        salePrice: 450,
        totalStock: 7,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        title: 'SkillBuilders Tutoring',
        description: 'Expert tutors for skill development and academic success.',
        category: 'tutoring',
        brand: 'Delhi',
        price: 550,
        salePrice: 500,
        totalStock: 6,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
        title: 'TutorConnect',
        description: 'Connecting students with qualified tutors for personalized learning.',
        category: 'tutoring',
        brand: 'Bangalore',
        price: 600,
        salePrice: 550,
        totalStock: 5,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/4783/4783690.png',
        title: 'Sparkle Cleaners',
        description: 'Professional home cleaning services for a spotless home.',
        category: 'cleaning',
        brand: 'Bengaluru',
        price: 600,
        salePrice: 550,
        totalStock: 6,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/4783/4783690.png',
        title: 'FreshNest Cleaning',
        description: 'Eco-friendly cleaning solutions for your home.',
        category: 'cleaning',
        brand: 'Delhi',
        price: 650,
        salePrice: 600,
        totalStock: 5,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/4783/4783690.png',
        title: 'CleanSweep Services',
        description: 'Affordable and reliable home cleaning professionals.',
        category: 'cleaning',
        brand: 'Mumbai',
        price: 620,
        salePrice: 570,
        totalStock: 7,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/4783/4783690.png',
        title: 'ShineBright Cleaners',
        description: 'Expert cleaning services for homes and offices.',
        category: 'cleaning',
        brand: 'Chennai',
        price: 700,
        salePrice: 650,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/4783/4783690.png',
        title: 'PureClean Services',
        description: 'Deep cleaning services for a healthier living space.',
        category: 'cleaning',
        brand: 'Kolkata',
        price: 750,
        salePrice: 700,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        title: 'FixIt Appliances',
        description: 'Expert repair services for all household appliances.',
        category: 'appliancerepair',
        brand: 'Chennai',
        price: 800,
        salePrice: 750,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        title: 'Appliance Doctors',
        description: 'Quick and reliable appliance repair solutions.',
        category: 'appliancerepair',
        brand: 'Kolkata',
        price: 850,
        salePrice: 800,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        title: 'GadgetFix Services',
        description: 'Certified technicians for appliance maintenance.',
        category: 'appliancerepair',
        brand: 'Delhi',
        price: 820,
        salePrice: 770,
        totalStock: 5,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        title: 'HomeTech Repair',
        description: 'Affordable appliance repair services for homes.',
        category: 'appliancerepair',
        brand: 'Mumbai', 
        price: 900,
        salePrice: 850,
        totalStock: 2,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        title: 'QuickFix Appliance Repair',
        description: 'Fast and efficient appliance repair services.',
        category: 'appliancerepair',
        brand: 'Bangalore',
        price: 950,
        salePrice: 900,
        totalStock: 1,
        averageReview: 0
      }, {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'GlowUp Salon',
        description: 'Premium beauty services at your doorstep.',
        category: 'beautywellness',
        brand: 'Mumbai',
        price: 900,
        salePrice: 850,
        totalStock: 6,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Beauty Bliss',
        description: 'Expert beauty treatments for all occasions.',
        category: 'beautywellness',
        brand: 'Delhi',
        price: 950,
        salePrice: 900,
        totalStock: 5,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Radiant You Salon',
        description: 'Personalized beauty services for every skin type.',
        category: 'beautywellness',
        brand: 'Chennai',
        price: 1000,
        salePrice: 950,
        totalStock: 4,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Glamour Touch Salon',
        description: 'Luxury beauty services for a glamorous look.',
        category: 'beautywellness',
        brand: 'Kolkata',
        price: 1100,
        salePrice: 1050,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Serenity Spa & Salon',
        description: 'Relaxing spa and beauty treatments for rejuvenation.',
        category: 'beautywellness',
        brand: 'Bangalore',
        price: 1200,
        salePrice: 1150,
        totalStock: 2,
        averageReview: 0
      }, {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Relax & Glow Spa',
        description: 'Rejuvenating spa treatments for ultimate relaxation.',
        category: 'beautywellness',
        brand: 'Chennai',
        price: 950,
        salePrice: 900,
        totalStock: 5,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/1253/1253745.png',
        title: 'Urban Chic Salon',
        description: 'Trendy haircuts and styling services.',
        category: 'beautywellness',
        brand: 'Bengaluru',
        price: 850,
        salePrice: 800,
        totalStock: 4,
        averageReview: 0
      }
      , {
        image: 'https://cdn-icons-png.flaticon.com/512/3014/3014608.png',
        title: 'SafeHome Pest Control',
        description: 'Effective pest control solutions for a pest-free home.',
        category: 'pestcontrol',
        brand: 'Delhi',
        price: 700,
        salePrice: 650,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3014/3014608.png',
        title: 'Bug Busters',
        description: 'Professional pest extermination services.',
        category: 'pestcontrol',
        brand: 'Mumbai',
        price: 750,
        salePrice: 700,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3014/3014608.png',
        title: 'PestAway Services',
        description: 'Comprehensive pest management solutions.',
        category: 'pestcontrol',
        brand: 'Chennai',
        price: 720,
        salePrice: 680,
        totalStock: 5,
        averageReview: 0
      }
      , {
        image: 'https://cdn-icons-png.flaticon.com/512/3466/3466981.png',
        title: 'WoodCraft Carpentry',
        description: 'Custom woodwork and furniture making.',
        category: 'carpentry',
        brand: 'Kolkata',
        price: 800,
        salePrice: 750,
        totalStock: 4,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3466/3466981.png',
        title: 'Timber Touch',
        description: 'Expert carpentry services for home and office.',
        category: 'carpentry',
        brand: 'Bengaluru',
        price: 850,
        salePrice: 800,
        totalStock: 3,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3466/3466981.png',
        title: 'Craftsmen Carpentry',
        description: 'Quality woodwork with attention to detail.',
        category: 'carpentry',
        brand: 'Delhi',
        price: 820,
        salePrice: 770,
        totalStock: 5,
        averageReview: 0
      }
      ,
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3466/3466981.png',
        title: 'Nail & Hammer Carpentry',
        description: 'Affordable carpentry services for all needs.',
        category: 'carpentry',
        brand: 'Mumbai',
        price: 900,
        salePrice: 850,
        totalStock: 2,
        averageReview: 0
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3466/3466981.png',
        title: 'WoodWorks Carpentry',
        description: 'Custom furniture and woodwork solutions.',
        category: 'carpentry',
        brand: 'Chennai',
        price: 950,
        salePrice: 900,
        totalStock: 1,
        averageReview: 0
      }
    ];

  
(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    // Insert multiple service documents
    const insertedServices = await Services.insertMany(services);
    console.log(`${insertedServices.length} services inserted successfully.`);

  } catch (error) {
    console.error('Error inserting services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
})();
