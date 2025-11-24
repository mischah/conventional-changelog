// Import CSS
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

// Import Markdown file to trigger HMR
import slidesUrl from './slides.md?url';

// Import JS
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({
  plugins: [Markdown, Highlight, Notes],
  hash: true,
  slideNumber: true,
  transition: 'slide',
  markdown: {
    smartypants: true
  }
});

deck.initialize();
