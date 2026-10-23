# For Bibi 🩵

A tiny love-gift website built by Nash for Erika. Pure HTML/CSS/JS — no installs needed.

## Open it locally
Just double-click `index.html`. It opens in your browser.

## Where everything lives (all in `data.js`)
| Want to change | Look for |
|---|---|
| Names, callsigns, hero text | `gift:` and `hero:` |
| The live counter start date | `anniversaryISO:` |
| Timeline moments | `timeline.entries:` |
| Photo setup + scatter (tilt/lift) | `gallery.items:` |
| The love letter | `letter.paragraphs:` |
| Saved chat bubbles | `chat:` |
| Footer rotating lines | `footer.lines:` |
| The 10 reasons | `reasons.items:` |
| Quiz questions + which option is correct (`answer` counts from 0) | `quiz.questions:` |

## Add real photos
1. Drop your photos into the `photos/` folder (simple names like `photo1.jpg`).
2. In `data.js`, find a `gallery.items` line and set its `src`:
   `{ art: "art-sky", motif: "heart", src: "photos/photo1.jpg", tilt: 3, lift: 12 }`
3. Refresh the browser — done. (Photos show with no text on them.)

## Deployed
Hosted on GitHub Pages at: https://meriiieri.github.io/love-website/
(Any push to this repo updates the site automatically.)
