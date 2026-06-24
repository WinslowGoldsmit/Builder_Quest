// AI Builder Quest - Improved Application
// Daily Summary, Yesterday Context, Auto-save, Better LLM Prompts

class BuilderQuestApp {
  constructor() {
    this.state = this.loadState();
    this.init();
  }

  init() {
    this.renderHeader();
    this.renderNav();
    this.showSection('dashboard');
    this.registerServiceWorker();
  }

  // ==================== STATE MANAGEMENT ====================
  defaultState() {
    return {
      month: 1,
      week: 1,
      day: 1,
      phase: 1,
      identity: 'Consumer',
      chosenPath: '',
      streak: 0,
      crisisDays: 0,
      incomeThisMonth: 0,
      incomeCumulative: 0,
      projectsShipped: 0,
      postsPublished: 0,
      emailSubs: 0,
      yesterday: '',
      blockers: '',
      biggestWin: '',
      biggestStruggle: '',
      completedDays: {},
      completedDeliverables: {},
      lastActive: new Date().toISOString().split('T')[0],
      mode: 'full',
      dailyLogs: [] // NEW: Array of {month, week, day, summary, blockers, shipped}
    };
  }

  loadState() {
    try {
      const saved = localStorage.getItem('builderQuestState');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure dailyLogs exists for older saves
        if (!parsed.dailyLogs) parsed.dailyLogs = [];
        return { ...this.defaultState(), ...parsed };
      }
    } catch (e) { console.error('Load error:', e); }
    return this.defaultState();
  }

  saveState() {
    try {
      localStorage.setItem('builderQuestState', JSON.stringify(this.state));
      this.showAutoSave();
    } catch (e) { console.error('Save error:', e); }
  }

  showAutoSave() {
    const indicator = document.getElementById('autosave-indicator');
    if (indicator) {
      indicator.classList.add('visible');
      setTimeout(() => indicator.classList.remove('visible'), 2000);
    }
  }

  // ==================== SERVICE WORKER ====================
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('SW registered:', reg.scope))
        .catch(err => console.error('SW registration failed:', err));
    }
  }

  // ==================== RENDERING ====================
  renderAll() {
    this.renderHeader();
    this.renderNav();
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
      const id = activeSection.id;
      this.showSection(id);
    }
  }

  renderHeader() {
    const header = document.getElementById('app-header');
    if (!header) return;
    const monthData = CURRICULUM.months[this.state.month] || CURRICULUM.monthsExtended[this.state.month];
    const phaseInfo = CURRICULUM.meta.phases.find(p => p.id === this.state.phase) || {};

    header.innerHTML = `
      <div class="header-top">
        <div class="logo">🏗️ BUILDER QUEST</div>
        <div class="coin-counter">
          <div class="coin-icon">🪙</div>
          <span>${this.state.streak} STREAK</span>
        </div>
      </div>
      <div class="stats-bar">
        <div class="stat-pill">
          <span class="stat-label">WORLD</span>
          <span class="stat-value">${this.state.phase}-${this.state.month}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">LEVEL</span>
          <span class="stat-value">W${this.state.week}D${this.state.day}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">COINS</span>
          <span class="stat-value">₹${this.state.incomeCumulative}</span>
        </div>
      </div>
    `;
  }

  renderNav() {
    const nav = document.getElementById('nav-bar');
    if (!nav) return;
    const sections = [
      { id: 'dashboard', label: '🏠 HOME' },
      { id: 'today', label: '📋 TODAY' },
      { id: 'curriculum', label: '📖 MAP' },
      { id: 'progress', label: '📊 STATS' },
      { id: 'prompt', label: '🤖 TEACHER' },
      { id: 'settings', label: '⚙️ SET' }
    ];
    nav.innerHTML = sections.map(s => 
      `<button class="nav-btn ${s.id === this.currentSection ? 'active' : ''}" onclick="app.showSection('${s.id}')">${s.label}</button>`
    ).join('');
  }

  showSection(id) {
    this.currentSection = id;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const section = document.getElementById(id);
    if (section) {
      section.classList.add('active');
      this['render' + id.charAt(0).toUpperCase() + id.slice(1)]();
    }
    this.renderNav();
    window.scrollTo(0, 0);
  }

  // ==================== DASHBOARD ====================
  renderDashboard() {
    const el = document.getElementById('dashboard-content');
    if (!el) return;
    const monthData = CURRICULUM.months[this.state.month] || CURRICULUM.monthsExtended[this.state.month];
    const phaseInfo = CURRICULUM.meta.phases.find(p => p.id === this.state.phase) || {};
    const dayKey = `${this.state.month}-${this.state.week}-${this.state.day}`;
    const isDone = this.state.completedDays[dayKey];

    const completedDays = Object.keys(this.state.completedDays).length;
    const progressPct = Math.min(100, Math.round((completedDays / 84) * 100));

    // Get yesterday's log for dashboard preview
    const yesterdayLog = this.getYesterdayLog();
    const yesterdayPreview = yesterdayLog && yesterdayLog.summary 
      ? yesterdayLog.summary.substring(0, 100) + (yesterdayLog.summary.length > 100 ? '...' : '')
      : 'No summary yet';

    el.innerHTML = `
      <div class="world-badge">🌍 PHASE ${this.state.phase}: ${phaseInfo.name}</div>

      ${this.state.mode === 'crisis' ? '<div class="crisis-banner">⚠️ CRISIS MODE ACTIVE — 30 MIN ONLY</div>' : ''}

      <div class="card phase-${this.state.phase}">
        <div class="card-header">
          <span class="card-title">MONTH ${this.state.month}: ${monthData.theme}</span>
          <span style="font-family:'Press Start 2P';font-size:8px;color:var(--coin);">${isDone ? '✓ DONE' : '▶ ACTIVE'}</span>
        </div>
        <div class="card-body">
          <p style="margin-bottom:12px;font-size:14px;"><strong>Project:</strong> ${monthData.project}</p>
          <p style="margin-bottom:16px;font-size:13px;opacity:0.9;">${monthData.description}</p>

          <div class="hp-bar-container">
            <div class="hp-bar-fill" style="width:${progressPct}%">
              <span class="hp-bar-text">${progressPct}%</span>
            </div>
          </div>
          <p style="font-size:10px;text-align:center;font-family:'Press Start 2P';color:var(--coin);">QUEST PROGRESS</p>

          ${yesterdayLog ? `
          <div style="background:var(--black);border:2px solid var(--coin);padding:10px;margin-top:12px;font-size:12px;">
            <strong style="color:var(--coin);">YESTERDAY:</strong> ${yesterdayPreview}
          </div>
          ` : ''}

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px;">
            <div class="pixel-btn btn-green" style="text-align:center;" onclick="app.showSection('today')">
              ▶ START TODAY'S LEVEL
            </div>
            <div class="pixel-btn btn-gold" style="text-align:center;" onclick="app.showSection('prompt')">
              🤖 ASK TEACHER
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="background:var(--ground);color:var(--black);">
        <div class="card-header" style="background:var(--ground-dark);border-bottom-color:var(--black);">
          <span class="card-title" style="color:var(--black);">🎯 CURRENT QUESTS</span>
        </div>
        <div class="card-body">
          <div class="check-item ${this.state.projectsShipped >= 1 ? 'done' : ''}">
            <div class="check-box">${this.state.projectsShipped >= 1 ? '✓' : ''}</div>
            <div>Ship First Project (Month 1)</div>
          </div>
          <div class="check-item ${this.state.projectsShipped >= 3 ? 'done' : ''}">
            <div class="check-box">${this.state.projectsShipped >= 3 ? '✓' : ''}</div>
            <div>Ship 3 Projects (Builder Identity)</div>
          </div>
          <div class="check-item ${this.state.incomeCumulative > 0 ? 'done' : ''}">
            <div class="check-box">${this.state.incomeCumulative > 0 ? '✓' : ''}</div>
            <div>First Income (Month 8-10)</div>
          </div>
          <div class="check-item ${this.state.emailSubs >= 50 ? 'done' : ''}">
            <div class="check-box">${this.state.emailSubs >= 50 ? '✓' : ''}</div>
            <div>50 Email Subscribers</div>
          </div>
        </div>
      </div>

      <div class="card" style="background:var(--mario-blue);">
        <div class="card-header" style="background:#003380;border-bottom-color:var(--black);">
          <span class="card-title">💡 DAILY WISDOM</span>
        </div>
        <div class="card-body">
          <p style="font-size:13px;line-height:1.6;">"${this.getDailyWisdom()}"</p>
          <p style="font-size:10px;margin-top:8px;opacity:0.7;font-family:'Press Start 2P';">— CURRICULUM v3.0</p>
        </div>
      </div>
    `;
  }

  getDailyWisdom() {
    const wisdoms = [
      "Ship imperfect. A broken live project is better than a perfect private note.",
      "Crisis Mode is not failure. Missing 3 days is not failure. Quitting is failure.",
      "One output per day minimum — a commit, a reply, a screenshot, a sentence.",
      "No comparison rule: Unfollow anyone whose '₹1 lakh in 30 days' creates anxiety.",
      "Public by default: If it can be public, make it public. Private documentation is a trap.",
      "Planned failure: Every month, do one thing that might fail.",
      "Build for failure days. Ship imperfect things. Document the process.",
      "Consistency compounds. 1% better every day for 24 months = 1000x improvement.",
      "The curriculum is a path, not a prison. Adapt, but never quit.",
      "Your website is your resume. Your GitHub is your portfolio. Your posts are your proof."
    ];
    return wisdoms[(this.state.month + this.state.day) % wisdoms.length];
  }

  // ==================== YESTERDAY LOG HELPER ====================
  getYesterdayLog() {
    // Find the log for the previous day
    let yMonth = this.state.month;
    let yWeek = this.state.week;
    let yDay = this.state.day - 1;

    if (yDay < 1) {
      yWeek--;
      yDay = 7;
      if (yWeek < 1) {
        yMonth--;
        yWeek = 4;
        if (yMonth < 1) return null;
      }
    }

    return this.state.dailyLogs.find(log => 
      log.month === yMonth && log.week === yWeek && log.day === yDay
    );
  }

  getLogForDay(m, w, d) {
    return this.state.dailyLogs.find(log => 
      log.month === m && log.week === w && log.day === d
    );
  }

  // ==================== TODAY VIEW ====================
  renderToday() {
    const el = document.getElementById('today-content');
    const yesterdayEl = document.getElementById('yesterday-banner');
    const summaryEl = document.getElementById('daily-summary-section');
    if (!el) return;

    const monthData = CURRICULUM.months[this.state.month];
    if (!monthData) {
      el.innerHTML = '<div class="card"><div class="card-body">Month ' + this.state.month + ' data is in extended mode. Use the prompt generator for detailed daily tasks.</div></div>';
      if (yesterdayEl) yesterdayEl.innerHTML = '';
      if (summaryEl) summaryEl.innerHTML = '';
      return;
    }

    const weekData = monthData.weeks[this.state.week];
    if (!weekData) {
      el.innerHTML = '<div class="card"><div class="card-body">Week data not found.</div></div>';
      if (yesterdayEl) yesterdayEl.innerHTML = '';
      if (summaryEl) summaryEl.innerHTML = '';
      return;
    }

    const dayData = weekData.days[this.state.day];
    if (!dayData) {
      el.innerHTML = '<div class="card"><div class="card-body">Day data not found.</div></div>';
      if (yesterdayEl) yesterdayEl.innerHTML = '';
      if (summaryEl) summaryEl.innerHTML = '';
      return;
    }

    const dayKey = `${this.state.month}-${this.state.week}-${this.state.day}`;
    const isDone = this.state.completedDays[dayKey];
    const weekGoal = monthData.weekGoals ? monthData.weekGoals[this.state.week] : '';

    // Render yesterday banner
    const yesterdayLog = this.getYesterdayLog();
    if (yesterdayEl) {
      if (yesterdayLog && yesterdayLog.summary) {
        yesterdayEl.innerHTML = `
          <div class="yesterday-banner">
            <span class="yesterday-label">📅 YESTERDAY'S WORK (M${yesterdayLog.month} W${yesterdayLog.week} D${yesterdayLog.day})</span>
            <div class="yesterday-text">${yesterdayLog.summary}</div>
            ${yesterdayLog.blockers ? `<div style="margin-top:8px;color:var(--coin);font-size:12px;">⚠️ Blocker: ${yesterdayLog.blockers}</div>` : ''}
          </div>
        `;
      } else {
        yesterdayEl.innerHTML = `
          <div class="yesterday-banner">
            <span class="yesterday-label">📅 YESTERDAY</span>
            <div class="yesterday-empty">No summary recorded for yesterday. The LLM teacher will have less context.</div>
          </div>
        `;
      }
    }

    // Render today's tasks
    el.innerHTML = `
      <div class="world-badge">📅 MONTH ${this.state.month} • WEEK ${this.state.week} • DAY ${this.state.day}
        <span class="day-status ${isDone ? 'done' : 'active'}">${isDone ? '✓ DONE' : '▶ ACTIVE'}</span>
      </div>

      ${weekGoal ? `<div style="background:var(--black);border:2px solid var(--coin);padding:10px;margin-bottom:16px;font-size:12px;font-family:'Press Start 2P';color:var(--coin);">🎯 WEEK GOAL: ${weekGoal}</div>` : ''}

      <div class="task-block">
        <div class="task-header">
          <span>🔨 BUILD BLOCK (2hr)</span>
        </div>
        <div class="task-body">
          <p style="font-weight:600;margin-bottom:8px;">${dayData.build}</p>
          <ol>
            <li>Open your project workspace</li>
            <li>Set a 2-hour timer</li>
            <li>Focus on the build task above</li>
            <li>Commit to GitHub when done (even if imperfect)</li>
          </ol>
        </div>
      </div>

      <div class="task-block">
        <div class="task-header">
          <span>📢 SHOW BLOCK (1hr)</span>
        </div>
        <div class="task-body">
          <p style="font-weight:600;margin-bottom:8px;">${dayData.show}</p>
          <ol>
            <li>Open LinkedIn/Twitter</li>
            <li>Draft the post based on today's work</li>
            <li>Add screenshot or link if possible</li>
            <li>Publish. Do not overthink.</li>
          </ol>
        </div>
      </div>

      <div class="task-block" style="background:var(--mario-red);color:var(--white);">
        <div class="task-header" style="background:#B3000E;border-bottom-color:var(--black);">
          <span>⚠️ CRISIS MODE (30min)</span>
        </div>
        <div class="task-body">
          <p style="font-weight:600;">${dayData.crisis}</p>
          <p style="font-size:12px;margin-top:8px;opacity:0.9;">If today is hard, do only this. Then rest. No guilt.</p>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px;">
        <button class="pixel-btn ${isDone ? 'btn-green' : 'btn-blue'}" onclick="app.completeDay()" style="width:100%;">
          ${isDone ? '✓ DAY COMPLETE' : '✓ MARK DONE'}
        </button>
        <button class="pixel-btn btn-red" onclick="app.setCrisisMode()" style="width:100%;">
          ⚠️ CRISIS
        </button>
      </div>

      <div style="margin-top:16px;">
        <button class="pixel-btn btn-gold" onclick="app.advanceDay()" style="width:100%;">
          ▶ NEXT DAY →
        </button>
      </div>
    `;

    // Render summary section (only if day is done)
    if (summaryEl) {
      const existingLog = this.getLogForDay(this.state.month, this.state.week, this.state.day);
      if (isDone) {
        summaryEl.innerHTML = `
          <div class="summary-card">
            <div class="summary-header">
              <span>📝 TODAY'S SUMMARY</span>
              <span id="autosave-indicator" class="autosave-indicator">✓ SAVED</span>
            </div>
            <div class="summary-body">
              <label>What did you actually do today? (Be specific. This feeds tomorrow's LLM prompt.)</label>
              <textarea id="daily-summary" placeholder="Example: Built the lesson plan prompt. Tested on Chapter 3. Got good output. Saved to GitHub. Struggled with markdown formatting." oninput="app.autoSaveSummary()">${existingLog ? existingLog.summary : ''}</textarea>

              <label>Any blockers or difficulties today?</label>
              <textarea id="daily-blockers" placeholder="Example: Could not figure out GitHub Pages deployment. Will try again tomorrow." oninput="app.autoSaveSummary()">${existingLog ? existingLog.blockers : ''}</textarea>

              <label>What did you ship? (One sentence)</label>
              <input type="text" id="daily-shipped" placeholder="Example: Pushed 3 prompts to GitHub repo" value="${existingLog ? existingLog.shipped : ''}" oninput="app.autoSaveSummary()">
            </div>
          </div>
        `;
      } else {
        summaryEl.innerHTML = `
          <div class="card" style="background:var(--brick);opacity:0.7;">
            <div class="card-body" style="text-align:center;padding:20px;">
              <p style="font-family:'Press Start 2P';font-size:9px;color:var(--coin);">📝 MARK DAY AS DONE TO WRITE SUMMARY</p>
              <p style="font-size:12px;margin-top:8px;">Your summary feeds tomorrow's LLM teacher prompt.</p>
            </div>
          </div>
        `;
      }
    }
  }

  autoSaveSummary() {
    const summary = document.getElementById('daily-summary')?.value || '';
    const blockers = document.getElementById('daily-blockers')?.value || '';
    const shipped = document.getElementById('daily-shipped')?.value || '';

    // Update or create log entry
    const existingIndex = this.state.dailyLogs.findIndex(log => 
      log.month === this.state.month && log.week === this.state.week && log.day === this.state.day
    );

    const logEntry = {
      month: this.state.month,
      week: this.state.week,
      day: this.state.day,
      summary,
      blockers,
      shipped,
      date: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      this.state.dailyLogs[existingIndex] = logEntry;
    } else {
      this.state.dailyLogs.push(logEntry);
    }

    // Also update yesterday field for quick reference
    this.state.yesterday = summary;

    this.saveState();
  }

  completeDay() {
    const dayKey = `${this.state.month}-${this.state.week}-${this.state.day}`;
    this.state.completedDays[dayKey] = true;
    this.state.streak++;
    this.state.lastActive = new Date().toISOString().split('T')[0];
    this.saveState();
    this.showSection('today'); // Re-render to show summary form
  }

  setCrisisMode() {
    this.state.mode = 'crisis';
    this.state.crisisDays++;
    this.saveState();
    this.renderAll();
  }

  advanceDay() {
    this.state.mode = 'full';
    this.state.day++;
    if (this.state.day > 7) {
      this.state.day = 1;
      this.state.week++;
      if (this.state.week > 4) {
        this.state.week = 1;
        this.state.month++;
        this.state.incomeThisMonth = 0;
        if (this.state.month > 3 && this.state.phase === 1) this.state.phase = 2;
        if (this.state.month > 9 && this.state.phase === 2) this.state.phase = 3;
        if (this.state.month > 18 && this.state.phase === 3) this.state.phase = 4;
      }
    }
    this.saveState();
    this.showSection('today');
  }

  // ==================== CURRICULUM MAP ====================
  renderCurriculum() {
    const el = document.getElementById('curriculum-content');
    if (!el) return;

    let html = '<div class="world-badge">🗺️ FULL WORLD MAP</div>';

    CURRICULUM.meta.phases.forEach(phase => {
      html += `<div class="card phase-${phase.id}"><div class="card-header"><span class="card-title">PHASE ${phase.id}: ${phase.name}</span></div><div class="card-body" style="padding:12px;">`;

      const phaseMonths = Object.entries(CURRICULUM.months)
        .filter(([k, v]) => v.phase === phase.id)
        .map(([k, v]) => ({ num: parseInt(k), ...v }));

      const extendedMonths = Object.entries(CURRICULUM.monthsExtended || {})
        .filter(([k, v]) => v.phase === phase.id)
        .map(([k, v]) => ({ num: parseInt(k), ...v }));

      const allMonths = [...phaseMonths, ...extendedMonths].sort((a, b) => a.num - b.num);

      allMonths.forEach(m => {
        const isCurrent = m.num === this.state.month;
        const isPast = m.num < this.state.month;
        html += `
          <div class="check-item ${isPast ? 'done' : ''}" style="margin-bottom:6px;${isCurrent ? 'border:3px solid var(--coin);' : ''}" onclick="app.jumpToMonth(${m.num})">
            <div class="check-box">${isPast ? '✓' : (isCurrent ? '▶' : '')}</div>
            <div>
              <div style="font-weight:600;font-size:13px;">M${m.num}: ${m.theme}</div>
              <div style="font-size:11px;opacity:0.8;">${m.project}</div>
            </div>
          </div>
        `;
      });

      html += '</div></div>';
    });

    el.innerHTML = html;
  }

  jumpToMonth(month) {
    if (!confirm(`Jump to Month ${month}? This will reset your week/day to 1-1.`)) return;
    this.state.month = month;
    this.state.week = 1;
    this.state.day = 1;
    if (month <= 3) this.state.phase = 1;
    else if (month <= 9) this.state.phase = 2;
    else if (month <= 18) this.state.phase = 3;
    else this.state.phase = 4;
    this.saveState();
    this.showSection('today');
  }

  // ==================== PROGRESS / STATS ====================
  renderProgress() {
    const el = document.getElementById('progress-content');
    if (!el) return;

    const completedDays = Object.keys(this.state.completedDays).length;
    const totalDaysEstimate = this.state.month * 28;
    const completionRate = totalDaysEstimate > 0 ? Math.round((completedDays / totalDaysEstimate) * 100) : 0;

    el.innerHTML = `
      <div class="world-badge">📊 STATE SNAPSHOT</div>

      <div class="card">
        <div class="card-header"><span class="card-title">IDENTITY & PROGRESS</span></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div><label>Current Identity</label><input type="text" value="${this.state.identity}" onchange="app.updateState('identity', this.value); app.saveState()"></div>
            <div><label>Chosen Path</label><input type="text" value="${this.state.chosenPath}" onchange="app.updateState('chosenPath', this.value); app.saveState()" placeholder="e.g., AI Consulting"></div>
            <div><label>Month</label><input type="number" value="${this.state.month}" min="1" max="24" onchange="app.updateState('month', parseInt(this.value)); app.saveState()"></div>
            <div><label>Week</label><input type="number" value="${this.state.week}" min="1" max="4" onchange="app.updateState('week', parseInt(this.value)); app.saveState()"></div>
            <div><label>Day</label><input type="number" value="${this.state.day}" min="1" max="7" onchange="app.updateState('day', parseInt(this.value)); app.saveState()"></div>
            <div><label>Streak (days)</label><input type="number" value="${this.state.streak}" onchange="app.updateState('streak', parseInt(this.value)); app.saveState()"></div>
          </div>
        </div>
      </div>

      <div class="card" style="background:var(--ground);color:var(--black);">
        <div class="card-header" style="background:var(--ground-dark);border-bottom-color:var(--black);"><span class="card-title" style="color:var(--black);">💰 FINANCIAL TRACKER</span></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div><label style="color:var(--mario-red);">Income This Month</label><input type="number" value="${this.state.incomeThisMonth}" onchange="app.updateState('incomeThisMonth', parseInt(this.value)); app.saveState()"></div>
            <div><label style="color:var(--mario-red);">Income Cumulative</label><input type="number" value="${this.state.incomeCumulative}" onchange="app.updateState('incomeCumulative', parseInt(this.value)); app.saveState()"></div>
            <div><label>Email Subscribers</label><input type="number" value="${this.state.emailSubs}" onchange="app.updateState('emailSubs', parseInt(this.value)); app.saveState()"></div>
            <div><label>Posts Published</label><input type="number" value="${this.state.postsPublished}" onchange="app.updateState('postsPublished', parseInt(this.value)); app.saveState()"></div>
            <div><label>Projects Shipped</label><input type="number" value="${this.state.projectsShipped}" onchange="app.updateState('projectsShipped', parseInt(this.value)); app.saveState()"></div>
            <div><label>Crisis Days</label><input type="number" value="${this.state.crisisDays}" onchange="app.updateState('crisisDays', parseInt(this.value)); app.saveState()"></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><span class="card-title">📝 BLOCKERS & NOTES</span></div>
        <div class="card-body">
          <label>What I Did Yesterday</label>
          <textarea rows="2" onchange="app.updateState('yesterday', this.value); app.saveState()">${this.state.yesterday}</textarea>
          <label>Current Blockers</label>
          <textarea rows="2" onchange="app.updateState('blockers', this.value); app.saveState()">${this.state.blockers}</textarea>
          <label>Biggest Win This Month</label>
          <textarea rows="2" onchange="app.updateState('biggestWin', this.value); app.saveState()">${this.state.biggestWin || ''}</textarea>
          <label>Biggest Struggle</label>
          <textarea rows="2" onchange="app.updateState('biggestStruggle', this.value); app.saveState()">${this.state.biggestStruggle || ''}</textarea>
        </div>
      </div>

      <div class="card" style="background:var(--mario-blue);">
        <div class="card-header" style="background:#003380;"><span class="card-title">📈 STATS</span></div>
        <div class="card-body">
          <div class="hp-bar-container">
            <div class="hp-bar-fill" style="width:${completionRate}%">
              <span class="hp-bar-text">${completionRate}%</span>
            </div>
          </div>
          <p style="font-size:10px;text-align:center;font-family:'Press Start 2P';color:var(--coin);">COMPLETION RATE</p>
          <p style="font-size:13px;margin-top:12px;">Days Completed: <strong>${completedDays}</strong></p>
          <p style="font-size:13px;">Current Streak: <strong class="streak-flame">🔥 ${this.state.streak}</strong> days</p>
          <p style="font-size:13px;">Crisis Days: <strong>${this.state.crisisDays}</strong></p>
          <p style="font-size:13px;">Daily Logs: <strong>${this.state.dailyLogs.length}</strong> entries</p>
        </div>
      </div>

      <button class="pixel-btn btn-green" style="width:100%;margin-top:12px;" onclick="app.saveState();alert('State saved!')">💾 SAVE ALL CHANGES</button>
    `;
  }

  updateState(key, value) {
    this.state[key] = value;
  }

  // ==================== LLM PROMPT GENERATOR ====================
  renderPrompt() {
    const el = document.getElementById('prompt-content');
    if (!el) return;

    const monthData = CURRICULUM.months[this.state.month] || CURRICULUM.monthsExtended[this.state.month];
    let weekData, dayData;

    if (CURRICULUM.months[this.state.month]) {
      weekData = CURRICULUM.months[this.state.month].weeks[this.state.week];
      dayData = weekData ? weekData.days[this.state.day] : null;
    }

    const yesterdayLog = this.getYesterdayLog();
    const yesterdaySummary = yesterdayLog ? yesterdayLog.summary : '';
    const weekGoal = monthData.weekGoals ? monthData.weekGoals[this.state.week] : '';

    let promptText = '';
    if (dayData) {
      promptText = CURRICULUM.llmPromptTemplate(
        this.state, monthData, weekData, dayData, yesterdaySummary, weekGoal, this.state.dailyLogs
      );
    } else {
      const phaseInfo = CURRICULUM.meta.phases.find(p => p.id === this.state.phase) || {};
      let recentWork = "";
      if (this.state.dailyLogs && this.state.dailyLogs.length > 0) {
        const recent = this.state.dailyLogs.slice(-5);
        recentWork = recent.map((log) => 
          `Day ${log.day} (Week ${log.week}): ${log.summary || "No summary recorded"}`
        ).join("\n");
      }

      promptText = `${CURRICULUM.systemPrompt}

=== CURRICULUM CONTEXT ===
Phase: ${this.state.phase} — ${phaseInfo.name} (${phaseInfo.focus})
Month: ${this.state.month} — Theme: ${monthData.theme}
Project: ${monthData.project}
Description: ${monthData.description}

=== MY CURRENT STATE ===
Identity: ${this.state.identity}
Chosen Path: ${this.state.chosenPath || "Not chosen yet"}
Streak: ${this.state.streak} days
Crisis Days This Month: ${this.state.crisisDays}
Income This Month: ₹${this.state.incomeThisMonth}
Income Cumulative: ₹${this.state.incomeCumulative}
Projects Shipped: ${this.state.projectsShipped}
Posts Published: ${this.state.postsPublished}
Email Subscribers: ${this.state.emailSubs}

=== WHAT I DID YESTERDAY ===
${yesterdaySummary || "No summary recorded for yesterday."}

=== MY RECENT WORK (LAST 5 DAYS) ===
${recentWork || "No recent work summaries recorded."}

=== MY BLOCKERS ===
${this.state.blockers || "None reported"}

=== YOUR ORDERS ===
This is Month ${this.state.month} (${monthData.theme}). The project is: ${monthData.project}.
Give me a detailed week-by-week breakdown for this month, adapted to my current state.
Include exact daily tasks, show block posts, and crisis mode fallbacks.
Reference my recent work and yesterday's summary to make the guidance continuous and organic.

Today's non-negotiable minimum: ____________`;
    }

    el.innerHTML = `
      <div class="world-badge">🤖 LLM TEACHER PROMPT</div>

      <div class="card">
        <div class="card-header"><span class="card-title">📋 COPY-PASTE PROMPT</span></div>
        <div class="card-body">
          <p style="font-size:12px;margin-bottom:12px;">Copy this entire block and paste it into Claude, ChatGPT, or Gemini. The LLM now has full context: your curriculum, your state, your yesterday's work, your recent history, and your blockers.</p>
          <div class="prompt-box" id="llm-prompt">${promptText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          <button class="pixel-btn btn-gold" style="width:100%;" onclick="app.copyPrompt()">📋 COPY TO CLIPBOARD</button>
        </div>
      </div>

      <div class="card" style="background:var(--pipe);">
        <div class="card-header" style="background:var(--pipe-dark);"><span class="card-title">💡 HOW TO USE</span></div>
        <div class="card-body">
          <ol style="font-size:13px;line-height:1.8;padding-left:20px;">
            <li>Click "COPY TO CLIPBOARD" above</li>
            <li>Open <strong>Claude.ai</strong> or <strong>ChatGPT</strong></li>
            <li>Paste the prompt as your first message</li>
            <li>The LLM now knows: your curriculum, your state, your yesterday's work, your 5-day history, your blockers</li>
            <li>Ask: "What should I do today?" or paste the prompt daily</li>
            <li>The LLM will give you exact orders that build on yesterday's work</li>
          </ol>
        </div>
      </div>

      <div class="card" style="background:var(--mario-red);">
        <div class="card-header" style="background:#B3000E;"><span class="card-title">⚡ QUICK TEACHER CHAT</span></div>
        <div class="card-body">
          <p style="font-size:13px;margin-bottom:12px;">Or use this shorter prompt for quick daily guidance:</p>
          <div class="prompt-box" id="quick-prompt">I am on Month ${this.state.month}, Week ${this.state.week}, Day ${this.state.day} of the AI-Builder Curriculum. Yesterday I: ${yesterdaySummary || 'did not record a summary'}. My state: ${this.state.identity}, ${this.state.streak}-day streak, ₹${this.state.incomeCumulative} earned. Blockers: ${this.state.blockers || 'none'}. What are my exact tasks for today? Build on yesterday's work.</div>
          <button class="pixel-btn btn-blue" style="width:100%;margin-top:8px;" onclick="app.copyQuickPrompt()">📋 COPY QUICK PROMPT</button>
        </div>
      </div>
    `;
  }

  copyPrompt() {
    const text = document.getElementById('llm-prompt').innerText;
    navigator.clipboard.writeText(text).then(() => alert('Full teacher prompt copied! Paste into Claude/ChatGPT.'));
  }

  copyQuickPrompt() {
    const text = document.getElementById('quick-prompt').innerText;
    navigator.clipboard.writeText(text).then(() => alert('Quick prompt copied!'));
  }

  // ==================== SETTINGS ====================
  renderSettings() {
    const el = document.getElementById('settings-content');
    if (!el) return;

    el.innerHTML = `
      <div class="world-badge">⚙️ SETTINGS & SYNC</div>

      <div class="card">
        <div class="card-header"><span class="card-title">💾 DATA BACKUP</span></div>
        <div class="card-body">
          <button class="pixel-btn btn-green" style="width:100%;margin-bottom:8px;" onclick="app.exportData()">📤 EXPORT DATA (JSON)</button>
          <button class="pixel-btn btn-gold" style="width:100%;margin-bottom:8px;" onclick="app.importData()">📥 IMPORT DATA</button>
          <button class="pixel-btn btn-red" style="width:100%;" onclick="app.resetData()">🗑️ RESET ALL DATA</button>
        </div>
      </div>

      <div class="card" style="background:var(--mario-blue);">
        <div class="card-header" style="background:#003380;"><span class="card-title">📱 INSTALL AS APP</span></div>
        <div class="card-body">
          <p style="font-size:13px;line-height:1.6;">
            <strong>Android:</strong> Open in Chrome → Tap ⋮ → "Add to Home Screen" → Install<br><br>
            <strong>iPhone:</strong> Open in Safari → Tap Share → "Add to Home Screen" → Add<br><br>
            This installs as a fullscreen app with offline support.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><span class="card-title">ℹ️ ABOUT</span></div>
        <div class="card-body">
          <p style="font-size:12px;line-height:1.6;">
            <strong>AI Builder Quest v2.0</strong><br>
            Based on AI-Builder Curriculum v3.0<br>
            Built for: Full-time teacher, India<br>
            Budget: ₹1000/month | Time: 3hr/day<br><br>
            Theme: Retro Mario / NES<br>
            Sync: Manual Export/Import<br>
            Hosting: GitHub Pages (Free)
          </p>
        </div>
      </div>
    `;
  }

  exportData() {
    const data = JSON.stringify(this.state, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `builder-quest-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  }

  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = event => {
        try {
          const data = JSON.parse(event.target.result);
          this.state = { ...this.defaultState(), ...data };
          this.saveState();
          this.renderAll();
          alert('Data imported successfully!');
        } catch (err) { alert('Invalid file: ' + err.message); }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  resetData() {
    if (!confirm('WARNING: This will delete ALL progress. Are you sure?')) return;
    if (!confirm('Really sure? This cannot be undone.')) return;
    this.state = this.defaultState();
    this.saveState();
    this.renderAll();
    alert('All data reset. Starting from Day 1.');
  }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new BuilderQuestApp();
});
