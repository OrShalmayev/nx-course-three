const {readdir, readFile, writeFile} = require('fs');
const {load} = require('cheerio');
const path = require('path');

const dirname = path.resolve();
const SVG_DIR_RELATIVE_PATH = '/src/svg-icons';
const svgDirPath = path.join(dirname, SVG_DIR_RELATIVE_PATH);

readdir(svgDirPath, (err, folders) => {
  const withoutHiddenFolders = folders.filter(folder => folder.startsWith('.') === false);

  try {
    if (err) throw err;

    withoutHiddenFolders.forEach(folderName => {
      const folderPath = `${svgDirPath}/${folderName}`
      readdir(folderPath, (err, files) => {
        if (err) throw err;

        for (const file of files) {
          if (isSvg(file)) {
            const filePath = `${folderPath}/${file}`;
            fixSvg(filePath);
          }
        }
      })
    })
  } catch (err) {
    handleError(err);
  }
})

const isSvg = (file) => {
  return file.endsWith('.svg')
}

const fixSvg = (filePath) => {
  try {
    readFile(filePath, 'utf8', (err, svgData) => {
      if (err) throw err;

      // Load the SVG content into cheerio
      const $ = load(svgData, {xmlMode: true});

      $('svg').attr('width', '1em').attr('height', '1em');

      if ($('path[fill]').length <= 1) {
        const pathFill = $('path').attr('fill');
        if (pathFill) {
          $('svg').attr('fill', pathFill);
        }
        $('path').removeAttr('fill');
      }

      // Get the modified SVG content as a string
      const newSVG = $.xml();

      writeFile(filePath, newSVG, 'utf8', (err) => {
        if (err) throw err;
      });
    })
  } catch (err) {
    handleError(err);
  }
}

const handleError = (error) => {
  console.error(error);
}
