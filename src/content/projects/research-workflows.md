---
title: "Research workflow"
slug: research-workflows
subtitle: "A research workflow tool for researcher challenges, from a group class project to independent research."
category: research
meta: "Group concept and ongoing independent research"
caption: "with Shreyansh, Lysandros, and Pranav at Leiden University | 2024, then independent research"
summary: "For a group project at Leiden University, we developed collate, a working prototype and poster for organising academic research. I am now extending it through independent action research, starting with a descriptive survey of how researchers organise, monitor and seek support."
role: "team member for collate and researcher responsible for the ongoing survey"
collaborators:
  - Shreyansh
  - Lysandros
  - Pranav
team:
  - Shreyansh
  - Lysandros
  - Pranav
tools: "conceptual mental models, cognitive load theory, web prototype, literature review, anonymised Typeform survey, action research"
images:
  - /images/research-workflows/collate-poster-full-2000.webp
  - /images/research-workflows/collate-landing-screen-1200.webp
  - /images/research-workflows/collate-document-screen-1200.webp
  - /images/research-workflows/collate-chat-feedback-1200.webp
  - /images/research-workflows/collate-metrics-dashboard-1200.webp
  - /images/research-workflows/research-survey-questions-1200.webp
  - /images/research-workflows/average-research-difficulties.svg
  - /images/research-workflows/average-feature-importance.svg
  - /images/research-workflows/monitoring-progress-challenges.svg
  - /images/research-workflows/preferred-research-guidance.svg
image_alt:
  - "Group poster showing proposed collate features, the Explore, Engage and Reflect journey, prototype screens and future work."
  - "collate main screen with a project selector and file upload panel on the left, and a document selector, summary section and PDF viewer on the right."
  - "collate Documents tab showing a generated summary of a Learning Analytics lecture next to the PDF viewer."
  - "collate Chat tab showing the question What is human-centred learning, an AI answer, thumbs feedback buttons and a table of referenced files."
  - "collate Metrics tab for a project called Edtech showing counts of projects, papers read and papers uploaded, and a progress bar at 60 percent."
  - "Typeform editor listing the survey questions on the left and the survey start screen on the right."
  - "Bar chart of average difficulty positions for seven research difficulties, from collaborating with others at 5.50 to finding the right papers at 2.50."
  - "Bar chart of average importance positions for five features, from progress tracking and metrics at 3.88 to automatic summarisation at 2.13."
  - "Bar chart of challenges when monitoring research progress among nine respondents, led by overwhelming amount of information at five."
  - "Bar chart of preferred guidance formats among nine respondents, with personalised AI advice, step-by-step guides and short tutorials at five each."
links: []
publish: true
---

This page covers two projects, and the second grows out of the first. The first is collate, a group class project at Leiden University in 2024. The second is my own ongoing research, which began with collate's open questions and is still in progress. The page follows that order, so the group work comes first and my independent work starts under the second heading.

## Collate

<p class="part-sub">A group class project</p>

### The problem

For an Educational Technologies course, Shreyansh, Lysandros, Pranav and I asked how a tool could help researchers with the parts of their work that tend to scatter. Those parts were finding relevant papers, organising and synthesising materials, tracking progress, and getting guidance from the literature review to the final paper. Our question was how we might streamline the research process for academics, students and independent researchers while addressing their main pain points. Collate began as an attempt to address the challenges student researchers face. As we worked on it, we realised that supervisors and other academic stakeholders face numerous challenges of their own.

### Learning theories behind the design

We grounded the design in learning theory. Cognitive Load Theory (Sweller, 1988) shaped how we thought about reducing the effort of handling many papers. Constructivist and experiential theories (Piaget, 1969; Vygotsky, 1978) pointed us towards interactivity and active engagement. Self-regulated and situated learning (Zimmerman, 1989; Lave and Wenger, 1991) supported features such as progress tracking and guidance. We also used conceptual mental models, which are representations of how people understand a system.

### Explore, Engage and Reflect

The concept became three linked modes. In Explore, a researcher selects a project, uploads papers and reads a generated summary. In Engage, they ask questions about the papers, check the references behind each answer and give feedback on the response. In Reflect, they look at progress metrics and set project preferences.

### The poster and the tool

The required outcome for the course was a poster, which is shown at the top of this page. It sets out the key features, the three modes, a persona, the conceptual tooling and future work. Beyond the poster, we developed a working web tool, and the screens below come from it.

<figure class="inline-figure">
  <img src="/images/research-workflows/collate-landing-screen-1200.webp" alt="collate main screen with a project selector and file upload panel on the left, and a document selector, summary section and PDF viewer on the right." width="1200" height="594" loading="lazy" />
  <figcaption>The collate main screen, where a project is chosen and papers are uploaded</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/research-workflows/collate-document-screen-1200.webp" alt="collate Documents tab showing a generated summary of a Learning Analytics lecture next to the PDF viewer." width="1200" height="828" loading="lazy" />
  <figcaption>The Documents tab shows a generated summary beside the paper (a name in the summary is blacked out)</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/research-workflows/collate-chat-feedback-1200.webp" alt="collate Chat tab showing the question What is human-centred learning, an AI answer, thumbs feedback buttons and a table of referenced files." width="1200" height="834" loading="lazy" />
  <figcaption>The Chat tab answers a question, lists the files it drew on and lets the user give feedback</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/research-workflows/collate-metrics-dashboard-1200.webp" alt="collate Metrics tab for a project called Edtech showing counts of projects, papers read and papers uploaded, and a progress bar at 60 percent." width="1200" height="853" loading="lazy" />
  <figcaption>The Metrics tab shows project counts and a progress bar</figcaption>
</figure>

### What we did not evaluate

We did not user-test or evaluate collate. We had planned to compare reading with and without the tool, looking at uptake, reading speed, papers per day and tiredness or overwhelm, but that comparison was not completed. The poster and tool therefore show the concept and what we built, and they say nothing yet about whether it helps researchers.

## Research workflow

<p class="part-sub">Ongoing research</p>

### Why a survey

Collate grew out of student researchers' challenges, and working on it showed us that supervisors and other academic stakeholders have many of their own. I wanted to look at all of these groups together instead of isolating any of them, and I wanted evidence about how they actually work before building further. This part is my own action research. It aims to ground the design in evidence and to develop it through cycles of identifying a problem, trying a solution and gathering feedback from the people it is for.

The literature already points to real difficulties. In one study, 66% of La Salle University student researchers struggled to complete their research on time (Bocar, 2009). In Turkey, 62% of postgraduate students named methodology issues as their main challenge (Akyurek and Afacan, 2018). Nearly 70% of researchers had difficulty balancing academic workload and personal commitments (Kulkarni, 2021). A survey let me see whether a small group of researchers I could reach described similar problems.

### Competitor analysis

I compared Zotero, Mendeley, Notion and Khanmigo, which is Khan Academy's AI tutor. Zotero and Mendeley are strong on citations but do little for the wider research workflow. Notion is flexible but needs manual setup, and Khanmigo supports learning more than research. Two gaps stood out. None of the four offers structured advisor feedback integration, and progress tracking exists only as something a user sets up by hand in Notion.

### Research question and objectives

My question is how we might streamline the research process for academics, students and independent researchers while addressing their key pain points. The objectives are to discover how researchers organise, analyse and track their materials, to identify pain points in academic research workflows, and to find which features would improve efficiency and encourage successful outcomes.

### Methods, done and planned

I am using a mixed-methods approach. Two parts are done and the rest are planned.

Done so far are the literature review, the competitor analysis and the survey. The survey is described below, and the personas and journey maps were built from its responses.

Still planned are semi-structured interviews to understand the reasons behind the main pain points, focus groups with researchers from different fields to check the findings, and an ethnographic study of students in thesis advisor meetings or research courses. I will also build a low-fidelity prototype from the survey insights and test it with users. A wider review of global best practice, including Khanmigo, is also planned. None of these planned steps has happened yet.

### The survey

I made a short anonymised Typeform survey, chosen for its friendly interface and casual but purposeful tone. It asked how people organise papers, what makes research difficult, how important five features are, how they track progress, what makes monitoring progress hard, and which guidance formats they prefer. The target group was master's and PhD students, faculty and independent researchers who were actively doing research or writing academic papers.

I recruited through snowball sampling, which included Leiden University students, and offered no incentives. Nine people responded between November 2024 and May 2025. They were two graduate students, two undergraduates, two postgraduates, one educator and two who chose other, working or studying in fields such as medicine, finance, classics, data science and electrical engineering. I first analysed seven responses, and two more have since come in. Eight of the nine answered both ranking questions.

<figure class="inline-figure">
  <img src="/images/research-workflows/research-survey-questions-1200.webp" alt="Typeform editor listing the survey questions on the left and the survey start screen on the right." width="1200" height="1335" loading="lazy" />
  <figcaption>The survey in the Typeform editor, with the question list and start screen</figcaption>
</figure>

### Findings

Five of the nine respondents kept papers as computer files, and two said they had no system. For tracking progress, four said they had no systematic way, two used spreadsheets, one relied on supervisor meetings and one kept a manual journal. One left this blank.

The difficulty question asked people to order seven items from most to least difficult, where 7 was most difficult. Collaborating with others had the highest mean position at 5.50. Spending too much time reading and understanding complex research were both at 4.50. Finding the right papers was lowest at 2.50. These are positions in an ordered list and not conventional ratings, and they come from eight answers.

<figure class="inline-figure">
  <img src="/images/research-workflows/average-research-difficulties.svg" alt="Bar chart of average difficulty positions for seven research difficulties, from collaborating with others at 5.50 to finding the right papers at 2.50." width="600" height="440" loading="lazy" />
  <figcaption>Average position of research difficulties from eight answers, where 7 is most difficult</figcaption>
</figure>

The feature question worked the same way, with 5 as most important. Progress tracking and metrics had a mean position of 3.88 and personalised research guidance had 3.75. Visual connections between papers scored 3.00, asking AI questions about papers 2.25, and automatic summarisation 2.13.

<figure class="inline-figure">
  <img src="/images/research-workflows/average-feature-importance.svg" alt="Bar chart of average importance positions for five features, from progress tracking and metrics at 3.88 to automatic summarisation at 2.13." width="600" height="360" loading="lazy" />
  <figcaption>Average importance position of five features from eight answers, where 5 is most important</figcaption>
</figure>

When asked what makes monitoring progress hard, five respondents chose an overwhelming amount of information, three chose losing track of reading materials and one chose a lack of clear progress visualisation.

<figure class="inline-figure">
  <img src="/images/research-workflows/monitoring-progress-challenges.svg" alt="Bar chart of challenges when monitoring research progress among nine respondents, led by overwhelming amount of information at five." width="600" height="320" loading="lazy" />
  <figcaption>Challenges when monitoring research progress among nine respondents</figcaption>
</figure>

For guidance, respondents could pick several formats. Personalised AI advice, step-by-step guides and short tutorials were each chosen by five of nine, peer or expert recommendations by three, and checklists, video explanations and textual guidelines by two each.

<figure class="inline-figure">
  <img src="/images/research-workflows/preferred-research-guidance.svg" alt="Bar chart of preferred guidance formats among nine respondents, with personalised AI advice, step-by-step guides and short tutorials at five each." width="600" height="440" loading="lazy" />
  <figcaption>Preferred guidance formats among nine respondents, who could select several</figcaption>
</figure>

### Personas

I developed two fictional personas from the survey responses and the literature, a PhD student and a thesis advisor. They are not real people, and I used them to keep the likely needs of each group in view. No thesis advisor answered the survey, so the advisor persona draws on the literature and on what we saw while working on collate, which makes that perspective the least evidenced so far.

<div class="persona-grid"><article class="persona"><header class="persona-head"><img src="/images/research-workflows/persona-sara.webp" alt="" width="64" height="64" loading="lazy" /><div><h4>Sara, 29, the stressed PhD student</h4><p class="persona-role">Third-year PhD student in electrical engineering</p></div></header><div class="persona-cols"><div><h5>Pain points</h5><ul><li>Overwhelmed by massive amounts of literature</li><li>Struggles to track advisor feedback and revisions</li><li>Finds it difficult to structure research milestones</li></ul></div><div><h5>Needs and goals</h5><ul><li>A way to track reading progress and insights</li><li>A structured system for advisor feedback and revisions</li><li>Step-by-step research planning tools</li></ul></div><div><h5>Features required</h5><ul><li>Progress tracking and milestones</li><li>Feedback integration</li><li>Collaboration with other PhD students and colleagues</li><li>Step-by-step guides</li></ul></div></div></article><article class="persona"><header class="persona-head"><img src="/images/research-workflows/persona-rob.webp" alt="" width="64" height="64" loading="lazy" /><div><h4>Dr. Rob, 50, the overloaded thesis advisor</h4><p class="persona-role">University professor and thesis advisor</p></div></header><div class="persona-cols"><div><h5>Pain points</h5><ul><li>Manages several students and struggles to track their progress</li><li>Wants better collaboration tools for research discussions</li><li>Needs to monitor students’ literature reviews and citations</li></ul></div><div><h5>Needs and goals</h5><ul><li>A centralised system to monitor student progress</li><li>Efficient ways to give structured feedback</li><li>AI-generated summaries of students’ work</li></ul></div><div><h5>Features required</h5><ul><li>A progress visualisation dashboard</li><li>A research guide and checklists</li><li>A feedback loop for online comments</li></ul></div></div></article></div>

<p class="credit-line">Persona icons: "persona" by Yu luck, from Noun Project</p>

### Journey maps

A journey map follows one persona through the research process and shows where a tool like collate could help. I mapped Sara across six stages and Dr. Rob across four.

#### Journey map for Sara, the PhD student

Sara's goal is to conduct a structured literature review and track research milestones.

<table class="journey"><thead><tr><th>Stage</th><th>Task</th><th>Pain points</th><th>Role of collate</th></tr></thead><tbody><tr><td data-label="Stage">1. Literature search</td><td data-label="Task">Find relevant papers</td><td data-label="Pain points">Overwhelming number of sources, and it is hard to filter for quality</td><td data-label="Role of collate">AI-assisted smart search for relevant papers</td></tr><tr><td data-label="Stage">2. Reading and understanding</td><td data-label="Task">Summarise key ideas</td><td data-label="Pain points">Complex language, and key points are hard to extract</td><td data-label="Role of collate">AI summarisation and key findings</td></tr><tr><td data-label="Stage">3. Organising and synthesising</td><td data-label="Task">Categorise research themes</td><td data-label="Pain points">Hard to track citations, and insights get lost</td><td data-label="Role of collate">Visual mapping to connect research ideas</td></tr><tr><td data-label="Stage">4. Writing and structuring</td><td data-label="Task">Draft research sections</td><td data-label="Pain points">Struggles to integrate advisor feedback</td><td data-label="Role of collate">A feedback loop to incorporate comments and edits</td></tr><tr><td data-label="Stage">5. Advisor meetings</td><td data-label="Task">Discuss progress</td><td data-label="Pain points">Unclear research milestones and misaligned expectations</td><td data-label="Role of collate">A progress tracking and metrics dashboard</td></tr><tr><td data-label="Stage">6. Revising and submitting</td><td data-label="Task">Edit and finalise the thesis</td><td data-label="Pain points">Last-minute rush and a lack of structured guidance</td><td data-label="Role of collate">A research guide with checklists</td></tr></tbody></table>

Sara needs structured research tracking, feedback integration and organisation tools to streamline the PhD workflow.

#### Journey map for Dr. Rob, the thesis advisor

Dr. Rob's goal is to track student progress and give feedback efficiently.

<table class="journey"><thead><tr><th>Stage</th><th>Task</th><th>Pain points</th><th>Role of collate</th></tr></thead><tbody><tr><td data-label="Stage">1. Reviewing literature</td><td data-label="Task">Evaluate the student’s research direction</td><td data-label="Pain points">Students lack a structured approach</td><td data-label="Role of collate">Personalised research guidance</td></tr><tr><td data-label="Stage">2. Providing feedback</td><td data-label="Task">Annotate student drafts</td><td data-label="Pain points">Too many scattered versions of documents</td><td data-label="Role of collate">A centralised feedback loop for revisions</td></tr><tr><td data-label="Stage">3. Tracking progress</td><td data-label="Task">Monitor research milestones</td><td data-label="Pain points">Hard to assess student progress at a glance</td><td data-label="Role of collate">A progress visualisation dashboard</td></tr><tr><td data-label="Stage">4. Final review</td><td data-label="Task">Approve the thesis submission</td><td data-label="Pain points">Students miss key requirements</td><td data-label="Role of collate">A final checklist and research guide</td></tr></tbody></table>

Dr. Rob needs a centralised platform to track several students' progress and give structured feedback.

### Limitations and next steps

Nine respondents is a very small sample, recruited by snowballing, so the results cannot represent researchers in general. The mean positions record an ordering and not conventional ratings, and the survey does not show that collate improves anyone's research. I read it only as a way to decide what to ask next.

Next I plan to run semi-structured interviews to find out why collaboration and understanding complex research rank so high, and why people prefer different guidance formats. Focus groups, an ethnographic study of advisor meetings and testing of a low-fidelity prototype follow after that.

### Reflection

The sample was small, but the findings echo the literature. Researchers in the survey reported being overwhelmed by information, having no system to track progress and finding collaboration hard, which fits the earlier studies on time, methods and workload. That gives me reasonable grounds to keep going with interviews and focus groups, and to keep the design tied to what researchers say they need.
