import{j as e}from"./index-Bh9rAoT0.js";import t from"./Layout-C1BwtfQ7.js";import{P as s}from"./ProjectCard-CljFCK85.js";const c=({projectId:a})=>{const i={"review-analysis":{title:"Review Analysis Dashboard",description:"A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights."}}[a]||{title:"Project Not Found",description:"This project could not be found"};return e.jsx(t,{children:e.jsxs("section",{className:"py-12 md:py-16",children:[e.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-8 animate-fade-in",children:[e.jsx("span",{className:"text-sm font-medium text-indiana-crimson uppercase tracking-wider",children:"Project Details"}),e.jsx("h1",{className:"mt-3 text-4xl md:text-5xl font-montserrat font-bold",children:i.title}),e.jsx("p",{className:"mt-6 text-lg text-gray-600",children:i.description})]}),e.jsxs("div",{className:"space-y-10 max-w-4xl mx-auto",children:[e.jsxs(s,{title:"Project Overview",animationDelay:"delay-100",children:[e.jsx("p",{className:"mb-4",children:"This research project aims to analyze customer reviews of digital treadmills and exercise bikes from major e-commerce platforms. By leveraging natural language processing techniques, particularly Latent Dirichlet Allocation (LDA), we seek to extract meaningful insights about customer experiences, preferences, and pain points."}),e.jsx("p",{className:"mb-4",children:"The analysis focuses on identifying key topics discussed in reviews and conducting sentiment analysis to understand customer perceptions of different product features. The findings will provide valuable insights for manufacturers, retailers, and consumers in the digital fitness equipment market."}),e.jsx("p",{className:"mb-4",children:"Our research addresses the following key questions:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-3",children:[e.jsx("li",{children:"What are the most frequently discussed topics in customer reviews of digital treadmills and exercise bikes?"}),e.jsx("li",{children:"How do sentiments vary across different product features and price points?"}),e.jsx("li",{children:"What features are most valued by customers in digital fitness equipment?"}),e.jsx("li",{children:"How do customer expectations compare to actual experiences with these products?"}),e.jsx("li",{children:"What insights can be derived to improve product development and marketing strategies?"})]})]}),e.jsxs(s,{title:"Dataset Information",animationDelay:"delay-200",children:[e.jsx("p",{className:"mb-4",children:"Our dataset is collected from multiple e-commerce and fitness review platforms, including:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mb-4",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Major E-commerce Platforms:"})," Amazon, Walmart, Best Buy"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Fitness Equipment Retailers:"})," Dick's Sporting Goods, NordicTrack, Peloton"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Fitness Review Websites:"})," FitRated, TreadmillReviews, ExerciseBike.net"]})]}),e.jsx("p",{className:"mb-4",children:"We employ web scraping techniques to collect customer reviews using the following approach:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-2 mb-4",children:[e.jsx("li",{children:"Identification of relevant product pages on e-commerce platforms"}),e.jsx("li",{children:"Automated scraping of review text, ratings, dates, and helpful votes"}),e.jsx("li",{children:"Collection of product metadata (price, brand, features, etc.)"}),e.jsx("li",{children:"Validation of data integrity and removal of duplicates"}),e.jsx("li",{children:"Storage in a structured database for analysis"})]}),e.jsx("div",{className:"overflow-x-auto mt-6",children:e.jsxs("table",{className:"w-full text-left border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-20",children:[e.jsx("th",{className:"py-3 px-4 font-semibold",children:"Category"}),e.jsx("th",{className:"py-3 px-4 font-semibold",children:"Number of Reviews"}),e.jsx("th",{className:"py-3 px-4 font-semibold",children:"Time Period"}),e.jsx("th",{className:"py-3 px-4 font-semibold",children:"Average Length"})]})}),e.jsxs("tbody",{className:"divide-y",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-4",children:"Digital Treadmills"}),e.jsx("td",{className:"py-3 px-4",children:"~50,000"}),e.jsx("td",{className:"py-3 px-4",children:"2020-2024"}),e.jsx("td",{className:"py-3 px-4",children:"120 words"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-4",children:"Exercise Bikes"}),e.jsx("td",{className:"py-3 px-4",children:"~35,000"}),e.jsx("td",{className:"py-3 px-4",children:"2020-2024"}),e.jsx("td",{className:"py-3 px-4",children:"105 words"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-3 px-4",children:"Combined Dataset"}),e.jsx("td",{className:"py-3 px-4",children:"~85,000"}),e.jsx("td",{className:"py-3 px-4",children:"2020-2024"}),e.jsx("td",{className:"py-3 px-4",children:"113 words"})]})]})]})})]}),e.jsxs(s,{title:"Research Methodology",animationDelay:"delay-300",children:[e.jsx("p",{className:"mb-4",children:"Our research employs a mixed-methods approach that combines natural language processing techniques with statistical analysis. The core of our methodology is the application of Latent Dirichlet Allocation (LDA) for topic modeling, complemented by sentiment analysis to understand customer perceptions."}),e.jsx("p",{className:"mb-4",children:"LDA is a generative statistical model that allows sets of observations to be explained by unobserved groups. In our context, it helps identify the main topics present in customer reviews:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mb-4",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Topic Identification:"})," LDA identifies latent topics in the review text"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Word Distribution:"})," Each topic is characterized by a distribution over words"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Document Distribution:"})," Each review is modeled as a mixture of topics"]})]}),e.jsx("p",{className:"mb-4",children:"To understand customer perceptions, we apply sentiment analysis to the reviews:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-2 mb-4",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Overall Sentiment:"})," Classifying reviews as positive, negative, or neutral"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Feature-Based Sentiment:"})," Analyzing sentiments associated with specific product features"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Sentiment Intensity:"})," Measuring the strength of expressed opinions"]})]}),e.jsx("p",{className:"mb-4",children:"Our research follows a systematic workflow:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-3",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Data Collection & Preprocessing"}),e.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[e.jsx("li",{children:"Web scraping of reviews from multiple platforms"}),e.jsx("li",{children:"Text cleaning and normalization"})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Topic Modeling with LDA"}),e.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[e.jsx("li",{children:"Parameter optimization"}),e.jsx("li",{children:"Topic extraction and labeling"})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Sentiment Analysis"}),e.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[e.jsx("li",{children:"Sentiment classification at review and sentence level"}),e.jsx("li",{children:"Feature-based sentiment extraction"})]})]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Integration & Interpretation"}),e.jsxs("ul",{className:"list-disc pl-5 mt-1 space-y-1",children:[e.jsx("li",{children:"Combining topic and sentiment results"}),e.jsx("li",{children:"Generation of insights and recommendations"})]})]})]})]}),e.jsxs(s,{title:"Research Team",animationDelay:"delay-400",children:[e.jsx("p",{className:"mb-6",children:"Our interdisciplinary research team brings together expertise in data science, natural language processing, machine learning, and consumer behavior. Each team member contributes specialized knowledge and skills to ensure the success of this project."}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8",children:[e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"relative rounded-full overflow-hidden w-24 h-24 mb-3",children:e.jsx("img",{src:"/assets/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png",alt:"Dr. Liz Ann Wanless",className:"w-full h-full object-cover"})}),e.jsx("h3",{className:"text-lg font-semibold text-indiana-crimson",children:"Dr. Liz Ann Wanless"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Director of the Sports Innovation Institute"})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"relative rounded-full overflow-hidden w-24 h-24 mb-3",children:e.jsx("img",{src:"/assets/a57539df-fb1b-4ae4-aaa1-173af06538d4.png",alt:"Aditya Naik",className:"w-full h-full object-cover"})}),e.jsx("h3",{className:"text-lg font-semibold text-indiana-crimson",children:"Aditya Naik"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Research Assistant"})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"relative rounded-full overflow-hidden w-24 h-24 mb-3",children:e.jsx("img",{src:"/assets/5345d883-eaba-470f-ab0d-4f2b15047e5d.png",alt:"Raghuveer Venkatesh",className:"w-full h-full object-cover"})}),e.jsx("h3",{className:"text-lg font-semibold text-indiana-crimson",children:"Raghuveer Venkatesh"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Research Assistant"})]}),e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("div",{className:"relative rounded-full overflow-hidden w-24 h-24 mb-3",children:e.jsx("img",{src:"/assets/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png",alt:"Sai Pranam Chillakuru",className:"w-full h-full object-cover"})}),e.jsx("h3",{className:"text-lg font-semibold text-indiana-crimson",children:"Sai Pranam Chillakuru"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Research Assistant"})]})]})]})]})]})})};export{c as default};
