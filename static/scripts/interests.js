/*
 * Find a Bo
 * interests.js
 * Dynamically loads interests in form fields on various pages
 * Copyright (C) 2018  Sebastian Coates

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

var INTERESTS = [
"ACLU at Tufts",
"Action for Sexual Assault Prevention",
"Active Minds",
"Adventist Christian Fellowship",
"African Student Organization",
"Air Force ROTC",
"ALLIES",
"Alpha Omicron Pi",
"Alpha Phi",
"ATO of Massachusetts",
"Amalgamates",
"American Chemical Society",
"American Institute of Chemical Engineers",
"American Society for Biochemistry and Molecular Biology",
"American Society of Civil Engineers",
"American Society of Mechanical Engineers",
"Amnesty International",
"Animal Aid (sub-group of LCS)",
"Animal Welfare Club",
"Anime Brigade",
"Another Option",
"Applejam",
"Armenian Club",
"Army ROTC",
"Art History Society",
"Asian Student Coalition",
"Association of Latin American Students",
"Association of Multiracial People",
"Association of South Asians",
"Ballroom",
"Bare Bodkin",
"Baseball: Club Sport",
"Baseball Analysis at Tufts",
"Banging Everything at Tufts (BEATS)",
"Beelzebubs A Capella",
"Best Buddies (sub-group of LCS)",
"Bhangra (sub-group of TASA)",
"Big Brothers, Big Sisters (sub-group of LCS)",
"Biomedical Engineering Society",
"Black Student Union",
"Blackout Step Team",
"Blood Drive (sub-group of LCS)",
"Boys and Girls Club (sub-group of LCS)",
"Buddist Sangha at Tufts",
"Burlesque Troupe",
"C. Stacey Woods Programming Board",
"Cancer Outreach (sub-group of LCS)",
"Cape Verdean Students Association",
"Caribbean Student Organization ",
"Catholic Community at Tufts",
"Chabad",
"Cheap Sox Improv",
"Chi Omega",
"China Care",
"Chinese Students Association",
"Chorale",
"COCOA Dancers (Children of Cultures of Africa)",
"Computer Science Exchange",
"Concert Board (sub-group of TUSC)",
"Consulting Collective",
"COFFEE (Community of Faith Exploration and Engagement)",
"Cooperation and Innovation in Citizenship (CIVIC)",
"Country Swing Dance",
"Crafts Center",
"Culinary Society",
"Currents Magazine",
"Cycling: Club Sport (Coed)",
"Debate Society",
"Delta Sigma Theta",
"Delta Tau Delta",
"Delta Upsilon",
"Democrats",
"DREAM (sub-group of LCS)",
"Ears for Peers",
"Eco Reps (through Sustainability Office)",
"Economics Society",
"Effective Altruism",
"Elderly Outreach (sub-group of LCS)",
"Elections Commission (ECOM)",
"Electric Racing",
"Enchanted A Capella",
"Energy Group",
"Engineers Without Borders",
"Engineering Student Council (through EN dept)",
"Enigma: Tufts Independent Data Journal",
"Entertainment Board (sub-group of TUSC)",
"Entrepreneurial Society",
"Envy Step Team",
"Equestrian: Club Sport (Coed)",
"ESL (sub-group of LCS)",
"Essence European Horizons",
"European Student’s Association",
"Fencing: Club Sport (Men)",
"Film Series (sub-group of TUSC)",
"Financial Group",
"First Generation Students Council",
"Food Rescue (sub-group of LCS)",
"French Society",
"Freshman Class Council (sub-group of TUSC)",
"Friends of Israel",
"Frisbee (Men)",
"Frisbee (Women)",
"Full Sound Vocal",
"Gaming Hub",
"Garba (sub-group of TASA)",
"Generation Citizen",
"Geological Society",
"German Club",
"Generation Citizen (sub-group of LCS)",
"Girl Scouts (sub-group of LCS)",
"Giving Camp (through Chaplaincy)",
"Global China Connection",
"Globe Med",
"Habitat for Humanity (sub-group of LCS)",
"Halloween on the Hill (sub-group of LCS)",
"Hemispheres",
"Her Campus",
"Hillel",
"Hindu Students Council",
"Historical Review",
"History Society",
"Hong Kong Students Association",
"Human Factors and Ergonomics Society",
"Humanist Community at Tufts University",
"Hunger Project (sub-group of LCS)",
"HYPE Mime Troupe",
"Ice Hockey: Club Sport",
"iGem at Tufts",
"Imaginet",
"Institute for Political Citizenship (through Tisch)",
"Institute of Electrical and Electronics Engineers (IEEE)",
"Intercultural Practice Group (ICP)",
"Inter Fraternity Council (IFC) (sub-group of IGC)",
"Inter Greek Council (IGC)",
"International Club (I-Club)",
"Italian Club",
"J Street U",
"Jackson Jills",
"Japanese Culture Club (JCC)",
"Judicial Advocates (through Student Affairs)",
"Judo: Club Sport",
"Jumbo Code",
"Jumbo Jugglers",
"JumboCast",
"Junior Achievement (sub-group of LCS)",
"Junior Class Council (sub-group of TUSC)",
"Kappa Alpha Psi",
"Kappa Alpha Theta",
"Kidney Disease Screening and Awareness Program",
"Kids’ Day (sub-group of LCS)",
"Kids to College (sub-group of LCS)",
"Korean Student Association (KSA)",
"La Salsa",
"Labor Coalition",
"Lacrosse: Club Sport (Women)",
"Lambda Pi Chi",
"Leonard Carmichael Society (LCS)",
"Let’s Get Ready (sub-group of LCS)",
"Lord Barnum’s Players",
"MAKE",
"Major: Undecided",
"Math Society",
"Marathon Club",
"Media Advocacy Board (MAB)",
"Melisma Magazine",
"Middle Eastern Dance",
"Minority Association of Pre-Health Students (MAPS)",
"Mock Trial",
"Model United Nations",
"Mountain Club (TMC)",
"Muslim Students Association",
"National Society of Black Engineers (NSBE)",
"Navy ROTC",
"New Economy",
"New Initiative for Middle East Peace (NIMEP)",
"Nondenominational Christian Fellowship",
"Observer",
"Off Hill Council (through Student Affairs)",
"Out in Science, Technology, Engineering and Mathematics (OSTEM)",
"Pan-Asian Council",
"Panhellenic Council (sub-group of IGC)",
"Parnassus (Creative Writing Club)",
"Partners in Health Engage (PIH Engage)",
"Peace Action at Tufts",
"Peace Games (sub-group of LCS)",
"Peer Health Exchange (sub-group of LCS)",
"Pens, Paint and Pretzels (3Ps)",
"Pep Band",
"Pi Rho Omega",
"Play Pals (sub-group of LCS)",
"Podcast Network",
"Poverty and Power Research Initiative (PPRI) (through IGL)",
"Pre-Dental Society",
"Pre-Medical Society Pre-Veterinary Society Primary Care Progress",
"Project Linus (sub-group of LCS)",
"Protestant Students Association",
"Progressive Alliance",
"Psychology Society",
"Public Harmony",
"Public Health at Tufts",
"Public Journal Pulse Dance Team",
"Pulse",
"Queer Straight Association (QSA)",
"Quest Scholars",
"Quidditch Team",
"Relay for Life",
"Real Estate Society Republicans",
"Returning Students Organization",
"Robotics Club",
"Robotic Sailing Club",
"Rock Climbing: Club Sport",
"Rugby: Club Sport (Men)",
"Rugby: Club Sport (Women)",
"Russian and Slavic Student Association",
"SAGE (through Women’s Center)",
"Sarabande Senior Class Council (sub-group of TUSC)",
"S-Factor",
"SEDS: Students for the Exploration and Development of Space",
"Sharewood",
"Shelters (sub-group of LCS)",
"Shir Appeal",
"Shotokan Karate: Club Sport",
"Singapore Students Association",
"Sino-US Relations Group Engagement (SURGE)",
"Skiing: Club Sport (Coed)",
"Soccer: Club Sport (Mens)",
"Soccer: Club Sport (Womens)",
"Society of Latino Engineers and Scientists",
"Society of Women Engineers",
"Sophomore Class Council (sub-group of TUSC)",
"South Asian Perspectives and Conversation",
"SMFA at Tufts Campus",
"*SMFA Student Goverment",
"*SMFA Adventure Club",
"*SMFA Performance Group",
"*SMFA Yoga Club Special Friends (sub-group of LCS)",
"Special Olympics (sub-group of LCS)",
"SOC",
"Spoken Word Alliance at Tufts",
"Stand Up Comedy Collective",
"Strong Women Strong Girls (sub-group of LCS)",
"Student Garden",
"Students for Justice in Palestine",
"Students for NARAL",
"sQ!",
"Students for Environmental Awareness",
"Tour Guiding",
"Table Tennis: Club Sport (Coed)",
"Tabletop Gaming Club",
"Tae Kwon Do: Club Sport (Coed)",
"Taiwanese Association of Students at Tufts",
"Tamasha (sub-group of TASA)",
"Tap Ensemble Tau Beta Pi",
"TCU Judiciary (TCU-J)",
"TCU Senate",
"Teach-in-CORES",
"Team-Q (through LGBT Center)",
"TEDx Tufts",
"Tennis: Club Sport (Coed)",
"TFL Comedy",
"The Institute (sub-group of TUTV)",
"Thai Student Association",
"Theta Chi",
"Timmy Global Health Foundation ",
"Torn Ticket II ",
"Trading Fund",
"Traveling Treasure Trunk (sub-group of LCS)",
"Tufts Art History (TAH)– Graduate",
"Tufts Bikes",
"Tufts Daily",
"Tufts Dance Collective  (TDC)",
"Tufts Emergency Medical Services (TEMS) (through TUPD)",
"Tufts Idea Exchange (through IGL)",
"Tufts International Development (TID)",
"Tufts Student Resources (TSR)",
"Tufts University Social Collective (TUSC)",
"TuftScope Journal of Health, Ethics, and Policy",
"TURBO",
"Tutoring (sub-group of LCS)",
"TUTV",
"Undergraduate Research Journal",
"Unitarian Universalists",
"United for Immigrant Justice",
"Urban Policy, Planning and Prosperity (UP3)",
"Vietnamese Students Club",
"Volleyball: Club Sport (Men)",
"Volleyball: Club Sport (Women)",
"Water Polo: Club Sport (Coed)",
"Wind Ensemble",
"WMFO",
"Women in Computer Science (WiCS)",
"WuZee (Chinese Dance Group)",
"Women Entrepreneurs at Tufts (WE@T)",
"Zamboni",
"Zeta Beta Tau Zeta Psi",
"180 Degrees Consulting Group"]

function load_interests() {
        let select = $("#interest-select")
        select.empty()
        select.append("<option selected disabled value=''>-- Select an Interest --</option>")
        for (let i = 0; i < INTERESTS.length; i++) {
                select.append("<option>" + INTERESTS[i] + "</option>")
        }
}
