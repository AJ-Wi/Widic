module.exports = `\x1b[34mwidic - a simple dictionary\x1b[0m
\x1b[34m***************************\x1b[0m
A simple implementation to consume the API from https://www.dictionaryapi.com/

\x1b[32mUsage:\x1b[0m
\x1b[32m======\x1b[0m
    widic [options] [input] [arguments]

\x1b[32mOptions:\x1b[0m
\x1b[32m--------\x1b[0m
    -h, --help                      print widic command line options (currently set)
    -v, --version                   print widic version
    -s, --silent                    silent mode (no output) (default: false)
    -t, --translate                 translate text (default: false)

\x1b[32minput:\x1b[0m
\x1b[32m------\x1b[0m
    -w, --word <word>               the word to get data for (default: "hello")
    -f, --file <file>               the file to get data for (must be a JSON file)

\x1b[32mArguments:\x1b[0m
\x1b[32m----------\x1b[0m
    -l, --length <length>           the number of words to search for (default: array length)
    -of, --output-file              output file (default: ./widic-output.json)
    -oa, --output-audio             download audio files (default: ./)
`;
