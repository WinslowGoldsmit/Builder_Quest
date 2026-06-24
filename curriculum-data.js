// AI Builder Curriculum v3.0 - Improved for Contextual LLM Teaching
const CURRICULUM = {
  meta: {
    version: "3.0-improved",
    goal: "Side income → Full-time remote income (5-year horizon)",
    context: "Full-time teacher, India, ₹1000/month, 3hr/day max",
    phases: [
      { id: 1, name: "FOUNDATION", months: "1-3", identity: "Consumer → Learner → Builder", focus: "Ship first 3 projects. Learn in public." },
      { id: 2, name: "BUILDING", months: "4-9", identity: "Builder", focus: "Technical skills, AI-native tools, first market contact." },
      { id: 3, name: "SCALING", months: "10-18", identity: "Builder → Creator → Operator", focus: "Products, audience growth, income diversification." },
      { id: 4, name: "OWNERSHIP", months: "19-24", identity: "Creator → Operator → Owner", focus: "Compounding assets, teaching others, optionality." }
    ]
  },

  months: {
    1: {
      phase: 1, theme: "AI Lesson Planner", project: "AI-Powered Lesson Planner",
      description: "Build a system that uses AI to generate lesson plans, quizzes, and explanations for your real teaching job. Live website + prompt library.",
      weekGoals: {
        1: "Set up tools, build 3 prompts, create first workflow, push to GitHub",
        2: "Expand to 10 prompts, build comparison table, AI critique, prompt library page",
        3: "Build first public website (HTML/CSS), deploy to GitHub Pages, mobile test",
        4: "Add JavaScript copy feature, write case study, before/after comparison, month review"
      },
      weeks: {
        1: { theme: "Setup + First AI Workflow",
          days: {
            1: { build: "Install VS Code, create GitHub repo 'ai-lesson-planner', write README with project description", show: "Post: 'Starting my AI builder journey. Building an AI lesson planner for teachers. Follow along.'", crisis: "Create GitHub account. Write one sentence in README." },
            2: { build: "Build Prompt 1: Lesson plan generator. Test on a real topic you teach. Refine 3 times. Save best version in repo.", show: "Post: 'Day 2: Built my first lesson plan with AI. Here's the prompt and the result.' (Screenshot)", crisis: "Use AI for one lesson plan. Save the prompt." },
            3: { build: "Build Prompt 2: Quiz generator. Test on real material from your subject. Save to repo.", show: "Post: 'Day 3: AI-generated quiz for [subject]. Took 5 minutes vs 30 minutes manually.'", crisis: "Generate one quiz with AI. Save it." },
            4: { build: "Build Prompt 3: Student explanation simplifier. Test on a complex concept your students struggle with.", show: "Post: 'Day 4: Used AI to explain [complex topic] for a struggling student. The output vs my manual attempt.'", crisis: "Simplify one explanation with AI." },
            5: { build: "Combine into a workflow: Topic → Lesson Plan → Quiz → Explanation. Document the chain in a markdown file.", show: "Post: 'Day 5: Connected 3 AI prompts into one workflow. Here's the flowchart.'", crisis: "Write one sentence describing your workflow." },
            6: { build: "Create a simple HTML page or markdown file that presents this workflow. Push to GitHub.", show: "Rest or share progress screenshot.", crisis: "Push one file to GitHub." },
            7: { build: "Weekly Review. Update repo. Clean up files. Check what worked and what failed.", show: "Post: 'Week 1 complete. 3 prompts, 1 workflow, 1 repo. Here's what I learned.'", crisis: "Write one sentence about what you did this week." }
          }
        },
        2: { theme: "Refine + Expand",
          days: {
            1: { build: "Add 2 more subject-specific prompts (e.g., for Math, Science, English). Test each one.", show: "Post: 'Expanding the lesson planner to [subject]. New prompt added.'", crisis: "Add one prompt to your library." },
            2: { build: "Build a simple comparison table: AI output vs your manual output. Which is better? When? Document honestly.", show: "Post: 'Honest comparison: AI vs manual lesson planning. When AI wins, when it fails.'", crisis: "Compare one AI output vs your manual work." },
            3: { build: "Use AI to critique your prompts: 'What's missing? What could be clearer?' Revise top 3 prompts.", show: "Post: 'Had AI critique my own prompts. Here's what it said and what I changed.'", crisis: "Ask AI to improve one of your prompts." },
            4: { build: "Create a 'Prompt Library' page in your repo. Organize by subject and use case. Make it copy-paste friendly.", show: "Post: 'My prompt library is now public. 10 prompts for teachers. Free to use.'", crisis: "Organize your prompts in one file." },
            5: { build: "Test the full workflow on a week's worth of lessons. Time it. Document results: time saved, quality check.", show: "Post: 'I planned a full week of lessons using AI. Here's the time saved and the quality check.'", crisis: "Plan one day's lesson with AI." },
            6: { build: "Review and clean repo. Make README professional. Add links to all sections.", show: "Rest", crisis: "Fix one typo in README." },
            7: { build: "Weekly Review. What patterns do you see? What surprised you? Update prompt library.", show: "Post: 'Week 2: Prompt library live. Time saved: X hours. Quality: [honest assessment].'", crisis: "Write one sentence about progress." }
          }
        },
        3: { theme: "First Public Website",
          days: {
            1: { build: "Learn HTML basics: structure, headings, lists, links. Build a single-page site for your lesson planner.", show: "Post: 'Learning HTML by building a real site. Day 1: structure.'", crisis: "Write one HTML tag. Save it." },
            2: { build: "Add CSS: colors, fonts, basic layout. Use Mario theme colors or your own. Make it readable on mobile.", show: "Post: 'Day 2: Added CSS. My site actually looks like a real site now.'", crisis: "Add one CSS rule." },
            3: { build: "Deploy to GitHub Pages. Get live URL. Test it in browser. Share the URL.", show: "Post: 'My first website is LIVE. [URL]. It's simple, but it exists.'", crisis: "Push index.html to GitHub." },
            4: { build: "Add sections to site: About, The Tool, Prompt Library, How I Built It. Link everything together.", show: "Post: 'Added a How I Built It section. Transparency builds trust.'", crisis: "Add one sentence to your site." },
            5: { build: "Create a simple form or section where visitors can copy your prompts easily. Test the copy function.", show: "Post: 'Made the prompts copy-paste friendly. Building for utility, not vanity.'", crisis: "Make one prompt easy to copy." },
            6: { build: "Test on mobile (use Chrome DevTools or your actual phone). Fix anything broken. Check font sizes.", show: "Rest", crisis: "Open your site on phone. Note one issue." },
            7: { build: "Weekly Review. Is the site telling your story? What's missing? Plan Week 4 improvements.", show: "Post: 'Week 3: Website live. Mobile-tested. Prompts accessible.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Polish + Month Review",
          days: {
            1: { build: "Add one interactive JavaScript element: a button that copies a prompt to clipboard. Test it.", show: "Post: 'Added my first JavaScript feature: one-click copy. Small win.'", crisis: "Write one line of JavaScript." },
            2: { build: "Write a 300-word case study: 'How I Built an AI Lesson Planner in 4 Weeks.' Problem → Approach → Build → Results → Lessons.", show: "Post: 'Published my first case study. Building in public means documenting the process.'", crisis: "Write 3 paragraphs about your project." },
            3: { build: "Create a Before/After section: your old manual process vs AI-assisted process. Use real numbers.", show: "Post: 'Before vs After: My lesson planning workflow. The numbers don't lie.'", crisis: "List one before/after comparison." },
            4: { build: "Month 1 comprehensive review. Read all your work. What patterns? What failures? What surprised you? Write 400 words.", show: "Post: 'Month 1 complete. Honest retrospective: wins, failures, next month.'", crisis: "Write one sentence about Month 1." },
            5: { build: "Prepare Month 2 plan. Research: public knowledge base, income paths, LinkedIn setup.", show: "Rest", crisis: "Open Month 2 curriculum. Read the theme." },
            6: { build: "Rest day. No work. Recharge.", show: "Rest", crisis: "Rest. No work." },
            7: { build: "Rest day. No work. Recharge.", show: "Rest", crisis: "Rest. No work." }
          }
        }
      },
      deliverables: [
        "GitHub repo 'ai-lesson-planner' with README",
        "10+ tested prompts saved and organized",
        "Live website on GitHub Pages with URL",
        "One JavaScript feature (copy button or similar)",
        "1 case study document (300+ words)",
        "12+ public posts documenting the build",
        "Before/After workflow comparison"
      ]
    },

    2: {
      phase: 1, theme: "Public Knowledge Base", project: "Personal Knowledge Base → Public Website",
      description: "Build a public second brain. Research 3 income paths deeply. Choose one. Set up LinkedIn.",
      weekGoals: {
        1: "Research 3 income paths (Content Writing, AI Consulting, Digital Products). Compare and choose one.",
        2: "Build folder structure, link notes, create Map of Content, add tags and search",
        3: "Set up LinkedIn, write featured post, engage in niche, create /now page, study 5 role models",
        4: "Write Path Commitment Document, create Tools page, month review, update website"
      },
      weeks: {
        1: { theme: "Research Systems + Income Path Research",
          days: {
            1: { build: "Research: 'How do people earn money online from India in 2026?' Use AI + Reddit + Twitter. Write structured summary.", show: "Post: 'Researching online income paths from India. Day 1 findings.'", crisis: "Ask AI one question about online income. Save answer." },
            2: { build: "Deep dive: Content Writing path. Who hires? What do they pay? Platforms? Skills needed? 500-word summary.", show: "Post: 'Path 1: Content Writing from India. Reality check. Pay, platforms, entry points.'", crisis: "Research one income path for 10 minutes." },
            3: { build: "Deep dive: AI Consulting/Automation path. What do businesses pay? Entry points? What's realistic for a beginner?", show: "Post: 'Path 2: AI Consulting for small businesses. What I learned.'", crisis: "Research one more path for 10 minutes." },
            4: { build: "Deep dive: Digital Products/Templates path. Platforms, pricing, creation process. How do people sell from India?", show: "Post: 'Path 3: Digital Products from India. Gumroad, LemonSqueezy, Notion templates.'", crisis: "Read one article about digital products." },
            5: { build: "Compare all 3 paths against YOUR constraints (teacher schedule, ₹1000 budget, 3hr/day, beginner). Choose one primary path.", show: "Post: 'I chose [X] as my primary path. Here's why, based on my constraints.'", crisis: "Write one sentence choosing your path." },
            6: { build: "Build 'Research Hub' page on your website. Organize all research with links and structure.", show: "Rest", crisis: "Save one research note." },
            7: { build: "Weekly Review. What did you learn about each path? Are you confident in your choice?", show: "Post: 'Week 1: 3 paths researched, 1 chosen. Research hub live.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "Knowledge Base Architecture",
          days: {
            1: { build: "Build folder structure: /projects, /research, /income-paths, /tools, /case-studies. Create folders in repo.", show: "Post: 'Building my public knowledge base. Here's the architecture.'", crisis: "Create one folder in your repo." },
            2: { build: "Migrate Month 1 project docs into this structure. Link everything together with internal links.", show: "Post: 'Month 1 project now lives in my knowledge base. Linked and organized.'", crisis: "Move one file to the right folder." },
            3: { build: "Create 3 new linked notes: one for each income path. Add internal links between them.", show: "Post: 'Learning to link notes. Here's why it matters for thinking, not just organization.'", crisis: "Write one note with one link." },
            4: { build: "Build a 'Map of Content' (MOC) page: master index linking to all major topics. This is your navigation hub.", show: "Post: 'Created a Map of Content. One page to navigate everything I've built.'", crisis: "Write one index page." },
            5: { build: "Add tags and search functionality (if using a static site generator, or just good organization).", show: "Post: 'Added search to my knowledge base. Finding my own work is now instant.'", crisis: "Add one tag to one page." },
            6: { build: "Review all links. Fix broken ones. Ensure every page is reachable from the MOC.", show: "Rest", crisis: "Check one link." },
            7: { build: "Weekly Review. Is your knowledge base useful to your future self? What's missing?", show: "Post: 'Week 2: Knowledge base structured. 20+ linked pages. Searchable.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "LinkedIn + Professional Presence",
          days: {
            1: { build: "Set up LinkedIn profile. Add photo, headline, current role. Link to your website in the bio.", show: "Post: 'LinkedIn profile updated. Now it points to real work, not just a job title.'", crisis: "Open LinkedIn. Update headline." },
            2: { build: "Write LinkedIn 'Featured' post about your Month 1 project. Include the live URL and what you learned.", show: "Post: 'Wrote my first LinkedIn featured post. About building an AI lesson planner.'", crisis: "Write one LinkedIn post." },
            3: { build: "Engage genuinely: comment on 5 posts in your niche. Add value, don't self-promote. No links in comments.", show: "Post: 'Spent an hour commenting thoughtfully in my niche. Building relationships, not followers.'", crisis: "Comment on one post." },
            4: { build: "Create a 'Now' page on your website: what you're working on, what you're learning, what you're avoiding.", show: "Post: 'Added a /now page. Inspired by Derek Sivers. Here's what I'm focused on.'", crisis: "Write one sentence for a /now page." },
            5: { build: "Research 5 people in India doing your chosen path. Study their timelines. How long did they take?", show: "Post: 'Studied 5 people in my chosen path. Their timelines: 2-4 years to consistency. Patience.'", crisis: "Find one person in your chosen path." },
            6: { build: "Rest day.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Is your LinkedIn telling the right story? Are you engaging authentically?", show: "Post: 'Week 3: LinkedIn live. /now page up. 5 role models studied.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Consolidation + Month Review",
          days: {
            1: { build: "Write 'Path Commitment Document': Why you chose your path, what you'll build, 6-month plan. Be specific.", show: "Post: 'My path commitment document. Public accountability. [Link]'", crisis: "Write one sentence committing to your path." },
            2: { build: "Create a 'Tools I Use' page: document every free tool, why you chose it, what alternatives exist.", show: "Post: 'My free tool stack. ₹0 spent so far. Here's what I'm using and why.'", crisis: "List one tool you use." },
            3: { build: "Month 2 comprehensive review. What research was most valuable? What do you still not know?", show: "Post: 'Month 2 retrospective: Knowledge base, path chosen, presence established.'", crisis: "Write one sentence about Month 2." },
            4: { build: "Update website homepage to reflect 2 months of building. Add project gallery, timeline, stats.", show: "Post: 'Website homepage updated. It now tells a 2-month story.'", crisis: "Update one line on your homepage." },
            5: { build: "Prepare Month 3. Research: AI agents, RAG, workflows for 2026. What will you build?", show: "Rest", crisis: "Read Month 3 theme." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "Public knowledge base with 20+ linked pages",
        "Research hub: 3 income paths documented and compared",
        "Path Commitment Document (public)",
        "LinkedIn profile set up with featured post",
        "/now page live",
        "12+ public posts"
      ]
    },

    3: {
      phase: 1, theme: "AI Workflow + Case Study", project: "Multi-Step AI Research Workflow",
      description: "Build a multi-step AI workflow with prompt chaining. Document it as a case study. Prepare to go public.",
      weekGoals: {
        1: "Master prompt chaining: 2-step → 3-step → 4-step with critique. Test on 3 topics.",
        2: "Write and publish 800-word case study with screenshots, diagrams, code",
        3: "Research RAG, AI agents, MCP. Build simple agent-like workflow. Create 2026 AI Stack page",
        4: "3-month retrospective, update website, plan Month 4 (APIs)"
      },
      weeks: {
        1: { theme: "Prompt Chaining Mastery",
          days: {
            1: { build: "Learn prompt chaining: output of Prompt 1 → input of Prompt 2. Build a 2-step chain for a real teaching task.", show: "Post: 'Learning prompt chaining. Step 1: Research. Step 2: Summarize. Here's the result.'", crisis: "Chain two prompts together. Save result." },
            2: { build: "Build 3-step chain: Topic → Research → Summary → Formatted Report. Test on a real topic you need to understand.", show: "Post: 'Built a 3-step AI chain. From topic to formatted report. Took 10 minutes.'", crisis: "Use output of one prompt as input to another." },
            3: { build: "Add a 'critique step': Prompt 4 reviews the output and suggests improvements. Implement the top 3 suggestions.", show: "Post: 'Added a self-critique step to my AI workflow. The output improved 40%.'", crisis: "Ask AI to critique its own output." },
            4: { build: "Test the full 4-step chain on 3 different topics. Document: time taken, quality score (1-10), failure points.", show: "Post: 'Tested my workflow on 3 topics. Consistent results. Here's the data.'", crisis: "Run your chain on one topic." },
            5: { build: "Build a simple HTML/JS tool or well-documented markdown guide that presents this workflow. Make it reusable.", show: "Post: 'Turning my workflow into a reusable tool. Building the interface now.'", crisis: "Document your workflow in one file." },
            6: { build: "Debug and refine. Make it robust. Add error handling for when AI fails to respond.", show: "Rest", crisis: "Fix one bug." },
            7: { build: "Weekly Review. You now have a 4-step AI workflow. Is it useful? Would a colleague use it?", show: "Post: 'Week 1: 4-step AI workflow built and tested. Reusable.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "Case Study Writing",
          days: {
            1: { build: "Study 3 online case studies. What makes them good? Structure, honesty, data, screenshots. Write a 200-word analysis.", show: "Post: 'Studied great case studies. Here's the structure they all share.'", crisis: "Read one case study online." },
            2: { build: "Write your case study: 'How I Built an AI Research Workflow.' Problem → Approach → Build → Results → Lessons. 800 words.", show: "Post: 'Writing my first case study. 800 words. Honest about what broke.'", crisis: "Write 3 paragraphs about your workflow." },
            3: { build: "Use AI to edit: clarity, cut fluff, strengthen the opening paragraph. Revise based on feedback.", show: "Post: 'Used AI to edit my own case study. Meta, but effective.'", crisis: "Ask AI to improve one paragraph you wrote." },
            4: { build: "Add screenshots, diagrams, and code snippets to the case study. Make it visual and skimmable.", show: "Post: 'Case study v2: now with screenshots and a workflow diagram.'", crisis: "Add one screenshot." },
            5: { build: "Publish case study on your website. Create /case-studies page. Share the link.", show: "Post: 'First case study is LIVE. [Link]. Building proof of work, one document at a time.'", crisis: "Publish one paragraph publicly." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Is the case study honest? Does it show real work? Would it convince someone to hire you?", show: "Post: 'Week 2: Case study published. 800 words. Real project. Real results.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "AI-Native Skills for 2026",
          days: {
            1: { build: "Research: What are AI agents, MCP, and RAG? Use AI to learn. Write a beginner's guide for non-programmers.", show: "Post: 'RAG explained for non-programmers. Why it matters in 2026.'", crisis: "Ask AI to explain RAG in simple terms." },
            2: { build: "Build a simple 'agent-like' workflow: AI + tool + memory. Example: research topic → save to file → summarize next day.", show: "Post: 'Built my first agent-like workflow. AI + tool + memory. Small but real.'", crisis: "Connect AI to one tool (even a spreadsheet)." },
            3: { build: "Research vector databases (Pinecone free tier, Chroma). What are they? When do you need them? Write a summary.", show: "Post: 'Vector databases explained for beginners. Do you need one? Probably not yet.'", crisis: "Read one article about vector databases." },
            4: { build: "Create a '2026 AI Skills Roadmap' page on your site. What skills matter now? What's hype? What's essential?", show: "Post: 'My 2026 AI stack: what's essential, what's nice-to-have, what's hype. [Link]'", crisis: "List 3 AI skills you want to learn." },
            5: { build: "Update your prompt library with advanced techniques: chain-of-thought, few-shot, role-based prompting.", show: "Post: 'Updated prompt library with 2026 techniques. Chain-of-thought, few-shot, role-based.'", crisis: "Add one advanced technique to one prompt." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Do you understand agents, RAG, and MCP? Can you explain them to a colleague?", show: "Post: 'Week 3: AI-native skills research complete. Roadmap published.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "3-Month Retrospective + Phase 2 Prep",
          days: {
            1: { build: "Write 'What I Built in 3 Months': comprehensive retrospective. Projects, posts, skills, failures, surprises. 600 words.", show: "Post: '3-month retrospective. 3 projects shipped. 30+ posts. Honest assessment.'", crisis: "Write one sentence about your 3-month journey." },
            2: { build: "Update website: 3-month timeline, project gallery, stats. Make it look like someone has been building for 3 months.", show: "Post: 'Website now has a 3-month timeline. Visual proof of consistency.'", crisis: "Add one project to your gallery." },
            3: { build: "Plan Month 4: APIs and automation. What project will you build? What are you aiming for by end of Month 4?", show: "Post: 'Month 4 preview: APIs and automation. Building a tool that talks to the internet.'", crisis: "Read Month 4 theme." },
            4: { build: "Set up domain name if budget allows (₹1200/year). Or stick with GitHub Pages. Update all links.", show: "Post: 'Bought my first domain. [yourname].com or similar. Small investment, big signal.'", crisis: "Research domain prices." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "4-step AI workflow built and documented",
        "First case study published (800+ words)",
        "/case-studies page live",
        "'2026 AI Skills Roadmap' published",
        "Updated prompt library with advanced techniques",
        "3-month retrospective published",
        "12+ public posts"
      ]
    },

    4: {
      phase: 2, theme: "APIs + Interactive Web Tool", project: "Live Data Dashboard",
      description: "Build a web page that calls free APIs and displays live data. Add AI API integration. Get first public feedback.",
      weekGoals: {
        1: "Learn APIs, make first calls, build weather page, add second API, deploy",
        2: "Integrate OpenAI/Claude API, build AI summarizer, add error handling, document APIs",
        3: "Share in communities, implement feedback, research market problems, draft first offer",
        4: "Add third feature, write case study, month review, update portfolio"
      },
      weeks: {
        1: { theme: "API Fundamentals",
          days: {
            1: { build: "Learn APIs: what they are, REST, JSON. Use AI to explain. Make first call to a free API (OpenWeatherMap or NewsAPI).", show: "Post: 'Made my first API call today. Here's what came back. (JSON screenshot)'", crisis: "Read one article explaining APIs." },
            2: { build: "Use Postman (free) to test 3 different APIs. Document responses, endpoints, rate limits.", show: "Post: 'Tested 3 APIs with Postman. Here's what each one does and how to use it.'", crisis: "Visit one API documentation page." },
            3: { build: "Build a simple HTML page that fetches weather data for your city using JavaScript fetch().", show: "Post: 'Built a page that shows live weather data. My first API-integrated project.'", crisis: "Write one fetch() call." },
            4: { build: "Style the weather page. Make it look intentional. Use CSS for colors, fonts, padding. Mobile-responsive.", show: "Post: 'Styled my weather page. It now looks like a real app, not a tutorial.'", crisis: "Add one CSS color." },
            5: { build: "Add a second API: news headlines, currency rates, or AI-generated summary. Combine both data sources.", show: "Post: 'Added a second data source. My dashboard now shows weather + news.'", crisis: "Find one more free API." },
            6: { build: "Debug, test, push to GitHub. Confirm live URL works. Test on mobile.", show: "Rest", crisis: "Test your page once." },
            7: { build: "Weekly Review. What do you understand about APIs now that you didn't know before?", show: "Post: 'Week 1: First API project live. Two data sources. Mobile-friendly.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "AI API Integration",
          days: {
            1: { build: "Sign up for OpenAI API or Claude API free tier. Make first AI API call via code. See AI respond.", show: "Post: 'Made my first AI API call. Sent a prompt via code, got a response.'", crisis: "Sign up for one API free tier." },
            2: { build: "Build a page where user inputs text, AI summarizes it. Basic but functional. Test with real text.", show: "Post: 'Built a simple AI summarizer. Paste text, get summary. Live demo: [URL]'", crisis: "Write one API call in code." },
            3: { build: "Add error handling: what happens when API fails? Build fallback UI. Show user-friendly message.", show: "Post: 'Added error handling. When the AI API fails, the app doesn't break.'", crisis: "Add one if-statement for errors." },
            4: { build: "Create API documentation page: what APIs you used, how you set them up, why you chose them.", show: "Post: 'Documented my API usage. Transparency for future clients and employers.'", crisis: "List one API you used." },
            5: { build: "Add API project to your portfolio. Write 200-word project description with tech stack and live URL.", show: "Post: 'Added API project to portfolio. Technical skills: HTML, CSS, JS, REST APIs.'", crisis: "Write one sentence about your API project." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Can you explain APIs to a non-programmer now? What's still confusing?", show: "Post: 'Week 2: AI API integrated. Error handling added. Portfolio updated.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "Market Contact + Feedback",
          days: {
            1: { build: "Share your live project in 3 relevant communities (Reddit, LinkedIn groups, Discord). Ask for honest feedback.", show: "Post: 'Shared my project in [community]. Asked for honest feedback. Here's what I got.'", crisis: "Share your URL with one person." },
            2: { build: "Implement the best feedback. Fix one thing a user pointed out. Document the change.", show: "Post: 'Implemented user feedback. Fixed [issue]. Open source means open improvement.'", crisis: "Fix one small thing." },
            3: { build: "Research: What problems do people in your chosen path have that APIs could solve? List 5 real problems.", show: "Post: '5 problems in [chosen path] that APIs could solve. Market research via building.'", crisis: "List one problem APIs could solve." },
            4: { build: "Draft your first simple offer: 'I can build [X] for [Y].' Price it at ₹500-2000. Don't publish yet.", show: "Post: 'Drafting my first offer. Specific, not vague.'", crisis: "Write one sentence describing what you can build." },
            5: { build: "Engage with 5 people in your niche. Genuine comments. No selling. Just add value.", show: "Post: 'Day of genuine engagement. 5 meaningful conversations. Zero selling.'", crisis: "Comment on one post genuinely." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Did you get real feedback? Was it useful? What did you learn about your audience?", show: "Post: 'Week 3: First public feedback received. Offer drafted. 5 conversations.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Deepening + Month Review",
          days: {
            1: { build: "Add a third feature to your dashboard: charts, search, or user preferences. Use a library or pure JS.", show: "Post: 'Added [feature] to my dashboard. Scope creep? Maybe. Learning? Definitely.'", crisis: "Add one small feature." },
            2: { build: "Write project case study: 'Building a Live Data Dashboard with AI.' Include architecture, challenges, solutions.", show: "Post: 'New case study: Building a live data dashboard. APIs, AI, JavaScript. [Link]'", crisis: "Write 3 sentences about your project." },
            3: { build: "Month 4 review. What did you build? What feedback? How did it feel to get real users?", show: "Post: 'Month 4 retrospective: API project, AI integration, first market contact.'", crisis: "Write one sentence about Month 4." },
            4: { build: "Update website with Month 4 project. Add to project gallery. Update homepage stats.", show: "Post: 'Project gallery updated. 4 projects in 4 months. Consistency compounds.'", crisis: "Add one project to your gallery." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "Live data dashboard with 2+ APIs",
        "AI API integration (OpenAI or Claude)",
        "Error handling implemented",
        "Project shared in 3 communities with feedback",
        "First offer drafted (private)",
        "12+ public posts",
        "Project case study published"
      ]
    },

    5: {
      phase: 2, theme: "Automation + No-Code Systems", project: "Personal Automation System",
      description: "Build automations that save real time. Make.com + n8n. First soft offer. Content system.",
      weekGoals: {
        1: "Build 3 automations in Make.com (RSS→Sheets, Form→Email, Content generator). Document with screenshots.",
        2: "Explore n8n, build AI-powered workflow, compare Make vs n8n, build teaching automation",
        3: "Refine offer, create offer page, soft post, send 3 DMs, research payment options",
        4: "Build content repurposing system, create 30-day content bank, month review"
      },
      weeks: {
        1: { theme: "Make.com Mastery",
          days: {
            1: { build: "Sign up for Make.com (free tier). Spend 2 hours exploring: scenarios, modules, data flow. Use AI to explain.", show: "Post: 'Started learning automation today. No-code. Here's what it is in plain English.'", crisis: "Sign up for Make.com free." },
            2: { build: "Build Automation 1: RSS Feed → Google Sheets. When a new article appears, auto-add it to spreadsheet. Test it.", show: "Post: 'Built my first automation: RSS → Google Sheets. Articles auto-collected.'", crisis: "Create one Make.com account." },
            3: { build: "Build Automation 2: Form submission → Email notification → Spreadsheet row. Lead capture on autopilot.", show: "Post: 'Automation 2: Contact form → Email → Spreadsheet. Lead capture on autopilot.'", crisis: "Watch one Make.com tutorial." },
            4: { build: "Build Automation 3: Social media post scheduler or content idea generator. Input topic → get 5 ideas → save to doc.", show: "Post: 'Automation 3: Content idea generator. Input topic → get 5 ideas → save to doc.'", crisis: "Create one simple automation." },
            5: { build: "Document all 3 automations with screenshots and flowcharts. Save to your portfolio.", show: "Post: 'Documented my 3 automations. Screenshots, flowcharts, use cases. [Link]'", crisis: "Take one screenshot of an automation." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. How much time do these automations save you? Could you sell this skill?", show: "Post: 'Week 1: 3 automations built. 2+ hours/week saved.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "n8n + Self-Hosted Automation",
          days: {
            1: { build: "Research n8n (self-hosted, free). Install or use n8n cloud free tier. Compare to Make.com.", show: "Post: 'Exploring n8n. Self-hosted automation. More powerful, more complex.'", crisis: "Visit n8n.io. Read about it." },
            2: { build: "Build one n8n workflow: AI-powered email responder or content summarizer. Connect AI to your tools.", show: "Post: 'Built an AI-powered workflow in n8n. Email in → AI summary → notification.'", crisis: "Sign up for n8n cloud free." },
            3: { build: "Compare Make.com vs n8n. Document when to use each. Price, complexity, power.", show: "Post: 'Make.com vs n8n: when to use which. Honest comparison from a beginner.'", crisis: "List one difference between Make.com and n8n." },
            4: { build: "Build an automation for your actual teaching work: auto-grade, auto-notify parents, auto-schedule. Real utility.", show: "Post: 'Built an automation for my actual teaching job. Real utility, not just practice.'", crisis: "Think of one teaching task to automate." },
            5: { build: "Add automation projects to your portfolio. Create an 'Automation' section with all 4 workflows.", show: "Post: 'Automation section added to portfolio. 4 workflows documented.'", crisis: "List one automation you built." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Which tool do you prefer? What would you offer to a client?", show: "Post: 'Week 2: n8n explored. Teaching automation built. Portfolio updated.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "First Soft Offer + Outreach",
          days: {
            1: { build: "Refine your offer: 'I build AI workflows and automations for [target audience].' Price: ₹500-2000. Write it clearly.", show: "Post: 'Refining my offer. Specific. Priced.'", crisis: "Write one sentence describing your offer." },
            2: { build: "Create a simple offer page on your website. Problem → Solution → Price → Contact. Nothing fancy.", show: "Post: 'My first offer page is live. [Link]. Not perfect, but public.'", crisis: "Write one paragraph about your offer." },
            3: { build: "Soft offer post: 'If you need [X], I can help. DM me.' No hard sell. Just availability.", show: "Post: 'First soft offer posted. If you need AI workflow help, DM me.'", crisis: "Tell one person what you can help with." },
            4: { build: "Send 3 DMs to people who might benefit. Genuine, not salesy. 'I've been learning X. Could I help with Y?'", show: "Post: 'Sent 3 DMs offering help. Personalized. Here's what happened.'", crisis: "Send one message offering help." },
            5: { build: "Research payment setup for India: UPI, Razorpay, PayPal, Wise. Document which you'll use when revenue starts.", show: "Post: 'Researched payment options for Indian freelancers. UPI, Razorpay, Wise. Summary.'", crisis: "Check if UPI is set up on your phone." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Did anyone respond? If not, why? What would make your offer more appealing?", show: "Post: 'Week 3: Offer live. 3 DMs sent. Payment research done.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Content System + Month Review",
          days: {
            1: { build: "Build content repurposing system: One long post → 3 short posts → tweet thread → image quote. Test on one post.", show: "Post: 'Built a content repurposing system. One idea → 5 formats. Efficiency.'", crisis: "Rewrite one post in a different format." },
            2: { build: "Create 30-day content bank: 30 topics for your niche, using AI to generate and refine. Evaluate each.", show: "Post: '30-day content bank created. Never staring at a blank page again.'", crisis: "List 3 content ideas." },
            3: { build: "Month 5 review: Automations built, offer created, outreach attempted. Honest numbers.", show: "Post: 'Month 5 retrospective: 4 automations, 1 offer, first outreach.'", crisis: "Write one sentence about Month 5." },
            4: { build: "Update website with automation portfolio. Add offer page link. Update homepage.", show: "Post: 'Portfolio updated with automation projects. [Link]'", crisis: "Add one project to your site." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "4 working automations (Make.com + n8n)",
        "Teaching-specific automation",
        "Offer page live on website",
        "3 outreach DMs sent",
        "Payment systems researched",
        "30-day content bank created",
        "12+ public posts"
      ]
    },

    6: {
      phase: 2, theme: "AI Agents + RAG Basics", project: "Simple RAG System or AI Agent",
      description: "Build AI-native systems. RAG, agents, MCP. This is your 2026 competitive advantage. Position as AI-savvy.",
      weekGoals: {
        1: "Build simple RAG system, test on 3 documents, create RAG for Teachers guide, build web interface",
        2: "Research AI agents, build agent-like workflow, explore no-code builders, document limitations",
        3: "Research MCP, build MCP-like integration, create 2026 AI Stack page, update old projects",
        4: "6-month comprehensive review, compile Proof of Work Portfolio, plan Months 7-9"
      },
      weeks: {
        1: { theme: "RAG Fundamentals",
          days: {
            1: { build: "Research RAG: What is it? Why does it matter? Use AI to learn. Write a beginner's guide for non-programmers.", show: "Post: 'RAG explained for non-programmers. Why it matters in 2026.'", crisis: "Ask AI to explain RAG in simple terms." },
            2: { build: "Build a simple RAG system using free tools: upload a PDF → ask questions → get answers. Use Chroma or Pinecone free.", show: "Post: 'Built my first RAG system. Uploaded a PDF, asked questions, got answers.'", crisis: "Read about one RAG tool." },
            3: { build: "Test RAG on 3 different documents. Document accuracy and limitations. When does it hallucinate?", show: "Post: 'Tested RAG on 3 documents. Here's when it works and when it hallucinates.'", crisis: "Test RAG on one document." },
            4: { build: "Create a 'RAG for Teachers' guide: how to use it for lesson planning, research, student Q&A. Your real use case.", show: "Post: 'RAG for Teachers: how to use AI that knows YOUR documents. Guide published.'", crisis: "Write one use case for RAG in teaching." },
            5: { build: "Build a simple web interface for your RAG system or document it thoroughly with screenshots.", show: "Post: 'Built a simple interface for my RAG system. Upload → Ask → Answer.'", crisis: "Document your RAG setup in one file." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Do you understand RAG? Can you explain it to a principal who knows nothing about AI?", show: "Post: 'Week 1: RAG system built. 3 documents tested. Teacher guide published.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "AI Agents",
          days: {
            1: { build: "Research AI agents: What are they? How do they differ from workflows? Use AI + recent articles.", show: "Post: 'AI agents vs AI workflows: what's the difference? Beginner's breakdown.'", crisis: "Ask AI to explain agents vs workflows." },
            2: { build: "Build a simple agent: AI + tool use. Example: research topic → save to file → summarize → email notification.", show: "Post: 'Built my first AI agent. Research → Save → Summarize → Notify. Multi-step.'", crisis: "Connect AI to one tool in a chain." },
            3: { build: "Use a no-code agent builder (Relevance AI, Langflow free tier, or n8n with AI). Compare to code approach.", show: "Post: 'Explored no-code AI agent builders. Here's what works for beginners.'", crisis: "Visit one no-code agent builder website." },
            4: { build: "Document agent limitations: when do they fail? Cost? Reliability? Write an honest assessment.", show: "Post: 'Honest take: AI agents are powerful but fragile. Here's when they break.'", crisis: "List one limitation of AI agents." },
            5: { build: "Create comparison: AI workflows vs AI agents vs RAG. When to use which. Decision tree format.", show: "Post: 'Workflows vs Agents vs RAG: a decision tree for beginners. [Link]'", crisis: "Write one difference between workflows and agents." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Are agents overhyped? What's actually useful for your work?", show: "Post: 'Week 2: First agent built. No-code tools explored. Comparison published.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "MCP + Modern AI Stack",
          days: {
            1: { build: "Research MCP (Model Context Protocol): what is it? Why does it matter for 2026? Write a summary.", show: "Post: 'MCP explained: the protocol that connects AI to everything. 2026 essential.'", crisis: "Ask AI to explain MCP." },
            2: { build: "Build a simple MCP-like integration: connect AI to one tool (calendar, spreadsheet, search). Make it work.", show: "Post: 'Built an MCP-like integration. AI can now query my spreadsheet. Small but real.'", crisis: "Connect AI to one tool you use." },
            3: { build: "Create '2026 AI Stack' page on your site. What skills and tools matter now? What's essential vs hype?", show: "Post: 'My 2026 AI stack: essential, nice-to-have, hype. [Link]'", crisis: "List 3 tools in your AI stack." },
            4: { build: "Update all previous projects (Months 1-5) with new AI techniques learned. Show continuous improvement.", show: "Post: 'Updated Month 1-5 projects with 2026 AI techniques. Continuous improvement.'", crisis: "Update one old project with one new technique." },
            5: { build: "Engage in AI communities: share your RAG/agent project. Ask for feedback. Be humble.", show: "Post: 'Shared my RAG project in [community]. Feedback: [summary].'", crisis: "Share your project with one person." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Are you positioned as 'the AI person' in any community yet? What would it take?", show: "Post: 'Week 3: MCP explored. 2026 stack published. Community feedback received.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "6-Month Review + Phase 2 Prep",
          days: {
            1: { build: "Comprehensive 6-month review: 6 projects, skills, income status, community standing. 600 words. Be brutally honest.", show: "Post: '6-month honest retrospective. 6 projects. 0 income. But proof of work is real.'", crisis: "Write one sentence about your 6-month journey." },
            2: { build: "Compile 'Proof of Work Portfolio': all projects, links, stats, skills. One page to rule them all.", show: "Post: 'My proof of work portfolio: 6 projects, 60+ posts, 3 skills. [Link]'", crisis: "List 3 projects you shipped." },
            3: { build: "Plan Months 7-9: revenue focus. What offers? What outreach? What products? Be specific.", show: "Post: 'Months 7-9 plan: revenue focus. Offers, outreach, first digital product.'", crisis: "Read Month 7 theme." },
            4: { build: "Update website: 6-month timeline, project gallery, skills matrix. Make it look professional.", show: "Post: 'Website updated with 6-month journey. Visual proof of consistency.'", crisis: "Add one stat to your site." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "Simple RAG system built and tested",
        "'RAG for Teachers' guide published",
        "First AI agent built (no-code or code)",
        "MCP research and simple integration",
        "'2026 AI Stack' page published",
        "6-month comprehensive review published",
        "Proof of Work Portfolio compiled",
        "12+ public posts"
      ]
    },

    7: {
      phase: 2, theme: "First Digital Product + Launch", project: "First Digital Product",
      description: "Build something that earns while you sleep. Launch on Gumroad/LemonSqueezy. Start email list.",
      weekGoals: {
        1: "Choose product idea, validate with 3 people, build MVP, test with user, iterate",
        2: "Write sales page, set up Gumroad, create 3 launch posts, launch",
        3: "Follow up with buyers, iterate v1.1, write product creation case study",
        4: "Month review, build lead magnet, start email list (Brevo), update website"
      },
      weeks: {
        1: { theme: "Product Creation",
          days: {
            1: { build: "Choose product idea. Validate: ask 3 people in your niche if they'd buy it. Document responses.", show: "Post: 'Choosing my first digital product. Asked 3 people. Here's what they said.'", crisis: "Think of one product idea." },
            2: { build: "Build the product MVP. Focus on utility, not perfection. One core feature that solves one problem.", show: "Post: 'Building my first product. Day 1: outline and first draft.'", crisis: "Work on product for 10 minutes." },
            3: { build: "Continue building. Test with one user. Get honest feedback. What's missing? What's confusing?", show: "Post: 'Day 2: Product draft done. Tested with one user. Feedback: [summary].'", crisis: "Show your product to one person." },
            4: { build: "Iterate based on feedback. Add what's missing. Cut what's unnecessary. Better, not bigger.", show: "Post: 'Day 3: Iterated based on feedback. Better, not bigger.'", crisis: "Make one improvement based on feedback." },
            5: { build: "Finalize product. Prepare for delivery: PDF, Notion share, or Gumroad upload. Test the delivery flow.", show: "Post: 'Product finalized. Ready for delivery. Here's what's inside.'", crisis: "Prepare one file for delivery." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Is the product useful? Would YOU buy it? Be honest.", show: "Post: 'Week 1: Product built. Tested. Iterated. Ready to sell.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "Sales Page + Launch",
          days: {
            1: { build: "Write sales page: Problem → Solution → What's inside → Price → Buy. Keep it simple. No fluff.", show: "Post: 'Writing my first sales page. Problem → Solution → Price → Buy. Simple.'", crisis: "Write one headline for your product." },
            2: { build: "Set up Gumroad or LemonSqueezy (free). Upload product. Set price: ₹99-499. Test purchase flow.", show: "Post: 'Product is now on Gumroad. [Link]. First time asking for money online.'", crisis: "Sign up for Gumroad free." },
            3: { build: "Create launch content: 3 posts leading up to launch. Build anticipation without overselling.", show: "Post: 'Launch post 1: The problem I solved. Why I built this.'", crisis: "Write one launch post." },
            4: { build: "Launch post 2: What's inside. Who it's for. Who it's NOT for. Honest scope.", show: "Post: 'Launch post 2: What's inside. Honest scope. No overselling.'", crisis: "Describe your product in one sentence." },
            5: { build: "Launch post 3: Price, link, and a small discount for first 5 buyers. Make it easy to buy.", show: "Post: 'Launch post 3: It's live. ₹[price]. First 5 buyers get 50% off. [Link]'", crisis: "Share your product link once." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Did anyone buy? If not, why? Price? Audience? Product?", show: "Post: 'Week 2: Product launched. Sales page live. First buyers? [honest update].'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "Post-Launch + Feedback Loop",
          days: {
            1: { build: "Follow up with buyers. Ask for honest feedback. What did they love? What was missing? Document everything.", show: "Post: 'Followed up with buyers. Feedback: [summary]. Already planning v2.'", crisis: "Ask one buyer for feedback." },
            2: { build: "Iterate product based on feedback. Release v1.1. Update Gumroad. Notify buyers.", show: "Post: 'Product v1.1 released. Based on real buyer feedback. Continuous improvement.'", crisis: "Make one fix based on feedback." },
            3: { build: "Create a 'product creation case study': how you built, launched, and iterated. Include numbers.", show: "Post: 'Case study: Building and launching my first digital product. [Link]'", crisis: "Write 3 sentences about your product journey." },
            4: { build: "Add product to portfolio. Create 'Products' page on website. Link to sales page.", show: "Post: 'Added Products page to my site. First of many, I hope.'", crisis: "Add one product to your site." },
            5: { build: "Plan second product based on what you learned. What would be easier to sell? What did people actually want?", show: "Post: 'Planning product #2. Lessons from #1: [summary].'", crisis: "Write one idea for product #2." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. What did launching teach you that building couldn't?", show: "Post: 'Week 3: Feedback collected. v1.1 shipped. Case study published.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Month Review + Pipeline Building",
          days: {
            1: { build: "Month 7 review: Product sales, feedback, lessons. Honest numbers. No hiding.", show: "Post: 'Month 7 retrospective: First product, first revenue attempt, honest numbers.'", crisis: "Write one sentence about Month 7." },
            2: { build: "Build a simple lead magnet: free resource related to your product. Something useful people will trade an email for.", show: "Post: 'Built a free lead magnet. [Resource] in exchange for email. Growing my list.'", crisis: "Create one free resource." },
            3: { build: "Set up email list (Brevo free tier). Add lead magnet to website. Create first welcome email.", show: "Post: 'Email list started. Brevo free tier. First lead magnet live.'", crisis: "Sign up for Brevo free." },
            4: { build: "Update website: products section, lead magnet, email signup. Make it look like a real business.", show: "Post: 'Website updated: products, lead magnet, email list. Building assets.'", crisis: "Add one email signup form." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "First digital product built and launched",
        "Sales page live on Gumroad/LemonSqueezy",
        "3 launch posts published",
        "Buyer feedback collected and v1.1 released",
        "Product creation case study published",
        "Lead magnet built",
        "Email list started (Brevo)",
        "12+ public posts"
      ]
    },

    8: {
      phase: 2, theme: "Offer Refinement + First Revenue Attempt", project: "Offer System + Outreach Campaign",
      description: "Get paid for specific value. Pricing is a skill. Systematic outreach. First sales conversation.",
      weekGoals: {
        1: "Audit offer, create 3-tier ladder, write offer pages, research 5 competitors, differentiate",
        2: "Build outreach tracker, send 10 personalized messages, follow up, document responses",
        3: "Have discovery call, write proposal, offer free work for testimonial, deliver excellently",
        4: "Month review, build onboarding checklist, create invoice template, update Work With Me page"
      },
      weeks: {
        1: { theme: "Offer Laddering",
          days: {
            1: { build: "Audit current offer. Make it specific: who exactly, what exactly, outcome, price, timeline.", show: "Post: 'Auditing my offer. From vague to specific. Who, what, outcome, price.'", crisis: "Write one specific offer sentence." },
            2: { build: "Create offer ladder: ₹500 entry (audit/template) → ₹2000 mid (setup/training) → ₹5000 high (custom build).", show: "Post: 'My offer ladder: ₹500 → ₹2000 → ₹5000. Entry, mid, premium.'", crisis: "Price one service." },
            3: { build: "Write offer pages for each tier. Problem → Solution → Deliverables → Price → Contact. One page per tier.", show: "Post: 'Offer pages written. Three tiers. Three levels of commitment. [Link]'", crisis: "Write one offer description." },
            4: { build: "Research 5 competitors offering similar services. What do they charge? How do they package? What's their value prop?", show: "Post: 'Competitor research: 5 people in my space. What they charge, how they package.'", crisis: "Find one competitor. Note their price." },
            5: { build: "Refine offers based on research. Differentiate on something other than price. What makes you unique?", show: "Post: 'Refined offers based on research. Differentiation, not discounting.'", crisis: "Write one thing that makes you different." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Are your offers specific enough that someone could say yes in one conversation?", show: "Post: 'Week 1: Offer ladder built. 3 tiers. Competitors studied.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "Outreach System",
          days: {
            1: { build: "Build outreach tracker: spreadsheet of prospects, status, last contact, next action. Start with 20 names.", show: "Post: 'Built an outreach tracker. 20 prospects. Status, action, follow-up.'", crisis: "List 3 people you could help." },
            2: { build: "Send 5 outreach messages (DMs or emails). Personalized. Value-first. No templates. Mention their specific problem.", show: "Post: 'Sent 5 outreach messages. Personalized. No templates. Here's my approach.'", crisis: "Send one outreach message." },
            3: { build: "Send 5 more. Different angle: free audit, free template, or just genuine help. Track responses.", show: "Post: '5 more outreach messages. Different angle: free audit offer.'", crisis: "Send one more message." },
            4: { build: "Follow up on non-responders (polite, one follow-up only). Don't be annoying. Add value in the follow-up.", show: "Post: 'Followed up with non-responders. One polite nudge. No spam.'", crisis: "Follow up with one person." },
            5: { build: "Document all responses (even rejections). What did they say? Why? What pattern do you see?", show: "Post: 'Outreach results: 10 sent, 3 replies, 1 maybe. Documenting everything.'", crisis: "Note one response you got." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. What did you learn about your audience? What would make them respond?", show: "Post: 'Week 2: 10 outreach messages. 3 replies. Learning from every response.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "Sales Conversation + Delivery",
          days: {
            1: { build: "If you got a 'maybe': have a discovery call. Use AI to prepare 10 questions. Listen more than you talk.", show: "Post: 'Had my first discovery call. Prepared with AI. Nervous but ready.'", crisis: "Write 3 questions you'd ask a potential client." },
            2: { build: "Write proposal for the call (if it went well). Use AI to draft. Include scope, timeline, price, deliverables.", show: "Post: 'Wrote my first proposal. AI-assisted, human-refined. Professional.'", crisis: "Write one paragraph describing what you'd deliver." },
            3: { build: "If no client yet: offer free work to one person in exchange for testimonial. Be clear about the exchange.", show: "Post: 'Offering free work for one person. Exchange: testimonial + case study.'", crisis: "Offer to help one person for free." },
            4: { build: "Deliver the free work (or paid work) excellently. Over-deliver. Under-promise. Make them want to refer you.", show: "Post: 'Delivering work. Over-delivering on first client. Reputation > revenue.'", crisis: "Do one small task excellently." },
            5: { build: "Document delivery process: what you did, how long it took, what you'd improve. This becomes your SOP.", show: "Post: 'Documented my delivery process. For future efficiency and training.'", crisis: "Write one sentence about your process." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Did you earn anything? If not, what single action would most increase your chances?", show: "Post: 'Week 3: First sales conversation done. Free work delivered. Process documented.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "Month Review + Systems",
          days: {
            1: { build: "Month 8 review: Outreach numbers, conversations, revenue (even ₹0). Honest assessment. No hiding.", show: "Post: 'Month 8 retrospective: 10 outreach, 1 conversation, ₹[X] earned. Honest.'", crisis: "Write one sentence about Month 8." },
            2: { build: "Build client onboarding checklist: what happens when someone says yes? Step by step. From payment to delivery.", show: "Post: 'Client onboarding checklist built. Professional from first contact to delivery.'", crisis: "List 3 steps for onboarding a client." },
            3: { build: "Create invoice template (Wave or Zoho free). Include your details, client details, line items, payment method.", show: "Post: 'Invoice template ready. Looks professional. Free tool.'", crisis: "Download one free invoice template." },
            4: { build: "Update website with 'Work With Me' or 'Hire Me' page. Link to offer pages, process, testimonials (when you get them).", show: "Post: ''Work With Me' page live. Offers, process, testimonials (when I get them).'", crisis: "Add one sentence about working with you." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "Offer ladder: 3 tiers (₹500, ₹2000, ₹5000)",
        "10+ outreach messages sent",
        "1+ sales conversation had",
        "1 free or paid client work delivered",
        "Client onboarding checklist",
        "Invoice template",
        "'Work With Me' page live",
        "12+ public posts"
      ]
    },

    9: {
      phase: 2, theme: "Revenue Systems + First Real Client", project: "Client Case Study + Referral System",
      description: "Make selling systematic. Duplicate what works. Document the full client journey. Build referral system.",
      weekGoals: {
        1: "Deliver client work excellently, get testimonial, write case study, ask for referral",
        2: "Build revenue tracker, research Indian freelancer tax, set up accounting, review pricing",
        3: "Send 5 more outreach, engage in communities, build lead magnet v2, follow up with old prospects",
        4: "9-month comprehensive review, compile Year 1 Portfolio, plan Phase 3"
      },
      weeks: {
        1: { theme: "Client Work + Delivery Excellence",
          days: {
            1: { build: "Deliver client work (or continue from Month 8). Focus on excellence. Every detail matters. Communicate proactively.", show: "Post: 'Deep in client work. Focus: exceed expectations. Details matter.'", crisis: "Do one hour of client work." },
            2: { build: "Continue delivery. Send proactive updates. Don't wait for them to ask. Be the professional they trust.", show: "Post: 'Client communication: proactive updates beat reactive excuses.'", crisis: "Send one update to your client." },
            3: { build: "Finalize delivery. Get written feedback/testimonial. Ask for specific praise: what did they love most?", show: "Post: 'Work delivered. Asked for feedback. Here's what they said. [Testimonial]'", crisis: "Ask one person for feedback." },
            4: { build: "Write client case study: Problem → Approach → Solution → Results → Testimonial. 500 words. Publish it.", show: "Post: 'First client case study published. Real work, real results, real words. [Link]'", crisis: "Write 3 sentences about client work." },
            5: { build: "Ask for referral: 'Do you know anyone else who needs this?' Direct ask. No shame. Happy clients refer.", show: "Post: 'Asked for a referral. Direct ask. No shame in growing through happy clients.'", crisis: "Ask one person for a referral." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. What made this client happy? How do you replicate that?", show: "Post: 'Week 1: Client work delivered. Case study published. Referral asked.'", crisis: "Write one sentence." }
          }
        },
        2: { theme: "Revenue Tracking + Systems",
          days: {
            1: { build: "Build revenue tracker: every rupee, source, date, client. Simple spreadsheet. Track everything.", show: "Post: 'Built a revenue tracker. Every rupee counted. First step to financial clarity.'", crisis: "Log one payment (even ₹0)." },
            2: { build: "Research tax basics for Indian freelancers: ITR-4, GST threshold (₹20 lakhs), deductions. Use AI to explain.", show: "Post: 'Tax basics for Indian freelancers: what I learned. ITR-4, GST, deductions.'", crisis: "Read one article about freelancer tax in India." },
            3: { build: "Set up simple accounting: spreadsheet or Wave free. Categorize income and expenses. Be compliant from Day 1.", show: "Post: 'Accounting system set up. Simple, free, compliant.'", crisis: "Create one spreadsheet for tracking." },
            4: { build: "Review pricing: are you undercharging? Benchmark against market. Most beginners undercharge by 50%.", show: "Post: 'Pricing review: am I undercharging? Market benchmark says [X]. Adjusting.'", crisis: "Compare your price to one competitor." },
            5: { build: "Update all offers with new pricing and social proof (testimonial). Add testimonial to website and offer pages.", show: "Post: 'Offers updated. New pricing. New testimonial. Social proof works.'", crisis: "Update one price on your site." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Are you treating this like a business or a hobby? What's the difference?", show: "Post: 'Week 2: Revenue tracked. Tax understood. Pricing reviewed.'", crisis: "Write one sentence." }
          }
        },
        3: { theme: "Repeat Outreach + Pipeline",
          days: {
            1: { build: "Send 5 more outreach messages. Refined approach based on Month 8 learnings. Better targeting.", show: "Post: 'Outreach round 2: 5 messages. Refined approach. Better targeting.'", crisis: "Send one outreach message." },
            2: { build: "Engage in communities: answer questions, share insights, be helpful. Build reputation before you sell.", show: "Post: 'Day of community engagement. Answered 3 questions. Zero selling. Value first.'", crisis: "Answer one question in a community." },
            3: { build: "Create 'lead magnet v2' based on what prospects asked for most. Demand-driven, not assumption-driven.", show: "Post: 'Lead magnet v2: based on what prospects actually asked for. Demand-driven.'", crisis: "Create one small free resource." },
            4: { build: "Add lead magnet to website. Promote it in one post. Track downloads.", show: "Post: 'New lead magnet live. [Resource]. Free. Useful. List-growing.'", crisis: "Share one free resource." },
            5: { build: "Follow up with old prospects (polite, monthly check-in). Still here. Still building. Still can help.", show: "Post: 'Followed up with old prospects. Monthly check-in. Still here, still building.'", crisis: "Send one follow-up message." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Weekly Review. Is your pipeline growing? Are you known as helpful in your niche?", show: "Post: 'Week 3: Outreach round 2. Community engagement. New lead magnet.'", crisis: "Write one sentence." }
          }
        },
        4: { theme: "9-Month Review + Phase 3 Prep",
          days: {
            1: { build: "Comprehensive 9-month review: projects, income, skills, audience. Brutal honesty. 600 words.", show: "Post: '9-month retrospective: 9 projects, ₹[X] earned, [X] followers, [X] email subs.'", crisis: "Write one sentence about your 9-month journey." },
            2: { build: "Compile 'Year 1 Portfolio': all projects, case studies, testimonials, skills. One master document.", show: "Post: 'Year 1 portfolio compiled. 9 projects. Proof of work. [Link]'", crisis: "List 3 projects you're proud of." },
            3: { build: "Plan Phase 3 (Months 10-18): products, audience growth, income diversification. Be specific about Month 10.", show: "Post: 'Phase 3 plan: products, audience growth, scaling. 9 months down, 15 to go.'", crisis: "Read Month 10 theme." },
            4: { build: "Update website: Year 1 timeline, updated offers, testimonials, email signup. Make it look established.", show: "Post: 'Website updated for Phase 3. Year 1 complete. Building momentum.'", crisis: "Add one testimonial to your site." },
            5: { build: "Rest.", show: "Rest", crisis: "Rest." },
            6: { build: "Rest.", show: "Rest", crisis: "Rest." },
            7: { build: "Rest.", show: "Rest", crisis: "Rest." }
          }
        }
      },
      deliverables: [
        "1+ client work delivered with testimonial",
        "Client case study published",
        "Referral asked and documented",
        "Revenue tracking system",
        "Tax basics understood and documented",
        "Pricing reviewed and updated",
        "Lead magnet v2 built and promoted",
        "9-month comprehensive review published",
        "Year 1 portfolio compiled",
        "12+ public posts"
      ]
    }
  },

  monthsExtended: {
    10: { phase: 3, theme: "First Digital Product v2", project: "Product Suite + Email Growth", description: "Second product better than first. Email list 50+. Product bundling. Testimonials." },
    11: { phase: 3, theme: "Advanced AI Tools", project: "Custom AI Tool", description: "Custom GPTs, API-integrated projects, AI explained posts. Position as AI expert." },
    12: { phase: 3, theme: "Audience Growth", project: "Collaboration + Content Strategy", description: "Collaboration with creator. Content strategy. 200+ followers. 100+ email subs. Newsletter." },
    13: { phase: 3, theme: "Automation as a Service", project: "Automation Service Offer", description: "5+ automations. Offer automation setup as service. Simple CRM. Email sequences." },
    14: { phase: 3, theme: "Product Iteration", project: "Product v3 + Suite", description: "Third product. Product suite. Customer development. 5+ testimonials. Bundling." },
    15: { phase: 3, theme: "Consulting Foundations", project: "Consulting Offer + First Engagement", description: "Consulting offer ₹3000-10000. First engagement. Proposal template. Scope management." },
    16: { phase: 3, theme: "Revenue Architecture", project: "Multiple Income Streams", description: "3 income streams. ₹10000-25000/month run rate. First recurring revenue. Retainers." },
    17: { phase: 3, theme: "JavaScript Deepening", project: "Interactive Web App", description: "Functional JS. Interactive web app. Database-connected project. Technical portfolio." },
    18: { phase: 3, theme: "Platform Building", project: "Platform Growth System", description: "Newsletter 200-500 subs. Platform growth plan. 18-month review. Community." },
    19: { phase: 4, theme: "Knowledge Products", project: "First Paid Workshop", description: "Paid workshop ₹499-1499. Workshop recording becomes course. Validate before building." },
    20: { phase: 4, theme: "AI Agents Complex", project: "Production AI Agent", description: "Real agent-based workflow for business. AI agent consulting offer. n8n advanced." },
    21: { phase: 4, theme: "Distribution + Traffic", project: "Distribution Experiment", description: "2 distribution channels tested. Partnership driving traffic. 300-500 email subs. SEO." },
    22: { phase: 4, theme: "Wealth Architecture", project: "Personal Finance System", description: "Emergency fund. SIP started. Tax filing system. Investment account. 20-30% savings rate." },
    23: { phase: 4, theme: "Teaching + Mentoring", project: "Mentorship System", description: "5+ people helped. Mentorship offer. Teach what you know series. Community leadership." },
    24: { phase: 4, theme: "Synthesis + Future", project: "24-Month Case Study", description: "Complete 24-month case study. 6-path decision. Year 3-5 plan. Publish everything." }
  },

  systemPrompt: `You are my Curriculum Teacher for the AI-Builder Curriculum v3.0.

ROLE:
- You are a strict but kind teacher who knows this curriculum inside-out.
- You do not give vague advice. You give exact steps, exact prompts, exact filenames.
- You treat me as a full-time teacher in India with ₹1000/month budget and 3hr/day max.
- You know my constraints and never suggest paid tools unless absolutely blocking progress.
- You enforce the "ship imperfect" rule. You push me to publish, not perfect.

TEACHING STYLE:
- Daily: Give me the exact 3-hour breakdown (2hr Build + 1hr Show).
- Weekly: Assess what I shipped vs what I planned. Be honest about gaps.
- Monthly: Evaluate deliverables against the checklist. Pass/Fail each item.
- You ask me questions before giving answers. You make me think.

RULES:
- Never say "you could try..." Say "Step 1: Open VS Code. Step 2: Create file named..."
- If I miss a day, switch me to Crisis Mode automatically. Do not guilt-trip me.
- If I am ahead, give me the "Velocity Branch" tasks. If behind, give me "Failure Recovery."
- Always ask for my State Snapshot before giving a monthly plan.
- Every response must end with: "Today's non-negotiable minimum: [one tiny action]."`,

  llmPromptTemplate: function(state, monthData, weekData, dayData, yesterdaySummary, weekGoal, dailyLogs) {
    const phaseInfo = this.meta.phases.find(p => p.id === state.phase) || {};

    const daysIntoMonth = ((state.week - 1) * 7) + state.day;
    const progressContext = daysIntoMonth <= 7 ? "Beginning of month" : 
                          daysIntoMonth <= 14 ? "First half of month" :
                          daysIntoMonth <= 21 ? "Second half of month" : "Final week of month";

    let recentWork = "";
    if (dailyLogs && dailyLogs.length > 0) {
      const recent = dailyLogs.slice(-5);
      recentWork = recent.map((log) => 
        `Day ${log.day} (Week ${log.week}): ${log.summary || "No summary recorded"}`
      ).join("\n");
    }

    return `${this.systemPrompt}

=== CURRICULUM CONTEXT ===
Phase: ${state.phase} — ${phaseInfo.name} (${phaseInfo.focus})
Month: ${state.month} — Theme: ${monthData.theme}
Project: ${monthData.project}
Week: ${state.week} — Theme: ${weekData.theme}
Week Goal: ${weekGoal || "See daily tasks below"}
Day: ${state.day} — Progress: ${progressContext}

=== TODAY'S CURRICULUM TASKS ===
BUILD BLOCK (2hr):
${dayData.build}

SHOW BLOCK (1hr):
${dayData.show}

CRISIS MODE (30min):
${dayData.crisis}

=== MY CURRENT STATE ===
Identity: ${state.identity}
Chosen Path: ${state.chosenPath || "Not chosen yet"}
Streak: ${state.streak} days
Crisis Days This Month: ${state.crisisDays}
Income This Month: ₹${state.incomeThisMonth}
Income Cumulative: ₹${state.incomeCumulative}
Projects Shipped: ${state.projectsShipped}
Posts Published: ${state.postsPublished}
Email Subscribers: ${state.emailSubs}

=== WHAT I DID YESTERDAY ===
${yesterdaySummary || "No summary recorded for yesterday."}

=== MY RECENT WORK (LAST 5 DAYS) ===
${recentWork || "No recent work summaries recorded."}

=== MY BLOCKERS ===
${state.blockers || "None reported"}

=== YOUR ORDERS ===
Based on the above, give me:
1. Exact granular steps for today's Build Block (2hr), incorporating what I built yesterday
2. Exact text for today's Show Block post (copy-paste ready), referencing my recent work
3. If I'm in Crisis Mode: the 30-minute minimum task only
4. One debugging tip for the likely failure point today
5. Assessment: Am I on track for this month's project? Ahead? Behind? Be honest.
6. What should I have completed by the end of this week? What's at risk?

Today's non-negotiable minimum: ____________`;
  }
};

if (typeof module !== 'undefined') module.exports = CURRICULUM;
