var company = ["RW&CO", "fashion associate"];
var work = ["Dollarama", "two years", "Cashier and Shelve stocking"]
var ps = ["excellent people skills", "customer loyalty", "the ability to adapt to change seamlessly"]
var trait = ["proactive and enthusiastic", /*[...]projects, I apply proven..., ..., ...*/"teamwork skills","creative thinking","analytical insight"]
company[0] = prompt("Name of company you're applying for: ");
company[1] = prompt("What position you're applying for: ");
work[0] = prompt("Where did you previously work: ");
work[1] = prompt("And for how long: ");
work[2] = prompt("What position did you work for: ");
for (var i = 1; i < 4; i++) {
    ps[i - 1] = prompt("Professional skill #" + i + " that you got from your job: ");
}
trait[0] = prompt("How you're viewed as by your peers and professors: ");
for (var i = 1; i < 4; i++) {
    trait[i] = prompt("Trait #" + i + " that you've proven on academic, ec, or professional projects: ");
}


console.log("Hayden Hoffman\n190 Forum Drive\nMississauga, ON, L4Z 3Y2\n(289)981-3238\nhaydenhoffman@gmail.com\n\n" + company[0] + "\n\nDear Hiring Manager, \n\nThank you for the opportunity to apply for the " + company[1] + " role at your company. After reviewing your job description, it is clear that you are looking for a candidate that is extremely familiar with the responsibilities associated with the role, and can perform them confidently. Given these requirements, I am certain that I have the necessary skills to successfully do the job adeptly and perform above expectations.\n\nI am a proactive college student (BEsc in Engineering) currently attending The University of Western Ontario. During the course of my academic career, I also managed to accrue nearly " + work[1] + " of work experience. I had the privilege of working for " + work[0] + " as a " + work[2] + " in my free time, where I learned valuable professional skills such as " +  ps[0] + ", " + ps[1] + " and " + ps[2] + ". In both my academic and professional life, I have been consistently praised as " + trait[0] + " by my professors and peers. Whether working on academic, extracurricular, or professional projects, I apply proven " + trait[1] + ", " + trait[2] + " and " + trait[3] + " which I hope to leverage into the " + company[1] + " role at " + company[0] + ". \n\nAfter reviewing my resume, I hope you will agree that I am the type of competent and competitive candidate you are looking for. I look forward to elaborating on how my specific skills and abilities will benefit your organization. Please contact me at (289)981-3238 or via email at haydenhoffman@gmail.com to arrange for a convenient meeting time. \n\nThank you for your consideration, and I look forward to hearing from you soon.\n\nSincerely,\nHayden Hoffman.");