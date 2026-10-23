(() => {
  "use strict";

  const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  };
  const rand = (min, max) => Math.random() * (max - min) + min;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const fillText = (id, text) => {
    const node = $(id);
    if (node) node.textContent = text;
  };

  const svgUse = (name, cls) => {
    const wrap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (cls) wrap.setAttribute("class", cls);
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#${name}`);
    wrap.appendChild(use);
    return wrap;
  };

  const applyStaticData = () => {
    fillText("giftKicker", DATA.gift.kicker);
    fillText("giftHint", DATA.gift.hint);
    fillText("giftTap", DATA.gift.action);

    fillText("heroRibbon", DATA.hero.ribbon);
    fillText("heroTitle", DATA.hero.title);
    fillText("heroSub", DATA.hero.subtitle);
    fillText("heroSince", DATA.hero.since);
    fillText("heroCtaText", DATA.hero.cta);
    const chipIcons = ["i-heart", "i-sparkle", "i-moon"];
    const chips = $("heroChips");
    DATA.hero.chips.forEach((text, i) => {
      const li = el("li");
      const chip = el("span", "chip");
      chip.appendChild(svgUse(chipIcons[i % chipIcons.length], "ic"));
      chip.appendChild(document.createTextNode(text));
      li.appendChild(chip);
      chips.appendChild(li);
    });

    fillText("counterTitle", DATA.counter.title);
    fillText("counterSub", DATA.counter.subtitle);
    document.querySelectorAll(".counter-label").forEach((label) => {
      label.textContent = DATA.counter.units[Number(label.dataset.label)] || "";
    });

    fillText("whisperSlot0", DATA.whisper[0]);
    fillText("whisperSlot1", DATA.whisper[1]);
    fillText("whisperSlot2", DATA.whisper[2]);
    fillText("whisperSlot3", DATA.whisper[3]);

    fillText("moonChip", DATA.moonlight.chip);
    fillText("moonTitle", DATA.moonlight.title);
    fillText("moonBody", DATA.moonlight.body);

    fillText("tlTitle", DATA.timeline.title);
    fillText("tlSub", DATA.timeline.subtitle);
    const list = $("timelineList");
    DATA.timeline.entries.forEach((entry, i) => {
      const li = el("li", "tl-item reveal");
      li.style.setProperty("--d", `${i * 90}ms`);
      const dot = el("span", "tl-dot");
      dot.appendChild(svgUse("i-heart", "ic ic-fill"));
      const date = el("span", "tl-date");
      date.textContent = entry.date;
      const title = el("h3", "tl-title");
      title.textContent = entry.title;
      const text = el("p", "tl-text");
      text.textContent = entry.text;
      li.append(dot, date, title, text);
      list.appendChild(li);
    });

    fillText("galTitle", DATA.gallery.title);
    fillText("galSub", DATA.gallery.subtitle);
    const motifMap = { moon: "i-moon", heart: "i-heart", ball: "i-ball", cloud: "i-cloud", wave: "i-wave", sparkle: "i-sparkle" };
    const grid = $("galleryGrid");
    DATA.gallery.items.forEach((item, i) => {
      const li = el("li", "polaroid reveal");
      li.style.setProperty("--d", `${i * 80}ms`);
      li.style.setProperty("--tilt", `${item.tilt}deg`);
      li.style.setProperty("--lift", `${item.lift}px`);
      const frame = el("div", "polaroid-img");
      if (item.src) {
        const img = el("img");
        img.src = item.src;
        img.alt = item.caption;
        img.loading = "lazy";
        frame.appendChild(img);
      } else {
        const art = el("div", `art ${item.art}`);
        art.appendChild(svgUse(motifMap[item.motif] || "i-heart", "ic"));
        frame.appendChild(art);
      }
      const cap = el("p", "polaroid-cap");
      cap.textContent = item.caption;
      li.append(frame, cap);
      grid.appendChild(li);
    });

    const flow = $("letterFlow");
    DATA.letter.paragraphs.forEach((para, i) => {
      const p = el("p", "letter-para reveal");
      p.style.setProperty("--d", `${i * 150}ms`);
      p.textContent = para;
      flow.appendChild(p);
    });
    const ps = el("p", "letter-ps reveal");
    ps.style.setProperty("--d", `${DATA.letter.paragraphs.length * 150 + 200}ms`);
    ps.textContent = DATA.letter.ps;
    flow.appendChild(ps);
    fillText("letterSign", DATA.letter.signature);

    fillText("chatTitle", DATA.chatMeta.title);
    fillText("chatSub", DATA.chatMeta.subtitle);
    const thread = $("chatThread");
    DATA.chat.forEach((msg, i) => {
      const li = el("li", `bubble ${msg.from} reveal`);
      li.style.setProperty("--d", `${i * 70}ms`);
      li.textContent = msg.text;
      thread.appendChild(li);
    });

    fillText("reasonTitle", DATA.reasons.title);
    fillText("reasonSub", DATA.reasons.subtitle);
    const reasonGrid = $("reasonGrid");
    DATA.reasons.items.forEach((text, i) => {
      const li = el("li", "reason-card reveal");
      li.style.setProperty("--d", `${i * 60}ms`);
      const btn = el("button");
      btn.type = "button";
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", `Reason ${i + 1}. Tap to reveal`);
      const inner = el("div", "card-inner");
      const front = el("div", "card-face card-front");
      const num = el("span", "num");
      num.textContent = String(i + 1);
      front.appendChild(num);
      front.appendChild(svgUse("i-heart", "ic ic-fill"));
      const back = el("div", "card-face card-back" + (i === 9 ? " tench" : ""));
      const backText = el("p");
      backText.textContent = text;
      back.appendChild(backText);
      inner.append(front, back);
      btn.appendChild(inner);
      li.appendChild(btn);
      reasonGrid.appendChild(li);
      btn.addEventListener("click", () => flipReason(li, btn, i));
    });
    fillText("reasonFinal", DATA.reasons.finalReveal);

    fillText("qTitle", DATA.quiz.title);
    fillText("qSub", DATA.quiz.subtitle);
    fillText("footerBy", DATA.footer.madeBy);
    fillText("againText", DATA.footer.againHint);
    fillText("footerLine", DATA.footer.lines[0]);
  };

  const canvas = $("fx");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let rafId = null;

  const sizeCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  sizeCanvas();
  window.addEventListener("resize", sizeCanvas);

  const drawHeart = (p) => {
    const s = p.s;
    ctx.beginPath();
    ctx.moveTo(0, s * 0.35);
    ctx.bezierCurveTo(-s * 0.95, -s * 0.45, -s * 0.4, -s * 1.15, 0, -s * 0.45);
    ctx.bezierCurveTo(s * 0.4, -s * 1.15, s * 0.95, -s * 0.45, 0, s * 0.35);
    ctx.closePath();
    ctx.fill();
  };

  const loop = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles = particles.filter((p) => p.y < window.innerHeight + 60 && p.life < 220);
    particles.forEach((p) => {
      p.x += p.vx;
      p.vx *= 0.986;
      p.vy = Math.min(p.vy + p.g, 9);
      p.y += p.vy;
      p.rot += p.vr;
      p.life += 1;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, 1 - p.life / 200);
      ctx.fillStyle = p.color;
      drawHeart(p);
      ctx.restore();
    });
    if (particles.length) {
      rafId = requestAnimationFrame(loop);
    } else {
      rafId = null;
    }
  };

  const burst = (x, y, count = 90) => {
    if (RM) return;
    const colors = ["#7FB5DA", "#4E7FA8", "#CFE6F6", "#FFFFFF", "#EBD5A7", "#F7ECD7"];
    for (let i = 0; i < count; i++) {
      particles.push({
        x,
        y,
        vx: rand(-5.5, 5.5),
        vy: rand(-10.5, -4),
        g: rand(0.16, 0.3),
        s: rand(4, 9),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.12, 0.12),
        color: pick(colors),
        life: 0,
      });
    }
    if (!rafId) rafId = requestAnimationFrame(loop);
  };

  const centerOf = (node) => {
    const r = node.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  const initCounter = () => {
    const nums = document.querySelectorAll(".counter-num");
    const start = new Date(DATA.anniversaryISO).getTime();
    const tick = () => {
      let diff = Date.now() - start;
      if (Number.isNaN(start) || diff < 0) diff = 0;
      const units = [
        Math.floor(diff / 86400000),
        Math.floor((diff % 86400000) / 3600000),
        Math.floor((diff % 3600000) / 60000),
        Math.floor((diff % 60000) / 1000),
      ];
      nums.forEach((node, i) => {
        node.textContent = String(units[i]);
      });
    };
    tick();
    setInterval(tick, 1000);
  };

  let revealsBound = false;
  const initReveals = () => {
    if (revealsBound) return;
    revealsBound = true;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((node) => io.observe(node));
  };

  const flipped = new Set();
  const flipReason = (card, btn, i) => {
    if (flipped.has(i)) return;
    flipped.add(i);
    card.classList.add("flipped");
    btn.setAttribute("aria-pressed", "true");
    if (i === 9) {
      const final = $("reasonFinal");
      setTimeout(() => {
        final.hidden = false;
        requestAnimationFrame(() => {
          final.classList.add("show");
          const c = centerOf(final);
          burst(c.x, Math.max(c.y, 80), 130);
        });
      }, 620);
    }
  };

  const quizState = { idx: 0, score: 0 };
  let advanceTimer = null;

  const renderQuiz = () => {
    const q = DATA.quiz.questions[quizState.idx];
    const n = DATA.quiz.questions.length;
    $("quizCount").textContent = `${quizState.idx + 1} / ${n}`;
    $("quizBar").style.width = `${(quizState.idx / n) * 100}%`;
    $("quizQ").textContent = q.q;
    const opts = $("quizOpts");
    opts.replaceChildren();
    q.options.forEach((text, i) => {
      const li = el("li");
      const btn = el("button");
      btn.type = "button";
      const label = el("span");
      label.textContent = text;
      btn.appendChild(label);
      btn.addEventListener("click", () => answerQuiz(btn, i, q, n));
      li.appendChild(btn);
      opts.appendChild(li);
    });
  };

  const answerQuiz = (btn, i, q, n) => {
    const all = Array.from($("quizOpts").querySelectorAll("button"));
    all.forEach((node) => {
      node.disabled = true;
    });
    const ok = i === q.answer;
    if (ok) quizState.score += 1;
    btn.classList.add(ok ? "correct" : "wrong");
    all[q.answer].classList.add("correct");
    all.forEach((node, index) => {
      if (node === btn || index === q.answer) {
        const mark = index === q.answer ? "i-check" : "i-x";
        node.appendChild(svgUse(mark, "ic"));
      }
    });
    $("quizBar").style.width = `${((quizState.idx + 1) / n) * 100}%`;
    advanceTimer = setTimeout(() => {
      quizState.idx += 1;
      if (quizState.idx < n) {
        renderQuiz();
      } else {
        finishQuiz(n);
      }
    }, 1100);
  };

  const finishQuiz = (n) => {
    $("quizPanel").hidden = true;
    const result = $("quizResult");
    result.hidden = false;
    $("quizScoreNum").textContent = `${quizState.score}`;
    document.querySelector(".quiz-score-total").textContent = ` / ${n}`;
    const msg =
      quizState.score === n
        ? DATA.quiz.results.perfect
        : quizState.score >= n - 2
          ? DATA.quiz.results.good
          : DATA.quiz.results.low;
    $("quizMsg").textContent = msg;
    if (quizState.score === n) {
      const c = centerOf(result);
      burst(c.x, Math.max(c.y, 80), 120);
    }
  };

  const footerRotator = () => {
    if (DATA.footer.lines.length < 2 || RM) return;
    const line = $("footerLine");
    let idx = 0;
    setInterval(() => {
      line.classList.add("fading");
      setTimeout(() => {
        idx = (idx + 1) % DATA.footer.lines.length;
        line.textContent = DATA.footer.lines[idx];
        line.classList.remove("fading");
      }, 430);
    }, 7000);
  };

  const showGift = () => {
    const host = $("giftStars");
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 42; i++) {
      const dot = el("span");
      dot.style.left = `${rand(0, 100)}%`;
      dot.style.top = `${rand(0, 100)}%`;
      dot.style.width = `${rand(1, 2.6)}px`;
      dot.style.height = dot.style.width;
      dot.style.setProperty("--tw", `${rand(2, 4.2)}s`);
      dot.style.animationDelay = `${rand(0, 3)}s`;
      frag.appendChild(dot);
    }
    host.appendChild(frag);
    const field = $("starfield");
    const frag2 = document.createDocumentFragment();
    for (let i = 0; i < 60; i++) {
      const dot = el("span");
      dot.style.left = `${rand(0, 100)}%`;
      dot.style.top = `${rand(0, 72)}%`;
      dot.style.width = `${rand(1, 2.4)}px`;
      dot.style.height = dot.style.width;
      dot.style.setProperty("--tw", `${rand(2, 4.2)}s`);
      dot.style.animationDelay = `${rand(0, 3)}s`;
      frag2.appendChild(dot);
    }
    field.appendChild(frag2);
    const hearts = $("floatHearts");
    const frag3 = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
      const span = el("span");
      span.style.left = `${rand(3, 94)}%`;
      span.style.setProperty("--s", `${rand(14, 30)}px`);
      span.style.setProperty("--fh", `${rand(7, 13)}s`);
      span.style.animationDelay = `${rand(-9, 0)}s`;
      span.appendChild(svgUse("i-heart", "ic ic-fill"));
      frag3.appendChild(span);
    }
    hearts.appendChild(frag3);
  };

  const openGift = () => {
    const gift = $("gift");
    const box = $("giftBox");
    if (gift.classList.contains("is-leaving")) return;
    box.setAttribute("aria-expanded", "true");
    box.classList.add("is-burst");
    const c = centerOf(box);
    burst(c.x, c.y, 110);
    setTimeout(() => {
      gift.classList.add("is-leaving");
      document.body.classList.remove("is-locked");
      const site = $("site");
      site.hidden = false;
      initReveals();
      window.setTimeout(() => gift.remove(), 900);
    }, 600);
  };

  applyStaticData();
  showGift();
  initCounter();
  footerRotator();

  $("giftBox").addEventListener("click", openGift);
  $("quizReplay").addEventListener("click", () => {
    clearTimeout(advanceTimer);
    quizState.idx = 0;
    quizState.score = 0;
    $("quizResult").hidden = true;
    $("quizPanel").hidden = false;
    renderQuiz();
  });
  $("againBtn").addEventListener("click", () => {
    const c = centerOf($("againBtn"));
    burst(Math.min(window.innerWidth - 20, Math.max(20, c.x)), Math.max(40, c.y - 40), 90);
  });

  renderQuiz();
})();
