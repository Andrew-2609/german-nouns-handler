# German Nouns Handler

This repository aims to convert the German nouns present in [BEOLINGUS, TU Chemnitz](https://dict.tu-chemnitz.de/)'s website downloadable files to a `.json` file, in order to organize them by gender and respective article.

I'm doing this because later I have plans to create an API to find out a German noun's gender in the simplest way possible, and the generated `.json` file of this project will be the basis of my database.

--- 

### Input files

The input files of this experiment are inside the `input-files` directory. There `de-en.txt` is the original file containing thousands of lines, and the `de-en-sample.txt` is a short version of it, in order to make my tests without having to wait for minutes.

### How does it work

It reads the input file and uses *regex* to find the nouns and their respective genders (based on {m}, {f} and {n} marks).

The regex is not 100% accurate, but for my personal purposes it works just fine. Feel fee to improve it!

**I didn't search for any plural words because they are all feminine in German**

### How to use it

It's very simple. You will simply run `node src` passing the following arguments:
  * -i: the input file path
  * -o: the output file path

You don't even have to run `yarn install`, since this project doesn't have any dependencies.

I've put an empty `formatted-nouns.json` file in the `output/` directory, but feel free to specify your input and output file paths.

### Finally

This is my first project using the `GPL-03` license. I hope I didn't do anything wrong, but you can contact me in my email in any case.

Thanks for visiting this repository, and I hope it'll be useful to you somehow. See ya!