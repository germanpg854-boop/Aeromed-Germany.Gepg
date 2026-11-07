# AeroMed Germany website

This is the complete editable website source. It is a static site designed for GitHub Pages and does not need a database or administrator login.

## Main files

- `index.html` — homepage and navigation
- `language.html`, `approbation.html`, `exams.html`, `residency.html` — learning guides
- `documents.html` — buttons for the Google Drive folder and Google Form
- `links-config.js` — the two share links; replace the empty values once you have them
- `styles.css` — colors, layout and mobile styling
- `script.js` and `links.js` — menu, copyright year and link behavior
- `assets/` — logo and favicon files
- `robots.txt`, `sitemap.xml`, `404.html` — search and not-found support

## Change your Drive and Google Forms URLs

1. Open `links-config.js` in a text editor.
2. Replace the URL between the quotes after `drive:` with your Drive folder link.
3. Replace the URL between the quotes after `form:` with your Google Form link.
4. Save the file and upload it to your GitHub repository along with the rest of the website files.

The current links are already set. The format looks like this:

```js
window.AEROMED_LINKS = {
  drive: "https://drive.google.com/drive/folders/your-folder-id",
  form: "https://forms.gle/your-form-id"
};
```

Share access settings in Google Drive and Google Forms determine who can view documents or submit the form.

## Upload or update the website on GitHub

1. Download and unzip the website ZIP.
2. Open your GitHub repository in a browser.
3. Choose **Add file → Upload files**.
4. Upload the contents of the `aeromed-germany-website` folder, keeping the files and `assets` folder together at the repository root.
5. Choose **Commit changes**. GitHub Pages will publish the update using the repository's existing setup and address.

To change wording, edit the relevant `.html` page. To change colors or layout, edit `styles.css`. The founder and co-founder text is in the Meet the Founders section of `index.html`.

## Contact details

- Email: germanpg854@gmail.com
- Instagram: https://www.instagram.com/germanpg854/
- Tagline: GLOBAL PATHWAY. GERMAN RESIDENCY.

No Supabase key, password, or other secret belongs in this website's frontend files.
