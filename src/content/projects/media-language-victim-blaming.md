---
title: "Media language and victim-blaming narratives"
slug: media-language-victim-blaming
subtitle: "A text analysis of Times of India crime reports from Uttar Pradesh in 2019, exploring victim-blaming narratives in their language."
category: research
meta: "Digital humanities | Leiden University | 2023"
caption: "Digital humanities | 2023"
summary: "For a research report in a Digital Humanities course at Leiden University, this analysis of Times of India crime reports from Uttar Pradesh in 2019 explored whether their language contributed to victim-blaming narratives. The keyword counts included doubt-related terms, while sentiment and emotion results were consistent with condemnation of the crimes, so the study could not establish whether the reporting cast doubt on victims."
role: "I wrote this course report and carried out its text analysis."
collaborators: []
tools: "Word-frequency analysis, keyword search, pre-trained sentiment and emotion models"
images:
  - /images/media-language-victim-blaming/media-language-victim-blaming-top-terms-1200.webp
  - /images/media-language-victim-blaming/media-language-victim-blaming-keyword-search-1200.webp
  - /images/media-language-victim-blaming/media-language-victim-blaming-sentiment-1200.webp
  - /images/media-language-victim-blaming/media-language-victim-blaming-emotion-1200.webp
image_alt:
  - "Bar chart showing the frequency of the most common words in the text, with police and said as the two highest terms."
  - "Bar chart showing keyword counts for shame, defiance, honour, allege, alleged, claim, confess and complained."
  - "Pie chart showing about three quarters negative sentiment, about a quarter neutral sentiment and no positive sentiment."
  - "Pie chart showing fear as the largest emotion, followed by sadness, disgust, anger, anticipation and negligible joy."
links: []
publish: true
---

## Background and question

News reports help people understand events, while their language can also shape how victims, perpetrators and incidents are understood. Cultivation theory, which proposes that repeated media portrayals can influence beliefs about the world, frames the question of how violence against women is covered (Gerbner, 2017), and earlier studies have examined how crime reporting assigns sympathy, responsibility and doubt, including coverage of femicide in a Florida newspaper (Taylor, 2009).

Indian research has often centred on specific cases, including the 2012 Delhi gang-rape case and later reporting on nine gang-rape cases (Kaur, 2013; Bhandari, 2021). This exploratory course study focused on Uttar Pradesh, the state covered by the available 2019 dataset, and asked to what extent language in Indian media reporting on violence against women contributed to victim-blaming narratives.

## The process

### Preparing the text

Using a public Kaggle dataset containing Times of India crime news from Uttar Pradesh in 2019, the analysis began by converting the text to lowercase and removing stop words, meaning common words excluded from frequency analysis, before counting terms and preparing visual summaries. The articles had been collected under search words such as Murder, Kidnapping and Crime against women and manually annotated with reasons for the crimes, which makes it a general crime-news set.

The frequency analysis produced a word cloud, a visual in which more frequent words appear larger, and a bar plot of the most frequent terms, which is shown here since it states the counts more clearly than word size.

<figure class="inline-figure is-wide">
  <img src="/images/media-language-victim-blaming/media-language-victim-blaming-top-terms-1200.webp" alt="Bar chart showing the frequency of the most common words in the text, with police and said as the two highest terms." width="1200" height="518" loading="lazy" />
  <figcaption>Frequency of the most common terms in the text</figcaption>
</figure>

### Searching for language patterns

Terms drawn from the literature, including shame, defiance, honour, allege and alleged, claim, confess and complained, were searched for in the text, and pre-trained models were then applied for sentiment analysis, a method for classifying language as negative, neutral or positive, and for emotion recognition, which identifies emotions represented in the text.

## Findings

The text contained 75,828 words, with police appearing 1,617 times, said 1,574, accused 550, year 487 and girl 470. The keyword search counted alleged 131 times, shame 54, complained 14, honour 11, claim 8, confess 1, defiance 0 and allege 0 in the plotted series.

<figure class="inline-figure is-wide">
  <img src="/images/media-language-victim-blaming/media-language-victim-blaming-keyword-search-1200.webp" alt="Bar chart showing keyword counts for shame, defiance, honour, allege, alleged, claim, confess and complained." width="1200" height="945" loading="lazy" />
  <figcaption>Counts for terms drawn from the literature</figcaption>
</figure>

The sentiment pie shows about three quarters negative sentiment, about a quarter neutral sentiment and no positive category. The emotion pie ranks fear first, followed by sadness, disgust and anger, with anticipation small and joy negligible. These results are consistent with condemnation of the crimes, although the models do not show whom or what the negative language is directed at. The prominence of fear may indicate that the language evokes empathy for victims, which remains a hypothesis for later analysis.

<figure class="inline-figure is-small">
  <img src="/images/media-language-victim-blaming/media-language-victim-blaming-sentiment-1200.webp" alt="Pie chart showing about three quarters negative sentiment, about a quarter neutral sentiment and no positive sentiment." width="1119" height="1200" loading="lazy" />
  <figcaption>Sentiment categories assigned to the text</figcaption>
</figure>

<figure class="inline-figure is-small">
  <img src="/images/media-language-victim-blaming/media-language-victim-blaming-emotion-1200.webp" alt="Pie chart showing fear as the largest emotion, followed by sadness, disgust, anger, anticipation and negligible joy." width="1200" height="675" loading="lazy" />
  <figcaption>Emotion categories assigned to the text</figcaption>
</figure>

Doubt-related terms such as alleged were therefore present alongside sentiment and emotion results that were consistent with condemnation. The context of those terms and of fear was not examined, so the study could not establish whether the reporting cast doubt on victims. The empathy reading remains tentative and makes no claim about how readers responded.

## Limitations and next steps

The study was limited to one English-language newspaper, one year and one state, and it did not examine the context in which the keywords or fear appeared. The dataset covered crime news more broadly and no filter for violence against women was documented, which limits what the results say about the question. The report also does not name the sentiment and emotion models or describe how they were validated, and accused and alleged can be routine terms in legal reporting about suspects, so counts of them alone cannot establish a victim-blaming function.

Further research could examine how reporting styles relate to public attitudes over time, compare regional newspapers, connect language patterns with crime statistics and analyse the contexts in which the keywords and fear appear, which this exploratory study left open.
