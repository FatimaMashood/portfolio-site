---
title: "Physiological synchrony and collaboration"
slug: thesis
subtitle: "A reproducible framework and study of heart-rate synchrony between two players collaborating in Overcooked."
category: research
meta: "Thesis | MSc Creative Intelligence and Technology | Leiden University | The Netherlands | 2022 to 2024"
caption: "Thesis | MSc Creative Intelligence and Technology | Leiden University | The Netherlands | 2022 to 2024"
summary: "For my master's thesis, I explored whether heart-rate synchrony between two people relates to how well they collaborate in the cooperative game Overcooked. Across 42 observations from seven pairs, the findings suggest a weak relationship between synchrony and collaboration that was not statistically significant, and familiarity between the partners made no significant difference to either their synchrony or their game score."
role: "I designed the study, built the game and sensor setup, ran the sessions, and analysed the data with guidance from my supervisors, Maarten Lamers and Max van Duijn."
collaborators: []
tools: "Overcooked, PPG sensors, Arduino, sensor server, Docker, Python, JASP"
images:
  - /images/thesis/overcooked-layout-1200.webp
  - /images/thesis/thesis-experiment-system-diagram-1200.webp
  - /images/thesis/thesis-correlation-result-1200.webp
  - /images/thesis/thesis-gender-anova-1200.webp
image_alt:
  - "Annotated Overcooked kitchen with the pot, onion, tomato and dish dispensers, serving areas, both players, orders, score and time left."
  - "Hand-drawn system diagram connecting the sensor server, serial port, Arduino, two PPG channels, the player laptops and the Docker game environment."
  - "Table and scatter plot of game score against maximum IBI correlation, with r = 0.145 and p = 0.361."
  - "ANOVA table and line plot comparing maximum IBI correlations across male-male, mixed-gender and female-female observation groups."
links:
  - "https://github.com/FatimaMashood/MSc-thesis"
publish: true
---

## Background and question

Physiological synchrony is the alignment of responses such as heart rate between people as they interact. It has mostly been studied in offline relationships such as teammates, couples and parents and children, and interest has recently turned to virtual environments. Overcooked, a cooperative kitchen game in which two players serve dishes under a time limit, offers a controlled setting for this, because the number of dishes served together gives a score for how well a pair collaborates.

The thesis explored whether heart-rate synchrony is related to the collaborative game score and whether familiarity between the players affects the relationship, with the hypothesis that higher synchrony would accompany higher scores, and that familiar pairs would show both greater synchrony and higher scores.

<figure class="inline-figure">
  <img src="/images/thesis/overcooked-layout-1200.webp" alt="Annotated Overcooked kitchen with the pot, onion, tomato and dish dispensers, serving areas, both players, orders, score and time left." width="1142" height="768" loading="lazy" />
  <figcaption>Overcooked game layout (open-source HumanCompatibleAI/overcooked-demo)</figcaption>
</figure>

## The process

### Study design

With Maarten Lamers and Max van Duijn from Leiden University as my primary and secondary supervisors respectively, I designed a within-dyad study in which collaboration was measured through the game score and physiological synchrony through heart rate. Finger PPG sensors, which detect pulse-related changes in blood volume, were chosen over electrocardiography electrodes because they are easier to wear during play. The sample size was fourteen participants, recruited through convenience sampling and paired into seven dyads, three of familiar partners and four of unfamiliar ones.

### Setup and experiment

The game ran in a Docker environment adapted from the open-source Overcooked demo, with one view per laptop, while an Arduino gathered both players' pulse readings and passed them to a sensor server, which logged the readings live together with each game order and score.

Participants received an information sheet and signed a consent form before taking part, and after 3 to 5 minutes of sensor calibration they completed a logged test round before playing six 60-second game orders, or levels, of the virtual Overcooked game. A short questionnaire afterwards recorded demographics and familiarity. All data were anonymised, and the consent procedures and safety measures were set out in an ethics submission prepared for the study, since it involved human participants.

<figure class="inline-figure">
  <img src="/images/thesis/thesis-schematic-1200.webp" alt="Hand-drawn schematic of two players with finger PPG sensors A0 and A1 wired to one Arduino, above a drawing of the Arduino and mini-breadboard inside their box." width="875" height="760" loading="lazy" />
  <figcaption>My schematic of the physical setup, with both players' finger sensors wired to one Arduino</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/thesis/thesis-experiment-system-diagram-1200.webp" alt="Hand-drawn system diagram connecting the sensor server, serial port, Arduino, two PPG channels, the player laptops and the Docker game environment." width="1200" height="900" loading="lazy" />
  <figcaption>My schematic of how the two pulse signals travelled from the Arduino to the sensor server, which logged them with each game order and score from the Docker game</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/thesis/thesis-game-laptop-1200.webp" alt="Laptop showing the Overcooked game in a browser, with a hand on the keyboard and a sensor lead running to the fingertip." width="1200" height="1152" loading="lazy" />
  <figcaption>The game running on one player's laptop, with the sensor lead running to their finger</figcaption>
</figure>

<figure class="inline-figure">
  <img src="/images/thesis/thesis-sensor-check-1200.webp" alt="A finger wearing a PPG sensor beside an open laptop showing a pulse plot, with the Arduino and breadboard on the table to the right." width="1200" height="900" loading="lazy" />
  <figcaption>A hardware check, with the finger sensor on, the Arduino and breadboard beside it and the pulse plotting on the laptop</figcaption>
</figure>

### Measuring synchrony

The raw inter-beat interval (IBI) data, which record the time between successive heartbeats, were prepared for analysis by replacing missing values and filtering out noise outside 0.5 to 5 Hz. Cross-correlation was then applied to the two players' series at all possible time lags, and the highest correlation in each round was taken as the synchrony measure, giving 42 observations from the six rounds played by each of the seven pairs.

### Analysis

Pearson's correlation tested the relationship between game score and synchrony, and t-tests compared familiar with unfamiliar pairs on both measures. An analysis of variance additionally explored differences between dyad gender groups, an analysis that had not been planned in advance. Since the familiar groups were not normally distributed and each pair contributed six rounds, the results are interpreted with caution.

## Findings

Across the 42 observations, maximum IBI correlation averaged 0.761 and game scores ranged from 20 to 495. Score and synchrony showed a weak positive relationship (r = 0.145, p = 0.361) that was not statistically significant, so the study could not establish that better-performing pairs were more physiologically aligned. Familiar and unfamiliar pairs also did not differ significantly in synchrony (p = 0.582) or game score (p = 0.624).

<figure class="inline-figure">
  <img src="/images/thesis/thesis-correlation-result-1200.webp" alt="Table and scatter plot of game score against maximum IBI correlation, with r = 0.145 and p = 0.361." width="1200" height="482" loading="lazy" />
  <figcaption>Game score and maximum IBI correlation across the 42 observations</figcaption>
</figure>

The questionnaire also recorded gender, which allowed a further analysis that was not a planned question. Mean synchrony differed across male-male, mixed-gender and female-female pairs (F = 6.892, p = 0.003), while game score did not (p = 0.266). With seven pairs, only one of them male-male and one female-female, this pattern is exploratory and would need testing with more participants.

<figure class="inline-figure">
  <img src="/images/thesis/thesis-gender-anova-1200.webp" alt="ANOVA table and line plot comparing maximum IBI correlations across male-male, mixed-gender and female-female observation groups." width="1200" height="1256" loading="lazy" />
  <figcaption>Maximum IBI correlation for male-male, mixed-gender and female-female pairs (F = 6.892, p = 0.003)</figcaption>
</figure>

## Limitations and next steps

An important limitation of this research was the limited sample size of seven dyads (N=14), each contributing six rounds, which limits how far the results can be generalised and means the repeated rounds are not fully independent. The game rounds were short, limited to 60 seconds each, and a simple interface and version of the Overcooked virtual game was used. Furthermore, while the PPG sensors were practical and ethically aligned with this study design, they were also less precise than laboratory equipment would be, so unreliable readings were ruled out, resulting in an even smaller dataset.

Future research could use a larger sample, longer or more demanding tasks, a scale for familiarity in place of two categories, and an analysis that accounts for the repeated rounds. Combining PPG with ECG and with measures such as skin conductance, eye tracking or neural activity could also test whether the alignment holds across signals. The public [MSc thesis repository](https://github.com/FatimaMashood/MSc-thesis) holds the sensor code and the preprocessing and analysis notebooks needed to reproduce or extend the experiment.
