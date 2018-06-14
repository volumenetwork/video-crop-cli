# video-crop-cli

ClI for video-crop

## Install

`npm install --global video-crop-cli`

or 

`yarn global add video-crop-cli`
 
## Usage

```
$ video-crop --help

  Usage: index [options] <inputFile> <outputFile>

  Options:

    -V, --version               output the version number
    -x, --xstart <xItems>       Comma separated x start point values for outputs
    -y, --ystart <yItems>       Comma separated y start point values for outputs
    -w, --width <widthItems>    Comma separated width values for outputs
    -h, --height <heightItems>  Comma separated hiehgt values for outputs
    -h, --help                  output usage information

```


### Example

`video-crop -x 0,400 -y 0,400 -w 400,600 -h 400,600 ~/input.mp4 ~/output.mp4`

In this example you will end with two new files: `~/output1.mp4` and `~/output2.mp4`