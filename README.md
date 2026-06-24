# 🏗️ AI Builder Quest

> **Your personal curriculum companion app.** Retro Mario-themed, PWA-installable, Firebase-synced, LLM-teacher-ready.

---

## What This Is

This is a **single-page web app** that turns the AI-Builder Curriculum v3.0 into your daily teacher. It:

- 📋 **Generates exact daily tasks** (Build Block + Show Block + Crisis Mode)
- 🤖 **Creates copy-paste LLM prompts** with full context for Claude/ChatGPT
- 📊 **Tracks your progress** across 24 months with gamified stats
- 📱 **Works offline** as a PWA (install to home screen)
- ☁️ **Syncs across devices** via Firebase (free tier)

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Download the App Files

You should have these files:
```
mario-curriculum-app/
├── index.html          ← Main app
├── style.css           ← Mario retro theme
├── app.js              ← All logic
├── curriculum-data.js  ← 24-month curriculum
├── firebase-config.js  ← Your Firebase credentials
├── manifest.json       ← PWA manifest
├── sw.js               ← Service worker (offline)
├── icon-192.png        ← App icon
├── icon-512.png        ← App icon
└── README.md           ← This file
```

### Step 2: Set Up Firebase (Free Forever)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"** → Name it `builder-quest` → Continue
3. **Disable Google Analytics** (not needed) → Create project
4. Click **"</>" (Web icon)** to add a web app
5. Give it a nickname → **Register app**
6. Copy the `firebaseConfig` object (it looks like the template in `firebase-config.js`)
7. **Replace** the placeholder in `firebase-config.js` with your real config:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "builder-quest-12345.firebaseapp.com",
  projectId: "builder-quest-12345",
  storageBucket: "builder-quest-12345.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};
```

### Step 3: Enable Firebase Services

**Authentication:**
1. Go to **Authentication** → **Get started**
2. Click **Sign-in method** tab
3. Find **Anonymous** → Click → Toggle **Enable** → **Save**

**Firestore Database:**
1. Go to **Firestore Database** → **Create database**
2. Choose **"Start in test mode"** → **Next**
3. Select region closest to you (asia-south1 for India) → **Enable**

**Firestore Security Rules (IMPORTANT):**
1. Go to **Firestore Database** → **Rules** tab
2. Replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click **Publish**

### Step 4: Host on GitHub Pages (Free)

1. Create a new GitHub repository: `builder-quest`
2. Upload all files from this folder to the repo
3. Go to **Settings** → **Pages**
4. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes. Your app will be live at:
   `https://YOUR_USERNAME.github.io/builder-quest/`

### Step 5: Install on Your Phone

**Android (Chrome):**
1. Open your GitHub Pages URL in Chrome
2. Tap the **⋮ menu** → **"Add to Home Screen"**
3. Tap **Install**

**iPhone (Safari):**
1. Open your GitHub Pages URL in Safari
2. Tap the **Share button** → **"Add to Home Screen"**
3. Tap **Add**

The app now opens fullscreen, works offline, and syncs data between your laptop and phone via Firebase.

---

## 📱 How to Use

### Daily Routine (3 minutes)

1. **Open the app** (tap the icon on your home screen)
2. **Tap "TODAY"** in the navigation bar
3. See your exact **Build Block** (2hr) and **Show Block** (1hr) tasks
4. **Tap "🤖 TEACHER"** 
5. **Tap "COPY TO CLIPBOARD"**
6. **Open Claude.ai or ChatGPT** on your phone or laptop
7. **Paste the prompt** — the LLM now knows your full curriculum, your current state, your blockers, and today's exact tasks
8. **Follow the LLM's orders** — it will give you granular steps, not vague advice

### Track Progress (1 minute)

1. **Tap "📊 STATS"**
2. Update your numbers: income, posts, subscribers, blockers
3. **Tap "💾 SAVE ALL CHANGES"**
4. Data auto-syncs to Firebase

### Switch Devices

- Open the app on your laptop → data is there
- Open the app on your phone → same data appears
- Works offline → changes sync when you reconnect

---

## 🎮 The Mario Theme

The app uses a retro NES aesthetic:

| Element | Mario Reference |
|---------|----------------|
| Sky blue background | Mario 1-1 sky |
| Brick cards | Breakable blocks |
| Green buttons | Warp pipes |
| Gold accents | Coins |
| Red alerts | Mario's outfit / damage |
| Health bar progress | Mario's power meter |
| Streak counter | Coin counter |
| "World" label | World 1-1, 1-2, etc. |

---

## 🔒 Data Privacy

- **Your data is yours.** Stored in your Firebase project under your anonymous user ID.
- **No personal information collected.** Anonymous auth = no email, no phone, no name.
- **You can export anytime.** Go to Settings → Export Data (JSON file).
- **You can delete anytime.** Go to Settings → Reset All Data, or delete your Firebase project.

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Firebase not loaded" | Check your internet connection. The app works offline but needs Firebase SDK loaded once. |
| Sync not working | Check `firebase-config.js` has your real API key. Check Firestore rules are published. |
| App not installable | Make sure you're on HTTPS (GitHub Pages provides this). Check manifest.json is accessible. |
| Icons not showing | The `icon-192.png` and `icon-512.png` must be in the same folder as `index.html`. |
| Curriculum data missing | Check that `curriculum-data.js` is loaded before `app.js` in `index.html`. |

---

## 📂 File Structure Explained

| File | Purpose |
|------|---------|
| `index.html` | App shell. Loads all other files. |
| `style.css` | Mario retro theme. Pure CSS, no images needed. |
| `app.js` | All logic: navigation, progress tracking, LLM prompt generation, Firebase sync. |
| `curriculum-data.js` | The full 24-month curriculum structured as a JavaScript object. |
| `firebase-config.js` | Your Firebase credentials. **You must edit this.** |
| `manifest.json` | PWA configuration. Tells Chrome/Safari how to install the app. |
| `sw.js` | Service worker. Caches files for offline use. |
| `icon-*.png` | App icons for home screen. |

---

## 🎯 Curriculum Architecture

The app is built around the **AI-Builder Curriculum v3.0** principles:

- **One project per month** (24 projects total)
- **Two tracks only:** BUILD (2hr) + SHOW (1hr)
- **Anti-fragile:** Crisis Mode is one tap away. No guilt.
- **Project-based:** Every month ends with a shippable, live project
- **LLM-native:** The app generates prompts that give any LLM full teaching context

---

## 🛠️ Customization

### Change the Theme
Edit `style.css` and modify the CSS variables at the top:

```css
:root {
  --sky: #5C94FC;      /* Background */
  --brick: #B85C38;     /* Cards */
  --pipe: #00A800;      /* Buttons */
  --coin: #F8B800;      /* Accents */
  --mario-red: #E60012; /* Alerts */
}
```

### Add More Curriculum Data
Edit `curriculum-data.js`:
- `months` object contains detailed data for Months 1-9
- `monthsExtended` contains summaries for Months 10-24
- To add full detail for Months 10-24, copy the structure from Month 9 and expand

### Change LLM Personality
Edit the `systemPrompt` string in `curriculum-data.js`:
- Make the teacher stricter or kinder
- Change the teaching style
- Add domain-specific instructions

---

## 📊 Firebase Free Tier Limits

The Firebase **Spark (free)** plan gives you:
- **50,000** document reads per day
- **20,000** document writes per day
- **1 GB** total storage

For one user tracking daily progress, you use approximately:
- **~50 reads/day** (loading state)
- **~20 writes/day** (saving progress)

**You have 1,000x headroom.** The free tier will last forever for personal use.

---

## 📝 License

This is a personal curriculum companion. Use it, modify it, share it. The curriculum content is based on AI-Builder Curriculum v3.0.

---

**Built for builders. Ship imperfect. 🚀**
