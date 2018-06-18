#!/usr/bin/env node
const program = require('commander');
const pjson = require('./package.json');
const VideoCrop = require('video-crop').default;

function numList(val) {
  return val.split(',').map(function(i) {
    return parseInt(i);
  });
}

program
  .version(pjson.version)
  .usage('[options] <inputFile> <outputFile>')
  .option('-x, --xstart <xItems>', 'Comma separated x start point values for outputs', numList)
  .option('-y, --ystart <yItems>', 'Comma separated y start point values for outputs', numList)
  .option('-w, --width <widthItems>', 'Comma separated width values for outputs', numList)
  .option('-h, --height <heightItems>', 'Comma separated height values for outputs', numList)
  .option('-f, --fps <fps>', 'Frames Per Second on output video(s)')
  .arguments('<inputFile> <outputFile>')
  .action(function(inputFile, outputFile, cmd) {
    const opts = {
      input: inputFile,
      output: outputFile,
      x: cmd.xstart,
      y: cmd.ystart,
      width: cmd.width,
      height: cmd.height
    };

    if(cmd.fps) {
      opts.fps = cmd.fps;
    }

    const vc = new VideoCrop(opts);

    vc.run();
  });

program.parse(process.argv);