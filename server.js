#!/usr/bin/env node

/**
 * Express server for OpenClaw Space Documentation
 * Uses ES Modules
 */

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const README_PATH = path.join(__dirname, 'README.md');
const DOCS_PATH = path.join(__dirname, 'public', 'docs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve docsify
app.use('/docs', express.static(DOCS_PATH));

// API: Get README.md content
app.get('/api/readme', (req, res) => {
  try {
    const content = fs.readFileSync(README_PATH, 'utf8');
    res.type('text/markdown').send(content);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Redirect root to docsify
app.get('/', (req, res) => {
  res.redirect('/docs/');
});

// Start server
app.listen(PORT, () => {
  console.log(`
🚀 OpenClaw Space Docs Server
   
   📄 Docs:     http://localhost:${PORT}/docs/
   📄 API:     http://localhost:${PORT}/api/readme
   
   Powered by docsify
   Press Ctrl+C to stop
  `);
});
