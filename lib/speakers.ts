export interface Speaker {
  id: string;
  name: string;
  talkTitle: string;
  title: string;
  bio: string;
  youtubeUrl: string;
  videoId: string;
  views?: string;
  tedProfileUrl?: string;
}

export const speakers: Speaker[] = [
  {
    id: "ravi-kurani",
    name: "Ravi Kurani",
    talkTitle: "How this ex-pool boy is changing water",
    title: "CEO of Sutro",
    bio: "Ravi Kurani is an entrepreneur with a background in sustainable business. He founded Sutro, a startup creating a platform around water monitoring and evaluation. Ravi holds engineering and MBA degrees, and his work sits at the intersection of hardware, software, and environmental sustainability — making water quality data accessible and actionable for communities around the world.",
    youtubeUrl: "https://www.youtube.com/watch?v=CwuJnr-iWcY",
    videoId: "CwuJnr-iWcY",
    views: "13K",
  },
  {
    id: "larry-rosen",
    name: "Larry C. Rosen",
    talkTitle: "The Secret to Understanding Humans",
    title: "Mediator, Author & Speaker",
    bio: "Larry C. Rosen is the founder of Through Understanding, a mediation law practice. A UCLA Law School graduate, he lectures on motivation and empathy and is the author of the novel The Peacemaker. His work explores the fundamental drivers of human behavior, arguing that while our actions are complex, our motivations are simple and universally shared.",
    youtubeUrl: "https://www.youtube.com/watch?v=RSlc9IxdBw8",
    videoId: "RSlc9IxdBw8",
    views: "1.7M",
  },
  {
    id: "marla-mervis-hartmann",
    name: "Marla Mervis-Hartmann",
    talkTitle: "The Secret Ingredient to Feeling Good in your Body",
    title: "Health Specialist & Coach",
    bio: "Marla Mervis-Hartmann is the creator of the Love Your Body Love Yourself program. She is a professional coach and Living Light Reiki Master who helps women transform their relationship with their bodies and develop lasting confidence through holistic wellness practices.",
    youtubeUrl: "https://www.youtube.com/watch?v=nEVjlT9B6dU",
    videoId: "nEVjlT9B6dU",
    views: "277K",
  },
  {
    id: "neil-brown",
    name: "Neil D Brown",
    talkTitle: "Turning Parent-Teen Stress Into Parent-Teen Success",
    title: "Family Therapist, Author & Podcast Host",
    bio: "Neil D. Brown, LCSW, is a family therapist, author, and podcast host with over 30 years of experience working with families and adolescents. His work focuses on understanding family dynamics and helping individuals navigate complex relationships with compassion and clarity.",
    youtubeUrl: "https://www.youtube.com/watch?v=VzflpW91yMg",
    videoId: "VzflpW91yMg",
    views: "79K",
  },
  {
    id: "kathy-gruver",
    name: "Kathy Gruver",
    talkTitle: "Trapeze, Travel and Pink Slips: Little Lessons for a Bigger Life",
    title: "PhD, Author & Motivational Speaker",
    bio: "Dr. Kathy Gruver holds a PhD in Natural Health and has authored five books including the award-winning Conquer Your Stress with Mind/Body Techniques and Body/Mind Therapies for the Bodyworker. She is a renowned motivational speaker on the intersection of health, mindfulness, and personal empowerment.",
    youtubeUrl: "https://www.youtube.com/watch?v=abMj0hCGEic",
    videoId: "abMj0hCGEic",
    views: "77K",
  },
  {
    id: "robbie-tripp",
    name: "Robbie Tripp",
    talkTitle: "Why Millennial Narcissists Are Changing The World",
    title: "Author of Create Rebellion",
    bio: "Robbie Tripp is the author of Create Rebellion, an abstract manifesto for disruptive creativity. Based in San Francisco, he challenges the narrative around millennials, making the case that the generation's so-called narcissism is actually driving meaningful change in the world.",
    youtubeUrl: "https://www.youtube.com/watch?v=RXs_X3RAxPc",
    videoId: "RXs_X3RAxPc",
    views: "36K",
  },
  {
    id: "julie-gordon-white",
    name: "Julie Gordon-White",
    talkTitle: "Why Women Entrepreneurs Need to Raise Girl Entrepreneurs",
    title: "CEO, BlueKey Mergers & Acquisitions",
    bio: "Julie Gordon-White is an award-winning entrepreneur and bestselling author. She is the Founder and CEO of BlueKey Mergers & Acquisitions and The WELL for Women Entrepreneurs. Her work focuses on empowering the next generation of women leaders through entrepreneurship and mentorship.",
    youtubeUrl: "https://www.youtube.com/watch?v=XXN7kKjOEOA",
    videoId: "XXN7kKjOEOA",
    views: "6K",
  },
  {
    id: "ahad-anwar",
    name: "Ahad Anwar",
    talkTitle: "Life On The Other Side of Fear",
    title: "Exchange Student & Cultural Ambassador",
    bio: "Ahad Anwar is a US Department of State sponsored high school foreign exchange student from Lahore, Pakistan. At just 17 years old, he messaged the TEDx Salinas organizer saying he wanted to share his story. His journey bridges cultures and challenges stereotypes, offering a powerful perspective on identity, belonging, and the courage to cross borders.",
    youtubeUrl: "https://www.youtube.com/watch?v=SpT0sMzi1vk",
    videoId: "SpT0sMzi1vk",
    views: "1.5K",
  },
  {
    id: "candra-canning",
    name: "Candra Canning",
    talkTitle: "Discover Backyard AWE!",
    title: "CEO, Live Bright Now",
    bio: "Candra Canning is a culture coach for Fortune 500 companies and the President and Founder of Live Bright Now. She works with high-performing teams as an organizational development consultant, helping organizations build thriving workplace cultures that bring out the best in people.",
    youtubeUrl: "https://www.youtube.com/watch?v=Jk0z0KJhxPE",
    videoId: "Jk0z0KJhxPE",
    views: "739",
  },
  {
    id: "david-westrick",
    name: "David Westrick",
    talkTitle: "Serving and Loving Mankind — A Police Chief's Perspective",
    title: "Chief of Police, Hollister Police Department",
    bio: "David Westrick has served as Chief of Police at the Hollister Police Department since 2013. His career spans roles as journalist, detective, gang officer, and various police leadership positions. He shares his perspective on community policing and the importance of serving and loving the communities that law enforcement officers are sworn to protect.",
    youtubeUrl: "https://www.youtube.com/watch?v=9h7Xh3FyODE",
    videoId: "9h7Xh3FyODE",
    views: "2.7K",
  },
  {
    id: "malcolm-burt",
    name: "Malcolm Burt",
    talkTitle: "What's wrong with reality?",
    title: "PhD Candidate, Virtual Reality Researcher",
    bio: "Malcolm Burt is a PhD candidate researching virtual reality amusement experiences. He previously completed research on rollercoasters and created the documentary Signature Attraction. His work challenges our assumptions about reality and invites us to question the frameworks through which we interpret the world around us.",
    youtubeUrl: "https://www.youtube.com/watch?v=HToeyaKnQ4g",
    videoId: "HToeyaKnQ4g",
    views: "3K",
  },
  {
    id: "shrina-kurani",
    name: "Shrina Kurani",
    talkTitle: "How your dinner could save the world",
    title: "Engineer & Sustainability Scientist",
    bio: "Shrina Kurani is an engineer and sustainability scientist with four years of international experience in research, consultancy, and social entrepreneurship. She explores the intersection of food systems and sustainability, making the case that what we choose to eat has the power to drive meaningful environmental change.",
    youtubeUrl: "https://www.youtube.com/watch?v=8AChwiToPgg",
    videoId: "8AChwiToPgg",
    views: "2.7K",
  },
];

export function getSpeakerById(id: string): Speaker | undefined {
  return speakers.find((s) => s.id === id);
}

export const eventInfo = {
  name: "TEDx Salinas",
  tagline: "Ideas Worth Spreading",
  date: "February 25, 2017",
  venue: "Santa Lucia Ballroom",
  address: "940 North Main Street, Salinas, CA 93906",
  description:
    "Salinas is a place full of rich history, agriculture, literature, and incredible community members. What the rest of the world sees though, is its struggles with poverty, homelessness, and gang violence. TED and TEDx are known for their ability to bring together communities of incredible game changers and global thinkers, and this is something that Salinas truly needs to show the world that it is so much more than its negative stereotype.",
};
